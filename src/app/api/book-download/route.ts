import { NextResponse } from "next/server";

export const runtime = "nodejs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://profitstackingsecrets.com";
const downloadPath = "/downloads/profit-stacking-secrets-by-mitch-russo.pdf";
const appUpsellPath = "/profit-stack-builder";
const genericSendError = "We could not email the guide right now. Please try again in a few minutes.";
const tinyEmailAccountId = "e4ea2f69-5822-4136-a02b-d0045cabb18f";
const tinyEmailFormId = "60b78d12-156e-4698-a7e9-4e506738047f";
const tinyEmailSiteOrigin = process.env.TINYEMAIL_SITE_ORIGIN || "https://mitchrusso.com";
const tinyEmailFormReferer =
  process.env.TINYEMAIL_FORM_REFERER || "https://mitchrusso.com/profit-stacking-tinyemail-form-host/";
const tinyEmailEndpoint = `https://api-form.tinyemail.com/ext/formservice/form-provider/${tinyEmailAccountId}/${tinyEmailFormId}`;

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

  const downloadUrl = new URL(downloadPath, siteUrl).toString();
  const appUpsellUrl = new URL(appUpsellPath, siteUrl).toString();
  const nameParts = name.split(/\s+/).filter(Boolean);
  const firstName = nameParts.shift() || name;
  const lastName = nameParts.join(" ");

  try {
    const response = await fetch(tinyEmailEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: tinyEmailSiteOrigin,
        Referer: tinyEmailFormReferer,
      },
      body: JSON.stringify({ firstName, lastName, email }),
    });

    if (!response.ok) {
      const responseText = await response.text();
      console.error("TinyEmail book enrollment failed", response.status, responseText.slice(0, 500));
      return NextResponse.json({ error: genericSendError }, { status: 502 });
    }

    return NextResponse.json({ ok: true, downloadUrl, appUpsellUrl });
  } catch (error) {
    console.error("TinyEmail book enrollment error", error);
    return NextResponse.json({ error: genericSendError }, { status: 502 });
  }
}
