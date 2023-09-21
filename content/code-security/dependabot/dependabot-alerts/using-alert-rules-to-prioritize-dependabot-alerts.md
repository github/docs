---
title: Using alert rules to prioritize Dependabot alerts
intro: 'You can use {% data variables.product.prodname_dependabot %} alert rules to filter out false positive alerts or alerts you''re not interested in.'
permissions: 'People with write permissions can view  {% data variables.product.prodname_dependabot %} alert rules for the repository. People with with admin permissions to a repository, or the security manager role for the repository, can enable or disable {% data variables.product.prodname_dependabot %} alert rules for the repository{% ifversion dependabot-alert-custom-rules-repo-level %}, as well as create custom alert rules{% endif %}.'
versions:
  feature: dependabot-alert-rules-auto-dismissal-npm-dev-dependencies
type: how_to
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Alert rules
---

{% data reusables.dependabot.github-alert-rules-beta %}

## About {% data variables.product.prodname_dependabot %} alert rules

{% data variables.product.prodname_dependabot %} alert rules allow you to instruct {% data variables.product.prodname_dependabot %} to automatically dismiss or reopen certain alerts, based on complex logic from a variety of contextual criteria.

{% ifversion dependabot-alert-custom-rules-repo-level %}
There are two types of {% data variables.product.prodname_dependabot %} alert rules:

- {% data variables.product.company_short %}-curated rules
- User-created custom rules

{% data variables.product.company_short %}-curated rules are enabled by default for public repositories and can be opted into for private repositories. However, it's important to note that you cannot modify the {% data variables.product.company_short %}-curated rules. With user-created custom rules, you can create your own rules to automatically dismiss or reopen alerts based on your own criteria.{% endif %}

Whilst you may find it useful to auto-dismiss low impact alerts, you can still reopen auto-dismissed alerts and filter to see which alerts have been auto-dismissed. For more information, see "[Managing automatically dismissed alerts](#managing-automatically-dismissed-alerts)."

Additionally, auto-dismissed alerts are still available for reporting and reviewing, and can be auto-reopened if the alert metadata changes, for example:
- If you change the scope of a dependency from development to production.
- If {% data variables.product.company_short %} modifies certain metadata for the related advisory.

Auto-dismissed alerts are defined by the `resolution:auto-dismiss` close reason. Automatic dismissal activity is included in alert webhooks, REST and GraphQL APIs, and the audit log. For more information, see "[AUTOTITLE](/rest/dependabot/alerts)" in the REST API documentation, and the "`repository_vulnerability_alert` " section in "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#repository_vulnerability_alert)."

## About {% data variables.product.company_short %}-curated rules

{% note %}

**Note:** Automatic dismissal of low impact development alerts is currently only supported for npm.

{% endnote %}

When enabled, the built-in `Dismiss low impact alerts` rule auto-dismisses certain types of vulnerabilities that are found in npm dependencies used in development. These alerts cover cases that feel like false alarms to most developers as the associated vulnerabilities:

- Are unlikely to be exploitable in a developer (non-production or runtime) environment.
- May relate to resource management, programming and logic, and information disclosure issues.
- At worst, have limited effects like slow builds or long-running tests.
- Are not indicative of issues in production.

This {% data variables.product.company_short %}-curated `Dismiss low impact alerts` rule includes vulnerabilities relating to resource management, programming and logic, and information disclosure issues. For more information, see "[Publicly disclosed CWEs used by the `Dismiss low impact alerts` rule](#publicly-disclosed-cwes-used-by-the-dismiss-low-impact-alerts-rule)."

Filtering out these low impact alerts allows you to focus on alerts that matter to you, without having to worry about missing potentially high-risk development-scoped alerts.

By default, {% data variables.product.company_short %}-curated {% data variables.product.prodname_dependabot %} alert rules are enabled on public repositories and disabled for private repositories. Administrators of private repositories can opt in by enabling alert rules for their repository.

### Enabling the  `Dismiss low impact alerts` rule for your private repository

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

{% ifversion dependabot-alert-custom-rules-repo-level %}
## About user-created custom rules

You can create your own {% data variables.product.prodname_dependabot %} alert rules based on alert criteria.

- Dependency scope (`devDependency` or `runtime`)
- Package name
- CWE
- Severity
- Patch availability
- Manifest path
- Ecosystem

### Adding a custom rule to your repository

You can add a custom rule to your {% ifversion fpt %}public and private{% elsif ghec or ghes %}public, private, and internal{% endif %} repositories.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.prodname_dependabot_alerts %}", click {% octicon "gear" aria-label="The Gear icon" %} close to "{% data variables.product.prodname_dependabot %} rules".

   ![Screenshot of the "Code security and analysis" page for a repository. The gear icon is highlighted with an orange outline.](/assets/images/help/repository/dependabot-rules-page.png)

1. Click **New ruleset**.

   ![Screenshot of the "Code security and analysis" page for a repository. The gear icon is highlighted with an orange outline.](/assets/images/help/repository/dependabot-rules-new-ruleset.png)

1. Under "Name", describe what this rule will do.
1. Under "Alert criteria", select the criteria you want to use to filter alerts.
1. Under "Rules", select the action you want to take on alerts that match the criteria.
1. Click **Create rule**.

{% endif %}

## Managing automatically dismissed alerts

You can filter to see which alerts have been auto-dismissed, and you can reopen dismissed alerts.

{% note %}

**Note:** The {% data variables.product.prodname_dependabot_alerts %} page defaults to showing open alerts. To filter and view auto-dismissed alerts, you must first clear the `is:open` default filter from the view.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. To filter to see all closed alerts, click **{% octicon "check" aria-hidden="true" %} Closed**. Alternatively, use the `is:closed` filter query in the search bar.

   ![Screenshot of the "Dependabot Alerts" page. A button, labelled "Closed" is highlighted with an orange outline.](/assets/images/help/repository/dependabot-alerts-closed-tab.png)

1. To see all auto-dismissed alerts, select **Closed as**, then in the dropdown menu, click **Auto-dismissed**.

   ![Screenshot of the "Dependabot Alerts" page. A button, labelled "Closed as" is highlighted with an orange outline.](/assets/images/help/repository/dependabot-alerts-closed-as.png)

1. To reopen an auto-dismissed alert, to the left of the alert title, click the checkbox adjacent to the alert, then click **Reopen**.

   ![Screenshot of an alert title on the "Dependabot Alerts" page. To the left of the alert, a checkbox is highlighted in an orange outline.](/assets/images/help/repository/dependabot-reopen-closed-alert.png)

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
