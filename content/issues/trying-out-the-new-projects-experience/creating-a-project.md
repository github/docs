---
title: Creating a project (beta)
intro: 'Learn how to make a project, populate it, and add custom fields.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
---

Projects are a customizable collection of items that stay up-to-date with {% data variables.product.company_short %} data. Your projects can track issues, pull requests, and ideas that you jot down. You can add custom fields and create views for specific purposes.

{% data reusables.projects.projects-beta %}

## Creating a project

### Creating an organization project

{% data reusables.projects.create-project %}

### Creating a user project

{% data reusables.projects.create-user-project %}

## Updating your project description and README

{% data reusables.projects.project-description %}

## Adding items to your project

Your project can track draft issues, issues, and pull requests.

### Creating draft issues

Draft issues are useful to quickly capture ideas.

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="plus icon" %}.
1. Type your idea, then press **Enter**.
1. To add body text, click on the title of the draft issue. In the markdown input box that appears, enter the text for the draft issue body, then click **Save**.

Draft issues can have a title, text body, assignees, and any custom fields from your project. In order to populate the repository, labels, or milestones for a draft issue, you must first convert the draft issue to an issue. For more information, see "[Converting draft issues to issues](#converting-draft-issues-to-issues)."

{% note %}

**Note**: Users will not receive notifications when they are assigned to or mentioned in a draft issue unless the draft issue is converted to an issue.

{% endnote %}

### Issues and pull requests

#### Paste the URL of an issue or pull request

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="plus icon" %}.
1. Paste the URL of the issue or pull request.

#### Searching for an issue or pull request

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="plus icon" %}.
2. Enter <kbd>#</kbd>.
3. Select the repository where the pull request or issue is located. You can type part of the repository name to narrow down your options.
4. Select the issue or pull request. You can type part of the title to narrow down your options.

#### Adding multiple issues or pull requests from a repository

1. On {% data variables.product.product_location %}, navigate to the repository that contains the issues or pull requests you want to add to your project.
{% data reusables.repositories.sidebar-issue-pr %}
1. To the left of each issue title, select the issues that you want to add to your project.
  ![Screenshot showing checkbox to select issue or pull request](/assets/images/help/issues/select-issue-checkbox.png)
1. Optionally, to select every issue or pull request on the page, at the top of the list of issues or pull requests, select all. 
  ![Screenshot showing checkbox to select all on screen](/assets/images/help/issues/select-all-checkbox.png)
1. Above the list of issues or pull requests, click **Projects (beta)**. 
  ![Screenshot showing checkbox to select all on screen](/assets/images/help/issues/projects-beta-assign-button.png)
1. Click the projects you want to add the selected issues or pull requests to.
  ![Screenshot showing checkbox to select all on screen](/assets/images/help/issues/projects-beta-assign-dropdown.png)

#### Assigning a project from within an issue or pull request

1. Navigate to the issue or pull request that you want to add to a project.
2. In the side bar, click **Projects**.
3. Select the project that you want to add the issue or pull request to.
4. Optionally, populate the custom fields.

   ![Project sidebar](/assets/images/help/issues/project_side_bar.png)

## Converting draft issues to issues

In table layout:

