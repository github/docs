---
title: Customizing the board layout
shortTitle: Customizing boards
intro: You can use the board layout to arrange your project's items over customizable columns.
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---

## About the board layout

{% data reusables.projects.about-board-layout %}

For more information about changing a view to use the board layout, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view#changing-the-project-layout)."

{% ifversion projects-v2-column-limits %}

## Setting a limit on the number of items in a column

You can set a limit for the number of cards in a particular column in a board layout. Setting a limit does not restrict anyone from adding cards that would exceed the column's limit, nor does it restrict any automations from adding cards. Column limits are unique to each view in your project.

The current count of cards and the column's limit is displayed at the top of the column and is highlighted when the current count exceeds the limit. You can use column limits to communicate how you want the column to be used and to make clear at which point action needs to be taken to reduce the number of the cards in the column.

1. Click {% octicon "kebab-horizontal" aria-label="Column context menu" %} next to the name of the column you want to modify.
  ![Screenshot showing a top of a column in the table layout. The column context menu button is highlighted with an orange outline.](/assets/images/help/projects-v2/board-column-menu.png)
1. In the menu, click {% octicon "number" aria-hidden="true" %} **Set column limit**.
1. Under "Column limit", type the card limit for this column.
1. Optionally, to remove the limit, clear the entry.
1. Click **Save**.

{% endif %}

## Showing and hiding fields

{% data reusables.projects.customize.show-hide-field %}

## Setting the column field in board layout

In the board layout, you choose any single select or iteration field for your columns. If you drag an item to a new column, the value of that column is applied to the dragged item. For example, if you use the "Status" field for your board columns and then drag an item with a status of `In progress` to the `Done` column, the status of the item will switch to `Done`.

{% data reusables.projects.open-view-menu %}
1. Click {% octicon "columns" aria-hidden="true" %} **Column field**.
1. Click the field you want to use.

{% ifversion projects-v2-column-visibility %}

## Showing and hiding columns in board layout

In the board layout, you can choose which columns to display. The available columns are made up of the contents of your selected column field.

1. In the board layout, scroll to the right of your columns, and click {% octicon "plus" aria-label="Add a new column to the board" %}.

   ![Screenshot of a board layout scrolled to the very right. The "Add a new column to the board" button is highlighted with an orange outline.](/assets/images/help/projects-v2/board-add-column.png)

1. Select the columns you want to show.
{% endif %}

{% ifversion projects-v2-slice-panel %}

## Slicing by field values

{% data reusables.projects.customize.slice-panel %}

{% endif %}

{% ifversion projects-v2-consistent-sorting %}

## Sorting by field values

You can sort items by a field value.

{% note %}

**Note:** When a board is sorted, you cannot manually reorder items within a column. You can continue to move items from column to column.

{% endnote %}

{% data reusables.projects.customize.sort %}

{% endif %}

{% ifversion projects-v2-swimlanes %}

## Grouping by field values

You can use a custom field value to group items and create horizontal sections on your board. These sections provide an additional way to organize and visually separate items. Additionally, horizontal grouping allows you to differentiate work according to work streams, team members, or varying levels of urgency or priority.

{% data reusables.projects.customize.update-status %}

{% data reusables.projects.customize.group-fields %}

{% endif %}

{% ifversion projects-v2-numeric-summary %}

## Showing the sum of a number field

{% data reusables.projects.customize.sum %}

{% endif %}
