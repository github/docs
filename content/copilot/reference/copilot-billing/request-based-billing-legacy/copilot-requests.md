---
title: Requests in GitHub Copilot (legacy)
shortTitle: Copilot requests (legacy)
allowTitleToDifferFromFilename: true
intro: 'Learn about requests in {% data variables.product.prodname_copilot_short %}, including premium requests, how they work, and how to manage your usage effectively.'
versions:
  feature: copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/monitoring-usage-and-entitlements/avoiding-unexpected-copilot-costs
  - /copilot/managing-copilot/monitoring-usage-and-entitlements/avoiding-unexpected-copilot-costs
  - /copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests
  - /copilot/managing-copilot/understanding-and-managing-copilot-usage/understanding-and-managing-requests-in-copilot
  - /copilot/concepts/copilot-billing/understanding-and-managing-requests-in-copilot
  - /copilot/concepts/copilot-billing/requests-in-github-copilot
  - /copilot/concepts/copilot-billing/copilot-requests
  - /copilot/concepts/billing/copilot-requests
contentType: reference
category:
  - Learn about Copilot
---

{% data reusables.billing.legacy-pru-annual-plans-applicability %}

## What is a request?

A request is any interaction where you ask {% data variables.product.prodname_copilot_short %} to do something for you—whether it's generating code, answering a question, or helping you through an extension. Each time you send a prompt in a chat window or trigger a response from {% data variables.product.prodname_copilot_short %}, you're making a request. For agentic features, only the prompts you send count as premium requests; actions {% data variables.product.prodname_copilot_short %} takes autonomously to complete your task, such as tool calls, do not. For example, using `/plan` in {% data variables.copilot.copilot_cli_short %} counts as one premium request, and any follow-up prompt you send counts as another.

## What are premium requests?

Some {% data variables.product.prodname_copilot_short %} features use more advanced processing power and count as premium requests. The number of premium requests a feature consumes can vary depending on the feature and the AI model used.

### Premium features

The following {% data variables.product.prodname_copilot_short %} features can use premium requests.

> [!IMPORTANT]
> Starting June 1, 2026, {% data variables.copilot.copilot_code-review_short %} will have a model multiplier of 13. This means each time {% data variables.product.prodname_copilot_short %} reviews a pull request or reviews code in your IDE, your monthly quota of {% data variables.product.prodname_copilot_short %} premium requests will be reduced by 13.

{% rowheaders %}

| Feature | Premium request consumption | SKU Attribution |
| ------- | ----------- | ----------- |
| [{% data variables.copilot.copilot_chat_short %}](/copilot/using-github-copilot/copilot-chat) | {% data variables.copilot.copilot_chat_short %} uses **one premium request** per user prompt, multiplied by the model's rate. This includes ask, edit, agent, and plan modes in {% data variables.copilot.copilot_chat_short %} in an IDE. | {% data variables.product.prodname_copilot_short %} premium requests |
| [{% data variables.copilot.copilot_cli_short %}](/copilot/concepts/agents/about-copilot-cli) | Each prompt to {% data variables.copilot.copilot_cli_short %} uses **one premium request** with the default model. For other models, this is multiplied by the model's rate. | {% data variables.product.prodname_copilot_short %} premium requests |
| [{% data variables.product.prodname_copilot_short %} code review](/copilot/using-github-copilot/code-review/using-copilot-code-review) | Each time {% data variables.product.prodname_copilot_short %} reviews a pull request (when assigned as a reviewer) or reviews code in your IDE, **13 premium requests** are consumed. | {% data variables.product.prodname_copilot_short %} premium requests |
| [{% data variables.copilot.copilot_cloud_agent %}](/copilot/concepts/agents/cloud-agent/about-cloud-agent) | {% data variables.copilot.copilot_cloud_agent %} uses **one premium request** per session, multiplied by the model's rate. A session begins when you prompt {% data variables.product.prodname_copilot_short %} to undertake a task. In addition, each real-time steering comment made during an active session uses **one premium request** per session, multiplied by the model's rate. | {% data variables.copilot.copilot_cloud_agent %} premium requests |
| [{% data variables.copilot.copilot_spaces %}](/copilot/using-github-copilot/copilot-spaces/about-organizing-and-sharing-context-with-copilot-spaces) | {% data variables.copilot.copilot_spaces %} uses **one premium request** per user prompt, multiplied by the model's rate. | {% data variables.product.prodname_copilot_short %} premium requests |
| [{% data variables.product.prodname_spark_short %}](/copilot/tutorials/building-ai-app-prototypes) | Each prompt to {% data variables.product.prodname_spark_short %} uses a fixed rate of **four premium requests**. | {% data variables.product.prodname_spark_short %} premium requests |
| [{% data variables.product.prodname_openai_codex %} {% data variables.product.prodname_vscode %} integration](/copilot/concepts/agents/openai-codex) | While in preview, each prompt to {% data variables.product.prodname_openai_codex %} uses **one premium request** multiplied by the model multiplier rates. | {% data variables.product.prodname_copilot_short %} premium requests |
| [Third-party coding agents](/free-pro-team@latest/copilot/concepts/agents/about-third-party-coding-agents) | While in preview, each prompt to a third-party coding agent uses **one premium request**, multiplied by the model's rate. | {% data variables.product.prodname_copilot_short %} premium requests |

