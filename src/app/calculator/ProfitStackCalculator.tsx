"use client";

import { FormEvent, useMemo, useState } from "react";

type SubmitState = "idle" | "sending" | "sent" | "error";

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
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  async function handleReportRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("totalScore", String(total));
    formData.set("weakestLever", weakest.label);
    formData.set("scores", JSON.stringify(scores));

    const response = await fetch("/api/calculator-report", {
      method: "POST",
      body: formData,
    });
    const result = await response.json().catch(() => null);

    if (response.ok) {
      form.reset();
      setSubmitState("sent");
      return;
    }

    setErrorMessage(result?.error || "We could not request your report. Please try again.");
    setSubmitState("error");
  }

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
        <form onSubmit={handleReportRequest} className="mt-6 rounded-lg border border-white/16 bg-white/10 p-4">
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
          <div>
            <h3 className="text-xl font-black">Analyze my results.</h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-[#d9ebe4]">
              Send your score to the Profit Stacking follow-up list and get the next-step report sequence.
            </p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-[#8ee1bf]">First name</span>
              <input
                required
                type="text"
                name="firstName"
                autoComplete="given-name"
                className="mt-2 min-h-12 w-full rounded-md border border-white/20 bg-white px-4 text-base text-[#172424] outline-none transition focus:border-[#8ee1bf] focus:ring-4 focus:ring-[#8ee1bf]/20"
              />
            </label>
            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.12em] text-[#8ee1bf]">Email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                className="mt-2 min-h-12 w-full rounded-md border border-white/20 bg-white px-4 text-base text-[#172424] outline-none transition focus:border-[#8ee1bf] focus:ring-4 focus:ring-[#8ee1bf]/20"
              />
            </label>
          </div>
          {submitState === "sent" && (
            <p className="mt-4 rounded-md border border-[#8ee1bf]/50 bg-[#8ee1bf]/15 px-4 py-3 text-sm font-bold leading-6 text-[#eafff6]">
              Your report request is in. Watch your inbox for the next Profit Stacking steps.
            </p>
          )}
          {submitState === "error" && (
            <p className="mt-4 rounded-md border border-[#f4b69f]/60 bg-[#f4b69f]/15 px-4 py-3 text-sm font-bold leading-6 text-[#ffe3d8]">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            disabled={submitState === "sending"}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[#28a37d] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#218865] disabled:cursor-not-allowed disabled:bg-[#6d998b]"
          >
            {submitState === "sending" ? "Sending..." : "Analyze My Results, Send Me the Report"}
          </button>
        </form>
      </div>
    </section>
  );
}
