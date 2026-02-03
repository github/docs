---
title: Viewing and updating Dependabot alerts
intro: If {% data variables.product.github %} discovers insecure dependencies in your project, you can view details on the Dependabot alerts tab of your repository. Then, you can update your project to resolve or dismiss the alert.
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts
permissions: '{% data reusables.permissions.dependabot-alerts %}'
shortTitle: View Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

{% data reusables.dependabot.enterprise-enable-dependabot %}

Your repository's {% data variables.product.prodname_dependabot_alerts %} tab lists all open and closed {% data variables.product.prodname_dependabot_alerts %} and corresponding {% data variables.product.prodname_dependabot_security_updates %}. You can filter alerts by package, ecosystem, or manifest. You can sort the list of alerts, and you can click into specific alerts for more details. You can also dismiss or reopen alerts, either one by one or by selecting multiple alerts at once. For more information, see [AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts).

## About updates for vulnerable dependencies in your repository

Each {% data variables.product.prodname_dependabot %} alert has a unique numeric identifier and the {% data variables.product.prodname_dependabot_alerts %} tab lists an alert for every detected vulnerability. Legacy {% data variables.product.prodname_dependabot_alerts %} grouped vulnerabilities by dependency and generated a single alert per dependency. If you navigate to a legacy {% data variables.product.prodname_dependabot %} alert, you will be redirected to a {% data variables.product.prodname_dependabot_alerts %} tab filtered for that package.

You can filter and sort {% data variables.product.prodname_dependabot_alerts %} using a variety of filters and sort options available on the user interface. For more information, see [Viewing and prioritizing {% data variables.product.prodname_dependabot_alerts %}](#viewing-and-prioritizing-dependabot-alerts) below.

You can also audit actions taken in response to {% data variables.product.prodname_dependabot %} alerts. For more information, see [AUTOTITLE](/code-security/getting-started/auditing-security-alerts).

## Viewing and prioritizing {% data variables.product.prodname_dependabot_alerts %}

You can view, sort, and filter {% data variables.product.prodname_dependabot_alerts %} to focus on the alerts that matter most.

By default, alerts are sorted by **Most important**, which helps you prioritize fixes based on factors such as potential impact, actionability, and relevance. This prioritization is continuously improved and considers signals like CVSS score, dependency scope, and whether vulnerable function calls are detected.

{% data reusables.dependabot.where-to-view-dependabot-alerts %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}

1. Optionally, refine the list of alerts:
   * Use the dropdown menus at the top of the list to sort or filter alerts.

     ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab.](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png)

   * Type directly in the search bar to filter alerts, including full-text search across alert details and related security advisories.
   * Click a label on an alert to automatically filter the list by that label.
   * To identify alerts that affect development dependencies, filter by the `scope:development` filter or look for alerts labeled "Development". This can help you prioritize alerts that affect production dependencies first.

     ![Screenshot showing the "Development" label assigned to an alert in the list of alerts.](/assets/images/help/repository/dependabot-alerts-development-label.png)

1. Click an alert to view its details. Alerts for development-scoped dependencies include a "Development" label in the "Tags" section on the alert details page.

   ![Screenshot showing the "Tags" section in the alert details page.](/assets/images/help/repository/dependabot-alerts-tags-section.png)

1. Optionally, to suggest an improvement to the related security advisory, on the right-hand side of the alert details page, click **Suggest improvements for this advisory on the {% data variables.product.prodname_advisory_database %}**. See [AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/editing-security-advisories-in-the-github-advisory-database).

### Tips for prioritizing alerts

* Use the **Most important** sort order to focus on alerts with the highest potential impact.
* Prioritize alerts that affect production dependencies over development dependencies.
* Use {% data variables.dependabot.auto_triage_rules %} to automatically prioritize or manage alerts. See [AUTOTITLE](/code-security/concepts/supply-chain-security/about-dependabot-auto-triage-rules).

For more information about supported ecosystems and manifest files for dependency scope, see [AUTOTITLE](/code-security/reference/supply-chain-security/supported-ecosystems-and-manifests-for-dependency-scope).

For a complete list of available filters, see [AUTOTITLE](/code-security/reference/supply-chain-security/dependabot-alerts-filters).

To retrieve alerts programmatically, see the [AUTOTITLE](/rest/dependabot/alerts).

## Reviewing and fixing alerts

{% ifversion copilot-chat-ghas-alerts %}

With a {% data variables.copilot.copilot_enterprise %} license, you can also ask {% data variables.copilot.copilot_chat %} for help to better understand {% data variables.product.prodname_dependabot_alerts %} in repositories in your organization. For more information, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features).

{% endif %}

You can review the details of a {% data variables.product.prodname_dependabot %} alert to understand the vulnerability and how to fix it.

### Fixing vulnerable dependencies

