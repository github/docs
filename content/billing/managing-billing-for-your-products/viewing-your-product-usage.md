---
title: 'Viewing your usage of metered products'
intro: 'You can explore your use of different products that are billed by usage and see how each product contributes to your bill.'
allowTitleToDifferFromFilename: true
redirect_from:
# Git LFS redirects
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-git-large-file-storage-usage
  - /articles/viewing-storage-and-bandwidth-usage-for-a-personal-account
  - /articles/viewing-storage-and-bandwidth-usage-for-an-organization
  - /articles/viewing-your-git-large-file-storage-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/viewing-your-git-large-file-storage-usage
  - /billing/managing-billing-for-git-large-file-storage/viewing-your-git-large-file-storage-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage/viewing-your-git-large-file-storage-usage
# Actions redirects
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/viewing-your-github-actions-usage
  - /billing/managing-billing-for-github-actions/viewing-your-github-actions-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-github-actions/viewing-your-github-actions-usage
# Advanced security redirects
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
  - /billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage
# Codespaces redirects
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
  - /billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage
# Packages redirects
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-packages-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/viewing-your-github-packages-usage
  - /billing/managing-billing-for-github-packages/viewing-your-github-packages-usage
  - /billing/managing-billing-for-your-products/managing-billing-for-github-packages/viewing-your-github-packages-usage
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Billing
shortTitle: View product use
---

## Viewing a summary of usage for billed products

Anyone can view usage for their own personal account.

If you have an owner or billing manager role for an organization, an organization account, or enterprise account, you will also have access to usage data for that organization or account.

### Personal accounts

{% data reusables.user-settings.access_billing_settings_url %}
1. Scroll to the bottom of the page and use the tabbed view to see a summary of consumed use for each product that you use (in this example, the "{% data variables.product.prodname_AS %}" tab is shown).

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

> [!TIP]
> For GitHub Actions, you can also view the billable job execution minutes for an individual workflow run. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time).

## Downloading the data displayed

You can download the data plotted on the billing charts shown on the "Overview" or "Usage" page as a table or an image. Click the {% octicon "kebab-horizontal" aria-label="Chart options" aria-hidden="true" %} "Chart options" button and select your preferred format.

![Screenshot of the metered usage chart on the "Overview" page with the "Chart options" outlined in dark orange.](/assets/images/help/billing/overview-chart-download-button.png)

## Further reading

* [AUTOTITLE](/billing/managing-your-billing/about-billing-on-github)
* [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending)
* [AUTOTITLE](/billing/managing-your-billing/automating-usage-reporting)
