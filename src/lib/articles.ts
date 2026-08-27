import { offerCategories } from "./offers";

export type ArticleReference = {
  label: string;
  url: string;
};

export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  categorySlug: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  summary: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  references: ArticleReference[];
  cta: {
    label: string;
    href: string;
  };
};

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "find-hidden-profit-before-buying-more-traffic",
    title: "Find Hidden Profit Before Buying More Traffic",
    description:
      "A practical profit audit for entrepreneurs who want to improve revenue, margin, follow-up, retention, and leverage before spending more on ads.",
    categorySlug: "finance-and-profitability",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-27",
    updatedAt: "2026-08-27",
    keywords: ["hidden profit", "profit audit", "business profitability", "profit improvement"],
    summary:
      "Most owner-led businesses do not need a brand-new strategy first. They need a clearer view of where revenue already leaks out of the system.",
    sections: [
      {
        heading: "Start with the numbers you can actually act on",
        body: [
          "A useful profit audit starts with a short list of signals: revenue, gross margin, net profit, conversion rate, repeat purchase rate, average order value, lead source, and follow-up speed. The goal is not accounting perfection. The goal is to find the bottleneck that can be improved this month.",
          "The U.S. Small Business Administration emphasizes cash flow, pricing, and cost control as practical foundations for business health. For Profit Stacking, those numbers become a filter: which change has the best chance to increase profit without adding unnecessary complexity?",
        ],
      },
      {
        heading: "Look for leaks before looking for more leads",
        body: [
          "Traffic can be useful, but it can also hide weak economics. If leads are not followed up, offers are unclear, buyers do not know the next step, or delivery is too custom, more traffic simply pours more attention into the same leaky system.",
          "A simple audit asks five questions: where do leads stall, where do prospects get confused, where do current customers stop buying, where does delivery consume margin, and where is the founder still doing repeatable work manually?",
        ],
      },
      {
        heading: "Turn the lowest score into the first experiment",
        body: [
          "The best next step is usually boring and specific: rewrite one offer page, add one follow-up email, create one renewal path, build one checklist, or raise one underpriced service. A 30-day experiment is easier to complete than a vague transformation plan.",
          "Use the calculator first, then choose one resource category that matches the gap. That keeps the site from becoming a random list of products and turns it into a guided business-improvement path.",
        ],
      },
    ],
    references: [
      { label: "U.S. Small Business Administration: Manage your finances", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
      { label: "U.S. Small Business Administration: Pricing your products and services", url: "https://www.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs" },
      { label: "Google Search Central: Helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    cta: { label: "Run the Profit Stack Calculator", href: "/calculator" },
  },
  {
    slug: "build-a-follow-up-system-for-lost-leads",
    title: "Build a Follow-Up System for Lost Leads",
    description:
      "How entrepreneurs can recover more opportunity with a simple lead follow-up rhythm, clearer next steps, and better response timing.",
    categorySlug: "sales-and-marketing",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-27",
    updatedAt: "2026-08-27",
    keywords: ["lead follow up system", "sales follow up", "lost leads", "conversion improvement"],
    summary:
      "A follow-up system turns old inquiries, stalled prospects, and quiet subscribers into a visible revenue opportunity instead of a vague regret.",
    sections: [
      {
        heading: "Follow-up is a profit lever, not just a sales chore",
        body: [
          "Many businesses treat follow-up as a personality trait: some people do it, others forget. A better approach is to treat follow-up as a system with timing, ownership, message templates, and a visible status for every meaningful inquiry.",
          "The Federal Trade Commission's endorsement guidance is a useful reminder that claims, testimonials, and offers should be clear and not misleading. That same clarity belongs in follow-up: say what the next step is, who it is for, and what the prospect should expect.",
        ],
      },
      {
        heading: "Use three follow-up paths",
        body: [
          "First, create a fast response path for new inquiries. Second, create a reactivation path for people who went quiet. Third, create a nurture path for people who are interested but not ready. Those three paths are enough for many small teams.",
          "Each path should include a call to action that matches intent: schedule, reply, download, compare, apply, or review a specific offer. The mistake is asking every prospect to take the same step regardless of readiness.",
        ],
      },
      {
        heading: "Measure the smallest useful signals",
        body: [
          "Track response time, reply rate, appointments booked, proposals sent, and closed revenue from follow-up. A founder does not need an elaborate dashboard to see whether follow-up is creating profit.",
          "Once follow-up is visible, the next Profit Stacking move may be an email tool, CRM cleanup, script library, sales training, or a partner offer that solves the bottleneck.",
        ],
      },
    ],
    references: [
      { label: "FTC: Guides Concerning Use of Endorsements and Testimonials in Advertising", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" },
      { label: "Google Search Central: Creating helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    cta: { label: "Explore Sales & Marketing Offers", href: "/categories/sales-and-marketing" },
  },
  {
    slug: "choose-business-offers-by-implementation-fit",
    title: "Choose Business Offers by Implementation Fit",
    description:
      "A buyer guide for evaluating courses, coaching, SaaS, workshops, masterminds, and templates by fit, proof, support, and implementation load.",
    categorySlug: "books-courses-and-digital-products",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-27",
    updatedAt: "2026-08-27",
    keywords: ["business course buying guide", "implementation fit", "entrepreneur tools", "business offers"],
    summary:
      "A strong offer is not automatically the right offer. The right purchase fits the buyer's timing, team capacity, bottleneck, and preferred implementation style.",
    sections: [
      {
        heading: "Match the offer to the bottleneck",
        body: [
          "Before comparing price, identify the real bottleneck. A founder with weak lead follow-up needs a different offer than a founder with unclear margins, custom delivery, or no recurring revenue path.",
          "This is why Profit Stacking Secrets organizes resources by category rather than by hype. Buyers should be able to move from problem to fit: sales, AI, systems, productivity, profitability, leadership, legal/IP, SaaS, events, or digital products.",
        ],
      },
      {
        heading: "Check proof without outsourcing judgment",
        body: [
          "Testimonials, case studies, and social proof can be useful, but they should not replace fit analysis. A buyer should ask whether the examples resemble their business, audience, capacity, and current stage.",
          "The FTC expects endorsements and advertising claims to be clear and substantiated. A marketplace page should therefore avoid fake ratings, invented results, or unsupported guarantees, and should send readers to verify current details with the provider.",
        ],
      },
      {
        heading: "Choose the next step you can complete",
        body: [
          "A template may beat a course when the buyer already knows what to do. A workshop may beat a book when the buyer needs feedback. A done-with-you program may beat software when the team lacks process clarity.",
          "Implementation fit is the hidden buying criterion. The best offer is the one that solves the current profit gap and can actually be used within the next 30 to 90 days.",
        ],
      },
    ],
    references: [
      { label: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing" },
      { label: "FTC: Endorsement Guides", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" },
    ],
    cta: { label: "Browse Resource Categories", href: "/categories" },
  },
  {
    slug: "turn-authority-assets-into-profit-paths",
    title: "Turn Authority Assets Into Profit Paths",
    description:
      "How books, podcasts, webinars, articles, talks, and lead magnets can become measurable business assets instead of disconnected visibility work.",
    categorySlug: "speaking-and-thought-leadership",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-27",
    updatedAt: "2026-08-27",
    keywords: ["authority assets", "lead magnets", "thought leadership", "business visibility"],
    summary:
      "Authority only becomes leverage when it gives the right visitor a useful next step: download, calculate, compare, apply, buy, or request help.",
    sections: [
      {
        heading: "Do not stop at visibility",
        body: [
          "Books, podcasts, webinars, talks, articles, and media appearances can build credibility, but credibility alone does not create a business system. The missing step is routing attention into a useful path.",
          "For Profit Stacking Secrets, the path is intentionally simple: read the framework, run the calculator, build a plan, then choose a resource, partner offer, book, spreadsheet, or strategy conversation.",
        ],
      },
      {
        heading: "Create one conversion asset from each authority asset",
        body: [
          "A book can become a checklist. A webinar can become a diagnostic. A podcast appearance can become an article. A talk can become a follow-up sequence. This is not content recycling for its own sake; it is making the next step obvious.",
          "Google's guidance around helpful content rewards pages that provide original value and answer the user's real need. Authority assets work better when they become useful explanations, comparisons, and decision tools.",
        ],
      },
      {
        heading: "Measure the chain",
        body: [
          "Track which pages lead to downloads, calculator use, builder engagement, contact requests, or partner clicks. Then improve the weak link instead of rebuilding the entire funnel.",
          "That is the practical meaning of profit stacking: combine existing assets into a clearer sequence before adding more activity.",
        ],
      },
    ],
    references: [
      { label: "Google Search Central: Helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    ],
    cta: { label: "Read the Profit Stacking Framework", href: "/book" },
  },
  {
    slug: "use-ai-automation-without-adding-chaos",
    title: "Use AI Automation Without Adding Chaos",
    description:
      "A practical guide to choosing AI and automation projects that reduce repetitive work, protect quality, and support business leverage.",
    categorySlug: "ai-and-automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-27",
    updatedAt: "2026-08-27",
    keywords: ["AI automation for entrepreneurs", "business automation", "AI workflows", "operating leverage"],
    summary:
      "AI should remove friction from the business, not become another scattered tool pile. Start with repetitive work that already has a clear outcome.",
    sections: [
      {
        heading: "Pick boring automation targets first",
        body: [
          "The best first automation target is usually not the flashiest one. Look for repeated intake, follow-up, summarization, routing, reporting, scheduling, or document preparation tasks that already have a known pattern.",
          "If the process is unclear, automate later. First write the checklist, decide the quality standard, and identify where a person still needs to approve the output.",
        ],
      },
      {
        heading: "Protect trust and data",
        body: [
          "Automation can affect customer experience, privacy, and compliance. Teams should know what data is being collected, where it goes, who can access it, and how mistakes are corrected.",
          "NIST's AI Risk Management Framework is a useful reference point for thinking about AI systems in terms of governance, measurement, management, and trustworthiness, even for small businesses applying lightweight tools.",
        ],
      },
      {
        heading: "Measure time saved and errors avoided",
        body: [
          "A useful automation project should reduce time, errors, delay, or founder dependency. If it only creates more dashboards and prompts, it may be entertainment rather than leverage.",
          "In the Profit Stack Builder, AI and automation should connect to a visible profit lever: follow-up, delivery leverage, internal capability, content reuse, partner campaigns, or decision reporting.",
        ],
      },
    ],
    references: [
      { label: "NIST: AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { label: "FTC: Business guidance on AI", url: "https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check" },
    ],
    cta: { label: "Explore AI & Automation Offers", href: "/categories/ai-and-automation" },
  },
];

export function getArticleBySlug(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(categorySlug: string) {
  return resourceArticles.filter((article) => article.categorySlug === categorySlug);
}

export function getArticleCategory(article: ResourceArticle) {
  return offerCategories.find((category) => category.slug === article.categorySlug);
}
