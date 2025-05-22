---
title: Viewing and downloading licensed use of {% data variables.product.prodname_AS %}
intro: 'You can view and download consumption of {% data variables.product.prodname_GHAS %} licenses by your {% data variables.enterprise.enterprise_or_org %}: volume/subscription licenses or metered usage.'
allowTitleToDifferFromFilename: true
permissions: '{% ifversion fpt %}Organization{% else %}Enterprise{% endif %} owners with {% data variables.product.prodname_AS %}'
product: '{% data reusables.gated-features.ghas-billing %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
  - /billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View or download GHAS license use
---

{% ifversion ghec or ghes %}
<!--For FPT version see separate procedure below-->

## Viewing {% data variables.product.prodname_AS %} usage for your enterprise{% ifversion ghec %} account{% endif %}

You can view the current license limits and usage for your enterprise.

{% ifversion ghec %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.licensing-tab-both-platforms %}
   * The "{% data variables.product.prodname_AS %}" section shows details of the licenses you currently **consume**.
   * If you have a volume/subscription license, the number of licenses **available** to use is also displayed.
   * If you run out of licenses, for volume/subscription only, the section is red and reports "Limit exceeded." You should either reduce your use or purchase more licenses.

1. Optionally, to see a detailed breakdown of usage per organization{% ifversion secret-scanning-user-owned-repos %} and user namespace when using {% data variables.product.prodname_emus %}{% endif %}, in the "{% data variables.product.prodname_GHAS %}" section click **More details**.

   In the "{% data variables.product.prodname_GHAS %}" section, you can see a summary of your current license usage, as well as the number of committers and unique committers for each organization{% ifversion secret-scanning-user-owned-repos %} and user namespace when using {% data variables.product.prodname_emus %}{% endif %}. The organizations{% ifversion secret-scanning-user-owned-repos %} and user namespaces{% endif %} in the billing table are sorted by the highest number of unique committers in descending order.

1. Optionally, to see a detailed breakdown of usage by repositories within an organization, click an organization name to display the "Global code security settings" for the organization.

   On the "Global code security settings" page, scroll to the "{% data variables.product.prodname_GHAS_cs_or_sp %} repositories" section to see a detailed breakdown of usage by repository for this organization. See [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/managing-your-github-advanced-security-license-usage).

{% elsif security-configurations %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.license-tab %}

   The "{% data variables.product.prodname_AS %}" section shows details of the current usage. You can see the total number of licenses used, as well as a table with the number of committers and unique committers for each organization.

1. Optionally, to see a detailed breakdown of usage by repositories within an organization, click an organization name to display the "Global code security settings" for the organization.

   On the "Global code security settings" settings page, scroll to the "{% data variables.product.prodname_GHAS_cs_or_sp %} repositories" section to see a detailed breakdown of usage by repository for this organization, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/managing-your-github-advanced-security-license-usage).

{% elsif pre-security-configurations %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.license-tab %}

   The "{% data variables.product.prodname_GHAS %}" section shows details of the current usage. You can see the total number of licenses used, as well as a table with the number of committers and unique committers for each organization.

1. Optionally, to see a detailed breakdown of usage by repositories within an organization, click an organization name to display the "Security & analysis" for the organization.

   * On the "Security & analysis" settings page, scroll to the "{% data variables.product.prodname_GHAS %} repositories" section to see a detailed breakdown of usage by repository for this organization. For more information, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).
{% endif %}

{% endif %}

{% ifversion fpt %}

## Viewing {% data variables.product.prodname_AS %} usage for your organization account

You can view the organization account's current license limits and usage.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans_or_licensing %}

   The "{% data variables.product.prodname_GHAS %}" section shows details of the current usage.

{% endif %}

{% ifversion enhanced-billing-platform %}
> [!TIP]
> For more tips, see [AUTOTITLE](/billing/managing-your-billing/gathering-insights-on-your-spending) and [AUTOTITLE](/billing/managing-your-billing/preventing-overspending).
{% endif %}

## Downloading {% data variables.product.prodname_AS %} license usage information

