---
title: Customizing your project (beta) views
intro: 'Display the information you need by changing the layout, grouping, sorting, and filters in your project.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
type: reference
topics:
  - Projects
---

{% data reusables.projects.projects-beta %}

## Command palette

Use the command palette to quickly change settings and run commands in your project.

1. {% data reusables.projects.open-command-palette %}
2. Start typing any part of a command or navigate through the command palette window to find a command. See the next sections for more examples of commands.

## Change layout

You can view your project as a table or as a board.

1. {% data reusables.projects.open-command-palette %}
2. Start typing "Switch layout".
3. Select the desired command (for example: "Switch layout: Table").
3. Alternatively, select the drop-down menu next to a view name and click **Table** or **Board**.

## Show or hide fields

In table layout, you can show or hide a specific field.

1. {% data reusables.projects.open-command-palette %}
2. Start typing the action you want to take ("show" or "hide") or the name of the field.
3. Select the desired command (for example: "Show: Milestone").
4. Alternatively, click {% octicon "plus" aria-label="the plus icon" %} to the right of the table. In the drop-down menu that appears, indicate which fields to show or hide. A {% octicon "check" aria-label="check icon" %} indicates which fields are displayed.
5. Alternatively, select the drop-down menu next to the field name and click **Hide field**.

## Reorder fields

You can change the order of fields.

1. Click the field header.
2. While clicking, drag the field to the desired location.

## Reorder rows

In table layout, you can change the order of rows.

1. Click the number at the start of the row.
2. While clicking, drag the row to the desired location.

## Sort

In table layout, you can sort items by a field value.

1. {% data reusables.projects.open-command-palette %}
2. Start typing "Sort by" or the name of the field you want to sort by.
3. Select the desired command (for example: "Sort by: Assignees, asc").
4. Alternatively, select the drop-down menu next to the field name that you want to sort by and click **Sort ascending** or **Sort descending**.

{% note %}

**Note:** When a table is sorted, you cannot manually reorder rows.

{% endnote %}

Follow similar steps to remove a sort.

1. {% data reusables.projects.open-command-palette %}
2. Start typing "Remove sort-by".
3. Select the "Remove sort-by" command.
4. Alternatively, select the drop-down menu next to the view name and click the menu item that indicates the current sort.

## Group

In table layout, you can group items by a custom field value. You cannot group by fields that contain {% data variables.product.company_short %} data (such as: title, assignees, repository, labels, milestone). When items are grouped, if you drag an item to a new group, the value of that group is applied. For example, if you group by `Status` and then drag an item with a status of `In progress` to the `Done` group, the status of the item will switch to `Done`.

1. {% data reusables.projects.open-command-palette %}
2. Start typing "Group by" or the name of the field you want to group by.
3. Select the desired command (e.g. "Group by: Status").
4. Alternatively, select the drop-down menu next to the field name that you want to group by and click **Group by values**.

Follow similar steps to remove a grouping.

1. {% data reusables.projects.open-command-palette %}
2. Start typing "Remove group-by".
3. Select the "Remove group-by" command.
4. Alternatively, select the drop-down menu next to the view name and click the menu item that indicates the current grouping.

## Filter

In table layout, you can filter by field values.

1. {% data reusables.projects.open-command-palette %}
2. Start typing "Filter by" or the name of the field you want to filter by.
3. Select the desired command (e.g. "Filter by Status").
4. Enter the value that you want to filter for (for example: "In progress"). You can also filter for the absence of specific values (for example: "Exclude status") or the absence of all values (for example: "No status").
5. Alternatively, click {% octicon "search" aria-label="the search icon" %} at the top of the table to show the "Filter by keyword or field" bar. Enter the field name and value that you want to filter by. As you type, possible values will appear.

   To filter for multiple values, separate the values with a comma. For example `label:"good first issue",bug` will list all issues with a label `good first issue` or `bug`.

   To filter for the absence of a specific value, place `-` before your filter. For example, `-label:"bug"` will only show items that do not have the label `bug`.

   To filter for the absence of all values, enter `no:` followed by the field name. For example, `no:assignee` will only show items that do not have an assignee.

   Separate multiple filters with a space. For example, `status:"In progress" -label:"bug" no:assignee` will show only items that have a status of `In progress`, do not have the label `bug`, and do not have an assignee.
6. Alternatively, select the drop-down menu next to the view name and click the menu item that indicates the desired filter.

## Save views

Saved views allow you to quickly view specific aspects of your project. For example, you could have the following:
- a view that shows all un-started items (filter on "Status").
- a view that shows the workload for each team member (group by "Asssignee" and filter on "Status").
- a view that shows the items with the earliest target ship date (sort by a date field).

The following steps demonstrate how to add a new view:

1. {% data reusables.projects.open-command-palette %}
2. Start typing "New view" (to create a new view) or "Duplicate view" (to duplicate the current view).
3. Select the desired command.
4. Alternatively, click {% octicon "plus" aria-label="the plus icon" %} **New view** next to the rightmost view.
5. Alternatively, select the drop-down menu next to a view name and click **Duplicate view**.

When you make changes to a view, a dot appears next to the view name to indicate that the view has been modified. If you don't want to save the changes, you can ignore this indicator. To save the view for all project members:

1. {% data reusables.projects.open-command-palette %}
1. Start typing "Save view" or "Save changes to new view".
1. Select the desired command.
1. Alternatively, select the drop-down menu next to a view name and click **Save view** or **Save changes to new view**.

To rename a view, double click on the view name and type the desired name.

To delete a view:

1. {% data reusables.projects.open-command-palette %}
2. Start typing "Delete view".
3. Select the desired command.
4. Alternatively, select the drop-down menu next to a view name and click **Delete view**.

## Further reading

- "[About projects (beta)](/issues/trying-out-the-new-projects-experience/about-projects)
- "[Creating a project (beta)](/issues/trying-out-the-new-projects-experience/creating-a-project)
