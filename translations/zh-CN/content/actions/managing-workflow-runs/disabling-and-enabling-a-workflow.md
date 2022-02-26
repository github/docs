---
title: 禁用和启用工作流程
intro: '您可以使用 {% data variables.product.prodname_dotcom %} UI、REST API 或 {% data variables.product.prodname_cli %} 禁用并重新启用工作流程。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: 禁用和启用工作流程
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

禁用工作流程允许您停止触发工作流程，而不必从仓库中删除文件。 您可以轻松地在 {% data variables.product.prodname_dotcom %} 上重新启用工作流程。

在许多情况下，暂时禁用工作流程可能很有用。 以下是禁用工作流程可能有帮助的几个例子：

- 产生请求过多或错误的工作流程错误，对外部服务产生负面影响。
- 不重要但会耗费您帐户上太多分钟数的工作流程。
- 向已关闭的服务发送请求的工作流程。
- 复刻仓库上不需要的工作流程（例如预定的工作流程）。

{% warning %}

**警告：** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

您也可以使用 REST API 禁用和启用工作流程。 更多信息请参阅“[操作 REST API](/rest/reference/actions#workflows)”。

## 禁用工作流程

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要禁用的工作流程。 ![操作选择工作流程](/assets/images/actions-select-workflow.png)
1. 单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。 ![操作烤肉串菜单](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. 单击 **Disable workflow（禁用工作流程）**。 ![actions disable workflow](/assets/images/help/repository/actions-disable-workflow.png) 禁用的工作流程标记为 {% octicon "stop" aria-label="The stop icon" %} 来表示其状态。 ![操作列表禁用的工作流程](/assets/images/help/repository/actions-find-disabled-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

要禁用工作流程，请使用 `workflow disable` 子命令。 将 `workflow` 替换为要禁用的工作流程的名称、ID 或文件名。 例如 `"Link Checker"`、`1234567` 或 `"link-check-test.yml"`。 如果您没有指定工作流程，{% data variables.product.prodname_cli %} 将返回交互式菜单供您选择工作流程。

```shell
gh workflow disable <em>workflow</em>
```

{% endcli %}

## 启用工作流程

{% webui %}

您可以重新启用以前禁用过的工作流程。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 在左侧边栏中，单击您想要启用的工作流程。 ![操作选择禁用的工作流程](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. 单击 **Enable workflow（启用工作流程）**。 ![操作启用工作流程](/assets/images/help/repository/actions-enable-workflow.png)

{% endwebui %}

{% cli %}

要启用工作流程，请使用 `workflow enable` 子命令。 将 `workflow` 替换为要启用的工作流程的名称、ID 或文件名。 例如 `"Link Checker"`、`1234567` 或 `"link-check-test.yml"`。 如果您没有指定工作流程，{% data variables.product.prodname_cli %} 将返回交互式菜单供您选择工作流程。

```shell
gh workflow enable <em>workflow</em>
```

{% endcli %}
