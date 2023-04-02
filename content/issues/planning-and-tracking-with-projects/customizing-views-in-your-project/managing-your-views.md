---
title: Managing your views
intro: 'Learn how to create, save, and manage your project views.'
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
---


## Creating a project view

Project views allow you to quickly view specific aspects of your project. Each view is displayed on a separate tab in your project. 

For example, you can have:
- A view that shows all items not yet started (filter on "Status").
- A view that shows the workload for each team (group by a custom "Team" field).
- A view that shows the items with the earliest target ship date (sort by a date field).

To add a new view:

{% data reusables.projects.new-view %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "New view."

The new view is automatically saved.

## Duplicating a view

You can duplicate an existing view and use it as a base to make further changes.

1. Switch to the view you want to duplicate.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "versions" aria-label="the versions icon" %} **Duplicate view**.
   ![Screenshot showing the duplicate menu item](/assets/images/help/projects-v2/duplicate-view.png)

## Saving changes to a view

When you make changes to a view - for example, sorting, reordering, filtering, or grouping the data in a view - a dot is displayed next to the view name to indicate that there are unsaved changes. 

![Unsaved changes indicator](/assets/images/help/projects/unsaved-changes.png)

If you don't want to save the changes, you can ignore this indicator. No one else will see your changes.

{% data reusables.projects.save-view %}

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Save view."

## Reordering saved views

To change the order of the tabs that contain your saved views, click and drag a tab to a new location. The new tab order is automatically saved.

## Renaming a saved view

You can rename your saved views. The name change is automatically saved.

1. Switch to the view you want to rename.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "pencil" aria-label="the pencil icon" %} **Rename view**.
   ![Screenshot showing the rename menu item](/assets/images/help/projects-v2/rename-view.png)
1. Type the new name for your view.
1. To save your changes, press <kbd>Return</kbd>.

## Deleting a saved view

1. Switch to the view you want to delete.
{% data reusables.projects.open-view-menu %}
1. Click {% octicon "trash" aria-label="the trasj icon" %} **Delete view**.
   ![Screenshot showing the rename delete item](/assets/images/help/projects-v2/delete-view.png)

Alternatively, open the project command palette by pressing {% data variables.projects.command-palette-shortcut %} and start typing "Delete view."
