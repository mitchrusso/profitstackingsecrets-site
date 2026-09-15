import { offerCategories } from "./offers";

export type ArticleReference = {
  label: string;
  url: string;
};

export type ResourceArticle = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  categorySlug: string;
  image: string;
  imageAlt?: string;
  publishedAt: string;
  updatedAt: string;
  keywords: string[];
  summary: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  table?: { caption: string; columns: string[]; rows: string[][] };
  references: ArticleReference[];
  cta: {
    label: string;
    href: string;
  };
};

export const resourceArticles: ResourceArticle[] = [
  {
    "slug": "founder-dependency-audit-which-work-should-become-a-system",
    "title": "Founder Dependency Audit: Which Work Should Become a System?",
    "seoTitle": "Founder Dependency Audit: Which Work Should Become a System?",
    "imageAlt": "Original founder dependency network with three incoming work requests converging on a founder and one bounded handoff to an authorized owner.",
    "description": "Find work that stalls without the founder. Use an interruption log, clear decision limits, and a supervised handoff to test one operating system.",
    "categorySlug": "finance-and-profitability",
    "image": "/images/founder-dependency-audit-which-work-should-become-a-system-original.svg",
    "publishedAt": "2026-09-15T09:00:00-04:00",
    "updatedAt": "2026-09-15",
    "keywords": [
      "founder dependency audit",
      "offer profitability",
      "contribution margin"
    ],
    "summary": "Start a founder dependency audit with work that repeatedly stops when you are unavailable. Record the interruption, the decision needed, and the consequence of waiting. Then choose one recurring, bounded task that another authorized person could complete with clear inputs and escalation rules. The goal is a reliable handoff; creating a large manual before you know where work stalls can consume time without relieving the bottleneck.",
    "sections": [
      {
        "heading": "Start here",
        "body": [
          "Start a founder dependency audit with work that repeatedly stops when you are unavailable. Record the interruption, the decision needed, and the consequence of waiting. Then choose one recurring, bounded task that another authorized person could complete with clear inputs and escalation rules. The goal is a reliable handoff; creating a large manual before you know where work stalls can consume time without relieving the bottleneck."
        ]
      },
      {
        "heading": "TL;DR",
        "body": [
          "Track founder interruptions for five working days. Separate missing information, missing authority, missing skill, and relationship-dependent judgment. Prioritize a frequent task with a visible output and manageable consequences. Document the decision boundaries, let a colleague perform a supervised example, and compare the result with an agreed standard. Measure founder time, rework, customer impact, and operating cost before expanding the handoff."
        ]
      },
      {
        "heading": "Log interruptions without judging the person asking",
        "body": [
          "Create a simple log with date, task, request, time spent, reason for escalation, and what happened while the request waited. Include interruptions that arrive by message, during meetings, and through last-minute rescue work. Record a reasonable estimate when precise timing would be intrusive. The purpose is to see a pattern, not to build surveillance of employees or punish people for asking a necessary question.",
          "Write the actual decision instead of a broad department label. “Sales” is too vague. “Approve a discount for a returning customer whose renewal includes a new deliverable” describes a decision you can examine. Add whether the relevant scope, price, or customer record was already available. This often reveals that the first improvement is a reliable source of information rather than a new hire or a complicated workflow."
        ]
      },
      {
        "heading": "Distinguish ownership from founder access",
        "body": [
          "A task can have an assigned employee and still depend on the founder for every meaningful choice. Ask what that person is authorized to decide, which information they can access, and when they must escalate. Responsibility without decision rights often creates a queue of requests. Conversely, broad authority without limits can expose customers and the business to commitments nobody intended.",
          "Use a concrete example to define the boundary. A customer-support owner might be authorized to correct a duplicate invoice after confirming the underlying record, while a disputed contract interpretation goes to the appropriate manager or adviser. The right limits depend on your business. Do not copy another company's dollar threshold and assume it fits your cash position, obligations, or fraud controls."
        ]
      },
      {
        "heading": "Select a task with a visible finish",
        "body": [
          "Good early candidates recur often enough to practice and produce something you can inspect: a prepared invoice, an onboarding packet, a weekly capacity report, or a routine scheduling decision. Avoid choosing the most emotionally difficult client negotiation simply because it consumes the most founder energy. That task may require relationship development or specialist judgment before it can be handed off responsibly.",
          "Score candidate tasks on frequency, founder time, delay cost, variability, and the consequences of an error. You do not need a mathematically elaborate ranking. A short discussion around actual examples is often enough to identify one useful starting point. Keep legal, tax, employment, payment-authorization, and confidential-data decisions subject to appropriate professional and organizational controls."
        ]
      },
      {
        "heading": "Write a one-task operating note",
        "body": [
          "Include the trigger, required inputs, steps, expected output, location of the final record, and conditions requiring escalation. Link to the current source of prices, contract terms, or customer information instead of copying values into several documents. Duplicated reference data can turn a correct procedure into a source of conflicting instructions when one copy becomes outdated.",
          "Add one ordinary example and one exception. For onboarding, the ordinary example might show a complete signed scope and approved start date. The exception might show a missing authorization that prevents scheduling. Use synthetic or appropriately redacted customer information for training. A screenshot containing private data is not automatically acceptable because the document is intended for internal use."
        ]
      },
      {
        "heading": "Test the handoff with real observation",
        "body": [
          "Have the colleague explain the instructions back to you, then perform an authorized example while you observe. Note where they stop, which information they seek, and where the written note is ambiguous. Avoid silently completing the difficult step yourself. If you rescue the task without documenting why, the apparent success can conceal the dependency you intended to remove.",
          "For the next example, reduce intervention while retaining the review appropriate to the task's risk. Compare the output with the agreed standard before it affects a customer or financial record when that review is required. If a mistake occurs, ask whether the input, instruction, skill, authority, or workload caused it. Rewriting the entire manual is rarely necessary when one unclear decision boundary caused the failure."
        ]
      },
      {
        "heading": "Calculate the operating effect honestly",
        "body": [
          "Use illustrative arithmetic to estimate the value of the change. Suppose a task previously used four founder hours each week. After handoff it uses one founder review hour and three employee hours. The founder has recovered three hours of capacity, but the business has not automatically earned more profit. Training, supervision, wages, rework, and what the founder does with the recovered time all affect the result.",
          "Track those factors separately. Record founder time before and after, colleague time, errors, customer complaints, and any additional software expense. Compare similar work volumes so a quiet week does not look like a process breakthrough. Treat a short pilot as local operating evidence, not a forecast of guaranteed savings or revenue. See the SBA business-management guide for related finance, employee, and compliance considerations."
        ]
      },
      {
        "heading": "Make continuity part of the design",
        "body": [
          "A handoff from one indispensable person to another is useful but incomplete. Identify a backup for essential work and show where the current instructions and authorized access live. Do not share personal passwords to make the process work. Use appropriate individual accounts and access permissions, and involve your technology provider when access recovery or security needs attention.",
          "The SBA emergency-preparation guidance emphasizes plans tailored to business operations and practicing them with staff. Apply that principle narrowly here: rehearse the selected task during a planned founder absence. Confirm that ordinary work proceeds and that exceptions reach a known backup. Do not simulate an absence by abandoning urgent customer or employee obligations."
        ]
      },
      {
        "heading": "Keep the procedure current",
        "body": [
          "Assign someone to own the operating note. Add a version date and a practical review trigger, such as a price change, revised offer, new system, or repeated exception. A monthly reminder can help, but a known change should not wait for the calendar. Archive superseded instructions so a search does not return several apparently current answers.",
          "After the pilot, decide whether to keep, revise, or pause the handoff. Make that decision with the colleague who performed the work. Their observations may identify a simpler service design or an unnecessary approval. Keep the next improvement small enough to evaluate rather than turning a successful single-task handoff into an immediate company-wide reorganization."
        ]
      },
      {
        "heading": "FAQs",
        "body": [
          "Should I document everything I do?.",
          "Begin with repeated bottlenecks and essential continuity needs. A focused procedure that is used and maintained is more useful than an exhaustive archive nobody can navigate.",
          "Does delegation mean I stop reviewing?.",
          "No. Match review to the task, the person's demonstrated capability, and the consequences of an error. Define review responsibility explicitly instead of relying on the founder to notice problems informally.",
          "What should I do first?.",
          "Open a five-day interruption log and record the next actual request for your involvement. At the end of the week, choose one bounded task for a supervised handoff. Explore our business resources for related margin and delivery planning."
        ]
      },
      {
        "heading": "Business disclaimer",
        "body": [
          "This is an operational planning method, not legal, tax, employment, or investment advice. It does not guarantee profit, revenue, valuation, or owner independence. Use qualified advisers for regulated decisions and evaluate costs and customer outcomes before expanding a change."
        ]
      }
    ],
    "table": {
      "caption": "At a glance",
      "columns": [
        "Why work stops",
        "Example",
        "First intervention"
      ],
      "rows": [
        [
          "Information exists only with founder",
          "Team cannot find an approved scope",
          "Put the current record in an accessible location"
        ],
        [
          "Authority is unclear",
          "Every ordinary refund waits for approval",
          "Define authorized limits and exceptions"
        ],
        [
          "Skill is missing",
          "Nobody else can reconcile a report",
          "Train with worked examples and review"
        ],
        [
          "Customer relationship is concentrated",
          "Client will speak only with founder",
          "Introduce a responsible second contact"
        ],
        [
          "Task itself is unstable",
          "Each delivery uses a different promise",
          "Stabilize the service before documenting it"
        ]
      ]
    },
    "references": [
      {
        "label": "SBA business-management guide",
        "url": "https://www.sba.gov/counseling/manage-your-business/"
      },
      {
        "label": "SBA emergency-preparation guidance",
        "url": "https://www.sba.gov/business-guide/manage-your-business/prepare-emergencies"
      }
    ],
    "cta": {
      "label": "Run the Profit Stack Calculator",
      "href": "/calculator"
    }
  },
  {
    "slug": "renewal-revenue-map-find-the-missing-second-sale",
    "title": "Renewal Revenue Map: Find the Missing Second Sale",
    "seoTitle": "Renewal Revenue Map: Find the Missing Second Sale",
    "imageAlt": "Original renewal journey diagram with separate customer stages and an explicit delivery issue branch before a renewal offer.",
    "description": "Renewal Revenue Map: Find the Missing Second Sale: a practical, researched guide with decisions, implementation steps, a comparison table, an original visual, s",
    "categorySlug": "finance-and-profitability",
    "image": "/images/renewal-revenue-map-find-the-missing-second-sale-original.svg",
    "publishedAt": "2026-09-14T09:00:00-04:00",
    "updatedAt": "2026-09-14",
    "keywords": [
      "customer renewal revenue",
      "offer profitability",
      "contribution margin"
    ],
    "summary": "Map renewal revenue by following eligible customers from the end of their first purchase to a clear next decision. Separate customers who no longer need the offer from those who received poor delivery, never saw a renewal option, or could not understand its value. Improve the broken step before adding discounts or assuming every customer should buy again.",
    "sections": [
      {
        "heading": "Start here",
        "body": [
          "Map renewal revenue by following eligible customers from the end of their first purchase to a clear next decision. Separate customers who no longer need the offer from those who received poor delivery, never saw a renewal option, or could not understand its value. Improve the broken step before adding discounts or assuming every customer should buy again."
        ]
      },
      {
        "heading": "At a glance: follow the renewal path",
        "body": [
          "1. Define who is genuinely eligible to renew. Use the offer's actual cycle and customer need. 2. Match invoices to delivery and customer records. Separate billed, collected, refunded, and outstanding amounts. 3. Locate the missing transition. Distinguish delivery problems, no offer, unclear value, declined offers, and payment failures. 4. Calculate contribution after renewal costs. Include support, fulfillment, discounts, fees, and expected rework. 5. Test one useful change with a small eligible group. Protect customer choice and existing contract terms. 6. Review cash, margin, and customer outcomes together. A second sale is valuable only when the business can deliver it responsibly."
        ]
      },
      {
        "heading": "Define renewal before counting it",
        "body": [
          "A renewal might mean continuing a recurring service, purchasing another project, replacing a consumable product, or returning for a new engagement. These are different behaviors. Choose one definition for the first map and specify the normal decision window. A customer whose annual service is only three months old should not be counted as a missed renewal.",
          "Identify the relevant customer cohort: for example, customers whose initial engagement ended in the same month and who could reasonably benefit from continued service. Exclude customers who purchased a genuinely one-time solution unless there is a distinct, useful next need. A healthy business can have satisfied customers who do not need another sale.",
          "Record the dates and assumptions behind eligibility. If you later change the definition, recalculate the comparison group rather than combining incompatible periods. Clear denominators matter: “20 renewals” means little without knowing whether 25 or 200 customers were eligible and whether all received an offer."
        ]
      },
      {
        "heading": "Reconcile the customer and money records",
        "body": [
          "Start with invoices, collections, credits, refunds, delivery completion, and the relevant customer communications. A CRM stage called “renewed” may represent a verbal promise rather than collected money. Likewise, an invoice can be issued before the customer has paid or before the service can be delivered.",
          "Use a stable customer identifier to join records. Check duplicates, renamed companies, multiple contacts, and separate purchases belonging to the same account. Do not let a spreadsheet count two invoices for one renewal as two retained customers. Preserve transaction-level evidence so a surprising result can be traced back to its source.",
          "The SBA business management resources emphasize proper bookkeeping as part of managing finances. For this operational map, keep collected cash, recognized revenue, and delivery obligations clearly labeled and review accounting treatment with your accountant. The map supports decisions; it should not silently redefine the business's accounting policies."
        ]
      },
      {
        "heading": "Draw the stages customers actually pass through",
        "body": [
          "Use a short sequence: eligible, delivery complete, outcome reviewed, renewal offered, decision received, payment collected, next service started. Adapt those stages to your business, but make each one observable. “Engaged” or “warm” is harder to audit than “received a written renewal proposal on September 3.”",
          "For every eligible customer, record the last completed stage and the reason the next stage has not occurred. A missing proposal calls for a different response from an unresolved delivery complaint. A customer who explicitly declines should not remain indefinitely in a optimistic “follow up” category that hides the decision.",
          "Keep reason codes small and useful. Begin with no remaining need, delivery issue, no offer sent, unclear scope or value, budget or timing, declined for another reason, and payment or administration problem. Preserve the customer's actual explanation alongside the category. Staff guesses should be marked unconfirmed rather than presented as customer research."
        ]
      },
      {
        "heading": "Use a renewal worksheet",
        "body": [
          "The worksheet helps assign work without treating every nonrenewal as a sales objection. Sometimes the correct action is to close the record respectfully. Sometimes it is to improve first-delivery quality. Those conclusions may reduce short-term offers while improving the reliability of the business."
        ]
      },
      {
        "heading": "Check contribution before offering a discount",
        "body": [
          "Consider a hypothetical renewal priced at $1,000. Suppose direct fulfillment is $550, payment fees are $30, and expected incremental support is $120. That leaves $300 of contribution before fixed overhead and other costs not included in this simplified example. A $150 discount would reduce that contribution to $150 if the other costs stayed unchanged.",
          "These numbers are illustrations, not expected results. Use your actual delivery records and account for refunds, rework, contractor charges, variable software costs, and founder time where relevant. If additional volume requires hiring or another capacity step, model that separately rather than assuming every new renewal has the same cost.",
          "A discount can also affect customer expectations and future pricing. Before using one, identify the barrier it addresses. If the customer does not understand the next deliverable or is dissatisfied with the first, a lower price may conceal the underlying problem. Test a clearer scope or delivery repair before assuming price is the cause."
        ]
      },
      {
        "heading": "Run one bounded renewal experiment",
        "body": [
          "Choose a small eligible group with comparable circumstances and change one practical step. Examples include scheduling an outcome review before the service ends, sending a clearer scope summary, or assigning one owner to unresolved payment administration. Write what you expect to change and what would count as a poor result.",
          "Record the offer date, customer response, collected amount, incremental delivery cost, and any complaint or cancellation. Keep a comparison with the prior process, while acknowledging differences in customer mix and timing. A small test can suggest a useful operational change; it cannot prove a universal retention lift.",
          "Preserve customer choice. Follow the actual agreement and applicable renewal, cancellation, advertising, and communication requirements. Do not silently convert a one-time purchase into recurring billing or represent a follow-up service as mandatory when it is optional. Use the FTC advertising and marketing guidance when reviewing claims and seek legal advice for specific contract or subscription questions."
        ]
      },
      {
        "heading": "Review the second delivery, too",
        "body": [
          "Do not stop measuring when payment arrives. Check whether renewed work starts on time, meets the agreed scope, and consumes the expected capacity. A renewal campaign that creates late delivery or expensive rework may worsen contribution even while gross sales increase.",
          "Keep the owner of the renewal map connected with the delivery team. If several customers request the same missing capability, evaluate whether to build it, price it separately, refer the need elsewhere, or decline it. Selling an unplanned promise repeatedly is not a renewal strategy.",
          "At the end of the trial, compare collected cash, contribution, workload, and customer outcomes. Keep a change when the evidence supports it, revise it when the mechanism is unclear, and stop it when it creates harm or unreliable delivery. Record the limits of the conclusion so the next team member does not mistake an early observation for a guaranteed result."
        ]
      },
      {
        "heading": "FAQ",
        "body": [
          "Is every customer who does not renew a lost opportunity?.",
          "No. Some needs end, some offers are deliberately one-time, and some customers are better served by another option. Eligibility and fit should come before persuasion.",
          "Should I count an accepted proposal as revenue?.",
          "Keep accepted proposals, invoices, collections, and accounting revenue in separate fields. Ask your accountant about the correct recognition treatment for your business.",
          "What is the first number to calculate?.",
          "Count eligible customers and locate their last completed stage. That reveals whether the immediate problem is missing information, delivery, offers, decisions, or collection before you optimize a headline rate."
        ]
      },
      {
        "heading": "Your next action and limits",
        "body": [
          "Map ten recently eligible customers using existing records. Assign one unresolved transition an owner and a review date. Then compare the proposed improvement with its delivery cost using the profit calculator and the Profit Stacking framework.",
          "Educational disclaimer: this is general business information, not legal, tax, accounting, investment, or earnings advice. Renewal experiments can fail, and no revenue, retention, margin, or profit outcome is promised. Use qualified advisers for material decisions and complete records for every financial comparison."
        ]
      }
    ],
    "table": {
      "caption": "Use a renewal worksheet",
      "columns": [
        "Last completed stage",
        "Question to investigate",
        "Responsible action",
        "Guardrail"
      ],
      "rows": [
        [
          "Initial delivery",
          "Was the promised work completed and accepted?",
          "Resolve delivery gaps before selling more",
          "Do not charge again to fix an existing obligation"
        ],
        [
          "Outcome review",
          "Does the customer have a useful next need?",
          "Discuss fit and remaining priorities",
          "Accept a valid decision not to continue"
        ],
        [
          "Renewal offer",
          "Was scope, price, timing, and choice clear?",
          "Clarify the offer and decision date",
          "Avoid misleading urgency or earnings claims"
        ],
        [
          "Customer acceptance",
          "Is payment or administration blocking the start?",
          "Resolve the specific issue through approved channels",
          "Protect payment data and contract terms"
        ],
        [
          "Second delivery",
          "Can the business fulfill the added work?",
          "Reserve realistic capacity",
          "Do not overload the team to inflate sales"
        ]
      ]
    },
    "references": [
      {
        "label": "SBA business management resources",
        "url": "https://www.sba.gov/counseling/manage-your-business/"
      },
      {
        "label": "FTC advertising and marketing guidance",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing"
      }
    ],
    "cta": {
      "label": "Run the Profit Stack Calculator",
      "href": "/calculator"
    }
  },
  {
    "slug": "productized-service-scope-protect-margin-without-cutting-value",
    "seoTitle": "Productized Service Scope: Protect Value and Margin",
    "imageAlt": "Service package drawn as a defined boundary, with corrections inside and optional additions outside, plus a cost example.",
    "title": "Productized Service Scope: Protect Margin Without Cutting Value",
    "description": "Define deliverables, inputs, revisions, and acceptance criteria so a productized service protects customer value and makes delivery costs clearer.",
    "categorySlug": "finance-and-profitability",
    "image": "/images/productized-service-scope-protect-margin-without-cutting-value-original.svg",
    "publishedAt": "2026-09-11T09:00:00-04:00",
    "updatedAt": "2026-09-11",
    "keywords": [
      "productized service scope",
      "offer profitability",
      "contribution margin"
    ],
    "summary": "Protect a productized service's margin by defining the result, required inputs, included work, revision limits, and acceptance criteria before the sale. Keep the work that creates the promised customer value. Price or decline requests that change the agreed deliverable, and fix repeated misunderstandings in the offer itself. A clearer boundary should make buying easier as well as make delivery more predictable.",
    "sections": [
      {
        "heading": "Start here",
        "body": [
          "Protect a productized service's margin by defining the result, required inputs, included work, revision limits, and acceptance criteria before the sale. Keep the work that creates the promised customer value. Price or decline requests that change the agreed deliverable, and fix repeated misunderstandings in the offer itself. A clearer boundary should make buying easier as well as make delivery more predictable."
        ]
      },
      {
        "heading": "At a glance: TL;DR for an existing offer",
        "body": [
          "Pick one service and review several completed jobs. Compare the promise with actual labor, revisions, waiting time, tools, and outside costs. Identify which variation reflects useful customization and which comes from an unclear agreement. Rewrite the offer as a defined deliverable with prerequisites and a change process. Test the revised scope on a small number of future sales, then measure delivery quality and contribution together."
        ]
      },
      {
        "heading": "Start with the customer's useful result",
        "body": [
          "A productized service packages a repeatable service so a buyer can understand what they will receive and how delivery works. It does not require pretending that every customer is identical. The first design question is what result can be delivered consistently for a well-defined type of customer with known inputs.",
          "For a hypothetical website audit, the result might be a prioritized report on specified pages, with evidence and a review call. It is not automatically a redesign, implementation service, or guarantee of increased sales. Those may be valuable separate offers, but combining them into an undefined promise makes both cost and satisfaction difficult to manage.",
          "Write the result in language a buyer can inspect at delivery. Avoid promises such as “transform your business” when the actual product is a report. The FTC's advertising and marketing guidance is a useful starting point for checking that promotional claims are truthful and appropriately supported."
        ]
      },
      {
        "heading": "Examine actual jobs before setting boundaries",
        "body": [
          "Select comparable completed engagements and record the original quote, deliverables, labor by role, purchased services, tools charged to the job, and revisions. Include founder delivery time using a reasonable internal cost assumption, clearly labeled. Separate client delays from active work so you can see whether the problem is labor, scheduling, or both.",
          "Read the communication history for requests that expanded the engagement. Was the request a correction to your own work, an ambiguous promise the buyer reasonably relied on, or an additional deliverable? Those are different cases. A scope policy should not relabel your quality obligations as paid extras.",
          "The SBA's financial management guidance supports keeping records that make business decisions understandable. For this review, use a consistent period and cost definition. A cash receipt in one month and labor in another can distort the comparison if treated carelessly."
        ]
      },
      {
        "heading": "Write scope in five concrete parts",
        "body": [
          "Define the deliverable, the included quantity or coverage, the customer inputs, the delivery sequence, and the acceptance criterion. In the audit example, specify the number of pages reviewed, the report format, the access needed, the review-call duration, and how factual corrections are handled. Avoid vague limits such as “reasonable revisions” unless both sides can understand what that means.",
          "State what starts the delivery clock. If necessary account access or source material is missing, describe how the schedule changes. Identify one person authorized to consolidate client feedback. Multiple stakeholders can be accommodated, but an unlimited stream of conflicting feedback should not be the default operating model.",
          "Make exclusions visible before purchase and place them next to the relevant promise. A buried exclusion that contradicts a prominent headline creates a customer-experience problem rather than solving a margin problem."
        ]
      },
      {
        "heading": "Use a scope boundary table",
        "body": [
          "This is an illustrative design, not a legal template. Your actual obligations depend on your promises, contract, customer relationship, and applicable rules. Have counsel review terms when the stakes or complexity warrant it."
        ]
      },
      {
        "heading": "Model contribution before changing the price",
        "body": [
          "Use a simple internal model: service revenue less the costs caused by delivering that engagement. State which costs you include and keep the method consistent. Contribution is not net profit because overhead, taxes, financing, and other costs may remain. The SBA break-even guidance distinguishes fixed and variable costs when assessing what sales must cover.",
          "In a hypothetical example, a service sells for $1,500 and has $600 of delivery costs under your chosen definition, leaving $900 of contribution. An additional five hours at an assumed internal cost of $60 per hour reduces that figure by $300. The arithmetic illustrates sensitivity to extra labor; it is not an earnings claim or a typical result for this business.",
          "Compare several plausible delivery cases. If the offer works only for the easiest customer, revisit eligibility, process, or price. Do not remove an essential deliverable merely to make the spreadsheet look better while leaving the original promise unchanged."
        ]
      },
      {
        "heading": "Make the change process easy to use",
        "body": [
          "When a new request arrives, acknowledge the desired result and compare it with the written scope. Explain whether it is included, a correction, or an addition. For an addition, provide the price, delivery impact, and any dependency before beginning. Preserve the approval in the ordinary project record.",
          "Give customers a real choice: proceed with the existing deliverable, approve the addition, or discuss a different package. Avoid creating artificial obstacles to pressure an upgrade. If the same addition appears repeatedly, investigate whether the base offer omits something buyers reasonably need or whether a clearly named optional module would help."
        ]
      },
      {
        "heading": "Protect quality while reducing variation",
        "body": [
          "Standardize preparation, handoffs, templates, and checks that improve consistency. Leave room for judgment where the customer problem requires it. A reusable report structure can save time while the analysis inside it remains specific to the buyer. Replacing the analysis with generic filler lowers value even if delivery hours fall.",
          "Track quality signals alongside margin: corrections, complaints, completion of prerequisites, use of the deliverable, and repeat requests for explanation. A shorter delivery time is not an improvement if the customer must spend more time discovering what the report means. Ask the delivery team where repeated confusion originates before adding another restriction."
        ]
      },
      {
        "heading": "Pilot the new scope on future work",
        "body": [
          "Choose a small set of new engagements for which the revised offer is appropriate. Do not unilaterally reduce existing contracted work. Explain the package clearly before the sale and ask buyers to identify anything they expect that is not described. That conversation can reveal ambiguity before it becomes an argument.",
          "After delivery, compare actual labor with the estimate and ask whether the buyer received the promised result. Record the causes of variation, not just the total hours. Adjust one important boundary or delivery step at a time so you can tell what improved the outcome."
        ]
      },
      {
        "heading": "Common questions about productized scope",
        "body": [
          "Should every extra request be charged?.",
          "No. Correcting your own error and fulfilling the original promise are different from expanding the deliverable. Use the agreement and the customer's reasonable understanding to distinguish them. Commercial judgment still matters.",
          "Can a fixed scope guarantee a fixed margin?.",
          "No. Delivery problems, refunds, acquisition costs, utilization, and other factors can change results. Scope is one control in a broader business model, not an earnings guarantee.",
          "What should I do in the next 20 minutes?.",
          "Review three comparable jobs and mark each unplanned task as correction, ambiguity, or addition. Rewrite the offer's most confusing boundary. Use the Profit Stack Calculator and resource library to examine the economics with your own assumptions.",
          "Business disclaimer: examples are illustrative and do not promise revenue, profit, or tax treatment. Obtain qualified accounting, tax, or legal advice for decisions that depend on your circumstances."
        ]
      }
    ],
    "table": {
      "caption": "Use a scope boundary table",
      "columns": [
        "Request",
        "Treatment in a sample audit service",
        "Why it belongs there"
      ],
      "rows": [
        [
          "Correct an error in the delivered report",
          "Included correction",
          "The original deliverable should be accurate"
        ],
        [
          "Clarify one recommendation during the agreed call",
          "Included explanation",
          "Helps the buyer use the purchased result"
        ],
        [
          "Review pages outside the agreed set",
          "Separate quoted addition",
          "Expands the amount of analysis"
        ],
        [
          "Implement the recommendations",
          "Separate service or referral",
          "Requires different work and responsibility"
        ],
        [
          "Replace all inputs after analysis starts",
          "Discuss impact before continuing",
          "May invalidate completed work"
        ]
      ]
    },
    "references": [
      {
        "label": "FTC's advertising and marketing guidance",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing"
      },
      {
        "label": "SBA's financial management guidance",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      },
      {
        "label": "SBA break-even guidance",
        "url": "https://legacy.sba.gov/business-guide/plan-your-business/calculate-your-startup-costs/break-even-point"
      }
    ],
    "cta": {
      "label": "Run the Profit Stack Calculator",
      "href": "/calculator"
    }
  },
  {
    "slug": "customer-acquisition-payback-for-small-businesses",
    "title": "Customer Acquisition Payback for Small Businesses",
    "description": "Plan sales and marketing with a practical six-step workflow, evidence checks, implementation guidance, cautions, and a reusable review checklist.",
    "categorySlug": "finance-and-profitability",
    "image": "/images/customer-acquisition-payback-for-small-businesses.svg",
    "publishedAt": "2026-09-10T09:00:00-04:00",
    "updatedAt": "2026-09-10",
    "keywords": [
      "customer acquisition payback period",
      "offer profitability",
      "contribution margin"
    ],
    "summary": "Audit one offer with collected revenue and offer-specific variable costs before changing price, promotion, or delivery.",
    "sections": [
      {
        "heading": "At a glance: six checkpoints for sales and marketing",
        "body": [
          "1. Define the measurable profit question. 2. Collect source transactions for one period. 3. Separate fixed and variable costs. 4. Include labor and fulfillment burden. 5. Compare contribution dollars and margin. 6. Run one controlled improvement and review it.",
          "Read the list once before acting. Circle the checkpoint with the weakest evidence. That is where the plan needs attention; polishing a later step cannot compensate for an unresolved early constraint."
        ]
      },
      {
        "heading": "Define the result and the stop rule",
        "body": [
          "Describe the result in observable terms. Include the person, object, or business process affected; the real environment; the acceptable range; and the point at which the work must stop. For sales and marketing, an unacceptable outcome includes missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue.",
          "Separate hard constraints from preferences. A hard constraint can disqualify the method even when it is faster or cheaper. Write assumptions as assumptions, attach an owner, and give high-consequence unknowns a deadline for resolution."
        ]
      },
      {
        "heading": "Prepare with evidence that can change the decision",
        "body": [
          "Build the evidence packet around collected revenue, refunds, delivery hours, labor rates, contractor invoices, merchant fees, commissions, and offer-specific software costs. Keep it small enough to use during the work. Label each source with its date and scope, and separate a controlling requirement from a preference.",
          "Set up the workspace and communication path before the demanding step. Define the measurable profit question; then confirm that collect source transactions for one period. Make the stop authority explicit. The person who notices a problem should not need to negotiate permission while the exposure or failure is growing."
        ]
      },
      {
        "heading": "The complete walkthrough",
        "body": [
          "1. Define the measurable profit question.",
          "Document the starting condition before you define the measurable profit question. Without a baseline, the team may notice change but cannot judge whether it is acceptable. The baseline for sales and marketing should be brief, observable, and saved with analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review.",
          "Checkpoint: before moving to “collect source transactions for one period,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "2. Collect source transactions for one period.",
          "Close the loop after you collect source transactions for one period. Record the actual outcome, including friction and near misses, rather than only marking the task complete. Use that result to revise the next sales and marketing attempt while the details are still fresh.",
          "Checkpoint: before moving to “separate fixed and variable costs,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "3. Separate fixed and variable costs.",
          "Do not treat “separate fixed and variable costs” as a box to tick. Explain what the step protects and what evidence will prove it worked. Capture analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review, then compare the observation with the stated result. Continue only when the evidence supports the next checkpoint.",
          "Checkpoint: before moving to “include labor and fulfillment burden,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "4. Include labor and fulfillment burden.",
          "Practice this step on one completed offer cohort or representative month: include labor and fulfillment burden. Change one variable, keep the other conditions stable, and inspect the result before expanding the scope. A small test is useful only when it represents the difficult condition that the full workflow must handle.",
          "Checkpoint: before moving to “compare contribution dollars and margin,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "5. Compare contribution dollars and margin.",
          "Document the starting condition before you compare contribution dollars and margin. Without a baseline, the team may notice change but cannot judge whether it is acceptable. The baseline for sales and marketing should be brief, observable, and saved with analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review.",
          "Checkpoint: before moving to “run one controlled improvement and review it,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "6. Run one controlled improvement and review it.",
          "Treat this as the handoff checkpoint: run one controlled improvement and review it. The person receiving the work should be able to state the result, the remaining risk, and the next review date. If the handoff requires hidden context, the sales and marketing instruction is not finished.",
          "Checkpoint: before moving to “schedule the next inspection or review,” write one sentence describing what passed, what did not, and who owns the unresolved item."
        ]
      },
      {
        "heading": "Run one representative small test",
        "body": [
          "Use one completed offer cohort or representative month and change only one meaningful variable. Define the expected result and the stopping signal before beginning. If missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue appears, end the test and return to the last acceptable condition.",
          "Keep the test honest. Do not add help, favorable conditions, or expert intervention that will be absent during normal use. If the difficult case cannot be tested responsibly, escalate it to the qualified person or authority who can evaluate it."
        ]
      },
      {
        "heading": "Five mistakes that weaken a sales and marketing plan",
        "body": [
          "When a mistake appears, stabilize first. Protect the person, material, rights, equipment, food, environment, or client experience involved. Return to the first checkpoint contradicted by the evidence, revise one variable, and create a new stop rule before trying again."
        ]
      },
      {
        "heading": "Safety, permission, and professional boundaries",
        "body": [
          "Educational disclaimer: this guide is general business information, not accounting, tax, legal, or investment advice. Use actual records, define allocation assumptions, and have a qualified adviser review material tax or accounting decisions. No pricing, margin, or growth method guarantees revenue or profit.",
          "Authoritative starting points:",
          "Confirm that a source applies to the exact model, jurisdiction, land manager, product category, transaction, clinical situation, or activity. Save the access date and pair general guidance with current manufacturer instructions or individualized professional advice when appropriate."
        ]
      },
      {
        "heading": "Review the result and make it reusable",
        "body": [
          "Review analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review. Compare the observation with the result statement, not with the effort invested. Decide to adopt, adjust, obtain qualified help, or stop.",
          "Turn the final note into a short checklist for the next person. Include the six checkpoints, the approved range, a photograph or example where useful, the stop rule, and the escalation contact. A workflow is not delegated until another person can recognize both a good result and a reason to stop."
        ]
      },
      {
        "heading": "Your next 20 minutes",
        "body": [
          "Write the desired result and the unacceptable outcome. Complete checkpoint one using a current source or direct observation. Then prepare one completed offer cohort or representative month. If the critical evidence is missing, use the time to send one precise question instead of improvising.",
          "The goal of this short session is not to finish sales and marketing. It is to reach the first defensible action with the stop rule already in place."
        ]
      },
      {
        "heading": "FAQ",
        "body": [
          "What should be verified first?.",
          "Verify the fact that could disqualify the entire approach. In this workflow that usually means define the measurable profit question, followed by a check that you can collect source transactions for one period under real conditions.",
          "How detailed should the written plan be?.",
          "Detailed enough that another capable person can perform the next checkpoint and recognize missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue. For most situations, one page plus the controlling sources and analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review is more useful than a long narrative.",
          "When is a small test not appropriate?.",
          "Skip informal testing when a recall, emergency, legal restriction, clinical concern, structural question, food-safety uncertainty, unknown hazardous material, or manufacturer prohibition requires an authoritative response first.",
          "What evidence should be saved afterward?.",
          "Save analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review. Add the source date, the person who approved the result, and the date or trigger for the next review.",
          "What if the first attempt fails?.",
          "Stop, protect the affected people and property, and preserve the evidence. Identify the earliest failed checkpoint, change one variable, and decide whether a second bounded test or qualified professional review is the responsible next step."
        ]
      }
    ],
    "table": {
      "caption": "Offer-level profit audit worksheet",
      "columns": [
        "Line",
        "Use",
        "Decision signal"
      ],
      "rows": [
        [
          "Collected revenue",
          "Cash actually collected less refunds",
          "Use the same analysis period"
        ],
        [
          "Direct labor",
          "Delivery hours × loaded hourly cost",
          "Include founder delivery time"
        ],
        [
          "Variable costs",
          "Fees, commissions, materials, contractors",
          "Attach only costs caused by the sale"
        ],
        [
          "Contribution",
          "Collected revenue minus variable costs",
          "Compare dollars and percentage"
        ]
      ]
    },
    "references": [
      {
        "label": "SBA: Manage your finances",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      },
      {
        "label": "IRS Publication 535: Business Expenses",
        "url": "https://www.irs.gov/publications/p535"
      },
      {
        "label": "FTC: Advertising and marketing",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing"
      }
    ],
    "cta": {
      "label": "Run the Profit Stack Calculator",
      "href": "/calculator"
    }
  },
  {
    "slug": "discount-leakage-measure-the-price-you-actually-collect",
    "title": "Discount Leakage: Measure the Price You Actually Collect",
    "description": "Plan pricing with a practical six-step workflow, evidence checks, implementation guidance, cautions, and a reusable review checklist.",
    "categorySlug": "finance-and-profitability",
    "image": "/images/discount-leakage-measure-the-price-you-actually-collect.svg",
    "publishedAt": "2026-09-09T09:00:00-04:00",
    "updatedAt": "2026-09-09",
    "keywords": [
      "discount leakage",
      "offer profitability",
      "contribution margin"
    ],
    "summary": "Audit one offer with collected revenue and offer-specific variable costs before changing price, promotion, or delivery.",
    "sections": [
      {
        "heading": "At a glance: six checkpoints for pricing",
        "body": [
          "1. Define the measurable profit question. 2. Collect source transactions for one period. 3. Separate fixed and variable costs. 4. Include labor and fulfillment burden. 5. Compare contribution dollars and margin. 6. Run one controlled improvement and review it.",
          "Read the list once before acting. Circle the checkpoint with the weakest evidence. That is where the plan needs attention; polishing a later step cannot compensate for an unresolved early constraint."
        ]
      },
      {
        "heading": "Define the result and the stop rule",
        "body": [
          "Describe the result in observable terms. Include the person, object, or business process affected; the real environment; the acceptable range; and the point at which the work must stop. For pricing, an unacceptable outcome includes missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue.",
          "Separate hard constraints from preferences. A hard constraint can disqualify the method even when it is faster or cheaper. Write assumptions as assumptions, attach an owner, and give high-consequence unknowns a deadline for resolution."
        ]
      },
      {
        "heading": "Prepare with evidence that can change the decision",
        "body": [
          "Walk through the actual setting and gather collected revenue, refunds, delivery hours, labor rates, contractor invoices, merchant fees, commissions, and offer-specific software costs. Do not substitute a product page, generic summary, or remembered dimension for something you can observe directly. Photograph or note the condition that is easiest to misremember.",
          "Set up the workspace and communication path before the demanding step. Define the measurable profit question; then confirm that collect source transactions for one period. Make the stop authority explicit. The person who notices a problem should not need to negotiate permission while the exposure or failure is growing."
        ]
      },
      {
        "heading": "The complete walkthrough",
        "body": [
          "1. Define the measurable profit question.",
          "Assign this action explicitly to the person responsible for financial reporting and offer delivery: define the measurable profit question. Give that person authority to stop the sequence when missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue appears. Clear ownership prevents a common failure in pricing: everyone sees the concern, but each person assumes someone else will make the decision.",
          "Checkpoint: before moving to “collect source transactions for one period,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "2. Collect source transactions for one period.",
          "Before performing this step, say the plan aloud: collect source transactions for one period. Name the expected change, the maximum exposure or effort, and the stop signal. This short briefing matters because pricing can drift when people improvise without noticing that the original conditions changed.",
          "Checkpoint: before moving to “separate fixed and variable costs,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "3. Separate fixed and variable costs.",
          "Do not treat “separate fixed and variable costs” as a box to tick. Explain what the step protects and what evidence will prove it worked. Capture analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review, then compare the observation with the stated result. Continue only when the evidence supports the next checkpoint.",
          "Checkpoint: before moving to “include labor and fulfillment burden,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "4. Include labor and fulfillment burden.",
          "Use a two-person check when the consequence is meaningful. One person should include labor and fulfillment burden; the other should compare the action with collected revenue, refunds, delivery hours, labor rates, contractor invoices, merchant fees, commissions, and offer-specific software costs. The second check is not bureaucracy—it catches a mismatch while the work is still reversible.",
          "Checkpoint: before moving to “compare contribution dollars and margin,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "5. Compare contribution dollars and margin.",
          "Use a two-person check when the consequence is meaningful. One person should compare contribution dollars and margin; the other should compare the action with collected revenue, refunds, delivery hours, labor rates, contractor invoices, merchant fees, commissions, and offer-specific software costs. The second check is not bureaucracy—it catches a mismatch while the work is still reversible.",
          "Checkpoint: before moving to “run one controlled improvement and review it,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "6. Run one controlled improvement and review it.",
          "Practice this step on one completed offer cohort or representative month: run one controlled improvement and review it. Change one variable, keep the other conditions stable, and inspect the result before expanding the scope. A small test is useful only when it represents the difficult condition that the full workflow must handle.",
          "Checkpoint: before moving to “schedule the next inspection or review,” write one sentence describing what passed, what did not, and who owns the unresolved item."
        ]
      },
      {
        "heading": "Run one representative small test",
        "body": [
          "The first implementation should be one completed offer cohort or representative month. Make it realistic enough to expose the hard condition but limited enough to reverse. Record analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review so the result can guide the next attempt.",
          "Keep the test honest. Do not add help, favorable conditions, or expert intervention that will be absent during normal use. If the difficult case cannot be tested responsibly, escalate it to the qualified person or authority who can evaluate it."
        ]
      },
      {
        "heading": "Five mistakes that weaken a pricing plan",
        "body": [
          "When a mistake appears, stabilize first. Protect the person, material, rights, equipment, food, environment, or client experience involved. Return to the first checkpoint contradicted by the evidence, revise one variable, and create a new stop rule before trying again."
        ]
      },
      {
        "heading": "Safety, permission, and professional boundaries",
        "body": [
          "Educational disclaimer: this guide is general business information, not accounting, tax, legal, or investment advice. Use actual records, define allocation assumptions, and have a qualified adviser review material tax or accounting decisions. No pricing, margin, or growth method guarantees revenue or profit.",
          "Authoritative starting points:",
          "Confirm that a source applies to the exact model, jurisdiction, land manager, product category, transaction, clinical situation, or activity. Save the access date and pair general guidance with current manufacturer instructions or individualized professional advice when appropriate."
        ]
      },
      {
        "heading": "Review the result and make it reusable",
        "body": [
          "At the review, ask three questions: What changed? What remained uncertain? Did missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue occur or nearly occur? Assign one owner and date to every follow-up.",
          "Turn the final note into a short checklist for the next person. Include the six checkpoints, the approved range, a photograph or example where useful, the stop rule, and the escalation contact. A workflow is not delegated until another person can recognize both a good result and a reason to stop."
        ]
      },
      {
        "heading": "Your next 20 minutes",
        "body": [
          "Write the desired result and the unacceptable outcome. Complete checkpoint one using a current source or direct observation. Then prepare one completed offer cohort or representative month. If the critical evidence is missing, use the time to send one precise question instead of improvising.",
          "The goal of this short session is not to finish pricing. It is to reach the first defensible action with the stop rule already in place."
        ]
      },
      {
        "heading": "FAQ",
        "body": [
          "What should be verified first?.",
          "Verify the fact that could disqualify the entire approach. In this workflow that usually means define the measurable profit question, followed by a check that you can collect source transactions for one period under real conditions.",
          "How detailed should the written plan be?.",
          "Detailed enough that another capable person can perform the next checkpoint and recognize missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue. For most situations, one page plus the controlling sources and analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review is more useful than a long narrative.",
          "When is a small test not appropriate?.",
          "Skip informal testing when a recall, emergency, legal restriction, clinical concern, structural question, food-safety uncertainty, unknown hazardous material, or manufacturer prohibition requires an authoritative response first.",
          "What evidence should be saved afterward?.",
          "Save analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review. Add the source date, the person who approved the result, and the date or trigger for the next review.",
          "What if the first attempt fails?.",
          "Stop, protect the affected people and property, and preserve the evidence. Identify the earliest failed checkpoint, change one variable, and decide whether a second bounded test or qualified professional review is the responsible next step."
        ]
      }
    ],
    "table": {
      "caption": "Offer-level profit audit worksheet",
      "columns": [
        "Line",
        "Use",
        "Decision signal"
      ],
      "rows": [
        [
          "Collected revenue",
          "Cash actually collected less refunds",
          "Use the same analysis period"
        ],
        [
          "Direct labor",
          "Delivery hours × loaded hourly cost",
          "Include founder delivery time"
        ],
        [
          "Variable costs",
          "Fees, commissions, materials, contractors",
          "Attach only costs caused by the sale"
        ],
        [
          "Contribution",
          "Collected revenue minus variable costs",
          "Compare dollars and percentage"
        ]
      ]
    },
    "references": [
      {
        "label": "SBA: Manage your finances",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      },
      {
        "label": "IRS Publication 535: Business Expenses",
        "url": "https://www.irs.gov/publications/p535"
      },
      {
        "label": "FTC: Advertising and marketing",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing"
      }
    ],
    "cta": {
      "label": "Run the Profit Stack Calculator",
      "href": "/calculator"
    }
  },
  {
    "slug": "offer-level-profit-audit-for-a-service-business",
    "title": "Offer-Level Profit Audit for a Service Business",
    "description": "Plan finance and profitability with a practical six-step workflow, evidence checks, implementation guidance, cautions, and a reusable review checklist.",
    "categorySlug": "finance-and-profitability",
    "image": "/images/offer-level-profit-audit-for-a-service-business.svg",
    "publishedAt": "2026-09-08T09:00:00-04:00",
    "updatedAt": "2026-09-08",
    "keywords": [
      "service business profit audit",
      "offer profitability",
      "contribution margin"
    ],
    "summary": "Audit one offer with collected revenue and offer-specific variable costs before changing price, promotion, or delivery.",
    "sections": [
      {
        "heading": "At a glance: six checkpoints for finance and profitability",
        "body": [
          "1. Define the offer and analysis period. 2. Reconcile collected revenue rather than booked revenue. 3. Attach direct labor and fulfillment cost. 4. Allocate variable selling and payment cost. 5. Calculate contribution dollars and margin. 6. Choose one controlled improvement and review date.",
          "Read the list once before acting. Circle the checkpoint with the weakest evidence. That is where the plan needs attention; polishing a later step cannot compensate for an unresolved early constraint."
        ]
      },
      {
        "heading": "Define the result and the stop rule",
        "body": [
          "Describe the result in observable terms. Include the person, object, or business process affected; the real environment; the acceptable range; and the point at which the work must stop. For finance and profitability, an unacceptable outcome includes missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue.",
          "Separate hard constraints from preferences. A hard constraint can disqualify the method even when it is faster or cheaper. Write assumptions as assumptions, attach an owner, and give high-consequence unknowns a deadline for resolution."
        ]
      },
      {
        "heading": "Prepare with evidence that can change the decision",
        "body": [
          "Walk through the actual setting and gather collected revenue, refunds, delivery hours, labor rates, contractor invoices, merchant fees, commissions, and offer-specific software costs. Do not substitute a product page, generic summary, or remembered dimension for something you can observe directly. Photograph or note the condition that is easiest to misremember.",
          "Set up the workspace and communication path before the demanding step. Define the offer and analysis period; then confirm that reconcile collected revenue rather than booked revenue. Make the stop authority explicit. The person who notices a problem should not need to negotiate permission while the exposure or failure is growing."
        ]
      },
      {
        "heading": "The complete walkthrough",
        "body": [
          "1. Define the offer and analysis period.",
          "Start by turning “define the offer and analysis period” into a fact someone can verify. Use collected revenue, refunds, delivery hours, labor rates, contractor invoices, merchant fees, commissions, and offer-specific software costs. Write the source and date beside the conclusion; otherwise the team cannot distinguish evidence from memory. For finance and profitability, this checkpoint is complete only when the next operator knows what is confirmed and what remains unknown.",
          "Checkpoint: before moving to “reconcile collected revenue rather than booked revenue,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "2. Reconcile collected revenue rather than booked revenue.",
          "Assign this action explicitly to the person responsible for financial reporting and offer delivery: reconcile collected revenue rather than booked revenue. Give that person authority to stop the sequence when missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue appears. Clear ownership prevents a common failure in finance and profitability: everyone sees the concern, but each person assumes someone else will make the decision.",
          "Checkpoint: before moving to “attach direct labor and fulfillment cost,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "3. Attach direct labor and fulfillment cost.",
          "Before performing this step, say the plan aloud: attach direct labor and fulfillment cost. Name the expected change, the maximum exposure or effort, and the stop signal. This short briefing matters because finance and profitability can drift when people improvise without noticing that the original conditions changed.",
          "Checkpoint: before moving to “allocate variable selling and payment cost,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "4. Allocate variable selling and payment cost.",
          "Do not treat “allocate variable selling and payment cost” as a box to tick. Explain what the step protects and what evidence will prove it worked. Capture analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review, then compare the observation with the stated result. Continue only when the evidence supports the next checkpoint.",
          "Checkpoint: before moving to “calculate contribution dollars and margin,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "5. Calculate contribution dollars and margin.",
          "Make “calculate contribution dollars and margin” a pass/fail gate. State the acceptable range, then compare it with collected revenue, refunds, delivery hours, labor rates, contractor invoices, merchant fees, commissions, and offer-specific software costs. Do not average a failed constraint against convenience. The right response to a conflict is to pause finance and profitability, resolve the source of truth, and document the decision.",
          "Checkpoint: before moving to “choose one controlled improvement and review date,” write one sentence describing what passed, what did not, and who owns the unresolved item.",
          "6. Choose one controlled improvement and review date.",
          "Make “choose one controlled improvement and review date” a pass/fail gate. State the acceptable range, then compare it with collected revenue, refunds, delivery hours, labor rates, contractor invoices, merchant fees, commissions, and offer-specific software costs. Do not average a failed constraint against convenience. The right response to a conflict is to pause finance and profitability, resolve the source of truth, and document the decision.",
          "Checkpoint: before moving to “schedule the next inspection or review,” write one sentence describing what passed, what did not, and who owns the unresolved item."
        ]
      },
      {
        "heading": "Run one representative small test",
        "body": [
          "The first implementation should be one completed offer cohort or representative month. Make it realistic enough to expose the hard condition but limited enough to reverse. Record analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review so the result can guide the next attempt.",
          "Keep the test honest. Do not add help, favorable conditions, or expert intervention that will be absent during normal use. If the difficult case cannot be tested responsibly, escalate it to the qualified person or authority who can evaluate it."
        ]
      },
      {
        "heading": "Five mistakes that weaken a finance and profitability plan",
        "body": [
          "When a mistake appears, stabilize first. Protect the person, material, rights, equipment, food, environment, or client experience involved. Return to the first checkpoint contradicted by the evidence, revise one variable, and create a new stop rule before trying again."
        ]
      },
      {
        "heading": "Safety, permission, and professional boundaries",
        "body": [
          "Educational disclaimer: this guide is general business information, not accounting, tax, legal, or investment advice. Use actual records, define allocation assumptions, and have a qualified adviser review material tax or accounting decisions. No pricing, margin, or growth method guarantees revenue or profit.",
          "Authoritative starting points:",
          "Confirm that a source applies to the exact model, jurisdiction, land manager, product category, transaction, clinical situation, or activity. Save the access date and pair general guidance with current manufacturer instructions or individualized professional advice when appropriate."
        ]
      },
      {
        "heading": "Review the result and make it reusable",
        "body": [
          "At the review, ask three questions: What changed? What remained uncertain? Did missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue occur or nearly occur? Assign one owner and date to every follow-up.",
          "Turn the final note into a short checklist for the next person. Include the six checkpoints, the approved range, a photograph or example where useful, the stop rule, and the escalation contact. A workflow is not delegated until another person can recognize both a good result and a reason to stop."
        ]
      },
      {
        "heading": "Your next 20 minutes",
        "body": [
          "Write the desired result and the unacceptable outcome. Complete checkpoint one using a current source or direct observation. Then prepare one completed offer cohort or representative month. If the critical evidence is missing, use the time to send one precise question instead of improvising.",
          "The goal of this short session is not to finish finance and profitability. It is to reach the first defensible action with the stop rule already in place."
        ]
      },
      {
        "heading": "FAQ",
        "body": [
          "What should be verified first?.",
          "Verify the fact that could disqualify the entire approach. In this workflow that usually means define the offer and analysis period, followed by a check that you can reconcile collected revenue rather than booked revenue under real conditions.",
          "How detailed should the written plan be?.",
          "Detailed enough that another capable person can perform the next checkpoint and recognize missing transaction data, hidden founder labor, inconsistent cost allocation, or a margin conclusion based only on booked revenue. For most situations, one page plus the controlling sources and analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review is more useful than a long narrative.",
          "When is a small test not appropriate?.",
          "Skip informal testing when a recall, emergency, legal restriction, clinical concern, structural question, food-safety uncertainty, unknown hazardous material, or manufacturer prohibition requires an authoritative response first.",
          "What evidence should be saved afterward?.",
          "Save analysis period, units sold, cash collected, refunds, direct labor, variable costs, contribution dollars, margin percentage, and next review. Add the source date, the person who approved the result, and the date or trigger for the next review.",
          "What if the first attempt fails?.",
          "Stop, protect the affected people and property, and preserve the evidence. Identify the earliest failed checkpoint, change one variable, and decide whether a second bounded test or qualified professional review is the responsible next step."
        ]
      }
    ],
    "table": {
      "caption": "Offer-level profit audit worksheet",
      "columns": [
        "Line",
        "Use",
        "Decision signal"
      ],
      "rows": [
        [
          "Collected revenue",
          "Cash actually collected less refunds",
          "Use the same analysis period"
        ],
        [
          "Direct labor",
          "Delivery hours × loaded hourly cost",
          "Include founder delivery time"
        ],
        [
          "Variable costs",
          "Fees, commissions, materials, contractors",
          "Attach only costs caused by the sale"
        ],
        [
          "Contribution",
          "Collected revenue minus variable costs",
          "Compare dollars and percentage"
        ]
      ]
    },
    "references": [
      {
        "label": "SBA: Manage your finances",
        "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"
      },
      {
        "label": "IRS Publication 535: Business Expenses",
        "url": "https://www.irs.gov/publications/p535"
      },
      {
        "label": "FTC: Advertising and marketing",
        "url": "https://www.ftc.gov/business-guidance/advertising-marketing"
      }
    ],
    "cta": {
      "label": "Run the Profit Stack Calculator",
      "href": "/calculator"
    }
  },
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
  {
    slug: "profit-leak-scorecard-for-service-businesses",
    title: "A Profit Leak Scorecard for Service Businesses",
    description:
      "Use this scorecard to find service-business profit leaks in pricing, scope, follow-up, retention, delivery, and owner dependency.",
    categorySlug: "finance-and-profitability",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
    keywords: ["service business profit leaks", "profit scorecard", "pricing leakage", "margin improvement"],
    summary:
      "A service business can look healthy from the outside while quiet profit leaks drain margin every week. The first move is to score the leaks you can see.",
    sections: [
      {
        heading: "Score the six places profit usually disappears",
        body: [
          "Start with six practical areas: pricing, scope control, lead follow-up, client retention, delivery efficiency, and founder dependency. Give each one a score from one to five. A low score does not mean the business is broken; it tells you where a focused improvement could matter fastest.",
          "Pricing and cost discipline are especially important in service businesses because time, expertise, and attention are the inventory. The SBA's financial guidance is a useful reminder that profit improvement often begins with better visibility into costs and cash flow rather than a bigger marketing campaign.",
        ],
      },
      {
        heading: "Look for the leak with the shortest repair path",
        body: [
          "If proposals are underpriced, fix the offer and pricing language. If leads are slow to receive a reply, fix the response rhythm. If delivery is too custom, document the repeated steps. The best first project is not always the biggest leak; it is the leak you can repair with the least confusion.",
          "This is why the Profit Stack Calculator asks for a diagnosis before choosing tools. A planner, dashboard, AI workflow, course, or consultant only helps when it matches the leak that needs attention.",
        ],
      },
      {
        heading: "Convert the score into one 30-day project",
        body: [
          "Choose one score to improve during the next month. Define the current condition, the desired condition, the owner, the deadline, and one metric. That can be proposal acceptance rate, renewal percentage, average project margin, follow-up speed, or hours of founder time saved.",
          "A small completed repair is more valuable than a large vague transformation. Profit stacking works because each repair makes the next one easier to see.",
        ],
      },
    ],
    references: [
      { label: "U.S. Small Business Administration: Manage your finances", url: "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" },
      { label: "SCORE: Small business financial templates and tools", url: "https://www.score.org/templates-resources" },
      { label: "Google Search Central: Creating helpful content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    cta: { label: "Run the Profit Stack Calculator", href: "/calculator" },
  },
  {
    slug: "package-your-offer-before-you-raise-ad-spend",
    title: "Package Your Offer Before You Raise Ad Spend",
    description:
      "A guide to improving offer clarity, buyer fit, proof, pricing, and next steps before spending more money to drive traffic.",
    categorySlug: "sales-and-marketing",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
    keywords: ["offer packaging", "conversion improvement", "ad spend efficiency", "sales page clarity"],
    summary:
      "More traffic rarely fixes an unclear offer. Package the promise, proof, fit, and next step before you pay to send more people into the funnel.",
    sections: [
      {
        heading: "Make the buyer decision easier",
        body: [
          "A strong offer answers four questions quickly: who is this for, what changes, why should I believe it, and what happens next? If those answers are scattered across calls, emails, PDFs, and old pages, traffic will amplify confusion.",
          "Google's helpful-content guidance is written for search, but the same principle applies to conversion: people should leave a page feeling that their question was answered clearly and honestly.",
        ],
      },
      {
        heading: "Add proof without exaggeration",
        body: [
          "Useful proof can include case studies, examples, testimonials, demonstrations, process screenshots, or before-and-after explanations. Avoid unsupported income claims, vague promises, and pressure language that creates mistrust.",
          "The Federal Trade Commission's guidance on endorsements and advertising claims is a good guardrail: claims should be truthful, substantiated, and presented in a way people can understand.",
        ],
      },
      {
        heading: "Improve the next step",
        body: [
          "A buyer should not have to decode the path. Offer a diagnostic, consultation, calculator, guide, short application, or direct purchase depending on the complexity of the product. Then measure whether people take that step.",
          "If conversion improves after clarifying the offer, paid traffic becomes safer to test because the page has a better chance of turning attention into revenue.",
        ],
      },
    ],
    references: [
      { label: "Google Search Central: Helpful, reliable, people-first content", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "FTC: Endorsement Guides", url: "https://www.ftc.gov/business-guidance/advertising-marketing/endorsements-influencers-reviews" },
      { label: "FTC: Advertising and marketing basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing" },
    ],
    cta: { label: "Explore Sales & Marketing Offers", href: "/categories/sales-and-marketing" },
  },
  {
    slug: "use-a-90-day-plan-to-stack-profit-wins",
    title: "Use a 90-Day Plan to Stack Profit Wins",
    description:
      "How to turn a profit diagnosis into a realistic 90-day implementation plan with weekly milestones, scorecards, and decision checkpoints.",
    categorySlug: "productivity-and-time-management",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
    keywords: ["90 day business plan", "profit implementation plan", "weekly scorecard", "goal execution"],
    summary:
      "A 90-day plan is long enough to create visible progress and short enough to prevent the work from becoming abstract.",
    sections: [
      {
        heading: "Translate diagnosis into weekly work",
        body: [
          "After you identify a weak profit lever, break the work into twelve weekly milestones. Each milestone should produce something visible: a revised offer, a follow-up email, a dashboard, a script, a checklist, a category page, or a customer-retention step.",
          "Time management research and productivity advice often become too broad for entrepreneurs. The practical question is simpler: what is the one profit-improving deliverable that should exist by Friday?",
        ],
      },
      {
        heading: "Use a scorecard, not a mood check",
        body: [
          "A weekly scorecard keeps implementation honest. Track a small number of signals such as leads followed up, proposals sent, conversion rate, retained clients, gross margin, repeat purchases, or hours removed from the founder's calendar.",
          "The scorecard is not there to make the business feel bureaucratic. It is there to reveal whether the current plan is producing movement.",
        ],
      },
      {
        heading: "Review, adjust, and stack",
        body: [
          "At the end of each month, keep what worked, drop what did not, and choose the next bottleneck. This prevents the business from collecting half-finished initiatives.",
          "The Profit Stack Builder page exists for this reason: a useful plan should connect diagnosis, weekly action, and next-step resources into one sequence.",
        ],
      },
    ],
    references: [
      { label: "SCORE: Business planning resources", url: "https://www.score.org/business-planning-financial-statements-template-gallery" },
      { label: "U.S. Small Business Administration: Write your business plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" },
      { label: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
    ],
    cta: { label: "Open the Profit Stack Builder", href: "/profit-stack-builder" },
  },
  {
    slug: "turn-delivery-work-into-repeatable-systems",
    title: "Turn Delivery Work Into Repeatable Systems",
    description:
      "How entrepreneurs can protect quality, reduce founder dependency, and improve margin by documenting repeated delivery work.",
    categorySlug: "business-systems-and-operations",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
    keywords: ["business systems", "delivery leverage", "standard operating procedures", "founder dependency"],
    summary:
      "Delivery leverage starts when repeated work becomes visible enough to improve, delegate, automate, or package.",
    sections: [
      {
        heading: "Find the repeated work hiding inside custom delivery",
        body: [
          "Many service businesses believe every client engagement is unique. Some parts are, but the intake, diagnosis, onboarding, reporting, meeting rhythm, deliverables, and follow-up often repeat. Those repeated pieces are where leverage begins.",
          "Documenting a process does not remove expertise. It protects it. The founder can still make judgment calls while the team follows a clearer operating path.",
        ],
      },
      {
        heading: "Build the first operating checklist",
        body: [
          "Pick one delivery moment that causes delay, rework, or confusion. Write down the trigger, inputs, steps, owner, quality standard, and handoff. Then use it three times and revise it.",
          "NIST's cybersecurity framework is designed for a different domain, but its core idea is useful here: identify, protect, detect, respond, and recover. A business system should make important work observable before it becomes a crisis.",
        ],
      },
      {
        heading: "Turn the system into value",
        body: [
          "Once a delivery process is repeatable, it can support higher margins, better onboarding, faster training, clearer customer expectations, and more confident pricing.",
          "It can also become an authority asset: a checklist, worksheet, template, diagnostic, or article that helps buyers understand why your process works.",
        ],
      },
    ],
    references: [
      { label: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
      { label: "SCORE: Operations resources", url: "https://www.score.org/templates-resources" },
      { label: "U.S. Small Business Administration: Manage your business", url: "https://www.sba.gov/business-guide/manage-your-business" },
    ],
    cta: { label: "Explore Systems & Operations Offers", href: "/categories/business-systems-and-operations" },
  },
  {
    slug: "when-to-buy-coaching-course-or-software",
    title: "When to Buy Coaching, a Course, or Software",
    description:
      "A decision guide for entrepreneurs choosing between implementation help, educational programs, templates, software tools, and self-directed planning.",
    categorySlug: "coaching-and-consulting",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    publishedAt: "2026-08-28",
    updatedAt: "2026-08-28",
    keywords: ["business coaching vs course", "software vs consulting", "implementation support", "entrepreneur decision guide"],
    summary:
      "The right next step depends on the problem. Coaching helps when judgment and accountability are missing. Courses help when knowledge is missing. Software helps when a repeatable process is ready to run.",
    sections: [
      {
        heading: "Choose based on the bottleneck",
        body: [
          "If you do not know what to do, a course, book, or framework may be enough. If you know what to do but are not doing it, coaching, accountability, or a mastermind may help. If the process is clear but too slow, software or automation may be the right move.",
          "Buying the wrong type of help creates a familiar frustration: more information when you needed implementation, more tools when you needed strategy, or more calls when you needed a documented system.",
        ],
      },
      {
        heading: "Use proof and fit questions",
        body: [
          "Before buying, ask what problem the offer solves, what inputs are required, what implementation support exists, what success looks like, and what the realistic timeline is.",
          "FTC guidance around advertising claims and endorsements is a useful reminder to evaluate proof carefully. Look for specifics, context, and realistic expectations rather than broad promises.",
        ],
      },
      {
        heading: "Match the purchase to the profit stack",
        body: [
          "A good purchase should connect directly to a profit lever: better conversion, better retention, better delivery, better pricing, better operating visibility, or reduced founder dependency.",
          "That is why Profit Stacking Secrets separates resources by category and encourages diagnosis first. The site is most useful when the visitor can match the next purchase to the actual business gap.",
        ],
      },
    ],
    references: [
      { label: "FTC: Advertising and marketing", url: "https://www.ftc.gov/business-guidance/advertising-marketing" },
      { label: "FTC: Endorsements, influencers, and reviews", url: "https://www.ftc.gov/business-guidance/advertising-marketing/endorsements-influencers-reviews" },
      { label: "SCORE: Find business mentors and resources", url: "https://www.score.org/find-mentor" },
    ],
    cta: { label: "Explore Coaching & Consulting Offers", href: "/categories/coaching-and-consulting" },
  },
  {
    slug: "contribution-margin-ladder-profit-plan",
    title: "Contribution Margin: Build a Profit Ladder Before You Scale",
    description: "Calculate contribution margin by offer, test pricing and cost changes, and choose a 30-day profit experiment before adding more sales volume.",
    categorySlug: "finance-and-profitability",
    image: "/images/contribution-margin-profit-ladder.svg",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    keywords: ["contribution margin", "profit margin by product", "small business profit analysis"],
    summary: "Revenue tells you what customers paid. Contribution margin shows how much remains from each sale to cover fixed costs and profit—and where a practical improvement may be hiding.",
    table: {caption:"Contribution-margin worksheet for one offer",columns:["Line","Calculation","Decision use"],rows:[["Net revenue","Sales less discounts, refunds, and sales taxes collected","Start with what the business actually retains as revenue"],["Variable costs","Materials, fulfillment, transaction fees, sales commissions, usage-based delivery","Identify costs that move when one more unit is sold"],["Contribution margin","Net revenue minus variable costs","Dollars available for fixed costs and operating profit"],["Contribution margin ratio","Contribution margin divided by net revenue","Compare offers with different prices"],["Break-even units","Relevant fixed costs divided by contribution per unit","Estimate the volume required under stated assumptions"]]},
    sections: [
      {heading:"The short answer",body:["Calculate contribution margin for each meaningful offer before buying more traffic or pushing the team for more volume. Begin with net revenue per sale, subtract only the costs that change because that sale happened, and compare the dollars and percentage left to cover fixed costs and operating profit.","Then run one 30-day experiment on price, discounting, fulfillment, payment cost, scope, or repeat purchase. Do not treat the spreadsheet as a forecast guarantee. It is a decision model whose usefulness depends on accurate bookkeeping, clear cost behavior, and stated assumptions."]},
      {heading:"Contribution margin is not gross margin or net profit",body:["Gross margin usually subtracts cost of goods sold according to the business’s accounting method. Contribution margin groups costs by behavior: which costs change with another unit, customer, shipment, or transaction? Net profit then reflects fixed operating expenses, financing, taxes, and other items after the contribution has been earned.","The distinctions matter because the same expense may behave differently in different businesses. A contractor might be variable for one service and fixed-capacity for another. Ask an accountant or bookkeeper to confirm classification rather than forcing every cost into a template."]},
      {heading:"Build the worksheet from actual records",body:["Choose one offer and one recent period. Pull invoices, refunds, discounts, payment-processor fees, product or contractor costs, shipping, packaging, usage-based software, and directly attributable commissions. Reconcile totals to the bookkeeping system before dividing by units sold.","Use net revenue, not the price printed on the sales page. Refunds and discounting can make realized revenue materially different. Keep sales tax collected for a taxing authority separate from business revenue, subject to the accounting and jurisdictional treatment confirmed by a tax professional."]},
      {heading:"Classify variable costs with a simple test",body:["Ask: if we sold one additional unit tomorrow, would this cost increase, and by approximately how much? Card fees, shipping, packaging, per-user infrastructure, piece-rate labor, and commissions often pass the test. Rent, baseline salaries, annual insurance, and core software often do not change with a single sale.","Some costs are stepped or mixed. A support hire may be fixed until volume crosses a capacity threshold. Record that threshold separately. A model that hides capacity steps can make growth look more profitable than it will be."]},
      {heading:"Compare dollars and ratios",body:["Contribution dollars show how much one sale contributes. The ratio shows what share of revenue remains. A high-priced offer may produce more dollars but a lower ratio; a smaller digital product may have a higher ratio but contribute too few dollars to cover acquisition and support.","Compare both measures alongside customer-acquisition cost, refund rate, repeat purchase, and capacity. No single metric should make the whole decision. The goal is to see which offer strengthens the business under realistic demand and delivery constraints."]},
      {heading:"Turn the model into a sensitivity chart",body:["Create three cases rather than one forecast: current, conservative, and improved. Change one assumption at a time—price, units, discount rate, refund rate, variable cost, or capacity step. This shows which assumptions truly control the result.","Do not stack every optimistic assumption into the improved case. A useful scenario is possible and testable. Label assumptions and dates so a later reader can reproduce the calculation instead of inheriting a mysterious profit number."]},
      {heading:"Choose the first 30-day experiment",body:["Start with the lever closest to the leak. If discounting is the issue, tighten approval rules and test offer framing. If fulfillment cost varies wildly, standardize scope and track exceptions. If transaction fees matter, compare lawful, customer-appropriate payment options without creating surprise charges.","Define the test before launch: the offer, audience, start and end dates, expected contribution change, guardrail metrics, and stopping rule. Guardrails might include conversion, refunds, delivery time, complaints, or customer outcomes."]},
      {heading:"Avoid three scaling traps",body:["First, do not multiply an unverified per-unit margin by an unlimited volume assumption. Demand, staffing, inventory, service quality, and cash timing all create limits. Second, do not cut costs that protect customer results or compliance. Third, do not count tax savings, financing, or accounting treatment as operating improvement without professional review.","The SBA’s financial-management guidance emphasizes understanding statements and cash flow. Contribution margin complements that work but does not replace it. A profitable sale can still strain cash when payment arrives after inventory, labor, or taxes are due."]},
      {heading:"Review the result and stack the next improvement",body:["At day 30, compare actual net revenue, variable cost, contribution dollars, ratio, volume, refunds, and guardrails with the baseline. Keep the change only if the economics and customer experience improved together. Document what changed and what remains uncertain.","Then choose the next smallest lever. Profit stacking works when improvements compound: a clearer offer can improve realized price, a tighter scope can protect delivery cost, better onboarding can reduce refunds, and a renewal path can increase lifetime contribution without pretending every customer behaves the same."]},
      {heading:"Educational and professional-use note",body:["This article provides general business education, not accounting, tax, legal, investment, or earnings advice. Cost classification, revenue recognition, sales tax, worker classification, and financial reporting vary by business and jurisdiction. Use complete records and consult qualified professionals for decisions that affect filings, contracts, financing, or material commitments.","There is no guaranteed contribution-margin target and no guaranteed outcome from changing price or cost. The responsible use of the model is to clarify assumptions, run bounded tests, protect customers and compliance, and replace projections with actual results as soon as they exist."]}
    ],
    references: [
      {label:"U.S. Small Business Administration: Manage your finances",url:"https://www.sba.gov/business-guide/manage-your-business/manage-your-finances"},
      {label:"IRS: Business expenses",url:"https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses"},
      {label:"FTC: Advertising and marketing basics",url:"https://www.ftc.gov/business-guidance/advertising-marketing"}
    ],
    cta: {label:"Run the Profit Stack Calculator",href:"/calculator"}
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
