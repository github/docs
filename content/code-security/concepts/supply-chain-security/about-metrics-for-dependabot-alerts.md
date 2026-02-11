---
title: About metrics for Dependabot alerts
intro: Use metrics to track and prioritize {% data variables.product.prodname_dependabot_alerts %} across your organization.
versions:
  feature: dependabot-metrics
product: '{% data reusables.gated-features.security-overview-fpt-cs-only %}'
permissions: '{% data reusables.permissions.security-overview-dependabot-metrics %}'
topics:
  - Security overview
  - Code Security
  - Dependabot
  - Organizations
  - Alerts
  - Vulnerabilities
shortTitle: Dependabot alert metrics
contentType: concepts
---

Metrics for {% data variables.product.prodname_dependabot_alerts %} help you understand the security posture of your organization's dependencies and track progress in resolving vulnerabilities. You can use these metrics to prioritize remediation efforts and focus on the most critical security issues.

Metrics for {% data variables.product.prodname_dependabot_alerts %} are available on your organization's security overview.

## Who can view metrics

You can see {% data variables.product.prodname_dependabot %} metrics if you have one of the permissions mentioned in the "Who can use this feature?" box at the top of the article.

## Ways the data can help you

The available metrics combine severity, exploitability, and patch availability to help you:

* **Prioritize alerts**: Focus on the most critical vulnerabilities that need immediate attention based on severity, exploitability scores, and patch availability.
* **Track remediation progress**: Monitor how quickly your organization resolves vulnerabilities and identify trends over time.
* **Identify high-risk dependencies**: Quickly spot packages that pose the greatest security risk across your repositories.
* **Make data-driven decisions**: Allocate resources effectively by understanding which repositories and vulnerabilities require the most attention.

These metrics help both application security managers measure the effectiveness of their vulnerability management programs and developers identify which vulnerabilities they can fix immediately.

## Alert prioritization

The metrics dashboard shows the number of **open {% data variables.product.prodname_dependabot_alerts %}**. You can use filters such as availability of patches, severity, and EPSS score to narrow down the list of alerts to those matching specific criteria. {% data reusables.security-overview.dependabot-filters-link %}

For more information about how AppSec managers can best use these metrics to optimize alert fixing, see [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities/prioritizing-dependabot-alerts-using-metrics).

Key metrics for prioritization include:

* **Severity**: The impact level of a vulnerability (critical, high, medium, or low)
* **Exploitability**: How easily a vulnerability can be exploited in practice, including EPSS scores
* **Dependency relationship**: Whether the vulnerable dependency is direct or transitive (indirect)
* **Dependency scope**: Whether the vulnerability affects runtime dependencies, development dependencies, or both
* **Actual usage**: Whether the vulnerable code is actually used in your application
* **Patch availability**: Whether a fix is available for the vulnerability

## Alert resolution tracking

You can monitor how your organization resolves {% data variables.product.prodname_dependabot_alerts %} over time. Alert resolution metrics show the number of alerts:

* Fixed by {% data variables.product.prodname_dependabot %}
* Manually dismissed
* Auto-dismissed

This tile also displays the percent increase in the number of alerts closed in the last 30 days, providing visibility into remediation performance and helping you identify trends in vulnerability remediation.

## Highest-risk packages

The "Most vulnerabilities" tile shows the dependency that has the most vulnerabilities in your organization, along with a link to the related alerts across all your repositories. This helps you quickly identify which dependencies pose the greatest risk.

## Repository-level metrics

The repository breakdown table shows a summary of open alerts by repository, including:

* The total number of alerts per repository
* Severity distribution (critical, high, medium, low)
* Exploitability information (for example, EPSS > 1%)

This table can be sorted by each column, helping you identify which repositories are most at risk and prioritize remediation efforts accordingly.

## Further reading

* [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/analyze-organization-data/viewing-metrics-for-dependabot-alerts)
* [AUTOTITLE](/code-security/tutorials/manage-security-alerts/prioritizing-dependabot-alerts-using-metrics)
