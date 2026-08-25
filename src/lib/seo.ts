import type { Metadata } from "next";

export const siteUrl = "https://profitstackingsecrets.com";
export const siteName = "Profit Stacking Secrets";
export const defaultDescription =
  "Profit Stacking Secrets helps entrepreneurs find hidden profit already inside their business with a diagnostic calculator, practical frameworks, and curated next-step resources.";
export const defaultOgImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt: `${title} from ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [imageUrl],
    },
  };
}

export function webpageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    inLanguage: "en-US",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
