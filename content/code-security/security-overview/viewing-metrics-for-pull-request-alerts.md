---
title: Viewing metrics for pull request alerts
shortTitle: View PR alert metrics
allowTitleToDifferFromFilename: true
intro: 'You can use security overview to see how {% data variables.product.prodname_codeql %} is performing in pull requests for repositories across your organization, and to identify repositories where you may need to take action.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Code scanning
  - CodeQL
  - Organizations
  - Teams
versions:
  feature: security-overview-org-codeql-pr-alerts
---

## About {% data variables.product.prodname_codeql %} pull request alerts metrics for an organization

The metrics overview for {% data variables.product.prodname_codeql %} pull request alerts helps you to understand how well {% data variables.product.prodname_codeql %} is preventing vulnerabilities in your organization. You can use the metrics to assess how {% data variables.product.prodname_codeql %} is performing in pull requests, and to easily identify the repositories where you may need to take action in order to identify and reduce security risks.

The overview shows you a summary of how many vulnerabilities prevented by {% data variables.product.prodname_codeql %} have been caught in pull requests. The metrics are only tracked for pull requests that have been merged into the default branches of repositories in your organization.

You can also find more granular metrics, such as how many alerts were:

* Fixed with and without {% data variables.product.prodname_copilot_autofix_short %} suggestions.
* Unresolved and merged.
* Dismissed as false positive.
* Dismissed as risk accepted.

You can also view the most common rules that are causing alerts in your organization.

You can also apply filters to the data. The metrics are based on activity from the default period or your selected period.

![Screenshot of the "CodeQL pull request alerts" view for an organization, showing status and trends over 90 days.](/assets/images/help/security-overview/security-overview-codeql-pull-requests-alerts-report.png)

## Viewing {% data variables.product.prodname_codeql %} pull request alerts metrics for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Metrics", click **{% octicon "graph" aria-hidden="true"  %} {% data variables.product.prodname_codeql %} pull request alerts**.
1. Optionally, use the date picker to set the time range. The date picker will show data based on the pull request alerts' creation dates.
1. Optionally, apply filters in the search box at the top of the page.
1. Alternatively, you can open the advanced filter dialog:
    * At the top of the page, next to the search box, click {% octicon "filter" aria-hidden="true" %} **Filter**.
    * Click {% octicon "plus" aria-hidden="true" %} **Add a filter**, then select a filter from the dropdown menu.
    * To search for repositories matching the selected filter, fill out the available fields for that filter, then click **Apply**. You can repeat this process to add as many filters as you would like to your search.
    * Optionally, to remove a filter from your search, click {% octicon "filter" aria-hidden="true" %} **Filter**. In the row of the filter you want to remove, click {% octicon "x" aria-label="Delete FILTER-NUMBER: FILTER-PROPERTIES" %}, then click **Apply**.
