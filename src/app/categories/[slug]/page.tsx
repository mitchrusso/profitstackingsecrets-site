import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, Layers3, Route, SearchCheck, ShieldCheck } from "lucide-react";
import { getArticlesByCategory } from "@/lib/articles";
import { getCategoryBySlug, getOffersByCategory, offerCategories } from "@/lib/offers";
import { absoluteUrl, breadcrumbJsonLd, jsonLd, siteName } from "@/lib/seo";

type CategoryPageProps = { params: Promise<{ slug: string }> };
type DecisionCard = {
  title: string;
  copy: string;
  Icon: typeof Layers3;
};

const decisionCards: DecisionCard[] = [
  {
    title: "Problem fit",
    copy: "Match the offer to the business leak you are trying to repair first.",
    Icon: Layers3,
  },
  {
    title: "Implementation path",
    copy: "Look for proof, support, and a realistic next step before buying.",
    Icon: Route,
  },
  {
    title: "Terms check",
    copy: "Confirm current pricing, commission terms, guarantees, and eligibility with the provider.",
    Icon: ShieldCheck,
  },
];

export function generateStaticParams() {
  return offerCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Category Not Found" };
  return {
    title: `${category.name} Offers`,
    description: category.description,
    alternates: { canonical: `/categories/${category.slug}` },
    openGraph: {
      title: `${category.name} Offers | ${siteName}`,
      description: category.description,
      url: absoluteUrl(`/categories/${category.slug}`),
      images: [{ url: category.image, alt: category.name }],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const offers = getOffersByCategory(category.slug);
  const articles = getArticlesByCategory(category.slug);
  const categoryUrl = absoluteUrl(`/categories/${category.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${categoryUrl}#webpage`,
        url: categoryUrl,
        name: `${category.name} Offers`,
        description: category.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        inLanguage: "en-US",
        about: category.keywords,
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Categories", path: "/categories" },
        { name: category.name, path: `/categories/${category.slug}` },
      ]),
      {
        "@type": "ItemList",
        "@id": `${categoryUrl}#offers`,
        name: `${category.name} partner offers`,
        itemListElement: offers.map((offer, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/offers/${offer.slug}`),
          name: offer.name,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#172424]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <section className="relative overflow-hidden bg-[#14251f]">
        <Image src={category.image} alt={category.name} fill sizes="100vw" className="object-cover opacity-25" priority />
        <div className="absolute inset-0 bg-[#14251f]/75" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 py-14 text-white">
          <Link href="/categories" className="inline-flex items-center gap-2 text-sm font-black text-[#8ee1bf]"><ArrowLeft className="h-4 w-4" aria-hidden /> Categories</Link>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-[#8ee1bf]">{category.shortName}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{category.name} Offers</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e8f3ee]">{category.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <SearchCheck className="mt-1 h-7 w-7 flex-none text-[#1f6f5b]" aria-hidden />
            <div>
              <h2 className="text-2xl font-black">Buyer intent for this category</h2>
              <p className="mt-3 text-base leading-8 text-[#596661]">{category.buyerIntent}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-md border border-[#ded7c9] bg-[#fffdf7] px-3 py-2 text-xs font-black text-[#53615d]">{keyword}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {decisionCards.map(({ title, copy, Icon }) => (
            <div key={title} className="rounded-lg border border-[#ded7c9] bg-[#fffdf7] p-5 shadow-sm">
              <Icon className="h-6 w-6 text-[#1f6f5b]" aria-hidden />
              <h2 className="mt-3 text-lg font-black">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#596661]">{copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {offers.length > 0 ? offers.map((offer) => (
            <article key={offer.slug} className="rounded-lg border border-[#ded7c9] bg-white p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1f6f5b]">{offer.offerType}</p>
              <h2 className="mt-2 text-xl font-black">{offer.name}</h2>
              <p className="mt-3 text-sm leading-7 text-[#596661]">{offer.tagline}</p>
              <ul className="mt-4 space-y-2">
                {offer.idealFor.slice(0, 2).map((item) => <li key={item} className="flex gap-2 text-sm text-[#596661]"><Check className="mt-0.5 h-4 w-4 text-[#1f6f5b]" aria-hidden />{item}</li>)}
              </ul>
              <Link href={`/offers/${offer.slug}`} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#172424] px-4 py-2 text-sm font-black text-white hover:bg-[#2d3f3f]">View offer page <ArrowRight className="h-4 w-4" aria-hidden /></Link>
            </article>
          )) : (
            <div className="rounded-lg border border-dashed border-[#cbbfaa] bg-white p-8 md:col-span-2 xl:col-span-3">
              <h2 className="text-2xl font-black">No approved offers in this category yet.</h2>
              <p className="mt-3 text-[#596661]">This category is ready for partner submissions. Once spreadsheet rows are approved, pages can be generated here.</p>
              <Link href="/submit" className="mt-5 inline-flex min-h-11 items-center rounded-md bg-[#1f6f5b] px-4 py-2 text-sm font-black text-white">Submit an offer</Link>
            </div>
          )}
        </div>

        {articles.length > 0 && (
          <section className="mt-12">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f6f5b]">Related resources</p>
            <h2 className="mt-3 text-3xl font-black leading-tight">Learn before choosing a next step.</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {articles.map((article) => (
                <Link key={article.slug} href={`/resources/${article.slug}`} className="group rounded-lg border border-[#ded7c9] bg-white p-5 shadow-sm hover:border-[#1f6f5b]">
                  <h3 className="text-xl font-black group-hover:text-[#1f6f5b]">{article.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#596661]">{article.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#1f6f5b]">Read resource <ArrowRight className="h-4 w-4" aria-hidden /></span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}
