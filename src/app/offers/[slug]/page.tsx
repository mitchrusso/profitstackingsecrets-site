import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Check, ExternalLink, ShieldCheck } from "lucide-react";
import { getCategoryBySlug, getOfferBySlug, getRelatedOffers, partnerOffers } from "@/lib/offers";
import { absoluteUrl, jsonLd, siteName } from "@/lib/seo";

type OfferPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return partnerOffers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({ params }: OfferPageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) return { title: "Offer Not Found" };
  return {
    title: `${offer.name} Review`,
    description: offer.summary,
    alternates: { canonical: `/offers/${offer.slug}` },
    openGraph: { title: `${offer.name} | ${siteName}`, description: offer.summary, url: absoluteUrl(`/offers/${offer.slug}`), images: [{ url: offer.image, alt: offer.name }] },
  };
}

export default async function OfferPage({ params }: OfferPageProps) {
  const { slug } = await params;
  const offer = getOfferBySlug(slug);
  if (!offer) notFound();
  const category = getCategoryBySlug(offer.categorySlug);
  const related = getRelatedOffers(offer);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${absoluteUrl(`/offers/${offer.slug}`)}#webpage`, url: absoluteUrl(`/offers/${offer.slug}`), name: offer.name, description: offer.summary },
      { "@type": "Article", headline: `${offer.name} Partner Offer Page`, description: offer.summary, image: offer.image, author: { "@id": absoluteUrl("/#organization") }, publisher: { "@id": absoluteUrl("/#organization") } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#172424]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <header className="border-b border-[#ded7c9] bg-[#fffdf7]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4">
          <Link href="/offers" className="inline-flex items-center gap-2 text-sm font-black text-[#1f6f5b]"><ArrowLeft className="h-4 w-4" aria-hidden /> Offers</Link>
          {category && <Link href={`/categories/${category.slug}`} className="text-sm font-black text-[#1f6f5b]">{category.name}</Link>}
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1fr_380px] lg:items-start">
        <article className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f6f5b]">{offer.offerType}</p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{offer.name}</h1>
          <p className="mt-5 text-xl font-bold leading-8 text-[#41504b]">{offer.tagline}</p>
          <p className="mt-5 text-base leading-8 text-[#596661]">{offer.summary}</p>

          {offer.status === "seed" && (
            <div className="mt-6 rounded-lg border border-[#eed7ac] bg-[#fff8e7] p-4 text-sm font-bold leading-7 text-[#735323]">
              This is a seed/template page showing how approved partner offers will be presented after spreadsheet review.
            </div>
          )}

          <section className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-lg bg-[#f4f1ea] p-5">
              <h2 className="text-xl font-black">Best fit</h2>
              <ul className="mt-4 space-y-3">
                {offer.idealFor.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-[#596661]"><Check className="mt-1 h-4 w-4 flex-none text-[#1f6f5b]" aria-hidden />{item}</li>)}
              </ul>
            </div>
            <div className="rounded-lg bg-[#f4f1ea] p-5">
              <h2 className="text-xl font-black">What it includes</h2>
              <ul className="mt-4 space-y-3">
                {offer.includes.map((item) => <li key={item} className="flex gap-2 text-sm leading-6 text-[#596661]"><Check className="mt-1 h-4 w-4 flex-none text-[#1f6f5b]" aria-hidden />{item}</li>)}
              </ul>
            </div>
          </section>

          <section className="mt-8 rounded-lg border border-[#ded7c9] p-5">
            <h2 className="text-xl font-black">Partner terms to show when approved</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div><dt className="text-xs font-black uppercase tracking-[0.12em] text-[#6b7771]">Price</dt><dd className="mt-1 font-bold">{offer.price}</dd></div>
              <div><dt className="text-xs font-black uppercase tracking-[0.12em] text-[#6b7771]">Commission</dt><dd className="mt-1 font-bold">{offer.commission}</dd></div>
              <div><dt className="text-xs font-black uppercase tracking-[0.12em] text-[#6b7771]">Partner</dt><dd className="mt-1 font-bold">{offer.partner}</dd></div>
              <div><dt className="text-xs font-black uppercase tracking-[0.12em] text-[#6b7771]">Category</dt><dd className="mt-1 font-bold">{category?.name ?? offer.categorySlug}</dd></div>
            </dl>
          </section>
        </article>

        <aside className="rounded-lg border border-[#ded7c9] bg-white p-5 shadow-sm">
          <div className="relative h-64 overflow-hidden rounded-md bg-[#e8e1d4]">
            <Image src={offer.image} alt={offer.name} fill sizes="380px" className="object-cover" priority />
          </div>
          <a href={offer.affiliateUrl} target="_blank" rel="sponsored nofollow noreferrer" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#172424] px-5 py-3 text-sm font-black text-white hover:bg-[#2d3f3f]">
            Open partner link <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
          <p className="mt-4 flex gap-2 text-xs font-semibold leading-5 text-[#596661]"><ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-[#1f6f5b]" aria-hidden />External links open in a new tab. Verify current pricing, terms, fit, and availability with the partner before buying.</p>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <h2 className="text-2xl font-black">Related offer pages</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {related.map((item) => <Link key={item.slug} href={`/offers/${item.slug}`} className="rounded-lg border border-[#ded7c9] bg-white p-5 font-black hover:border-[#1f6f5b]">{item.name}</Link>)}
        </div>
      </section>
    </main>
  );
}
