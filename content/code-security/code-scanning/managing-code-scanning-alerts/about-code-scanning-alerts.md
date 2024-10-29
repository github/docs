---
title: About code scanning alerts
intro: Learn about the different types of code scanning alerts and the information that helps you understand the problem each alert highlights.
permissions: '{% data reusables.permissions.code-scanning-all-alerts %}'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## About alerts from {% data variables.product.prodname_code_scanning %}

You can configure {% data variables.product.prodname_code_scanning %} to check the code in a repository using the default {% data variables.product.prodname_codeql %} analysis, a third-party analysis, or multiple types of analysis. When the analysis is complete, the resulting alerts are displayed alongside each other in the security view of the repository. Results from third-party tools or from custom queries may not include all of the properties that you see for alerts detected by {% data variables.product.company_short %}'s default {% data variables.product.prodname_codeql %} analysis. For more information, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning)" and "[AUTOTITLE](/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/configuring-advanced-setup-for-code-scanning)."

By default, {% data variables.product.prodname_code_scanning %} analyzes your code periodically on the default branch and during pull requests. For information about managing alerts on a pull request, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/triaging-code-scanning-alerts-in-pull-requests)."

{% ifversion code-scanning-autofix %}

You can use {% data variables.product.prodname_copilot_autofix %} to generate fixes automatically for {% data variables.product.prodname_code_scanning %} alerts, including {% data variables.product.prodname_codeql %} alerts. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts#generating-suggested-fixes-for-code-scanning-alerts)."

{% endif %}

{% ifversion copilot-chat-ghas-alerts %}

With a {% data variables.product.prodname_copilot_enterprise %} license, you can also ask {% data variables.product.prodname_copilot_chat %} for help to better understand {% data variables.product.prodname_code_scanning %} alerts in repositories in your organization. For more information, see "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features)."

{% endif %}

{% ifversion security-overview-org-codeql-pr-alerts %}

For {% data variables.product.prodname_code_scanning %} alerts from {% data variables.product.prodname_codeql %} analysis, you can use security overview to see how {% data variables.product.prodname_codeql %} is performing in pull requests in repositories across your organization, and to identify repositories where you may need to take action. For more information, see "[AUTOTITLE](/code-security/security-overview/viewing-metrics-for-pull-request-alerts)."

{% endif %}

{% data reusables.code-scanning.audit-code-scanning-events %}

## About alert details

Each alert highlights a problem with the code and the name of the tool that identified it. You can see the line of code that triggered the alert, as well as properties of the alert, such as the alert severity, security severity, and the nature of the problem. Alerts also tell you when the issue was first introduced. For alerts identified by {% data variables.product.prodname_codeql %} analysis, you will also see information on how to fix the problem.

{% data reusables.code-scanning.alert-default-branch %}

![Screenshot showing the elements of a {% data variables.product.prodname_code_scanning %} alert, including the title of the alert and relevant lines of code at left and the severity level, affected branches, and weaknesses at right. ](/assets/images/help/repository/code-scanning-alert.png)

If you configure {% data variables.product.prodname_code_scanning %} using {% data variables.product.prodname_codeql %}, you can also find data-flow problems in your code. Data-flow analysis finds potential security issues in code, such as: using data insecurely, passing dangerous arguments to functions, and leaking sensitive information.

When {% data variables.product.prodname_code_scanning %} reports data-flow alerts, {% data variables.product.prodname_dotcom %} shows you how data moves through the code. {% data variables.product.prodname_code_scanning_caps %} allows you to identify the areas of your code that leak sensitive information, and that could be the entry point for attacks by malicious users.

### About alerts from multiple configurations

You can run multiple configurations of code analysis on a repository, using different tools and targeting different languages or areas of the code. Each configuration of {% data variables.product.prodname_code_scanning %} generates a unique set of alerts. For example, an alert generated using the default {% data variables.product.prodname_codeql %} analysis with {% data variables.product.prodname_actions %} comes from a different configuration than an alert generated externally and uploaded via the {% data variables.product.prodname_code_scanning %} API.

If you use multiple configurations to analyze a file, any problems detected by the same query are reported as alerts generated by multiple configurations. If an alert exists in more than one configuration, the number of configurations appears next to the branch name in the "Affected branches" section on the right-hand side of the alert page. To view the configurations for an alert, in the "Affected branches" section, click a branch. A "Configurations analyzing" modal appears with the names of each configuration generating the alert for that branch. Below each configuration, you can see when that configuration's alert was last updated.

