---
title: Downloading licensed use of {% data variables.product.prodname_AS %}
intro: 'You can download consumption of {% data variables.product.prodname_GHAS %} licenses by your {% data variables.enterprise.enterprise_or_org %}: volume/subscription licenses or metered usage.'
allowTitleToDifferFromFilename: true
permissions: '{% ifversion fpt %}Organization{% else %}Enterprise{% endif %} owners with {% data variables.product.prodname_AS %}'
product: '{% data reusables.gated-features.ghas-billing %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: Download GHAS license use
---

## Downloading {% data variables.product.prodname_AS %} license usage information

You can download a CSV file with details of paid use of {% data variables.product.prodname_GHAS %} products at both the {% data variables.enterprise.enterprise_and_org %} level. The CSV file contains information about each {% data variables.product.prodname_AS %} license that is in use, including:

* The username of the person using the {% data variables.product.prodname_GHAS_cs_or_sp %} license
* The {% data variables.product.prodname_GH_cs_and_sp %}-enabled repositories where commits were made
* The organizations{% ifversion secret-scanning-user-owned-repos %}{% ifversion ghec %} and user namespaces for {% data variables.product.prodname_emus %}{% endif %}{% endif %} that people using licenses belong to
* The most recent commit dates and associated email addresses

You can use this information for insights into your paid use of {% data variables.product.prodname_AS %}, such as which members of your enterprise are using a license or how licenses are being consumed across your organizations.

You can download a CSV report of license usage through the {% data variables.product.github %} user interface or the REST API.

## Using the UI to download license and metered usage

You can download a CSV report for a repository, an organization, or an enterprise.

{% ifversion fpt or ghec %}

### For a repository

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Security" section of the sidebar, select the {% data variables.product.UI_advanced_security %} dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.
1. In the "{% data variables.product.prodname_GH_cs_or_sp %} repositories" section, next to the repository you want usage information for, select {% octicon "kebab-horizontal" aria-label="GHAS repository actions" %}, then click **Download CSV report**.

   ![Screenshot of the table for {% data variables.product.prodname_GH_secret_protection %} usage. The horizontal kebab icon and "Download CSV report" button are outlined in orange.](/assets/images/help/billing/ghas-billing-table-repository-csv.png)

### For an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing and licensing** to display an overview.
1. For metered usage, in the sidebar click **Usage**.
   1. To display only {% data variables.product.prodname_AS %} usage within the graph, click the search bar, then click **Product**. Within the list of products displayed, click **GHAS**.
   1. To further filter the usage graph, use the dropdown menus:
      * To view usage by SKU, select the **Group** dropdown, then click **SKU**. This will allow you to view usage for both {% data variables.product.prodname_GH_cs_and_sp %}.
      * To filter by time, select **Time Frame**, then click a time period.
      * Below the graph, you can see a more granular overview of the usage. Click the arrow next to a specific date to see a nested table with usage per SKU, units, price/unit, gross amount (the amount actually used), and billed amount (the amount you are charged).
   1. To download the data, click **{% octicon "download" aria-hidden="true" aria-label="download" %} Get usage report**.
1. For license consumption, in the sidebar click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
   1. Under "{% data variables.product.prodname_GHAS %}," click the **{% octicon "download" aria-hidden="true" aria-label="download" %} Download CSV report** dropdown and then click either **{% data variables.product.prodname_code_security %}** or **{% data variables.product.prodname_secret_protection %}**.

### For an enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
1. Click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & licensing** to display an overview.
1. For metered usage, click {% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} **Usage**.
   1. To display only {% data variables.product.prodname_AS %} usage within the graph, click the search bar, then click **Product**. Within the list of products displayed, click **GHAS**.
   1. To further filter the usage graph, use the dropdown menus:
        * To view usage by SKU, select the **Group** dropdown, then click **SKU**. This will allow you to view usage for both {% data variables.product.prodname_GH_cs_and_sp %}.
        * To filter by time, select **Time Frame**, then click a time period.
        * Below the graph, you can see a more granular overview of the usage. Click the arrow next to a specific date to see a nested table with usage per SKU, units, price/unit, gross amount (the amount actually used), and billed amount (the amount you are charged).
   1. To download the data, click **{% octicon "download" aria-hidden="true" aria-label="download" %} Get usage report**.
1. For license consumption, click {% octicon "law" aria-hidden="true" aria-label="law" %} **Licensing**.
   * Under "{% data variables.product.prodname_GHAS %}," click the **{% octicon "download" aria-hidden="true" aria-label="download" %} Download CSV report** dropdown and then click either **{% data variables.product.prodname_code_security %}** or **{% data variables.product.prodname_secret_protection %}**.

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "{% data variables.product.prodname_GHAS %}," click **{% octicon "download" aria-hidden="true" aria-label="download" %} CSV report**.

   ![Screenshot of the licensing screen. The "CSV Report" button is highlighted with an orange outline.](/assets/images/enterprise/ghas/download-csv-report-ghes-3.9.png)

{% endif %}

## Using the REST API to download license and metered usage

You can retrieve information on paid use of {% data variables.product.prodname_AS %} with the billing API.

{% ifversion fpt or ghec %}

For organization-level data, use the `/organizations/{org}/settings/billing/usage` endpoint. For more information, see [AUTOTITLE](/rest/billing/enhanced-billing?apiVersion=2022-11-28).

{% endif %}

For enterprise-level data, use the `/enterprises/{enterprise}/settings/billing/usage` endpoint. For more information, see [AUTOTITLE](/enterprise-cloud@latest/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise) in the {% data variables.product.prodname_ghe_cloud %} documentation.
