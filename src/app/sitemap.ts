import type { MetadataRoute } from "next";
import { offerCategories, partnerOffers } from "@/lib/offers";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/accessibility-statement",
    "/amazon-disclosure",
    "/book",
    "/calculator",
    "/categories",
    "/contact",
    "/cookie-policy",
    "/editorial-policy",
    "/faq",
    "/offers",
    "/privacy-policy",
    "/profit-stack-builder",
    "/review-methodology",
    "/resources",
    "/safety-disclaimer",
    "/submit",
    "/terms-and-conditions",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route || "/"),
      lastModified: now,
      changeFrequency: route === "/resources" ? ("daily" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.7,
    })),
    ...offerCategories.map((category) => ({
      url: absoluteUrl(`/categories/${category.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...partnerOffers.map((offer) => ({
      url: absoluteUrl(`/offers/${offer.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
