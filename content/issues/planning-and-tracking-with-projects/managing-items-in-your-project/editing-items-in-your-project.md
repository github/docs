---
title: 'Editing items in your {% data variables.projects.project_v2 %}'
shortTitle: Editing items
intro: 'There are several methods you can use within your {% data variables.projects.project_v2 %} to quickly make changes to multiple items.'
versions:
  feature: projects-v2-bulk-table-editing
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

## Copying and pasting cells in a table

You can copy the contents of one cell and paste the contents into multiple other cells in the same field.

1. Navigate to a project view that is using the table layout.
1. Select the cell that you would like to copy.

   ![Screenshot showing two columns on a table layout. One cell is selected and is highlighted with an orange outline.](/assets/images/help/projects-v2/bulk-select-a-cell.png)

1. To copy the contents of the selected cell, press <kbd>Command</kbd>+<kbd>C</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>C</kbd> (Windows.)
1. Select the destination cells for the copied content.

{% indented_data_reference reusables.projects.select-a-cell spaces=4 %}

   ![Screenshot showing two columns on a table layout. Three cells are selected and are highlighted with an orange outline.](/assets/images/help/projects-v2/bulk-select-cells.png)

1. To paste the previously copied content, press <kbd>Command</kbd>+<kbd>V</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>V</kbd> (Windows.)

## Dragging a cell's contents to set neighboring table cells

You can quickly copy one cell's content over other cells in the same field by dragging up or down.

1. Navigate to a project view that is using the table layout.
1. Select the cell that you would like to copy.
1. If it's possible to copy the cell's content, a blue handle will be shown on the lower right of the selected cell.

   ![Screenshot showing two columns on a table layout. The blue handle, on the lower right of the selected cell, is highlighted with an orange outline.](/assets/images/help/projects-v2/bulk-cell-handle.png)

1. Drag the handle up or down over the cells where you would like to copy the contents.

   ![Screenshot showing two columns on a table layout. Three cells are selected. The blue handle, on the lower right of the cell, is highlighted with an orange outline.](/assets/images/help/projects-v2/bulk-cell-drag.png)

1. When you finish dragging, the contents of the originally selected cell will be copied over the cells you selected while dragging.

   ![Screenshot showing two columns on a table layout. The content of the previously selected cell has been copied to the cells selected above.](/assets/images/help/projects-v2/bulk-cell-finished.png)

## Clearing the content of multiple table cells

You can quickly clear the same field for multiple items.

1. Navigate to a project view using the table layout.
1. Select the cells you would like to clear.

{% indented_data_reference reusables.projects.select-a-cell spaces=4 %}

   ![Screenshot showing a column on a table layout. Three cells are selected.](/assets/images/help/projects-v2/select-multiple-cells.png)
  
1. Press <kbd>Delete</kbd> or <kbd>Backspace</kbd> on your keyboard.

## Undoing bulk changes in a table

When you make a bulk change in the table layout, {% data variables.product.product_name %} will display the option to undo that change.

1. Make a bulk change to your table.
1. When the notice appears in the lower right of your table, click **Undo**.

   ![Screenshot showing the undo dialog on a table. The Undo button is highlighted with an orange outline.](/assets/images/help/projects-v2/undo-bulk-change.png)
