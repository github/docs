---
title: 'Customizing a view'
intro: 'Display the information you need by changing the layout, grouping, sorting in your project.'
miniTocMaxHeadingLevel: 3
versions:
  feature: "projects-v2"
redirect_from:
  - /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
  - Projects
---


## Changing the project layout

You can view your project as a table or as a board.

{% data reusables.projects.open-view-menu %}
1. Under "Layout", click either **Table** or **Board**.
   ![Screenshot showing layout option](/assets/images/help/projects-v2/table-or-board.png)

 

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Switch layout."

## Showing and hiding fields

You can show or hide a specific field.

{% data reusables.projects.open-view-menu %}
1. Under "Configuration", click {% octicon "note" aria-label="the note icon" %} and the list of currently shown fields.
   ![Screenshot showing show and hide fields menu option](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. Select or deselect the fields you want to show or hide.
   ![Screenshot showing show and hide fields menu](/assets/images/help/projects-v2/show-hide-fields.png)

You can also hide individual fields in table view.

1. Next to the field you want to hide, click {% octicon "kebab-horizontal" aria-label="the kebab icon" %}.
   ![Screenshot showing field menu icon](/assets/images/help/projects-v2/modify-field-menu.png)
1. Click {% octicon "eye-closed" aria-label="the eye closed icon" %} **Hide field**.
   ![Screenshot showing hide field menu option](/assets/images/help/projects-v2/hide-field-via-menu.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "show", "hide", or the name of the field.

## Reordering fields

In table layout, you can change the order of fields.

1. Click the field header.
   ![Screenshot showing the field header](/assets/images/help/projects-v2/select-field-header.png)
2. While continuing to click, drag the field to the required location.

## Reordering rows

In table layout, you can change the order of rows.

1. Click the number at the start of the row.
   ![Screenshot showing the row number](/assets/images/help/projects-v2/select-row-number.png)
2. While continuing to click, drag the row to the required location.

## Sorting by field values

In table layout, you can sort items by a field value.

{% note %}

**Note:** When a table is sorted, you cannot manually reorder rows.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Click **Sort**.
   ![Screenshot showing the sort menu item](/assets/images/help/projects-v2/sort-menu-item.png)
1. Click the field you want to sort by.
   ![Screenshot showing the sort menu](/assets/images/help/projects-v2/sort-menu.png)
2. Optionally, to change the direction of the sort, click {% octicon "sort-desc" aria-label="the sort icon" %}.
   ![Screenshot showing sort order option](/assets/images/help/projects-v2/sort-order.png)
3. Optionally, to remove a sort, click {% octicon "x" aria-label="the x icon" %} **No sorting** at the bottom of the list.
   ![Screenshot showing "no sorting"](/assets/images/help/projects-v2/no-sorting.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Sort by."

## Grouping by field values in table layout

In the table layout, you can group items by a custom field value. When items are grouped, if you drag an item to a new group, the value of that group is applied. For example, if you group by "Status" and then drag an item with a status of `In progress` to the `Done` group, the status of the item will switch to `Done`. Similarly, when you add a new item to a group, the new item is populated with the value of the group.

{% note %}

**Note:** You cannot group by title, labels, reviewers, or linked pull requests.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "rows" aria-label="the rows icon" %} **Group**.
   ![Screenshot showing the group menu item](/assets/images/help/projects-v2/group-menu-item.png)
1. Click the field you want to group by.
   ![Screenshot showing the group menu](/assets/images/help/projects-v2/group-menu.png)
2. Optionally, to disable grouping, click {% octicon "x" aria-label="the x icon" %} **No grouping** at the bottom of the list.
   ![Screenshot showing "no grouping"](/assets/images/help/projects-v2/no-grouping.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Group by."

{% ifversion projects-v2-numeric-summary %}

## Showing the sum of a number field

You can configure a view to show the sum of one of more number fields, including a count of items in the group or column. For example, if you have a number field tracking the number of hours each item may take to complete, you can display of sum of those hours for each group or column.

In board layout, field sums are displayed at the top of each column. In table layout, when you enable grouping by a field, field sums are included in each group's header.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "number" aria-label="the number icon" %} **Field sum**.
   
   ![Screenshot showing the field sum menu item](/assets/images/help/projects-v2/field-sum-menu.png)
   
1. Select the fields you want to include.
   
   ![Screenshot showing the field sum menu](/assets/images/help/projects-v2/field-sum-select-field.png)
   

{% endif %}

## Setting the column field in board layout

In the board layout, you choose any single select or iteration field for your columns. If you drag an item to a new column, the value of that column is applied to the dragged item. For example, if you use the "Status" field for your board columns and then drag an item with a status of `In progress` to the `Done` column, the status of the item will switch to `Done`.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "columns" aria-label="the columns icon" %} **Column field**.
   ![Screenshot showing the column field item](/assets/images/help/projects-v2/column-field-menu-item.png)
1. Click the field you want to use.
   ![Screenshot showing the column field menu](/assets/images/help/projects-v2/column-field-menu.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Column field by."

{% ifversion projects-v2-column-visibility %}

## Showing and hiding columns in board layout

In the board layout, you can can choose which columns to display. The available columns are made up of the contents of your selected column field.

1. In the board layout, scroll to the right of your columns, and click {% octicon "plus" aria-label="the plus icon" %}.
   
   ![Screenshot showing the plus symbol button](/assets/images/help/projects-v2/board-add-column.png)
   
1. Select the columns you want to show.
   
   ![Screenshot showing the list of columns](/assets/images/help/projects-v2/board-select-columns.png)
   
{% endif %}