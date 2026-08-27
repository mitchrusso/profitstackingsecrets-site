import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BarChart3, ClipboardList, Layers3, Mail } from "lucide-react";
import { absoluteUrl, breadcrumbJsonLd, jsonLd, pageMetadata, siteName } from "@/lib/seo";
import ProfitStackBuilderApp from "./ProfitStackBuilderApp";

export const metadata: Metadata = pageMetadata({
  title: "Profit Stack Builder App",
  description:
    "Use the Profit Stack Builder app to turn the Profit Stacking Secrets book and spreadsheet framework into a scored 90-day action plan.",
  path: "/profit-stack-builder",
});

const appFlow = [
  {
    title: "Business Snapshot",
    copy: "Capture the offer, audience, pricing, sales process, delivery model, and current bottlenecks in one clean intake.",
    icon: ClipboardList,
  },
  {
    title: "Profit Leak Diagnostic",
    copy: "Score follow-up, offer clarity, client expansion, delivery leverage, referrals, pricing, and implementation capacity.",
    icon: BarChart3,
  },
  {
    title: "Strategy Builder",
    copy: "Turn the scores into a short list of practical profit-stack moves that can be tested over the next 90 days.",
    icon: Layers3,
  },
];

export default function ProfitStackBuilderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/profit-stack-builder")}#webpage`,
        url: absoluteUrl("/profit-stack-builder"),
        name: `Profit Stack Builder App | ${siteName}`,
        description: metadata.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${absoluteUrl("/profit-stack-builder")}#app`,
        name: "Profit Stack Builder",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "A guided implementation workspace for entrepreneurs applying the Profit Stacking Secrets financial tracking and self-assessment framework.",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/OnlineOnly",
          price: "0",
          priceCurrency: "USD",
          description: "Free interactive diagnostic and 90-day planning tool.",
        },
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Profit Stack Builder", path: "/profit-stack-builder" },
      ]),
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f6f2] text-[#172424]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <section className="border-b border-[#dfe5dc] bg-[#10231f] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl">
          <Link href="/book" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-[#8ee1bf]">
            Free report path <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] sm:text-6xl">
            Turn the free report into a profit action plan.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dcefe7]">
            Profit Stack Builder converts the book’s financial tracking and self-assessment sections into a guided diagnostic, priority score, and practical 90-day implementation plan.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/book" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#28a37d] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-[#218865]">
              Get the Free Report <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-white/20">
              Ask About Early Access <Mail className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {appFlow.map((step) => (
            <article key={step.title} className="rounded-lg border border-[#dfe5dc] bg-white p-6 shadow-sm">
              <step.icon className="h-7 w-7 text-[#19745d]" aria-hidden />
              <h2 className="mt-5 text-2xl font-black">{step.title}</h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#596661]">{step.copy}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <ProfitStackBuilderApp />
        </div>
      </section>
    </main>
  );
}
