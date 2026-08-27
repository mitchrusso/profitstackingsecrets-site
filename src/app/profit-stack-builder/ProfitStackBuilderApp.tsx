"use client";

import { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Clipboard, RotateCcw, Sparkles } from "lucide-react";

type Scores = Record<string, number>;

const assessmentAreas = [
  {
    key: "financialVisibility",
    label: "Financial visibility",
    low: "Numbers are scattered",
    high: "Tracked monthly",
    question: "Revenue, profit, list size, lead sources, and conversion signals are visible enough to guide weekly decisions.",
    move: "Create a monthly tracking rhythm for revenue, net profit, list growth, lead sources, open rates, and customer lifetime value.",
  },
  {
    key: "affiliateMarketing",
    label: "Affiliate programs",
    low: "No partner channel",
    high: "Active partner system",
    question: "You have an affiliate offer, commission structure, tracking, creative assets, and a way to recruit partners.",
    move: "Define the affiliate offer, payout, promotional assets, tracking method, signup page, and a short list of people who already reach your buyers.",
  },
  {
    key: "internalCapabilities",
    label: "Internal capability",
    low: "Founder does it all",
    high: "Team/system owned",
    question: "Copy, follow-up, sales, delivery, social, and partner communication are not all dependent on the founder.",
    move: "Document the repeating work first, then assign one recurring task to a person, tool, or repeatable checklist.",
  },
  {
    key: "jointVentures",
    label: "Joint ventures",
    low: "No JV motion",
    high: "Campaign-ready",
    question: "You can run partner campaigns with clear tracking, promotional materials, follow-up, and a compelling rev-share reason.",
    move: "Prepare one JV campaign kit: partner email copy, landing page, tracking links, prize/spiff idea, offer terms, and follow-up calendar.",
  },
  {
    key: "speaking",
    label: "Speaking from stage",
    low: "No stage strategy",
    high: "Offer-enabled talks",
    question: "Speaking, sponsorship, webinars, podcasts, or stages lead to a measurable next step instead of only visibility.",
    move: "Create one talk-to-offer bridge: topic, audience, lead magnet, follow-up offer, and a measurable call to action.",
  },
  {
    key: "membership",
    label: "Memberships",
    low: "No recurring offer",
    high: "Retention system",
    question: "There is a recurring membership, community, continuity offer, or renewal path that keeps useful value in front of customers.",
    move: "Test a simple continuity layer: monthly office hours, library access, implementation calls, templates, or a private member track.",
  },
  {
    key: "courses",
    label: "Courses",
    low: "One-off training",
    high: "Progressive curriculum",
    question: "Courses are organized into a progression, include a clear upsell/cross-sell, and point buyers toward the next outcome.",
    move: "Map course buyers to the next step: second course, implementation support, community, certification, or premium review.",
  },
  {
    key: "offerStack",
    label: "Products and offer stack",
    low: "One isolated offer",
    high: "Clear ascension path",
    question: "Products, courses, books, memberships, coaching, or services naturally lead to the next logical purchase.",
    move: "Map the buyer journey from first yes to deeper result: low-friction entry, core offer, expansion offer, and premium help.",
  },
  {
    key: "events",
    label: "Live events",
    low: "No event leverage",
    high: "Monetized event path",
    question: "Live events, workshops, recordings, sponsorships, or replay packages are used to create leads, offers, and follow-up sales.",
    move: "Package one event asset into a second sale: replay, notes, workbook, VIP session, follow-up program, or next event invitation.",
  },
  {
    key: "webinars",
    label: "Webinars and video",
    low: "No video funnel",
    high: "Reusable presentation engine",
    question: "Webinars, live video, YouTube, or recorded presentations create reusable lead flow and offer education.",
    move: "Turn one proven explanation into a reusable video asset with a landing page, email follow-up, and a clear next offer.",
  },
  {
    key: "advertising",
    label: "Advertising",
    low: "No ROI clarity",
    high: "ROI by channel",
    question: "Paid channels are tracked by cost per sale, revenue, and margin so spending shifts toward what actually works.",
    move: "Create a channel scorecard for spend, leads, sales, cost per sale, revenue, profit, and decision notes.",
  },
  {
    key: "authorityAssets",
    label: "Books and authority assets",
    low: "Invisible expertise",
    high: "Book/media engine",
    question: "Books, podcasts, videos, articles, speaking, webinars, or summits are actively used to create trust and lead flow.",
    move: "Pick one authority asset and turn it into three conversion assets: a lead magnet, a short email sequence, and a clear call to action.",
  },
  {
    key: "websiteContent",
    label: "Website, blog, and ebooks",
    low: "Static site",
    high: "Conversion content hub",
    question: "Your website, blog, lead magnets, ebooks, and resource pages capture intent and route visitors to the right next action.",
    move: "Add or improve three pages: one problem page, one authority/resource page, and one conversion page with a specific next step.",
  },
  {
    key: "podcasting",
    label: "Podcasting",
    low: "No podcast leverage",
    high: "Audience monetized",
    question: "Podcast appearances, your own show, guest relationships, and sponsor/affiliate opportunities are converted into measurable leads.",
    move: "Build a podcast conversion checklist: episode CTA, guest follow-up, partner offer, transcript/article reuse, and tracking link.",
  },
  {
    key: "commerceStores",
    label: "Amazon and Shopify stores",
    low: "No store strategy",
    high: "Margin-aware store",
    question: "Storefronts, product bundles, affiliate recommendations, or physical products are tied to margin, fulfillment, and repeat buyers.",
    move: "Review store economics: loaded cost, margin, fulfillment effort, refunds, affiliate alternatives, and cross-sell potential.",
  },
  {
    key: "deliveryLeverage",
    label: "Delivery leverage",
    low: "Custom every time",
    high: "Packaged system",
    question: "The work you deliver is packaged, repeatable, and reusable enough to improve margin without hurting client outcomes.",
    move: "Convert your most repeated delivery steps into templates, checklists, modules, recordings, or a paid implementation tool.",
  },
  {
    key: "qualityOfLife",
    label: "Quality of life",
    low: "Business owns you",
    high: "Business supports life",
    question: "The profit strategy supports your 90-day and one-year goals without creating a business that consumes your life.",
    move: "Choose one profit move that improves money and reduces complexity: pricing, delegation, packaging, automation, or stopping low-value work.",
  },
];

