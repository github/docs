---
title: Managing alerts that have been automatically dismissed by a Dependabot auto-triage rule
intro: 'You can filter to see which alerts have been auto-dismissed by a rule, and you can reopen dismissed alerts.'
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.dependabot-auto-triage-rules %}'
versions:
  feature: dependabot-auto-triage-rules
type: how_to
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Manage auto-dismissed alerts
redirect_from:
  - /code-security/dependabot/dependabot-alert-rules/managing-automatically-dismissed-alerts
---

## Managing automatically dismissed alerts

> [!NOTE]
> The {% data variables.product.prodname_dependabot_alerts %} page defaults to showing open alerts. To filter and view auto-dismissed alerts, you must first clear the `is:open` default filter from the view.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. To filter to see all closed alerts, click **{% octicon "check" aria-hidden="true" %} Closed**. Alternatively, use the `is:closed` filter query in the search bar.

   ![Screenshot of the "Dependabot Alerts" page. A button, labelled "Closed" is highlighted with an orange outline.](/assets/images/help/repository/dependabot-alerts-closed-tab.png)

1. To see all auto-dismissed alerts, select **Closed as**, then in the dropdown menu, click **Auto-dismissed**.

   ![Screenshot of the "Dependabot Alerts" page. A button, labelled "Closed as" is highlighted with an orange outline.](/assets/images/help/repository/dependabot-alerts-closed-as.png)

1. To reopen an auto-dismissed alert, to the left of the alert title, click the checkbox adjacent to the alert, then click **Reopen**.

   ![Screenshot of an alert title on the "Dependabot Alerts" page. To the left of the alert, a checkbox is highlighted in an orange outline.](/assets/images/help/repository/dependabot-reopen-closed-alert.png)
