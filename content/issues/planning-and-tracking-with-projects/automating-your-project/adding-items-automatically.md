---
title: Adding items automatically
intro: You can configure your project's built-in workflows to automatically add items from {% ifversion projects-v2-duplicate-auto-add %}repositories{% else%}a repository{% endif %} that match a filter.
versions:
  feature: projects-v2-auto-add
type: tutorial
topics:
  - Projects
---
{% ifversion ghes > 3.8 %}

{% data reusables.projects.enable_enterprise_workflows %}

{% endif %}

## About automatically adding items

You can configure your project's built-in workflows to automatically add new items as they are created or updated in a repository. You can define a filter to only add items that meet your criteria. {% ifversion projects-v2-duplicate-auto-add %} You can also create multiple auto-add workflows, each workflow can have a unique filter and target a different repository. {% endif %}

When you enable the auto-add workflow, existing items matching your criteria will not be added. The workflow will add items when created or updated if the item matches your filter. For more information on manually adding items, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project#bulk-adding-issues-and-pull-requests)."

The auto-add workflow supports a subset of filters. You can use the following filters when configuring your workflow.

| Qualifier | Possible values
| --- | --- |
| `is` | open, closed, merged, draft, issue, pr
| `label` | "label name"
| `reason` | completed, reopened, "not planned"
| `assignee` | {% data variables.product.product_name %} username
| `no` | label, assignee, reason

All filters, other than `no`, support negation. For example, you could use `-label:bug` to add issues that do not have the "bug" label.

{% ifversion projects-v2-duplicate-auto-add %}

The auto-add workflow is limited per plan.

| Product | Maximum auto-add workflows |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 1 |
| {% data variables.product.prodname_pro %} | 5 |
| {% data variables.product.prodname_team %} | 5 |
| {% data variables.product.prodname_ghe_cloud %} | 20 |
| {% data variables.product.prodname_ghe_server %} | 20 |

{% endif %}

## Configuring the auto-add workflow in your project

{% data reusables.projects.access-workflows %}
1. In the "Default workflows" list, click **Auto-add to project**{% ifversion projects-v2-duplicate-auto-add %} or one of the auto-add workflows you have previously duplicated{% endif %}.

1. To start editing the workflow, in the top right, click **Edit**.

   ![Screenshot showing the workflow menu bar. The "Edit" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/workflow-start-editing.png)

1. Under "Filters", select the repository you want to add items from.
1. Next to the repository selection, type the filter criteria you want items to match before they are automatically added to your project.
1. To enable the new workflow, click **Save and turn on workflow**.

{% ifversion projects-v2-duplicate-auto-add %}

## Duplicating the auto-add workflow

You can create additional duplicates of the auto-add workflow. Each workflow can target a different repository, allowing you to add items from up to four repositories. You can target the same repository with multiple workflows if the filter is unique for each workflow.

Once you have duplicated a workflow, you can click **Edit** to start making changes to it. For more information, see "[Configuring the auto-add workflow in your project](#configuring-the-auto-add-workflow-in-your-project)."

{% data reusables.projects.access-workflows %}
1. In the list of workflows, next to "Auto-add to project" click {% octicon "kebab-horizontal" %}.

   ![Screenshot showing the list of workflows. The ellipsis button next to the auto-add workflow is highlighted with an orange rectangle.](/assets/images/help/projects-v2/workflow-add-menu.png)

1. In the menu, click **{% octicon "duplicate" %} Duplicate workflow**.
1. To save your new workflow, when prompted, type the name you want to use for the new workflow.

{% endif %}

## Further reading

- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)"
{%- ifversion projects-v2-workflows %}
- "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)"
{%- endif %}
