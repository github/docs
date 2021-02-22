---
title: 将标签与自托管运行器一起使用
intro: 您可以使用标签以基于其特性来组织自托管运行器。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

有关如何使用标签将作业路由到特定类型的自托管运行器的信息，请参阅“[在工作流程中使用自托管的运行器](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)”。

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

### 创建自定义标签

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. 在“Filter labels（过滤标签）”字段中，键入新标签的名称，并单击 **Create new label（创建新标签）**。 ![添加运行器标签](/assets/images/help/settings/actions-add-runner-label.png)

将创建自定义标签并分配给自托管运行器。 可以从自托管的运行器中删除自定义标签，但当前无法手动删除。 {% data reusables.github-actions.actions-unused-labels %}

### 分配标签给自托管的运行器

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. 单击标签以将其分配给您的自托管运行器。

### 删除自托管运行器中的自定义标签

{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. 单击分配的标签以将其从您的自托管运行器中删除。 {% data reusables.github-actions.actions-unused-labels %}

### 使用配置脚本创建和分配标签

您可以使用自托管运行器上的配置脚本创建和分配自定义标签。 例如，此命令将名为 `gpu` 的标签分配给自托管运行器。

```shell
./config.sh --labels gpu
```

如果标签不存在，则创建该标签。 您也可以使用此方法将默认标签分配给运行器，例如 `x64` 或 `linux`.。 使用配置脚本分配默认标签后， {% data variables.product.prodname_actions %} 会接受它们，而不验证运行器是否实际使用该操作系统或架构。

您可以使用逗号分隔来分配多个标签。 例如：

```shell
./config.sh --labels gpu,x64,linux
```

{% note %}

** 注：** 如果替换现有的运行器，则必须重新分配任何自定义标签。

{% endnote %}
