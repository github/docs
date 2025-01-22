---
title: Estimating spending
intro: 'Use the enhanced billing platform to understand where your spending is trending based on the usage across products.'
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/estimating-spending-for-your-enterprise
  - /billing/using-the-new-billing-platform/estimating-spending-for-your-enterprise
type: how_to
topics:
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
shortTitle: Estimate spending
---

The enhanced billing platform provides a high-level view of your spending trends based on the usage across products. You can use this information to estimate your spending and make informed decisions about your budget.

## Viewing your spending

The "Overview" page provides a high-level view of your spending and budgets.

{% ifversion fpt %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.billing.org-billing-menu %}

{% elsif ghec %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}

{% endif %}

On this page, you can view your usage in the following categories:

* **Current metered usage:** The card on the top left shows the gross metered usage for your {% data variables.enterprise.enterprise_or_org %}{% ifversion ghec %} including all cost centers. Click **More details** to view a breakdown of the usage by cost center{% endif %}.
* **Metered usage:** The graph shows the gross metered usage for your {% data variables.enterprise.enterprise_or_org %}{% ifversion ghec %} including cost centers{% endif %}.

   To view a different time period, select **Time Frame**, then choose a time period. You can also download an image or CSV of the graph by clicking {% octicon "kebab-horizontal" aria-label="Open column options" %} on the right.

{% ifversion fpt %}
* **By repository:** The card under the graph shows the top five repositories that generate the most usage. You can click {% octicon "kebab-horizontal" aria-label="Open column options" %} in the upper-right corner of each card to view all usage.
{% elsif ghec %}
* **By organization** and **by repository:** The two cards under the graph show the top five organizations and repositories that generate the most usage. You can click {% octicon "kebab-horizontal" aria-label="Open column options" %} in the upper-right corner of each card to view all usage.
{% endif %}
* **By products:** You can use the product tabs to view usage and discounts for different products.

    ![Screenshot of the product tabs section of the overview page.](/assets/images/help/billing/enhanced-billing-platform-products-tabs.png){% ifversion metered-ghe-ghas %}

   {% data reusables.billing.actions-usage-delay %}

   {% endif %}

{% ifversion ghec %}

## Viewing prepaid credits

Your prepaid credits are shown above the "Metered usage" graph. To add more prepaid credits, you can contact your account manager in {% data variables.contact.contact_enterprise_sales %}.

If you don't currently use prepaid credits, but have a volume subscription and would like to use credits, you can contact your account manager in {% data variables.contact.contact_enterprise_sales %}. Prepaid credits are only available to customers who are invoiced (with or without metered add-ons). Prepaid credits can't be used if your account _only_ includes metered add-ons.

## Viewing promotion and discounts

In the "Current promotions and discounts" section in the top right, you can see the total amount of promotions and discounts applied to your account. Click **More details** to view a breakdown of the promotions and discounts.

{% endif %}

## Tracking budgets

At the bottom of the page, under "Budgets", you can see your current budgets, and how much you have spent against those budgets. If your role provides access, you can edit or delete a budget by clicking {% octicon "kebab-horizontal" aria-label="Open column options" %} to the right of a budget. See [AUTOTITLE](/billing/using-the-new-billing-platform/roles-for-the-new-billing-platform).

If you have used all of your budget, a red banner appears at the top of the page. You can click **Update your budget** to increase your budget.
