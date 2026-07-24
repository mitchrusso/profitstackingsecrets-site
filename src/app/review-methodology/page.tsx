import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Curation Methodology",
  description: "How Profit Stacking Secrets organizes partner submissions into useful category and offer pages.",
  path: "/review-methodology",
});

const criteria = [
  { title: "Category fit", body: "Each offer is placed into the clearest buyer-intent category so visitors can compare related opportunities without guessing." },
  { title: "Audience clarity", body: "Offer pages should explain who the offer is for, who should keep comparing, and what problem it is meant to solve." },
  { title: "Terms and assets", body: "Submissions should include pricing, commission structure, affiliate tracking rules, images, proof, and contact details when available." },
  { title: "Buyer verification", body: "Visitors are encouraged to verify current pricing, scope, support, guarantees, refunds, and eligibility with the partner before purchasing." },
];

export default function ReviewMethodologyPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]">
      <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#1f6f5b]">Back to Profit Stacking Secrets</Link>
        <h1 className="mt-8 text-4xl font-black">Curation Methodology</h1>
        <p className="mt-6 text-base leading-8 text-[#536166]">Profit Stacking Secrets organizes offers around business outcomes, buyer fit, implementation requirements, and the details buyers need before clicking through.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {criteria.map((item) => <section key={item.title} className="rounded-lg border border-[#ddd5c7] bg-[#f3f4f6] p-5"><h2 className="text-xl font-black">{item.title}</h2><p className="mt-3 text-base leading-8 text-[#536166]">{item.body}</p></section>)}
        </div>
      </article>
    </main>
  );
}
