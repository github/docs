---
title: 手动运行工作流程
intro: 'When a workflow is configured to run on the `workflow_dispatch` event, you can run the workflow using the REST API or from the Actions tab on {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

To run a workflow manually, the workflow must be configured to run on the `workflow_dispatch` event. 更多信息请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。

### Running a workflow on {% data variables.product.prodname_dotcom %}

要在 {% data variables.product.prodname_dotcom %} 上触发 `Workflow_spoch` 事件，您的工作流程必须在默认分支中。 按照以下步骤手动触发工作流程运行。

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要运行的工作流程。 ![操作选择工作流程](/assets/images/actions-select-workflow.png)
1. 在工作流程运行列表上方选择 **Run workflow（运行工作流程）**。 ![操作工作流程调度](/assets/images/actions-workflow-dispatch.png)
1. 选择工作流程将要运行的分支，并键入工作流程使用的输入参数。 单击 **Run workflow（运行工作流程）**。 ![操作手动运行工作流程](/assets/images/actions-manually-run-workflow.png)

### Running a workflow using the REST API

使用 REST API 时，应将 `inputs` 和 `ref` 配置为请求正文参数。 如果忽略输入，则使用工作流程文件中定义的默认值。

有关使用 REST API 的更多信息，请参阅“[创建工作流程调度事件](/rest/reference/actions/#create-a-workflow-dispatch-event)”。
