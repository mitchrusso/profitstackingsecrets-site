import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ClipboardList } from "lucide-react";
import { offerCategories } from "@/lib/offers";
import { pageMetadata } from "@/lib/seo";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfu-AnE-M3VePd0afZ7yM8VYm3m-Hcd6ACu8LhzlAKVbA3Pvg/viewform?usp=publish-editor";

export const metadata: Metadata = pageMetadata({
  title: "Submit a Partner Offer",
  description: "Submit your product, program, event, membership, service, or affiliate offer for consideration on Profit Stacking Secrets.",
  path: "/submit",
});

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] px-5 py-14 text-[#172424]">
      <article className="mx-auto max-w-4xl rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm sm:p-10">
        <Link href="/" className="text-sm font-black uppercase tracking-[0.14em] text-[#1f6f5b]">Profit Stacking Secrets</Link>
        <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">Submit your offer for a curated listing.</h1>
        <p className="mt-5 text-lg leading-8 text-[#596661]">Speakeasy members and invited partners can submit the details we need to create a strong category page and individual offer page.</p>
        <a href={formUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-[#172424] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white">
          Open submission form <ArrowRight className="h-4 w-4" aria-hidden />
        </a>
        <section className="mt-10">
          <h2 className="flex items-center gap-2 text-2xl font-black"><ClipboardList className="h-6 w-6 text-[#1f6f5b]" aria-hidden /> Categories we are accepting</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {offerCategories.map((category) => <Link key={category.slug} href={`/categories/${category.slug}`} className="rounded-md border border-[#ded7c9] bg-[#fffdf7] px-4 py-3 text-sm font-black hover:border-[#1f6f5b]">{category.name}</Link>)}
          </div>
        </section>
      </article>
    </main>
  );
}
