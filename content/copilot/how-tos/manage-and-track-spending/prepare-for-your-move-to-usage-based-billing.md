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

On June 1, 2026, {% data variables.product.prodname_copilot_short %} is moving to usage-based billing with {% data variables.product.prodname_ai_credits %}. Use the tool below to understand how this change affects you before the transition takes effect.

<!-- end expires 2026-06-01 -->

## Download the usage report

From the announcement banner on the premium request analytics page, click **Preview your usage** to see your options. From the dialog, click **{% octicon "download" aria-hidden="true" %} Download CSV** to request a detailed usage report. You can also request the report directly from the premium request analytics page, by clicking **Get usage report**. The report is generated asynchronously and delivered to you via email.

Alongside the existing columns for your current billing data, two additional columns show the estimated equivalent under usage-based billing:

* `aic_quantity`: The number of {% data variables.product.prodname_ai_credits_short %} consumed
* `aic_gross_amount`: The estimated cost in USD under usage-based billing

## See projected spend

For a detailed breakdown, you can upload your CSV to the [billing preview tool](https://copilot-billing-preview.github.com/). The tool gives you a view of your estimated costs, including:

* A side-by-side comparison of your current billing (PRUs) and projected AI Credits (AICs), including total costs with additional usage.
* A detailed breakdown of consumed units, included discounts, and additional usage for each billing model.

> [!NOTE]
> The billing preview tool provides estimated projections for illustrative purposes only. Actual usage may differ. Charges are calculated from actual usage emissions processed by the billing platform, separate from the preview data pipeline.

Your data stays in your browser; nothing is uploaded to a server.

## Prepare for the transition

* **Understand what consumes credits**. {% data variables.copilot.copilot_chat_short %}, {% data variables.copilot.copilot_cli_short %}, {% data variables.copilot.copilot_cloud_agent %}, {% data variables.copilot.copilot_spaces %}, {% data variables.product.prodname_spark_short %}, and third-party coding agents consume {% data variables.product.prodname_ai_credits_short %}. Code completions and {% data variables.copilot.next_edit_suggestions %} remain unlimited for all paid plans.
* **Consider your model usage**. Frontier models consume more credits per interaction than lightweight models. Switching to a lighter model for routine tasks can stretch your included usage further.

## Further reading

* [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-individuals)
* [AUTOTITLE](/copilot/reference/copilot-billing/models-and-pricing)