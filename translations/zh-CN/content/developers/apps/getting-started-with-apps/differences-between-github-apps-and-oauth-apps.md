---
title: GitHub 应用程序和 OAuth 应用程序之间的差异
intro: '了解 {% data variables.product.prodname_github_apps %} 和 {% data variables.product.prodname_oauth_apps %} 之间的差异可帮助您决定要创建哪个应用程序。 在组织或组织内的仓库上安装时，{% data variables.product.prodname_oauth_app %} 代表 GitHub 用户，而 {% data variables.product.prodname_github_app %} 使用它自己的身份。'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type
  - /apps/differences-between-apps
  - /developers/apps/differences-between-github-apps-and-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
  - OAuth Apps
shortTitle: GitHub 应用程序与 OAuth 应用程序
---

## 谁可以安装 GitHub 应用程序并授权 OAuth 应用程序？

您可以在您的个人帐户或您拥有的组织中安装 GitHub 应用程序。 如果拥有仓库管理员权限，您可以在组织帐户上安装 GitHub 应用程序。 如果 GitHub 应用程序安装在仓库中，并且需要组织权限，则组织所有者必须批准该应用程序。

{% data reusables.apps.app_manager_role %}

相比之下，一旦用户_授权_ OAuth 应用程序，该应用程序就能代表经身份验证的用户。 例如，您可以授权 OAuth 应用程序查找经身份验证用户的所有通知。 您可以随时撤销 OAuth 应用程序的权限。

{% data reusables.apps.deletes_ssh_keys %}

| GitHub 应用程序                                                                              | OAuth 应用程序                                                   |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 您必须是组织所有者或者具有仓库管理员权限才能在组织上安装 GitHub 应用程序。 如果 GitHub 应用程序安装在仓库中，并且需要组织权限，则组织所有者必须批准该应用程序。 | 您可以授权 OAuth 应用程序访问资源。                                        |
| 您可以在个人仓库上安装 GitHub 应用程序。                                                                 | 您可以授权 OAuth 应用程序访问资源。                                        |
| 您必须是组织所有者、个人仓库所有者或者拥有仓库的管理员权限才能卸载 GitHub 应用程序和删除其访问权限。                                   | 您可以删除 OAuth 访问令牌以删除访问权限。                                     |
| 您必须是组织所有者或者具有仓库管理员权限才能请求安装 GitHub 应用程序。                                                  | 如果组织应用程序策略已激活，则任何组织成员都可以请求在组织上安装 OAuth 应用程序。 组织所有者必须批准或拒绝请求。 |

## GitHub 应用程序和 OAuth 应用程序可以访问什么？

帐户所有者可以在一个帐户中使用 {% data variables.product.prodname_github_app %} ，而不授予对其他帐户的访问权限。 例如，您可以在您的雇主组织中安装第三方构建服务，但决定不授权该构建服务访问您个人帐户中的仓库。 即使安装者离开组织，GitHub 应用程序仍然存在。

_授权的_ OAuth 应用程序有权访问用户或组织所有者可访问的所有资源。

| GitHub 应用程序                                                          | OAuth 应用程序                                                                         |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 安装 GitHub 应用程序将授予该应用程序访问用户或组织帐户所选仓库的权限。                              | 授权 OAuth 应用程序将授予该应用程序访问用户可访问资源的权限。 例如，他们可以访问的仓库。                                   |
| 如果管理员从安装中删除仓库，则 GitHub 应用程序的安装令牌将失去对资源的访问权限。                         | 当用户失去对资源的访问权限时，例如失去对仓库的写入权限，OAuth 访问令牌也会失去相应的访问权限。                                 |
| 安装访问令牌仅限于指定的仓库，其权限由应用程序创建者选择。                                        | OAuth 访问令牌受作用域限制。                                                                  |
| GitHub Apps 可以请求单独访问议题和拉取请求，而不访问仓库的实际内容。                             | OAuth 应用程序需要请求 `repo` 作用域才能访问议题、拉取请求或仓库拥有的任何内容。                                    |
| GitHub 应用程序不受组织应用程序策略的约束。 GitHub 应用程序只能访问组织所有者授权的仓库。                 | 如果组织应用程序策略已激活，则只有组织所有者才能授权安装 OAuth 应用程序。 安装后，OAuth 应用程序将有权访问组织所有者在批准组织内的令牌可见的任何内容。 |
| 当安装被更改或删除时，GitHub 应用程序会收到 web 挂钩事件。 当它们对组织资源的访问权限扩大或缩小时，这将告诉应用程序创建者。 | 根据授予用户访问权限的变化，OAuth 应用程序可能会随时失去对组织或仓库的访问权限。 OAuth 应用程序在失去对资源的访问权限时不会通知您。           |

## 基于令牌的识别

{% note %}

