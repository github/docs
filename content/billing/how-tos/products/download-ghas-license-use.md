---
title: 'Downloading license use for your enterprise or organization'
intro: 'Get data on consumption of {% data variables.product.github %}, {% data variables.product.prodname_copilot_short %}, and {% data variables.product.prodname_AS %} licenses.'
permissions: '{% data reusables.permissions.enhanced-billing-enterprise %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
  - Advanced Security
  - Enterprise
shortTitle: Download license use
allowTitleToDifferFromFilename: true
redirect_from:
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/downloading-your-github-advanced-security-usage
contentType: how-tos
---

You can download CSV files with details of paid license use through the {% data variables.product.github %} user interface or the REST API.

For more detailed reports on usage of all paid products, see [AUTOTITLE](/billing/how-tos/products/view-product-use).

## On {% data variables.product.prodname_ghe_cloud %}

1. In the upper-right corner of any page on {% data variables.product.github %}, click your profile picture.

1. Select the account you want to view and then access the "Billing & Licensing" pages:

   * **Organizations**: Click **Your organizations**, then next to the organization, click **Settings**. In the organization sidebar, click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing**.

   * **Enterprises**: Click **Your enterprises**, then click the enterprise name. Click the **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** tab at the top of the page.

1. From the list of "Billing & licensing" pages, click {% octicon "law" aria-hidden="true" aria-label="law" %} **Licensing** to display the licensing page.

1. In the license area of interest, click **Download CSV report**. If offered a choice, choose your preferred report.

The report will be emailed to the default email address associated with your {% data variables.product.github %} account. For information about the fields, see [AUTOTITLE](/billing/reference/license-reports).

## On {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.license-tab-ghes %}

The page shows a summary of the licenses your enterprise is using for {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_GHAS %}. Use links on the page to view more detailed information.

To download a license usage report for {% data variables.product.prodname_GHAS %}:

   * **Enterprise**: In "{% data variables.product.prodname_GHAS %}", click {% octicon "download" aria-hidden="true" aria-label="download" %} **CSV report**.
   * **Organization**: In the "ORGANIZATION" table, click {% octicon "download" aria-label="Download CSV report" %} associated with the organization that you want to download a CSV report for.
   * **User namespace**: In the "USER NAMESPACED" table, click {% octicon "download" aria-label="Download CSV report" %} associated with the user that you want to download a CSV report for.
   * **Repository**: In the "ORGANIZATION" table, click the name of an organization to show a settings page for the organization. In the {% data variables.product.prodname_GHAS %} repositories table, click {% octicon "kebab-horizontal" aria-label="GHAS repository actions" %} and select **Download CSV report**.

For details of the fields included in the report, see [AUTOTITLE](/billing/reference/license-reports).

## Using the REST API

You can retrieve information on paid use of {% data variables.product.prodname_AS %} with the billing API.

* Organization-level data (cloud only), use the `/organizations/{org}/settings/billing/usage` endpoint.{% ifversion fpt or ghec %} For more information, see [AUTOTITLE](/rest/billing/enhanced-billing?apiVersion=2022-11-28).{% endif %}

* Enterprise-level data, use the `/enterprises/{enterprise}/settings/billing/usage` endpoint. For more information, see [AUTOTITLE](/enterprise-cloud@latest/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise) in the {% data variables.product.prodname_ghe_cloud %} documentation.
