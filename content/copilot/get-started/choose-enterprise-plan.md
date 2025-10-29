---
title: Choosing your enterprise's plan for GitHub Copilot
shortTitle: Choose enterprise plan
intro: 'Choose between {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/rolling-out-github-copilot-at-scale/choosing-your-enterprises-plan-for-github-copilot
  - /copilot/rolling-out-github-copilot-at-scale/planning-your-rollout/choosing-your-enterprises-plan-for-github-copilot
  - /copilot/tutorials/rolling-out-github-copilot-at-scale/planning-your-rollout/choosing-your-enterprises-plan-for-github-copilot
  - /copilot/get-started/choosing-your-enterprises-plan-for-github-copilot
contentType: get-started
category: 
  - Manage Copilot for a team
---

## Introduction

When you adopt {% data variables.product.prodname_copilot %} in a company, you will sign up to a {% data variables.product.prodname_copilot_short %} plan designed for businesses. These plans allow you to grant access to users and meet security requirements with policies and audit logs.

To identify which plan is right for your company:

1. Define the overall goals you are hoping to achieve with your {% data variables.product.prodname_copilot_short %} rollout. Think about downstream goals such as reducing security debt, as opposed to earlier success indicators such as developer satisfaction or feature adoption.
1. Understand the benefits of {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}, including premium request allowances.
1. Choose the {% data variables.product.prodname_copilot_short %} plan with the allowances and features that will help you meet your goals.

   >[!TIP] When you subscribe to {% data variables.product.prodname_copilot_short %} at the enterprise level, you can choose a plan individually for each organization in your enterprise. This allows you to evaluate the benefits of {% data variables.copilot.copilot_enterprise_short %} with a pilot program or enable it in the organizations where it will have the most impact.

This article explains the available plans and provides examples for how {% data variables.copilot.copilot_enterprise_short %} can help you achieve specific business goals.

## Plans and premium requests

{% data variables.product.company_short %} offers two {% data variables.product.prodname_copilot_short %} plans for customers on {% data variables.product.prodname_ghe_cloud %}:

* **{% data variables.copilot.copilot_business_short %}** ({% data variables.copilot.cfb_price_per_month %} per user per month): includes most {% data variables.product.prodname_copilot_short %} features in IDEs and on the {% data variables.product.github %} website.
* **{% data variables.copilot.copilot_enterprise_short %}** ({% data variables.copilot.ce_price_per_month %} per user per month): includes a higher allowance for premium requests, and often allows earlier access to new features and models.

For a full comparison, see our [plans page](https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=text).

Premium requests are used by more advanced {% data variables.product.prodname_copilot_short %} features and models, including AI agents. By giving members access to more premium requests, you can scale your company with AI agents and drive real business outcomes, such as reducing your backlog, accelerating pull requests, or increasing code quality with suggestions from more specialized models.

By default, users can continue to use premium requests after exhausting their plan's monthly allowance. However, each extra request is charged to your enterprise, and in many cases you can save money by upgrading users to {% data variables.copilot.copilot_enterprise_short %}.

For more information about premium requests, see [AUTOTITLE](/copilot/concepts/billing/copilot-requests).

## How does {% data variables.copilot.copilot_enterprise_short %} support business goals?

The following table shows examples of goals your company might set for a {% data variables.product.prodname_copilot_short %} rollout, and how premium requests and other {% data variables.copilot.copilot_enterprise_short %} features can help you achieve those goals.

| Goal | Problem to solve | How {% data variables.copilot.copilot_enterprise_short %} helps |
| ---- | ---------------- | --------------------------------------------------------------- |
| **Reduce your backlog** | Teams may not have capacity to work on backlog issues or non-essential issues that come up during development. This can lead to a gradual degradation in feature quality. | With more premium requests, users can assign more issues to **{% data variables.copilot.copilot_coding_agent %}**, which can complete tasks like fixing bugs or adding feature enhancements in the background. |
| **Accelerate pull requests** | Teams often experience delays in merging pull requests due to lengthy review cycles. This can lead to bottlenecks in the development process and slow down the delivery and improvement of features. | With more premium requests, users can receive more reviews on pull requests from **{% data variables.copilot.copilot_code-review_short %}**, often flagging bugs or possible improvements before a human reviewer is available. |
| **Reduce technical debt** | Inefficient or hard-to-read code can accumulate over time, making it harder for team members to onboard and understand new areas of the code. | With more premium requests and access to the latest models, users can use agent mode in their IDE to refactor code, choosing models with **greater contextual awareness** that are more suited to tasks like complex refactoring. |

## Is {% data variables.copilot.copilot_enterprise_short %} the most cost effective choice?

We recommend considering the number of premium requests in the {% data variables.copilot.copilot_business_short %} plan as a baseline, not a limit. Developers using agentic workflows including features like agent mode, {% data variables.copilot.copilot_coding_agent %}, and {% data variables.copilot.copilot_code-review_short %} are likely to surpass this allowance.

If your company is gaining value from agentic workflows, you will likely want to make more requests available to developers. Depending on how many requests people are using, the most cost effective way to do that is either to upgrade users to {% data variables.copilot.copilot_enterprise_short %} or to enable paid usage for requests beyond your plan's allowance.

To download a usage report to see how many premium requests your developers are using, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/monitor-premium-requests#viewing-premium-request-usage). {% data variables.copilot.copilot_business_short %} users who use more than around 800 premium requests a month would save money on a {% data variables.copilot.copilot_enterprise_short %} plan.

For more information on managing spending on premium requests, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/manage-request-allowances).

## Getting started

When you've determined whether premium requests and {% data variables.copilot.copilot_enterprise_short %} features will help you achieve your goals, it's time to choose a plan.

{% note %}

Sign up:

<a href="https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=purchase&ref_style=button&ref_plan=business" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Copilot Business</span></a>  <a href="https://github.com/github-copilot/purchase?ref_product=copilot&ref_type=purchase&ref_style=button&ref_plan=enterprise" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Copilot Enterprise</span></a>

{% endnote %}

## Further reading

* [AUTOTITLE](/copilot/get-started/achieve-engineering-goals)
* [AUTOTITLE](/copilot/reference/ai-models/model-comparison)
