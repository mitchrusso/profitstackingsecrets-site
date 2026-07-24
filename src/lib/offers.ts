export type OfferCategory = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  buyerIntent: string;
  keywords: string[];
  image: string;
};

export type PartnerOffer = {
  slug: string;
  name: string;
  partner: string;
  categorySlug: string;
  offerType: string;
  tagline: string;
  summary: string;
  idealFor: string[];
  includes: string[];
  price: string;
  commission: string;
  affiliateUrl: string;
  image: string;
  status: "seed" | "submitted" | "approved";
};

import { submittedOffers } from "./submitted-offers";

export const offerCategories: OfferCategory[] = [
  {
    slug: "sales-and-marketing",
    name: "Sales & Marketing",
    shortName: "Sales",
    description: "Premium offers that help entrepreneurs attract leads, sharpen positioning, improve conversion, and build repeatable revenue systems.",
    buyerIntent: "Find vetted sales and marketing programs, tools, templates, and advisory offers.",
    keywords: ["sales training affiliate offers", "marketing systems for entrepreneurs", "lead generation programs"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ai-and-automation",
    name: "AI & Automation",
    shortName: "AI",
    description: "AI, workflow automation, and operating leverage offers for founders who want to simplify delivery, fulfillment, support, and content production.",
    buyerIntent: "Compare AI automation offers for business operators and expert businesses.",
    keywords: ["AI automation offers", "business automation tools", "AI for entrepreneurs"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "business-systems-and-operations",
    name: "Business Systems & Operations",
    shortName: "Systems",
    description: "Operations, SOP, dashboard, delegation, and fulfillment-system offers that help founders remove bottlenecks and scale without chaos.",
    buyerIntent: "Find operational systems, SOP programs, and scalable business process offers.",
    keywords: ["business systems program", "operations consulting offers", "SOP templates for entrepreneurs"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "productivity-and-time-management",
    name: "Productivity & Time Management",
    shortName: "Productivity",
    description: "Planning, accountability, prioritization, and time-protection offers for entrepreneurs who need cleaner execution habits.",
    buyerIntent: "Compare productivity programs, planners, accountability offers, and time-management systems.",
    keywords: ["productivity program for entrepreneurs", "time management coaching", "accountability systems"],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "leadership-and-team-building",
    name: "Leadership & Team Building",
    shortName: "Leadership",
    description: "Leadership, culture, hiring, communication, and team-performance offers for growing companies and founder-led organizations.",
    buyerIntent: "Find leadership programs, team workshops, and executive development offers.",
    keywords: ["leadership training affiliate", "team building workshops", "executive leadership programs"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "finance-and-profitability",
    name: "Finance & Profitability",
    shortName: "Profitability",
    description: "Pricing, profit, cash-flow, bookkeeping, tax, and financial decision-making offers for owners who want healthier margins.",
    buyerIntent: "Compare profit improvement, financial planning, and business finance offers.",
    keywords: ["profit improvement program", "business finance coaching", "cash flow systems"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "coaching-and-consulting",
    name: "Coaching & Consulting",
    shortName: "Coaching",
    description: "Expert coaching, consulting, implementation, certification, and advisory offers that help founders solve specific growth problems.",
    buyerIntent: "Find vetted coaching and consulting offers for business growth.",
    keywords: ["business coaching affiliate offers", "consulting programs", "expert advisory offers"],
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "speaking-and-thought-leadership",
    name: "Speaking & Thought Leadership",
    shortName: "Speaking",
    description: "Offers that help experts package ideas, grow authority, book stages, create media, and publish stronger thought leadership.",
    buyerIntent: "Compare thought leadership, speaking, publishing, and authority-building offers.",
    keywords: ["thought leadership program", "speaker training", "authority building offers"],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "legal-ip-and-compliance",
    name: "Legal / IP / Compliance",
    shortName: "Legal",
    description: "Legal, intellectual property, licensing, contract, risk, and compliance offers that help entrepreneurs protect valuable assets.",
    buyerIntent: "Find legal, IP, compliance, and licensing support offers.",
    keywords: ["IP licensing program", "business legal templates", "compliance offers for entrepreneurs"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "technology-and-saas-tools",
    name: "Technology / SaaS Tools",
    shortName: "SaaS",
    description: "Software, dashboards, analytics, CRM, community, course, productivity, and AI-enabled SaaS tools for modern online businesses.",
    buyerIntent: "Compare SaaS tools and software offers for entrepreneurs.",
    keywords: ["SaaS tools for entrepreneurs", "business software affiliate offers", "CRM tools for small business"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "health-mindset-and-performance",
    name: "Health, Mindset & Personal Performance",
    shortName: "Performance",
    description: "Mindset, wellness, resilience, productivity, and personal-performance offers for entrepreneurs who know the operator matters.",
    buyerIntent: "Find entrepreneur performance, mindset, wellness, and resilience offers.",
    keywords: ["entrepreneur mindset program", "personal performance coaching", "wellness offers for founders"],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "books-courses-and-digital-products",
    name: "Books, Courses & Digital Products",
    shortName: "Digital Products",
    description: "Books, courses, templates, digital toolkits, swipe files, playbooks, and self-guided programs with clear business outcomes.",
    buyerIntent: "Compare business books, courses, and digital products with affiliate programs.",
    keywords: ["business courses affiliate", "digital products for entrepreneurs", "business book offers"],
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "events-workshops-and-memberships",
    name: "Events, Workshops & Memberships",
    shortName: "Events",
    description: "Live workshops, retreats, masterminds, memberships, communities, and cohort programs that create access and implementation.",
    buyerIntent: "Find premium workshops, memberships, events, and mastermind-style offers.",
    keywords: ["business workshops", "entrepreneur memberships", "mastermind affiliate offers"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
];

const seedOffers: PartnerOffer[] = [
  {
    slug: "revenue-system-diagnostic",
    name: "Revenue System Diagnostic",
    partner: "Partner submission placeholder",
    categorySlug: "sales-and-marketing",
    offerType: "Strategy session",
    tagline: "For founders who want to identify the biggest leak in their lead-to-sale path.",
    summary: "A curated listing slot for a future Speakeasy partner offer focused on positioning, lead quality, sales process, and conversion bottlenecks.",
    idealFor: ["Consultants and experts with an existing offer", "Founders who need a clearer conversion path", "Teams looking for a focused growth diagnosis"],
    includes: ["Offer positioning review", "Lead source and funnel assessment", "Prioritized next-step roadmap"],
    price: "Submitted by partner",
    commission: "Submitted by partner",
    affiliateUrl: "https://profitstackingsecrets.com/submit",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    status: "seed",
  },
  {
    slug: "ai-ops-automation-sprint",
    name: "AI Ops Automation Sprint",
    partner: "Partner submission placeholder",
    categorySlug: "ai-and-automation",
    offerType: "Implementation program",
    tagline: "For operators who want AI to remove repetitive work instead of adding noise.",
    summary: "A sample page structure for AI workflow, automation, and implementation offers submitted by vetted partners.",
    idealFor: ["Service businesses with repeatable fulfillment", "Teams drowning in manual admin", "Founders who want lightweight automation wins"],
    includes: ["Workflow audit", "Automation map", "Implementation checklist"],
    price: "Submitted by partner",
    commission: "Submitted by partner",
    affiliateUrl: "https://profitstackingsecrets.com/submit",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    status: "seed",
  },
  {
    slug: "profit-dashboard-intensive",
    name: "Profit Dashboard Intensive",
    partner: "Partner submission placeholder",
    categorySlug: "finance-and-profitability",
    offerType: "Workshop",
    tagline: "For owners who need simple weekly numbers that guide better decisions.",
    summary: "A sample page for finance, profitability, dashboard, pricing, and cash-flow offers submitted by mastermind members.",
    idealFor: ["Owners who do not trust their weekly numbers", "Businesses with revenue but unclear margins", "Founders preparing to scale offers responsibly"],
    includes: ["KPI map", "Profit levers checklist", "Decision dashboard outline"],
    price: "Submitted by partner",
    commission: "Submitted by partner",
    affiliateUrl: "https://profitstackingsecrets.com/submit",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    status: "seed",
  },
  {
    slug: "expert-authority-accelerator",
    name: "Expert Authority Accelerator",
    partner: "Partner submission placeholder",
    categorySlug: "speaking-and-thought-leadership",
    offerType: "Cohort program",
    tagline: "For experts who want a sharper message, stronger assets, and more visible authority.",
    summary: "A sample offer page for speaking, publishing, media, podcasting, and thought-leadership partner programs.",
    idealFor: ["Experts with a proven framework", "Consultants who want better authority assets", "Speakers building a more compelling platform"],
    includes: ["Message audit", "Authority asset plan", "Visibility campaign checklist"],
    price: "Submitted by partner",
    commission: "Submitted by partner",
    affiliateUrl: "https://profitstackingsecrets.com/submit",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    status: "seed",
  },
  {
    slug: "premium-mastermind-fit-review",
    name: "Premium Mastermind Fit Review",
    partner: "Partner submission placeholder",
    categorySlug: "events-workshops-and-memberships",
    offerType: "Membership / event",
    tagline: "For entrepreneurs comparing high-value communities, workshops, retreats, and peer groups.",
    summary: "A sample listing for curated events, workshops, memberships, and mastermind-style offers.",
    idealFor: ["Founders who want peer accountability", "Experts looking for curated rooms", "Operators ready for implementation-focused community"],
    includes: ["Fit criteria", "Member outcome summary", "Application or enrollment path"],
    price: "Submitted by partner",
    commission: "Submitted by partner",
    affiliateUrl: "https://profitstackingsecrets.com/submit",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    status: "seed",
  },
];

export const partnerOffers: PartnerOffer[] = [...submittedOffers, ...seedOffers];

export function getCategoryBySlug(slug: string) {
  return offerCategories.find((category) => category.slug === slug);
}

export function getOfferBySlug(slug: string) {
  return partnerOffers.find((offer) => offer.slug === slug);
}

export function getOffersByCategory(categorySlug: string) {
  return partnerOffers.filter((offer) => offer.categorySlug === categorySlug);
}

export function getFeaturedOffers(limit = 6) {
  return partnerOffers.slice(0, limit);
}

export function getRelatedOffers(offer: PartnerOffer) {
  return partnerOffers
    .filter((candidate) => candidate.slug !== offer.slug && candidate.categorySlug === offer.categorySlug)
    .concat(partnerOffers.filter((candidate) => candidate.slug !== offer.slug && candidate.categorySlug !== offer.categorySlug))
    .slice(0, 3);
}
