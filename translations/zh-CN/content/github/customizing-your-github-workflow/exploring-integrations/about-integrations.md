---
title: 关于集成
intro: '集成是连接 {% data variables.product.product_name %} 服务以完善和扩展工作流程的工具与服务。'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
versions:
  fpt: '*'
---

您可以在您的个人帐户或拥有的组织中安装集成， You can also install {% data variables.product.prodname_github_apps %} from a third-party in a specific repository where you have admin permissions or which is owned by your organization.

## Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}

Integrations can be {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %}, or anything that utilizes {% data variables.product.product_name %} APIs or webhooks.

{% data variables.product.prodname_github_apps %} offer granular permissions and request access to only what the app needs. {% data variables.product.prodname_github_apps %} also offer specific user-level permissions that each user must authorize individually when an app is installed or when the integrator changes the permissions requested by the app.

更多信息请参阅：
- "[Differences between {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)"
- "[关于应用程序](/apps/about-apps/)"
- “[用户级权限](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)”
- "[授权 {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"
- "[Authorizing {% data variables.product.prodname_github_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[审查授权的集成](/articles/reviewing-your-authorized-integrations/)"

如果集成者或应用程序创建者使用 {% data variables.product.prodname_github_app %} 清单流程创建了应用程序，您可以安装预配置的 {% data variables.product.prodname_github_app %}。 有关如何以自动化配置运行 {% data variables.product.prodname_github_app %} 的信息，请联系集成者或应用程序创建者。

如果使用 Probot 构建应用程序，您可以通过简化的配置创建 {% data variables.product.prodname_github_app %}。 更多信息请参阅 [Probot 文档](https://probot.github.io/docs/)站点。

## 发现 {% data variables.product.prodname_marketplace %} 中的集成

您可以在 {% data variables.product.prodname_marketplace %} 中查找要安装的集成或发布您自己的集成。

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contains {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %}. 有关查找集成或创建您自己的集成的更多信息，请参阅“[关于 {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace)”。

## 直接从集成者购买的集成

您也可以直接从集成者购买一些集成。 作为组织成员，如果您发现喜欢使用的 {% data variables.product.prodname_github_app %}，可以申请组织批准并为组织安装该应用程序。

If you have admin permissions for all organization-owned repositories the app is installed on, you can install {% data variables.product.prodname_github_apps %} with repository-level permissions without having to ask an organization owner to approve the app. 当集成者更改应用程序的权限时，如果权限只适用于仓库，则组织所有者以及对安装应用程序的仓库具有管理员权限的人员可以审查和接受新权限。
