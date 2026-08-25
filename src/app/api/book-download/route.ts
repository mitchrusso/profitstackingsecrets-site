import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://profitstackingsecrets.com";
const toEmail = process.env.CONTACT_TO_EMAIL || "mitchrusso@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Profit Stacking Secrets <onboarding@resend.dev>";
const downloadPath = "/downloads/profit-stacking-secrets-by-mitch-russo.pdf";
const genericSendError = "We could not email the guide right now. Please try again in a few minutes.";
const isResendTestSender = fromEmail.includes("onboarding@resend.dev");

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 6;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

export async function POST(request: Request) {
  const formData = await request.formData();
  const honey = clean(formData.get("_honey"));

  if (honey) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(request)) {
    return NextResponse.json({ error: "Too many requests were sent. Please wait a few minutes and try again." }, { status: 429 });
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));

  if (!name || !email) {
    return NextResponse.json({ error: "Please enter your name and email address." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Book download form is missing RESEND_API_KEY.");
    return NextResponse.json({ error: genericSendError }, { status: 503 });
  }

  const resendApiKey = process.env.RESEND_API_KEY.trim();

  if (!resendApiKey.startsWith("re_")) {
    console.error("Book download form RESEND_API_KEY is not a valid Resend key format.");
    return NextResponse.json({ error: genericSendError }, { status: 503 });
  }

  const downloadUrl = new URL(downloadPath, siteUrl).toString();
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: email,
    bcc: toEmail,
    ...(isResendTestSender ? {} : { replyTo: toEmail }),
    subject: "Your Profit Stacking Secrets guide",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #18211f;">
        <h2>Your Profit Stacking Secrets guide is ready</h2>
        <p>Hi ${safeName},</p>
        <p>Here is the guide you requested:</p>
        <p><a href="${downloadUrl}" style="font-weight: 700; color: #0e7a5f;">Download Profit Stacking Secrets</a></p>
        <p>Use it to look for hidden profit in existing assets, follow-up, offers, delivery, and client expansion.</p>
        <hr style="border: 0; border-top: 1px solid #dfe5dc; margin: 24px 0;" />
        <p style="font-size: 13px; color: #596661;">Requested by ${safeEmail} at profitstackingsecrets.com.</p>
      </div>
    `,
    text: `Hi ${name},\n\nHere is the Profit Stacking Secrets guide you requested:\n${downloadUrl}\n\nUse it to look for hidden profit in existing assets, follow-up, offers, delivery, and client expansion.\n\nRequested by ${email} at profitstackingsecrets.com.`,
  });

  if (error) {
    console.error("Resend book download form error", error);
    return NextResponse.json({ error: genericSendError }, { status: 500 });
  }

  return NextResponse.json({ ok: true, downloadUrl });
}
