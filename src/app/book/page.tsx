import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpenCheck, CheckCircle2 } from "lucide-react";
import BookDownloadForm from "./BookDownloadForm";
import { absoluteUrl, jsonLd, pageMetadata, siteName } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Profit Stacking Secrets Book and Framework",
  description:
    "Explore the Profit Stacking Secrets framework for finding overlooked revenue, margin, follow-up, leverage, and implementation opportunities.",
  path: "/book",
});

const framework = [
  "Find existing assets that can create more value",
  "Identify revenue leaks before buying more traffic",
  "Stack follow-up, packaging, delivery, and retention improvements",
  "Choose a practical next step instead of chasing every tactic",
];

export default function BookPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/book")}#webpage`,
        url: absoluteUrl("/book"),
        name: `Profit Stacking Secrets Book | ${siteName}`,
        description: metadata.description,
      },
      {
        "@type": "Book",
        name: "Profit Stacking Secrets",
        author: { "@type": "Person", name: "Mitch Russo" },
        publisher: { "@type": "Organization", name: siteName },
        about: "Business profit improvement, revenue leverage, and entrepreneur growth strategy",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f6f2] text-[#172424]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-lg border border-[#dfe5dc] bg-white p-6 shadow-sm">
          <Image
            src="/images/profit-stacking-secrets-book-cover-v2.png"
            alt="Redesigned Profit Stacking Secrets book cover by Mitch Russo"
            width={1024}
            height={1536}
            className="mx-auto max-h-[760px] w-auto rounded-md object-contain shadow-xl"
            priority
          />
        </div>
        <div>
          <Link href="/" className="text-sm font-black uppercase tracking-[0.14em] text-[#19745d]">
            Profit Stacking Secrets
          </Link>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">The framework behind hidden profit.</h1>
          <p className="mt-6 text-lg leading-8 text-[#596661]">
            Profit Stacking Secrets gives entrepreneurs a cleaner way to think about growth: before adding more activity, look for the assets, follow-up, offers, relationships, systems, and delivery improvements that already exist inside the business.
          </p>
          <div className="mt-7 grid gap-3">
            {framework.map((item) => (
              <p key={item} className="flex gap-3 rounded-md border border-[#dfe5dc] bg-white p-4 text-sm font-bold leading-6 text-[#596661]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[#19745d]" aria-hidden />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/calculator" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#19745d] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-[#155f4d]">
              Use the Calculator <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/resources" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#cbd8cf] bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] hover:border-[#19745d]">
              Read Resources <BookOpenCheck className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <BookDownloadForm />
        </div>
      </section>
    </main>
  );
}
