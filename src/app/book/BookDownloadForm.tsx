"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Download, MailCheck } from "lucide-react";

type SubmitState = "idle" | "sending" | "sent" | "error";

export default function BookDownloadForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const response = await fetch("/api/book-download", {
      method: "POST",
      body: new FormData(form),
    });
    const result = await response.json().catch(() => null);

    if (response.ok) {
      form.reset();
      setDownloadUrl(result?.downloadUrl || "/downloads/profit-stacking-secrets-by-mitch-russo.pdf");
      setSubmitState("sent");
      return;
    }

    setErrorMessage(result?.error || "We could not send the guide. Please try again.");
    setSubmitState("error");
  }

  return (
    <section className="mt-8 rounded-lg border border-[#cbd8cf] bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-[#e8f7f0] text-[#19745d]">
          <Download className="h-5 w-5" aria-hidden />
        </div>
        <div>
          <h2 className="text-xl font-black leading-tight">Get the guide.</h2>
          <p className="mt-2 text-sm leading-6 text-[#596661]">
            Enter your details and we will email the Profit Stacking Secrets PDF to you.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <label className="block">
          <span className="text-xs font-black uppercase tracking-[0.12em] text-[#40514b]">Name</span>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            className="mt-2 min-h-12 w-full rounded-md border border-[#cbd8cf] bg-white px-4 text-base outline-none transition focus:border-[#19745d] focus:ring-4 focus:ring-[#19745d]/10"
          />
        </label>

        <label className="block">
          <span className="text-xs font-black uppercase tracking-[0.12em] text-[#40514b]">Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="mt-2 min-h-12 w-full rounded-md border border-[#cbd8cf] bg-white px-4 text-base outline-none transition focus:border-[#19745d] focus:ring-4 focus:ring-[#19745d]/10"
          />
        </label>

        {submitState === "sent" && (
          <div className="rounded-md border border-[#bde7d5] bg-[#e8f7f0] px-4 py-3 text-sm font-bold leading-6 text-[#0e7a5f]">
            <p className="flex gap-2">
              <MailCheck className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
              The guide was requested. Please check your inbox.
            </p>
            {downloadUrl && (
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 underline">
                Open the PDF now <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        )}

        {submitState === "error" && (
          <p className="rounded-md border border-[#f0c9bf] bg-[#fff0ec] px-4 py-3 text-sm font-bold text-[#9b3d2a]">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={submitState === "sending"}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#19745d] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#155f4d] disabled:cursor-not-allowed disabled:bg-[#7fa89b]"
        >
          {submitState === "sending" ? "Sending..." : "Email Me the Guide"}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </form>
    </section>
  );
}
