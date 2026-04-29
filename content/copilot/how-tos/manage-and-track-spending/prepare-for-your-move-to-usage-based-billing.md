---
title: Preparing for your move to usage-based billing
shortTitle: Preparing for usage-based billing
allowTitleToDifferFromFilename: true
intro: 'If you''re on a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan, review your estimated costs under usage-based billing and take steps to prepare before the transition.'
versions:
  feature: copilot
product: '{% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %}'
contentType: how-tos
category: 
  - Configure Copilot
---

<!-- expires 2026-06-01 -->

On June 1, 2026, {% data variables.product.prodname_copilot_short %} is moving to usage-based billing with {% data variables.product.prodname_ai_credits %}. **Starting in early May**, use the tools below to understand how this change affects you before the transition takes effect.

<!-- end expires 2026-06-01 -->

## Preview your bill (coming in early May)

From the announcement banner on the premium request analytics page, click **Preview my bill** to see how your current usage translates to {% data variables.product.prodname_ai_credits %}.

The modal shows a side-by-side comparison of your actual spend under the current billing model and your estimated spend under usage-based billing, based on your April 2026 billing period. A difference indicator shows whether your estimated spend is higher, lower, or roughly equal.

Amounts shown are gross totals before discounts and contractual adjustments.

## Download the usage report

From the billing preview modal, click **Download CSV** to request a detailed usage report. You can also request the report directly from the premium request analytics page, by clicking **Get usage report**. The report is generated asynchronously and delivered to you via email.

Alongside the existing columns for your current billing data, two additional columns show the estimated equivalent under usage-based billing:

* `aic_quantity`: The number of {% data variables.product.prodname_ai_credits_short %} consumed
* `aic_gross_amount`: The estimated cost in USD under usage-based billing

## Explore the billing preview tool

For a more detailed breakdown, you can upload your usage report CSV to the billing preview tool (coming early May). The tool gives you an interactive view of your estimated costs.

Your data stays in your browser; nothing is uploaded to a server.

## Prepare for the transition

* **Understand what consumes credits**. {% data variables.copilot.copilot_chat_short %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_spaces %}, {% data variables.product.prodname_spark_short %}, and third-party coding agents consume {% data variables.product.prodname_ai_credits_short %}. Code completions and {% data variables.copilot.next_edit_suggestions %} remain unlimited for all paid plans.
* **Consider your model usage**. Frontier models consume more credits per interaction than lightweight models. Switching to a lighter model for routine tasks can stretch your included usage further.

## Further reading

* [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals)
* [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing)