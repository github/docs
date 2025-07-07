---
title: Understanding and managing requests in Copilot
shortTitle: Understand and manage requests
intro: 'Learn about requests in {% data variables.product.prodname_copilot_short %}, including premium requests, how they work, and how to manage your usage effectively.'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/monitoring-usage-and-entitlements/avoiding-unexpected-copilot-costs
  - /copilot/managing-copilot/monitoring-usage-and-entitlements/avoiding-unexpected-copilot-costs
  - /copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests
  - /copilot/managing-copilot/understanding-and-managing-copilot-usage/understanding-and-managing-requests-in-copilot
---

> [!IMPORTANT]
> * Billing for premium requests began on June 18, 2025 for all paid {% data variables.product.prodname_copilot_short %} plans, and the request counters were only set to zero for paid plans.
> * {% data reusables.copilot.data-residency-availability %}
> * Premium request counters reset on the 1st of each month at 00:00:00 UTC. See [AUTOTITLE](/copilot/managing-copilot/understanding-and-managing-copilot-usage/monitoring-your-copilot-usage-and-entitlements).
> * Certain requests may experience rate limits to accommodate high demand. Rate limits restrict the number of requests that can be made within a specific time period.

## What is a request?

A request is any interaction where you ask {% data variables.product.prodname_copilot_short %} to do something for you—whether it’s generating code, answering a question, or helping you through an extension. Each time you send a prompt in a chat window or trigger a response from {% data variables.product.prodname_copilot_short %}, you’re making a request.

## What are premium requests?

Some {% data variables.product.prodname_copilot_short %} features use more advanced processing power and count as premium requests. The number of premium requests a feature consumes can vary depending on the feature and the AI model used.

### Premium features

The following {% data variables.product.prodname_copilot_short %} features can use premium requests.