**注：**GitHub 应用程序也可以使用基于用户的令牌。 更多信息请参阅“[识别和授权 GitHub 应用程序用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

{% endnote %}

| GitHub 应用程序                                                                                                                                                                                                                                                                                                                           | OAuth 应用程序                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GitHub 应用可以使用带外 JSON Web 令牌格式的私钥请求安装访问令牌。                                                                                                                                                                                                                                                                                             | OAuth 应用程序可以通过 Web 请求在重定向后将请求令牌交换为访问令牌。                                                                                                                                                            |
| 安装程序将应用程序识别为 GitHub 应用自动程序，例如 @jenkins-bot。                                                                                                                                                                                                                                                                                           | 访问令牌将应用程序识别为向应用程序授予令牌的用户，例如 @octocat。                                                                                                                                                              |
| 安装令牌在预定义的时间（当前为 1 小时）后过期。                                                                                                                                                                                                                                                                                                             | OAuth 令牌在被客户撤销之前一直保持活动状态。                                                                                                                                                                          |
| 安装在组织或仓库上的 {% data variables.product.prodname_github_apps %} 受服务器到服务器请求的速率限制。 更多信息请参阅“[{% data variables.product.prodname_github_apps %} 的速率限制”](/developers/apps/building-github-apps/rate-limits-for-github-apps)。                                                                                                              | OAuth 令牌使用用户的速率限制，即每小时 {% ifversion fpt or ghec or ghes %}5,000{% elsif ghae %}15,000{% endif %} 个请求。                                                                                              |
| 速率限制的增加可在 GitHub 应用程序级别（影响所有安装）和单个安装级别上授予。                                                                                                                                                                                                                                                                                            | 速率限制的增加按 OAuth 应用程序授予。 授予该 OAuth 应用程序的每个令牌都会获得增加的上限。                                                                                                                                               |
| {% data variables.product.prodname_github_apps %} 可以代表用户进行身份验证，这称为用户到服务器请求。 授权流程与 OAuth 应用程序授权流程相同。 用户到服务器令牌可能会过期，可通过刷新令牌进行续订。 更多信息请参阅“[刷新用户到服务器访问令牌](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)”和“[识别和授权 GitHub 应用程序用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。 | {% data variables.product.prodname_oauth_apps %} 使用的 OAuth 流程代表用户授权 {% data variables.product.prodname_oauth_app %}。 这与用于 {% data variables.product.prodname_github_app %} 用户到服务器授权中使用的流程相同。 |

## 请求资源的权限级别

与 OAuth 应用程序不同，GitHub 应用程序具有针对性的权限，只允许它们请求访问所需的资源。 例如，持续集成 (CI) GitHub 应用程序可以请求对仓库内容的读取权限和对状态 API 的写入权限。 另一个 GitHub 应用程序可能没有对代码的读取或写入权限，但仍能管理议题、标签和里程碑。 OAuth 应用程序不能使用精细权限。

| 访问                   | GitHub 应用程序（`read` 或 `write` 权限） | OAuth 应用程序                                |
| -------------------- | -------------------------------- | ----------------------------------------- |
| **访问公共仓库**           | 需要在安装过程中选择公共仓库。                  | `public_repo` 作用域。                        |
| **访问仓库代码/内容**        | 仓库内容                             | `repo` 作用域。                               |
| **获取议题、标签和里程碑**      | 议题                               | `repo` 作用域。                               |
| **获取拉取请求、标签和里程碑**    | 拉取请求                             | `repo` 作用域。                               |
| **访问提交状态（对于 CI 构建）** | 提交状态                             | `repo:status` 作用域。                        |
| **访问部署和部署状态**        | 部署                               | `repo_deployment` 作用域。                    |
| **通过 web 挂钩接收事件**    | GitHub 应用程序默认包含一个 web 挂钩。        | `write:repo_hook` 或 `write:org_hook` 作用域。 |

## 仓库发现

| GitHub 应用程序                                               | OAuth 应用程序                                                              |
| --------------------------------------------------------- | ----------------------------------------------------------------------- |
| GitHub 应用程序可以访问 `/installation/repositories` 以查看安装可访问的仓库。 | OAuth 应用程序可访问用户视图中的 `/user/repos` 或组织视图中的 `/orgs/:org/repos` 以查看可访问的资源。 |
| 当从安装中添加或删除仓库时，GitHub 应用程序会接收 web 挂钩。                      | 在组织内创建新仓库时，OAuth 应用程序为通知创建组织 web 挂钩。                                    |

## Web 挂钩

| GitHub 应用程序                                         | OAuth 应用程序                                                       |
| --------------------------------------------------- | ---------------------------------------------------------------- |
| 默认情况下，GitHub 应用程序有一个 web 挂钩，可根据配置接收它们有权访问的每个仓库中的事件。 | OAuth 应用程序请求 web 挂钩作用域为它们需要接收其事件的每个仓库创建仓库 web 挂钩。                |
| GitHub 应用程序使用组织成员的权限接收某些组织级别的事件。                    | OAuth 应用程序请求组织 web 挂钩作用域为它们需要接收其组织级别事件的每个组织创建组织 web 挂钩。          |
| 卸载 GitHub 应用程序时，web 挂钩会自动禁用。                        | 如果删除了 OAuth 应用程序的访问令牌，则不会自动禁用 web 挂钩，并且无法自动清理它们。 您必须要求用户手动执行此操作。 |

## Git 访问

| GitHub 应用程序                                                                                                                                                | OAuth 应用程序                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| GitHub 应用程序请求仓库内容权限，并使用安装令牌通过[基于 HTTP 的 Git](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation) 进行身份验证。 | OAuth 应用程序请求 `write:public_key` 作用域，并通过 API [创建部署密钥](/rest/reference/deployments#create-a-deploy-key)。 然后您可以使用该密钥来执行 Git 命令。 |
| 令牌用作 HTTP 密码。                                                                                                                                              | 令牌用作 HTTP 用户名。                                                                                                               |

## 机器与机器人帐户

机器用户帐户是基于 OAuth 的个人帐户，它使用 GitHub 的用户系统隔离自动系统。

机器人帐户特定于 GitHub 应用，并内置于每个 GitHub 应用程序中。

| GitHub 应用程序                                                            | OAuth 应用程序                                                    |
| ---------------------------------------------------------------------- | ------------------------------------------------------------- |
| GitHub 应用程序机器人不占用 {% data variables.product.prodname_enterprise %} 席位。 | 机器用户帐户占用 {% data variables.product.prodname_enterprise %} 席位。 |
| 由于 GitHub 应用程序机器人永远不会被授予密码，因此客户无法直接登录它。                                | 机器用户帐户被授予由客户管理和保护的用户名和密码。                                     |
