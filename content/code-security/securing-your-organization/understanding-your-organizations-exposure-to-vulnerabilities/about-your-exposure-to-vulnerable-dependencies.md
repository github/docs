---
title: About your exposure to vulnerable dependencies
shortTitle: Dependency vulnerability exposure
intro: 'Understanding your organization’s exposure to vulnerable dependencies is essential for identifying and prioritizing security risks. Leveraging {% data variables.product.prodname_dependabot %} metrics on {% data variables.product.github %} enables you to efficiently assess, prioritize, and remediate vulnerabilities, reducing the likelihood of security breaches.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.ghas-billing %}'
versions:
  feature: dependabot-metrics
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilites/about-your-exposure-to-vulnerable-dependencies
---

## About exposure to vulnerable dependencies

Assessing your exposure to vulnerable dependencies is crucial if you want to prevent:

* **Supply chain compromise**. Attackers can exploit vulnerabilities in open source or third-party dependencies to inject malicious code, elevate privileges, or gain unauthorized access to your systems. Compromised dependencies can serve as indirect entry points for malicious actors, leading to wide-reaching security incidents.

* **Widespread propagation of risk**. Vulnerable dependencies are often reused across multiple applications and services, meaning a single flaw can propagate throughout your organization, compounding the risk and impact of exploitation.

* **Unplanned downtime and operational disruption**. Exploitation of dependency vulnerabilities can result in application outages, degraded service quality, or cascading failures in critical systems, disrupting your business operations.

* **Regulatory and licensing issues**. Many regulations and industry standards require organizations to proactively address known vulnerabilities in their software supply chain. Failing to remediate vulnerable dependencies can result in non-compliance, audits, legal penalties, or breaches of open source license obligations.

* **Increased remediation costs**. The longer vulnerable dependencies remain unaddressed, the more difficult and expensive they become to fix, especially if they are deeply integrated or if incidents occur. Early detection and remediation reduce the risk of costly incident response, emergency patching, and reputational harm.

Regularly assessing your exposure to dependency vulnerabilities is good practice to help identify risks early, implement effective remediation strategies, and maintain resilient, trustworthy software.

{% data variables.product.prodname_dependabot %} automatically monitors your project’s dependencies for vulnerabilities and outdated packages. When it detects a security issue or a new version, it creates pull requests to update the affected dependencies, helping you quickly address security risks and keep your software up to date. This reduces manual effort and helps ensure your project remains secure. See [AUTOTITLE](/code-security/getting-started/dependabot-quickstart-guide).

{% data variables.product.github %} provides a comprehensive set of {% data variables.product.prodname_dependabot %} metrics to help you monitor, prioritize, and remediate these risks across all repositories in your organization. See [AUTOTITLE](/code-security/security-overview/viewing-metrics-for-dependabot-alerts).

## Key tasks for AppSec managers

### 1. Monitor vulnerability metrics

Use the metrics overview for {% data variables.product.prodname_dependabot %} to gain visibility into the current state of your organization's dependency vulnerabilities. See [AUTOTITLE](/code-security/security-overview/viewing-metrics-for-dependabot-alerts).

* **Alert prioritization:** Review the number of open {% data variables.product.prodname_dependabot_alerts %} and use filters such as CVSS severity, EPSS exploit likelihood, patch availability, and whether a vulnerable dependency is actually used in deployed artifacts. {% data reusables.security-overview.dependabot-filters-link %}
* **Repository-level breakdown:** Identify which repositories have the highest number of critical or exploitable vulnerabilities.
* **Remediation tracking:** Track the number and percentage of alerts fixed over time to measure the effectiveness of your vulnerability management program.

### 2. Prioritize remediation efforts

Focus on vulnerabilities that present the highest risk to your organization.

* Prioritize alerts with high or critical severity, high EPSS scores, and available patches.
* Use the repository breakdown to direct remediation efforts to the most at-risk projects.
* Encourage development teams to address vulnerabilities that are actually used in deployed artifacts through repository custom properties.

### 3. Communicate risk and progress

* Use the {% data variables.product.prodname_dependabot %} metrics page to communicate key risk factors and remediation progress to stakeholders.
* Provide regular updates on trends, such as the reduction in open critical vulnerabilities or improvements in remediation rates.
* Highlight repositories or teams that require additional support or attention.

### 4. Establish and enforce policies

* Set organization-wide policies to require dependency review and {% data variables.product.prodname_dependabot_alerts %} on all repositories. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) and [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).
* Ensure that new repositories are automatically enrolled in dependency monitoring.
* Work with repository administrators to enable automated security updates where possible. See [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates).

### 5. Assess the impact of {% data variables.product.prodname_dependabot_alerts %}

* Regularly review how {% data variables.product.prodname_dependabot_alerts %} are helping to block security vulnerabilities from entering your codebase.
* Use historical data to demonstrate the value of proactive dependency management.
