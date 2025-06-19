---
title: Using budgets to control spending on metered products
intro: 'Learn how to set budgets and track when metered usage is nearing or above a budget threshold to prevent overspending.'
allowTitleToDifferFromFilename: true
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/preventing-overspending
  - /billing/using-the-new-billing-platform/preventing-overspending
  - /billing/managing-your-billing/preventing-overspending
  # Actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
  - /billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
  - /billing/managing-billing-for-your-products/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions
  # Codespaces
  - /billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces
  - /billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces
  - /billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces
  # Packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
  - /billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
  - /billing/managing-billing-for-your-products/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages
type: how_to
topics:
  - Enterprise
  - Organizations
  - Spending limits
  - User account
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
shortTitle: Use budgets to control spending
---

Budgets and alerts allow you to track spending on metered products for your accounts, organizations, cost centers (enterprise only), and repositories. By setting a monthly budget, you can monitor your spending and receive notifications by email when your spending exceeds certain preset percentages of your budget threshold. This can help you stay within your budget and avoid overspending.

If your account does not have a valid payment method on file, usage is blocked once you use up your quota.

By default, if you have a valid payment method on file, spending is limited to $0 USD until you set a budget. You can set and manage a budget to limit spending for a product or SKU.

<!--Billing: default budget-->

## About budgets

Each budget has a type and a scope that define which paid use contributes to spending against the budget.

* **Type**: Defines which metered product or SKU is measured.
* **Scope**: Defines whether the budget applies to the whole account, or to a subset of repositories, organizations, or cost centers (enterprise only).

### Your first billing cycle after creating a budget

When you first create a budget, be aware that the budget applies only to metered usage from the date of its creation onwards. Any use made before you created the budget, is not included in the calculations. This means that you may exceed your budget in the first billing cycle after you create your budget, even if you select the option stop usage when the limit is reached.

### Budget limitations

For license-based products such as {% data variables.product.prodname_copilot %}, {% data variables.product.prodname_AS %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_enterprise %}, setting a budget does not prevent usage over the limit but does provide alerts.
Budgets and alerts are not available for pre-paid volume licenses.

## Deciding on the type and scope for a budget

When deciding on the type and scope for a budget, remember that the use of metered products is applied towards **all applicable** budgets. If any applicable budget with "Stop usage when budget limit is reached" enabled is exhausted, additional usage is blocked.

![Screenshot of budgets for "octo-org": "Actions" budget is $50 and "Actions Linux 96-core" budget is $100. All the "Actions" budget has been used.](/assets/images/help/billing/org-budget-example.png)

In this example, the organization has set a budget of $50 for the "Actions" product and a budget of $100 for one of the SKUs within the "Actions" product. The organization has used all the included quota of actions minutes and an extra $50 of billed minutes. Some of the extra use was for Linux 96-core runners so it is applied to both budgets. Overall, the organization has used the full budget for the "Actions" product of $50. Members are now blocked from using all {% data variables.product.github %}-hosted runners until the next billing cycle or until the "Actions" product budget is increased. The SKU budget for Linux 96-core runners serves no purpose and is confusing, so should be deleted.

We recommend that you avoid creating overlapping budgets for the use of a product and a SKU, or an organization and a repository, so that users are not unexpectedly blocked from using a feature that they rely on. Alternative, you may prefer to monitor use without blocking users by disabling the "Stop usage when budget limit is reached" option.

## Managing budgets for your personal account

You can set budgets and receive alerts when your usage reaches 75%, 90%, or 100% of your defined budget. Budgets can be scoped at the repository or product level, depending on the product.

{% data reusables.user-settings.access_billing_settings_url %}
1. Click **Budgets and alerts**.
1. To create a new budget, click **New budget**.
1. Under "Budget Type" select either **Product-level budget** or **SKU-level budget**.

   * To create a Product-level budget, choose a metered product from the dropdown.
   * To create a SKU-level budget, choose a SKU from the dropdown. This limits spending for an individual SKU.

1. Under "Budget scope", set the scope of spending for this budget.
1. Under "Budget", set a budget amount.

   To stop any usage and further spending once the budget limit is reached, select **Stop usage when budget limit is reached**, if available.

   >[!IMPORTANT] If you do not select **Stop usage when budget limit is reached**, you will be notified by email if you exceed your budget, but usage **will not** be stopped.

1. To receive an alert if your budget has reached 75%, 90% and 100% thresholds, select **Receive budget threshold alerts** under "Alerts". When the budget has reached the specific threshold, you will be notified via email and a banner on {% data variables.product.github %}. You may opt out at any time.
1. Click **Create budget**.

To edit or delete a budget, on the "Budget and alerts page", click **Edit** or **Delete** next to the budget you want to edit or delete. Follow the prompts.

## Managing budgets for your organization or enterprise

You can manage budgets for your organization or enterprise by setting a budget, viewing budgets, and editing or deleting budgets.

### Viewing budgets

If you are an organization owner, enterprise owner, or billing manager, your budget is listed at the top of the "Budgets and alerts" page, followed by budgets for smaller scopes.

1. Display the settings for the organization or enterprise account you want to view data for. For example, using the context switcher shown on all personal and organization account settings pages.

   ![Screenshot of the "Public profile" settings for The Octocat. Next to "Your personal profile," a "Switch settings context" link is outlined in orange.](/assets/images/help/settings/context-switcher-button.png)

1. Click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** to display the billing and licensing overview for the account:
   * **Organization** accounts: under "Access" in the sidebar for settings.
   * **Enterprise** accounts: a separate tab at the top of the page.

1. Click **Budgets and alerts**.
1. Optionally, in the enterprise view only, to filter by scope, select **Scope**, then choose a scope.

### Creating a budget

As the onwer of an enterprise or organization account, or as a billing manager, you can set a budget at the account level, or at any level below this.

1. In the "Budgets and alerts" view, click **New budget**.
1. Under "Budget", set a budget amount.

   To stop any usage and further spending once your {% ifversion fpt %}organization{% elsif ghec %}enterprise or organization{% endif %} reaches the budget limit, select **Stop usage when budget limit is reached**, if available.

   >[!IMPORTANT] If you do not select **Stop usage when budget limit is reached**, you will be notified by email if you exceed your budget, but usage **will not** be stopped.

1. To receive an alert if your budget has reached 75%, 90% and 100% thresholds, select **Receive budget threshold alerts** under "Alerts". When the budget has reached the specific threshold, you will be notified via email and a banner on {% data variables.product.github %}. You may opt out at any time.

   Under "Alert Recipients", select the people who will receive the alerts.

1. Click **Create budget**.

### Editing or deleting a budget

>[!IMPORTANT] Deleting a budget may remove any limits on spending, depending on your other existing budgets. For example, deleting the default $0 budget for {% data variables.product.prodname_copilot_short %} premium requests allows for unlimited usage.

You can edit or delete a budget at any time, but you cannot change the scope of a budget after creating it.

1. In the "Budgets and alerts" view, click **New budget**.
1. Click **Budgets and alerts**.
1. To edit a budget, in the list of budgets, click {% octicon "kebab-horizontal" aria-label="View actions" %} next to the budget you want to edit, and click **{% octicon "pencil" aria-hidden="true" aria-label="pencil" %} Edit** or **{% octicon "trash" aria-hidden="true" aria-label="trash" %} Delete**.
1. Follow the prompts.
