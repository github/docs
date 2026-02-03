---
title: Requests in GitHub Copilot
shortTitle: Copilot requests
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
  - /copilot/concepts/copilot-billing/understanding-and-managing-requests-in-copilot
  - /copilot/concepts/copilot-billing/requests-in-github-copilot
  - /copilot/concepts/copilot-billing/copilot-requests
contentType: concepts
category:
  - Learn about Copilot
---

> [!IMPORTANT]
> * {% data reusables.billing.pru-sku-split-notice %}
> * Billing for premium requests began on June 18, 2025, for all paid {% data variables.product.prodname_copilot_short %} plans on {% data variables.product.prodname_dotcom_the_website %}, and on August 1, 2025, on {% data variables.enterprise.data_residency_site %}. The request counters were only set to zero for paid plans.
> * Premium request counters reset on the 1st of each month at 00:00:00 UTC. See [AUTOTITLE](/copilot/managing-copilot/understanding-and-managing-copilot-usage/monitoring-your-copilot-usage-and-entitlements).
> * Certain requests may experience rate limits to accommodate high demand. Rate limits restrict the number of requests that can be made within a specific time period.

## What is a request?

A request is any interaction where you ask {% data variables.product.prodname_copilot_short %} to do something for you—whether it’s generating code, answering a question, or helping you through an extension. Each time you send a prompt in a chat window or trigger a response from {% data variables.product.prodname_copilot_short %}, you’re making a request.

## What are premium requests?

Some {% data variables.product.prodname_copilot_short %} features use more advanced processing power and count as premium requests. The number of premium requests a feature consumes can vary depending on the feature and the AI model used.

### Premium features

The following {% data variables.product.prodname_copilot_short %} features can use premium requests.

| Feature | Premium request consumption | SKU Attribution |
| ------- | ----------- | ----------- |
| [{% data variables.copilot.copilot_chat_short %}](/copilot/using-github-copilot/copilot-chat) | {% data variables.copilot.copilot_chat_short %} uses **one premium request** per user prompt, multiplied by the model's rate. This includes ask, edit, agent, and plan modes in {% data variables.copilot.copilot_chat_short %} in an IDE. | {% data variables.product.prodname_copilot_short %} premium requests |
| [{% data variables.copilot.copilot_cli_short %}](/copilot/concepts/agents/about-copilot-cli) | Each prompt to {% data variables.copilot.copilot_cli_short %} uses **one premium request** with the default model. For other models, this is multiplied by the model's rate. | {% data variables.product.prodname_copilot_short %} premium requests |
| [{% data variables.product.prodname_copilot_short %} code review](/copilot/using-github-copilot/code-review/using-copilot-code-review) | Each time {% data variables.product.prodname_copilot_short %} reviews a pull request (when assigned as a reviewer) or reviews code in your IDE, **one premium request** is consumed. | {% data variables.product.prodname_copilot_short %} premium requests |
| [{% data variables.copilot.copilot_coding_agent %}](/copilot/concepts/about-copilot-coding-agent) | {% data variables.copilot.copilot_coding_agent %} uses **one premium request** per session, multiplied by the model's rate. A session begins when you ask {% data variables.product.prodname_copilot_short %} to create a pull request or make one or more changes to an existing pull request. In addition, each real-time steering comment made during an active session uses **one premium request** per session, multiplied by the model's rate. | {% data variables.copilot.copilot_coding_agent %} premium requests |
| [{% data variables.copilot.copilot_spaces %}](/copilot/using-github-copilot/copilot-spaces/about-organizing-and-sharing-context-with-copilot-spaces) | {% data variables.copilot.copilot_spaces %} uses **one premium request** per user prompt, multiplied by the model's rate. | {% data variables.product.prodname_copilot_short %} premium requests |
| [{% data variables.product.prodname_spark_short %}](/copilot/tutorials/building-ai-app-prototypes) | Each prompt to {% data variables.product.prodname_spark_short %} uses a fixed rate of **four premium requests**. | {% data variables.product.prodname_spark_short %} premium requests |
| [{% data variables.product.prodname_openai_codex %} integration](/copilot/concepts/agents/openai-codex) | While in preview, each prompt to {% data variables.product.prodname_openai_codex %} uses **one premium request** multiplied by the model multiplier rates. | {% data variables.product.prodname_copilot_short %} premium requests |

