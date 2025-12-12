---
title: Budgets and alerts
intro: 'Budgets help you track and control spending on different products.'
shortTitle: Budgets and alerts
versions:
  feature: enhanced-billing-platform
topics:
  - Billing
  - Enterprise
  - Team
contentType: concepts
---

Budgets and alerts allow you to track spending on metered products for your enterprise, organizations, cost centers (enterprise only), and repositories. Budgets and alerts are not available for pre-paid volume licenses.

By setting a monthly budget, you can monitor your spending and receive notifications by email when your spending exceeds certain preset percentages of your budget threshold. This can help you stay within your budget and avoid overspending.

{% data reusables.billing.migrated-budgets %}

## Stopping usage

For license-based products such as {% data variables.product.prodname_copilot %}, {% data variables.product.prodname_AS %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_enterprise %}, setting a budget does not prevent usage over the budget amount but does provide alerts.

For metered products such as {% data variables.product.prodname_actions %} or {% data variables.product.prodname_copilot %} premium requests, you can choose for budgets to prevent usage once the budget amount is reached.

## Types and scopes

Each budget has a type and a scope that define which paid use contributes to spending against the budget.

* **Type**: Defines which metered product or SKU is measured.
* **Scope**: Defines whether the budget applies to the whole account, or to a subset of repositories, organizations, or cost centers (enterprise only).

## Budget alerts

You can enable alerts for budgets to receive emails when usage reaches 75%, 90%, and 100% of the budget amount. Emails are sent to account owners and billing managers by default. Additional recipients can be added as needed.

## Your first billing cycle after creating a budget

When you first create a budget, be aware that the budget applies only to metered usage from the date of its creation onwards. Any use made before you created the budget is not included in the calculations. This means that you may exceed your budget in the first billing cycle after you create your budget, even if you select the option stop usage when the limit is reached.

## Budget limitations

* The maximum number of budgets per account is 10,000.

## Set up a budget

To get started with budgets, see [AUTOTITLE](/billing/tutorials/set-up-budgets).
