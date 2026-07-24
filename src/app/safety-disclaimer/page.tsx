import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Business Disclaimer",
  description: "Important disclaimer for Profit Stacking Secrets partner offer pages, marketplace categories, and affiliate links.",
  path: "/safety-disclaimer",
});

export default function SafetyDisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]">
      <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#1f6f5b]">Back to Profit Stacking Secrets</Link>
        <h1 className="mt-8 text-4xl font-black">Business Disclaimer</h1>
        <p className="mt-6 text-base leading-8 text-[#536166]">Profit Stacking Secrets provides general information about third-party offers, partners, categories, and affiliate links. It is not legal, financial, medical, tax, compliance, investment, or professional advice.</p>
        <p className="mt-4 text-base leading-8 text-[#536166]">Always verify current pricing, scope, support, commission terms, guarantees, refund policy, eligibility, and claims directly with the partner before buying or applying.</p>
      </article>
    </main>
  );
}
