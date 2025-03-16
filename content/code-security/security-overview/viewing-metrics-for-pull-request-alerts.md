---
title: Viewing metrics for pull request alerts
shortTitle: View PR alert metrics
allowTitleToDifferFromFilename: true
intro: 'You can use security overview to see how {% data variables.product.prodname_codeql %} is performing in pull requests for repositories across your organizations, and to identify repositories where you may need to take action.'
permissions: '{% data reusables.permissions.security-overview %}'
type: how_to
topics:
  - Security overview
  - Code Security
  - Code scanning
  - CodeQL
  - Organizations
  - Teams
versions:
  feature: security-overview-org-codeql-pr-alerts
---

## About {% data variables.product.prodname_codeql %} pull request alerts metrics

The metrics overview for {% data variables.product.prodname_codeql %} pull request alerts helps you to understand how well {% data variables.product.prodname_codeql %} is preventing vulnerabilities in your organizations. You can use the metrics to assess how {% data variables.product.prodname_codeql %} is performing in pull requests, and to easily identify the repositories where you may need to take action in order to identify and reduce security risks.

The overview shows you a summary of how many vulnerabilities prevented by {% data variables.product.prodname_codeql %} have been caught in pull requests. The metrics are only tracked for pull requests that have been merged into the default branches of repositories in your organizations.

You can also find more granular metrics, such as how many alerts were fixed{% ifversion code-scanning-autofix %} with and without {% data variables.product.prodname_copilot_autofix_short %} suggestions{% endif %}, how many were unresolved and merged, and how many were dismissed as false positive or as risk accepted.

You can also view:

* The rules that are causing the most alerts, and how many alerts each rule is associated with.

* The number of alerts that were merged into the default branch without resolution, and the number of alerts dismissed as an acceptable risk.

{% ifversion code-scanning-autofix %}
* The number of alerts that were fixed with an accepted {% data variables.product.prodname_copilot_autofix_short %} suggestion, displayed as a fraction of how many total {% data variables.product.prodname_copilot_autofix_short %} suggestions were available.

* Remediation rates, in a graph showing the percentage of alerts that were remediated with an available {% data variables.product.prodname_copilot_autofix_short %} suggestion, and the percentage of alerts that were remediated without a {% data variables.product.prodname_copilot_autofix_short %} suggestion.
{% endif %}

You can apply filters to the data. The metrics are based on activity from the default period or your selected period.

{% ifversion code-scanning-autofix %}
> [!NOTE] Metrics for {% data variables.product.prodname_copilot_autofix_short %} will be shown only for repositories where {% data variables.product.prodname_copilot_autofix_short %} is enabled.
{% else %}
> [!NOTE] Metrics for {% data variables.product.prodname_copilot_autofix_short %} are omitted because {% data variables.product.prodname_copilot_autofix_short %} is available only on {% data variables.product.github %} cloud platforms.
{% endif %}

## Viewing {% data variables.product.prodname_codeql %} pull request alerts metrics for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Metrics", click **{% octicon "graph" aria-hidden="true" %} {% data variables.product.prodname_codeql %} pull request alerts**.
1. Optionally, use the date picker to set the time range. The date picker will show data based on the pull request alerts' creation dates.
1. Optionally, apply filters in the search box at the top of the page.
1. Alternatively, you can open the advanced filter dialog:
    * At the top of the page, next to the search box, click **{% octicon "filter" aria-hidden="true" %} Filter**.
    * Click **{% octicon "plus" aria-hidden="true" %} Add a filter**, then select a filter from the dropdown menu.
    * To search for repositories matching the selected filter, fill out the available fields for that filter, then click **Apply**. You can repeat this process to add as many filters as you would like to your search.
    * Optionally, to remove a filter from your search, click **{% octicon "filter" aria-hidden="true" %} Filter**. In the row of the filter you want to remove, click {% octicon "x" aria-label="Delete FILTER-NUMBER: FILTER-PROPERTIES" %}, then click **Apply**.{% ifversion security-overview-export-data %}
1. You can use the **{% octicon "download" aria-hidden="true" %} Export CSV** button to download a CSV file of the data currently displayed on the page for security research and in-depth data analysis. For more information, see [AUTOTITLE](/code-security/security-overview/exporting-data-from-security-overview). {% endif %}

{% ifversion security-overview-enterprise-codeql-pr-alerts %}

## Viewing {% data variables.product.prodname_codeql %} pull request alerts metrics for your enterprise

You can also view metrics for {% data variables.product.prodname_codeql %} alerts in pull requests across organizations in your enterprise.

{% data reusables.security-overview.enterprise-filters-tip %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.code-scanning.click-code-security-enterprise %}
1. In the sidebar, under "Metrics", click **{% octicon "graph" aria-hidden="true" %} {% data variables.product.prodname_codeql %} pull request alerts**.

{% endif %}
