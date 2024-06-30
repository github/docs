---
title: Exporting Server Statistics
shortTitle: Export Server Statistics
intro: 'You can use your own tools to analyze your {% data variables.product.prodname_ghe_server %} usage over time by downloading your {% data variables.product.prodname_server_statistics %} metrics in a CSV or JSON file.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
---

You can download up to the last 365 days of {% data variables.product.prodname_server_statistics %} data in a CSV or JSON file. This data, which includes aggregate metrics on repositories, issues, and pull requests, can help you anticipate the needs of your organization, understand how your team works, and show the value you get from {% data variables.product.prodname_ghe_server %}.

Before you can download this data, you must enable {% data variables.product.prodname_server_statistics %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)."

To preview the metrics available to download, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics)."

To download these metrics, you must be an enterprise owner or organization owner on {% data variables.product.prodname_ghe_cloud %}.
* If {% data variables.location.product_location %} is connected to an enterprise account on {% data variables.product.prodname_ghe_cloud %}, see "[Downloading metrics from your enterprise account](#downloading-metrics-from-your-enterprise-account)."
* If {% data variables.location.product_location %} is connected to an organization on {% data variables.product.prodname_ghe_cloud %}, see "[Downloading metrics from your organization](#downloading-metrics-from-your-organization)."

To learn more about {% data variables.product.prodname_github_connect %}, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/about-github-connect)."

## Downloading metrics from your enterprise account

{% data reusables.enterprise-accounts.access-enterprise %}

1. On the left side of the page, in the enterprise account sidebar, click **GitHub Connect**.

{% data reusables.server-statistics.csv-download %}

## Downloading metrics from your organization

{% data reusables.profile.access_org %}

{% data reusables.profile.org_settings %}

1. In the left sidebar, click **GitHub Connect**.

{% data reusables.server-statistics.csv-download %}
