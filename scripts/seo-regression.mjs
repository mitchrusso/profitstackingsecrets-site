import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const categoryPage = read("src/app/categories/[slug]/page.tsx");
const offerPage = read("src/app/offers/[slug]/page.tsx");
const sitemap = read("src/app/sitemap.ts");
const robots = read("src/app/robots.ts");
const llms = read("src/app/llms.txt/route.ts");
const nextConfig = read("next.config.ts");
const builderPage = read("src/app/profit-stack-builder/page.tsx");
const bookDownloadApi = read("src/app/api/book-download/route.ts");
const layout = read("src/app/layout.tsx");
const articles = read("src/lib/articles.ts");
const articlePage = read("src/app/resources/[slug]/page.tsx");
const resourcesPage = read("src/app/resources/page.tsx");
const feedRoute = read("src/app/feed.xml/route.ts");

assert(categoryPage.includes('"@type": "CollectionPage"'), "Category pages should use CollectionPage schema.");
assert(categoryPage.includes("breadcrumbJsonLd"), "Category pages should include breadcrumb schema.");
assert(categoryPage.includes("#offers"), "Category pages should expose an offer ItemList.");
assert(categoryPage.includes("Implementation path"), "Category pages should include buyer decision guidance.");
assert(offerPage.includes('target="_blank"'), "Offer partner links should open in a new tab.");
assert(offerPage.includes('rel="sponsored nofollow noreferrer"'), "Offer partner links should use sponsored/nofollow/noreferrer.");
assert(offerPage.includes('"@type": "Article"'), "Offer pages should include truthful article-style schema.");
assert(sitemap.includes("/categories") && sitemap.includes("/offers"), "Sitemap should include category and offer routes.");
assert(sitemap.includes("/profit-stack-builder"), "Sitemap should include the Profit Stack Builder app page.");
assert(robots.includes("/sitemap.xml"), "Robots should advertise the sitemap.");
assert(llms.includes("Profit Stacking Secrets") && llms.includes("Profit Stack Builder"), "llms.txt should describe the site and app workflow.");
assert(nextConfig.includes("Strict-Transport-Security") && nextConfig.includes("X-Content-Type-Options"), "Security headers should remain configured.");
assert(builderPage.includes('"@type": "SoftwareApplication"'), "Profit Stack Builder should use SoftwareApplication schema.");
assert(bookDownloadApi.includes("/profit-stack-builder"), "Download follow-up email should point to the app upsell.");
assert(layout.includes("https://app.rybbit.io/api/script.js") && layout.includes('data-site-id="c682939883a0"'), "Rybbit tracking snippet should remain installed.");
assert(layout.includes('type="application/rss+xml"') && layout.includes("/feed.xml"), "Layout should advertise the resource RSS feed.");
assert(articles.includes("find-hidden-profit-before-buying-more-traffic"), "Resource article data should include the hidden-profit pillar.");
assert(articles.includes("references:") && articles.includes("https://www.sba.gov"), "Resource articles should include useful references.");
assert(articles.includes("package-your-offer-before-you-raise-ad-spend"), "Resource articles should include the offer-packaging pillar.");
assert(articles.includes("when-to-buy-coaching-course-or-software"), "Resource articles should include an implementation-fit decision guide.");
assert((articles.match(/slug:/g) ?? []).length >= 10, "Resource library should include at least ten substantive articles.");
assert(articlePage.includes('"@type": "Article"') && articlePage.includes("breadcrumbJsonLd"), "Resource article pages should include Article and breadcrumb schema.");
assert(articlePage.includes('target="_blank"') && articlePage.includes('rel="noopener noreferrer"'), "Article reference links should open safely in a new tab.");
assert(resourcesPage.includes("resourceArticles.map"), "Resources hub should link to individual articles.");
assert(categoryPage.includes("getArticlesByCategory"), "Category pages should surface related articles.");
assert(sitemap.includes("resourceArticles.map"), "Sitemap should include resource article routes.");
assert(llms.includes("/resources/find-hidden-profit-before-buying-more-traffic"), "llms.txt should list major resource articles.");
assert(llms.includes("/feed.xml") && llms.includes("/resources/profit-leak-scorecard-for-service-businesses"), "llms.txt should expose feed and expanded resource coverage.");
assert(feedRoute.includes("application/rss+xml") && feedRoute.includes("resourceArticles"), "RSS feed route should publish resource articles.");

console.log("SEO regression checks passed.");
