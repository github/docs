---
title: Usage-based billing for individuals
shortTitle: Usage-based billing for individuals
intro: 'Your {% data variables.product.prodname_copilot_short %} plan will include a monthly allowance of {% data variables.product.prodname_ai_credits %}. If you exhaust your {% data variables.product.prodname_ai_credits_short %}, you can pay extra to keep working.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

<!-- expires 2026-06-01 -->

> [!IMPORTANT] {% data variables.product.github %} will use the billing methods described in this article **starting June 1, 2026**. You can read more about this change on [{% data variables.product.prodname_blog %}](https://gh.io/copilot-billing-blog).

<!-- end expires 2026-06-01 -->

## What is usage-based billing?

All individual plans—{% data variables.copilot.copilot_free_short %}, {% data variables.copilot.copilot_pro_short %}, and {% data variables.copilot.copilot_pro_plus_short %}—include {% data variables.product.prodname_ai_credits %} allowances that vary by plan. Paid plans offer higher limits than free plans.

## What are {% data variables.product.prodname_ai_credits %}?

{% data variables.product.prodname_ai_credits %} are the billing unit for {% data variables.product.prodname_copilot_short %} usage.

When you use {% data variables.product.prodname_copilot_short %}, the interaction consumes tokens: input tokens (what's sent to the model), output tokens (what the model generates), and cached tokens (context the model reuses or stores). Each token is priced based on the model used, and the total is converted into {% data variables.product.prodname_ai_credits_short %}, where 1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}.

The cost of an interaction depends on two things: the model and the number of tokens consumed. A quick chat question using a lightweight model might cost a fraction of a credit. A long coding agent session using a frontier model across multiple files will cost more, because it's doing more work.

## What affects my usage?

More complex interactions consume more of your usage allowance. The main factors are:

* **Conversation length and complexity**: Longer conversations and more elaborate tasks involve more back-and-forth with the model, consuming more.
* **Agentic features**: Features like agent mode and {% data variables.copilot.copilot_cloud_agent %} can involve multiple model calls within a single task. A complex agentic session working across a large codebase will consume significantly more usage than a quick question in chat.
* **Model choice**: Different models have different costs per token. More capable models designed for complex reasoning cost more than lighter models suited to quick tasks. Switching to a less expensive model is one way to extend your usage allowance.

## What is billed in {% data variables.product.prodname_ai_credits_short %}?

{% data variables.product.prodname_copilot_short %} features that use AI models consume {% data variables.product.prodname_ai_credits_short %}. This includes {% data variables.copilot.copilot_chat_short %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_spaces %}, {% data variables.product.prodname_spark_short %}, and third-party coding agents.

Code completions and {% data variables.copilot.next_edit_suggestions %} are **not** billed in {% data variables.product.prodname_ai_credits_short %}. They remain unlimited for all paid plans.

## How do {% data variables.product.prodname_ai_credits_short %} work?

Each {% data variables.product.prodname_copilot_short %} individual plan subscription includes a monthly {% data variables.product.prodname_ai_credits_short %} allowance:

| Plan | Total {% data variables.product.prodname_ai_credits_short %} per month |
| --- | --- |
| {% data variables.copilot.copilot_pro_short %} | {% data variables.copilot.ai_credits_per_user_pro %} |
| {% data variables.copilot.copilot_pro_plus_short %} | {% data variables.copilot.ai_credits_per_user_pro_plus %} |

## What happens if I exceed my included {% data variables.product.prodname_ai_credits_short %}?

When your {% data variables.product.prodname_ai_credits_short %} are exhausted, you can:

* Set a budget for additional usage and pay extra to continue working
* Wait until the next monthly cycle when your included usage resets

Your additional usage budget is set in US dollars, and your usage is shown in {% data variables.product.prodname_ai_credits %}. {% data variables.product.prodname_ai_credits %} draw down your budget at a fixed rate: 1 {% data variables.product.prodname_ai_credits_short %} = {% data variables.product.prodname_ai_credits_value %}, so a $10 budget covers 1,000 {% data variables.product.prodname_ai_credits_short %}.

## Do I need to prepare for usage-based billing?

For most existing individual plan subscribers, no action is required. Existing annual subscribers have a couple of options to choose from.

### If you're on a monthly plan

If you're on a monthly plan, **no action is required**. You'll be automatically migrated to usage-based billing on June 1st, 2026.

### If you're on an annual plan

If you're on an annual plan, your plan **will not auto-renew**. You'll receive communications from {% data variables.product.github %} about your options before your annual renewal date.

You will have the option to:
* Cancel your plan and receive a prorated refund.
* Wait to be downgraded to {% data variables.copilot.copilot_free_short %} at renewal time.

Note that, starting **June 1, 2026**, {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers on **existing annual billing plans** will experience changes to model multipliers. See [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing#model-multipliers-for-annual-copilot-pro-and-copilot-pro-subscribers).

## Next steps

* For guidance on how to prepare for usage-based billing, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/prepare-for-your-move-to-usage-based-billing).