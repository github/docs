---
title: 'Quickstart for {% data variables.product.prodname_projects_v2 %}'
intro: 'Experience the speed, flexibility, and customization of {% data variables.product.prodname_projects_v2 %} by creating a project in this interactive guide.'
allowTitleToDifferFromFilename: true
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
---

## Introduction

This guide demonstrates how to use {% data variables.product.prodname_projects_v2 %} to plan and track work. In this guide, you will create a new project and add a custom field to track priorities for your tasks. You'll learn how to create saved views that help you communicate priorities and progress with your collaborators. You'll also set up built-in workflows to manage the items in your project.

## Prerequisites

You can either create an organization project or a user project. To create an organization project, you need a {% data variables.product.prodname_dotcom %} organization. For more information about creating an organization, see "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)."

In this guide, you will add existing issues from repositories owned by your organization (for organization projects) or by you (for user projects) to your new project. For more information about creating issues, see "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue)."

## Creating a project

First, create an organization project or a user project.

### Creating an organization project

{% data reusables.projects.create-project %}

### Creating a user project

{% data reusables.projects.create-user-project %}

## Setting your project description and README

{% data reusables.projects.project-description %}

## Adding issues to your project

Next, add a few issues to your project.

{% data reusables.projects.add-item-via-paste %}

Repeat the above steps a few times to add multiple issues to your project.

For more information and other ways to add issues to your project, or about other items you can add to your project, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)."

## Adding draft issues to your project

Next, add a draft issue to your project.

{% data reusables.projects.add-draft-issue %}

## Adding an iteration field

Next, create an iteration field so you can plan and track your work over repeating blocks of time. Iterations can be configured to suit how you and your team works, with customizable lengths and the ability to insert breaks.

{% data reusables.projects.new-field %}
1. Select **Iteration**
   ![Screenshot showing the iteration option](/assets/images/help/projects-v2/new-field-iteration.png)
3. To change the duration of each iteration, type a new number, then select the dropdown and click either **days** or **weeks**.
   ![Screenshot showing the iteration duration](/assets/images/help/projects-v2/iteration-field-duration.png)
4. Click **Save**.
   ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save-and-create.png)

## Creating a field to track priority

Now, create a custom field named `Priority` and containing the values: `High`, `Medium`, or `Low`.

{% data reusables.projects.new-field %}
1. Select **Single select**
   ![Screenshot showing the single select option](/assets/images/help/projects-v2/new-field-single-select.png)
1. Below "Options", type the first option, "High".
   ![Screenshot showing the single select option](/assets/images/help/projects-v2/priority-example.png)
1. To add additional fields, for "Medium" and "Low", click **Add option**.
1. Click **Save**.
   ![Screenshot showing save button](/assets/images/help/projects-v2/new-field-save.png)

Specify a priority for all issues in your project.

![Example priorities](/assets/images/help/projects/priority_example.png)

## Grouping issues by priority

Next, group all of the items in your project by priority to make it easier to focus on the high priority items.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "rows" aria-label="the rows icon" %} **Group**.
   ![Screenshot showing the group menu item](/assets/images/help/projects-v2/group-menu-item.png)
1. Click **Priority**.
   ![Screenshot showing the group menu](/assets/images/help/projects-v2/group-menu.png)

Now, move issues between groups to change their priority.

1. Choose an issue.
2. Drag and drop the issue into a different priority group. When you do this, the priority of the issue will change to be the priority of its new group.

![Move issue between groups](/assets/images/help/projects/move_between_group.gif)

## Saving the priority view

When you grouped your issues by priority in the previous step, your project displayed an indicator to show that the view was modified. Save these changes so that your collaborators will also see the tasks grouped by priority.

{% data reusables.projects.save-view %}

You can share the URL with your team to keep everyone aligned on the project priorities.

When a view is saved, anyone who opens the project will see the saved view. Here, you grouped by priority, but you can also add other modifiers such as sort, filter, or layout. Next, you will create a new view with the layout modified.

## Adding a board layout

To view the progress of your project's issues, you can switch to board layout.

The board layout is based on the status field, so specify a status for each issue in your project.

![Example status](/assets/images/help/projects/status_example.png)

Then, create a new view.

{% data reusables.projects.new-view %}

Next, switch to board layout.

{% data reusables.projects.open-view-menu %}
1. Under "Layout", click **Board**.
   ![Screenshot showing layout option](/assets/images/help/projects-v2/table-or-board.png)

![Example priorities](/assets/images/help/projects/example_board.png)

When you changed the layout, your project displayed an indicator to show that the view was modified. Save this view so that you and your collaborators can easily access it in the future.

{% data reusables.projects.save-view %}

To indicate the purpose of the view, give it a descriptive name.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**.
   ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save changes, press <kbd>Return</kbd>.

![Example priorities](/assets/images/help/projects/project-view-switch.gif)

{% ifversion projects-v2-workflows %}

## Configure built-in automation

{% ifversion projects-v2-auto-add %}

Next, configure the auto-add workflow to automatically add issues opened in a repository with a specific label to your project. 

{% data reusables.projects.access-workflows %}
1. In the "Default workflows" list, click **Auto-add to project**.
   
   ![Screenshot showing auto-add workflow](/assets/images/help/projects-v2/workflow-autoadd.png)
   
1. To start editing the workflow, in the top right, click **Edit**.
   
   ![Screenshot showing edit button](/assets/images/help/projects-v2/workflow-start-editing.png)
   
1. Under "Filters", select the repository you want to add items from.
   
   ![Screenshot showing repository select](/assets/images/help/projects-v2/workflow-autoadd-repo.png)
   
1. Next to the repository selection, type the filter criteria you want items to match before they are automatically added to your project. For example, to catch all issues and PRs opened with the label "bug", use `is:issue,pr label:bug`.
   
   ![Screenshot showing repository select](/assets/images/help/projects-v2/workflow-autoadd-filter.png)
   
1. To enable the new workflow, click **Save and turn on workflow**.
   
   ![Screenshot showing autoadd workflows](/assets/images/help/projects-v2/workflow-save-and-turn-on.png)

{% endif %}

Finally, add a built in workflow to set the status to **Todo** when an item is added to your project.

1. In the top-right, click {% octicon "kebab-horizontal" aria-label="The menu icon" %} to open the menu.
  ![Screenshot showing the menu icon](/assets/images/help/projects-v2/open-menu.png)
1. In the menu, click {% octicon "workflow" aria-label="The workflow icon" %} **Workflows**.
  ![Screenshot showing the 'Workflows' menu item](/assets/images/help/projects-v2/workflows-menu-item.png)
1. Under **Default workflows**, click **Item added to project**.
  ![Screenshot showing default workflows](/assets/images/help/projects-v2/default-workflows.png)
1. Next to **When**, ensure that both `issues` and `pull requests` are selected.
  ![Screenshot showing the "when" configuration for a workflow](/assets/images/help/projects-v2/workflow-when.png)
1. Next to **Set**, select **Status:Todo**.
  ![Screenshot showing the "set" configuration for a workflow](/assets/images/help/projects-v2/workflow-set.png)
1. Click the **Disabled** toggle to enable the workflow.
  ![Screenshot showing the "enable" control for a workflow](/assets/images/help/projects-v2/workflow-enable.png)

{% endif %}

## Further reading

- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)"
- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view)"
