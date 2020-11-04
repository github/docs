---
title: 关于应用程序
intro: 'You can build integrations with the {% data variables.product.prodname_dotcom %} APIs to add flexibility and reduce friction in your own workflow.{% if currentVersion == "free-pro-team@latest" %} You can also share integrations with others on [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace).{% endif %}'
redirect_from:
  - /apps/building-integrations/setting-up-a-new-integration/
  - /apps/building-integrations/
  - /apps/getting-started-with-building-apps/
  - /apps/about-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Apps on {% data variables.product.prodname_dotcom %} allow you to automate and improve your workflow. You can build apps to improve your workflow.{% if currentVersion == "free-pro-team@latest" %} You can also share or sell apps in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). To learn how to list an app on {% data variables.product.prodname_marketplace %}, see "[Getting started with GitHub Marketplace](/marketplace/getting-started/)."{% endif %}

{% data reusables.marketplace.github_apps_preferred %}, but GitHub supports both {% data variables.product.prodname_oauth_app %}s and {% data variables.product.prodname_github_apps %}. For information on choosing a type of app, see "[About apps](/apps/about-apps/)" and "[Differences between apps](/apps/differences-between-apps/)."

{% data reusables.apps.general-apps-restrictions %}

For a walkthrough of the process of building a {% data variables.product.prodname_github_app %}, see "[Building Your First {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)."

### 关于 {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} are first-class actors within GitHub. A {% data variables.product.prodname_github_app %} acts on its own behalf, taking actions via the API directly using its own identity, which means you don't need to maintain a bot or service account as a separate user.

{% data variables.product.prodname_github_apps %} can be installed directly on organizations and user accounts and granted access to specific repositories. 它们拥有内置 web 挂钩和狭窄的特定权限。 When you set up your {% data variables.product.prodname_github_app %}, you can select the repositories you want it to access. 例如，您可以设置一个名为 `MyGitHub` 的应用程序，允许它在 `octocat` 仓库且_仅_在 `octocat` 仓库写入议题。 To install a {% data variables.product.prodname_github_app %}, you must be an organization owner or have admin permissions in a repository.

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} are applications that need to be hosted somewhere. For step-by-step instructions that cover servers and hosting, see "[Building Your First {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)."

To improve your workflow, you can create a {% data variables.product.prodname_github_app %} that contains multiple scripts or an entire application, and then connect that app to many other tools. For example, you can connect {% data variables.product.prodname_github_apps %} to GitHub, Slack, other in-house apps you may have, email programs, or other APIs.

Keep these ideas in mind when creating {% data variables.product.prodname_github_apps %}:

