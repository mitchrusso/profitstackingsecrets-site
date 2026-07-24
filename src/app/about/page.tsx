import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: "Learn about Profit Stacking Secrets, a curated marketplace of high-level business growth offers for entrepreneurs and operators.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#18211f]">
      <article className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#1f6f5b]">Back to Profit Stacking Secrets</Link>
        <h1 className="mt-8 text-4xl font-black">About Profit Stacking Secrets</h1>
        <p className="mt-6 text-base leading-8 text-[#5d6d66]">
          Profit Stacking Secrets helps entrepreneurs compare curated partner offers across sales, systems, AI, profitability, leadership, coaching, technology, digital products, and events.
        </p>
        <p className="mt-4 text-base leading-8 text-[#5d6d66]">
          The goal is to turn a mastermind network full of high-level offers into a useful, searchable marketplace where buyers can quickly understand fit, pricing, category, affiliate terms, and next steps.
        </p>
      </article>
    </main>
  );
}
