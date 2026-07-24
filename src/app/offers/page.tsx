import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { getCategoryBySlug, partnerOffers } from "@/lib/offers";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Curated Partner Offers",
  description: "Browse curated Profit Stacking Secrets partner offer pages organized by business growth category.",
  path: "/offers",
});

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#172424]">
      <header className="border-b border-[#ded7c9] bg-[#fffdf7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
          <Link href="/" className="flex items-center gap-3"><BriefcaseBusiness className="h-6 w-6 text-[#1f6f5b]" aria-hidden /><span className="font-black">Profit Stacking Secrets</span></Link>
          <Link href="/categories" className="text-sm font-black text-[#1f6f5b]">Categories</Link>
        </div>
      </header>
      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f6f5b]">Offer Pages</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">Curated pages for partner offers.</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {partnerOffers.map((offer) => {
            const category = getCategoryBySlug(offer.categorySlug);
            return (
              <Link key={offer.slug} href={`/offers/${offer.slug}`} className="group rounded-lg border border-[#ded7c9] bg-white p-5 shadow-sm hover:border-[#1f6f5b]">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1f6f5b]">{category?.name ?? offer.offerType}</p>
                <h2 className="mt-3 text-xl font-black group-hover:text-[#1f6f5b]">{offer.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[#596661]">{offer.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#1f6f5b]">Open page <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
