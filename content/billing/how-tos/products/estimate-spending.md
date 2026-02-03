---
title: Viewing and estimating your spending
shortTitle: View and estimate spending
allowTitleToDifferFromFilename: true
intro: 'View current usage and spending trends across paid {% data variables.product.github %} products, so you can estimate costs and make informed budgeting decisions.'
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/estimating-spending-for-your-enterprise
  - /billing/using-the-new-billing-platform/estimating-spending-for-your-enterprise
  - /billing/using-the-new-billing-platform/estimating-spending
  - /billing/managing-your-billing/estimating-spending
  - /billing/tutorials/estimate-spending
topics:
  - Billing
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
contentType: how-tos
---

The new billing platform provides a high-level view of your spending trends based on the usage across products. You can use this information to estimate your spending and make informed decisions about your budget.

{% ifversion fpt %}

## Viewing spending for your personal account

{% data reusables.user-settings.access_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.

On this page, you can view your usage in the following categories:

* **Current metered usage:** The card on the top left shows the gross metered usage for your personal account.

* **By products:** You can use the product tabs to view usage and discounts for different products.

* **By repository:** The card at the bottom of the page shows the top five repositories that generate the most usage for your personal account. This helps you identify which repositories are consuming the most resources across {% data variables.product.prodname_copilot_short %}, {% data variables.product.prodname_actions %}, {% data variables.product.prodname_codespaces %}, and other billable features. You can click {% octicon "kebab-horizontal" aria-label="Open column options" %} in the upper-right corner of each card to view all usage, including a breakdown by gross usage versus billable usage (minus any discounts that may apply).

Additionally, you can change your plan by clicking **Upgrade to Pro** or **Downgrade to Free** in the "Current plan" section.

At the top of the page, under "Next payment due", you can see the date of your next billing cycle.

{% endif %}

## Viewing spending for your {% data variables.enterprise.enterprise_or_org %}

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

* **By products:** You can use the product tabs to view usage and discounts for different products.

   {% data reusables.billing.actions-usage-delay %}

{% ifversion fpt %}
* **By repository:** The card at the bottom of the page shows the top five repositories that generate the most usage. You can click **View details** in the upper-right corner of the card to view all usage, including a breakdown by gross usage versus billable usage (minus any discounts that may apply).
{% elsif ghec %}
* **By organization** and **by repository:** The two cards at the bottom of the page show the top five organizations and repositories that generate the most usage. You can click **View details** in the upper-right corner of each card to view all usage, including a breakdown by gross usage versus billable usage (minus any discounts that may apply).
{% endif %}

{% ifversion ghec %}

## Viewing prepaid credits

Your prepaid credits are shown at the top of the page in the **Current included usage** card. To add more prepaid credits, you can contact your account manager in {% data variables.contact.contact_enterprise_sales %}.

If you don't currently use prepaid credits, but have a volume subscription and would like to use credits, you can contact your account manager in {% data variables.contact.contact_enterprise_sales %}. Prepaid credits are only available to customers who are invoiced (with or without metered add-ons). Prepaid credits can't be used if your account _only_ includes metered add-ons.

## Viewing promotion and discounts

You can see the total amount of promotions and discounts applied to your account on the Overview page. In the top right-hand corner of the **Current included usage** card, click **More details** to view a breakdown of your promotions and discounts.

{% endif %}

## Creating a budget

As an enterprise owner or billing manager, you can set the budget for your enterprise, an organization within your enterprise, or a cost center. As an organization owner, you are able to set the budgets for the repositories you manage. See [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending#creating-a-budget).
