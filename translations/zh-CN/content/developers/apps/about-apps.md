---
title: 关于应用程序
intro: '您可以构建与 {% data variables.product.prodname_dotcom %} API 的集成来增加灵活性并减少自己工作流程中的摩擦。{% if currentVersion == "free-pro-team@latest" %} 您也可以与 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) 上的其他API 集成。{% endif %}'
redirect_from:
  - /apps/building-integrations/setting-up-a-new-integration/
  - /apps/building-integrations/
  - /apps/getting-started-with-building-apps/
  - /apps/about-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% data variables.product.prodname_dotcom %} 上的应用程序允许您自动化并改进工作流程。 您可以构建应用程序来改进工作流程。{% if currentversion == "free proteam@latest" %} 您也可以在 [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) 中分享或销售应用程序。 要了解如何在 {% data variables.product.prodname_marketplace %} 上列出应用程序，请参阅“[GitHub Marketplace 使用入门](/marketplace/getting-started/)”。{% endif %}

{% data reusables.marketplace.github_apps_preferred %}，但 GitHub 支持 {% data variables.product.prodname_oauth_app %} 和 {% data variables.product.prodname_github_apps %}。 有关选择应用程序类型的信息，请参阅“[GitHub 应用程序和 OAuth 应用程序之间的差异](/developers/apps/differences-between-github-apps-and-oauth-apps)”。

{% data reusables.apps.general-apps-restrictions %}

