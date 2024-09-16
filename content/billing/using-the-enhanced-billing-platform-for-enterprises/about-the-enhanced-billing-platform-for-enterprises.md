---
title: About the enhanced billing platform for enterprises
intro: This article explores the billing platform's key functionalities, and how it can help you manage your spending more effectively.
versions:
  feature: enhanced-billing-platform
type: overview
topics:
  - Enterprise
permissions: The enhanced billing platform is available to all enterprise accounts, and organizations owned by enterprise accounts, created after June 2, 2024. Enterprises that participated in the beta program also have access to the enhanced billing platform.
shortTitle: About the enhanced billing platform
---

The enhanced billing platform provides better spending control and detailed usage insights with granular controls.

## Available products

The following products are available in the enhanced billing platform:

* {% data variables.product.prodname_actions %}
* {% data variables.product.prodname_GH_advanced_security %} (only available with a trial of {% data variables.product.prodname_ghe_cloud %})
* {% data variables.product.prodname_github_codespaces %}
* {% data variables.product.prodname_copilot %}
* {% data variables.product.prodname_enterprise %}
* {% data variables.product.prodname_registry %}
* {% data variables.large_files.product_name_long %}

{% ifversion metered-ghe-ghas%}

{% data reusables.billing.actions-usage-delay %}

{% endif %}

## Key functionalities

With the enhanced billing platform, you can:

* **Estimate spending:** Understand where your (annual, monthly, etc.) spending is trending based on the usage across costs centers and budgets.
* **Gather insights and data:** Generate usage reports to share with your team or stakeholders, and know if you're on track with your budget.
* **Charge business units:** Improve accountability by creating and assigning organizations, repositories, and members to cost centers.
* **Prevent overspending:** Use budgets and alerts to track and control your spending.
* **Observe and understand spending:** Understand how your spending changes over time and across which products.

## How do I know if I can access the enhanced billing platform?

You have access to the enhanced billing platform if you have an enterprise account, or if you are part of an organization owned by an enterprise account, created after June 2, 2024. Enterprises that participated in the beta program also have access to the enhanced billing platform. To check if you have access:

{% data reusables.enterprise-accounts.access-enterprise %}

If you have access, there will be a {% octicon "credit-card" aria-hidden="true" %} **Billing & Licensing** option in the enterprise account sidebar.

## Next steps

* To **get started with the enhanced billing plaform**, see "[AUTOTITLE](/billing/using-the-enhanced-billing-platform-for-enterprises/getting-started-with-the-enhanced-billing-platform)."
