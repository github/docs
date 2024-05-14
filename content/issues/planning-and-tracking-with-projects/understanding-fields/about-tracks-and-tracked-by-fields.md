---
title: About Tracks and Tracked by fields
shortTitle: About Tracks and Tracked by fields
intro: You can view the subtasks of the issues in your projects.
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
---

{% note %}

**Note:** Tasklists and the tracks and tracked by fields for Projects are currently in beta and subject to change.

{% endnote %}

You can enable the "Tracks" and "Tracked by" fields on your projects to see the relationships between your issues as you add subtasks in tasklists. For more information about creating issue hierarchies in tasklists, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/about-tasklists)."

The "Tracked by" field can be used to group items, creating a view that clearly shows the subtasks of each issue and the work required to complete them. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#grouping-by-field-values-in-table-layout)."

You can also filter by the "Tracked by" field to display only items that are tracked by specific issues. You can start by typing "tracked-by" and select an issue from the list. Or, if you know the repository and issue number, you can type the following filter in full:

```text
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

To use the filter, replace `<OWNER>` with the repository owner, `<REPO>` with the repository name, and `<ISSUE NUMBER>` with the issue number. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)."

## Enabling the Tracked by field

You can enable the "Tracked by" field to see which issues are tracking an item in your project.

1. In table view, in the rightmost field header, click {% octicon "plus" aria-label="the plus icon" %}.

   ![Screenshot of a project. The "Add field" button, indicated by a plus icon, is highlighted with an orange outline.](/assets/images/help/projects-v2/new-field-button.png)

1. Under "Hidden fields", click **Tracked by**.

## Enabling the Tracks field

You can enable the "Tracks" field to see what other issues an item in your project is tracking.

1. In table view, in the rightmost field header, click {% octicon "plus" aria-label="the plus icon" %}.

   ![Screenshot of a project. The "Add field" button, indicated by a plus icon, is highlighted with an orange outline.](/assets/images/help/projects-v2/new-field-button.png)

1. Under "Hidden fields", click **Tracks**.
