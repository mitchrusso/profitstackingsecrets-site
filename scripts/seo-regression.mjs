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

console.log("SEO regression checks passed.");
