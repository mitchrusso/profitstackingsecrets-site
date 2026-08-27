import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpenCheck, Calculator, Layers3, SearchCheck } from "lucide-react";
import { offerCategories } from "@/lib/offers";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Profit Strategy Resources",
  description: "Resources for using the Profit Stacking Secrets framework, calculator, category paths, and curated next-step offers.",
  path: "/resources",
});

const workflow = [
  "Read the framework so you know where profit commonly hides.",
  "Run the calculator to identify the weakest business lever.",
  "Use the Profit Stack Builder concept to turn the diagnosis into a 90-day plan.",
  "Choose a resource category that matches the gap.",
  "Use a practical tool, book, partner offer, or strategy conversation as the next step.",
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#f4f1ea] px-5 py-14 text-[#172424]">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f6f5b]">Resources</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">A simpler path from business gap to next step.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#596661]">Use these pages to understand the framework, diagnose profit leaks, and choose a practical improvement path.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/book" className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm hover:border-[#1f6f5b]"><BookOpenCheck className="h-7 w-7 text-[#1f6f5b]" aria-hidden /><h2 className="mt-4 text-xl font-black">Read the framework</h2><p className="mt-3 text-sm leading-7 text-[#596661]">Start with the core idea: hidden profit is often inside existing assets, offers, follow-up, and delivery systems.</p></Link>
          <Link href="/calculator" className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm hover:border-[#1f6f5b]"><Calculator className="h-7 w-7 text-[#1f6f5b]" aria-hidden /><h2 className="mt-4 text-xl font-black">Run the calculator</h2><p className="mt-3 text-sm leading-7 text-[#596661]">Score the five levers and locate the area most likely to produce a meaningful improvement.</p></Link>
          <Link href="/profit-stack-builder" className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm hover:border-[#1f6f5b]"><Layers3 className="h-7 w-7 text-[#1f6f5b]" aria-hidden /><h2 className="mt-4 text-xl font-black">Build the plan</h2><p className="mt-3 text-sm leading-7 text-[#596661]">Use the app concept to move from insight into a practical weekly implementation plan.</p></Link>
          <Link href="/categories" className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm hover:border-[#1f6f5b]"><SearchCheck className="h-7 w-7 text-[#1f6f5b]" aria-hidden /><h2 className="mt-4 text-xl font-black">Choose a path</h2><p className="mt-3 text-sm leading-7 text-[#596661]">Move from diagnosis into tools, books, templates, programs, and implementation options.</p></Link>
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
