"use client";

import { useMemo, useState } from "react";

const levers = [
  {
    key: "followUp",
    label: "Lead follow-up",
    question: "How reliable is your follow-up with qualified leads?",
    low: "Mostly manual",
    high: "Consistent system",
  },
  {
    key: "offers",
    label: "Offer packaging",
    question: "How clearly are your best outcomes packaged and priced?",
    low: "Hard to compare",
    high: "Clear next step",
  },
  {
    key: "retention",
    label: "Client expansion",
    question: "How often do current clients see the next logical thing to buy?",
    low: "Rarely",
    high: "Built in",
  },
  {
    key: "delivery",
    label: "Delivery leverage",
    question: "How much of your delivery is repeatable instead of rebuilt each time?",
    low: "Custom every time",
    high: "Documented system",
  },
  {
    key: "numbers",
    label: "Profit visibility",
    question: "How clearly do you see margin, conversion, and revenue leaks each week?",
    low: "Unclear",
    high: "Visible weekly",
  },
];

function recommendation(score: number) {
  if (score <= 10) {
    return {
      title: "Start with visibility.",
      copy: "Your biggest gain is likely in basic measurement and follow-up. Tighten the weekly numbers, define one best offer, and make sure every qualified lead receives a clear next step.",
    };
  }

  if (score <= 17) {
    return {
      title: "Systemize the obvious gaps.",
      copy: "You probably have useful assets already, but they need cleaner packaging, repeatable follow-up, and a better handoff from interest to implementation.",
    };
  }

  return {
    title: "Look for leverage and expansion.",
    copy: "Your fundamentals are in place. The next profit stack is likely client expansion, partnerships, licensing, certification, or delivery leverage.",
  };
}

export default function ProfitStackCalculator() {
  const [scores, setScores] = useState<Record<string, number>>(() =>
    Object.fromEntries(levers.map((lever) => [lever.key, 3])),
  );

  const updateScore = (key: string, value: number) => {
    const score = Math.min(5, Math.max(1, value));
    setScores((current) => ({ ...current, [key]: score }));
  };

  const total = useMemo(() => Object.values(scores).reduce((sum, value) => sum + value, 0), [scores]);
  const result = recommendation(total);
  const weakest = useMemo(() => {
    const sorted = [...levers].sort((a, b) => scores[a.key] - scores[b.key]);
    return sorted[0];
  }, [scores]);

  return (
    <section className="rounded-lg border border-[#dfe5dc] bg-white p-5 shadow-sm sm:p-8">
      <div className="grid gap-5">
        {levers.map((lever) => (
          <label key={lever.key} className="block rounded-md border border-[#dfe5dc] bg-[#fbfcf9] p-4">
            <span className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <span>
                <span className="text-sm font-black uppercase tracking-[0.12em] text-[#19745d]">{lever.label}</span>
                <span className="mt-2 block text-lg font-black">{lever.question}</span>
              </span>
              <span className="inline-flex min-w-16 justify-center rounded-md bg-[#12231f] px-3 py-2 text-sm font-black text-white">
                {scores[lever.key]}/5
              </span>
            </span>
            <span className="mt-5 grid grid-cols-[44px_1fr_44px] items-center gap-3">
              <button
                type="button"
                onClick={() => updateScore(lever.key, scores[lever.key] - 1)}
                className="grid h-11 w-11 place-items-center rounded-md border border-[#cfd8d0] bg-white text-xl font-black text-[#172424] shadow-sm hover:border-[#19745d] hover:text-[#19745d] focus:outline-none focus:ring-2 focus:ring-[#19745d]"
                aria-label={`Decrease ${lever.label}`}
              >
                -
              </button>
              <input
                type="range"
                min="1"
                max="5"
                value={scores[lever.key]}
                onInput={(event) => updateScore(lever.key, Number(event.currentTarget.value))}
                onChange={(event) => updateScore(lever.key, Number(event.currentTarget.value))}
                className="h-11 w-full cursor-pointer touch-pan-y accent-[#19745d]"
                aria-label={lever.question}
              />
              <button
                type="button"
                onClick={() => updateScore(lever.key, scores[lever.key] + 1)}
                className="grid h-11 w-11 place-items-center rounded-md border border-[#cfd8d0] bg-white text-xl font-black text-[#172424] shadow-sm hover:border-[#19745d] hover:text-[#19745d] focus:outline-none focus:ring-2 focus:ring-[#19745d]"
                aria-label={`Increase ${lever.label}`}
              >
                +
              </button>
            </span>
            <span className="mt-2 flex justify-between text-xs font-bold text-[#596661]">
              <span>{lever.low}</span>
              <span>{lever.high}</span>
            </span>
          </label>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-[#12231f] p-6 text-white">
        <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8ee1bf]">Profit stack score</p>
        <p className="mt-2 text-5xl font-black">{total}/25</p>
        <h2 className="mt-5 text-2xl font-black">{result.title}</h2>
        <p className="mt-3 text-sm font-semibold leading-7 text-[#e8f3ee]">{result.copy}</p>
        <p className="mt-5 rounded-md border border-white/16 bg-white/10 p-4 text-sm font-bold leading-6">
          First area to inspect: <span className="text-[#8ee1bf]">{weakest.label}</span>
        </p>
      </div>
    </section>
  );
}
