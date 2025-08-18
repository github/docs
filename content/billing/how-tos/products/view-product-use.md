---
title: Viewing your usage of metered products and licenses
intro: Explore your use of features that are billed by usage and see how they contribute to your bill.
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-git-large-file-storage-usage
  - /articles/viewing-storage-and-bandwidth-usage-for-a-personal-account
  - /articles/viewing-storage-and-bandwidth-usage-for-an-organization
  - /articles/viewing-your-git-large-file-storage-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/viewing-your-git-large-file-storage-usage
  - /billing/managing-billing-for-git-large-file-storage/viewing-your-git-large-file-storage-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage/viewing-your-git-large-file-storage-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
  - /billing/managing-billing-for-github-actions/viewing-your-github-actions-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-github-actions/viewing-your-github-actions-usage
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
  - /billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
  - /billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/viewing-your-github-packages-usage
  - /billing/managing-billing-for-github-packages/viewing-your-github-packages-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-github-packages/viewing-your-github-packages-usage
  - /billing/managing-billing-for-your-products/viewing-your-product-usage
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Billing
shortTitle: View product/license use
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.enhanced-billing-cloud-all %}'
product: 'Cloud only'
contentType: how-tos
---

> [!TIP]
> **{% data variables.product.prodname_ghe_server %}** administrators should instead see [AUTOTITLE](/billing/how-tos/products/download-ghas-license-use).

## Viewing a summary of usage

The options available to you vary according to your role and {% data variables.product.github %} plan.

{% data variables.product.github %} cloud:
* Anyone can view usage data for their own personal account unless their account is managed by their enterprise (EMU).
* If you are an **owner** or **billing manager** of an enterprise, or an organization on {% data variables.product.prodname_team %}, you will also have access to usage data for that organization or enterprise account.

{% data variables.product.prodname_ghe_server %}:
* Enterprise owners can access and download usage data for licenses, see [AUTOTITLE](/billing/how-tos/products/download-ghas-license-use).

### Personal accounts

{% data reusables.user-settings.access_billing_settings_url %}
1. Use the tabbed view to see a summary of consumed use for each product that you use (in this example, the "{% data variables.product.prodname_AS %}" tab is shown).

   ![Screenshot of the tabbed view showing "{% data variables.product.prodname_AS %}" with the "View details" links outlined in dark orange.](/assets/images/help/billing/overview-product-summary.png)

1. Optionally, click **View details** to show more detailed information.

### Organization and enterprise accounts

1. Display the settings for the organization or enterprise account you want to view data for. For example, using the context switcher shown on all personal and organization account settings pages.

   ![Screenshot of the "Public profile" settings for The Octocat. Next to "Your personal profile," a "Switch settings context" link is outlined in orange.](/assets/images/help/settings/context-switcher-button.png)

1. Click **{% octicon "credit-card" aria-hidden="true" aria-label="credit-card" %} Billing & Licensing** to display the billing and licensing overview for the account:
   * **Organization** accounts: under "Access" in the sidebar for settings.
   * **Enterprise** accounts: a separate tab at the top of the page.

## Exploring usage data in more detail

You can also explore usage data in more detail in the **{% octicon "graph" aria-label="chart" aria-hidden="true" %} Usage** view.

* **Filter data on the page**: click in the text box to see a list of available filters.
* **Group data**: options in the "Group" option vary based on the filters you define.
* **Choose a time period**: use the "Time Frame" option.

The metered usage chart and usage break down table both show your current choice of data.

![Screenshot of the metered usage chart showing "Actions grouped by SKU" with the three control fields outlined in dark orange.](/assets/images/help/billing/product-usage-chart.png)

{% ifversion fpt or ghec %}
> [!TIP]
> For GitHub Actions, you can also view the billable job execution minutes for an individual workflow run. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time).
{% endif %}

## Downloading usage reports

You can download two different types of usage report from the "Usage" page.

### General usage reports

1. At the top of the "Usage" page, click **Get usage report**.
1. Choose the report that you want to download.

For details of the fields included in the report, see [AUTOTITLE](/billing/reference/usage-reports).

### Downloading the data plotted in the usage chart

When the chart on the "Usage" page shows the data you want to download, click the {% octicon "kebab-horizontal" aria-label="Chart options" aria-hidden="true" %} "Chart options" button and select your preferred format.

![Screenshot of the metered usage chart on the "Usage" page with the "Chart options" outlined in dark orange.](/assets/images/help/billing/overview-chart-download-button.png)

## Next steps

* [AUTOTITLE](/billing/reference/usage-reports){% ifversion fpt or ghec %}
* [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending)
* [AUTOTITLE](/billing/managing-your-billing/automating-usage-reporting){% endif %}
