---
title: Archiving items automatically
shortTitle: Archiving items automatically
intro: You can configure your project's built-in workflows to automatically archive items that match a filter.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Projects
---

{% ifversion ghes %}

{% data reusables.projects.enable_enterprise_workflows %}

{% endif %}

## About automatically archiving items

{% ifversion projects-single-limit %}
You can configure your project's built-in workflows to automatically archive items. Archiving items helps you improve focus by removing old items from your project views. An archived item retains all of its custom field data and can be viewed or restored from the archive page.
{% else %}
You can configure your project's built-in workflows to automatically archive items. Archiving items will help you stay below the limit of {% data variables.projects.item_limit %} items in each project.{% endif %}

The auto-archive workflow supports a subset of filters. You can use the following filters when configuring your workflow.

| Qualifier | Possible values
| --- | --- |
| `is` | `open`, `closed`, `merged`, `draft`, `issue`, `pr`
| `reason` | `completed`, `reopened`, `"not planned"`
| `updated` | <code><@today-<em>14</em>d</code> (the last 14 days), <code><@today-<em>3</em>w</code> (the last 3 weeks), <code><@today-<em>1</em>m</code> (the last month)

{% data reusables.projects.last-updated-explanation %}

Additionally, items are also marked as updated when field values in your project are changed.

When you enable automatic archiving for issues or pull requests, items in your project that already meet your criteria will also be archived. There may be some delay in archiving large numbers of items that already meet the criteria.

{% ifversion projects-single-limit %}Your project can contain up to {% data variables.projects.item_limit %} items across both active views and the archive page. Once that limit has been reached, you will need to delete items from your project to free up more space.{% else %} Projects also have a limit on the number of archived items they can contain. Your project can contain up to {% data variables.projects.legacy_archived_item_limit %} archived items.{% endif %} For more information on permanently deleting items, see [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items).

## Configuring automatic archiving in your project

{% data reusables.projects.access-workflows %}
1. In the "Default workflows" list, click **Auto-archive items**.
1. In the top right, click **Edit**.

   ![Screenshot showing a project's menu bar. The "Edit" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/workflow-start-editing.png)

1. In the "Filters" field, type the filter criteria you want to use to automatically archive items. You can only use the `is`, `reason`, and `updated` filters.
1. To save your changes and enable the workflow, click **Save and turn on workflow**.

## Further reading

* [AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)
* [AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)
