---
title: Model multipliers for annual plans staying on request-based billing
intro: 'After June 1, 2026, model multipliers will change for {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers staying on annual plans under request-based billing.'
shortTitle: Model multipliers for annual plans
versions:
  feature: copilot
category:
  - Learn about Copilot
allowTitleToDifferFromFilename: true
contentType: reference
---

> [!IMPORTANT] The model multiplier changes outlined in this article apply only to {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers who stay on their **existing annual plan** after June 1, 2026 and remain on the **premium request-based billing** model.
>
> If you choose to switch to monthly usage-based billing (with a prorated refund), these multiplier changes **do not apply** to you.

## What is changing with {% data variables.product.prodname_copilot_short %} billing?

{% data variables.product.github %} is changing how {% data variables.product.prodname_copilot_short %} usage is measured and billed.

Today, each model interaction costs one premium request unit (PRU), and a multiplier is applied based on which model you use—more powerful models use more premium requests. Model multipliers are a concept specific to the current request-based billing system.

**Starting June 1, 2026**, {% data variables.product.github %} is replacing request-based billing with usage-based billing, where the cost of an interaction depends on two things: the model and the number of tokens consumed.

Under usage-based billing, each plan will come with an included allowance of {% data variables.product.prodname_ai_credits %}, with the option to set a budget for additional usage.

Model multipliers **do not apply** to usage-based billing.

## What are my options as a {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} user on an existing annual plan?

If you're on an existing **annual plan** for {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %}, you will have the option to:
* **Stay** on your existing annual plan under premium request-based billing. When your annual plan ends, you'll be automatically downgraded to {% data variables.copilot.copilot_free_short %}.
* **Cancel** your plan, receive a prorated refund, and optionally, re-subscribe to the equivalent monthly paid plan.
* **Upgrade** to a monthly paid plan and receive prorated credits for the remaining value of the annual plan. For example, if you're on a {% data variables.copilot.copilot_pro_short %} annual plan, you can upgrade to a monthly {% data variables.copilot.copilot_pro_plus_short %} plan.

## What happens if I keep my annual plan?

Your existing annual plan will continue to track your {% data variables.product.prodname_copilot_short %} expenditure using premium requests, combined with the model multiplier, until the plan ends.

In addition, if you keep your annual plan under request-based billing, you will experience changes to model multipliers starting **June 1, 2026**. The table below shows how the multipliers for each model will adjust.

## Model multipliers for annual {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} subscribers

The table below shows how the multipliers for each model will change on June 1, 2026.

These new multipliers will **only apply** if you remain on an annual {% data variables.copilot.copilot_pro_short %} and {% data variables.copilot.copilot_pro_plus_short %} under the premium request-based billing model _after_ June 1, 2026.

Model multipliers and costs are subject to change.

| Model | Current multiplier | New multiplier |
| --- | ---: | ---: |
| {% for entry in tables.copilot.annual-subscriber-model-multipliers %} |
| {{ entry.model }} | {{ entry.current_multiplier }} | {{ entry.new_multiplier }} |
| {% endfor %} |

## Next steps

* To understand more about how usage-based billing works, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals).
* To learn more about model prices under usage-based billing, see [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing).
* To compare how your expenditure will look under usage-based billing compared to request-based billing, see [AUTOTITLE](/copilot/how-tos/manage-and-track-spending/prepare-for-your-move-to-usage-based-billing).