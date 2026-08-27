import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { absoluteUrl, defaultDescription, defaultOgImage, jsonLd, siteName, siteUrl } from "@/lib/seo";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Profit Stacking Secrets | Find Hidden Profit in Your Business", template: `%s | ${siteName}` },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Business",
  keywords: [
    "profit improvement calculator",
    "business profitability framework",
    "hidden profit opportunities",
    "entrepreneur profit strategy",
    "business leverage systems",
    "revenue leakage assessment",
    "business growth resources",
    "profit stacking secrets",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "Profit Stacking Secrets | Find Hidden Profit in Your Business",
    description: defaultDescription,
    images: [{ url: defaultOgImage, width: 1200, height: 800, alt: "Business owner reviewing profit improvement numbers" }],
  },
  twitter: { card: "summary_large_image", title: "Profit Stacking Secrets | Find Hidden Profit in Your Business", description: defaultDescription, images: [defaultOgImage] },
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
      <head>
        <Script src="https://app.rybbit.io/api/script.js" data-site-id="c682939883a0" strategy="afterInteractive" />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteJsonLd)} />
        {children}
      </body>
    </html>
  );
}
