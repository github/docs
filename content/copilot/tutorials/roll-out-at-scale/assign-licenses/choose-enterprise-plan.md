---
title: Choosing your enterprise's plan for GitHub Copilot
shortTitle: Choose enterprise plan
intro: 'Compare enterprise access charges, usage allowances, and capabilities to choose a {% data variables.product.prodname_copilot_short %} plan for your rollout.'
versions:
  feature: copilot
redirect_from:
  - /copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot
  - /copilot/rolling-out-github-copilot-at-scale/planning-your-rollout/choosing-your-enterprises-plan-for-github-copilot
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/planning-your-rollout/choosing-your-enterprises-plan-for-github-copilot
  - /copilot/get-started/choosing-your-enterprises-plan-for-github-copilot
  - /copilot/get-started/choose-enterprise-plan
contentType: tutorials
category:
  - Manage Copilot for a team
docsTeamMetrics:
  - ai-governance
---

## Introduction

{% data variables.product.prodname_copilot %} plans let enterprises grant access to users and meet security requirements with policies and audit logs. To choose a plan, compare the cost of access and expected usage alongside the capabilities your company needs.

To identify which plan is right for your company:

1. Define the overall goals you are hoping to achieve with your {% data variables.product.prodname_copilot_short %} rollout. Think about downstream goals such as reducing security debt, as opposed to earlier success indicators such as developer satisfaction or feature adoption.
1. Compare plan capabilities, access charges, and included {% data variables.product.prodname_ai_credits_short %} using the options below.
1. Estimate total monthly costs for your users and expected consumption, then choose a plan and spending controls that support your goals.

## Plans and {% data variables.product.prodname_ai_credits_short %}

The plans differ in how they charge for access and metered usage:

* **{% data variables.copilot.copilot_business_short %}** ({% data variables.copilot.cfb_price_per_month %} per user per month): includes {% data variables.copilot.ai_credits_per_user_business %} {% data variables.product.prodname_ai_credits_short %} per user and most {% data variables.product.prodname_copilot_short %} features in IDEs and on {% data variables.product.github %}.
* **{% data variables.copilot.copilot_enterprise_short %}** ({% data variables.copilot.ce_price_per_month %} per user per month): includes {% data variables.copilot.ai_credits_per_user_enterprise %} {% data variables.product.prodname_ai_credits_short %} per user, and often allows earlier access to new features and models.
* **{% data variables.product.prodname_copilot_short %} access** (eligible enterprises only): provides the same feature and model eligibility as {% data variables.copilot.copilot_enterprise_short %}, subject to administrator policies and spending controls. Access is $0 incremental through {% data variables.product.prodname_ghe_cloud %} for licensed users, or {% data variables.copilot.copilot_standalone_price_per_month %} per user per month as {% data variables.copilot.copilot_standalone_short %} without a {% data variables.product.prodname_ghe_cloud %} license. Neither option includes credits, so metered usage is billed from the first use.

To check eligibility for {% data variables.product.prodname_copilot_short %} access, see [AUTOTITLE](/copilot/get-started/whats-changing-with-github-enterprise-and-copilot).

With {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, an enterprise owner can choose a plan for each organization. You can pilot {% data variables.copilot.copilot_enterprise_short %} or enable it in organizations where its capabilities will have the most impact.

{% data variables.product.prodname_ai_credits_short %} are consumed by metered features and models, including AI agents. On plans with an included allowance, credits are pooled across your enterprise so heavier users can draw from lighter users' unused portions. By default, usage can continue beyond that pool with additional charges. On every plan, budget controls let you govern consumption and metered spending. See [AUTOTITLE](/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing).

## How does {% data variables.copilot.copilot_enterprise_short %} support business goals?

The following table shows examples of goals your company might set for a {% data variables.product.prodname_copilot_short %} rollout, and how {% data variables.product.prodname_ai_credits_short %} and other {% data variables.copilot.copilot_enterprise_short %} features can help you achieve those goals.

The {% data variables.product.prodname_copilot_short %} access plan provides the same feature eligibility, but all credit consumption is metered rather than drawing from an included pool.

| Goal | Problem to solve | How {% data variables.copilot.copilot_enterprise_short %} helps |
| ---- | ---------------- | --------------------------------------------------------------- |
| **Reduce your backlog** | Teams may not have capacity to work on backlog issues or non-essential issues that come up during development. This can lead to a gradual degradation in feature quality. | With more included {% data variables.product.prodname_ai_credits_short %}, users can assign more issues to **{% data variables.copilot.copilot_cloud_agent %}**, which can complete tasks like fixing bugs or adding feature enhancements in the background. |
| **Accelerate pull requests** | Teams often experience delays in merging pull requests due to lengthy review cycles. This can lead to bottlenecks in the development process and slow down the delivery and improvement of features. | With more included {% data variables.product.prodname_ai_credits_short %}, users can receive more reviews on pull requests from **{% data variables.copilot.copilot_code-review_short %}**, often flagging bugs or possible improvements before a human reviewer is available. |
| **Reduce technical debt** | Inefficient or hard-to-read code can accumulate over time, making it harder for team members to onboard and understand new areas of the code. | With more included {% data variables.product.prodname_ai_credits_short %} and access to the latest models, users can use agent mode in their IDE to refactor code, choosing models with **greater contextual awareness** that are more suited to tasks like complex refactoring. |

## Is {% data variables.copilot.copilot_enterprise_short %} the most cost effective choice?

We recommend considering the included {% data variables.product.prodname_ai_credits_short %} in the {% data variables.copilot.copilot_business_short %} plan as a baseline, not a limit. Developers using agentic workflows including features like agent mode, {% data variables.copilot.copilot_cloud_agent %}, and {% data variables.copilot.copilot_code-review_short %} are likely to consume beyond the included amount.

If your company is gaining value from agentic workflows, you will likely want to make more {% data variables.product.prodname_ai_credits_short %} available to developers. Depending on consumption patterns, the most cost effective approach is either to upgrade users to {% data variables.copilot.copilot_enterprise_short %} or to allow additional usage beyond the included pool with appropriate budget controls.

If your enterprise is eligible for {% data variables.product.prodname_copilot_short %} access, also compare its access and metered usage costs with the full cost of your current plan. Include usage currently covered by your pool, not just overage charges.

To review your enterprise's consumption, see the AI usage dashboard in your enterprise billing settings. For guidance on managing spend, see [AUTOTITLE](/copilot/tutorials/budgets/optimizing-your-budget-configuration).

