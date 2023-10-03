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

{% ifversion ghes > 3.8 %}

{% data reusables.projects.enable_enterprise_workflows %}

{% endif %}

## About automatically archiving items

You can configure your project's built-in workflows to automatically archive items. Archiving items will help you stay below the limit of {% data variables.projects.item_limit %} items in each project.

The auto-archive workflow supports a subset of filters. You can use the following filters when configuring your workflow.

| Qualifier | Possible values
| --- | --- |
| `is` | `open`, `closed`, `merged`, `draft`, `issue`, `pr`
| `reason` | `completed`, `reopened`, `"not planned"`
| `updated` | <code><@today-<em>14</em>d</code> (the last 14 days), <code><@today-<em>3</em>w</code> (the last 3 weeks), <code><@today-<em>1</em>m</code> (the last month)

{% data reusables.projects.last-updated-explanation %}

Additionally, items are also marked as updated when field values in your project are changed.

When you enable automatic archiving for issues or pull requests, items in your project that already meet your criteria will also be archived. There may be some delay in archiving large numbers of items that already meet the criteria.

Projects also have a limit on the number of archived items they can contain. Your project can contain up to {% data variables.projects.archived_item_limit %} archived items. For more information on permanently deleting items, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items)."

## Configuring automatic archiving in your project

{% data reusables.projects.access-workflows %}
1. In the "Default workflows" list, click **Auto-archive items**.{% ifversion projects-v2-workflows-ui-refresh %}
1. In the top right, click **Edit**.

   ![Screenshot showing a project's menu bar. The "Edit" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/workflow-start-editing.png)
   {% else %}
1. Next to **When**, check the item type(s) that you want to automatically archive.{% endif %}
1. In the "Filters" field, type the filter criteria you want to use to automatically archive items. You can only use the `is`, `reason`, and `updated` filters.{% ifversion projects-v2-workflows-ui-refresh %}
1. To save your changes and enable the workflow, click **Save and turn on workflow**.{% else %}
1. If the workflow is disabled, click the toggle next to **Off** to enable the workflow.{% endif %}

## Further reading

- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)"
{%- ifversion projects-v2-workflows %}
- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)"
{%- endif %}
