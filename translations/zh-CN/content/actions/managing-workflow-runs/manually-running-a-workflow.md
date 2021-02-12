---
title: 手动运行工作流程
intro: '如果工作流程配置为在发生 `workflow_dispatch` 事件时运行，您可以使用 REST API 或从 Actions（操作）选项卡在 {% data variables.product.prodname_dotcom %} 上运行工作流程。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 配置工作流程手动运行

要手动运行工作流程，工作流程必须配置为在发生 `workflow_dispatch` 事件时运行。 有关配置 `workflow_paid` 事件的更多信息，请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#workflow_dispatch)”。

### 在 {% data variables.product.prodname_dotcom %} 上运行工作流程

要在 {% data variables.product.prodname_dotcom %} 上触发 `Workflow_spoch` 事件，您的工作流程必须在默认分支中。 按照以下步骤手动触发工作流程运行。

{% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要运行的工作流程。 ![操作选择工作流程](/assets/images/actions-select-workflow.png)
1. 在工作流程运行列表上方选择 **Run workflow（运行工作流程）**。 ![操作工作流程调度](/assets/images/actions-workflow-dispatch.png)
1. 选择工作流程将要运行的分支，并键入工作流程使用的输入参数。 单击 **Run workflow（运行工作流程）**。 ![操作手动运行工作流程](/assets/images/actions-manually-run-workflow.png)

### 使用 REST API 运行工作流程

使用 REST API 时，应将 `inputs` 和 `ref` 配置为请求正文参数。 如果忽略输入，则使用工作流程文件中定义的默认值。

有关使用 REST API 的更多信息，请参阅“[创建工作流程调度事件](/rest/reference/actions/#create-a-workflow-dispatch-event)”。
