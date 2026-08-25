const siteUrl = "https://profitstackingsecrets.com";

export function GET() {
  const body = `# Profit Stacking Secrets

Profit Stacking Secrets is a profit strategy hub for entrepreneurs who want to find hidden profit already inside their business before adding more traffic, complexity, tools, or team overhead. The site centers on the Profit Stacking framework, a diagnostic calculator, educational resources, and carefully curated next-step offers.

## Primary Pages
- Home: ${siteUrl}/
- Profit Stacking framework and book: ${siteUrl}/book
- Profit Stack Calculator: ${siteUrl}/calculator
- Categories: ${siteUrl}/categories
- Offers: ${siteUrl}/offers
- Partner submission page: ${siteUrl}/submit
- Publishing resources: ${siteUrl}/resources
- FAQ: ${siteUrl}/faq
- Review methodology: ${siteUrl}/review-methodology
- Editorial policy: ${siteUrl}/editorial-policy
- Disclaimer: ${siteUrl}/safety-disclaimer
- Affiliate disclosure: ${siteUrl}/amazon-disclosure
- Sitemap: ${siteUrl}/sitemap.xml

## Main Content Areas
- Hidden profit opportunities
- Revenue leaks and follow-up gaps
- Offer packaging and buyer clarity
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
