---
title: Viewing and updating Dependabot alerts
intro: 'If {% data variables.product.product_name %} discovers insecure dependencies in your project, you can view details on the Dependabot alerts tab of your repository. Then, you can update your project to resolve or dismiss the alert.'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators{% ifversion dependabot-alerts-permissions-write-maintain %}, organization owners, and people with write or maintain access to a repository {% else %} and organization owners{% endif %} can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

{% data reusables.dependabot.enterprise-enable-dependabot %}

Your repository's {% data variables.product.prodname_dependabot_alerts %} tab lists all open and closed {% data variables.product.prodname_dependabot_alerts %} and corresponding {% data variables.product.prodname_dependabot_security_updates %}. You can filter alerts by package, ecosystem, or manifest. You can sort the list of alerts, and you can click into specific alerts for more details. You can also dismiss or reopen alerts, either one by one or by selecting multiple alerts at once. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

You can enable automatic security updates for any repository that uses {% data variables.product.prodname_dependabot_alerts %} and the dependency graph. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."

## About updates for vulnerable dependencies in your repository

{% data variables.product.product_name %} generates {% data variables.product.prodname_dependabot_alerts %} when we detect that the default branch of your codebase is using dependencies with known security risks. For repositories where {% data variables.product.prodname_dependabot_security_updates %} are enabled, when {% data variables.product.product_name %} detects a vulnerable dependency in the default branch, {% data variables.product.prodname_dependabot %} creates a pull request to fix it. The pull request will upgrade the dependency to the minimum possible secure version needed to avoid the vulnerability.

{% data reusables.dependabot.no-dependabot-alerts-for-malware %}

Each {% data variables.product.prodname_dependabot %} alert has a unique numeric identifier and the {% data variables.product.prodname_dependabot_alerts %} tab lists an alert for every detected vulnerability. Legacy {% data variables.product.prodname_dependabot_alerts %} grouped vulnerabilities by dependency and generated a single alert per dependency. If you navigate to a legacy {% data variables.product.prodname_dependabot %} alert, you will be redirected to a {% data variables.product.prodname_dependabot_alerts %} tab filtered for that package.

You can filter and sort {% data variables.product.prodname_dependabot_alerts %} using a variety of filters and sort options available on the user interface. For more information, see "[Prioritizing {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-dependabot-alerts)" below.

You can also audit actions taken in response to {% data variables.product.prodname_dependabot %} alerts. For more information, see "[AUTOTITLE](/code-security/getting-started/auditing-security-alerts)."

## Prioritizing {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.company_short %} helps you prioritize fixing {% data variables.product.prodname_dependabot_alerts %}. {% ifversion dependabot-most-important-sort-option %} By default, {% data variables.product.prodname_dependabot_alerts %} are sorted by importance. The "Most important" sort order helps you prioritize which {% data variables.product.prodname_dependabot_alerts %} to focus on first. Alerts are ranked based on their potential impact, actionability, and relevance. Our prioritization calculation is constantly being improved and includes factors like CVSS score, dependency scope, and whether vulnerable function calls are found for the alert.
{% ifversion dependabot-auto-triage-rules %}
You can also use {% data variables.dependabot.auto_triage_rules %} to prioritize {% data variables.product.prodname_dependabot_alerts %}. For more information, see “[AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules).”
{% endif %}

{% data reusables.dependabot.dependabot-alerts-filters %}

In addition to the filters available via the search bar, you can sort and filter {% data variables.product.prodname_dependabot_alerts %} using the dropdown menus at the top of the alert list. {% ifversion dependabot-filter-label-security-advisory %}Alternatively, to filter by label, click a label assigned to an alert to automatically apply that filter to the alert list.{% endif %}

The search bar also allows for full text searching of alerts and related security advisories. You can search for part of a security advisory name or description to return the alerts in your repository that relate to that security advisory. For example, searching for `yaml.load() API could execute arbitrary code` will return {% data variables.product.prodname_dependabot_alerts %} linked to "[PyYAML insecurely deserializes YAML strings leading to arbitrary code execution](https://github.com/advisories/GHSA-rprw-h62v-c2w7)" as the search string appears in the advisory description.

{% endif %}

![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab.](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png)

{% ifversion dependabot-alerts-development-label %}

## Supported ecosystems and manifests for dependency scope

