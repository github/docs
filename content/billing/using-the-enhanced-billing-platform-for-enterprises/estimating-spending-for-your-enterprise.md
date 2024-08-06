---
title: Estimating spending for your enterprise
intro: 'Understand where your spending is trending based on the usage across products.'
versions:
  feature: enhanced-billing-platform
type: how_to
topics:
  - Enterprise
permissions: The enhanced billing platform is available to all enterprise accounts, and organizations owned by enterprise accounts, created after June 2, 2024. Enterprises that participated in the beta program also have access to the enhanced billing platform.
shortTitle: Estimate spending
---

The enhanced billing platform provides a high-level view of your spending trends based on the usage across products. You can use this information to estimate your spending and make informed decisions about your budget.

## Viewing your spending

The "Overview" page provides a high-level view of your spending and budgets.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}

On this page, you can view your usage in the following categories:

* **Current metered usage:** The card on the top left shows the gross metered usage for your enterprise including all cost centers. Click **More details** to view a breakdown of the usage by cost center.
* **Metered usage (w/o cost centers):** The graph shows the gross metered usage for your enterprise excluding cost centers. To view the usage for a specific cost center, select {% octicon "triangle-down" aria-label="Change cost center selection" %}, then click a cost center.

   To view a different time period, select **Time Frame**, then choose a time period. You can also download an image of the graph by clicking {% octicon "kebab-horizontal" aria-label="Open column options" %} on the right.

* **By organization** and **by repository:** The two cards under the graph show the top five organizations and repositories that generate the most usage. You can click {% octicon "kebab-horizontal" aria-label="Open column options" %} in the upper-right corner of each card to view all usage.
* **By products:** You can use the product tabs to view usage and discounts for different products. Only products with usage are shown.

    ![Screenshot of the product tabs section of the overview page.](/assets/images/help/billing/enhanced-billing-platform-products-tabs.png){% ifversion metered-ghe-ghas%}

   {% data reusables.billing.actions-usage-delay %}

   {% endif %}

## Viewing promotion and discounts

In the "Current promotions and discounts" section in the top right, you can see the total amount of promotions and discounts applied to your account. Click **More details** to view a breakdown of the promotions and discounts.

## Tracking budgets

At the bottom of the page, under "Budgets", you can see budgets you have set, and how much you have spent against those budgets. By clicking {% octicon "kebab-horizontal" aria-label="Open column options" %} to the right of a budget, you can edit or delete the budget.

If you have used all of your budget, a red banner appears at the top of the page. You can click **Update your budget** to increase your budget.
