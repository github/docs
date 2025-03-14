---
title: Gathering insights on your spending
intro: 'Get insights into the usage of your {% data variables.enterprise.enterprise_or_org %} members.'
versions:
  feature: enhanced-billing-platform
redirect_from:
  - /billing/using-the-enhanced-billing-platform-for-enterprises/gathering-insights-on-your-spending
type: how_to
topics:
  - Enterprise
  - Team
permissions: '{% data reusables.permissions.enhanced-billing-platform %}'
product: '{% data reusables.billing.enhanced-billing-platform-product %}'
shortTitle: Gather insights
---

The new billing platform provides you with the tools to:

* **Get insights** into usage trends to understand how your resources are being used.
* **Search and filter usage** by repository, product, or SKU, and group data accordingly.
* **Generate reports** on past usage for various time periods, including the current hour, today, this month, last month, this year, last year, or a custom date range.

{% ifversion fpt %}

## Viewing usage for your personal account

You can view the usage of your personal account and download the usage data for further analysis.

{% data reusables.user-settings.access_settings %}
1. In the "Access" section of the sidebar, click **{% octicon "credit-card" aria-hidden="true" %} Billing & Licensing**.
1. Click **Usage**.
1. To search or filter the graph, click the search bar. Then click the filter you want to use.
1. To further filter the graph, use the dropdown menus.

   * To see the usage by group, select **Group**, then click a group.
   * To filter by time, select **Time Frame**, then click a time period.
   * Optionally, to view the monthly budget and actual usage per day, select **Group: None** and **Time Frame: Current Month**.

   Below the graph, you can see a more granular overview of the usage. Click the arrow next to a specific date to see a nested table with usage per SKU, units, price/unit, and actual usage.

   >[!NOTE] The usage graph is configured to represent the start of the month to the end of the month, not your specific billing period.

1. To request a CSV usage report, select **Get usage report** in the upper-right corner of the page. You can choose a pre-selected option or use the Custom range option to specify a date range of up to 31 days.

{% endif %}

## Viewing usage for your {% data variables.enterprise.enterprise_or_org %}

You can view the usage of your {% data variables.enterprise.enterprise_or_org %} members and download the usage data for further analysis.

{% ifversion fpt %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.billing.org-billing-menu %}

{% elsif ghec %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}

{% endif %}

1. Click **Usage**.
1. To search or filter the graph, click the search bar. Then click the filter you want to use.
1. To further filter the graph, use the dropdown menus.

   * To see the usage by group, select **Group**, then click a group.
   * To filter by time, select **Time Frame**, then click a time period.
   * Optionally, to view the monthly budget and actual usage per day, select **Group: None** and **Time Frame: Current Month**.

   Below the graph, you can see a more granular overview of the usage. Click the arrow next to a specific date to see a nested table with usage per SKU, units, price/unit, and actual usage.

   >[!NOTE] The usage graph is configured to represent the start of the month to the end of the month, not your specific billing period.

1. To request a CSV usage report, select **Get usage report** in the upper-right corner of the page. You can choose a pre-selected option or use the Custom range option to specify a date range of up to 31 days.

## Viewing license usage

You can view the license usage of your {% data variables.enterprise.enterprise_or_org %} members and download the usage data for further analysis.

{% ifversion fpt %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.billing.org-billing-menu %}

{% elsif ghec %}

The following license types are available:

* User
* {% data variables.product.prodname_GH_advanced_security %}
* {% data variables.product.prodname_enterprise %}

You can also view your active {% data variables.product.prodname_enterprise %} instances and users.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}

{% endif %}

1. Click **Licensing**.
1. To download a CSV report of the license usage, click {% octicon "kebab-horizontal" aria-label="Licensing dropdown" %} to the right of the usage you want to download, then click **{% octicon "download" aria-hidden="true" %} CSV report**.

## Further reading

{% ifversion ghec %}
* [AUTOTITLE](/rest/enterprise-admin/billing){% endif %}
* [AUTOTITLE](/billing/using-the-new-billing-platform/adding-licenses-to-your-account)