| Feature | Premium request consumption |
| ------- | ----------- |
| [{% data variables.copilot.copilot_chat_short %}](/copilot/using-github-copilot/copilot-chat) | {% data variables.copilot.copilot_chat_short %} uses **one premium request** per user prompt, multiplied by the model's rate. |
| [{% data variables.copilot.copilot_coding_agent %}](/copilot/concepts/about-copilot-coding-agent) | {% data variables.copilot.copilot_coding_agent %} will make multiple premium requests to complete a single task. On average, {% data variables.copilot.copilot_coding_agent %} uses **30-50 premium requests** each time it is invoked. The exact number of premium requests will vary depending on the task’s complexity and the number of required steps. {% data variables.copilot.copilot_coding_agent %} uses a fixed multiplier of 1 for the premium requests it uses. |
| [Agent mode in {% data variables.copilot.copilot_chat_short %}](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide#copilot-edits) | Agent mode uses **one premium request** per user prompt, multiplied by the model's rate. |
| [{% data variables.product.prodname_copilot_short %} code review](/copilot/using-github-copilot/code-review/using-copilot-code-review) | When you assign {% data variables.product.prodname_copilot_short %} as a reviewer for a pull request, **one premium request** is used each time {% data variables.product.prodname_copilot_short %} posts comments to the pull request. |
| [{% data variables.copilot.copilot_extensions_short %}](/copilot/building-copilot-extensions/about-building-copilot-extensions) | {% data variables.copilot.copilot_extensions_short %} uses **one premium request** per user prompt, multiplied by the model's rate. |
| [{% data variables.copilot.copilot_spaces %}](/copilot/using-github-copilot/copilot-spaces/about-organizing-and-sharing-context-with-copilot-spaces) | {% data variables.copilot.copilot_spaces %} uses **one premium request** per user prompt, multiplied by the model's rate. |

## How do request allowances work per plan?

If you use **{% data variables.copilot.copilot_free_short %}**, your plan comes with up to 2,000 code completion requests and up to 50 premium requests per month. All chat interactions count as premium requests.

If you're on a **paid plan**, you get unlimited code completions and unlimited chat interactions using the included models ({% data variables.copilot.copilot_gpt_41 %} and {% data variables.copilot.copilot_gpt_4o %}). Rate limiting is in place to accommodate for high demand. See [AUTOTITLE](/copilot/troubleshooting-github-copilot/rate-limits-for-github-copilot).

Paid plans also receive a monthly allowance of premium requests, which can be used for advanced chat interactions, code completions using premium models, and other premium features. For an overview of the amount of premium requests included in each plan, see [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot#comparing-copilot-plans).

{% data reusables.copilot.premium-request-entity-selection %}

## What happens to unused requests at the end of the month?

Unused requests for the previous month do not carry over to the following month.

## What if I run out of premium requests?

> [!NOTE]
> Additional premium requests are not available to:
>
> * Users on {% data variables.copilot.copilot_free_short %}. To access more premium requests, upgrade to a paid plan.
> * Users who subscribe, or have subscribed, to {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} through {% data variables.product.prodname_mobile %} on iOS or Android.

If you're on a **paid plan** and use all of your premium requests, you can still use {% data variables.product.prodname_copilot_short %} with one of the included models for the rest of the month. This is subject to change. Response times for the included models may vary during periods of high usage. Requests to the included models may be subject to rate limiting. See [AUTOTITLE](/copilot/troubleshooting-github-copilot/rate-limits-for-github-copilot).

If you need more premium requests beyond your monthly allowance, you can:

* Set a spending limit for additional premium requests. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).
* Upgrade to a higher plan.

These actions can be taken by organization owners, billing managers, and personal account users.

> [!IMPORTANT] By default, all budgets are set to zero and premium requests over the allowance are rejected unless a budget has been created. Additional premium requests beyond your plan’s included amount are billed at {% data variables.copilot.additional_premium_requests %} per request.

## Model multipliers

The available models vary depending on your {% data variables.product.prodname_copilot_short %} plan. See [AUTOTITLE](/copilot/about-github-copilot/plans-for-github-copilot#models).

> [!NOTE]
> The models included with {% data variables.product.prodname_copilot_short %} plans are subject to change.

Each model has a premium request multiplier, based on its complexity and resource usage. If you are on a paid {% data variables.product.prodname_copilot_short %} plan, your premium request allowance is deducted according to this multiplier.

{% data variables.copilot.copilot_gpt_41 %} and {% data variables.copilot.copilot_gpt_4o %} are the included models, and do not consume any premium requests if you are on a **paid plan**.

If you use **{% data variables.copilot.copilot_free_short %}**, you have access to a limited number of models, and each model will consume one premium request when used. For example, if you make a request using the {% data variables.copilot.copilot_o3_mini %} model, your interaction will consume **one premium request**, not 0.33 premium requests.

{% rowheaders %}

| Model                                                                   | Multiplier for **paid plans**  | Multiplier for **{% data variables.copilot.copilot_free_short %}** |
|-------------------------------------------------------------------------|--------------------------------|-----------------------|
| {% data variables.copilot.copilot_gpt_41 %}                             | 0                              | 1                     |
| {% data variables.copilot.copilot_gpt_4o %}                             | 0                              | 1                     |
| {% data variables.copilot.copilot_claude_sonnet_35 %}                   | 1                              | 1                     |
| {% data variables.copilot.copilot_claude_sonnet_37 %}                   | 1                              | Not applicable        |
| {% data variables.copilot.copilot_claude_sonnet_37 %} Thinking          | 1.25                           | Not applicable        |
| {% data variables.copilot.copilot_claude_sonnet_40 %}                   | 1                              | Not applicable        |
| {% data variables.copilot.copilot_claude_opus %}                        | 10                             | Not applicable        |
| {% data variables.copilot.copilot_gemini_flash %}                       | 0.25                           | 1                     |
| {% data variables.copilot.copilot_gemini_25_pro %}                      | 1                              | Not applicable        |
| {% data variables.copilot.copilot_o3 %}                                 | 1                              | Not applicable        |
| {% data variables.copilot.copilot_o3_mini %}                            | 0.33                           | 1                     |
| {% data variables.copilot.copilot_o4_mini %}                            | 0.33                           | Not applicable        |

{% endrowheaders %}

## Examples of premium request usage

Premium request usage is based on the model’s multiplier and the feature you’re using. For example:

* **Using {% data variables.copilot.copilot_claude_opus %} in {% data variables.copilot.copilot_chat_short %}**: With a 10× multiplier, one interaction counts as 10 premium requests.
* **Using {% data variables.copilot.copilot_gpt_41 %} on {% data variables.copilot.copilot_free_short %}**: Each interaction counts as 1 premium request.
* **Using {% data variables.copilot.copilot_gpt_41 %} on a paid plan**: No premium requests are consumed.
