---
title: 关于集成
intro: '集成是连接 {% data variables.product.product_name %} 服务以完善和扩展工作流程的工具与服务。'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
versions:
  free-pro-team: '*'
---
您可以在您的个人帐户或拥有的组织中安装集成， 也可从您具有管理员权限或者您的组织所拥有的特定仓库中的第三方安装 {% data variables.product.prodname_github_app %}。

### {% data variables.product.prodname_github_app %} 与 {% data variables.product.prodname_oauth_app %} 之间的差异

集成可以是 {% data variables.product.prodname_github_app %}、{% data variables.product.prodname_oauth_app %} 或其他利用 {% data variables.product.product_name %} API 或 web 挂钩的工具。

{% data variables.product.prodname_github_app %} 可提供细致的权限，申请只访问应用程序需要的内容。 {% data variables.product.prodname_github_app %} 还提供特定的用户级权限，当应用程序安装或者集成者更改应用程序请求的权限时，每个用户都必须个别授权。

更多信息请参阅：
- "[{% data variables.product.prodname_github_app %} 与 {% data variables.product.prodname_oauth_app %} 之间的差异](/apps/differences-between-apps/)"
- "[关于应用程序](/apps/about-apps/)"
- “[用户级权限](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)”
- "[授权 {% data variables.product.prodname_oauth_app %}](/articles/authorizing-oauth-apps/)"
- "[审查授权的集成](/articles/reviewing-your-authorized-integrations/)"

如果集成者或应用程序创建者使用 {% data variables.product.prodname_github_app %} 清单流程创建了应用程序，您可以安装预配置的 {% data variables.product.prodname_github_app %}。 有关如何以自动化配置运行 {% data variables.product.prodname_github_app %} 的信息，请联系集成者或应用程序创建者。

如果使用 Probot 构建应用程序，您可以通过简化的配置创建 {% data variables.product.prodname_github_app %}。 更多信息请参阅 [Probot 文档](https://probot.github.io/docs/)站点。

### 发现 {% data variables.product.prodname_marketplace %} 中的集成

您可以在 {% data variables.product.prodname_marketplace %} 中查找要安装的集成或发布您自己的集成。

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) 包含 {% data variables.product.prodname_github_app %} 和 {% data variables.product.prodname_oauth_app %}。 有关查找集成或创建您自己的集成的更多信息，请参阅“[关于 {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace)”。

### 直接从集成者购买的集成

您也可以直接从集成者购买一些集成。 作为组织成员，如果您发现喜欢使用的 {% data variables.product.prodname_github_app %}，可以申请组织批准并为组织安装该应用程序。

如果您对其中安装应用程序的所有组织拥有的仓库具有管理员权限，可以使用仓库级权限安装 {% data variables.product.prodname_github_app %}，而无需要求组织所有者批准该应用程序。 当集成者更改应用程序的权限时，如果权限只适用于仓库，则组织所有者以及对安装应用程序的仓库具有管理员权限的人员可以审查和接受新权限。
