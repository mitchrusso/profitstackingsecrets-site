import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Editorial Policy",
  description: "How Profit Stacking Secrets reviews, organizes, discloses, and updates curated partner offer pages.",
  path: "/editorial-policy",
});

const principles = [
  "Offer pages should help buyers understand fit, not just click a link.",
  "Submissions are organized by category, outcome, audience, pricing, commission, proof, and implementation requirements.",
  "We avoid fake ratings, invented proof, unsupported guarantees, and exaggerated transformation claims.",
  "Affiliate or referral relationships are disclosed and do not remove the buyer's responsibility to verify current terms with the partner.",
];

export default function EditorialPolicyPage() {
  return <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]"><article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12"><Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#1f6f5b]">Back to Profit Stacking Secrets</Link><h1 className="mt-8 text-4xl font-black">Editorial Policy</h1><p className="mt-6 text-base leading-8 text-[#536166]">Profit Stacking Secrets exists to make high-level business offers easier to evaluate. The site emphasizes category fit, buyer intent, transparent terms, and practical next steps.</p><ul className="mt-6 space-y-3">{principles.map((item) => <li key={item} className="rounded-lg border border-[#ddd5c7] bg-[#f3f4f6] p-4 text-base leading-7 text-[#536166]">{item}</li>)}</ul></article></main>;
}
