---
title: 手动运行工作流程
intro: '当工作流配置为在发生 `workflow_dispatch` 事件时运行时，可以使用 {% data variables.product.prodname_dotcom %}、{% data variables.product.prodname_cli %} 或 REST API 上的“Actions”选项卡运行工作流。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manually run a workflow
ms.openlocfilehash: 22717c31a6bc2599f066b0e870f0aa652c18cc6f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145099187'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 配置工作流程手动运行

要手动运行工作流，必须将工作流配置为在 `workflow_dispatch` 事件上运行。 要触发 `workflow_dispatch` 事件，工作流必须位于默认分支中。 有关配置 `workflow_dispatch` 事件的详细信息，请参阅“[触发工作流的事件](/actions/reference/events-that-trigger-workflows#workflow_dispatch)”。

{% data reusables.repositories.permissions-statement-write %}

## 运行工作流程

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要运行的工作流程。
![操作选择工作流](/assets/images/actions-select-workflow.png)
1. 在工作流运行列表上方，选择“运行工作流”。
![操作工作流调度](/assets/images/actions-workflow-dispatch.png)
1. 使用“分支”下拉菜单，选择工作流的分支，并键入输入参数。 单击“运行工作流”。
![操作手动运行工作流](/assets/images/actions-manually-run-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要运行工作流，请使用 `workflow run` 子命令。 将 `workflow` 参数替换为要运行的工作流的名称、ID 或文件名。 例如，`"Link Checker"`、`1234567` 或 `"link-check-test.yml"`。 如果您没有指定工作流程，{% data variables.product.prodname_cli %} 将返回交互式菜单供您选择工作流程。

```shell
gh workflow run <em>workflow</em>
```

如果您的工作流程接受输入，{% data variables.product.prodname_cli %} 将提示您输入它们。 或者，可以使用 `-f` 或 `-F` 添加 `key=value` 格式的输入。 使用 `-F` 从文件中读取。

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

您也可以使用标准输入以 JSON 的身份传递输入。

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

要在存储库的默认分支以外的分支上运行工作流，请使用 `--ref` 标记。

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

要查看工作流运行的进度，请使用 `run watch` 子命令，并从交互式列表中选择运行。

```shell
gh run watch
```

{% endcli %}

## 使用 REST API 运行工作流程

使用 REST API 时，应将 `inputs` 和 `ref` 配置为请求正文参数。 如果忽略输入，则使用工作流程文件中定义的默认值。

{% note %}

注意：最多可为 `workflow_dispatch` 事件定义 10 个 `inputs`。

{% endnote %}

有关使用 REST API 的详细信息，请参阅“[创建工作流调度事件](/rest/reference/actions/#create-a-workflow-dispatch-event)”。
