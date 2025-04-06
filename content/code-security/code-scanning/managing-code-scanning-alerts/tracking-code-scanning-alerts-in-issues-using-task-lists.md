---
title: Tracking code scanning alerts in issues using task lists
shortTitle: Track alerts in issues
intro: You can add code scanning alerts to issues using task lists. This makes it easy to create a plan for development work that includes fixing alerts.
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
redirect_from:
  - /code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/tracking-code-scanning-alerts-in-issues-using-task-lists
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
---

{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## About tracking {% data variables.product.prodname_code_scanning %} alerts in issues

{% data variables.product.prodname_code_scanning_caps %} alerts integrate with task lists in {% data variables.product.prodname_github_issues %} to allow you to prioritize and track alerts with all your development work. To track a {% data variables.product.prodname_code_scanning %} alert in an existing issue, add the URL for the alert as a task list item in the issue. For more information about task lists, see "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)."

You can also quickly create a new issue to track an alert:
* From a {% data variables.product.prodname_code_scanning %} alert. For more information, see "[Creating a tracking issue from a {% data variables.product.prodname_code_scanning %} alert](#creating-a-tracking-issue-from-a-code-scanning-alert)."
* From the API. For more information, see "[Creating a tracking issue from the API](#creating-a-tracking-issue-from-the-api)."

You can use more than one issue to track the same {% data variables.product.prodname_code_scanning %} alert, and issues can belong to different repositories from the repository where the {% data variables.product.prodname_code_scanning %} alert was found.

{% data variables.product.product_name %} provides visual cues in different locations of the user interface to indicate when you are tracking {% data variables.product.prodname_code_scanning %} alerts in issues.

* The {% data variables.product.prodname_code_scanning %} alerts list page will show which alerts are tracked in issues so that you can view at a glance which alerts still require processing and how many issues they are tracked in.

  ![Screenshot of the {% data variables.product.prodname_code_scanning %} alerts view. The first entry includes the issue icon followed by the number 2. The third entry includes the issue icon followed by the number 1. Both are outlined in dark orange.](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

* A "tracked in" section will also show in the corresponding alert page.

  ![Screenshot of a {% data variables.product.prodname_code_scanning %} alert. Under the alert title, "Tracked by #1, #2" is outlined in dark orange.](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png)

* On the tracking issue, {% data variables.product.prodname_dotcom %} displays a security badge icon in the task list and on the hovercard.

  {% note %}

  Only users with write permissions to the repository will see the unfurled URL to the alert in the issue, as well as the hovercard. For users with read permissions to the repository, or no permissions at all, the alert will appear as a plain URL.

  {% endnote %}

  The color of the icon is grey because an alert has a status of "open" or "closed" on every branch. The issue tracks an alert, so the alert cannot have a single open/closed state in the issue. If the alert is closed on one branch, the icon color will not change.

  ![Screenshot showing an issue that tracks a {% data variables.product.prodname_code_scanning %} alert. The hovercard for the alert is displayed, with a grey security badge icon preceding the title.](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

The status of the tracked alert won't change if you change the checkbox state of the corresponding task list item (checked/unchecked) in the issue.

## Creating a tracking issue

Instead of tracking a {% data variables.product.prodname_code_scanning %} alert in an existing issue, you can create a new issue to track an alert directly. You can create tracking issues for {% data variables.product.prodname_code_scanning %} alerts from the alert itself, or from the API.

### Creating a tracking issue from a {% data variables.product.prodname_code_scanning %} alert

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.explore-alert %}
1. Optionally, to find the alert to track, you can use the free-text search or the drop-down menus to filter and locate the alert. For more information, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts)."
1. Towards the top of the page, on the right side, click **Create issue**.

   ![Screenshot of a {% data variables.product.prodname_code_scanning %} alert. The "Create issue" button is outlined in dark orange.](/assets/images/help/repository/code-scanning-create-issue-for-alert.png)

   {% data variables.product.prodname_dotcom %} automatically creates an issue to track the alert and adds the alert as a task list item.
   {% data variables.product.prodname_dotcom %} prepopulates the issue:
   * The title contains the name of the {% data variables.product.prodname_code_scanning %} alert.
   * The body contains the task list item with the full URL to the {% data variables.product.prodname_code_scanning %} alert.
1. Optionally, edit the title and the body of the issue.
   {% warning %}

    **Warning:** You may want to edit the title of the issue as it may expose security information. You can also edit the body of the issue. Make sure that you keep the task list item with a link to the alert otherwise the issue will no longer track the alert.
   {% endwarning %}

1. Click **Submit new issue**.

### Creating a tracking issue from the API

1. Begin creating an issue through the API. For more information, see "[Create an issue](/rest/issues/issues#create-an-issue)."
1. Provide the code scanning link within the body of the issue. You must use the following task list syntax to create the tracked relationship: `- [ ] FULL-URL-TO-THE-CODE-SCANNING-ALERT`.

   For example, if you add `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` to an issue, the issue will track the {% data variables.product.prodname_code_scanning %} alert that has an ID number of 17 in the **Security** tab of the `octocat-repo` repository in the `octocat-org` organization.
