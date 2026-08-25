import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calculator, Mail } from "lucide-react";
import { absoluteUrl, jsonLd, pageMetadata, siteName } from "@/lib/seo";
import ProfitStackCalculator from "./ProfitStackCalculator";

export const metadata: Metadata = pageMetadata({
  title: "Profit Stack Calculator",
  description:
    "Use this simple diagnostic to identify hidden profit opportunities in lead follow-up, offer packaging, client expansion, delivery leverage, and profit visibility.",
  path: "/calculator",
});

export default function CalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/calculator")}#webpage`,
        url: absoluteUrl("/calculator"),
        name: `Profit Stack Calculator | ${siteName}`,
        description: metadata.description,
      },
      {
        "@type": "SoftwareApplication",
        name: "Profit Stack Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f6f2] px-5 py-14 text-[#172424]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <aside>
          <Link href="/" className="text-sm font-black uppercase tracking-[0.14em] text-[#19745d]">
            Profit Stacking Secrets
          </Link>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">Find your highest-value profit gap.</h1>
          <p className="mt-5 text-lg leading-8 text-[#596661]">
            Score five practical business levers. The goal is not precision; it is a sharper starting point for what to improve first.
          </p>
          <div className="mt-8 rounded-lg border border-[#dfe5dc] bg-white p-5 shadow-sm">
            <Calculator className="h-7 w-7 text-[#19745d]" aria-hidden />
            <h2 className="mt-4 text-xl font-black">How to use it</h2>
            <p className="mt-3 text-sm leading-7 text-[#596661]">
              Move each slider from weak to strong. Your lowest score is the first place to inspect for hidden profit.
            </p>
          </div>
          <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#172424] px-4 py-2 text-sm font-black text-white hover:bg-[#2d3f3f]">
            Discuss My Result <Mail className="h-4 w-4" aria-hidden />
          </Link>
        </aside>
        <ProfitStackCalculator />
      </section>
      <section className="mx-auto mt-12 max-w-7xl rounded-lg border border-[#dfe5dc] bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black">What to do after the calculator</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            ["Low follow-up score", "Build a faster lead response process and clearer next-step sequence."],
            ["Low offer score", "Clarify who the offer is for, what outcome it creates, and what happens next."],
            ["Low leverage score", "Look for reusable assets, templates, licensing, certification, or packaged delivery."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-md bg-[#f5f6f2] p-4">
              <h3 className="font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#596661]">{copy}</p>
            </div>
          ))}
        </div>
        <Link href="/categories" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#19745d]">
          Browse resource categories <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </section>
    </main>
  );
}
