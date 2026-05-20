---
title: Usage-based billing for organizations and enterprises
intro: 'Prepare for the transition to usage-based billing for {% data variables.copilot.copilot_business_short %} and {% data variables.copilot.copilot_enterprise_short %}.'
permissions: Enterprise and organization owners and billing managers 
versions:
  feature: copilot
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
contentType: concepts
category: 
  - Manage Copilot for a team
---

<!-- expires 2026-06-01 -->

> [!IMPORTANT] {% data variables.product.github %} will use the billing methods described in this article **starting June 1, 2026**. You can read more about this change on [{% data variables.product.prodname_blog %}](https://gh.io/copilot-billing-blog).

<!-- end expires 2026-06-01 -->

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

If you have set a user-level budget and a user exhausts it, that user's access to {% data variables.product.prodname_copilot_short %} is halted, regardless of whether the organization's pool still has capacity. There is no automatic fallback to lower-cost models when a budget is exhausted.

Additional usage budgets are set in US dollars, and usage is shown in {% data variables.product.prodname_ai_credits %}. {% data variables.product.prodname_ai_credits %} draw down the budget at a fixed rate: 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}, so a $10 budget covers 1,000 AI credits.

## How can I control costs with budgets?

You can set budgets at four levels to control {% data variables.product.prodname_ai_credits %} spend:

* **Enterprise-level budgets** track spending for all organizations, repositories, and cost centers under the enterprise.
* **Organization-level budgets** track spending for all repositories in the organization.
* **Cost-center-level budgets** track spending for a single cost center.
* **User-level budgets** track spending for individual users. A $0 user-level budget means no access at all.

You can use budgets to get alerts as you approach limits, and to enforce hard stops on usage. For example, if you want to allow some additional usage but keep it in check, you could set a user-level budget slightly above the included amount.

For more information on setting budgets, see [AUTOTITLE](/billing/how-tos/set-up-budgets).

## Next steps

* To compare per-token costs across models and estimate your spend, see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).
* For guidance on how to prepare for usage-based billing, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/prepare-for-usage-based-billing).
