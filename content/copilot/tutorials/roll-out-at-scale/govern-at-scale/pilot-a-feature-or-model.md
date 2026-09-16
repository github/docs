---
title: Pilot a new Copilot feature or model in your enterprise
shortTitle: Pilot a feature or model
intro: Pilot a new {% data variables.product.prodname_copilot_short %} feature or model to validate adoption, control costs, and gather evidence for a wider rollout.
permissions: Enterprise owners, organization owners, and billing managers
versions:
  feature: copilot
category:
  - Roll Copilot out at scale
contentType: tutorials
allowTitleToDifferFromFilename: true
---

This tutorial walks you through running a pilot end to end: setting a budget, enabling the feature for a contained group, monitoring results, and using the evidence to make and report a go or no-go decision.

## Before you start your pilot

Before you enable anything, make sure you've evaluated the feature or model and confirmed it meets your compliance requirements. See [AUTOTITLE](/copilot/concepts/preparing-for-new-features-and-models).

If you're not sure whether a feature or model is safe to enable, check with security and compliance teams at your company before you start the pilot.

### Define what success looks like

Decide what a "go" looks like before you start, so you judge the pilot against a plan instead of after the fact. Write down a few concrete success criteria that cover adoption (for example, a minimum share of active users), cost (staying within the ceiling you set), and qualitative feedback (for example, most participants would recommend the feature). You'll check the pilot's actual results against these criteria in [Make a go or no-go decision](#make-a-go-or-no-go-decision).

Also plan how long the pilot will run. Budgets and the shared pool of {% data variables.product.prodname_ai_credits_short %} reset every billing cycle, so plan for the pilot to span at least one full billing cycle, typically four to six weeks; a shorter run can leave you with too little cost and adoption data to draw a reliable conclusion.

### Choose who to include in your pilot group

Since features and models are enabled at the organization level, everyone who receives their {% data variables.product.prodname_copilot_short %} license through that organization will get access, not just a hand-picked subset, and not necessarily everyone who's a member of it. So instead of selecting individuals, look for an organization whose licensed population already reflects the criteria below:

* **Developers doing real, meaningful work.** Pilot participants should use the feature on the languages, frameworks, and repositories that matter to your organization, not on throwaway projects. Usage and cost signals are only trustworthy if they come from genuine work.
* **A mix of skill and seniority levels.** Include both experienced engineers and people who are newer to your codebase or to {% data variables.product.prodname_copilot_short %}. Different levels of experience use the feature differently and uncover different value and different problems.
* **A range of teams and workflows.** A feature that helps one team's workflow may not help another's. Spanning a few teams gives you a more reliable picture of where the feature adds value and where it doesn't.
* **People willing to give feedback.** Much of a pilot's value comes from qualitative feedback, not just metrics. Choose participants who will engage, report what works and what doesn't, and respond when you ask for their input.

If none of your organizations fit, for example, if the right mix of people is scattered across several organizations, or your organizations are too large to serve as a contained pilot, you can create a dedicated organization and add only your chosen users to it. This gives you precise control over who's included, but it means migrating or duplicating repository access for those users, and it may not work well for features like {% data variables.copilot.copilot_cloud_agent %} that depend on deep repository-level context. This tutorial assumes you're using an existing organization; if you go the dedicated-organization route, treat setting it up and adding members as an extra step before [Enable the feature for your pilot group](#enable-the-feature-for-your-pilot-group).

### Estimate costs and set a budget ceiling

Many of the features and models you'll want to pilot are billed through usage, so the spending isn't fixed by the number of licenses you assign.

A handful of active developers using a frontier model or an agentic feature could consume more than you'd expect. Work out a rough estimate of what the pilot could cost, and decide on a ceiling you're willing to spend before you enable the feature.

Start by understanding how the feature or model is billed. Usage-based features consume {% data variables.product.prodname_ai_credits %}, and the cost of each interaction depends on the model and the number of tokens consumed. To understand which features count toward usage, how included credits are pooled across your enterprise, and how overages are charged, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

To produce an estimate, combine three numbers:

* **The number of people in your pilot group**, which you defined in the previous section.
* **How heavily you expect them to use the feature.** You won't know this until people are actually using it, so pick a deliberately high-end estimate rather than trying to predict it precisely. If you've already rolled out a comparable feature or model, use its actual usage as a reference point. If not, assume frequent, heavy use per developer, since agentic features and frontier models cost more per interaction than a quick chat question. A small group doing intensive work can cost more than a large group using the feature occasionally.
* **The included allowance you can draw on.** Each assigned license comes with a monthly amount of included {% data variables.product.prodname_ai_credits_short %} that are pooled at the enterprise level, so some of the pilot's usage may be covered before any overage is billed.

Use these to set a ceiling: the maximum you're prepared to spend on the pilot before you'd want to pause and reassess. Choose a figure that gives the pilot room to generate meaningful usage data while capping your exposure if consumption runs higher than expected. If you adjust your pilot group size later, revisit this estimate.

For example, suppose you pilot an agentic feature with 20 developers on {% data variables.copilot.copilot_business_short %}. Each license includes {% data variables.copilot.ai_credits_per_user_business %} {% data variables.product.prodname_ai_credits_short %} per month, so your pilot group draws on a shared pool of 20 × {% data variables.copilot.ai_credits_per_user_business %} included {% data variables.product.prodname_ai_credits_short %} before any metered charges begin. If you expect heavy use of roughly 3,000 {% data variables.product.prodname_ai_credits_short %} per developer that month, estimate total usage as 20 × 3,000. Subtract the included pool to estimate metered usage, then multiply by {% data variables.product.prodname_ai_credits_value %} to estimate overage cost and set your ceiling slightly above that. You'll create the budget that enforces this ceiling after you enable the feature, in [Set a budget to cap the pilot's costs](#set-a-budget-to-cap-the-pilots-costs).

## Enable the feature for your pilot group

Now that you've estimated costs and chosen who to include, you can turn the feature on in a contained way. The goal is to give your pilot group a real, correctly governed experience while keeping the rest of your enterprise unaffected.

You'll do this in four steps:

1. Confirm organization membership and license assignment.
1. Configure the policies that govern the feature.
1. Enable the feature for that organization only.
1. Set a budget to cap the pilot's costs.

### Confirm organization membership and license assignment

Membership alone isn't enough: most {% data variables.product.prodname_copilot_short %} policies apply based on which organization assigns a user's {% data variables.product.prodname_copilot_short %} license, not simply which organizations they belong to. If someone belongs to multiple organizations, confirm their license is assigned through the pilot organization specifically. If it's assigned through a different one, the pilot organization's policies won't govern their access, and the feature enablement in this tutorial won't apply to them.

If any of your pilot users aren't yet members, or are members but receive their license elsewhere, add them to the pilot organization and assign their {% data variables.product.prodname_copilot_short %} license through it before you continue.

### Configure policies before you enable the feature

{% data variables.product.prodname_copilot_short %} policies control which features and models your users can access and how their data is handled. Configure these policies for the pilot organization *before* you turn the feature on, so that pilot users get a correctly governed experience from their very first interaction rather than a brief window where the feature is available without the guardrails you intend.

Decide which features and models the pilot should allow, and set the policies at the organization level so the change only affects your pilot organization; policies set at the enterprise level apply to every organization in your enterprise. If your enterprise policy doesn't allow organizations to set their own value, an enterprise owner must change this before you can continue. To understand how policies cascade from the enterprise to organizations and who can override settings at each level, see [AUTOTITLE](/copilot/concepts/policies).

### Enable the feature for a single organization

As an organization owner, enable the specific feature or model for the pilot organization only, from the organization's {% data variables.product.prodname_copilot_short %} policy settings. For the full steps, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/manage-policies). Confirm that the setting applies to the pilot organization and not to the enterprise as a whole before you save it.

### Set a budget to cap the pilot's costs

Earlier, you decided on a spending ceiling for the pilot. Now you'll create the budget that enforces it.

First, understand what an organization budget does. It caps *metered* charges only, and it becomes active only after the shared pool of {% data variables.product.prodname_ai_credits_short %} is exhausted. It doesn't cap total spend, so set the limit to the amount of overage you're willing to pay beyond the included allowance, not to the pilot's total cost. Critically, a budget is **not a hard stop by default**: charges continue to accrue past the limit unless you enable **Stop usage when budget limit is reached** when you create it.

As an organization owner or billing manager, create a budget scoped to the pilot organization, set its limit to the overage ceiling you chose, and enable **Stop usage when budget limit is reached**.

If you want to prevent any single pilot user from running up consumption, also set a universal user-level budget. This is the only control that is always a hard stop, and it counts a user's consumption from both the shared pool and metered usage toward the same limit. Set it to a modest amount that lets participants do real work but stops any one user from consuming an outsized share of the pilot's budget.

For how budgets meter and block usage at the user, organization, and enterprise levels, see [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing).

## Monitor the pilot

Throughout the pilot, track adoption, collect developer feedback, and watch cost and agentic activity against the success criteria you defined at the start. Together, these signals help you decide whether to expand the feature.

### Track adoption and usage with {% data variables.product.prodname_copilot_short %} metrics

Use {% data variables.product.prodname_copilot_short %} usage metrics to see how many of your pilot users are active, how often they use the feature, and how those numbers trend over the pilot period. Adoption that holds steady or grows is a strong signal; usage that spikes and then fades may mean the feature isn't fitting into developers' real workflows.

* To understand what the metrics cover and how to interpret them, see [AUTOTITLE](/copilot/concepts/copilot-usage-metrics/copilot-metrics).
* To view the dashboard for your organization or enterprise, see [AUTOTITLE](/copilot/how-tos/administer-copilot/view-usage-and-adoption).

> [!TIP]
> A rising active-user count doesn't tell you whether that usage is meaningful, especially for an agentic feature. To see whether pilot participants are progressing to deeper, agent-driven usage, see [AUTOTITLE](/copilot/how-tos/administer-copilot/view-impact-dashboard).

### Collect developer feedback from your pilot group

Metrics tell you *whether* people use the feature, but not *why* or how well it works for them. Gather qualitative feedback to fill that gap. Run short surveys, hold regular check-ins, or set up a dedicated channel where pilot users can report what's working and what isn't.

This is where the participants you chose for their willingness to give feedback pay off. Ask specific questions: where the feature saved time, where it produced poor results, and whether it changed how they work. This feedback often surfaces problems and opportunities that the numbers alone won't reveal, and it gives you concrete examples to share with leadership later.

### Watch for cost and agentic activity in budgets and the audit log

Keep an eye on spending against the budget you created throughout the pilot, not just at the end. If usage approaches your ceiling sooner than expected, that's useful early evidence about what a wider rollout would cost. For the steps to monitor what you've spent against the budget, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/monitor-ai-usage). For tracking spending over time, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/manage-company-spending).

