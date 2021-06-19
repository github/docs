---
title: 删除工作流程运行
intro: 您可以删除已完成或超过两周的工作流程运行。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
1. 要删除工作流程运行，请使用 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 下拉菜单并选择 **Delete workflow run（删除工作流程运行）**。

    ![删除工作流程运行](/assets/images/help/settings/workflow-delete-run.png)
2. 查看确认提示并单击 **Yes, permanently delete this workflow run（是，永久删除此工作流程运行）**。

    ![删除工作流程运行确认](/assets/images/help/settings/workflow-delete-run-confirmation.png)
