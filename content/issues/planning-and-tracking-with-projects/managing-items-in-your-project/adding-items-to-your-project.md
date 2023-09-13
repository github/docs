---
title: 'Adding items to your {% data variables.projects.project_v2 %}'
shortTitle: Adding items
intro: 'Learn how to add pull requests, issues, and draft issues to your projects individually or in bulk.'
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

{% note %}

**Note:** A project can contain a maximum of {% data variables.projects.item_limit %} items and {% data variables.projects.archived_item_limit %} archived items. {% ifversion projects-v2-auto-archive %}To learn more about automatically archiving items when they meet specific criteria, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)."{% endif %}

{% endnote %}

## Adding issues and pull requests to a project

You have several options for adding issues and pull requests to your project. You can add them individually{% ifversion projects-v2-auto-add %}, automatically, {% endif %} or in bulk. Furthermore, you can include issues and pull requests from any organization, and you also have the ability to add draft issues that can be converted into regular issues later on. For more information, see "[Creating draft issues](#creating-draft-issues).

{% ifversion projects-v2-timeline-events %}

{% note %}

**Note:** Timeline events for Projects is currently in beta and subject to change.

{% endnote %}

When you add an issue or pull request to your project, an event will be added to the issue or pull request's timeline. Timeline events will also be added when you remove issues or pull requests and when changes are made to its `status` field for those items. Timeline events are only visible to people who have at least read permission for the project. If a change is made by a built-in workflow, the activity will be attributed to **@github-project-automation**.

{% endif %}

{% ifversion projects-v2-bulk-table-editing %}

For more information about making bulk changes to your items after adding them, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/editing-items-in-your-project)."

{% endif %}

{% ifversion projects-v2-auto-add %}

### Automatically adding issues and pull requests

You can configure a built-in workflow to automatically add issues and pull requests from a repository when they meet specific filter criteria. For more information about configuring a workflow, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically)."

{% endif %}

### Pasting the URL of an issue or pull request

You can copy the URL of an issue or pull request into your clipboard and paste that into your project.

{% data reusables.projects.add-item-via-paste %}

### Searching for an issue or pull request

If you know the issue or pull request number or if you know part of the title, you can search for an issue or pull request directly from your project.

{% data reusables.projects.add-item-bottom-row %}
1. To open the list of repositories, type <kbd>#</kbd>.
1. Select the repository where the pull request or issue is located. You can type part of the repository name to narrow down your options.
1. Select the issue or pull request. You can type part of the title to narrow down your options.

### Bulk adding issues and pull requests

You can add multiple issues and pull requests from your project and use filters, such as `label:bug`, to narrow down your search.

1. In the bottom row of the project, click {% octicon "plus" aria-hidden="true" %}.
   ![Screenshot showing the bottom row of a table view. The "+" button is highlighted with an orange outline.](/assets/images/help/projects-v2/omnibar-add.png)
1. Click **Add item from repository**.
{% data reusables.projects.bulk-add %}

### Adding multiple issues or pull requests from a repository

You can also add issues and pull requests to your project from a repository's issue and pull request lists.

1. On {% data variables.location.product_location %}, navigate to the repository that contains the issues or pull requests you want to add to your project.
{% data reusables.repositories.sidebar-issue-pr %}
1. Select the issues or pull requests you want to add to your project.

   - To select individual issues or pull requests, to the left of the title of each issue or pull request you want to add to your project, select the checkbox.

      ![Screenshot of the first two issues in the list of issues for a repository. To the left of each issue, a checkbox is outlined in dark orange.](/assets/images/help/issues/select-issue-checkbox.png)
   - To select every issue or pull request on the page, at the top of the list of issues or pull requests, select all.

      ![Screenshot of the list of issues for a repository. In the header above the list, a checkbox to select all issues is outlined in dark orange.](/assets/images/help/issues/select-all-checkbox.png)
1. Above the list of issues or pull requests, click **Projects**.
1. Click the projects you want to add the selected issues or pull requests to.

### Assigning a project from within an issue or pull request

You can also add an issue or pull request to your project from within the issue or pull request itself.

1. Navigate to the issue or pull request that you want to add to a project.
1. In the side bar, click **Projects**.
   ![Screenshot showing an issue's sidebar. "Projects" is highlighted with an orange outline.](/assets/images/help/projects-v2/issue-sidebar-projects.png)
1. Select the project that you want to add the issue or pull request to.
1. Optionally, populate the custom fields.

### Using the command palette to add an issue or pull request

You can use the command palette when viewing your project to quickly add items.

1. {% data reusables.projects.open-command-palette %}
1. Start typing "Add items" and press <kbd>Return</kbd>.
{% data reusables.projects.bulk-add %}

{% ifversion projects-v2-create-issue-modal %}

## Creating issues

{% data reusables.projects.about-issue-modal %}

{% data reusables.projects.create-issue-modal %}

{% endif %}

## Creating draft issues

Draft issues are useful to quickly capture ideas. Unlike issues and pull requests that are referenced from your repositories, draft issues exist only in your project.

{% data reusables.projects.add-draft-issue %}

Draft issues can have a title, text body, assignees, and any custom fields from your project. In order to populate the repository, labels, or milestones for a draft issue, you must first convert the draft issue to an issue. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)."

{% note %}

**Note**: Users will not receive notifications when they are assigned to or mentioned in a draft issue unless the draft issue is converted to an issue.

{% endnote %}
