---
title: Adding sub-issues
intro: 'Learn about using sub-issues to break down your work into tasks.'
versions:
  feature: 'sub-issues'
type: overview
topics:
  - Project management
permissions: 'People with at least triage permissions for a repository can add sub-issues.'
redirect_from:
  - /early-access/issues/about-tasklists
  - /issues/tracking-your-work-with-issues/about-tasklists
  - /issues/managing-your-tasks-with-tasklists/about-tasklists
  - /issues/managing-your-tasks-with-tasklists/creating-a-tasklist
  - /issues/managing-your-tasks-with-tasklists
  - /issues/managing-your-tasks-with-tasklists/managing-tasks-in-a-tasklist
  - /issues/managing-your-tasks-with-tasklists/quickstart-for-tasklists
  - /issues/managing-your-tasks-with-tasklists/using-projects-and-tasklists
---

You can add sub-issues to an issue to break down larger pieces of work into tasks. Your sub-issues show their relationship to the parent issue allowing you to track your work across {% data variables.product.github %}. Parent issues and sub-issue progress is also available in your {% data variables.projects.projects_v2 %}, allowing you to build views, filter, and group by parent issue.

Your sub-issues can themselves contain sub-issues, allowing you to create full hierarchies of issues that visualize entire projects or pieces of work and show the relationships between your issues.

You can add up to {% data variables.projects.sub-issue_limit %} sub-issues per parent issue and create up to eight levels of nested sub-issues.

## Creating a sub-issue

1. Navigate to the issue that you want to add a sub-issue to.
1. At the bottom of the issue description, click **Create sub-issue**.
1. In the dialog, type the title for your sub-issue.
1. Optionally, type the description for your issue, and set {% ifversion issue-types %}the issue type and{% endif %} any assignees, labels, projects, and milestones.
1. Optionally, if you want to continue create sub-issues for this parent issue, select **Create more sub-issues**.
1. Click **Create**.

## Adding an existing issue as a sub-issue

1. Navigate to the issue that you want to add a sub-issue to.
1. At the bottom of the issue description, next to "Create sub-issue", click {% octicon "triangle-down" aria-label="View more sub-issue options" %}.

   ![Screenshot of the sub-issues section below the issue description. The "View more sub-issue options" button is highlighted with an orange rectangle.](/assets/images/help/issues/sub-issue-drop-down.png)

1. In the drop-down menu, click **Add existing issue**.
1. Select the issue that you want to add as a sub-issue.
    * Select an issue from one of the suggestions.
    * In the "Search issues" field, type an issue title or issue number, then click on the results.
    * To add issues from other repositories, click {% octicon "arrow-left" aria-label="Back to repository selection" %} next to the repository name and select a different repository.
