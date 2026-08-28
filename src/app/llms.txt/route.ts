const siteUrl = "https://profitstackingsecrets.com";

export function GET() {
  const body = `# Profit Stacking Secrets

Profit Stacking Secrets is a profit strategy hub for entrepreneurs who want to find hidden profit already inside their business before adding more traffic, complexity, tools, or team overhead. The site centers on the Profit Stacking framework, a diagnostic calculator, educational resources, and carefully curated next-step offers.

## Primary Pages
- Home: ${siteUrl}/
- Profit Stacking framework and book: ${siteUrl}/book
- Profit Stack Calculator: ${siteUrl}/calculator
- Profit Stack Builder app concept: ${siteUrl}/profit-stack-builder
- Categories: ${siteUrl}/categories
- Offers: ${siteUrl}/offers
- Partner submission page: ${siteUrl}/submit
- Publishing resources: ${siteUrl}/resources
- Article: ${siteUrl}/resources/find-hidden-profit-before-buying-more-traffic
- Article: ${siteUrl}/resources/build-a-follow-up-system-for-lost-leads
- Article: ${siteUrl}/resources/choose-business-offers-by-implementation-fit
- Article: ${siteUrl}/resources/turn-authority-assets-into-profit-paths
- Article: ${siteUrl}/resources/use-ai-automation-without-adding-chaos
- Article: ${siteUrl}/resources/profit-leak-scorecard-for-service-businesses
- Article: ${siteUrl}/resources/package-your-offer-before-you-raise-ad-spend
- Article: ${siteUrl}/resources/use-a-90-day-plan-to-stack-profit-wins
- Article: ${siteUrl}/resources/turn-delivery-work-into-repeatable-systems
- Article: ${siteUrl}/resources/when-to-buy-coaching-course-or-software
- FAQ: ${siteUrl}/faq
- Review methodology: ${siteUrl}/review-methodology
- Editorial policy: ${siteUrl}/editorial-policy
- Disclaimer: ${siteUrl}/safety-disclaimer
- Affiliate disclosure: ${siteUrl}/amazon-disclosure
- Sitemap: ${siteUrl}/sitemap.xml
- RSS feed: ${siteUrl}/feed.xml

## Main Content Areas
- Hidden profit opportunities
- Profit Stack Builder implementation workflow
- Free report to app to book/spreadsheet conversion path
- Revenue leaks and follow-up gaps
- Lead follow-up systems and conversion recovery
- Business offer evaluation and implementation fit
- Authority assets, lead magnets, and measurable conversion paths
- AI automation projects that reduce operational friction
- Offer packaging and buyer clarity
- Service business profit leakage and scorecards
- 90-day profit implementation planning
- Delivery leverage and repeatable operating systems
- Coaching, courses, software, and implementation-fit decisions
- Client expansion and retention
- Delivery leverage and repeatable systems
- Sales and marketing
- AI and automation
- Business systems and operations
- Productivity and time management
- Leadership and team building
- Finance and profitability
- Coaching and consulting
- Speaking and thought leadership
- Legal, IP, and compliance
- Technology and SaaS tools
- Health, mindset, and personal performance
- Books, courses, digital products, events, workshops, and memberships

## Important Notes
- Profit Stacking Secrets does not sell partner offers directly and does not provide legal, tax, financial, medical, or investment advice.
- The site may use affiliate, referral, or partner links and may earn commissions.
- Pricing, commission terms, availability, proof, guarantees, and eligibility can change; users should verify current details with the partner.
- Coaching or consulting may be available as an implementation option, but the primary site experience is educational self-diagnosis and routing to relevant resources.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
