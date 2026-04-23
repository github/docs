---
title: Viewing metrics for pull request alerts
shortTitle: View PR alert metrics
allowTitleToDifferFromFilename: true
intro: Monitor {% data variables.product.prodname_codeql %}'s performance in pull requests across your organizations to identify repositories where you may need to take action.
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-cs-only %}'
contentType: how-tos
versions:
  feature: security-overview-org-codeql-pr-alerts
redirect_from:
  - /code-security/security-overview/viewing-metrics-for-pull-request-alerts
category:
  - Secure at scale
---

## Viewing {% data variables.product.prodname_codeql %} pull request metrics for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Insights", click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} {% data variables.product.prodname_codeql %} pull requests**.
1. Optionally, use the date picker to set the time range. The date picker will show data based on the pull request alerts' creation dates.
1. Optionally, apply filters in the search box at the top of the page.
1. Alternatively, you can open the advanced filter dialog:
    * At the top of the page, next to the search box, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**.
    * Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a filter**, then select a filter from the dropdown menu.
    * To search for repositories matching the selected filter, fill out the available fields for that filter, then click **Apply**. You can repeat this process to add as many filters as you would like to your search.
    * Optionally, to remove a filter from your search, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**. In the row of the filter you want to remove, click {% octicon "x" aria-label="Delete FILTER-NUMBER: FILTER-PROPERTIES" %}, then click **Apply**.{% ifversion security-overview-export-data %}
1. You can use the **{% octicon "download" aria-hidden="true" aria-label="download" %} Export CSV** button to download a CSV file of the data currently displayed on the page for security research and in-depth data analysis. For more information, see [AUTOTITLE](/code-security/security-overview/exporting-data-from-security-overview). {% endif %}

## Viewing {% data variables.product.prodname_codeql %} pull request metrics for your enterprise

You can also view metrics for {% data variables.product.prodname_codeql %} pull request alerts across organizations in your enterprise.

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.code-scanning.click-code-security-enterprise %}
1. In the sidebar, under "Insights", click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} {% data variables.product.prodname_codeql %} pull requests**.

{% data reusables.security-overview.enterprise-filters-tip %}
