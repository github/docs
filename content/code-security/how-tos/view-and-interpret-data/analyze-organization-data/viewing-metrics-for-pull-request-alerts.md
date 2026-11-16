---
title: Viewing code scanning metrics for pull requests
shortTitle: View pull request metrics
allowTitleToDifferFromFilename: true
intro: Monitor how {% data variables.product.prodname_codeql %}{% ifversion ai-powered-security-detections %} and AI Scan{% endif %} perform in pull requests across your organizations to identify repositories where you may need to take action.
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-cs-only %}'
contentType: how-tos
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/security-overview/viewing-metrics-for-pull-request-alerts
category:
  - Secure at scale
---

## Viewing code scanning pull request metrics for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Insights", click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} {% ifversion ai-powered-security-detections %}Code scanning on pull requests{% else %}{% data variables.product.prodname_codeql %} pull requests{% endif %}**.
{% ifversion ai-powered-security-detections %}
1. Select the **{% data variables.product.prodname_codeql %}** or **AI Scan** tab.
{% endif %}
1. Optionally, use the date picker to set the time range. The date picker filters data based on when the pull request alerts or findings were created.
1. Optionally, apply filters in the search box at the top of the page.
1. Alternatively, you can open the advanced filter dialog:
    * At the top of the page, next to the search box, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**.
    * Click **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Add a filter**, then select a filter from the dropdown menu.
    * To search for repositories matching the selected filter, fill out the available fields for that filter, then click **Apply**. You can repeat this process to add as many filters as you would like to your search.
    * Optionally, to remove a filter from your search, click **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter**. In the row of the filter you want to remove, click {% octicon "x" aria-label="Delete FILTER-NUMBER: FILTER-PROPERTIES" %}, then click **Apply**.{% ifversion security-overview-export-data %}
1. {% ifversion ai-powered-security-detections %}On the **{% data variables.product.prodname_codeql %}** tab, you can use the **{% octicon "download" aria-hidden="true" aria-label="download" %} Export CSV** button to download a CSV file of the displayed data. CSV export is not yet available for the **AI Scan** tab. {% else %}You can use the **{% octicon "download" aria-hidden="true" aria-label="download" %} Export CSV** button to download a CSV file of the data currently displayed on the page.{% endif %} For more information, see [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/analyze-organization-data/export-data). {% endif %}

## Viewing code scanning pull request metrics for your enterprise

You can also view code scanning metrics for pull requests across organizations in your enterprise.

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.code-scanning.click-code-security-enterprise %}
1. In the sidebar, under "Insights", click **{% octicon "graph" aria-hidden="true" aria-label="graph" %} {% ifversion ai-powered-security-detections %}Code scanning on pull requests{% else %}{% data variables.product.prodname_codeql %} pull requests{% endif %}**.
{% ifversion ai-powered-security-detections %}
1. Select the **{% data variables.product.prodname_codeql %}** or **AI Scan** tab.
{% endif %}
1. Optionally, use the date picker or filters to limit the displayed data.

{% data reusables.security-overview.enterprise-filters-tip %}
