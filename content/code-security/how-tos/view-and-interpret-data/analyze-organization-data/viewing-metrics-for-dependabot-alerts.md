---
title: Viewing metrics for Dependabot alerts
shortTitle: View Dependabot metrics
allowTitleToDifferFromFilename: true
intro: You can use security overview to see how many {% data variables.product.prodname_dependabot_alerts %} are in repositories across your organization, to prioritize the most critical alerts to fix, and to identify repositories where you may need to take action.
versions:
  feature: dependabot-metrics
permissions: '{% data reusables.permissions.security-overview-dependabot-metrics %}'
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

You can view metrics for {% data variables.product.prodname_dependabot_alerts %} to track and prioritize vulnerabilities across your organization. For more information about the available metrics and how to use them, see [AUTOTITLE](/code-security/concepts/supply-chain-security/about-metrics-for-dependabot-alerts).

This article explains how to access and view these metrics for your organization.

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

## Using metrics effectively

Use {% data variables.product.prodname_dependabot %} metrics to:

* **Prioritize remediation**: Focus on critical and high-severity alerts that are easily exploitable. Developers can use severity and patch availability filters to identify vulnerabilities they can fix immediately, reducing noise and focusing attention on actionable issues.
* **Monitor progress**: Track how quickly your organization resolves security vulnerabilities and measure the effectiveness of vulnerability management efforts.
* **Make data-driven decisions**: Allocate resources based on actual risk and usage patterns. The repository-level breakdown helps you understand which projects are most at risk and where to focus remediation efforts.
* **Identify trends**: Understand whether your security posture is improving over time and ensure compliance with organizational or regulatory timelines.
* **Understand risk profiles**: Developers can use these metrics to understand the risk profile of their dependencies, enabling informed prioritization of work.
