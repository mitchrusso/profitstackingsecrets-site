import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ClipboardCheck, FileSpreadsheet, SearchCheck } from "lucide-react";
import { offerCategories } from "@/lib/offers";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Partner Listing Resources",
  description: "Resources for Profit Stacking Secrets partner submissions, category strategy, page requirements, and spreadsheet-to-page publishing.",
  path: "/resources",
});

const workflow = [
  "Partner completes the Google Form with offer copy, pricing, commission, links, and image assets.",
  "Responses land in the linked Google Sheet for review and cleanup.",
  "Approved rows are converted into category pages and individual offer pages.",
  "The sitemap updates so Google can discover the new approved pages.",
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] px-5 py-14 text-[#172424]">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f6f5b]">Resources</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">How partner submissions become published offer pages.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#596661]">This section explains the publishing workflow and gives Google a clear, crawlable context for the curated marketplace.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm"><FileSpreadsheet className="h-7 w-7 text-[#1f6f5b]" aria-hidden /><h2 className="mt-4 text-xl font-black">Form to sheet</h2><p className="mt-3 text-sm leading-7 text-[#596661]">The intake form collects the details needed to avoid thin listings and build useful partner pages.</p></div>
          <div className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm"><ClipboardCheck className="h-7 w-7 text-[#1f6f5b]" aria-hidden /><h2 className="mt-4 text-xl font-black">Curation review</h2><p className="mt-3 text-sm leading-7 text-[#596661]">Submissions can be reviewed for fit, clarity, claims, assets, commission terms, and buyer relevance.</p></div>
          <div className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm"><SearchCheck className="h-7 w-7 text-[#1f6f5b]" aria-hidden /><h2 className="mt-4 text-xl font-black">SEO pages</h2><p className="mt-3 text-sm leading-7 text-[#596661]">Approved offers become searchable pages linked from category hubs and included in the sitemap.</p></div>
        </div>

        <section className="mt-12 rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black">Publishing workflow</h2>
          <ol className="mt-5 grid gap-3">
            {workflow.map((step, index) => <li key={step} className="rounded-md bg-[#fffdf7] p-4 text-sm font-bold leading-7 text-[#596661]"><span className="mr-2 text-[#1f6f5b]">{index + 1}.</span>{step}</li>)}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Current category structure</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {offerCategories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="group rounded-lg border border-[#ded7c9] bg-white p-5 shadow-sm hover:border-[#1f6f5b]">
                <h3 className="text-lg font-black group-hover:text-[#1f6f5b]">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#596661]">{category.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#1f6f5b]">Open category <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
