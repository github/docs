---
title: 禁用和启用工作流
intro: '您可以使用 {% data variables.product.prodname_dotcom %} UI、REST API 或 {% data variables.product.prodname_cli %} 禁用并重新启用工作流程。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
ms.openlocfilehash: 1c0ebc0f56ba8c337648670e0f07d8a56e2fc326
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109568'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

禁用工作流程允许您停止触发工作流程，而不必从仓库中删除文件。 您可以轻松地在 {% data variables.product.prodname_dotcom %} 上重新启用工作流程。

在许多情况下，暂时禁用工作流程可能很有用。 以下是禁用工作流程可能有帮助的几个例子：

- 产生请求过多或错误的工作流程错误，对外部服务产生负面影响。
- 不重要但会耗费您帐户上太多分钟数的工作流程。
- 向已关闭的服务发送请求的工作流程。
- 复刻仓库上不需要的工作流程（例如预定的工作流程）。

{% warning %}

**警告**：{% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

您也可以使用 REST API 禁用和启用工作流程。 有关详细信息，请参阅“[Actions REST API](/rest/reference/actions#workflows)”。

## 禁用工作流程

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要禁用的工作流程。
![操作选择工作流](/assets/images/actions-select-workflow.png)
1. 单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。
![操作烤肉串菜单](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. 单击“禁用工作流”。
![操作禁用工作流](/assets/images/help/repository/actions-disable-workflow.png) 禁用的工作流标记为 {% octicon "stop" aria-label="The stop icon" %} 以指示其状态。
![操作列表禁用的工作流](/assets/images/help/repository/actions-find-disabled-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要禁用工作流，请使用 `workflow disable` 子命令。 将 `workflow` 替换为要禁用的工作流的名称、ID 或文件名。 例如，`"Link Checker"`、`1234567` 或 `"link-check-test.yml"`。 如果您没有指定工作流程，{% data variables.product.prodname_cli %} 将返回交互式菜单供您选择工作流程。

```shell
gh workflow disable <em>workflow</em>
```

{% endcli %}

## 启用工作流程

{% webui %}

您可以重新启用以前禁用过的工作流程。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要启用的工作流程。
![操作选择禁用的工作流](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. 单击“启用工作流”。
![操作启用工作流](/assets/images/help/repository/actions-enable-workflow.png)

{% endwebui %}

{% cli %}

要启用工作流，请使用 `workflow enable` 子命令。 将 `workflow` 替换为要启用的工作流的名称、ID 或文件名。 例如，`"Link Checker"`、`1234567` 或 `"link-check-test.yml"`。 如果您没有指定工作流程，{% data variables.product.prodname_cli %} 将返回交互式菜单供您选择工作流程。

```shell
gh workflow enable <em>workflow</em>
```

{% endcli %}
