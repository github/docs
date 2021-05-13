---
title: 使用官方捆绑操作的最新版本
intro: '您可以更新与 {% data variables.product.prodname_ghe_server %} 实例捆绑的操作，或直接从 {% data variables.product.prodname_dotcom_the_website %} 使用操作。'
versions:
  enterprise-server: '>=2.22'
  github-ae: next
topics:
  - Enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

您的 {% data variables.product.prodname_ghe_server %} 实例包含一些您可以在工作流程中使用的内置操作。 有关捆绑操作的更多信息，请参阅[“与 {% data variables.product.prodname_ghe_server %} 捆绑的正式操作”](/admin/github-actions/about-using-actions-on-github-enterprise-server#official-actions-bundled-with-github-enterprise-server)。

这些捆绑的操作是在 https://github.com/actions 上找到的正式操作的即时快照；因此，这些操作可能是可以更新的旧版本。 要更新这些操作，您可以使用 `actions-sync` 工具将更新的操作与 {% data variables.product.prodname_dotcom_the_website %} 同步。

或者，如果您的 {% data variables.product.prodname_ghe_server %} 实例已启用 {% data variables.product.prodname_github_connect %}，则您还有其他选项可以使用来自 {% data variables.product.prodname_dotcom_the_website %} 的最新操作：

- 您的工作流程文件可以直接引用仅存在于 {% data variables.product.prodname_dotcom_the_website %} 上的特定标记。
- 要强制工作流程文件在 {% data variables.product.prodname_dotcom_the_website %} 上使用操作，您可以编辑分配给捆绑操作的标记。

以下各节将更详细地介绍这些选项。

### 使用操作同步更新捆绑操作

要更新捆绑操作，您可以使用 `actions-sync` 工具将操作与 {% data variables.product.prodname_dotcom_the_website %} 同步。 有关使用 `actions-sync` 的更多信息，请参阅“[手动从 {% data variables.product.prodname_dotcom_the_website %} 同步选项](/admin/github-actions/manually-syncing-actions-from-githubcom)”。

### 从 {% data variables.product.prodname_dotcom_the_website %} 使用操作

{% data reusables.github-actions.actions-github-connect-requirement %}

一旦配置，您即可手动指定工作流程文件中所需的版本，从 {% data variables.product.prodname_dotcom_the_website %} 使用操作的新版本。 例如，从 {% data variables.product.prodname_dotcom_the_website %} 使用 `v2.2.` 版的 `actions/setup-python`，您可以在工作流程文件中指定标记 `actions/setup-python@v2.2.1`。

### 删除特定操作的标记以使用最新版本

{% data reusables.github-actions.actions-github-connect-requirement %}

如果您删除之前分配给操作的版本标记，{% data variables.product.prodname_ghe_server %} 将检查 {% data variables.product.prodname_dotcom_the_website %} 是否有所需的标记。 有关使用标记的更多信息，请参阅“[查看标记](/github/administering-a-repository/viewing-your-repositorys-releases-and-tags#viewing-tags)”。

例如，要从 {% data variables.product.prodname_dotcom_the_website %} 使用 `v2.2.1` 版的 `actions/setup-python`：

1. 在 {% data variables.product.prodname_ghe_server %} 中，从 `actions/setup-python` 仓库中删除 `v2` 标记。
1. 创建同时使用 `actions/setup-python` 与 `v2` 标记的工作流程。

当工作流程无法在 {% data variables.product.prodname_ghe_server %} 上找到指定的 `v2` 标记时，它会检查 {% data variables.product.prodname_dotcom_the_website %} 是否有所需的标记。 如果找到该操作的标记版本，{% data variables.product.prodname_ghe_server %} 将使用 {% data variables.product.prodname_dotcom_the_website %} 中的版本。
