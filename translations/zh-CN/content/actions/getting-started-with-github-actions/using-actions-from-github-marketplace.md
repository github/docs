---
title: 使用 GitHub Marketplace 中的操作
intro: '您可以在 {% data variables.product.prodname_marketplace %} 中浏览和搜索要用于工作流程的操作。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-github-marketplace-actions
  - /actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于 {% data variables.product.prodname_marketplace %} 中的操作

{% data variables.product.prodname_marketplace %} 是一个中心位置，可供查找由 {% data variables.product.prodname_dotcom %} 社区构建的操作。  带有徽章的操作表示 {% data variables.product.prodname_dotcom %} 已验证操作的创建者为合作伙伴组织。

{% data reusables.actions.enterprise-marketplace-actions %}

您可以从 {% data variables.product.prodname_dotcom %} 上的工作流程编辑器以及从 [{% data variables.product.prodname_marketplace %} 页面发现新的操作](https://github.com/marketplace/actions/)。

直接在工作流程编辑器中查看操作可以快速访问 {% data variables.product.prodname_marketplace %} 中的所有操作。 {% data variables.product.prodname_marketplace %} 操作页面提供了更大的灵活性，可以按类别过滤操作。

### 在工作流程编辑器中浏览操作

您可以直接在仓库的工作流程编辑器中搜索和浏览操作。 从边栏可以搜索特定的操作、查看特色操作和浏览特色类别。 您也可以查看操作从 {% data variables.product.prodname_dotcom %} 社区获得的星标数。

1. 在仓库中，浏览至要编辑的工作流程文件。
1. 要打开工作流程编辑器，在文件视图右上角单击 {% octicon "pencil" aria-label="The edit icon" %}。 ![编辑工作流程文件按钮](/assets/images/help/repository/actions-edit-workflow-file.png)
1. 在编辑器右侧，使用 {% data variables.product.prodname_marketplace %} 边栏浏览操作。 ![Marketplace 工作流程边栏](/assets/images/help/repository/actions-marketplace-sidebar.png)

### 浏览 {% data variables.product.prodname_marketplace %} 中的操作

您可以在 [{% data variables.product.prodname_marketplace %} 操作页面](https://github.com/marketplace/actions/)找到相同的操作。 在 {% data variables.product.prodname_marketplace %} 页面上，您有更大的灵活性按类别和验证过滤操作。

### 从工作流程编辑器添加操作到您的工作流程

操作的列表页包括操作的版本以及使用操作所需的工作流程语法。

1. 导航到要在工作流程中使用的操作。
1. 在“Installation（安装）”下，单击 {% octicon "clippy" aria-label="The edit icon" %} 复制工作流程语法。 ![查看操作列表](/assets/images/help/repository/actions-sidebar-detailed-view.png)
1. 将语法粘贴为工作流程中的新步骤。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)”。
1. 如果操作要求您提供变量，请将其设置在工作流程中。 有关操作可能需要哪些变量的信息，请参阅 {% data variables.product.prodname_marketplace %} 中的操作完整列表。

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.dependabot.version-updates-for-actions %}

{% endif %}
