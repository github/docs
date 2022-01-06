GitHub Docs
Creating a project (beta)
In this article
Creating a project
Creating an organization project
Creating a user project
Adding items to your project
Creating draft issues
Issues and pull requests
Converting draft issues to issues
Removing items from your project
Restoring archived items
Adding fields
Showing existing fields
Adding custom fields
Customizing your views
Configuring built-in automation
Learn how to make a project, populate it, and add custom fields.

Projects are a customizable collection of items that stay up-to-date with GitHub data. Your projects can track issues, pull requests, and ideas that you jot down. You can add custom fields and create views for specific purposes.

Note: Projects (beta) is currently in public beta and subject to change.

Creating a project
Creating an organization project
On GitHub, navigate to the main page of your organization.

Click  Projects.

Select the New project drop-down menu and click New project (Beta).

New project

Creating a user project
On any GitHub page, click on your avatar, then select Your projects.

Select the New project drop-down menu and click New project (Beta).

New project

Adding items to your project
Your project can track draft issues, issues, and pull requests.

Creating draft issues
Draft issues are useful to quickly capture ideas.

Place your cursor in the bottom row of the project, next to the .
Type your idea, then press Enter.
You can convert draft issues into issues. For more information, see Converting draft issues to issues.

Issues and pull requests
Paste the URL of an issue or pull request
Place your cursor in the bottom row of the project, next to the .
Paste the URL of the issue or pull request.
Searching for an issue or pull request
Place your cursor in the bottom row of the project, next to the .
Enter #.
Select the repository where the pull request or issue is located. You can type part of the repository name to narrow down your options.
Select the issue or pull request. You can type part of the title to narrow down your options.
Assigning a project from within an issue or pull request
Navigate to the issue or pull request that you want to add to a project.

In the side bar, click Projects.

Select the project that you want to add the issue or pull request to.

Optionally, populate the custom fields.

Project sidebar

Converting draft issues to issues
In table layout:

Click the  on the draft issue that you want to convert.
Select Convert to issue.
Select the repository that you want to add the issue to.
Alternatively, edit the assignee, labels, milestone, or repository fields of the draft issue that you want to convert.
In board layout:

Click the  on the draft issue that you want to convert.
Select Convert to issue.
Select the repository that you want to add the issue to.
Removing items from your project
You can archive an item to keep the context about the item in the project but remove it from the project views. You can delete an item to remove it from the project entirely.

Select the item(s) to archive or delete. To select multiple items, do one of the following:
cmd + click (Mac) or ctrl + click (Windows/Linux) each item.
Select an item then shift + arrow-up or shift + arrow-down to select additional items above or below the intitially selected item.
Select an item then shift + click another item to select all items between the two items.
Enter cmd + a (Mac) or ctrl + a (Windows/Linux) to select all items in a column in a board layout or all items in a table layout.
To archive all selected items, enter e. To delete all selected items, enter del. Alternatively, select the  (in table layout) or the  (in board layout), then select the desired action.
You can restore archived items but not deleted items. For more information, see Restoring archived items.

Restoring archived items
To restore an archived item, navigate to the issue or pull request. In the project side bar on the issue or pull request, click Restore for the project that you want to restore the item to. Draft issues cannot be restored.

Adding fields
As field values change, they are automatically synced so that your project and the items that it tracks are up-to-date.

Showing existing fields
Your project tracks up-to-date information about issues and pull requests, including any changes to the title, assignees, labels, milestones, and repository. When your project initializes, "title" and "assignees" are displayed; the other fields are hidden. You can change the visibility of these fields in your project.

To open the project command palette, press Ctrl+k (Windows and Linux) or Command+k (Mac).
Start typing "show".
Select the desired command (for example: "Show: Repository").
Alternatively, you can do this in the UI:

Click  in the rightmost field header. A drop-down menu with the project fields will appear.
Show or hide fields
Select the field(s) that you want to display or hide. A  indicates which fields are displayed.
Adding custom fields
You can add custom fields to your project. Custom fields will display on the side bar of issues and pull requests in the project.

Custom fields can be text, number, date, single select, or iteration:

Text: The value can be any text.
Number: The value must be a number.
Date: The value must be a date.
Single select: The value must be selected from a set of specified values.
Iteration: The value must be selected from a set of date ranges (iterations). Iterations in the past are automatically marked as "completed", and the iteration covering the current date range is marked as "current".
To open the project command palette, press Ctrl+k (Windows and Linux) or Command+k (Mac). Start typing any part of "Create new field". When "Create new field" displays in the command palette, select it.
Alternatively, click  in the rightmost field header. A drop-down menu with the project fields will appear. Click New field.
A popup will appear for you to enter information about the new field.
New field
In the text box, enter a name for the new field.
Select the dropdown menu and click the desired type.
If you specified Single select as the type, enter the options.
If you specified Iteration as the type, enter the start date of the first iteration and the duration of the iteration. Three iterations are automatically created, and you can add additional iterations on the project's settings page.
You can later edit the drop down options for single select and iteration fields.

Navigate to your project.
Click  to access the project settings.
Under Fields, select the field that you want to edit.
For single select fields, you can add, delete, or reorder the options.
For iteration fields, you can add or delete iterations, change iteration names, and change the start date and duration of the iteration.
Customizing your views
You can view your project as a table or board, group items by field, filter item, and more. For more information, see "Customizing your project (beta) views."

Configuring built-in automation
Projects (beta) includes built-in workflows that you can use to update the Status of items based on certain events. For example, you can automatically set the status to Todo when an item is added to your project or set the status to Done when an issue is closed.

When your project initializes, two workflows are enabled by default: When issues or pull requests in your project are closed, their status is set to Done, and when pull requests in your project are merged, their status is set to Done.

You can enable or disable the built-in workflows for your project.

In your project, click .
Under Default workflows, click on the workflow that you want to edit.
If the workflow can apply to both issues and pull requests, next to When, check the item type(s) that you want to act on.
Next to Set, choose the value that you want to set the status to.
If the workflow is disabled, click the toggle next to Disabled to enable the workflow.
Did this doc help you?
Privacy policy
Help us make these docs great!
All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.

Or, learn how to contribute.

Still need help?
Ask the GitHub community
Contact support
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
Developer API
Training
Blog
About
Scroll to top
