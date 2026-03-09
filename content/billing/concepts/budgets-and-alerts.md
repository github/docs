---
title: Budgets and alerts
intro: 'Budgets help you track and control spending on different products.'
shortTitle: Budgets and alerts
versions:
  feature: enhanced-billing-platform
contentType: concepts
---

Budgets and alerts allow you to track spending on metered products for your enterprise, organizations, cost centers (enterprise only), and repositories. Budgets and alerts are not available for pre-paid volume licenses.

By setting a monthly budget, you can monitor your spending and receive notifications by email when your spending exceeds certain preset percentages of your budget threshold. This can help you stay within your budget and avoid overspending.

## Stopping usage

For license-based products such as {% data variables.product.prodname_copilot %}, {% data variables.product.prodname_AS %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_enterprise %}, setting a budget does not prevent usage over the budget amount but does provide alerts.

For metered products such as {% data variables.product.prodname_actions %} or {% data variables.product.prodname_copilot %} premium requests, you can choose for budgets to prevent usage once the budget amount is reached.

## Types and scopes

Each budget has a type and a scope that define which paid use contributes to spending against the budget.

* **Type**: Defines which metered product or SKU is measured.
* **Scope**: Defines whether the budget applies to the whole account, or to a subset of repositories, organizations, or cost centers (enterprise only).

## Budget alerts

You can enable alerts for budgets to receive emails when usage reaches 75%, 90%, and 100% of the budget amount. Emails are sent to account owners and billing managers by default. Additional recipients can be added as needed.

## Included usage alerts

In addition to budget alerts, {% data variables.product.github %} can send email notifications when the included usage for your plan reaches 90% and 100% during a billing period. This helps you stay ahead of unexpected overage charges or workflow disruptions before you exceed your free allowance.

Included usage alerts are available for the following metered products:

* {% data variables.product.prodname_actions %} minutes
* {% data variables.product.prodname_actions %} storage
* {% data variables.product.prodname_registry %} bandwidth
* {% data variables.product.prodname_registry %} storage
* {% data variables.large_files.product_name_long %} bandwidth
* {% data variables.large_files.product_name_long %} storage
* {% data variables.product.prodname_github_codespaces %} core hours
* {% data variables.product.prodname_github_codespaces %} storage

Each email identifies the account, the product, the approximate usage compared to the included allowance, and the current billing period. The email also includes a direct link to your budgets page for further monitoring.

Enterprise owners, organization owners, personal account owners, and billing managers can opt in or out of these notifications from the **Included usage alerts** control on the "Budgets and alerts" page. For more information, see [AUTOTITLE](/billing/how-tos/set-up-budgets#managing-included-usage-alerts).

> [!NOTE]
> Included usage alerts are different from budget threshold alerts. Budget threshold alerts notify you when _spending_ reaches a percentage of a dollar budget you have set. Included usage alerts notify you when your plan's _free usage allowance_ is approaching depletion, regardless of whether you have set a budget.

## Your first billing cycle after creating a budget

When you first create a budget, be aware that the budget applies only to metered usage from the date of its creation onwards. Any use made before you created the budget is not included in the calculations. This means that you may exceed your budget in the first billing cycle after you create your budget, even if you select the option stop usage when the limit is reached.

## Budget limitation

The maximum number of budgets per account is 10,000.

## Set up a budget

To get started with budgets, see [AUTOTITLE](/billing/tutorials/set-up-budgets).