有关构建 {% data variables.product.prodname_github_app %} 的过程演练，请参阅“[构建第一个 {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)”。

### 关于 {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} 是 GitHub 中的一流产品。 {% data variables.product.prodname_github_app %} 应用程序以自己的名义运行，通过 API 直接使用自己的身份进行操作，这意味着您无需作为独立用户维护自动程序或服务帐户。

{% data variables.product.prodname_github_apps %} 可以直接安装在组织和用户帐户上，并获得对特定仓库的访问权限。 它们拥有内置 web 挂钩和狭窄的特定权限。 设置 {% data variables.product.prodname_github_app %}时，可以选择希望它访问的仓库。 例如，您可以设置一个名为 `MyGitHub` 的应用程序，允许它在 `octocat` 仓库且_仅_在 `octocat` 仓库写入议题。 要安装 {% data variables.product.prodname_github_app %}，您必须是组织所有者或在仓库中具有管理员权限。

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} 是需要托管在某处的应用程序。 有关涵盖服务器和托管服务的分步说明，请参阅“[构建第一个 {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)。”

要改进自己的工作流程，可以创建一个包含多个脚本或整个应用程序的 {% data variables.product.prodname_github_app %}，然后将此应用程序连接至许多其他工具。 例如，您可以将 {% data variables.product.prodname_github_apps %} 连接至 GitHub、Slack、自己可能拥有的其他内部应用程序、电子邮件程序或其他 API。

创建 {% data variables.product.prodname_github_apps %} 时，请记住以下方法：

{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* {% data variables.product.prodname_github_app %} 的操作应独立于用户（除非此应用程序使用[用户至服务器](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests)令牌）。 {% data reusables.apps.expiring_user_authorization_tokens %}

* 请确保 {% data variables.product.prodname_github_app %} 与特定仓库集成。
* {% data variables.product.prodname_github_app %} 应该连接到个人帐户或组织。
* 不要指望 {% data variables.product.prodname_github_app %} 知道并尽其所能。
* 如果您只需要“使用GitHub登录”服务，请不要使用 {% data variables.product.prodname_github_app %}。 但是，{% data variables.product.prodname_github_app %} 可以使用[用户识别流程](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)登录用户账户_和_执行其他操作。
* 如果您_只_想作为 GitHub 用户并做用户可以执行的所有操作，请不要构建 {% data variables.product.prodname_github_app %}。{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

要开始开发 {% data variables.product.prodname_github_apps %}，请先“[创建 {% data variables.product.prodname_github_app %}](/apps/building-github-apps/creating-a-github-app/)”。{% if currentVersion == "free-pro-team@latest" %} 要了解如何使用 {% data variables.product.prodname_github_app %} 清单创建预配置的 {% data variables.product.prodname_github_apps %}，请参阅“[从清单创建 {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/creating-github-apps-from-a-manifest/)”。{% endif %}

### 关于 {% data variables.product.prodname_oauth_app %}

OAuth2 是一种协议，它允许外部应用程序请求授权在不使用密码的情况下访问用户 {% data variables.product.prodname_dotcom %} 帐户中的私有信息。 此协议优先于基本验证，因为令牌可能仅限于特定类型的数据，用户可以随时撤销。

{% data reusables.apps.deletes_ssh_keys %}

{% data variables.product.prodname_oauth_app %} 使用 {% data variables.product.prodname_dotcom %} 作为身份提供程序以验证为授予应用程序访问权限的用户。 这意味着，当用户授予 {% data variables.product.prodname_oauth_app %} 访问权限时，将授权访问其帐户有权访问的_所有_仓库，以及他们所属的、未阻止第三方访问的任何组织。

如果要创建比简单脚本的处理范围更复杂的流程，构建 {% data variables.product.prodname_oauth_app %} 是一个很好的选择。 请注意，{% data variables.product.prodname_oauth_app %} 是需要托管在某处的应用程序。

创建 {% data variables.product.prodname_oauth_app %} 时，请记住以下几点：

{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* {% data variables.product.prodname_oauth_app %} 在所有 {% data variables.product.prodname_dotcom %} 中（例如，在提供用户通知时）应始终代表经身份验证的 {% data variables.product.prodname_dotcom %} 用户。
* 通过为经身份验证的用户启用“使用 {% data variables.product.prodname_dotcom %} 进行登录”，{% data variables.product.prodname_oauth_app %} 可用作身份提供程序。
* 如果您希望应用程序作用于单个仓库，请不要构建 {% data variables.product.prodname_oauth_app %}。 使用 `repo` OAuth 作用域，{% data variables.product.prodname_oauth_app %} 可以作用于经验证用户的_所有_仓库。
* 不要构建 {% data variables.product.prodname_oauth_app %} 作为团队或公司的应用程序。 {% data variables.product.prodname_oauth_app %} 将验证为单个用户，因此，如果有人创建了 {% data variables.product.prodname_oauth_app %} 供公司使用，那么一旦他们离开公司，其他人将无法访问它。{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

有关 {% data variables.product.prodname_oauth_app %} 的更多信息，请参阅“[创建 {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/)”和“[注册应用程序](/rest/guides/basics-of-authentication#registering-your-app)”。

### 个人访问令牌

[个人访问令牌](/articles/creating-a-personal-access-token-for-the-command-line/)是一个字符串，与 [OAuth 令牌](/apps/building-oauth-apps/authorizing-oauth-apps/)功能相似，您可以通过[作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)指定其权限。 个人访问令牌还与密码类似，但您能拥有很多令牌，而且可以随时撤销对每个令牌的访问权限。

例如，您可以启用个人访问令牌，以写入仓库。 然后，如果您运行 cURL 命令或编写脚本，在仓库中[创建议题](/rest/reference/issues#create-an-issue)，需要传递个人访问令牌进行验证。 您可以将个人访问令牌存储为环境变量，以免每次使用时都要输入。

使用个人访问令牌时，请牢记以下几点：

* 记得只能用此令牌代表您自己。
* 您可以执行一次性 cURL 请求。
* 您可以运行个人脚本。
* 不要为整个团队或公司设置脚本。
* 不要设置共享用户账户以用作自动程序用户。

### 确定要构建的集成

开始创建集成之前，需要确定访问、验证和与 {% data variables.product.prodname_dotcom %} API 交互的最佳方式。 下图提供了一些问题，您在决定是否对集成使用个人访问令牌、{% data variables.product.prodname_github_apps %} 或 {% data variables.product.prodname_oauth_app %} 时可以考虑这些问题。

![应用程序问题流程简介](/assets/images/intro-to-apps-flow.png)

请考虑关于您的集成需要如何操作及它需要访问什么等问题：

* 我的集成是只像我一样，还是更像一个应用程序？
* 我是否希望它作为单独的实体独立于我运行？
* 它是否能访问我可以访问的一切，或者说我想限制它的访问权限？
* 它是简单还是复杂？ 例如，个人访问令牌对简单的脚本和 cURL 有益，而 {% data variables.product.prodname_oauth_app %} 可以处理更复杂的脚本。

### 请求支持

{% data reusables.support.help_resources %}
