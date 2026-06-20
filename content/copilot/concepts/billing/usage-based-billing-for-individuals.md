---
title: Usage-based billing for individuals
shortTitle: Billing for individuals
intro: 'Your {% data variables.product.prodname_copilot_short %} plan includes a monthly allowance of {% data variables.product.prodname_ai_credits %}. If you exhaust your {% data variables.product.prodname_ai_credits_short %}, you can pay extra to keep working.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/about-billing-for-github-copilot-individual
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-github-copilot-pro-subscription/about-billing-for-copilot-pro
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-copilot-pro
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/billing-and-payments/about-billing-for-individual-copilot-plans
  - /copilot/concepts/copilot-billing/about-billing-for-individual-copilot-plans
  - /copilot/concepts/copilot-billing/billing-for-individuals
  - /copilot/concepts/billing/billing-for-individuals
  - /copilot/how-tos/manage-and-track-spending/prepare-for-your-move-to-usage-based-billing
---

{% data variables.product.prodname_copilot_short %} usage is measured in {% data variables.product.prodname_ai_credits_short %}. All {% data variables.product.prodname_copilot_short %} plans include a monthly allowance of {% data variables.product.prodname_ai_credits_short %}. If you use up all of the credits included in your plan, you can purchase more and keep working.

## What are {% data variables.product.prodname_ai_credits %}?

