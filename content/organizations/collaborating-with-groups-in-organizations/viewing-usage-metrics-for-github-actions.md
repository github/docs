---
title: Viewing usage metrics for GitHub Actions
shortTitle: GitHub Actions usage metrics
intro: 'GitHub Actions usage metrics provide insights into how and where your organization is using resources for its CI/CD pipelines.'
permissions: 'Organization owners and users with the "View organization Actions usage metrics" permission.'
product: 'Your organization must be on a {% data variables.product.prodname_ghe_cloud %} plan.'
versions:
  feature: actions-usage-metrics
---

## About {% data variables.product.prodname_actions %} usage metrics

{% data reusables.actions.about-actions-usage-metrics %}

{% data reusables.actions.actions-usage-metrics-not-billing-metrics %}

## Enabling access to {% data variables.product.prodname_actions %} usage metrics
  
Organization owners can create custom organization roles to allow people to view {% data variables.product.prodname_actions %} usage metrics for their organization. To provide users with access, select the "View organization Actions usage metrics" role when creating a custom organization role. For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-organization-roles)."

## Understanding {% data variables.product.prodname_actions %} usage metrics aggregation

{% data reusables.actions.about-actions-usage-metrics-aggregation %}

## Viewing {% data variables.product.prodname_actions %} usage metrics

> [!NOTE]
There may be a discrepancy between the **Workflows** tab's job count and the **Jobs** tab's count due to differences in how unique jobs are identified. This does not affect the total minutes calculated.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.insights %}
1. In the "Insights" navigation menu, click **Actions Usage Metrics**.
1. Optionally, to select a time period to view usage metrics for, choose an option from the **Period** drop down menu at the top right of the page. For more information, see "[Understanding {% data variables.product.prodname_actions %} usage metrics aggregation](#understanding-github-actions-usage-metrics-aggregation)."
1. Click on the tab that contains the usage metrics you would like to view. For more information, see "[About {% data variables.product.prodname_actions %} usage metrics](#about-github-actions-usage-metrics)."
1. Optionally, to filter the data displayed in a tab, create a filter.
    1. Click on the **{% octicon "filter" aria-hidden="true"  %} Filter** button.
    1. Click **{% octicon "plus" aria-hidden="true"  %} Add a filter**.
    1. Choose a metric you would like to filter results by.
    1. Depending on the metric you chose, fill out information in the "Qualifier," "Operator," and "Value" columns.
    1. Optionally, click **{% octicon "plus" aria-hidden="true"  %} Add a filter** to add another filter.
    1. Click **Apply**.
1. Optionally, to download usage metrics to a CSV file, click {% octicon "download" aria-label="Download report" %}.
