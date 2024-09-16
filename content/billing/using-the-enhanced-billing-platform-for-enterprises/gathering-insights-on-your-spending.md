---
title: Gathering insights on your spending
intro: 'Get insights into the usage of your enterprise members.'
versions:
  feature: enhanced-billing-platform
type: how_to
topics:
  - Enterprise
permissions: The enhanced billing platform is available to all enterprise accounts, and organizations owned by enterprise accounts, created after June 2, 2024. Enterprises that participated in the beta program also have access to the enhanced billing platform.<br><br> As an enterprise owner or billing manager you can view and download your enterprise's usage. As an organization owner, you can view and download usage for the organizations you manage
shortTitle: Gather insights
---

The enhanced billing platform provides you with the tools to:

* **Get insights** into the usage of your enterprise members to understand how your resources are being used.
* **Generate reports** on the usage of your enterprise members to import into your own tools for visualization and analysis.

## Viewing usage

You can view the usage of your enterprise members and download the usage data for further analysis.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Usage**.
1. To view usage for a specific cost center, click **Metered usage (w/o cost centers) {% octicon "triangle-down" aria-label="Change cost center selection" %}**, then select a cost center.
1. To search or filter the graph, click the search bar. When you click the search bar, you will see a list of suggested filters.
1. To further filter the graph, use the dropdown menus.

   * To see the usage by group, select **Group**, then click a group.
   * To filter by time, select **Time Frame**, then click a time period.
   * Optionally, to view the monthly budget and actual usage per day, select **Group: None** and **Time Frame: Current Month**.

   Below the graph, you can see a more granular overview of the usage. Click the arrow next to a specific date to see a nested table with usage per SKU, units, price/unit, and actual usage.

   >[!NOTE] The usage graph is configured to represent the start of the month to the end of the month, not your specific billing period.

1. To request a CSV usage report, select **Get usage report** in the upper-right corner of the page.

## Viewing license usage

You can view the license usage of your enterprise members and download the usage data for further analysis. The following license types are available:

* User
* {% data variables.product.prodname_GH_advanced_security %}
* {% data variables.product.prodname_enterprise %}

You can also view your active {% data variables.product.prodname_enterprise %} instances and users.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.billing.enterprise-billing-menu %}
1. Click **Licensing**.
1. To download a CSV report of the license usage, click {% octicon "kebab-horizontal" aria-label="Licensing dropdown" %} to the right of the usage you want to download, then click {% octicon "download" aria-hidden="true" %} **CSV report**.

## Further reading

* "[AUTOTITLE](/rest/enterprise-admin/billing)"