> [!TIP]
> For instructions on viewing how many premium requests you have used and advice on how to optimize usage, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/monitor-premium-requests).

## How do request allowances work per plan?

If you use **{% data variables.copilot.copilot_free_short %}**, your plan comes with up to 2,000 inline suggestion requests and up to 50 premium requests per month. All chat interactions count as premium requests.

If you're on a **paid plan**, you get unlimited inline suggestions and unlimited chat interactions using the included models ({% data variables.copilot.copilot_gpt_5_mini %}, {% data variables.copilot.copilot_gpt_41 %} and {% data variables.copilot.copilot_gpt_4o %}). Rate limiting is in place to accommodate for high demand. See [AUTOTITLE](/copilot/concepts/rate-limits).

Paid plans also receive a monthly allowance of premium requests, which can be used for advanced chat interactions, inline suggestions using premium models, and other premium features. For an overview of the amount of premium requests included in each plan, see [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot#comparing-copilot-plans).

{% data reusables.copilot.premium-request-entity-selection %}

## What happens to unused requests at the end of the month?

Unused requests for the previous month do not carry over to the following month.

## What if I run out of premium requests?

> [!NOTE]
> Additional premium requests are not available to:
>
> * Users on {% data variables.copilot.copilot_free_short %}. To access more premium requests, upgrade to a paid plan.
> * Users who subscribe, or have subscribed, to {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} through {% data variables.product.prodname_mobile %} on iOS or Android.

If you're on a **paid plan** and use all of your premium requests, you can still use {% data variables.product.prodname_copilot_short %} with one of the included models for the rest of the month. This is subject to change. Response times for the included models may vary during periods of high usage. Requests to the included models may be subject to rate limiting. See [AUTOTITLE](/copilot/concepts/rate-limits).

If you need more premium requests beyond your monthly allowance:

* For an individual subscription, set a budget for additional premium requests or upgrade to a higher plan. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).
* If you're an enterprise or organization owner, ensure that the "Premium request paid usage" policy is enabled and that extra spending is not prevented by a budget. See [AUTOTITLE](/copilot/how-tos/premium-requests/manage-for-enterprise).

{% data reusables.copilot.zero-budget-changes-link %}

## Model multipliers

The available models vary depending on your {% data variables.product.prodname_copilot_short %} plan. See [AUTOTITLE](/copilot/about-github-copilot/plans-for-github-copilot#models).

> [!NOTE]
> * The models included with {% data variables.product.prodname_copilot_short %} plans are subject to change.
> * Discounted multipliers are available for using {% data variables.copilot.copilot_auto_model_selection %} in {% data variables.copilot.copilot_chat_short %} in {% data variables.product.prodname_vscode_shortname %}. See [AUTOTITLE](/copilot/concepts/auto-model-selection).
>   * {% data reusables.copilot.auto-model-multiplier-discount %} For example, Sonnet 4 would be billed at .9x rather than 1x when using {% data variables.copilot.copilot_auto_model_selection_short %}.
>   * Discounted multipliers are not available for {% data variables.copilot.copilot_free_short %}.

Each model has a premium request multiplier, based on its complexity and resource usage. If you are on a paid {% data variables.product.prodname_copilot_short %} plan, your premium request allowance is deducted according to this multiplier.

{% data variables.copilot.copilot_gpt_5_mini %}, {% data variables.copilot.copilot_gpt_41 %} and {% data variables.copilot.copilot_gpt_4o %} are the included models, and do not consume any premium requests if you are on a **paid plan**.

If you use **{% data variables.copilot.copilot_free_short %}**, you have access to a limited number of models, and each model will consume one premium request when used.

{% data reusables.copilot.model-multipliers %}

## Examples of premium request usage

Premium request usage is based on the model’s multiplier and the feature you’re using. For example:

* **Using {% data variables.copilot.copilot_claude_opus_45 %} in {% data variables.copilot.copilot_chat_short %}**: With a 3× multiplier, one interaction counts as 3 premium requests.
* **Using {% data variables.copilot.copilot_gpt_5_mini %} on {% data variables.copilot.copilot_free_short %}**: Each interaction counts as 1 premium request.
* **Using {% data variables.copilot.copilot_gpt_5_mini %} on a paid plan**: No premium requests are consumed.
