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
  - /billing/how-tos/products/view-product-use
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
shortTitle: View product/license use
permissions: '{% data reusables.permissions.enhanced-billing-cloud-all %}'
product: '{% data variables.product.prodname_ghe_cloud %} only'
contentType: how-tos
category:
  - Manage your plan and licenses
---

> [!TIP]
> **{% data variables.product.prodname_ghe_server %}** administrators should instead see [AUTOTITLE](/billing/how-tos/products/download-ghas-license-use).

## Viewing a summary of usage

The options available to you vary according to your role and {% data variables.product.github %} plan.

{% data variables.product.prodname_ghe_cloud %}:

* Anyone can view usage data for their own personal account unless a license for a metered product (for example, {% data variables.product.prodname_copilot_short %}) is assigned to them by an organization or enterprise account.
* If you are an **owner** or **billing manager** of an enterprise, or an organization on {% data variables.product.prodname_team %}, you will also have access to usage data for that organization or enterprise account.

{% data variables.product.prodname_ghe_server %}:
* Enterprise owners can access and download usage data for licenses, see [AUTOTITLE](/billing/how-tos/products/download-ghas-license-use).

### Personal accounts

{% data reusables.user-settings.access_billing_settings_url %}
1. Use the tabbed view to see a summary of consumed use for each product that you use (in this example, the "{% data variables.product.prodname_AS %}" tab is shown).

   ![Screenshot of the tabbed view showing "{% data variables.product.prodname_AS %}" with the "View details" links outlined in dark orange.](/assets/images/help/billing/overview-product-summary.png)

1. Optionally, click **View details** to show more detailed information.

### Organization and enterprise accounts

{% data reusables.billing.nav-to-org-or-ent %}
{% data reusables.billing.access-org-or-ent-page %}

## Exploring usage data in more detail

You can also explore usage data for all metered products in more detail in the **Usage** or **Metered usage** view.

* **Filter data on the page**: click in the text box to see a list of available filters.
* **Group data**: options in the "Group" option vary based on the filters you define.
* **Choose a time period**: use the "Time Frame" option.

The metered usage chart and usage break down table both show your current choice of data.

![Screenshot of the metered usage chart showing "Actions grouped by SKU" with the three control fields outlined in dark orange.](/assets/images/help/billing/product-usage-chart.png)

{% ifversion fpt or ghec %}
> [!TIP]
> For {% data variables.product.prodname_actions %}, you can also view the billable job execution minutes for an individual workflow run. For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time).
{% endif %}

{% ifversion copilot %}

## Analyzing {% data variables.product.prodname_ai_credits_short %} usage

> [!NOTE]
> Enterprise owners and billing managers can filter AI usage data by user. Organization owners cannot view user-level data directly—to see per-user consumption, download a usage report instead. See [Downloading usage reports](#downloading-usage-reports).

If you use {% data variables.product.prodname_copilot_short %}, an additional **AI usage** view is listed under **Usage**. You can use this view to dig deeper into how your enterprise is consuming {% data variables.product.prodname_ai_credits_short %} and where additional spend is occurring. For example:

* What's our total {% data variables.product.prodname_ai_credits_short %} consumption across all users?
* Which users are the heaviest consumers, and are they within their budget?
* Which models are driving the most spend?
* How widespread is adoption in the organizations where we rolled out {% data variables.product.prodname_copilot_short %}?

To understand how {% data variables.product.prodname_ai_credits_short %} are pooled across your enterprise and what the usage data represents, see [AUTOTITLE](/copilot/concepts/billing/usage-based-billing-for-organizations-and-enterprises).

{% endif %}

## Downloading usage reports

1. Visit the "Metered Usage" page to access a metered billing report for all products{% ifversion copilot %}, or navigate to the "AI usage" page for a detailed report on {% data variables.product.prodname_ai_credits_short %} consumption.{% else %}.{% endif %}
1. At the top of the page, click **Get usage report**.
1. Specify the report details.
1. Click **Email me the report**.

When the report is ready for you to download, you'll receive a message to your primary email account with a link to download the report. The link will expire after 24 hours.

For details of the fields included in the reports, see [AUTOTITLE](/billing/reference/billing-reports).

### Downloading the data plotted in the chart

When the chart on the "Metered usage" {% ifversion copilot %}or "AI usage"{% endif %} page shows the data you want to download, click the {% octicon "kebab-horizontal" aria-label="Chart options" aria-hidden="true" %} button and select your preferred format.

![Screenshot of the usage chart on the "AI usage" page with "Chart options" open and outlined in dark orange.](/assets/images/help/billing/premium-request-analytics-chart-download.png)

## Next steps

* [AUTOTITLE](/billing/reference/usage-reports){% ifversion fpt or ghec %}
* [AUTOTITLE](/billing/managing-your-billing/using-budgets-control-spending)
* [AUTOTITLE](/billing/managing-your-billing/automating-usage-reporting){% endif %}
