---
title: Linking code scanning alerts to GitHub issues
shortTitle: Track alerts in issues
intro: Create or connect {% data variables.product.github %} issues to {% data variables.product.prodname_code_scanning %} alerts to track security fixes in your team's workflow.
permissions: People with write access for the repository can link {% data variables.product.prodname_code_scanning %} alerts to issues.
versions:
  feature: code-scanning-link-alert-to-issue
contentType: how-tos
category:
  - Find and fix code vulnerabilities
---

{% data reusables.code-scanning.alert-tracking-with-issues-preview-note %}

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

When {% data variables.product.prodname_code_scanning %} identifies a vulnerability, you can link it to a new or existing {% data variables.product.github %} issue. This makes security fixes visible in your planning and project boards alongside your team's regular development work. For more information about how alert tracking works, see [AUTOTITLE](/code-security/concepts/code-scanning/code-scanning-alert-tracking-using-issues).

## Creating an issue from an alert

Create a new issue directly from a {% data variables.product.prodname_code_scanning %} alert, pre-populated with vulnerability details.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.explore-alert %}
1. On the right of the alert page, click **Tracking**.
1. From the dropdown list, select **Create issue**.
   * Select the repository to create the issue in.
   * If applicable, select the template to use for your new issue.
1. Fill in the issue, providing as much detail as possible.
1. Optionally, assign the issue to a team member, add labels, or add it to a project.
1. Click **Create**.

The newly created issue automatically links to the alert. View it by clicking the issue icon below the alert name.

## Linking an alert to an existing issue

Connect an existing issue to a {% data variables.product.prodname_code_scanning %} alert.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.explore-alert %}
1. On the right of the alert page, click **Tracking**.
1. From the dropdown list, select **Add existing {% data variables.product.github %} issue**.
1. Search by issue number or title, or select a different repository by clicking the Back icon.
1. Click the issue you want to link.

You can link to issues in different repositories, as long as you have access and {% data variables.product.prodname_github_issues %} is enabled.

## Viewing linked issues

Once you link an issue to an alert, you can view the linked issue in two places:

* **On the alert detail page**: Click the issue icon below the alert name to navigate to the full issue details.
* **In the list of {% data variables.product.prodname_code_scanning %} alerts**: Linked issues appear alongside their corresponding alerts in the main alerts list view.

## Changing or unlinking a linked issue

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-code-scanning-alerts %}
{% data reusables.code-scanning.explore-alert %}
1. On the right of the alert page, click **Tracking**.
1. Click **Change or remove issue**.

When you unlink an issue from an alert, the link is removed from the alert page and alert list. The issue itself remains unchanged.
