import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Affiliate Disclosure",
  description: "Affiliate disclosure for Profit Stacking Secrets partner offer pages, referral links, and curated marketplace links.",
  path: "/amazon-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]">
      <article className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#1f6f5b]">Back to Profit Stacking Secrets</Link>
        <h1 className="mt-8 text-4xl font-black">Affiliate Disclosure</h1>
        <p className="mt-6 text-base leading-8 text-[#536166]">
          Profit Stacking Secrets may earn referral, affiliate, or partner commissions when visitors click external links and purchase, apply for, or enroll in third-party offers.
        </p>
        <p className="mt-4 text-base leading-8 text-[#536166]">
          Affiliate relationships do not change the price you pay unless a partner explicitly provides a discount. Always verify current pricing, terms, guarantees, and offer details with the partner before buying.
        </p>
      </article>
    </main>
  );
}
