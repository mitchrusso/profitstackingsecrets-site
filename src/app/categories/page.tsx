import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { offerCategories } from "@/lib/offers";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Business Growth Offer Categories",
  description: "Browse curated Profit Stacking Secrets categories for sales, AI, operations, leadership, profitability, coaching, SaaS, courses, events, and more.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#172424]">
      <header className="border-b border-[#ded7c9] bg-[#fffdf7]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Profit Stacking Secrets home">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-[#1f6f5b] text-white"><BriefcaseBusiness className="h-5 w-5" aria-hidden /></span>
            <span className="text-lg font-black tracking-tight">Profit Stacking Secrets</span>
          </Link>
          <Link href="/submit" className="rounded-md bg-[#172424] px-4 py-3 text-sm font-black text-white">Submit Offer</Link>
        </div>
      </header>
      <section className="bg-[#14251f] px-5 py-14 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8ee1bf]">Categories</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">Browse the opportunity stacks we can promote.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e8f3ee]">Each page is structured for buyer intent, partner submissions, comparison content, and internal linking.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {offerCategories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="group overflow-hidden rounded-lg border border-[#ded7c9] bg-white shadow-sm hover:border-[#1f6f5b]">
              <div className="relative h-48">
                <Image src={category.image} alt={category.name} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-black group-hover:text-[#1f6f5b]">{category.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[#596661]">{category.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#1f6f5b]">Open category <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
