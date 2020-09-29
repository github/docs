---
title: 关于 GitHub 操作
intro: '{% data variables.product.prodname_actions %} 可让您直接在 {% data variables.product.prodname_dotcom %} 仓库中创建自定义软件开发生命周期 (SDLC) 工作流程。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/migrating-github-actions-from-hcl-syntax-to-yaml-syntax/
  - /articles/about-github-actions
  - /github/automating-your-workflow-with-github-actions/about-github-actions
  - /actions/automating-your-workflow-with-github-actions/about-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于 {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} 工作流程是您可以在仓库中创建的自定义自动化流程，用于在 {% data variables.product.prodname_dotcom %} 上构建、测试、封装、发行或部署任何代码项目。

{% data reusables.repositories.actions-ci-cd %} {% data variables.product.prodname_actions %} 支持 {% data variables.product.prodname_dotcom %} 的内置持续集成服务。 更多信息请参阅“[关于持续集成](/articles/about-continuous-integration)”。

工作流程在 {% data variables.product.prodname_dotcom %} 托管的计算机（称为“运行器”）上的 Linux、macOS、Windows 和容器中运行。 或者，您也可以托管自己的运行器，以在您拥有或管理的计算机上运行工作流程。 更多信息请参阅“[关于自托管运行器](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)”。

您可以使用仓库中定义的操作、{% data variables.product.prodname_dotcom %} 上公共仓库中的开源操作或者发布的 Docker 容器图像来创建工作流程。 复刻仓库中的工作流程默认不运行。

您可以在 {% data variables.product.prodname_dotcom %} 上发现要用于工作流程的操作，以及创建要与 {% data variables.product.prodname_dotcom %} 社区共享的操作。 有关创建自定义操作的更多信息，请参阅“[创建操作](/actions/creating-actions)”。

您可以创建配置为对特定事件运行的工作流程文件。 更多信息请参阅“[配置工作流程](/articles/configuring-a-workflow)”和“[{% data variables.product.prodname_actions %} 的工作流程语法](/articles/workflow-syntax-for-github-actions)”。

有关常用术语的定义，请参阅“[{% data variables.product.prodname_actions %} 的核心概念](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)”。

### 发现 {% data variables.product.prodname_dotcom %} 社区中的操作

{% data variables.product.prodname_marketplace %} 是一个中心位置，您可以查找、分享和使用由 {% data variables.product.prodname_dotcom %} 社区构建的操作。 更多信息请参阅“[在工作流程中使用 {% data variables.product.prodname_marketplace %} 中的操作](/actions/automating-your-workflow-with-github-actions/using-actions-from-github-marketplace-in-your-workflow)”。

您也可以使用 {% data variables.product.prodname_dotcom %} 的公共仓库中分享的开源操作自定义项目，以及使用 [actions](https://github.com/actions) 组织中 {% data variables.product.prodname_dotcom %} 构建的操作。

### 禁用或限制仓库或组织的 {% data variables.product.prodname_actions %}

{% data reusables.github-actions.disabling-github-actions %}

更多信息请参阅“[禁用或限制仓库的 {% data variables.product.prodname_actions %}](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository)”或“[禁用或限制组织的 {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)”。

### 工作流程运行通知

{% data reusables.repositories.workflow-notifications %}

### 使用限制

{% data reusables.github-actions.github-actions-usage-limits %}

{% if currentVersion == "free-pro-team@latest" %}

### 使用策略

除了使用限制外，还必须确保使用 [GitHub 服务条款](/articles/github-terms-of-service/) 中的 {% data variables.product.prodname_actions %}。 有关 {% data variables.product.prodname_actions %} 特定条款的更多信息，请参阅 [GitHub 附加产品条款](/github/site-policy/github-additional-product-terms#a-actions-usage)。

### 关于 {% data variables.product.prodname_actions %} 的计费

{% data reusables.github-actions.actions-billing %} 更多信息请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)”。

### 联系支持

{% data reusables.github-actions.contacting-support %}

{% endif %}

### 延伸阅读

- "[管理工作流程运行](/articles/managing-a-workflow-run)"
- "[触发工作流程的事件](/articles/events-that-trigger-workflows)"
- "[{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)"
"[管理 {% data variables.product.prodname_actions %} 的计费](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