When you use {% data variables.product.prodname_copilot_short %}, the interaction consumes tokens: input tokens (what's sent to the model), output tokens (what the model generates), and cached tokens (context the model reuses or stores). Each token is priced based on the model used.

The cost of an interaction therefore depends on two things:

* The **model** used
* The **number of tokens** consumed

This total is converted into **{% data variables.product.prodname_ai_credits_short %}** (1 {% data variables.product.prodname_ai_credit_singular %} = {% data variables.product.prodname_ai_credits_value %}).

For example:

* A quick question in {% data variables.copilot.copilot_chat_short %} using a lightweight model might cost a fraction of an {% data variables.product.prodname_ai_credit_singular %}.
* A long {% data variables.copilot.copilot_cloud_agent %} session using a frontier model across multiple files will cost more {% data variables.product.prodname_ai_credits_short %}, because it's doing more work.

To view {% data variables.product.prodname_copilot_short %}'s supported models and their pricing, see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).

## How do {% data variables.product.prodname_ai_credits_short %} work?

All individual plans—{% data variables.copilot.copilot_free_short %}, {% data variables.copilot.copilot_pro_short %}, {% data variables.copilot.copilot_pro_plus_short %}, and {% data variables.copilot.copilot_max_short %}—include a monthly {% data variables.product.prodname_ai_credits %} allowance that varies by plan.

Each paid plan includes the following:

* **Base credits**: These are included with your plan subscription each month. These match with your subscription price and they never change.
* **Flex allotment**: This is an additional monthly amount on top of your base credits. The flex allotment is a variable part of your included usage; it is designed to adapt as the economics of AI evolve, including model pricing, new models, and improvements in efficiency.

Your base credits are used first. If you go beyond your base credits, the flex allotment is applied automatically at the same rates across your IDE, {% data variables.product.prodname_dotcom_the_website %}, and {% data variables.copilot.copilot_cli_short %}. No additional setup is required. Your usage dashboard shows your available allowance and what you've used.

### {% data variables.product.prodname_ai_credits %} allowance by plan

The following table shows what's included with each paid plan.

{% data reusables.copilot.plans.ai-credits-by-plan %}

If you use everything included in your plan, you can purchase more and keep working. See [What happens if I exceed my included {% data variables.product.prodname_ai_credits_short %}](#what-happens-if-i-exceed-my-included--data-variablesproductprodname_ai_credits_short-).

## What is billed in {% data variables.product.prodname_ai_credits_short %}?

{% data variables.product.prodname_copilot_short %} features that use AI models consume {% data variables.product.prodname_ai_credits_short %}, such as:
* {% data variables.copilot.copilot_chat_short %}
* {% data variables.copilot.copilot_cli_short %}
* {% data variables.copilot.copilot_cloud_agent %}
* {% data variables.copilot.copilot_spaces %}
* {% data variables.product.prodname_spark_short %}
* Third-party coding agents

Code completions and {% data variables.copilot.next_edit_suggestions %} are not billed in {% data variables.product.prodname_ai_credits_short %} and remain unlimited for all paid plans.

## What affects my usage?

More complex interactions consume more of your usage allowance. The main factors are:

* **Conversation length and complexity**: Longer conversations and more elaborate tasks involve more back-and-forth with the model, consuming more.
* **Agentic features**: Features like agent mode and {% data variables.copilot.copilot_cloud_agent %} can involve multiple model calls within a single task. A complex agentic session working across a large codebase will consume significantly more usage than a quick question in chat.
* **Model choice**: Different models have different costs per token. More capable models designed for complex reasoning cost more than lighter models suited to quick tasks. Switching to a less expensive model is one way to extend your usage allowance.

> [!NOTE] {% data reusables.copilot.auto-model-discount %}

## What happens if I exceed my included {% data variables.product.prodname_ai_credits_short %}?

When your {% data variables.product.prodname_ai_credits_short %} are exhausted, you can:

* **Upgrade your plan.** As you approach your usage limits, {% data variables.product.prodname_copilot_short %} prompts you to upgrade to the next tier. The upgrade cost is only the price difference between your current plan and the new plan, _not_ the full price of the new plan. Your usage from earlier in the billing cycle is counted within the new plan's larger allowance, so the additional credits are available to you immediately. You won't be charged for both plans for the same period.
* **Stay on your existing plan and pay for more usage.**  If your included credits are exhausted, you can continue working by setting a budget for **additional usage**. Note that additional usage **may be capped**, so to keep working, you'll need to pay off any additional usage you've already consumed in order to continue.
* Alternatively, wait until the next monthly cycle when your included usage resets.

Your additional usage budget is set in US dollars, and your usage is shown in {% data variables.product.prodname_ai_credits %}. {% data variables.product.prodname_ai_credits %} draw down your budget at a fixed rate: 1 {% data variables.product.prodname_ai_credits_short %} = {% data variables.product.prodname_ai_credits_value %}, so a $10 budget covers 1,000 {% data variables.product.prodname_ai_credits_short %}.

To set up a budget for {% data variables.product.prodname_ai_credits %}, see [AUTOTITLE](/billing/how-tos/set-up-budgets#managing-budgets-for-your-personal-account).

## About changes to your {% data variables.product.prodname_copilot_short %} plan

{% data reusables.copilot.copilot-one-account %}

You can cancel your {% data variables.product.prodname_copilot_short %} plan at any time. The cancellation will take effect at the end of your current billing cycle. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription/canceling-copilot-as-an-individual-user).

## Determining your billing date

Your billing date will depend on whether or not you are already being billed by {% data variables.product.prodname_dotcom %}.

* **If you are not already being billed by {% data variables.product.prodname_dotcom %}**, in most cases your billing cycle will start on the day you sign up for {% data variables.product.prodname_copilot_short %}. For example, if you sign up on 3 September, with monthly billing, your initial billing cycle will run from 3 September until and including 2 October, and then on the same days of subsequent months.
* **If you already have a billing cycle**, billing for {% data variables.product.prodname_copilot_short %} will be included in your next bill. You will be charged on a pro rata basis for that initial period.

<!-- expires 2026-09-01 -->

## Update your IDE, client, and extension

For the best experience with usage-based billing, update your IDE, client, and {% data variables.product.prodname_copilot_short %} extension to at least the versions listed below.

> [!NOTE]
> Older versions will continue to work, but may display incorrect model pricing, inaccurate usage information, or outdated billing terminology. Usage alert notifications may also not appear as expected.

| IDE, client, or extension | Minimum version |
| --- | --- |
| {% data variables.product.prodname_vscode_shortname %} | 1.120 |
| {% data variables.product.prodname_vs %} 2022 (17.x) | 17.14.33 |
| {% data variables.product.prodname_vs %} 2025 (18.x) | 18.6.0 |
| SQL Server Management Studio | 22.6 |
| JetBrains IDEs (plugin) | 1.9.1 |
| Eclipse (plugin) | 0.18.0 |
| Xcode (extension) | 0.50.0 |
| {% data variables.copilot.copilot_cli_short %} | 1.0.48 |

We recommend keeping your IDE, client, and {% data variables.product.prodname_copilot_short %} extensions on the latest available stable version. For information on configuring automatic updates, see [AUTOTITLE](/copilot/how-tos/configure-personal-settings/configure-in-ide). To update {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/install-copilot-cli).

<!-- end expires 2026-09-01 -->

## Further reading

* [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot)
* [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-your-copilot-subscription)
* [AUTOTITLE](/billing/managing-your-billing/managing-your-payment-and-billing-information)
