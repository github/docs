---
title: Archiving items automatically
shortTitle: Archiving items automatically
intro: You can configure your project's built-in workflows to automatically archive items that match a filter.
versions:
  feature: projects-v2-auto-archive
type: tutorial
topics:
  - Projects
---

## About automatically archiving items

You can configure your project's built-in workflows to automatically archive items. Archiving items will help you stay below the limit of {% data variables.projects.item_limit %} items in each project.

You can use the `is`, `reason`, and `last-updated` filters to specify when an item should be archived.

When you enable automatic archiving for issues or pull requests, items in your project that already meet your criteria will also be archived. There may be some delay in archiving large numbers of items that already meet the criteria.

Projects also have a limit on the number of archived items they can contain. Your project can contain up to {% data variables.projects.archived_item_limit %} archived items. For more information on permanently deleting items, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items)."

## Configuring automatic archiving in your project

{% data reusables.projects.access-workflows %}
1. In the "Default workflows" list, click **Auto-archive items**.
   
   ![Screenshot showing auto archive workflows](/assets/images/help/projects-v2/archive-workflows.png)
   
1. Next to **When**, check the item type(s) that you want to automatically archive.
   
   ![Screenshot showing the "when" configuration for a workflow](/assets/images/help/projects-v2/workflow-when-archive.png)

1. Next to {% octicon "filter" aria-label="The filter icon" %}, type the filter criteria you want to use to automatically archive items. You can only use the `is`, `reason`, and `last-updated` filters. For more information about filter syntax, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)."
   
   ![Screenshot showing filter text area](/assets/images/help/projects-v2/auto-archive-filter.png)
   
1. If the workflow is disabled, click the toggle next to **Off** to enable the workflow.
   
   ![Screenshot showing the "On/Off" control for a workflow](/assets/images/help/projects-v2/workflow-enable.png)
   

## Further reading

* "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)"
* "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)"
