import fs from "node:fs";
import path from "node:path";

const [, , csvPath] = process.argv;

if (!csvPath) {
  console.error("Usage: node scripts/import-partner-offers.mjs /path/to/form-responses.csv");
  process.exit(1);
}

const categoryMap = new Map([
  ["Sales & Marketing", "sales-and-marketing"],
  ["AI & Automation", "ai-and-automation"],
  ["Business Systems & Operations", "business-systems-and-operations"],
  ["Productivity & Time Management", "productivity-and-time-management"],
  ["Leadership & Team Building", "leadership-and-team-building"],
  ["Finance & Profitability", "finance-and-profitability"],
  ["Coaching & Consulting", "coaching-and-consulting"],
  ["Speaking & Thought Leadership", "speaking-and-thought-leadership"],
  ["Legal / IP / Compliance", "legal-ip-and-compliance"],
  ["Technology / SaaS Tools", "technology-and-saas-tools"],
  ["Health, Mindset & Personal Performance", "health-mindset-and-performance"],
  ["Books, Courses & Digital Products", "books-courses-and-digital-products"],
  ["Events, Workshops & Memberships", "events-workshops-and-memberships"],
  ["Other / Not Sure", "business-systems-and-operations"],
]);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
}

function findValue(row, headers, candidates) {
  const normalizedHeaders = headers.map((header) => header.toLowerCase());
  for (const candidate of candidates) {
    const index = normalizedHeaders.findIndex((header) => header.includes(candidate.toLowerCase()));
    if (index >= 0) return (row[index] || "").trim();
  }
  return "";
}

function listFrom(value) {
  return value
    .split(/\n|;|\|/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 6);
}

const csv = fs.readFileSync(path.resolve(csvPath), "utf8");
const rows = parseCsv(csv);
const [headers, ...dataRows] = rows;

const offers = dataRows
  .map((row) => {
    const name = findValue(row, headers, ["product name", "offer name", "name of your offer"]);
    const category = findValue(row, headers, ["offer type and category", "category"]);
    if (!name || !category) return null;

    const partner = findValue(row, headers, ["your name", "company name", "business name", "partner"]);
    const offerType = findValue(row, headers, ["offer type", "format"]);
    const summary = findValue(row, headers, ["description", "summary", "offer copy"]);
    const affiliateUrl = findValue(row, headers, ["affiliate link", "tracking link", "url"]);
    const image = findValue(row, headers, ["image", "logo", "assets"]);
    const idealFor = listFrom(findValue(row, headers, ["ideal customer", "best for", "who is this for"]));
    const includes = listFrom(findValue(row, headers, ["includes", "deliverables", "what is included"]));

    return {
      slug: slugify(name),
      name,
      partner: partner || "Partner submission",
      categorySlug: categoryMap.get(category) || slugify(category),
      offerType: offerType || "Partner offer",
      tagline: findValue(row, headers, ["tagline", "one sentence", "headline"]) || summary.slice(0, 140) || "Curated partner offer for entrepreneurs.",
      summary: summary || "Partner-submitted offer details are pending editorial cleanup.",
      idealFor: idealFor.length ? idealFor : ["Entrepreneurs evaluating this category", "Buyers comparing vetted partner offers"],
      includes: includes.length ? includes : ["Partner-submitted details", "Affiliate or referral path", "Buyer-fit information"],
      price: findValue(row, headers, ["pricing", "price", "cost"]) || "Verify with partner",
      commission: findValue(row, headers, ["commission"]) || "Verify with partner",
      affiliateUrl: affiliateUrl || "https://profitstackingsecrets.com/contact",
      image: image.startsWith("http") ? image : "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      status: "submitted",
    };
  })
  .filter(Boolean);

const output = `import type { PartnerOffer } from "./offers";

export const submittedOffers: PartnerOffer[] = ${JSON.stringify(offers, null, 2)};
`;

fs.writeFileSync(path.resolve("src/lib/submitted-offers.ts"), output);
console.log(`Imported ${offers.length} submitted offers into src/lib/submitted-offers.ts`);
