---
title: Creating a project (beta)
intro: 'Learn how to make a project, populate it, and add custom fields.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: quick_start
topics:
  - Projects
---

Projects are a customizable collection of items that stay up-to-date with {% data variables.product.company_short %} data. Your projects can track issues, pull requests, and ideas that you jot down. You can add custom fields and create views for specific purposes.

{% data reusables.projects.projects-beta %}

## Creating a project

{% data reusables.projects.create-project %}

## Adding items to your project

Your project can track draft issues, issues, and pull requests.

### Creating draft issues

Draft issues are useful to quickly capture ideas.

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="plus icon" %}.
2. Type your idea, then press **Enter**.

### Issues and pull requests

#### Paste the URL of an issue or pull request

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="plus icon" %}.
1. Paste the URL of the issue or pull request.

#### Searching for an issue or pull request

1. Place your cursor in the bottom row of the project, next to the {% octicon "plus" aria-label="plus icon" %}.
2. Enter `#`.
3. Select the repository where the pull request or issue is located. You can type part of the repository name to narrow down your options.
4. Select the issue or pull request. You can type part of the title to narrow down your options.

#### Assigning a project from within an issue or pull request

1. Navigate to the issue or pull request that you want to add to a project.
2. In the side bar, click **Projects**.
3. Select the project that you want to add the issue or pull request to.
4. Optionally, populate the custom fields.

   ![Project sidebar](/assets/images/help/issues/project_side_bar.png)

## Adding fields

As field values change, they are automatically synced so that your project and the items that it tracks are up-to-date.

{% note %}

**Note:** You cannot edit or add fields until you add at least one item to your project.

{% endnote %}

### Showing existing fields

Your project tracks up-to-date information about  issues and pull requests, including any changes to the title, assignees, labels, milestones, and repository. When your project initializes, "title" and "assignees" are displayed; the other fields are hidden. You can change the visibility of these fields in your project.

1. {% data reusables.projects.open-command-palette %}
2. Start typing "show".
3. Select the desired command (for example: "Show: Repository").

Alternatively, you can do this in the UI:

1. Click {% octicon "plus" aria-label="the plus icon" %} in the rightmost field header. A drop-down menu with the project fields will appear.
   ![Show or hide fields](/assets/images/help/issues/projects_fields_menu.png)
2. Select the field(s) that you want to display or hide. A {% octicon "check" aria-label="check icon" %} indicates which fields are displayed.

### Adding custom fields

You can add custom fields to your project. Custom fields can be text, number, date, or single select. Custom fields will display on the side bar of issues and pull requests in the project.

1. {% data reusables.projects.open-command-palette %} Start typing any part of "Create new field". When "Create new field" displays in the command palette, select it.
2. Alternatively, click {% octicon "plus" aria-label="the plus icon" %} in the rightmost field header. A drop-down menu with the project fields will appear. Click **New field**.
3. A popup will appear for you to enter information about the new field.
   ![New field](/assets/images/help/issues/projects_new_field.png)
4. In the text box, enter a name for the new field.
5. Select the dropdown menu and click the desired type.
6. If you specified "single select" as the type, enter the options.

## Customize your views

You can view your project as a table or board, group items by field, filter item, and more. For more information, see "[Customizing your project (beta) views](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)."
