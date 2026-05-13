---
title: Preparing your organization for usage-based billing
shortTitle: Prepare your organization for usage-based billing
allowTitleToDifferFromFilename: true
intro: 'Review your estimated costs under usage-based billing and take steps to prepare your organization before the transition.'
permissions: Enterprise owners, organization owners, and billing managers
versions:
  feature: copilot
product: '{% data variables.copilot.copilot_enterprise_short %} or {% data variables.copilot.copilot_business_short %}'
contentType: how-tos
category:
  - Manage Copilot for a team
---

<!-- expires 2026-06-01 -->

On June 1, 2026, {% data variables.product.prodname_copilot_short %} is moving to usage-based billing with {% data variables.product.prodname_ai_credits %}. Use the tool below to understand how this change affects your organization and prepare before the transition takes effect.

<!-- end expires 2026-06-01 -->

## Download the usage report

From the announcement banner on your enterprise home page, billing overview page, or premium request analytics page, click **Preview your usage** to see your options. From the dialog, click **{% octicon "download" aria-hidden="true" %}** to request a detailed usage report. You can also request the report from the premium request analytics page or via the API. The report is generated asynchronously and delivered via email to the requesting admin.

The report includes one row per user, per model, per day. Alongside the existing columns for your current billing data, two additional columns show the estimated equivalent under usage-based billing:

* `aic_quantity`: The number of {% data variables.product.prodname_ai_credits_short %} consumed
* `aic_gross_amount`: The estimated cost in USD under usage-based billing

## See projected spend

For a detailed breakdown, you can upload your CSV to the [billing preview tool](https://copilot-billing-preview.github.com/). The tool gives you a view of your estimated costs, including:

* A side-by-side comparison of your current billing (PRUs) and projected AI Credits (AICs), including total costs with additional usage.
* A detailed breakdown of licenses, consumed units, included discounts, and additional usage for each billing model.

> [!NOTE]
> The billing preview tool provides estimated projections for illustrative purposes only. Actual usage may differ. Charges are calculated from actual usage emissions processed by the billing platform, separate from the preview data pipeline.

Your data stays in your browser; nothing is uploaded to a server.

## Take action before the transition

Based on what you've learned from the billing preview and usage report, you can take steps to prepare:

* **Review and adjust your budgets**. Existing enterprise-level budgets for premium requests will automatically carry over to {% data variables.product.prodname_ai_credits_short %}. Review them in your enterprise billing settings to make sure they still reflect the limits you want.
* **Plan for pooled {% data variables.product.prodname_ai_credits_short %}**. Under usage-based billing, each license comes with a monthly amount of included {% data variables.product.prodname_ai_credits_short %}, which are pooled across your organization. Consider how this changes your cost structure. Teams with uneven usage patterns may benefit.
* **Communicate the change internally**. Let your teams know that billing is changing and what it means for their day-to-day use of {% data variables.product.prodname_copilot_short %}.
