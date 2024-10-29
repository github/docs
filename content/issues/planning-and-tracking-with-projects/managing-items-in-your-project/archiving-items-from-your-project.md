---
title: 'Archiving items from your {% data variables.projects.project_v2 %}'
shortTitle: Archiving items
intro: 'You can archive items, keeping them available to restore, or permanently delete them.'
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---

{% note %}

**Note:** A project can contain a maximum of {% data variables.projects.item_limit %} items and {% data variables.projects.archived_item_limit %} archived items.

{% endnote %}

## Archiving items

You can archive an item to keep the context about the item in the project but remove it from the project views. You can also configure your project's built-in workflows to automatically archive items that meet certain criteria. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)."

{% data reusables.projects.select-an-item %}
{% data reusables.projects.open-item-menu %}
1. Click **Archive**.
1. When prompted, confirm your choice by clicking **Archive**.

## Restoring archived items

1. Navigate to your project.
1. In the top-right, click {% octicon "kebab-horizontal" aria-label="More options" %}.

   ![Screenshot showing a project's menu bar. The menu icon is highlighted with an orange outline.](/assets/images/help/projects-v2/open-menu.png)

1. In the menu, click {% octicon "archive" aria-hidden="true" %} **Archived items**.
1. Optionally, to filter the archived items displayed, type your filter into the text box above the list of items. For more information about the available filters, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)."
1. To the left of each item title, select the items you would like to restore.

   ![Screenshot of a list of archived items. To the left of the first item, a checkbox is outlined in dark orange.](/assets/images/help/issues/select-archived-item.png)
1. To restore the selected items, above the list of items, click **Restore**.

## Deleting items

You can delete an item to remove it from the project entirely.

{% data reusables.projects.select-an-item %}
{% data reusables.projects.open-item-menu %}
1. Click **Delete from project**.
1. When prompted, confirm your choice by clicking **Delete**.
