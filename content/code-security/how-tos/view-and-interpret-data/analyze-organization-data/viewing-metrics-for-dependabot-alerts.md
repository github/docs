---
title: Viewing metrics for Dependabot alerts
shortTitle: View Dependabot metrics
allowTitleToDifferFromFilename: true
intro: You can use security overview to see how many {% data variables.product.prodname_dependabot_alerts %} are in repositories across your organization, to prioritize the most critical alerts to fix, and to identify repositories where you may need to take action.
versions:
  feature: dependabot-metrics
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-cs-only %}'
contentType: how-tos
topics:
  - Security overview
  - Code Security
  - Dependabot
  - Organizations
  - Alerts
  - Vulnerabilities
redirect_from:
  - /code-security/security-overview/viewing-metrics-for-dependabot-alerts
---

## About metrics for {% data variables.product.prodname_dependabot %}

The metrics overview for {% data variables.product.prodname_dependabot %} provides valuable insights for both developers and application security (AppSec) managers. The data in the {% data variables.product.prodname_dependabot %} dashboard page contains a vulnerability prioritization funnel that helps with efficiently prioritizing, remediating, and tracking vulnerabilities across multiple repositories. This ensures that the most critical risks are addressed first and that security improvements can be measured over time.

For more information about how AppSec managers can best use these metrics to optimize alert fixing, see [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities/prioritizing-dependabot-alerts-using-metrics).

You can see  {% data variables.product.prodname_dependabot %} metrics if you have:

* The `admin` role for the repository.
* A custom repository role with the "View {% data variables.product.prodname_dependabot_alerts %}" fine-grained permissions for the repository. For more information, see [AUTOTITLE](/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/about-custom-repository-roles#security).
* Access to alerts for the repository. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).

The available metrics combine severity, exploitability, and patch availability, and help in the following ways:

* **Alert prioritization:** the chart shows the number of **open {% data variables.product.prodname_dependabot_alerts %}**. You can use filters, such as availability of patches, severity, EPSS score to narrow down the list of alerts to those matching the criteria. {% data reusables.security-overview.dependabot-filters-link %}

* **Remediation tracking:** The “Alerts closed” tile shows the number of alerts fixed with {% data variables.product.prodname_dependabot %}, manually dismissed, and auto dismissed, providing visibility into remediation performance and trends. The tile also shows the percent increase in the number of alerts closed in the last 30 days.

* **Highest-risk package:** The "Most vulnerabilities" tile shows the dependency that has the most vulnerabilities in the organization. The tile also provides a link to the related alerts across all your repositories.

* **Repository-level breakdown:** The table shows a breakdown of open alerts by repository, including counts by severity (critical, high, medium, low) and by exploitability (for example, EPSS > 1%), and can be sorted by each column. This helps you identify which projects are most at risk, prioritize remediation efforts where they matter most, and track progress over time at a granular level.

These metrics help managers measure the effectiveness of their vulnerability management and ensure compliance with organizational or regulatory timelines.

* **Actionable context for developers:** Developers can use the severity and patch availability filters to identify vulnerabilities they can fix immediately, reducing noise and focusing attention on issues they can address. These metrics help them understand the risk profile of their dependencies, enabling informed prioritization of work.

## Viewing metrics for {% data variables.product.prodname_dependabot %} for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Metrics", click **{% octicon "dependabot" aria-hidden="true" aria-label="dependabot" %} {% data variables.product.prodname_dependabot %} dashboard**.
1. Optionally, use the filters at your disposal, or build your own filters. {% data reusables.security-overview.dependabot-filters-link %}
1. Optionally, click on a number on the x-axis of the chart to filter the alert list by the relevant criteria (for example `has:patch severity:critical,high epss_percentage:>=0.01`).
1. Optionally, click on an individual repository to see the associated {% data variables.product.prodname_dependabot_alerts %}.

## Configuring funnel categories

The default funnel order is `has:patch, severity:critical,high, epss_percentage>=0.01`. By tailoring the funnel’s order, you and your teams can focus on the vulnerabilities that matter most to your organization, environments, or regulatory obligations, making remediation efforts more effective and aligned with your specific needs.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Metrics", click **{% octicon "dependabot" aria-hidden="true" aria-label="dependabot" %} {% data variables.product.prodname_dependabot %} dashboard**.
1. On the top right of the "Alert prioritization" graph, click {% octicon "gear" aria-label="Configure funnel categories" %}.
1. In the "Configure funnel order" dialog, move the criteria as desired.
1. Once you're done, click **Move** to save your changes.

>[!TIP] You can reset the funnel order back to the default settings by clicking **Reset to default** to the right of the graph.