Alongside cost, watch whether the feature is being used safely. This is the third question leadership will ask, and the pilot is your chance to answer it with evidence rather than assurances. For agentic features, review agent sessions to understand what the feature is actually doing on your developers' behalf and to catch any unexpected or unwanted behavior; the audit log records when the feature is enabled or disabled, but doesn't capture that level of detail. Confirm that the policies and budgets you set are behaving as intended, and note anything that would need tighter guardrails at a larger scale. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/monitor-agentic-activity).

## Make a go or no-go decision

At the end of the pilot, check your results against the success criteria you defined up front, and decide whether to expand the feature, hold and gather more data, or roll it back. Make the decision deliberately and document the evidence behind it.

### Confirm you have enough evidence to decide

Before you decide, check that the pilot ran for the duration you planned and produced enough data to support a defensible conclusion.

Pilot usage draws from the shared pool first (at no extra cost) before metered billing begins, so $0 spend early in the pilot is expected and a shorter run can make cost data misleading.

You're ready to decide when you have:

* Adoption metrics that show a stable pattern rather than a single early burst.
* For agentic features, adoption cohort data showing whether participants are progressing to deeper usage rather than plateauing.
* Actual cost data, spanning at least one billing cycle, that you can compare against your estimate.
* Feedback from a representative range of your pilot users.

