---
title: Tracking code scanning alerts in issues using task lists
shortTitle: Track alerts in issues
intro: You can add code scanning alerts to issues using task lists. This makes it easy to create a plan for development work that includes fixing alerts.
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
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

{% data reusables.code-scanning.github-issues-integration %}

You can also create a new issue to track an alert:
- From a {% data variables.product.prodname_code_scanning %} alert, which automatically adds the code scanning alert to a task list in the new issue. For more information, see "[Creating a tracking issue from a {% data variables.product.prodname_code_scanning %} alert](#creating-a-tracking-issue-from-a-code-scanning-alert)" below.

- Via the API as you normally would, and then provide the code scanning link within the body of the issue. You must use the task list syntax to create the tracked relationship: 
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - For example, if you add `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17` to an issue, the issue will track the code scanning alert that has an ID number of 17 in the "Security" tab of the `octocat-repo` repository in the `octocat-org` organization.

You can use more than one issue to track the same {% data variables.product.prodname_code_scanning %} alert, and issues can belong to different repositories from the repository where the {% data variables.product.prodname_code_scanning %} alert was found.


{% data variables.product.product_name %} provides visual cues in different locations of the user interface to indicate when you are tracking {% data variables.product.prodname_code_scanning %} alerts in issues.

- The code scanning alerts list page will show which alerts are tracked in issues so that you can view at a glance which alerts still require processing.

  ![Tracked in pill on code scanning alert page](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- A "tracked in" section will also show in the corresponding alert page. 

  {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
  ![Tracked in section on code scanning alert page](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png)
  {% else %}
  ![Tracked in section on code scanning alert page](/assets/images/enterprise/3.4/repository/code-scanning-alert-tracked-in-pill.png)
  {% endif %}

- On the tracking issue, {% data variables.product.prodname_dotcom %} displays a security badge icon in the task list and on the hovercard. 
  
  {% note %}

  Only users with write permissions to the repository will see the unfurled URL to the alert in the issue, as well as the hovercard. For users with read permissions to the repository, or no permissions at all, the alert will appear as a plain URL.

  {% endnote %}
  
  The color of the icon is grey because an alert has a status of "open" or "closed" on every branch. The issue tracks an alert, so the alert cannot have a single open/closed state in the issue. If the alert is closed on one branch, the icon color will not change.

  ![Hovercard in tracking issue](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

The status of the tracked alert won't change if you change the checkbox state of the corresponding task list item (checked/unchecked) in the issue.

## Creating a tracking issue from a code scanning alert

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% ifversion fpt or ghes or ghae %}
{% data reusables.code-scanning.explore-alert %}
1. Optionally, to find the alert to track, you can use the free-text search or the drop-down menus to filter and locate the alert. For more information, see "[Managing code scanning alerts for your repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts)."
{% endif %}
1. Towards the top of the page, on the right side, click **Create issue**. 
   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
   ![Create a tracking issue for the code scanning alert](/assets/images/help/repository/code-scanning-create-issue-for-alert.png)
   {% else %}
   ![Create a tracking issue for the code scanning alert](/assets/images/enterprise/3.4/repository/code-scanning-create-issue-for-alert.png)
   {% endif %}
   {% data variables.product.prodname_dotcom %} automatically creates an issue to track the alert and adds the alert as a task list item.
   {% data variables.product.prodname_dotcom %} prepopulates the issue:
   - The title contains the name of the {% data variables.product.prodname_code_scanning %} alert.
   - The body contains the task list item with the full URL to the {% data variables.product.prodname_code_scanning %} alert. 
2. Optionally, edit the title and the body of the issue.
   {% warning %}

    **Warning:** You may want to edit the title of the issue as it may expose security information. You can also edit the body of the issue, but do not edit the task list item or the issue will no longer track the alert.
   {% endwarning %}

   ![New tracking issue for the code scanning alert](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. Click **Submit new issue**.
