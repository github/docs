---
title: Usage-based billing for organizations and enterprises
shortTitle: Billing for organizations and enterprises
intro: 'Under usage-based billing, {% data variables.product.prodname_copilot_short %} usage in organizations and enterprises is measured in {% data variables.product.prodname_ai_credits_short %}.'
permissions: Enterprise and organization owners and billing managers
versions:
  feature: copilot
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
redirect_from:
  - /copilot/how-tos/manage-and-track-spending/prepare-for-usage-based-billing
contentType: concepts
category:
  - Manage Copilot for a team
---

## What are {% data variables.product.prodname_ai_credits %}?

{% data variables.product.prodname_ai_credits %} are the billing unit for {% data variables.product.prodname_copilot_short %} usage in {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}.

When someone in your organization uses {% data variables.product.prodname_copilot_short %}, the interaction consumes tokens: input tokens (what's sent to the model), output tokens (what the model generates), and cached tokens (context the model reuses or stores). Each token is priced based on the model used, and the total is converted into {% data variables.product.prodname_ai_credits_short %}, where 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}.

The cost of an interaction depends on two things: the model and the number of tokens consumed. A quick chat question using a lightweight model might cost a fraction of a credit. A long coding agent session using a frontier model across multiple files will cost more, because it's doing more work.

## What is billed in {% data variables.product.prodname_ai_credits_short %}?

{% data variables.product.prodname_copilot_short %} features that use AI models consume {% data variables.product.prodname_ai_credits_short %}. This includes {% data variables.copilot.copilot_chat_short %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_spaces %}, {% data variables.product.prodname_spark_short %}, and third-party coding agents.

Code completions and {% data variables.copilot.next_edit_suggestions %} are **not** billed in {% data variables.product.prodname_ai_credits_short %}. They remain unlimited for all paid plans.

## How do {% data variables.product.prodname_ai_credits_short %} work?

Each assigned {% data variables.product.prodname_copilot_short %} license comes with a monthly amount of **included {% data variables.product.prodname_ai_credits_short %}**:

| Plan | Total {% data variables.product.prodname_ai_credits_short %} per user per month |
| --- | --- |
| {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.ai_credits_per_user_business %} |
| {% data variables.copilot.copilot_enterprise_short %} | {% data variables.copilot.ai_credits_per_user_enterprise %} |

A user's included {% data variables.product.prodname_ai_credits_short %} are pooled at the billing entity level. For example, an enterprise with 100 {% data variables.copilot.copilot_business_short %} users gets a shared pool of 190,000 {% data variables.product.prodname_ai_credits_short %} rather than 100 individual buckets. This means power users can draw more when they need it, while lighter users offset that consumption.

Adding licenses mid-cycle increases the pool immediately. Removing licenses mid-cycle doesn't shrink the pool: the decrease is reflected at the start of the next billing cycle.

<!-- expires 2026-09-01 -->

### Promotional amounts for existing customers

Existing {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %} customers receive a higher amount of included {% data variables.product.prodname_ai_credits_short %} for the first three months of usage-based billing (June 1 – September 1, 2026):

| Plan | Total {% data variables.product.prodname_ai_credits_short %} per user per month |
| --- | --- |
| {% data variables.copilot.copilot_business_short %} | {% data variables.copilot.ai_credits_per_user_business_promo %} |
| {% data variables.copilot.copilot_enterprise_short %} | {% data variables.copilot.ai_credits_per_user_enterprise_promo %} |

After the promotional period, included usage returns to the standard amounts above.

<!-- end expires 2026-09-01 -->

## What happens if I exceed my included {% data variables.product.prodname_ai_credits_short %}?

When your pooled {% data variables.product.prodname_ai_credits_short %} are exhausted, what happens next depends on how you have configured policies for additional usage.

* **Additional usage allowed**: Usage continues at published per-credit rates. The additional spend is charged to your organization or enterprise.
* **Additional usage not allowed**: Usage is blocked until the next billing cycle when monthly amounts are refreshed.

If you have set a user-level budget and a user exhausts it, that user's access to {% data variables.product.prodname_copilot_short %} is halted, regardless of whether the organization's pool still has capacity. A user can also be blocked by an enterprise spending limit before they reach their individual user-level budget, if the spending limit runs out first. There is no automatic fallback to lower-cost models when a budget is exhausted. For more information about how these controls interact, see [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing).

Additional usage budgets are set in US dollars, and usage is shown in {% data variables.product.prodname_ai_credits_short %}. {% data variables.product.prodname_ai_credits_short %} draw down the budget at a fixed rate: 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}, so a $10 USD budget covers 1,000 AI credits.

## How can I control costs with budgets?

Budget controls let you govern how individual users draw from the shared pool and cap any additional spending once it's exhausted. You can set budgets at multiple levels:

* **User-level budgets** cap how much an individual user can consume per billing cycle, from both the shared pool and additional usage. A $0 USD user-level budget blocks the user immediately.
* **Cost-center budgets** cap metered charges for a defined group of users after the pool is exhausted.
* **Enterprise spending limits** cap total metered charges across your entire enterprise after the pool is exhausted.
* **Organization-level budgets** cap metered charges for users whose {% data variables.product.prodname_copilot_short %} seats are billed to the organization, after the pool is exhausted.

For a full explanation of how these controls work together and when usage gets blocked, see [AUTOTITLE](/copilot/concepts/billing/budgets-for-usage-based-billing).

<!-- expires 2026-09-01 -->

## Update your IDE, client, and extension

For the best experience with usage-based billing, update your IDE, client, and {% data variables.product.prodname_copilot_short %} extension to at least the versions listed below.

> [!NOTE]
> Older versions will continue to work, but may display incorrect model pricing, inaccurate usage information, or outdated billing terminology. Usage alert notifications may also not appear as expected.

| IDE, client, or extension | Minimum version |
| --- | --- |
| {% data variables.product.prodname_vscode_shortname %} | 1.120 |
| {% data variables.product.prodname_vs %} 2022 (17.x) | 17.14.33 |
| {% data variables.product.prodname_vs %} 2026 (18.x) | 18.6.0 |
| SQL Server Management Studio | 22.6 |
| JetBrains IDEs (plugin) | 1.9.1 |
| Eclipse (plugin) | 0.18.0 |
| Xcode (extension) | 0.50.0 |
| {% data variables.copilot.copilot_cli_short %} | 1.0.48 |

We recommend keeping your IDE, client, and {% data variables.product.prodname_copilot_short %} extensions on the latest available stable version. For information on configuring automatic updates, see [AUTOTITLE](/copilot/how-tos/configure-personal-settings/configure-in-ide). To update {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).

<!-- end expires 2026-09-01 -->

## Next steps

* To set up budget controls for your enterprise, see [AUTOTITLE](/copilot/tutorials/budgets/getting-started-with-budget-controls).
* To compare per-token costs across models and estimate your spend, see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).
