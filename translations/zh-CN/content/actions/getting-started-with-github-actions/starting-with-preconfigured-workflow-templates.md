---
title: 从预配置的工作流程模板开始
intro: '{% data variables.product.prodname_dotcom %} 提供预配置的工作流程模板以自动化工作流程或为特定语言和框架创建 CI 工作流程。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于工作流程模板

{% data variables.product.product_name %} 分析代码并显示最适合仓库的 CI 模板。 例如，如果仓库包含 Node.js 代码，您就会看到 Node.js 项目的建议。 您可以使用工作流程模板作为基础来构建自定义工作流程，或按原样使用模板。

您可以在 [actions/starter-workflows](https://github.com/actions/starter-workflows/tree/master/ci) 仓库中浏览 CI 模板的完整列表。 您还可以查找用于自动化工作流程的模板。 您还可以查找用于自动化工作流程的模板。

### 添加第一个工作流程模板

如果尚未将工作流程添加到仓库，您将看到可供选择的工作流程模板列表。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.actions-set-up-workflow-template %}

### 添加附加工作流程模板

如果您已有工作流程并希望添加新的模板工作流程，则可以导航到工作流程模板。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.actions-new-workflow %}
{% data reusables.repositories.actions-set-up-workflow-template %}
