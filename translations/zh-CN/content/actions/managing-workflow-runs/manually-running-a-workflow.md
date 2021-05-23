---
title: 手动运行工作流程
intro: '当工作流程配置为在发生 `workflow_dispatch` 事件时运行时，您可以使用 {% data variables.product.prodname_dotcom %}、{% data variables.product.prodname_cli %} 或 REST API 上的 Actions 选项卡运行工作流程。'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 配置工作流程手动运行

要手动运行工作流程，工作流程必须配置为在发生 `workflow_dispatch` 事件时运行。 有关配置 `workflow_paid` 事件的更多信息，请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows#workflow_dispatch)”。

### 在 {% data variables.product.prodname_dotcom %} 上运行工作流程

要在 {% data variables.product.prodname_dotcom %} 上触发 `Workflow_spoch` 事件，您的工作流程必须在默认分支中。 按照以下步骤手动触发工作流程运行。

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要运行的工作流程。 ![操作选择工作流程](/assets/images/actions-select-workflow.png)
1. 在工作流程运行列表上方选择 **Run workflow（运行工作流程）**。 ![操作工作流程调度](/assets/images/actions-workflow-dispatch.png)
1. 选择工作流程将要运行的分支，并键入工作流程使用的输入参数。 单击 **Run workflow（运行工作流程）**。 ![操作手动运行工作流程](/assets/images/actions-manually-run-workflow.png)

### 使用 {% data variables.product.prodname_cli %} 运行工作流程

{% data reusables.actions.actions-cli %}

要运行工作流程，请使用 `workflow run` 子命令。 将 `workflow` 参数替换为要运行的工作流程的名称、ID 或文件名。 例如 `"Link Checker"`、`1234567` 或 `"link-check-test.yml"`。 如果您没有指定工作流程，{% data variables.product.prodname_cli %} 将返回交互式菜单供您选择工作流程。

```shell
gh workflow run <em>workflow</em>
```

如果您的工作流程接受输入，{% data variables.product.prodname_cli %} 将提示您输入它们。 或者，您可以使用 `-f` 或 `-F` 添加 `key=value` 格式的输入。 使用 `-F` 读取文件。

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

您也可以使用标准输入以 JSON 的身份传递输入。

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

要在仓库默认分支以外的分支上运行工作流程，请使用 `--ref` 标记。

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

要查看工作流程运行的进度，请使用 `run watch` 子命令，并从交互式列表中选择运行。

```shell
gh run watch
```

### 使用 REST API 运行工作流程

使用 REST API 时，应将 `inputs` 和 `ref` 配置为请求正文参数。 如果忽略输入，则使用工作流程文件中定义的默认值。

有关使用 REST API 的更多信息，请参阅“[创建工作流程调度事件](/rest/reference/actions/#create-a-workflow-dispatch-event)”。
