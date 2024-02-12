---
title: Using GitHub-curated alert rules to prioritize Dependabot alerts
intro: 'You can use a {% data variables.product.company_short %}-curated alert rule to auto-dismiss low impact development alerts for npm dependencies.'
permissions: 'People with write permissions can view {% data variables.product.prodname_dependabot %} alert rules for the repository. People with with admin permissions to a repository, or the security manager role for the repository, can enable or disable {% data variables.product.prodname_dependabot %} alert rules for the repository.'
versions:
  feature: dependabot-alert-rules-auto-dismissal-npm-dev-dependencies
type: how_to
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: GitHub-curated alert rules
---

{% data reusables.dependabot.github-alert-rules-beta %}

## About {% data variables.product.company_short %}-curated alert rules

The {% data variables.product.company_short %}-curated alert rule, `Dismiss low impact alerts`, auto-dismisses certain types of vulnerabilities that are found in npm dependencies used in development. These alerts cover cases that feel like false alarms to most developers as the associated vulnerabilities:

- Are unlikely to be exploitable in a developer (non-production or runtime) environment.
- May relate to resource management, programming and logic, and information disclosure issues.
- At worst, have limited effects like slow builds or long-running tests.
- Are not indicative of issues in production.

{% note %}

**Note:** Automatic dismissal of low impact development alerts is currently only supported for npm.

{% endnote %}

The {% data variables.product.company_short %}-curated `Dismiss low impact alerts` rule includes vulnerabilities relating to resource management, programming and logic, and information disclosure issues. For more information, see "[Publicly disclosed CWEs used by the `Dismiss low impact alerts` rule](#publicly-disclosed-cwes-used-by-the-dismiss-low-impact-alerts-rule)."

Filtering out these low impact alerts allows you to focus on alerts that matter to you, without having to worry about missing potentially high-risk development-scoped alerts.

By default, {% data variables.product.company_short %}-curated {% data variables.product.prodname_dependabot %} alert rules are enabled on public repositories and disabled for private repositories. Administrators of private repositories can opt in by enabling alert rules for their repository.

## Enabling the `Dismiss low impact alerts` rule for your private repository

{% ifversion fpt or ghec %}You first need to enable {% data variables.product.prodname_dependabot_alerts %} for the repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts#managing-dependabot-alerts-for-your-repository)."{% elsif ghes %}{% data variables.product.prodname_dependabot_alerts %} for your repository can be enabled or disabled by your enterprise owner. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% ifversion dependabot-alert-custom-rules-repo-level %}
1. Under "{% data variables.product.prodname_dependabot_alerts %}", click {% octicon "gear" aria-label="The Gear icon" %} close to "{% data variables.product.prodname_dependabot %} rules".

   ![Screenshot of the "Code security and analysis" page for a repository. The gear icon is highlighted with an orange outline.](/assets/images/help/repository/dependabot-rules-page.png)

1. Select **Dismiss low impact alerts**.
1. Click **Save rules**.
{% else %}
1. Under "{% data variables.product.prodname_dependabot_alerts %}", click **Dismiss low impact alerts**.

   ![Screenshot of the "Code security and analysis" page for a repository. The "Dismiss low impact alerts" option is highlighted with an orange outline.](/assets/images/help/repository/enable-autodismissal-low-impact-dependabot-alerts.png)

{% endif %}

## Publicly disclosed CWEs used by the `Dismiss low impact alerts` rule

Along with the `ecosystem:npm` and `scope:development` alert metadata, we use the following {% data variables.product.company_short %}-curated Common Weakness Enumerations (CWEs) to filter out low impact alerts for the `Dismiss low impact alerts` rule. We regularly improve this list and vulnerability patterns covered by built-in rules.

### Resource Management Issues

- CWE-400 Uncontrolled Resource Consumption
- CWE-770 Allocation of Resources Without Limits or Throttling
- CWE-409 Improper Handling of Highly Compressed Data (Data Amplification)
- CWE-908 Use of Uninitialized Resource
- CWE-1333 Inefficient Regular Expression Complexity
- CWE-835 Loop with Unreachable Exit Condition ('Infinite Loop')
- CWE-674 Uncontrolled Recursion
- CWE-1119 Excessive Use of Unconditional Branching

### Programming and Logic Errors

- CWE-185 Incorrect Regular Expression
- CWE-754 Improper Check for Unusual or Exceptional Conditions
- CWE-755 Improper Handling of Exceptional Conditions
- CWE-248 Uncaught Exception
- CWE-252 Unchecked Return Value
- CWE-391 Unchecked Error Condition
- CWE-696 Incorrect Behavior Order
- CWE-1254 Incorrect Comparison Logic Granularity
- CWE-665 Improper Initialization
- CWE-703 Improper Check or Handling of Exceptional Conditions
- CWE-178 Improper Handling of Case Sensitivity

### Information Disclosure Issues

- CWE-544 Missing Standardized Error Handling Mechanism
- CWE-377 Insecure Temporary File
- CWE-451 User Interface (UI) Misrepresentation of Critical Information
- CWE-668 Exposure of Resource to Wrong Sphere