An alert may display different statuses from different configurations. To update the alert statuses, re-run each out-of-date configuration. Alternatively, you can delete stale configurations from a branch to remove outdated alerts. For more information on deleting stale configurations and alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/resolving-code-scanning-alerts#removing-stale-configurations-and-alerts-from-a-branch)."

### About labels for alerts that are not found in application code

{% data variables.product.product_name %} assigns a category label to alerts that are not found in application code. The label relates to the location of the alert.

* Generated: Code generated by the build process
* Test: Test code
* Library: Library or third-party code
* Documentation: Documentation

{% data variables.product.prodname_code_scanning_caps %} categorizes files by file path. You cannot manually categorize source files.

In this example, an alert is marked as in "Test" code in the {% data variables.product.prodname_code_scanning %} alert list.

![Screenshot of an alert in the {% data variables.product.prodname_code_scanning %} list. To the right of the title, a "Test" label is highlighted with a dark orange outline.](/assets/images/help/repository/code-scanning-library-alert-index.png)

When you click through to see details for the alert, you can see that the file path is marked as "Test" code.

![Screenshot showing the details of an alert. The file path and "Test" label are highlighted with a dark orange outline.](/assets/images/help/repository/code-scanning-library-alert-show.png)

{% ifversion codeql-ml-queries %}

{% note %}

**Note:** Experimental alerts for {% data variables.product.prodname_code_scanning %} were available a {% data variables.release-phases.public_preview %} release for JavaScript using experimental technology in the {% data variables.product.prodname_codeql %} action. This feature was {% data variables.release-phases.retired %}. For more information, see [{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} deprecates ML-powered alerts](https://github.blog/changelog/2023-09-29-codeql-code-scanning-deprecates-ml-powered-alerts/).

{% endnote %}

{% endif %}

## About alert severity and security severity levels

The severity level for a {% data variables.product.prodname_code_scanning %} alert indicates how much risk the problem adds to your codebase.

* **Severity.** All {% data variables.product.prodname_code_scanning %} alerts have a level of `Error`, `Warning`, or `Note`.
* **Security severity.** Each security alert found using {% data variables.product.prodname_codeql %} also has a security severity level of `Critical`, `High`, `Medium`, or `Low`.

When an alert has a security severity level, {% data variables.product.prodname_code_scanning %} displays and uses this level in preference to the `severity`. Security severity levels follow the industry-standard Common Vulnerability Scoring System (CVSS) that is also used for advisories in the {% data variables.product.prodname_advisory_database %}.  For more information, see [CVSS: Qualitative Severity Rating Scale](https://www.first.org/cvss/v3.1/specification-document#Qualitative-Severity-Rating-Scale).

### Pull request check failures for {% data variables.product.prodname_code_scanning %} alerts

{% ifversion code-scanning-merge-protection-rulesets %}

You can use rulesets to prevent pull requests from being merged when one of the following conditions is met:

{% data reusables.code-scanning.merge-protection-rulesets-conditions %}

For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/set-code-scanning-merge-protection)." For more general information about rulesets, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets)."

{% else %}

{% data reusables.code-scanning.pull-request-checks %}

You can edit which severity and security severity alert levels cause a check failure. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-your-code-scanning-configuration/editing-your-configuration-of-default-setup#defining-the-alert-severities-that-cause-a-check-failure-for-a-pull-request)."

{% endif %}

### Calculation of security severity levels

When a security query is added to the {% data variables.product.prodname_codeql %} Default or Extended query suite, the {% data variables.product.prodname_codeql %} engineering team calculates the security severity as follows.

1. Search for all CVEs that are assigned one or more of the CWE tags associated with the new security query.
1. Calculate the 75th percentile of the CVSS score for those CVEs.
1. Define that score as the security severity for the query.
1. When displaying alerts found by the query, translate the numerical scores to `Critical`, `High`, `Medium`, or `Low` using the CVSS definitions.

For more information, see [{% data variables.product.prodname_codeql %} CWE coverage](https://codeql.github.com/codeql-query-help/codeql-cwe-coverage/) on the {% data variables.product.prodname_codeql %} documentation site.
