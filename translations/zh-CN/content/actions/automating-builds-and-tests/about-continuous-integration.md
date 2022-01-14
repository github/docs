---
title: 关于持续集成
intro: 'You can create custom continuous integration (CI) workflows directly in your {% data variables.product.prodname_dotcom %} repository with {% data variables.product.prodname_actions %}.'
redirect_from:
  - /articles/about-continuous-integration
  - /github/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/automating-your-workflow-with-github-actions/about-continuous-integration
  - /actions/building-and-testing-code-with-continuous-integration/about-continuous-integration
  - /actions/guides/about-continuous-integration
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - CI
shortTitle: 持续集成
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 关于持续集成

持续集成 (CI) 是一种需要频繁提交代码到共享仓库的软件实践。 频繁提交代码能较早检测到错误，减少在查找错误来源时开发者需要调试的代码量。 频繁的代码更新也更便于从软件开发团队的不同成员合并更改。 这对开发者非常有益，他们可以将更多时间用于编写代码，而减少在调试错误或解决合并冲突上所花的时间。

提交代码到仓库时，可以持续创建并测试代码，以确保提交未引入错误。 您的测试可以包括代码语法检查（检查样式格式）、安全性检查、代码覆盖率、功能测试及其他自定义检查。

创建和测试代码需要服务器。 您可以在推送代码到仓库之前在本地创建并测试更新，也可以使用 CI 服务器检查仓库中的新代码提交。

## 关于使用 {% data variables.product.prodname_actions %} 的持续集成

{% ifversion ghae %}使用 {% data variables.product.prodname_actions %} 的 CI 提供可以在仓库中构建代码并运行测试的工作流程。 Workflows can run on runner systems that you host. 更多信息请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。
{% else %}使用 {% data variables.product.prodname_actions %} 的 CI 提供可以在仓库中构建代码并运行测试的工作流程。 工作流程可在 {% data variables.product.prodname_dotcom %} 托管的虚拟机或您自行托管的机器上运行。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 托管的运行器的虚拟环境](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)”和“[关于自托管运行器](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)”。
{% endif %}

您可以配置 CI 工作流程在 {% data variables.product.prodname_dotcom %} 事件发生时运行（例如，当新代码推送到您的仓库时）、按设定的时间表运行，或者在使用仓库分发 web 挂钩的外部事件发生时运行。

{% data variables.product.product_name %} 运行 CI 测试并在拉取请求中提供每次测试的结果，因此您可以查看分支中的更改是否引入错误。 如果工作流程中的所有 CI 测试通过，您推送的更改可供团队成员审查或合并 如果测试失败，则是其中某项更改导致了失败。

如果在仓库中设置了 CI，{% data variables.product.product_name %} 会分析仓库中的代码，并根据仓库中的语言和框架推荐 CI 工作流程。 For example, if you use [Node.js](https://nodejs.org/en/), {% data variables.product.product_name %} will suggest a starter workflow that installs your Node.js packages and runs your tests. You can use the CI starter workflow suggested by {% data variables.product.product_name %}, customize the suggested starter workflow, or create your own custom workflow file to run your CI tests.

![Screenshot of suggested continuous integration starter workflows](/assets/images/help/repository/ci-with-actions-template-picker.png)

除了帮助设置项目的 CI 工作流程之外，您还可以使用 {% data variables.product.prodname_actions %} 创建跨整个软件开发生命周期的工作流程。 例如，您可以使用操作来部署、封装或发行项目。 更多信息请参阅“[关于 {% data variables.product.prodname_actions %}](/articles/about-github-actions)”。

有关常用术语的定义，请参阅“[{% data variables.product.prodname_actions %} 的核心概念](/github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions)”。

## Starter workflow

{% data variables.product.product_name %} offers CI starter workflow for a variety of languages and frameworks.

Browse the complete list of CI starter workflow offered by {% data variables.product.company_short %} in the {% ifversion fpt or ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows/tree/main/ci) repository{% else %} `actions/starter-workflows` repository on {% data variables.product.product_location %}{% endif %}.

## 延伸阅读

{% ifversion fpt or ghec %}
- "[管理 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions)"
{% endif %}