{% endrowheaders %}

> [!NOTE]
> {% data reusables.billing.pru-sku-split-notice %}

> [!TIP]
> For instructions on viewing how many premium requests you have used and advice on how to optimize usage, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/monitor-premium-requests).

## How do request allowances work per plan?

> [!NOTE]
> Billing for premium requests began on June 18, 2025, for all paid {% data variables.product.prodname_copilot_short %} plans on {% data variables.product.prodname_dotcom_the_website %}, and on August 1, 2025, on {% data variables.enterprise.data_residency_site %}. The request counters were only set to zero for paid plans.

If you're on a **paid plan**, you get unlimited inline suggestions. Rate limiting is in place to accommodate for high demand. See [AUTOTITLE](/copilot/concepts/rate-limits).

Paid plans also receive a monthly allowance of premium requests, which can be used for advanced chat interactions, inline suggestions using premium models, and other premium features.

{% rowheaders %}

| | {% data variables.copilot.copilot_pro_short %} | {% data variables.copilot.copilot_pro_plus_short %} |
| --- | --- | --- |
| Pricing | {% data variables.copilot.cfi_price_per_month %} per month<br>(free for some users) | {% data variables.copilot.cpp_price_per_month %} per month |
| Premium requests | 300 per month | 1500 per month |
| Purchase additional premium requests at $0.04/request | {% octicon "check" aria-label="Included" %} | {% octicon "check" aria-label="Included" %} |

{% endrowheaders %}

## What happens to unused requests at the end of the month?

Unused requests for the previous month do not carry over to the following month. Premium request counters reset on the 1st of each month at 00:00:00 UTC. See [AUTOTITLE](/copilot/managing-copilot/understanding-and-managing-copilot-usage/monitoring-your-copilot-usage-and-entitlements).

## What if I run out of premium requests?

> [!NOTE]
> Additional premium requests are not available to:
>
> * Users who subscribe, or have subscribed, to {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} through {% data variables.product.prodname_mobile %} on iOS or Android.

If you use all of your premium requests, you can still use {% data variables.product.prodname_copilot_short %} with one of the included models for the rest of the month. This is subject to change. Response times for the included models may vary during periods of high usage. Requests to the included models may be subject to rate limiting. See [AUTOTITLE](/copilot/concepts/rate-limits).

If you need more premium requests beyond your monthly allowance set a budget for additional premium requests or upgrade to a higher plan. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending).

## Model multipliers

Each model has a premium request multiplier, based on its complexity and resource usage. Your premium request allowance is deducted according to this multiplier.

See [AUTOTITLE](/copilot/reference/copilot-billing/request-based-billing-legacy/model-multipliers-for-annual-plans).