{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* A {% data variables.product.prodname_github_app %} should take actions independent of a user (unless the app is using a [user-to-server](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) token). {% data reusables.apps.expiring_user_authorization_tokens %}

* Make sure the {% data variables.product.prodname_github_app %} integrates with specific repositories.
* The {% data variables.product.prodname_github_app %} should connect to a personal account or an organization.
* Don't expect the {% data variables.product.prodname_github_app %} to know and do everything a user can.
* Don't use a {% data variables.product.prodname_github_app %} if you just need a "Login with GitHub" service. But a {% data variables.product.prodname_github_app %} can use a [user identification flow](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) to log users in _and_ do other things.
* Don't build a {% data variables.product.prodname_github_app %} if you _only_ want to act as a GitHub user and do everything that user can do.{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

To begin developing {% data variables.product.prodname_github_apps %}, start with "[Creating a {% data variables.product.prodname_github_app %}](/apps/building-github-apps/creating-a-github-app/)."{% if currentVersion == "free-pro-team@latest" %} To learn how to use {% data variables.product.prodname_github_app %} Manifests, which allow people to create preconfigured {% data variables.product.prodname_github_apps %}, see "[Creating {% data variables.product.prodname_github_apps %} from a manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/)."{% endif %}

### About {% data variables.product.prodname_oauth_app %}s

OAuth2 is a protocol that lets external applications request authorization to private details in a user's {% data variables.product.prodname_dotcom %} account without accessing their password. 此协议优先于基本验证，因为令牌可能仅限于特定类型的数据，用户可以随时撤销。

{% data reusables.apps.deletes_ssh_keys %}

An {% data variables.product.prodname_oauth_app %} uses {% data variables.product.prodname_dotcom %} as an identity provider to authenticate as the user who grants access to the app. This means when a user grants an {% data variables.product.prodname_oauth_app %} access, they grant permissions to _all_ repositories they have access to in their account, and also to any organizations they belong to that haven't blocked third-party access.

Building an {% data variables.product.prodname_oauth_app %} is a good option if you are creating more complex processes than a simple script can handle. Note that {% data variables.product.prodname_oauth_app %}s are applications that need to be hosted somewhere.

Keep these ideas in mind when creating {% data variables.product.prodname_oauth_app %}s:

{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* An {% data variables.product.prodname_oauth_app %} should always act as the authenticated {% data variables.product.prodname_dotcom %} user across all of {% data variables.product.prodname_dotcom %} (for example, when providing user notifications).
* An {% data variables.product.prodname_oauth_app %} can be used as an identity provider by enabling a "Login with {% data variables.product.prodname_dotcom %}" for the authenticated user.
* Don't build an {% data variables.product.prodname_oauth_app %} if you want your application to act on a single repository. With the `repo` OAuth scope, {% data variables.product.prodname_oauth_app %}s can act on _all_ of the authenticated user's repositories.
* Don't build an {% data variables.product.prodname_oauth_app %} to act as an application for your team or company. {% data variables.product.prodname_oauth_app %}s authenticate as a single user, so if one person creates an {% data variables.product.prodname_oauth_app %} for a company to use, and then they leave the company, no one else will have access to it.{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

For more on {% data variables.product.prodname_oauth_app %}s, see "[Creating an {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/)" and "[Registering your app](/v3/guides/basics-of-authentication/#registering-your-app)."

### 个人访问令牌

[个人访问令牌](/articles/creating-a-personal-access-token-for-the-command-line/)是一个字符串，与 [OAuth 令牌](/apps/building-oauth-apps/authorizing-oauth-apps/)功能相似，您可以通过[作用域](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)指定其权限。 个人访问令牌还与密码类似，但您能拥有很多令牌，而且可以随时撤销对每个令牌的访问权限。

例如，您可以启用个人访问令牌，以写入仓库。 然后，如果您运行 cURL 命令或编写脚本，在仓库中[创建议题](/v3/issues/#create-an-issue)，需要传递个人访问令牌进行验证。 您可以将个人访问令牌存储为环境变量，以免每次使用时都要输入。

使用个人访问令牌时，请牢记以下几点：

* 记得只能用此令牌代表您自己。
* 您可以执行一次性 cURL 请求。
* 您可以运行个人脚本。
* 不要为整个团队或公司设置脚本。
* 不要设置共享用户账户以用作自动程序用户。

### 确定要构建的集成

Before you get started creating integrations, you need to determine the best way to access, authenticate, and interact with the {% data variables.product.prodname_dotcom %} APIs. The following image offers some questions to ask yourself when deciding whether to use personal access tokens, {% data variables.product.prodname_github_apps %}, or {% data variables.product.prodname_oauth_app %}s for your integration.

![应用程序问题流程简介](/assets/images/intro-to-apps-flow.png)

请考虑关于您的集成需要如何操作及它需要访问什么等问题：

* 我的集成是只像我一样，还是更像一个应用程序？
* 我是否希望它作为单独的实体独立于我运行？
* 它是否能访问我可以访问的一切，或者说我想限制它的访问权限？
* 它是简单还是复杂？ For example, personal access tokens are good for simple scripts and cURLs, whereas an {% data variables.product.prodname_oauth_app %} can handle more complex scripting.

### 请求支持

{% data reusables.support.help_resources %}