{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

Alerts for packages listed as development dependencies are marked with the `Development` label on the {% data variables.product.prodname_dependabot_alerts %} page and are also available for filtering via the `scope` filter.

![Screenshot showing the "Development" label assigned to an alert in the list of alerts. The label is highlighted with a dark orange outline.](/assets/images/help/repository/dependabot-alerts-development-label.png)

The alert details page of alerts on development-scoped packages shows a "Tags" section containing a `Development` label.

![Screenshot showing the "Tags" section in the alert details page. The label is highlighted with a dark orange outline.](/assets/images/help/repository/dependabot-alerts-tags-section.png)

{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}

## About the detection of calls to vulnerable functions

{% data reusables.dependabot.vulnerable-calls-beta %}

When {% data variables.product.prodname_dependabot %} tells you that your repository uses a vulnerable dependency, you need to determine what the vulnerable functions are and check whether you are using them. Once you have this information, then you can determine how urgently you need to upgrade to a secure version of the dependency.

For supported languages, {% data variables.product.prodname_dependabot %} automatically detects whether you use a vulnerable function and adds the label "Vulnerable call" to affected alerts. You can use this information in the {% data variables.product.prodname_dependabot_alerts %} view to triage and prioritize remediation work more effectively.

{% note %}

**Note:** During the beta release, this feature is available only for new Python advisories created _after_ April 14, 2022, and for a subset of historical Python advisories. {% data variables.product.prodname_dotcom %} is working to backfill data across additional historical Python advisories, which are added on a rolling basis. Vulnerable calls are highlighted only on the {% data variables.product.prodname_dependabot_alerts %} pages.

{% endnote %}

![Screenshot showing an alert with the "Vulnerable call" label. The label is outlined in orange.](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

You can filter the view to show only alerts where {% data variables.product.prodname_dependabot %} detected at least one call to a vulnerable function using the `has:vulnerable-calls` filter in the search field.

For alerts where vulnerable calls are detected, the alert details page shows additional information:

* One or more code blocks showing where the function is used.
* An annotation listing the function itself, with a link to the line where the function is called.

![Screenshot showing a {% data variables.product.prodname_dependabot %} alert with a "Vulnerable call" label. A code block, showing "Vulnerable function called", and a link, titled "See all your affected repositories", are highlighted with a dark orange outline.](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

For more information, see "[Reviewing and fixing alerts](#reviewing-and-fixing-alerts)" below.

{% endif %}

## Viewing {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.dependabot.where-to-view-dependabot-alerts %} You can sort and filter {% data variables.product.prodname_dependabot_alerts %} by selecting a filter from the dropdown menu.

{% ifversion ghec or ghes %}To view summaries of alerts for all or a subset of repositories owned by your organization, use security overview. For more information, see "[AUTOTITLE](/code-security/security-overview/about-security-overview#about-security-overview-for-organizations)."{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. Optionally, to filter alerts, select a filter in a dropdown menu then click the filter that you would like to apply. You can also type filters into the search bar. {% ifversion dependabot-filter-label-security-advisory %}Alternatively, to filter by label, click a label assigned to an alert to automatically apply that filter to the alert list.{% endif %} For more information about filtering and sorting alerts, see "[Prioritizing {% data variables.product.prodname_dependabot_alerts %}](#prioritizing-dependabot-alerts)."

   ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab.](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png)
1. Click the alert that you would like to view.
{% ifversion dependabot-filter-label-security-advisory %}
1. Optionally, to suggest an improvement to the related security advisory, on the right-hand side of the alert details page, click **Suggest improvements for this advisory on the {% data variables.product.prodname_advisory_database %}**. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/editing-security-advisories-in-the-github-advisory-database)."

   ![Screenshot of the right sidebar of a {% data variables.product.prodname_dependabot %} alert. A link, titled "Suggest improvements for this advisory on the {% data variables.product.prodname_advisory_database %}", is highlighted with an orange outline.](/assets/images/help/dependabot/dependabot-improve-security-advisory.png)
{% endif %}

## Reviewing and fixing alerts

It’s important to ensure that all of your dependencies are clean of any security weaknesses. When {% data variables.product.prodname_dependabot %} discovers vulnerabilities in your dependencies, you should assess your project’s level of exposure and determine what remediation steps to take to secure your application.

If a patched version of the dependency is available, you can generate a {% data variables.product.prodname_dependabot %} pull request to update this dependency directly from a {% data variables.product.prodname_dependabot %} alert. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, the pull request may be linked in the {% data variables.product.prodname_dependabot %} alert.

In cases where a patched version is not available, or you can’t update to the secure version, {% data variables.product.prodname_dependabot %} shares additional information to help you determine next steps. When you click through to view a {% data variables.product.prodname_dependabot %} alert, you can see the full details of the security advisory for the dependency including the affected functions. You can then check whether your code calls the impacted functions. This information can help you further assess your risk level, and determine workarounds or if you’re able to accept the risk represented by the security advisory.

{% ifversion dependabot-alerts-vulnerable-calls %}

For supported languages, {% data variables.product.prodname_dependabot %} detects calls to vulnerable functions for you. When you view an alert labeled as "Vulnerable call", the details include the name of the function and a link to the code that calls it. Often you will be able to take decisions based on this information, without exploring further.

{% endif %}

{% ifversion copilot-chat-ghas-alerts %}

With a {% data variables.product.prodname_copilot_enterprise %} license, you can also ask {% data variables.product.prodname_copilot_chat %} for help to better understand {% data variables.product.prodname_dependabot_alerts %} in repositories in your organization. For more information, see "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features)."

{% endif %}

### Fixing vulnerable dependencies

1. View the details for an alert. For more information, see "[Viewing {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts)" (above).
1. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, there may be a link to a pull request that will fix the dependency. Alternatively, you can click **Create {% data variables.product.prodname_dependabot %} security update** at the top of the alert details page to create a pull request.

   ![Screenshot of a {% data variables.product.prodname_dependabot %} alert with the "Create {% data variables.product.prodname_dependabot %} security update" button highlighted with a dark orange outline.](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)

1. Optionally, if you do not use {% data variables.product.prodname_dependabot_security_updates %}, you can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to update the dependency to a secure version.
1. When you're ready to update your dependency and resolve the vulnerability, merge the pull request.

   Each pull request raised by {% data variables.product.prodname_dependabot %} includes information on commands you can use to control {% data variables.product.prodname_dependabot %}. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."

## Dismissing {% data variables.product.prodname_dependabot_alerts %}

{% tip %}

**Tip:** You can only dismiss open alerts.
{% endtip %}

If you schedule extensive work to upgrade a dependency, or decide that an alert does not need to be fixed, you can dismiss the alert. Dismissing alerts that you have already assessed makes it easier to triage new alerts as they appear.

1. View the details for an alert. For more information, see "[Viewing vulnerable dependencies](#viewing-dependabot-alerts)" (above).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% ifversion reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %}
{% ifversion dependabot-alerts-dismissal-comment %}1. Optionally, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can retrieve or set a comment by using the GraphQL API. The comment is contained in the `dismissComment` field. For more information, see "[AUTOTITLE](/graphql/reference/objects#repositoryvulnerabilityalert)" in the GraphQL API documentation.

   ![Screenshot of the page for a Dependabot alert, with the "Dismiss" dropdown and the option to add a dismissal comment highlighted with a dark orange outline.](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)

1. Click **Dismiss alert**.
{% else %}

   ![Screenshot of the page for a Dependabot alert, with the "Dismiss" dropdown and its options highlighted with a dark orange outline.](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png){% endif %}

### Dismissing multiple alerts at once

1. View the open {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)".
1. Optionally, filter the list of alerts by selecting a dropdown menu, then clicking the filter that you would like to apply. You can also type filters into the search bar.
1. To the left of each alert title, select the alerts that you want to dismiss.
   ![Screenshot of the {% data variables.product.prodname_dependabot_alerts %} view. Two alerts are selected and these check boxes are highlighted with an orange outline.](/assets/images/help/graphs/select-multiple-alerts.png)
1. Optionally, at the top of the list of alerts, select all alerts on the page.
   ![Screenshot of the header section of the {% data variables.product.prodname_dependabot_alerts %} view. The "Select all" checkbox is highlighted with a dark orange outline.](/assets/images/help/graphs/select-all-alerts.png)
1. Select the "Dismiss alerts" dropdown, and click a reason for dismissing the alerts.
   ![Screenshot of a list of alerts. Below the "Dismiss alerts" button, a dropdown labeled "Select a reason to dismiss" is expanded. The dropdown contains radio buttons for various options.](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% ifversion reopen-dependabot-alerts %}

## Viewing and updating closed alerts

You can view all open alerts, and you can reopen alerts that have been previously dismissed. Closed alerts that have already been fixed cannot be reopened.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. To just view closed alerts, click **Closed**.

   ![Screenshot showing the list of {% data variables.product.prodname_dependabot_alerts %} with the "Closed" tab highlighted with a dark orange outline.](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png)

1. Click the alert that you would like to view or update.
1. Optionally, if the alert was dismissed and you wish to reopen it, click **Reopen**. Alerts that have already been fixed cannot be reopened.

   ![Screenshot showing a closed {% data variables.product.prodname_dependabot %} alert. A button, titled "Reopen", is highlighted in a dark orange outline.](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

### Reopening multiple alerts at once

1. View the closed {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)" (above).
1. To the left of each alert title, select the alerts that you want to reopen by clicking the checkbox adjacent to each alert.
1. Optionally, at the top of the list of alerts, select all closed alerts on the page.
   ![Screenshot of alerts in the "Closed" tab. The "Select all" checkbox is highlighted with a dark orange outline.](/assets/images/help/graphs/select-all-closed-alerts.png)
1. Click **Reopen** to reopen the alerts. Alerts that have already been fixed cannot be reopened.

## Reviewing the audit logs for {% data variables.product.prodname_dependabot_alerts %}

When a member of your organization {% ifversion not fpt %}or enterprise {% endif %}performs an action related to {% data variables.product.prodname_dependabot_alerts %}, you can review the actions in the audit log. For more information about accessing the log, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log){% ifversion not fpt %}" and "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."{% else %}."{% endif %}
{% ifversion dependabot-alerts-audit-log %}

![Screenshot of the audit log showing Dependabot alerts.](/assets/images/help/dependabot/audit-log-ui-dependabot-alert.png){% endif %}

Events in your audit log for {% data variables.product.prodname_dependabot_alerts %} include details such as who performed the action, what the action was, and when the action was performed. {% ifversion dependabot-alerts-audit-log %}The event also includes a link to the alert itself. When a member of your organization dismisses an alert, the event displays the dismissal reason and comment.{% endif %} For information on the {% data variables.product.prodname_dependabot_alerts %} actions, see the `repository_vulnerability_alert` category in "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#repository_vulnerability_alert){% ifversion not fpt %}" and "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert)."{% else %}."{% endif %}
