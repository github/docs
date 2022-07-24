---
title: 关于持续部署
intro: '您可以直接在 {% data variables.product.prodname_dotcom %} 仓库中通过 {% data variables.product.prodname_actions %} 创建自定义持续部署 (CD) 工作流程。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/about-continuous-deployment
topics:
  - CD
shortTitle: 关于持续部署
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于持续部署

_持续部署_ (CD) 是使用自动化发布和部署软件更新的做法。 作为典型 CD 过程的一部分，代码在部署之前会自动构建并测试。

持续部署通常与持续集成相结合。 有关持续集成的更多信息，请参阅“[关于持续集成](/actions/guides/about-continuous-integration)”。

## 关于使用 {% data variables.product.prodname_actions %} 的持续部署

您可以设置 {% data variables.product.prodname_actions %} 工作流程来部署软件产品。 要验证产品是否按预期工作，您的工作流程可以在存储库中构建代码，并在部署之前运行测试。

您可以配置 CD 工作流程在发生 {% data variables.product.product_name %} 事件（例如，将新代码推送到存储库的默认分支）时运行、按设定的时间表运行、手动运行或者在使用存储库分发 web 挂钩的外部事件发生时运行。 有关工作流程何时可以运行的更多信息，请参阅“[触发工作流程的事件](/actions/reference/events-that-trigger-workflows)”。

{% data variables.product.prodname_actions %} 提供的功能使您可以更好地控制部署。 例如，您可以使用环境来要求批准才能继续作业，限制哪些分支可以触发工作流程，或限制对机密的访问。 可以使用并发性将 CD 管道限制为最多一个正在进行的部署和一个挂起的部署。 有关这些功能的详细信息，请参阅“[使用 GitHub Actions 进行部署](/actions/deployment/deploying-with-github-actions)”和“[使用环境进行部署](/actions/deployment/using-environments-for-deployment)”。

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## 使用 OpenID Connect 访问云资源

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## 初学者工作流程和第三方操作

{% data reusables.actions.cd-templates-actions %}

## 延伸阅读

- [使用 GitHub Actions 进行部署](/actions/deployment/deploying-with-github-actions)
- [使用环境进行部署](/actions/deployment/using-environments-for-deployment){% ifversion fpt or ghec %}
- "[管理 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions)"{% endif %}

