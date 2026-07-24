import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { absoluteUrl, defaultDescription, defaultOgImage, jsonLd, siteName, siteUrl } from "@/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Profit Stacking Secrets | Curated Entrepreneur Offers", template: `%s | ${siteName}` },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Business",
  keywords: [
    "entrepreneur affiliate offers",
    "business growth marketplace",
    "sales and marketing programs",
    "AI automation offers",
    "business systems consulting",
    "profitability programs",
    "mastermind partner offers",
    "curated business resources",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Profit Stacking Secrets | Curated Entrepreneur Offers",
    description: defaultDescription,
    images: [{ url: defaultOgImage, width: 1200, height: 800, alt: "Business owners reviewing curated partner offers" }],
  },
  twitter: { card: "summary_large_image", title: "Profit Stacking Secrets | Curated Entrepreneur Offers", description: defaultDescription, images: [defaultOgImage] },
  robots: { index: true, follow: true },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteName,
      url: siteUrl,
      description: defaultDescription,
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteName,
      url: siteUrl,
      publisher: { "@id": absoluteUrl("/#organization") },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/categories?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteJsonLd)} />
        {children}
      </body>
    </html>
  );
}
