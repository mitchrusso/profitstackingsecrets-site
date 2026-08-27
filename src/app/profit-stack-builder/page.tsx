import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BarChart3, CheckCircle2, ClipboardList, Layers3, Mail, Sparkles } from "lucide-react";
import { absoluteUrl, breadcrumbJsonLd, jsonLd, pageMetadata, siteName } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Profit Stack Builder App",
  description:
    "A guided Profit Stacking Secrets implementation app concept that turns the free report into a scored action plan, ROI model, and weekly execution path.",
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

const upsellPath = [
  "Download the free report and learn the Profit Stacking idea.",
  "Use the Profit Stack Builder to turn the idea into a scored action plan.",
  "Upgrade to the full book and spreadsheet package when you want deeper worksheets, examples, and tracking.",
  "Request strategy help only if implementation support would save time or prevent expensive detours.",
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
          "A guided implementation workspace for entrepreneurs applying the Profit Stacking Secrets framework.",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/PreOrder",
          price: "0",
          priceCurrency: "USD",
          description: "Early-access concept page. Final pricing has not been published.",
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
            Profit Stack Builder is the natural next step after the PDF: a guided app that helps entrepreneurs diagnose the highest-value leak, choose a strategy, and build a 90-day execution plan.
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

        <section className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#19745d]">
              Upsell architecture
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Keep the free report generous. Make the app the implementation bridge.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#596661]">
              The report creates belief. The app creates motion. The full book and spreadsheet package can then serve people who want a more complete operating system for tracking their profit stack over time.
            </p>
          </div>
          <ol className="grid gap-3 rounded-lg border border-[#dfe5dc] bg-white p-6 shadow-sm">
            {upsellPath.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-md bg-[#f5f6f2] p-4 text-sm font-bold leading-7 text-[#596661]">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#19745d]" aria-hidden />
                <span>
                  <span className="mr-2 text-[#19745d]">{index + 1}.</span>
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-lg border border-[#dfe5dc] bg-[#fffdf7] p-6 shadow-sm">
          <Sparkles className="h-7 w-7 text-[#19745d]" aria-hidden />
          <h2 className="mt-4 text-2xl font-black">Suggested follow-up sequence</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              ["Immediately", "Deliver the PDF and point to the calculator or app waitlist as the next step."],
              ["Day 2", "Ask which profit leak felt most expensive: follow-up, offer clarity, client expansion, delivery, or leverage."],
              ["Day 4", "Share one short example of a business finding profit without adding traffic."],
              ["Day 7", "Invite them into Profit Stack Builder early access or the full book/spreadsheet package."],
            ].map(([timing, copy]) => (
              <div key={timing} className="rounded-md border border-[#dfe5dc] bg-white p-5">
                <h3 className="font-black">{timing}</h3>
                <p className="mt-2 text-sm leading-7 text-[#596661]">{copy}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
