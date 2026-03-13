---
title: Setting up budgets to control spending on metered products
intro: Learn how to set budgets and track when metered usage is nearing or above a budget threshold to prevent overspending.
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/preventing-overspending
  - /billing/using-the-new-billing-platform/preventing-overspending
  - /billing/managing-your-billing/preventing-overspending
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
  - /billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
  - /billing/managing-billing-for-your-products/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces
  - /billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
  - /billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
  - /billing/managing-billing-for-your-products/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
  - /billing/managing-your-billing/using-budgets-control-spending
  - /billing/tutorials/set-up-budgets
topics:
  - Billing
  - Enterprise
  - Organizations
  - Spending limits
  - User account
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
shortTitle: Set up budgets
contentType: how-tos
---

Budgets help you track and control spending on different products. To learn more, see [AUTOTITLE](/billing/concepts/budgets-and-alerts).

## Plan your budget type and scope

Before you create a budget, it’s important to understand how budget types and scopes interact. Usage of metered products can count toward multiple applicable budgets at the same time, and if any budget with **Stop usage when budget limit is reached** enabled is exhausted, additional usage is blocked.

![Screenshot of budgets for "octo-org": "Actions" budget is $50 and "Actions Linux 96-core" budget is $100. All the "Actions" budget has been used.](/assets/images/help/billing/org-budget-example.png)

In this example, the organization has set a budget of $50 for the "Actions" product and a budget of $100 for one of the SKUs within the "Actions" product. The organization has used all the included quota of actions minutes and an extra $50 of billed minutes. Some of the extra use was for Linux 96-core runners so it is applied to both budgets. Overall, the organization has used the full budget for the "Actions" product of $50. Members are now blocked from using all {% data variables.product.github %}-hosted runners until the next billing cycle or until the "Actions" product budget is increased. The SKU budget for Linux 96-core runners serves no purpose and is confusing, so should be deleted.

We recommend that you avoid creating overlapping budgets for the use of a product and a SKU, or an organization and a repository, so that users are not unexpectedly blocked from using a feature that they rely on. Alternatively, you may prefer to monitor use without blocking users by disabling the "Stop usage when budget limit is reached" option.

## Managing budgets for your personal account

You can set budgets and receive alerts when your usage of a product reaches 75%, 90%, or 100% of a defined budget. Budgets can be set for a specific repository or for your whole account.

{% data reusables.user-settings.access_billing_settings_url %}

1. Click **Budgets and alerts**.
1. To create a new budget, click **New budget**.
1. Under "Budget Type" select **Product-level budget**, **SKU-level budget**, or **Bundled premium requests budget**.

   * To limit spending at a Product-level, in "Product-level budget" choose a product from the dropdown, for example: {% data variables.product.prodname_codespaces %}.
   * To limit spending at a SKU-level, in "SKU-level budget" choose a Product and then a SKU, for example: {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_codespaces %} storage.
   * To limit spending on premium requests across all features, enable "Bundled premium requests budget" or to limit spending for a specific feature, set a SKU-level budget for the feature (such as {% data variables.product.prodname_copilot_short %} premium requests, {% data variables.product.prodname_spark_short %} premium requests, or {% data variables.copilot.copilot_coding_agent %} premium requests).

1. Under "Budget scope", set the scope of spending for this budget.
1. Under "Budget", set a budget amount.

   To stop any usage and further spending once the budget limit is reached, select **Stop usage when budget limit is reached**, if available.

   >[!IMPORTANT] If you do not select **Stop usage when budget limit is reached**, you will be notified by email if you exceed your budget, but usage **will not** be stopped.

1. To receive an alert if your budget has reached 75%, 90% and 100% thresholds, select **Receive budget threshold alerts** under "Alerts". When the budget has reached the specific threshold, you will be notified via email and a banner on {% data variables.product.github %}. You may opt out at any time.
{% data reusables.billing.budget-create-button %}

To edit or delete a budget, on the "Budget and alerts" page, click **Edit** or **Delete** next to the budget you want to edit or delete. Follow the prompts.

## Managing budgets for your organization or enterprise

> [!IMPORTANT]
> * {% data reusables.billing.pru-sku-split-notice %}
> * Existing {% data variables.product.prodname_copilot_short %} premium request budgets will automatically migrate to a **bundled premium requests budget** on November 1, 2025. This ensures that your budget continues to account for all of your premium request usage.

You can set budgets and receive alerts when your usage of a product or license type reaches 75%, 90%, or 100% of a defined budget. For budgets that control metered use of a product, you can also block further use when the budget is exhausted. Each budget has a scope.

* **Organization budget scopes**: the whole organization or a single repository within the organization
* **Enterprise budget scopes**:
  * Metered products: the whole enterprise, a single organization, a single repository, or a single cost center
  * Enterprise licenses (metered): the whole enterprise or a single cost center

### Viewing budgets

If you are an organization owner, enterprise owner, or billing manager, any account-level budget is listed at the top of the "Budgets and alerts" page, followed by budgets for smaller scopes.

{% data reusables.billing.nav-to-org-or-ent %}
{% data reusables.billing.access-org-or-ent-page %}

1. Click **Budgets and alerts**.
1. Optionally, in the enterprise view only, to filter by scope, select **Scope**, then choose a scope.

### Creating a budget

As the owner of an enterprise or organization account, or as a billing manager, you can set a budget at the account level, or at any level below this.

1. In the "Budgets and alerts" view, click **New budget**.
1. Under "Budget Type" select **Product-level budget**, **SKU-level budget**, or **Bundled premium requests budget**.

   * To limit spending at a Product-level, in "Product-level budget" choose a product from the dropdown, for example: {% data variables.product.prodname_codespaces %}.
   * To limit spending at a SKU-level, in "SKU-level budget" choose a Product and then a SKU, for example: {% data variables.product.prodname_copilot_short %} and {% data variables.product.prodname_copilot_short %} Premium Request.
To limit spending on premium requests across all features, enable "Bundled premium requests budget" or to limit spending for a specific feature, set a SKU-level budget for the feature (such as {% data variables.product.prodname_copilot_short %} premium requests, {% data variables.product.prodname_spark_short %} premium requests, or {% data variables.copilot.copilot_coding_agent %} premium requests).
1. Under "Budget scope", set the scope of spending for this budget.
1. Under "Budget", set a budget amount.

   To stop any usage and further spending once the budget limit is reached, select **Stop usage when budget limit is reached**, if available.

   >[!IMPORTANT] If you do not select **Stop usage when budget limit is reached**, you will be notified by email if you exceed your budget, but usage **will not** be stopped.

1. To receive an alert if your budget has reached 75%, 90% and 100% thresholds, select **Receive budget threshold alerts** under "Alerts". When the budget has reached the specific threshold, you will be notified via email and a banner on {% data variables.product.github %}. You may opt out at any time.

   Under "Alert Recipients", select the people who will receive the alerts.

{% data reusables.billing.budget-create-button %}

### Editing or deleting a budget

>[!IMPORTANT] Deleting a budget may remove any limits on spending, depending on your other existing budgets.

You can edit or delete a budget at any time, but you cannot change the scope of a budget after creating it.

1. Navigate to the "Budgets and alerts" view. See [Viewing budgets](#viewing-budgets).
1. In the list of budgets, click {% octicon "kebab-horizontal" aria-label="View actions" %} next to the budget you want to edit, and click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit** or **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete**.
1. Follow the prompts.
