---
title: Using the built-in automations
shortTitle: Using built-in automations
intro: You can use built-in workflows to automate your projects.
versions:
  feature: projects-v2-workflows
type: tutorial
topics:
  - Projects
---


{% ifversion ghes %}

{% data reusables.projects.enable_enterprise_workflows %}

{% endif %}

{% data variables.product.prodname_projects_v2 %} includes built-in workflows that you can use to update the **Status** of items based on certain events. For example, you can automatically set the status to **Todo** when an item is added to your project{% ifversion projects-v2-auto-close %}, close issues when the issue's status in your project is changed,{% endif %} or set the status to **Done** when an issue is closed.

When your project initializes, two workflows are enabled by default: When issues or pull requests in your project are closed, their status is set to **Done**, and when pull requests in your project are merged, their status is set to **Done**.

You can also configure workflows to automatically archive items when they meet set criteria and to automatically add items from a repository when they match a filter. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically)" and "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically)."

## Enabling a built-in workflow

You can enable or disable the built-in workflows for your project.

{% data reusables.projects.access-workflows %}
1. Under "Default workflows", click on the workflow that you want to edit.
1. In the top right, click **Edit**.

   ![Screenshot showing a project's menu bar. The "Edit" button is highlighted with an orange rectangle.](/assets/images/help/projects-v2/workflow-start-editing.png)

1. Depending on the workflow you have selected, make changes to the fields to configure the workflow's behavior.
1. To save your changes and enable the workflow, click **Save and turn on workflow**.
