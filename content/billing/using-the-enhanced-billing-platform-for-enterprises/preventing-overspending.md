---
title: Preventing overspending
intro: 'Learn how to set budgets and track when they are nearing or above a threshold to prevent overspending.'
versions:
  feature: enhanced-billing-platform
type: how_to
topics:
  - Enterprise
permissions: The enhanced billing platform is available to all enterprise accounts, and organizations owned by enterprise accounts, created after June 2, 2024. Enterprises that participated in the beta program also have access to the enhanced billing platform.
shortTitle: Prevent overspending
---

Budgets and alerts allow you to track spending for your enterprise, organizations, repositories, or cost centers. By setting a monthly budget, you can monitor your spending and receive notifications by email when your spending exceeds certain preset percentages of your budget threshold. This can help you stay within your budget and avoid overspending.

The budget only applies to expenses incurred from the date of its creation onwards. Any expenses incurred prior to the creation of the budget will not be included in the calculations

Budgets are not applicable to:

* Seat-based products such as {% data variables.product.prodname_copilot %}, {% data variables.product.prodname_GH_advanced_security %}, and {% data variables.product.prodname_enterprise %}.
* Pre-paid volume licenses.

## Viewing budgets

If you are an enterprise owner or billing manager, your enterprise's budget will be listed at the top of the "Budgets and alerts" page, followed by the budgets for your organizations and cost centers. As an organization owner, you will be able to view the budgets for your organizations, repositories, and cost centers.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Budgets and alerts**.
1. To filter by scope, select **Scope**, then choose a scope.

## Creating a budget

As an enterprise owner or billing manager, you can set the budget for your enterprise, an organization within your enterprise, or a cost center. As an organization owner, you are able to set the budgets for the repositories you manage.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Budgets and alerts**.
1. Click **New budget**.
1. Under "Products", select the metered product to include in this budget.
1. Under "Budget scope", set the scope of spending for this budget.
1. Under "Budget", set a budget amount.

   To stop any usage and further spending once your enterprise or organization reaches the budget limit, select **Stop usage when budget limit is reached**. This does not apply to {% data variables.product.prodname_copilot %} usage.

   >[!IMPORTANT] If you do not select **Stop usage when budget limit is reached**, you will be notified by email if you exceed your budget, but usage **will not** be stopped.

1. To receive an alert if your budget has reached 75%, 90% and 100% thresholds, select **Receive budget threshold alerts** under "Alerts". When the budget has reached the specific threshold, you will be notified via email and a banner on {% data variables.product.prodname_dotcom %}. You may opt out at any time.

   Under "Alert Recipients", select the people who will receive the alerts.

1. Click **Create budget**.

## Editing or deleting a budget

You can edit or delete a budget at any time, but you cannot change the budget scope.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. To edit a budget, in the list of budgets, click {% octicon "kebab-horizontal" aria-label="View actions" %} next to the budget you want to edit, and click {% octicon "pencil" aria-hidden="true" %} **Edit** or {% octicon "trash" aria-hidden="true" %} **Delete**.
1. Follow the prompts.
