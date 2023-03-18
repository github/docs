---
title: Adding items automatically
intro: You can configure your project's built-in workflows to automatically add items from a repository that match a filter.
versions:
  feature: projects-v2-auto-add
type: tutorial
topics:
  - Projects
---

## About automatically adding items

You can configure your project's built-in workflows to automatically add new items as they are created or updated in a repository. You can define a filter to only add items that meet your criteria.

When you enable the auto-add workflow, existing items matching your criteria will not be added. The workflow will add items when created or updated if the item matches your filter. For more information on manually adding items, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project#bulk-adding-issues-and-pull-requests)."

The auto-add workflow supports a subset of filters. You can use the following filters when configuring your workflow.

| Qualifier | Possible values
| --- | --- | --- |
| `is` | open, closed, merged, draft, issue, pr
| `label` | "label name"
| `reason` | completed, reopened, "not planned"
| `assignee` | {% data variables.product.product_name %} username
| `no` | label, assignee, reason

All filters, other than `no`, support negation. For example, you could use `-label:bug` to add issues that do not have the "bug" label.

The auto-add workflow is limited per plan.

| Product | Maximum auto-add workflows |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 1 |
| {% data variables.product.prodname_pro %} | 5 |
| {% data variables.product.prodname_team %} | 5 |
| {% data variables.product.prodname_ghe_cloud %} | 20 |
| {% data variables.product.prodname_ghe_server %} | 20 |


## Configuring the auto-add workflow in your project

{% data reusables.projects.access-workflows %}
1. In the "Default workflows" list, click **Auto-add to project**.

   ![Screenshot showing auto-add workflow](/assets/images/help/projects-v2/workflow-autoadd.png)

1. To start editing the workflow, in the top right, click **Edit**.

   ![Screenshot showing edit button](/assets/images/help/projects-v2/workflow-start-editing.png)

1. Under "Filters", select the repository you want to add items from.

   ![Screenshot showing repository select](/assets/images/help/projects-v2/workflow-autoadd-repo.png)

1. Next to the repository selection, type the filter criteria you want items to match before they are automatically added to your project.

   ![Screenshot showing repository select](/assets/images/help/projects-v2/workflow-autoadd-filter.png)

1. To enable the new workflow, click **Save and turn on workflow**.

   ![Screenshot showing autoadd workflows](/assets/images/help/projects-v2/workflow-save-and-turn-on.png)


## Further reading

* "[AUTOTITLE](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)"
* "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)"