1. View the details for an alert. For more information, see [Viewing and prioritizing {% data variables.product.prodname_dependabot_alerts %}](#viewing-and-prioritizing-dependabot-alerts) (above).
1. If you have {% data variables.product.prodname_dependabot_security_updates %} enabled, there may be a link to a pull request that will fix the dependency. Alternatively, you can click **Create {% data variables.product.prodname_dependabot %} security update** at the top of the alert details page to create a pull request.

   ![Screenshot of a {% data variables.product.prodname_dependabot %} alert with the "Create {% data variables.product.prodname_dependabot %} security update" button highlighted with a dark orange outline.](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)

1. Optionally, if you do not use {% data variables.product.prodname_dependabot_security_updates %}, you can use the information on the page to decide which version of the dependency to upgrade to and create a pull request to update the dependency to a secure version.
1. When you're ready to update your dependency and resolve the vulnerability, merge the pull request.

   Each pull request raised by {% data variables.product.prodname_dependabot %} includes information on commands you can use to control {% data variables.product.prodname_dependabot %}. For more information, see [AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands).

## Dismissing {% data variables.product.prodname_dependabot_alerts %}

> [!NOTE]
> You can only dismiss open alerts.

If you schedule extensive work to upgrade a dependency, or decide that an alert does not need to be fixed, you can dismiss the alert. Dismissing alerts that you have already assessed makes it easier to triage new alerts as they appear.

1. [Viewing and prioritizing {% data variables.product.prodname_dependabot_alerts %}](#viewing-and-prioritizing-dependabot-alerts) (above).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert. Unfixed dismissed alerts can be reopened later.
1. Optionally, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can retrieve or set a comment by using the GraphQL API. The comment is contained in the `dismissComment` field. For more information, see [AUTOTITLE](/graphql/reference/objects#repositoryvulnerabilityalert) in the GraphQL API documentation.

   ![Screenshot of a {% data variables.product.prodname_dependabot %} alert page, with the "Dismiss" dropdown and the option to add a dismissal comment outlined in orange.](/assets/images/help/repository/dependabot-alerts-dismissal-comment.png)

1. Click **Dismiss alert**.

### Dismissing multiple alerts at once

1. View the open {% data variables.product.prodname_dependabot_alerts %}.
1. Optionally, filter the list of alerts by selecting a dropdown menu, then clicking the filter that you would like to apply. You can also type filters into the search bar.
1. To the left of each alert title, select the alerts that you want to dismiss.
   ![Screenshot of the {% data variables.product.prodname_dependabot_alerts %} view. Two alerts are selected and these check boxes are highlighted with an orange outline.](/assets/images/help/graphs/select-multiple-alerts.png)
1. Optionally, at the top of the list of alerts, select all alerts on the page.
   ![Screenshot of the header section of the {% data variables.product.prodname_dependabot_alerts %} view. The "Select all" checkbox is highlighted with a dark orange outline.](/assets/images/help/graphs/select-all-alerts.png)
1. Select the "Dismiss alerts" dropdown, and click a reason for dismissing the alerts.
   ![Screenshot of a list of alerts. Below the "Dismiss alerts" button, a dropdown labeled "Select a reason to dismiss" is expanded.](/assets/images/help/graphs/dismiss-multiple-alerts.png)

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

### Reopening multiple alerts at once

1. View the closed {% data variables.product.prodname_dependabot_alerts %}.
1. To the left of each alert title, select the alerts that you want to reopen by clicking the checkbox adjacent to each alert.
1. Optionally, at the top of the list of alerts, select all closed alerts on the page.
   ![Screenshot of alerts in the "Closed" tab. The "Select all" checkbox is highlighted with a dark orange outline.](/assets/images/help/graphs/select-all-closed-alerts.png)
1. Click **Reopen** to reopen the alerts. Alerts that have already been fixed cannot be reopened.

## Reviewing the audit logs for {% data variables.product.prodname_dependabot_alerts %}

When a member of your organization {% ifversion not fpt %}or enterprise {% endif %}performs an action related to {% data variables.product.prodname_dependabot_alerts %}, you can review the actions in the audit log. For more information about accessing the log, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log){% ifversion not fpt %} and [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise).{% else %}.{% endif %}

![Screenshot of the audit log showing Dependabot alerts.](/assets/images/help/dependabot/audit-log-ui-dependabot-alert.png)

Events in your audit log for {% data variables.product.prodname_dependabot_alerts %} include details such as who performed the action, what the action was, and when the action was performed. The event also includes a link to the alert itself. When a member of your organization dismisses an alert, the event displays the dismissal reason and comment. For information on the {% data variables.product.prodname_dependabot_alerts %} actions, see the `repository_vulnerability_alert` category in [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization#repository_vulnerability_alert){% ifversion not fpt %} and [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#repository_vulnerability_alert).{% else %}.{% endif %}