If any of these is thin, for example if usage is still climbing or only a few participants engaged, consider extending the pilot rather than deciding on incomplete evidence. A decision you can back with data is far easier to defend to leadership and far less likely to need reversing.

## Report to leadership

To justify your decision and build a case for a wider rollout, report the pilot's results to leadership.

### Identify the data to share

Pull together the signals you gathered during the pilot:

* **Adoption metrics**, showing how many pilot users were active and how usage trended over time.
* **Actual cost against budget**, comparing what the pilot spent to the ceiling you set and to your original estimate.
* **Feedback themes**, summarizing where participants found value and where they ran into problems.
* **Safety and governance observations**, including anything you learned from the audit log or from how policies and budgets behaved.

### Frame adoption, cost, and safety against ROI

Present the data in business terms rather than as raw figures. Connect adoption and feedback to the value the feature delivered, such as time saved, work unblocked, or quality improved, and weigh that against its actual cost and any governance or risk considerations you observed.

Close with a clear recommendation: expand, hold, or stop, and what it would cost to roll out more widely. Framing the pilot as a question of return on investment, predictable cost, and managed risk gives leadership what they need to approve a wider rollout with confidence.

## Act on your decision

Take the next step based on the evidence you gathered and the decision you made.

### Expand the rollout across your enterprise

If the evidence supports a go, widen the rollout in stages rather than all at once. Extend the feature policy to more organizations, and only then to the rest of your enterprise once each stage looks healthy. As you add more users, raise or add budgets so your spending controls scale with the larger population, and keep monitoring adoption and cost at each step.

For broader guidance on managing a rollout across your enterprise, see [AUTOTITLE](/copilot/tutorials/roll-out-at-scale).

### Roll back and disable the feature cleanly

If the evidence points to a no-go, disable the feature cleanly so there's no lingering cost or confusion. Turn off the feature or model policy for the pilot organization, and tell your participants the pilot has ended and why, so they're not left wondering why the feature disappeared.

Confirm there's no remaining usage that could continue to bill against your budget, and review or remove the pilot budget so it doesn't affect future reporting. Keep the data and feedback you gathered: even a no-go is a useful result to share with leadership, and it may inform a later re-evaluation when the feature matures.
