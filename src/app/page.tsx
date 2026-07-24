import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Check, Compass, Handshake, SearchCheck, ShieldCheck, Sparkles } from "lucide-react";
import { getFeaturedOffers, offerCategories } from "@/lib/offers";
import { absoluteUrl, jsonLd, siteName } from "@/lib/seo";

const navItems = [
  { href: "/categories", label: "Categories" },
  { href: "/offers", label: "Offers" },
  { href: "/resources", label: "Resources" },
  { href: "/submit", label: "Submit Offer" },
  { href: "/contact", label: "Contact" },
];

const promiseCards = [
  "Curated partner offers, not random listings",
  "Affiliate terms and tracking details captured up front",
  "Category pages built for buyer intent",
];

export default function Home() {
  const featuredOffers = getFeaturedOffers(6);
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        name: `${siteName} | Curated Entrepreneur Offers`,
        description: "A curated marketplace for premium business growth offers submitted by trusted entrepreneurs, experts, and mastermind partners.",
        url: absoluteUrl("/"),
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/#categories"),
        name: "Profit Stacking Secrets offer categories",
        itemListElement: offerCategories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/categories/${category.slug}`),
          name: category.name,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#172424]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(homeJsonLd)} />
      <header className="sticky top-0 z-50 border-b border-[#ded7c9] bg-[#fffdf7]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Profit Stacking Secrets home">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-[#1f6f5b] text-white">
              <BriefcaseBusiness className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-lg font-black tracking-tight">Profit Stacking Secrets</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-black text-[#53615d] lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#1f6f5b]">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/submit" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#172424] px-4 py-2 text-sm font-black text-white hover:bg-[#2d3f3f]">
            <Handshake className="h-4 w-4" aria-hidden />
            Submit Offer
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#14251f]">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80"
          alt="Business owners reviewing growth opportunities together"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14251f] via-[#14251f]/88 to-[#14251f]/55" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:py-20">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#d4f3e7]">
              <Sparkles className="h-4 w-4" aria-hidden />
              Curated business growth marketplace
            </p>
            <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-[74px]">
              Stack better offers behind the next stage of your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e8f3ee]">
              Profit Stacking Secrets organizes high-level partner programs, tools, workshops, books, advisory offers, and implementation resources by the growth problem they solve.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/categories" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#2b9a78] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-[#237f64]">
                Explore Categories <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-white/20">
                Submit Partner Offer <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {promiseCards.map((card) => (
              <div key={card} className="rounded-lg border border-white/18 bg-white/10 p-4 text-white backdrop-blur">
                <Check className="h-5 w-5 text-[#8ee1bf]" aria-hidden />
                <p className="mt-3 text-sm font-black leading-6">{card}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#ded7c9] bg-[#fffdf7]">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f6f5b]">Offer Categories</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
                Give buyers a clean path to the kind of help they already want.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#596661]">
              Each category becomes an indexable hub for partner offers, buyer education, and internal links to approved submissions.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {offerCategories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="group min-h-[190px] rounded-lg border border-[#ded7c9] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1f6f5b] hover:shadow-md">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#e6f2ed] text-[#1f6f5b]">
                  <Compass className="h-5 w-5" aria-hidden />
                </span>
                <span className="mt-5 flex items-start justify-between gap-4">
                  <span className="text-lg font-black leading-tight text-[#172424] group-hover:text-[#1f6f5b]">{category.name}</span>
                  <ArrowRight className="mt-1 h-4 w-4 flex-none text-[#6b7771] group-hover:text-[#1f6f5b]" aria-hidden />
                </span>
                <span className="mt-3 block text-sm font-semibold leading-6 text-[#596661]">{category.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1f6f5b]">Featured Offer Pages</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Page templates ready for approved partner submissions.</h2>
          </div>
          <Link href="/offers" className="text-sm font-black text-[#1f6f5b] hover:text-[#174f42]">View all offers</Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredOffers.map((offer) => (
            <article key={offer.slug} className="overflow-hidden rounded-lg border border-[#ded7c9] bg-white shadow-sm">
              <div className="relative h-48 bg-[#e8e1d4]">
                <Image src={offer.image} alt={offer.name} fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#1f6f5b]">{offer.offerType}</p>
                <h3 className="mt-2 text-xl font-black leading-tight">{offer.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[#596661]">{offer.tagline}</p>
                <div className="mt-5 flex gap-2">
                  <Link href={`/offers/${offer.slug}`} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md border border-[#d4ccbf] px-4 py-2 text-sm font-black hover:border-[#1f6f5b]">
                    View Page
                  </Link>
                  <a href={offer.affiliateUrl} target="_blank" rel="sponsored nofollow noreferrer" className="inline-flex min-h-11 flex-1 items-center justify-center rounded-md bg-[#172424] px-4 py-2 text-sm font-black text-white hover:bg-[#2d3f3f]">
                    Partner Link
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fffdf7]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 lg:grid-cols-3">
          {[
            { icon: SearchCheck, title: "Built for search intent", copy: "Each category targets a specific buyer problem instead of generic affiliate traffic." },
            { icon: ShieldCheck, title: "Trust-first curation", copy: "Pages can show pricing, commission, fit, proof, assets, and disclaimers from the submission form." },
            { icon: BadgeCheck, title: "Spreadsheet-ready", copy: "The data model mirrors the Google Form so rows can become pages as submissions arrive." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm">
              <item.icon className="h-7 w-7 text-[#1f6f5b]" aria-hidden />
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#596661]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