1. Click the {% octicon "triangle-down" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.
4. Alternatively, edit the `labels`, `milestone`, or `repository` fields of the draft issue that you want to convert.

In board layout:

1. Click the {% octicon "kebab-horizontal" aria-label="the item menu" %} on the draft issue that you want to convert.
2. Select **Convert to issue**.
3. Select the repository that you want to add the issue to.

## Removing items from your project

You can archive an item to keep the context about the item in the project but remove it from the project views. You can delete an item to remove it from the project entirely.

1. Select the item(s) to archive or delete. To select multiple items, do one of the following:
     - <kbd>Command</kbd>+Click (Mac) or <kbd>Ctrl</kbd>+Click (Windows/Linux) each item.
     - Select an item then <kbd>Shift</kbd>+<kbd>↑</kbd> or <kbd>Shift</kbd>+<kbd>↓</kbd> to select additional items above or below the initially selected item.
     - Select an item then <kbd>Shift</kbd>+Click another item to select all items between the two items.
     - Enter <kbd>Command</kbd>+<kbd>A</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>A</kbd> (Windows/Linux) to select all items in a column in a board layout or all items in a table layout.
2. To archive all selected items, enter <kbd>E</kbd>. To delete all selected items, enter <kbd>Del</kbd>. Alternatively, select the {% octicon "triangle-down" aria-label="the item menu" %} (in table layout) or the {% octicon "kebab-horizontal" aria-label="the item menu" %} (in board layout), then select the desired action.

You can restore archived items but not deleted items. For more information, see [Restoring archived items](#restoring-archived-items).

## Restoring archived items

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
1. In the menu, click **Archived items**.
1. Optionally, to filter the archived items displayed, type your filter into the text box above the list of items. For more information about the available filters, see "[Filtering projects (beta)](/issues/trying-out-the-new-projects-experience/filtering-projects)."

   ![Screenshot showing field for filtering archived items](/assets/images/help/issues/filter-archived-items.png)
   
1. To the left of each item title, select the items you would like to restore.

   ![Screenshot showing checkboxes next to archived items](/assets/images/help/issues/select-archived-item.png)
   
1. To restore the selected items, above the list of items, click **Restore**. 

   ![Screenshot showing the "Restore" button](/assets/images/help/issues/restore-archived-item-button.png)

## Adding fields

As field values change, they are automatically synced so that your project and the items that it tracks are up-to-date.

### Showing existing fields

Your project tracks up-to-date information about issues and pull requests, including any changes to the title, assignees, labels, milestones, repository, reviewers, and linked pull requests. When your project initializes, "title" and "assignees" are displayed; the other fields are hidden. You can change the visibility of these fields in your project.

1. {% data reusables.projects.open-command-palette %}
2. Start typing "show".
3. Select the desired command (for example: "Show: Repository").

Alternatively, you can do this in the UI:

1. Click {% octicon "plus" aria-label="the plus icon" %} in the rightmost field header. A drop-down menu with the project fields will appear.
   ![Show or hide fields](/assets/images/help/issues/projects_fields_menu.png)
2. Select the field(s) that you want to display or hide. A {% octicon "check" aria-label="check icon" %} indicates which fields are displayed.

### Adding custom fields

You can add custom fields to your project. Custom fields will display on the side bar of issues and pull requests in the project.

Custom fields can be text, number, date, single select, or iteration:

- Text: The value can be any text.
- Number: The value must be a number.
- Date: The value must be a date.
- Single select: The value must be selected from a set of specified values.
- Iteration: The value must be selected from a set of date ranges (iterations). Iterations in the past are automatically marked as "completed", and the iteration covering the current date range is marked as "current". For more information, see "[Managing iterations in projects](/issues/trying-out-the-new-projects-experience/managing-iterations)."

1. {% data reusables.projects.open-command-palette %} Start typing any part of "Create new field". When "Create new field" displays in the command palette, select it.
2. Alternatively, click {% octicon "plus" aria-label="the plus icon" %} in the rightmost field header. A drop-down menu with the project fields will appear. Click **New field**.
3. A popup will appear for you to enter information about the new field.
   ![New field](/assets/images/help/issues/projects_new_field.png)
4. In the text box, enter a name for the new field.
5. Select the dropdown menu and click the desired type.
6. If you specified **Single select** as the type, enter the options.
7. If you specified **Iteration** as the type, enter the start date of the first iteration and the duration of the iteration. Three iterations are automatically created, and you can add additional iterations on the project's settings page.

You can later edit the drop down options for single select and iteration fields.

{% data reusables.projects.project-settings %}
1. Under **Fields**, select the field that you want to edit.
1. For single select fields, you can add, delete, or reorder the options.
1. For iteration fields, you can add or delete iterations, change iteration names, and change the start date and duration of the iteration.

   For more information on modifying iteration fields, see "[Managing iterations in projects](/issues/trying-out-the-new-projects-experience/managing-iterations)."

## Customizing your views

You can view your project as a table or board, group items by field, filter item, and more. For more information, see "[Customizing your project (beta) views](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)."

## Configuring built-in automation

{% data reusables.projects.about-workflows %}

You can enable or disable the built-in workflows for your project.

{% data reusables.projects.enable-basic-workflow %}

## Adding your project to a repository

You can list relevant projects in a repository. You can only list projects that are owned by the same user or organization that owns the repository.

In order for repository members to see a project listed in a repository, they must have visibility for the project. For more information, see "[Managing the visibility of your projects (beta)](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)" and "[Managing access to projects (beta)](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)."

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of your repository.
1. Click {% octicon "table" aria-label="the project icon" %} **Projects**.
1. Click **Projects (Beta)** in the side bar.
1. Click **Add project**.
1. In the search bar that appears, search for projects that are owned by the same user or organization that owns the repository.
1. Click on a project to list it in your repository.
