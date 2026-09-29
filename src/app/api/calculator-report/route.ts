import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enrollTinyEmailSubscriber } from "@/lib/tinyemail";

export const runtime = "nodejs";

const genericSendError = "We could not request your report right now. Please try again in a few minutes.";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Profit Stacking Secrets <onboarding@resend.dev>";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://profitstackingsecrets.com";
const isResendTestSender = fromEmail.includes("onboarding@resend.dev");

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 6;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return request.headers.get("cf-connecting-ip") || request.headers.get("x-real-ip") || forwardedFor || "unknown";
}

function isRateLimited(request: Request) {
  const key = getClientIp(request);
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function recommendation(score: number) {
  if (score <= 10) {
    return {
      title: "Start with visibility.",
      copy: "Your biggest gain is likely in basic measurement and follow-up. Tighten the weekly numbers, define one best offer, and make sure every qualified lead receives a clear next step.",
    };
  }

  if (score <= 17) {
    return {
      title: "Systemize the obvious gaps.",
      copy: "You probably have useful assets already, but they need cleaner packaging, repeatable follow-up, and a better handoff from interest to implementation.",
    };
  }

  return {
    title: "Look for leverage and expansion.",
    copy: "Your fundamentals are in place. The next profit stack is likely client expansion, partnerships, licensing, certification, or delivery leverage.",
  };
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const honey = clean(formData.get("_honey"));

  if (honey) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(request)) {
    return NextResponse.json({ error: "Too many requests were sent. Please wait a few minutes and try again." }, { status: 429 });
  }

  const firstName = clean(formData.get("firstName"));
  const email = clean(formData.get("email"));
  const totalScore = clean(formData.get("totalScore"));
  const weakestLever = clean(formData.get("weakestLever"));
  const scoreNumber = Number(totalScore);
  const safeScore = Number.isFinite(scoreNumber) ? scoreNumber : 0;
  const result = recommendation(safeScore);

  if (!firstName || !email) {
    return NextResponse.json({ error: "Please enter your first name and email address." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Calculator report is missing RESEND_API_KEY.");
    return NextResponse.json({ error: genericSendError }, { status: 503 });
  }

  try {
    const response = await enrollTinyEmailSubscriber({
      firstName,
      lastName: "",
      email,
    });

    if (!response.ok) {
      const responseText = await response.text();
      console.error("TinyEmail calculator report enrollment failed", response.status, responseText.slice(0, 500));
      return NextResponse.json({ error: genericSendError }, { status: 502 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY.trim());
    const safeFirstName = escapeHtml(firstName);
    const safeWeakestLever = escapeHtml(weakestLever || "your lowest-scoring lever");
    const safeTitle = escapeHtml(result.title);
    const safeCopy = escapeHtml(result.copy);
    const builderUrl = new URL("/profit-stack-builder", siteUrl).toString();
    const categoriesUrl = new URL("/categories", siteUrl).toString();

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: email,
      ...(isResendTestSender ? {} : { replyTo: "mitchrusso@gmail.com" }),
      subject: "Your Profit Stack Calculator Report",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #172424;">
          <h1>Your Profit Stack Calculator Report</h1>
          <p>Hi ${safeFirstName},</p>
          <p>Your score is <strong>${safeScore}/25</strong>.</p>
          <p>Your first area to inspect is <strong>${safeWeakestLever}</strong>.</p>
          <h2>${safeTitle}</h2>
          <p>${safeCopy}</p>
          <p><strong>Next step:</strong> turn this into a short implementation plan.</p>
          <p><a href="${builderUrl}">Open the Profit Stack Builder</a></p>
          <p><a href="${categoriesUrl}">Browse next-step resources</a></p>
        </div>
      `,
      text: `Your Profit Stack Calculator Report\n\nHi ${firstName},\n\nYour score is ${safeScore}/25.\nYour first area to inspect is ${weakestLever || "your lowest-scoring lever"}.\n\n${result.title}\n${result.copy}\n\nNext step: turn this into a short implementation plan.\nProfit Stack Builder: ${builderUrl}\nResources: ${categoriesUrl}`,
    });

    if (error) {
      console.error("Resend calculator report error", error);
      return NextResponse.json({ error: genericSendError }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      report: {
        totalScore,
        weakestLever,
      },
    });
  } catch (error) {
    console.error("TinyEmail calculator report enrollment error", error);
    return NextResponse.json({ error: genericSendError }, { status: 502 });
  }
}
