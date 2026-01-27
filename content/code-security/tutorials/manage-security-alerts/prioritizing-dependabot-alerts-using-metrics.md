---
title: Prioritizing Dependabot alerts using metrics
shortTitle: Prioritize Dependabot alerts using metrics
intro: You can prioritize {% data variables.product.prodname_dependabot_alerts %} in your organization by analyzing the provided metrics. Using this approach, you can tell your developers to focus on the most important vulnerabilities first.
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.security-overview-fpt-cs-only %}'
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: dependabot-metrics
contentType: tutorials
topics:
  - Code Security
  - Dependabot
  - Code scanning
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilites/prioritizing-dependabot-alerts-using-metrics
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities/prioritizing-dependabot-alerts-using-metrics
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities
---

## Prioritizing {% data variables.product.prodname_dependabot_alerts %} using metrics

Application Security (AppSec) managers often face a flood of {% data variables.product.prodname_dependabot_alerts %}, making it challenging to determine which vulnerabilities to address first. {% data variables.product.prodname_dependabot %} metrics provide valuable insights that help prioritize alerts efficiently, ensuring that critical security issues are resolved promptly. Users can make informed decisions, focusing resources on the most impactful vulnerabilities. This approach strengthens the organization’s security posture and streamlines vulnerability management.

## Understanding {% data variables.product.prodname_dependabot %} metrics

{% data variables.product.prodname_dependabot %} metrics offer detailed information about vulnerabilities detected in your dependencies. Key metrics include:

* **Severity**: Indicates the potential impact of a vulnerability (e.g., low, medium, high, critical).
* **Exploitability**: Assesses how easily a vulnerability can be exploited.
* **Dependency relationship**: Differentiates between direct and transitive dependencies.
* **Dependency scope**: Differentiates between runtime and development dependencies. Determines if the vulnerable code is actually used in your application.
* **Alerts closed in the last 30 days, including the number of alerts fixed by {% data variables.product.prodname_dependabot %}, manually dismissed, and auto dismissed**: Tracks alert resolution progress. Illustrates how {% data variables.product.prodname_GH_code_security %} can help you detect vulnerabilities early.
* **Table showing the total number of open alerts for each repository, as well as severity and expoitability data**: Allows you to dig deeper at the repository level.

For more information about these metrics, see [AUTOTITLE](/code-security/security-overview/viewing-metrics-for-dependabot-alerts).

Additionally, you can specify complex filters, which are combinations of the individual filters that are available. For more information about filters, see [{% data variables.product.prodname_dependabot %} dashboard view filters](/code-security/security-overview/filtering-alerts-in-security-overview#dependabot-dashboard-view-filters).

## Steps to prioritize alerts

These first steps help you identify the {% data variables.product.prodname_dependabot_alerts %} that put your organization the most at risk, so that you can tell your developers which alerts to focus on for remediation.

### 1. Tailor the funnel order to suit your organization's needs

You can customize the default funnel order on the "Alert prioritization" graph to ensure it reflects the unique risk profile, business priorities, and compliance requirements of your organization. See [AUTOTITLE](/code-security/security-overview/viewing-metrics-for-dependabot-alerts#configuring-funnel-categories).

### 2. Focus on critical and high severity alerts

Start by identifying alerts with the highest severity by using the the `severity-critical` or `severity-high` filters. These vulnerabilities pose the greatest risk and are often prioritized by compliance standards. You can then

### 3. Assess exploitability and reachability

Prioritize vulnerabilities that are the most likely to be exploited in your codebase. To identify alerts that are most likely to be exploited, you can use the `epss_percentage` filter associated to a value (for example `epss_percentage>=0.10`).

### 4. Review dependency scope and relationship

Direct dependencies are typically easier to update and may have a greater impact on your application’s security. We recommend addressing these before transitive dependencies when possible.
Filtering alerts using the `relationship:direct` filter allows us to see vulnerabilities on direct dependencies for supported ecosystems like npm.

Runtime dependencies are used by an application in production. Updating this sort of dependency can address security vulnerabilities, bug fixes, and performance improvements that affect your end users or systems directly. On the other hand, development dependencies are only used during development, testing, or build processes. While important, issues in these dependencies usually don’t impact your running application or its users.

You can use the `scope:runtime` or `scope:development` filters to only display alerts for runtime or development dependencies, respectively.

### 5. Consider the age of alerts

Older alerts may indicate long-standing risks. Regularly review and address aged alerts to prevent security debt from accumulating. For example, once you establish that a specific repository has more alerts that need prioritizing than other repositories, you can:
1. Click the repository name on the per-repository table to display the alerts for that repository only.
1. Use the "Older" filter in the **Sort** dropdown list, as well as other sorting criteria, to fine-tune the visualization to alerts meeting your criteria by age.

### 6. Leverage automation

Use {% data variables.product.prodname_dependabot %}’s automated pull requests to quickly remediate vulnerabilities. Integrate these updates into your CI/CD pipeline for faster resolution and improved efficiency.

## Best practices

* **Establish Service Level Agreements (SLAs)** for resolving vulnerabilities based on severity.
* **Monitor metrics regularly** to identify trends and recurring issues.
* **Collaborate with developers** to ensure timely updates and minimize disruption.
* **Document decisions** to provide transparency and support future prioritization.
