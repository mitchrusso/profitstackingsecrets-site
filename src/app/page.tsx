import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Calculator,
  Check,
  ClipboardList,
  Compass,
  Handshake,
  Layers3,
  SearchCheck,
  Sparkles,
} from "lucide-react";
import { offerCategories } from "@/lib/offers";
import { absoluteUrl, jsonLd, siteName } from "@/lib/seo";

const navItems = [
  { href: "/book", label: "Book" },
  { href: "/profit-stack-builder", label: "App" },
  { href: "/calculator", label: "Calculator" },
  { href: "/categories", label: "Resources" },
  { href: "/offers", label: "Partner Offers" },
  { href: "/contact", label: "Contact" },
];

const profitLeaks = [
  "Leads that never receive timely follow-up",
  "Offers that are useful but not packaged clearly",
  "Existing clients who could buy the next logical result",
  "Manual delivery work that could become a repeatable system",
];

const nextSteps = [
  {
    href: "/calculator",
    icon: Calculator,
    title: "Run the Profit Stack Calculator",
    copy: "Score your business across revenue, margin, follow-up, leverage, and execution to find the most useful next move.",
  },
  {
    href: "/profit-stack-builder",
    icon: Layers3,
    title: "Build the Action Plan",
    copy: "Use the Profit Stack Builder concept to turn your diagnosis into a 90-day implementation path.",
  },
  {
    href: "/book",
    icon: BookOpenCheck,
    title: "Read the Framework",
    copy: "Use the book concepts to look for hidden assets, repeatable value, and practical leverage already inside the business.",
  },
  {
    href: "/categories",
    icon: Compass,
    title: "Explore Next-Step Resources",
    copy: "Browse categories for tools, templates, programs, books, and partner offers that match the profit gap you uncover.",
  },
];

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        name: `${siteName} | Find Hidden Profit in Your Business`,
        description:
          "A profit strategy hub for entrepreneurs who want to identify revenue leaks, margin opportunities, follow-up gaps, and leverage points before adding more complexity.",
        url: absoluteUrl("/"),
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/#profit-paths"),
        name: "Profit Stacking Secrets next-step paths",
        itemListElement: nextSteps.map((step, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(step.href),
          name: step.title,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f5f6f2] text-[#172424]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(homeJsonLd)} />
      <header className="sticky top-0 z-50 border-b border-[#dfe5dc] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Profit Stacking Secrets home">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-[#19745d] text-white">
              <SearchCheck className="h-5 w-5" aria-hidden />
            </span>
            <span className="text-lg font-black tracking-tight">Profit Stacking Secrets</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-black text-[#53615d] lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#19745d]">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/calculator" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#172424] px-4 py-2 text-sm font-black text-white hover:bg-[#2d3f3f]">
            <Calculator className="h-4 w-4" aria-hidden />
            Start Calculator
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#12231f]">
        <Image
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=82"
          alt="Business owner reviewing profitability and growth numbers"
          fill
          sizes="100vw"
          className="object-cover opacity-34"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#12231f] via-[#12231f]/90 to-[#12231f]/62" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#d4f3e7]">
              <Sparkles className="h-4 w-4" aria-hidden />
              Profit strategy for owner-led businesses
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-[72px]">
              Find the hidden profit already inside your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#e8f3ee]">
              Use the Profit Stacking framework to spot overlooked revenue, margin, follow-up, delivery, and leverage opportunities before spending more on ads, tools, or complexity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/calculator" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#28a37d] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-[#218865]">
                Run the Calculator <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="/book" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-white/20">
                Explore the Book <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-white/18 bg-white/12 p-5 text-white shadow-2xl backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8ee1bf]">Start here</p>
            <h2 className="mt-3 text-2xl font-black">Where profit usually hides</h2>
            <div className="mt-5 grid gap-3">
              {profitLeaks.map((leak) => (
                <div key={leak} className="flex gap-3 rounded-md border border-white/16 bg-white/10 p-4">
                  <Check className="mt-0.5 h-5 w-5 flex-none text-[#8ee1bf]" aria-hidden />
                  <p className="text-sm font-bold leading-6 text-[#eef8f4]">{leak}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dfe5dc] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="grid gap-5 lg:grid-cols-3">
            {nextSteps.map((step) => (
              <Link key={step.href} href={step.href} className="group rounded-lg border border-[#dfe5dc] bg-[#fbfcf9] p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#19745d] hover:shadow-md">
                <step.icon className="h-7 w-7 text-[#19745d]" aria-hidden />
                <span className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-xl font-black leading-tight group-hover:text-[#19745d]">{step.title}</span>
                  <ArrowRight className="h-4 w-4 flex-none" aria-hidden />
                </span>
                <span className="mt-3 block text-sm font-semibold leading-7 text-[#596661]">{step.copy}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#19745d]">Growth paths</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Route visitors to the right help after they know what is leaking.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#596661]">
            Coaching stays available, but the primary experience is useful self-diagnosis, education, and practical next steps.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {offerCategories.slice(0, 8).map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`} className="group min-h-[176px] rounded-lg border border-[#dfe5dc] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#19745d] hover:shadow-md">
              <ClipboardList className="h-6 w-6 text-[#19745d]" aria-hidden />
              <span className="mt-4 flex items-start justify-between gap-4">
                <span className="text-lg font-black leading-tight group-hover:text-[#19745d]">{category.name}</span>
                <ArrowRight className="mt-1 h-4 w-4 flex-none text-[#6b7771] group-hover:text-[#19745d]" aria-hidden />
              </span>
              <span className="mt-3 block text-sm font-semibold leading-6 text-[#596661]">{category.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#fffdf7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#19745d]">Implementation help</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Coaching becomes the premium next step, not the front door.</h2>
            <p className="mt-4 text-base leading-8 text-[#596661]">
              The site can warm up visitors with the framework and calculator first. If someone discovers a meaningful gap and wants help implementing, they can still reach out.
            </p>
          </div>
          <div className="rounded-lg border border-[#dfe5dc] bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black">Best conversion path</h3>
            <ol className="mt-5 grid gap-3">
            {["Download the report", "Run the calculator", "Build the action plan", "Use the book, spreadsheet, partner offer, or strategy review"].map((step, index) => (
                <li key={step} className="rounded-md bg-[#f5f6f2] p-4 text-sm font-bold leading-7 text-[#596661]">
                  <span className="mr-2 text-[#19745d]">{index + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-[#172424] px-4 py-2 text-sm font-black text-white hover:bg-[#2d3f3f]">
              Ask About Strategy Help <Handshake className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
