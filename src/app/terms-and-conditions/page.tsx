import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "Terms and Conditions for using Profit Stacking Secrets partner offer pages, categories, resources, and affiliate links.",
  path: "/terms-and-conditions",
});

const sections = [
  { title: "Use of this site", body: "Profit Stacking Secrets provides general information, curated category pages, partner offer pages, resource pages, and affiliate or referral links related to business growth offers." },
  { title: "No professional advice", body: "Content on this site is for general informational purposes only. It is not business, financial, legal, tax, compliance, medical, or professional advice." },
  { title: "Affiliate links", body: "Profit Stacking Secrets may participate in affiliate, referral, partner, or revenue-share programs. We may earn commissions from qualifying purchases, applications, or enrollments made through links on this site." },
  { title: "Third-party offers", body: "Offer details, pricing, commissions, availability, proof, support, guarantees, and refund policies can change. Verify current information directly with the partner before buying or applying." },
  { title: "Limitation of liability", body: "To the fullest extent allowed by law, Profit Stacking Secrets is not liable for damages arising from your use of the site, reliance on site content, third-party websites, partner offers, purchases, applications, or business outcomes." },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] px-5 py-16 text-[#20292b]">
      <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-sm sm:p-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-[0.12em] text-[#1f6f5b]">Back to Profit Stacking Secrets</Link>
        <h1 className="mt-8 text-4xl font-black">Terms and Conditions</h1>
        <p className="mt-6 text-base leading-8 text-[#536166]">These Terms and Conditions govern your use of Profit Stacking Secrets. If you do not agree with these terms, please do not use this website.</p>
        <div className="mt-8 space-y-6">
          {sections.map((section) => <section key={section.title}><h2 className="text-2xl font-black">{section.title}</h2><p className="mt-3 text-base leading-8 text-[#536166]">{section.body}</p></section>)}
        </div>
      </article>
    </main>
  );
}
