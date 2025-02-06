---
title: About the new billing platform
intro: Learn about the billing platform's key functionalities, and how it can help you manage your spending more effectively.
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/about-the-enhanced-billing-platform-for-enterprises
  - /billing/using-the-new-billing-platform/about-the-new-billing-platform-for-enterprises
type: overview
topics:
  - Enterprise
  - Team
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
shortTitle: About the new billing platform
---

The enhanced billing platform provides better spending control and detailed usage insights with granular controls.

## Available products

The products shown in the enhanced billing platform are determined by your {% data variables.product.github %} plan and subscriptions.

### Organizations on {% data variables.product.prodname_team %} or {% data variables.product.prodname_free_team %}

* {% data variables.product.prodname_actions %}
* {% data variables.product.prodname_github_codespaces %}
* {% data variables.product.prodname_copilot %}
* {% data variables.product.prodname_registry %}
* {% data variables.large_files.product_name_long %}

{% ifversion ghec %}

### {% data variables.product.prodname_ghe_cloud %}

* {% data variables.product.prodname_actions %}
* {% data variables.product.prodname_GH_advanced_security %} (only available with a trial of {% data variables.product.prodname_ghe_cloud %})
* {% data variables.product.prodname_github_codespaces %}
* {% data variables.product.prodname_copilot %}
* {% data variables.product.prodname_enterprise %}
* {% data variables.product.prodname_registry %}
* {% data variables.large_files.product_name_long %}

{% ifversion metered-ghe-ghas %}

{% data reusables.billing.actions-usage-delay %}

{% endif %}

{% endif %}

## Key functionalities

With the new billing platform, you can:

* **Estimate spending:** Understand where your (annual, monthly, etc.) spending is trending based on the usage across {% ifversion ghec %}cost centers and {% endif %}budgets.
* **Gather insights and data:** Generate usage reports to share with your team or stakeholders, and know if you're on track with your budget.
{%- ifversion ghec %}
* **Charge business units:** Improve accountability by creating and assigning organizations, repositories, and members to cost centers.
{%- endif %}
* **Prevent overspending:** Use budgets and alerts to track and control your spending.
* **Observe and understand spending:** Understand how your spending changes over time and across which products.

## How do I know if I can access the new billing platform?

{% data reusables.billing.enhanced-billing-platform-product %}

{% data reusables.permissions.enhanced-billing-platform %} can check for access to the enhanced platform:

{% ifversion fpt %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}

{% elsif ghec %}

{% data reusables.enterprise-accounts.access-enterprise %}

{% endif %}

If you have access, there will be a **{% octicon "credit-card" aria-hidden="true" %} Billing & Licensing** option in the sidebar. If you do **not** have access to the new, enhanced billing platform, to find out more about your billing platform, see [AUTOTITLE](/billing/using-the-billing-platform/about-billing-on-github).

## Next steps

* To **get started with the new billing platform**, see [AUTOTITLE](/billing/using-the-new-billing-platform/getting-started-with-the-new-billing-platform).
