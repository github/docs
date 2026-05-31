---
title: Choosing your enterprise's plan for GitHub Copilot
shortTitle: Choose enterprise plan
intro: 'Choose between {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}.'
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
---

## Introduction

When you adopt {% data variables.product.prodname_copilot %} in a company, you will sign up to a {% data variables.product.prodname_copilot_short %} plan designed for businesses. These plans allow you to grant access to users and meet security requirements with policies and audit logs.

To identify which plan is right for your company:

1. Define the overall goals you are hoping to achieve with your {% data variables.product.prodname_copilot_short %} rollout. Think about downstream goals such as reducing security debt, as opposed to earlier success indicators such as developer satisfaction or feature adoption.
1. Understand the benefits of {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, including included {% data variables.product.prodname_ai_credits_short %}.
1. Choose the {% data variables.product.prodname_copilot_short %} plan with the allowances and features that will help you meet your goals.

   >[!TIP] When you subscribe to {% data variables.product.prodname_copilot_short %} at the enterprise level, you can choose a plan individually for each organization in your enterprise. This allows you to evaluate the benefits of {% data variables.copilot.copilot_enterprise_short %} with a pilot program or enable it in the organizations where it will have the most impact.

This article explains the available plans and provides examples for how {% data variables.copilot.copilot_enterprise_short %} can help you achieve specific business goals.

## Plans and {% data variables.product.prodname_ai_credits_short %}

{% data variables.product.company_short %} offers two {% data variables.product.prodname_copilot_short %} plans for customers on {% data variables.product.prodname_ghe_cloud %}:

* **{% data variables.copilot.copilot_business_short %}** ({% data variables.copilot.cfb_price_per_month %} per user per month): includes {% data variables.copilot.ai_credits_per_user_business %} {% data variables.product.prodname_ai_credits_short %} per user and most {% data variables.product.prodname_copilot_short %} features in IDEs and on {% data variables.product.github %}.
* **{% data variables.copilot.copilot_enterprise_short %}** ({% data variables.copilot.ce_price_per_month %} per user per month): includes {% data variables.copilot.ai_credits_per_user_enterprise %} {% data variables.product.prodname_ai_credits_short %} per user, and often allows earlier access to new features and models.

For a full comparison, see our [plans page](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=text).

{% data variables.product.prodname_ai_credits_short %} are consumed by advanced {% data variables.product.prodname_copilot_short %} features and models, including AI agents. Each plan's included {% data variables.product.prodname_ai_credits_short %} are pooled across your enterprise, so heavier users can draw from lighter users' unused portions. By giving members access to more {% data variables.product.prodname_ai_credits_short %}, you can scale your company with AI agents and drive real business outcomes.

By default, usage can continue beyond the included pool, with additional usage charged at {% data variables.product.prodname_ai_credits_value %} per {% data variables.product.prodname_ai_credit_singular %}. You can control this with budget controls. See [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

## How does {% data variables.copilot.copilot_enterprise_short %} support business goals?

The following table shows examples of goals your company might set for a {% data variables.product.prodname_copilot_short %} rollout, and how {% data variables.product.prodname_ai_credits_short %} and other {% data variables.copilot.copilot_enterprise_short %} features can help you achieve those goals.

| Goal | Problem to solve | How {% data variables.copilot.copilot_enterprise_short %} helps |
| ---- | ---------------- | --------------------------------------------------------------- |
| **Reduce your backlog** | Teams may not have capacity to work on backlog issues or non-essential issues that come up during development. This can lead to a gradual degradation in feature quality. | With more included {% data variables.product.prodname_ai_credits_short %}, users can assign more issues to **{% data variables.copilot.copilot_cloud_agent %}**, which can complete tasks like fixing bugs or adding feature enhancements in the background. |
| **Accelerate pull requests** | Teams often experience delays in merging pull requests due to lengthy review cycles. This can lead to bottlenecks in the development process and slow down the delivery and improvement of features. | With more included {% data variables.product.prodname_ai_credits_short %}, users can receive more reviews on pull requests from **{% data variables.copilot.copilot_code-review_short %}**, often flagging bugs or possible improvements before a human reviewer is available. |
| **Reduce technical debt** | Inefficient or hard-to-read code can accumulate over time, making it harder for team members to onboard and understand new areas of the code. | With more included {% data variables.product.prodname_ai_credits_short %} and access to the latest models, users can use agent mode in their IDE to refactor code, choosing models with **greater contextual awareness** that are more suited to tasks like complex refactoring. |

## Is {% data variables.copilot.copilot_enterprise_short %} the most cost effective choice?

We recommend considering the included {% data variables.product.prodname_ai_credits_short %} in the {% data variables.copilot.copilot_business_short %} plan as a baseline, not a limit. Developers using agentic workflows including features like agent mode, {% data variables.copilot.copilot_cloud_agent %}, and {% data variables.copilot.copilot_code-review_short %} are likely to consume beyond the included amount.

If your company is gaining value from agentic workflows, you will likely want to make more {% data variables.product.prodname_ai_credits_short %} available to developers. Depending on consumption patterns, the most cost effective approach is either to upgrade users to {% data variables.copilot.copilot_enterprise_short %} or to allow additional usage beyond the included pool with appropriate budget controls.

To review your enterprise's consumption, see the AI usage dashboard in your enterprise billing settings. For guidance on managing spend, see [AUTOTITLE](/copilot/tutorials/budgets/optimizing-your-budget-configuration).
