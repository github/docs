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

## Showing and hiding fields

{% data reusables.projects.customize.show-hide-field %}

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

{% ifversion projects-v2-consistent-sorting %}

## Sorting by field values

You can sort items by a field value.

{% note %}

**Note:** When a board is sorted, you cannot manually reorder items within a column. You can continue to move items from column to column.

{% endnote %}

{% data reusables.projects.customize.sort %}

{% endif %}

{% ifversion projects-v2-numeric-summary %}

## Showing the sum of a number field

{% data reusables.projects.customize.sum %}

{% endif %}
