const siteUrl = "https://profitstackingsecrets.com";

export function GET() {
  const body = `# Profit Stacking Secrets

Profit Stacking Secrets is a curated partner-offer marketplace for entrepreneurs comparing high-level programs, services, tools, workshops, memberships, books, courses, and advisory offers.

## Primary Pages
- Home: ${siteUrl}/
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
- Profit Stacking Secrets does not sell partner offers directly.
- The site may use affiliate, referral, or partner links and may earn commissions.
- Pricing, commission terms, availability, proof, guarantees, and eligibility can change; users should verify current details with the partner.
- Content is general business information and does not replace legal, financial, medical, compliance, or professional advice.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
