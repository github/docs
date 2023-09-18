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


{% ifversion ghes > 3.8 %}

{% data reusables.projects.enable_enterprise_workflows %}

{% endif %}

{% data variables.product.prodname_projects_v2 %} includes built-in workflows that you can use to update the **Status** of items based on certain events. For example, you can automatically set the status to **Todo** when an item is added to your project or set the status to **Done** when an issue is closed.

When your project initializes, two workflows are enabled by default: When issues or pull requests in your project are closed, their status is set to **Done**, and when pull requests in your project are merged, their status is set to **Done**.

{% ifversion projects-v2-auto-archive %}You can also configure {% ifversion projects-v2-auto-add %}workflows{% else %}a workflow{% endif %} to automatically archive items when they meet set criteria{% ifversion projects-v2-auto-add %} and to automatically add items from a repository when they match a filter{% endif %}. For more information, see "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically){% ifversion projects-v2-auto-add %}" and "[AUTOTITLE](/issues/planning-and-tracking-with-projects/automating-your-project/adding-items-automatically){% endif %}."{% endif %}

You can enable or disable the built-in workflows for your project.

{% data reusables.projects.enable-basic-workflow %}