You can download a CSV file with {% data variables.product.prodname_GHAS %} license usage information at both the {% data variables.enterprise.enterprise_and_org %} level. The CSV file contains information about each {% data variables.product.prodname_AS %} license that is in use, including:

* The username of the person using the {% data variables.product.prodname_GHAS_cs_or_sp %} license
* The {% data variables.product.prodname_GH_cs_and_sp %}-enabled repositories where commits were made
* The organizations{% ifversion secret-scanning-user-owned-repos %}{% ifversion ghec %} and user namespaces for {% data variables.product.prodname_emus %}{% endif %}{% endif %} that people using licenses belong to
* The most recent commit dates and associated email addresses

You can use this information for insights into your {% data variables.product.prodname_AS %} usage, such as which members of your enterprise are using a license or how licenses are being consumed across your organizations.

You can download a CSV report of license usage through the {% data variables.product.github %} user interface or the REST API.

### Downloading license usage information from the UI

{% ifversion fpt %}You can download a CSV report for a repository or an organization.{% endif %}
{% ifversion ghec %}You can download a CSV report for a repository, an organization, or an enterprise.{% endif %}

{% ifversion fpt or ghec %}

#### For a repository

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Security" section of the sidebar, select the {% data variables.product.UI_advanced_security %} dropdown menu, then click **{% data variables.product.prodname_global_settings_caps %}**.
1. In the "{% data variables.product.prodname_GH_cs_or_sp %} repositories" section, next to the repository you want usage information for, select {% octicon "kebab-horizontal" aria-label="GHAS repository actions" %}, then click **Download CSV report**.

   ![Screenshot of the table for {% data variables.product.prodname_GH_secret_protection %} usage. The horizontal kebab icon and "Download CSV report" button are outlined in orange.](/assets/images/help/billing/ghas-billing-table-repository-csv.png)

#### For an organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Access" section of the sidebar click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & licensing** and then **Usage**.
1. Filter the metered usage to show `product:ghas` and choose "Group: SKU".
1. Optionally, use the "Time Frame" field to set the period to report on.
1. Click **{% octicon "download" aria-hidden="true" aria-label="download" %}Get usage report** to download the report.

{% endif %}

{% ifversion ghec %}

#### For an enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
1. Click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & licensing** to display an overview.

   **License consumption:**
   1. Click **{% octicon "law" aria-hidden="true" aria-label="law" %} Licensing**.
   1. Under "{% data variables.product.prodname_GHAS %}," click the **Download report** dropdown and then click either **{% octicon "download" aria-hidden="true" aria-label="download" %} {% data variables.product.prodname_code_security %}** or **{% octicon "download" aria-hidden="true" aria-label="download" %} {% data variables.product.prodname_secret_protection %}**.

   **Metered usage:**
   1. Scroll to the tabbed usage information at the bottom of the "Overview" page and click **{% data variables.product.prodname_AS %}** to show usage.
   1. In the summary box, click "View details" to show metered usage for {% data variables.product.prodname_AS %} grouped by SKU.
   1. Select a time frame and click **{% octicon "download" aria-hidden="true" aria-label="download" %}Get usage report** to download a detailed report.

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "{% data variables.product.prodname_GHAS %}," click **{% octicon "download" aria-hidden="true" aria-label="download" %} CSV report**.

   ![Screenshot of the licensing screen. The "CSV Report" button is highlighted with an orange outline.](/assets/images/enterprise/ghas/download-csv-report-ghes-3.9.png)

{% endif %}

### Downloading {% data variables.product.prodname_AS %} license usage information through the REST API

You can retrieve {% data variables.product.prodname_AS %} usage information via the billing API.

{% ifversion fpt or ghec %}

For organization-level data, use the `/organizations/{org}/settings/billing/usage` endpoint. For more information, see [AUTOTITLE](/rest/billing/enhanced-billing?apiVersion=2022-11-28).

{% endif %}

For enterprise-level data, use the `/enterprises/{enterprise}/settings/billing/usage` endpoint. For more information, see [AUTOTITLE](/enterprise-cloud@latest/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise) in the {% data variables.product.prodname_ghe_cloud %} documentation.
