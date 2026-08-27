import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, BookOpenCheck, ExternalLink } from "lucide-react";
import { getArticleBySlug, getArticleCategory, resourceArticles } from "@/lib/articles";
import { absoluteUrl, breadcrumbJsonLd, jsonLd, siteName } from "@/lib/seo";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Resource Not Found" };

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/resources/${article.slug}` },
    keywords: article.keywords,
    openGraph: {
      type: "article",
      title: `${article.title} | ${siteName}`,
      description: article.description,
      url: absoluteUrl(`/resources/${article.slug}`),
      images: [{ url: article.image, width: 1200, height: 800, alt: article.title }],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["Mitch Russo"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${siteName}`,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const category = getArticleCategory(article);
  const articleUrl = absoluteUrl(`/resources/${article.slug}`);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: article.description,
        image: article.image,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        author: { "@type": "Person", name: "Mitch Russo" },
        publisher: { "@id": absoluteUrl("/#organization") },
        mainEntityOfPage: { "@id": `${articleUrl}#webpage` },
        about: article.keywords,
      },
      {
        "@type": "WebPage",
        "@id": `${articleUrl}#webpage`,
        url: articleUrl,
        name: article.title,
        description: article.description,
        isPartOf: { "@id": absoluteUrl("/#website") },
        inLanguage: "en-US",
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: article.title, path: `/resources/${article.slug}` },
      ]),
    ],
  };

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-[#172424]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
      <article>
        <section className="relative overflow-hidden bg-[#12231f]">
          <Image src={article.image} alt={article.title} fill sizes="100vw" className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-[#12231f]/76" aria-hidden />
          <div className="relative mx-auto max-w-5xl px-5 py-14 text-white sm:py-20">
            <Link href="/resources" className="inline-flex items-center gap-2 text-sm font-black text-[#8ee1bf]">
              <ArrowLeft className="h-4 w-4" aria-hidden /> Resources
            </Link>
            {category && <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-[#8ee1bf]">{category.name}</p>}
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">{article.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#e8f3ee]">{article.description}</p>
            <p className="mt-5 text-sm font-bold text-[#c8d7d1]">Updated {article.updatedAt}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="rounded-lg border border-[#ded7c9] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xl font-bold leading-9 text-[#40514b]">{article.summary}</p>
            <div className="mt-8 space-y-9">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-black leading-tight">{section.heading}</h2>
                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-base leading-8 text-[#596661]">{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-lg border border-[#dfe5dc] bg-[#f5f6f2] p-5">
              <h2 className="flex items-center gap-2 text-2xl font-black">
                <BookOpenCheck className="h-6 w-6 text-[#19745d]" aria-hidden /> References
              </h2>
              <ul className="mt-4 space-y-3">
                {article.references.map((reference) => (
                  <li key={reference.url}>
                    <a href={reference.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-sm font-bold leading-6 text-[#19745d] hover:underline">
                      {reference.label} <ExternalLink className="mt-0.5 h-4 w-4 flex-none" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="rounded-lg border border-[#ded7c9] bg-white p-5 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#19745d]">Next step</p>
            <h2 className="mt-3 text-2xl font-black">Apply the article.</h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-[#596661]">
              Use the article as a decision aid, then move into the calculator, builder, or a category that matches your current profit gap.
            </p>
            <Link href={article.cta.href} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#172424] px-5 py-3 text-sm font-black text-white hover:bg-[#2d3f3f]">
              {article.cta.label} <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            {category && (
              <Link href={`/categories/${category.slug}`} className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-[#cbd8cf] bg-white px-5 py-3 text-sm font-black text-[#172424] hover:border-[#19745d]">
                View {category.shortName} Category <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
          </aside>
        </section>
      </article>
    </main>
  );
}