const defaultScores = Object.fromEntries(assessmentAreas.map((area) => [area.key, 3]));

const startingSnapshot = {
  business: "",
  audience: "",
  coreOffer: "",
  monthlyRevenue: "",
  monthlyProfit: "",
  listSize: "",
  openRate: "",
  lifetimeValue: "",
  conversionRate: "",
  leadSource: "",
  currentGoal: "",
};

type Snapshot = typeof startingSnapshot;

function scoreBand(total: number, maxScore: number) {
  const ratio = total / maxScore;

  if (ratio <= 0.45) {
    return {
      title: "Stabilize the base first.",
      copy: "The fastest profit may come from seeing the numbers clearly, following up better, and packaging one offer so buyers know what to do next.",
    };
  }

  if (ratio <= 0.72) {
    return {
      title: "Systemize the strongest opportunities.",
      copy: "You have pieces to work with. The next gain is likely from connecting existing assets into a clearer sequence instead of adding more random activity.",
    };
  }

  return {
    title: "Scale leverage and partnerships.",
    copy: "The foundation is strong enough to test bigger profit stacks: JV campaigns, licensing, certification, memberships, premium implementation, or a productized app.",
  };
}

function clean(value: string | undefined, fallback: string) {
  return value?.trim() || fallback;
}

export default function ProfitStackBuilderApp() {
  const [snapshot, setSnapshot] = useState<Snapshot>(startingSnapshot);
  const [scores, setScores] = useState<Scores>(defaultScores);
  const [copied, setCopied] = useState(false);

  const totalScore = useMemo(() => Object.values(scores).reduce((sum, value) => sum + value, 0), [scores]);
  const maxScore = assessmentAreas.length * 5;
  const band = scoreBand(totalScore, maxScore);
  const ranked = useMemo(
    () => [...assessmentAreas].sort((a, b) => scores[a.key] - scores[b.key]),
    [scores],
  );
  const priorities = ranked.slice(0, 3);
  const strengths = [...ranked].reverse().slice(0, 2);

  const planText = useMemo(() => {
    const business = clean(snapshot.business, "this business");
    const audience = clean(snapshot.audience, "the current audience");
    const goal = clean(snapshot.currentGoal, "increase profit without adding unnecessary complexity");
    const offer = clean(snapshot.coreOffer, "the core offer");
    const leadSource = clean(snapshot.leadSource, "the strongest current lead source");

    return [
      `Profit Stack Plan for ${business}`,
      `Audience: ${audience}`,
      `Core offer: ${offer}`,
      `Primary goal: ${goal}`,
      `Monthly revenue: ${clean(snapshot.monthlyRevenue, "not entered")}`,
      `Monthly profit: ${clean(snapshot.monthlyProfit, "not entered")}`,
      `List size: ${clean(snapshot.listSize, "not entered")}`,
      `Average open rate: ${clean(snapshot.openRate, "not entered")}`,
      `Average lifetime value: ${clean(snapshot.lifetimeValue, "not entered")}`,
      `Lead-to-sale conversion: ${clean(snapshot.conversionRate, "not entered")}`,
      `Current lead source to inspect first: ${leadSource}`,
      "",
      `Score: ${totalScore}/${maxScore} - ${band.title}`,
      band.copy,
      "",
      "First 30 days: make the leak visible",
      `- Track revenue, profit, list size, lead source, and follow-up activity weekly.`,
      `- Focus first on ${priorities[0].label}: ${priorities[0].move}`,
      "",
      "Days 31-60: package the next buying step",
      `- Improve ${priorities[1].label}: ${priorities[1].move}`,
      `- Connect the free report, calculator, app, book/spreadsheet, and consultation path into one sequence.`,
      "",
      "Days 61-90: add leverage",
      `- Improve ${priorities[2].label}: ${priorities[2].move}`,
      `- Use the strongest existing asset (${strengths[0].label}) to create partner, referral, or repeatable delivery leverage.`,
    ].join("\n");
  }, [band.copy, band.title, maxScore, priorities, snapshot, strengths, totalScore]);

  function updateSnapshot(key: keyof Snapshot, value: string) {
    setSnapshot((current) => ({ ...current, [key]: value }));
  }

  async function copyPlan() {
    await navigator.clipboard.writeText(planText);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function reset() {
    setSnapshot(startingSnapshot);
    setScores(defaultScores);
    setCopied(false);
  }

  return (
    <section className="grid gap-8">
      <div className="grid gap-5 rounded-lg border border-[#dfe5dc] bg-white p-5 shadow-sm sm:p-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#19745d]">Step 1</p>
          <h2 className="mt-2 text-2xl font-black">Business snapshot</h2>
          <p className="mt-3 text-sm font-semibold leading-7 text-[#596661]">
            This mirrors the book’s tracking section: get the basic facts out of your head so the next move can be chosen from evidence.
          </p>
        </div>
        <div className="grid gap-3">
          {[
            ["business", "Business name"],
            ["audience", "Who do you sell to?"],
            ["coreOffer", "Core offer"],
            ["currentGoal", "Main profit goal"],
            ["leadSource", "Best current lead source"],
          ].map(([key, label]) => (
            <label key={key} className="grid gap-2 text-sm font-black text-[#172424]">
              {label}
              <input
                value={snapshot[key as keyof Snapshot]}
                onChange={(event) => updateSnapshot(key as keyof Snapshot, event.target.value)}
                className="min-h-11 rounded-md border border-[#cfd9d2] bg-[#fbfcf9] px-3 text-base font-semibold outline-none focus:border-[#19745d]"
              />
            </label>
          ))}
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["monthlyRevenue", "Monthly revenue"],
              ["monthlyProfit", "Monthly profit"],
              ["listSize", "List size"],
              ["openRate", "Avg open rate"],
              ["lifetimeValue", "Lifetime value"],
              ["conversionRate", "Conversion rate"],
            ].map(([key, label]) => (
              <label key={key} className="grid min-w-0 gap-2 text-sm font-black text-[#172424]">
                {label}
                <input
                  value={snapshot[key as keyof Snapshot]}
                  onChange={(event) => updateSnapshot(key as keyof Snapshot, event.target.value)}
                  className="min-h-11 w-full min-w-0 rounded-md border border-[#cfd9d2] bg-[#fbfcf9] px-3 text-base font-semibold outline-none focus:border-[#19745d]"
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 rounded-lg border border-[#dfe5dc] bg-white p-5 shadow-sm sm:p-6">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#19745d]">Step 2</p>
          <h2 className="mt-2 text-2xl font-black">Score the profit stack</h2>
          <p className="mt-3 text-sm font-semibold leading-7 text-[#596661]">
            These prompts come from the spreadsheet’s self-assessment areas: affiliate programs, internal capabilities, joint ventures, speaking, memberships, courses, products, live events, webinars, advertising, authority, content, podcasting, stores, delivery leverage, and quality of life.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {assessmentAreas.map((area) => (
            <label key={area.key} className="rounded-md border border-[#dfe5dc] bg-[#fbfcf9] p-4">
              <span className="flex items-start justify-between gap-4">
                <span>
                  <span className="block text-base font-black">{area.label}</span>
                  <span className="mt-2 block text-sm font-semibold leading-6 text-[#596661]">{area.question}</span>
                </span>
                <span className="rounded-md bg-white px-3 py-2 text-sm font-black text-[#19745d] shadow-sm">
                  {scores[area.key]}/5
                </span>
              </span>
              <input
                type="range"
                min="1"
                max="5"
                value={scores[area.key]}
                onChange={(event) => setScores((current) => ({ ...current, [area.key]: Number(event.target.value) }))}
                className="mt-5 w-full accent-[#19745d]"
              />
              <span className="mt-2 flex justify-between text-xs font-bold text-[#596661]">
                <span>{area.low}</span>
                <span>{area.high}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="rounded-lg border border-[#10231f] bg-[#10231f] p-6 text-white shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8ee1bf]">Step 3</p>
          <p className="mt-3 text-6xl font-black">{totalScore}/{maxScore}</p>
          <h2 className="mt-4 text-2xl font-black">{band.title}</h2>
          <p className="mt-3 text-sm font-semibold leading-7 text-[#dcefe7]">{band.copy}</p>
          <div className="mt-6 rounded-md border border-white/15 bg-white/10 p-4">
            <p className="text-sm font-black text-[#8ee1bf]">Best next move</p>
            <p className="mt-2 text-base font-black">{priorities[0].label}</p>
            <p className="mt-2 text-sm leading-6 text-[#dcefe7]">{priorities[0].move}</p>
          </div>
        </aside>

        <div className="rounded-lg border border-[#dfe5dc] bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#19745d]">Generated 90-day plan</p>
              <h2 className="mt-2 text-2xl font-black">Turn the diagnosis into implementation.</h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={copyPlan}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#19745d] px-4 py-2 text-sm font-black text-white hover:bg-[#125944]"
              >
                <Clipboard className="h-4 w-4" aria-hidden />
                {copied ? "Copied" : "Copy Plan"}
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[#cfd9d2] bg-white px-4 py-2 text-sm font-black text-[#172424] hover:bg-[#f5f6f2]"
              >
                <RotateCcw className="h-4 w-4" aria-hidden />
                Reset
              </button>
            </div>
          </div>
          <pre className="mt-5 whitespace-pre-wrap rounded-md border border-[#dfe5dc] bg-[#fbfcf9] p-4 text-sm font-semibold leading-7 text-[#364541]">
            {planText}
          </pre>
        </div>
      </div>

      <div className="rounded-lg border border-[#dfe5dc] bg-[#fffdf7] p-6 shadow-sm">
        <div className="flex gap-3">
          <Sparkles className="mt-1 h-6 w-6 flex-none text-[#19745d]" aria-hidden />
          <div>
            <h2 className="text-2xl font-black">Natural upsell sequence</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {[
                "Free report creates belief.",
                "Calculator identifies the gap.",
                "Builder creates the action plan.",
                "Book, spreadsheet, partner offer, or strategy help supports implementation.",
              ].map((item) => (
                <div key={item} className="flex gap-2 rounded-md border border-[#dfe5dc] bg-white p-4 text-sm font-bold leading-6 text-[#596661]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#19745d]" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="/book"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#172424] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white hover:bg-[#2d3f3f] sm:w-fit"
      >
        Get the book and spreadsheet path <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </section>
  );
}
