---
title: 识别和授权 GitHub 应用程序用户
intro: '{% data reusables.shortdesc.identifying_and_authorizing_github_apps %}'
redirect_from:
  - /early-access/integrations/user-identification-authorization/
  - /apps/building-integrations/setting-up-and-registering-github-apps/identifying-users-for-github-apps/
  - /apps/building-github-apps/identifying-and-authorizing-users-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github apps
---


{% data reusables.pre-release-program.expiring-user-access-tokens %}

当 GitHub 应用程序代表用户时，它执行用户到服务器请求。 这些请求必须使用用户的访问令牌进行授权。 用户到服务器请求包括请求用户的数据，例如确定要向特定用户显示哪些仓库。 这些请求还包括用户触发的操作，例如运行构建。

{% data reusables.apps.expiring_user_authorization_tokens %}

### 识别站点上的用户

要授权用户使用在浏览器中运行的标准应用程序，请使用 [web 应用程序流程](#web-application-flow)。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
要授权用户使用不直接访问浏览器的无头应用程序（例如 CLI 工具或 Git 凭据管理器），请使用[设备流程](#device-flow)。 设备流程使用 OAuth 2.0 [设备授权授予](https://tools.ietf.org/html/rfc8628)。
{% endif %}

### Web 应用程序流程

使用 web 应用程序流程时，识别您站点上用户的过程如下：

1. 用户被重定向，以请求他们的 GitHub 身份
2. 用户被 GitHub 重定向回您的站点
3. 您的 GitHub 应用程序使用用户的访问令牌访问 API

如果您在创建或修改应用程序时选择**在安装过程中请求用户授权 (OAuth)**，则步骤 1 将在应用程序安装过程中完成。 更多信息请参阅“[在安装过程中授权用户](/apps/installing-github-apps/#authorizing-users-during-installation)”。

#### 1. 请求用户的 GitHub 身份

    GET {% data variables.product.oauth_host_code %}/login/oauth/authorize

当您的 GitHub 应用程序指定 `login` 参数后，它将提示拥有特定账户的用户可以用来登录和授权您的应用程序。

##### 参数

| 名称             | 类型    | 描述                                                                                                                                                                                                                                                                                      |
| -------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`    | `字符串` | **必填。**GitHub 应用程序的客户端 ID。 选择应用程序时，您可以在 [GitHub 应用程序设置](https://github.com/settings/apps)中找到它。                                                                                                                                                                                          |
| `redirect_uri` | `字符串` | 用户获得授权后被发送到的应用程序中的 URL。 它必须完全匹配设置 GitHub 应用程序时 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} 作为 **Callback URL（回调 URL）**提供的 URL 之一 {% else %} 在 **User authorization callback URL（用户授权回调 URL）**字段中提供的 URL{% endif %}，并且不能包含任何其他参数。 |
| `state`        | `字符串` | 它应该包含一个随机字符串以防止伪造攻击，并且可以包含任何其他任意数据。                                                                                                                                                                                                                                                     |
| `login`        | `字符串` | 提供用于登录和授权应用程序的特定账户。                                                                                                                                                                                                                                                                     |
| `allow_signup` | `字符串` | 在 OAuth 流程中，是否向经过验证的用户提供注册 {% data variables.product.prodname_dotcom %} 的选项。 默认值为 `true`。 如有政策禁止注册，请使用 `false`。                                                                                                                                                                         |

{% note %}

**注** ：不需要在授权请求中提供作用域。 不同于传统的 OAuth，授权令牌仅限于与您的 GitHub 应用程序和用户的应用程序相关联的权限。

{% endnote %}

#### 2. 用户被 GitHub 重定向回您的站点

如果用户接受您的请求，GitHub 将重定向回您的站点，其中，代码参数为临时 `code`，`state` 参数为您在上一步提供的状态。 如果状态不匹配，则请求是由第三方创建的，该过程应中止。

{% note %}

**注：**如果您在创建或修改应用程序时选择**在安装过程中请求用户授权 (OAuth)**，则 GitHub 将返回需要交换访问令牌的临时 `code`。 当 GitHub 在应用程序安装过程中启动 OAuth 流程时，不会返回 `state` 参数。

{% endnote %}

将此 `code` 交换为访问令牌。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} 启用过期令牌后，访问令牌将在 8 小时后过期，刷新令牌将在 6 个月后过期。 每次刷新令牌时都会得到一个新的刷新令牌。 更多信息请参阅“[刷新用户到服务器访问令牌](/developers/apps/refreshing-user-to-server-access-tokens)”。

过期用户令牌目前是一个可选的功能，可能会更改。 要选择使用用户到服务器令牌过期功能，请参阅“[激活应用程序的可选功能](/developers/apps/activating-optional-features-for-apps)”。{% endif %}

    POST {% data variables.product.oauth_host_code %}/login/oauth/access_token

##### 参数

| 名称              | 类型    | 描述                                                                                                                                                                                                                                                                                      |
| --------------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `client_id`     | `字符串` | **必填。**GitHub 应用程序的客户端 ID。                                                                                                                                                                                                                                                              |
| `client_secret` | `字符串` | **必填。**GitHub 应用程序的客户端密钥。                                                                                                                                                                                                                                                               |
| `代码`            | `字符串` | **必填。**您收到的响应第 1 步的代码。                                                                                                                                                                                                                                                                  |
| `redirect_uri`  | `字符串` | 用户获得授权后被发送到的应用程序中的 URL。 它必须完全匹配设置 GitHub 应用程序时 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} 作为 **Callback URL（回调 URL）**提供的 URL 之一 {% else %} 在 **User authorization callback URL（用户授权回调 URL）**字段中提供的 URL{% endif %}，并且不能包含任何其他参数。 |
| `state`         | `字符串` | 您在第 1 步提供的不可猜测的随机字符串。                                                                                                                                                                                                                                                                   |

##### 响应

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}

默认情况下，响应采用以下形式。 响应参数 `expires_in`、`refresh_token` 和 `refresh_token_expires_in` 仅当您启用过期用户到服务器访问令牌功能时才会返回。

```json
{
  "access_token": "e72e16c7e42f292c6912e7710c838347ae178b4a",
  "expires_in": 28800,
  "refresh_token": "r1.c1b4a2e77838347a7e420ce178f2e7c6912e1692",
  "refresh_token_expires_in": 15811200,
  "scope": "",
  "token_type": "bearer"
}
```
{% else %}

默认情况下，响应采用以下形式：

    access_token=e72e16c7e42f292c6912e7710c838347ae178b4a&token_type=bearer

{% endif %}

#### 3. 您的 GitHub 应用程序使用用户的访问令牌访问 API

用户的访问令牌允许 GitHub 应用程序代表用户向 API 发出请求。

    Authorization: token OAUTH-TOKEN
    GET {% data variables.product.api_url_code %}/user

例如，您可以像以下这样在 curl 中设置“授权”标头：

```shell
curl -H "Authorization: token OAUTH-TOKEN" {% data variables.product.api_url_pre %}/user
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### 设备流程

{% if currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**注：**设备流程处于公开测试阶段，可能会有变化。

{% endnote %}
{% endif %}

设备流程允许您授权用户使用无头应用程序，例如 CLI 工具或 Git 凭据管理器。

有关使用设备流程授权用户的更多信息，请参阅“[授权 OAuth 应用程序](/developers/apps/authorizing-oauth-apps#device-flow)”。

{% endif %}

### 检查用户可以访问哪些安装资源

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% data reusables.pre-release-program.machine-man-preview %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

获得用户的 OAuth 令牌后，您可以检查该用户可以访问哪些安装。

    Authorization: token OAUTH-TOKEN
    GET /user/installations

您还可以检查用户可以访问哪些仓库进行安装。

    Authorization: token OAUTH-TOKEN
    GET /user/installations/:installation_id/repositories

更多信息请参阅：[列出用户访问令牌可访问的应用程序安装](/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token)和[列出用户访问令牌可访问的仓库](/rest/reference/apps#list-repositories-accessible-to-the-user-access-token)。

### 处理已撤销的 GitHub 应用程序授权

默认情况下，如果用户撤销对 GitHub 应用程序的授权，该应用程序将收到 [`github_app_authorization`](/webhooks/event-payloads/#github_app_authorization) web 挂钩。 GitHub 应用程序无法取消订阅此事件。 {% data reusables.webhooks.authorization_event %}

### 用户级别的权限

您可以向 GitHub 应用程序添加用户级别的权限，以访问用户电子邮件等用户资源，这些权限是单个用户在[用户授权流程](#identifying-users-on-your-site)中授予的。 用户级别的权限不同于[仓库和组织级别的权限](/rest/reference/permissions-required-for-github-apps)，后者是在组织或用户帐户上安装时授予的。

您可以在 **Permissions & webhooks（权限和 web 挂钩）**页面 **User permissions（用户权限）**部分的 GitHub 应用程序设置中选择用户级别的权限。 有关选择权限的更多信息，请参阅“[编辑 GitHub 应用程序的权限](/apps/managing-github-apps/editing-a-github-app-s-permissions/)”。

当用户在他们的帐户上安装您的应用程序时，安装提示将列出应用程序请求的用户级别权限，并说明应用程序会向各个用户请求这些权限。

由于用户级别的权限是基于单个用户授予的，因此您可以将它们添加到现有应用中，而无需提示用户升级。 但是，您需要通过用户授权流程发送现有用户，以授权新权限并为这些请求获取新的用户到服务器令牌。

### 用户到服务器请求

虽然大多数 API 交互应使用服务器到服务器安装访问令牌进行，但某些端点允许您使用用户访问令牌通过 API 执行操作。 您的应用程序可以使用[GraphQL v4](/graphql) 或 [REST v3](/rest) 端点发出以下请求。

#### 支持的端点

{% if currentVersion == "free-pro-team@latest" %}
##### 操作运行器

* [列出仓库的运行器应用程序](/rest/reference/actions#list-runner-applications-for-a-repository)
* [列出仓库的自托管运行器](/rest/reference/actions#list-self-hosted-runners-for-a-repository)
* [获取仓库的自托管运行器](/rest/reference/actions#get-a-self-hosted-runner-for-a-repository)
* [从仓库删除自托管运行器](/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository)
* [为仓库创建注册令牌](/rest/reference/actions#create-a-registration-token-for-a-repository)
* [为仓库创建删除令牌](/rest/reference/actions#create-a-remove-token-for-a-repository)
* [列出组织的运行器应用程序](/rest/reference/actions#list-runner-applications-for-an-organization)
* [列出组织的自托管运行器](/rest/reference/actions#list-self-hosted-runners-for-an-organization)
* [获取组织的自托管运行器](/rest/reference/actions#get-a-self-hosted-runner-for-an-organization)
* [从组织删除自托管运行器](/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization)
* [为组织创建注册令牌](/rest/reference/actions#create-a-registration-token-for-an-organization)
* [为组织创建删除令牌](/rest/reference/actions#create-a-remove-token-for-an-organization)

##### 操作密钥

* [获取仓库公钥](/rest/reference/actions#get-a-repository-public-key)
* [列出仓库密钥](/rest/reference/actions#list-repository-secrets)
* [获取仓库密钥](/rest/reference/actions#get-a-repository-secret)
* [创建或更新仓库密钥](/rest/reference/actions#create-or-update-a-repository-secret)
* [删除仓库密钥](/rest/reference/actions#delete-a-repository-secret)
* [获取组织公钥](/rest/reference/actions#get-an-organization-public-key)
* [列出组织密钥](/rest/reference/actions#list-organization-secrets)
* [获取组织密钥](/rest/reference/actions#get-an-organization-secret)
* [创建或更新组织密钥](/rest/reference/actions#create-or-update-an-organization-secret)
* [列出组织密钥的所选仓库](/rest/reference/actions#list-selected-repositories-for-an-organization-secret)
* [设置组织密钥的所选仓库](/rest/reference/actions#set-selected-repositories-for-an-organization-secret)
* [向组织密钥添加所选仓库](/rest/reference/actions#add-selected-repository-to-an-organization-secret)
* [从组织密钥删除所选仓库](/rest/reference/actions#remove-selected-repository-from-an-organization-secret)
* [删除组织密钥](/rest/reference/actions#delete-an-organization-secret)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### 构件

* [列出仓库的构件](/rest/reference/actions#list-artifacts-for-a-repository)
* [列出工作流程运行构件](/rest/reference/actions#list-workflow-run-artifacts)
* [获取构件](/rest/reference/actions#get-an-artifact)
* [删除构件](/rest/reference/actions#delete-an-artifact)
* [下载构件](/rest/reference/actions#download-an-artifact)
{% endif %}

##### 检查运行

* [创建检查运行](/rest/reference/checks#create-a-check-run)
* [获取检查运行](/rest/reference/checks#get-a-check-run)
* [更新检查运行](/rest/reference/checks#update-a-check-run)
* [列出检查运行注释](/rest/reference/checks#list-check-run-annotations)
* [列出检查套件中的检查运行](/rest/reference/checks#list-check-runs-in-a-check-suite)
* [列出 Git 引用的检查运行](/rest/reference/checks#list-check-runs-for-a-git-reference)

##### 检查套件

* [创建检查套件](/rest/reference/checks#create-a-check-suite)
* [获取检查套件](/rest/reference/checks#get-a-check-suite)
* [重新请求检查套件](/rest/reference/checks#rerequest-a-check-suite)
* [更新检查套件的仓库首选项](/rest/reference/checks#update-repository-preferences-for-check-suites)
* [列出 Git 引用的检查套件](/rest/reference/checks#list-check-suites-for-a-git-reference)

##### 行为准则

* [获取所有行为准则](/rest/reference/codes-of-conduct#get-all-codes-of-conduct)
* [获取行为准则](/rest/reference/codes-of-conduct#get-a-code-of-conduct)

##### 部署状态

* [列出部署状态](/rest/reference/repos#list-deployment-statuses)
* [创建部署状态](/rest/reference/repos#create-a-deployment-status)
* [获取部署状态](/rest/reference/repos#get-a-deployment-status)

##### 部署

* [列出部署](/rest/reference/repos#list-deployments)
* [创建部署](/rest/reference/repos#create-a-deployment)
* [获取部署](/rest/reference/repos#get-a-deployment){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
* [删除部署](/rest/reference/repos#delete-a-deployment){% endif %}

##### 事件

* [列出仓库网络的公开事件](/rest/reference/activity#list-public-events-for-a-network-of-repositories)
* [列出公开组织事件](/rest/reference/activity#list-public-organization-events)

##### 馈送

* [获取馈送](/rest/reference/activity#get-feeds)

##### Git Blob

* [创建 Blob](/rest/reference/git#create-a-blob)
* [获取 Blob](/rest/reference/git#get-a-blob)

##### Git 提交

* [创建提交](/rest/reference/git#create-a-commit)
* [获取提交](/rest/reference/git#get-a-commit)

##### Git 引用

* [创建引用](/rest/reference/git#create-a-reference)* [获取引用](/rest/reference/git#get-a-reference)
* [列出匹配的引用](/rest/reference/git#list-matching-references)
* [更新引用](/rest/reference/git#update-a-reference)
* [删除引用](/rest/reference/git#delete-a-reference)

##### Git 标记

* [创建标记对象](/rest/reference/git#create-a-tag-object)
* [获取标记](/rest/reference/git#get-a-tag)

##### Git 树

* [创建树](/rest/reference/git#create-a-tree)
* [获取树](/rest/reference/git#get-a-tree)

##### Gitignore 模板

* [获取所有 gitignore 模板](/rest/reference/gitignore#get-all-gitignore-templates)
* [获取 gitignore 模板](/rest/reference/gitignore#get-a-gitignore-template)

##### 安装设施

* [列出用户访问令牌可访问的仓库](/rest/reference/apps#list-repositories-accessible-to-the-user-access-token)

{% if currentVersion == "free-pro-team@latest" %}
##### 交互限制

* [获取组织的交互限制](/rest/reference/interactions#get-interaction-restrictions-for-an-organization)
* [设置组织的交互限制](/rest/reference/interactions#set-interaction-restrictions-for-an-organization)
* [删除组织的交互限制](/rest/reference/interactions#remove-interaction-restrictions-for-an-organization)
* [获取仓库的交互限制](/rest/reference/interactions#get-interaction-restrictions-for-a-repository)
* [设置仓库的交互限制](/rest/reference/interactions#set-interaction-restrictions-for-a-repository)
* [删除仓库的交互限制](/rest/reference/interactions#remove-interaction-restrictions-for-a-repository)
{% endif %}

##### 议题受理人

* [向议题添加受理人](/rest/reference/issues#add-assignees-to-an-issue)
* [从议题删除受理人](/rest/reference/issues#remove-assignees-from-an-issue)

##### 议题评论

* [列出议题评论](/rest/reference/issues#list-issue-comments)
* [创建议题评论](/rest/reference/issues#create-an-issue-comment)
* [列出仓库的议题评论](/rest/reference/issues#list-issue-comments-for-a-repository)
* [获取议题评论](/rest/reference/issues#get-an-issue-comment)
* [更新议题评论](/rest/reference/issues#update-an-issue-comment)
* [删除议题评论](/rest/reference/issues#delete-an-issue-comment)

##### 议题事件

* [列出议题事件](/rest/reference/issues#list-issue-events)

##### 议题时间表

* [列出议题的时间表事件](/rest/reference/issues#list-timeline-events-for-an-issue)

##### 议题

* [列出分配给经验证用户的议题](/rest/reference/issues#list-issues-assigned-to-the-authenticated-user)
* [列出受理人](/rest/reference/issues#list-assignees)
* [检查是否可以分配给用户](/rest/reference/issues#check-if-a-user-can-be-assigned)
* [列出仓库议题](/rest/reference/issues#list-repository-issues)
* [创建议题](/rest/reference/issues#create-an-issue)
* [获取议题](/rest/reference/issues#get-an-issue)
* [更新议题](/rest/reference/issues#update-an-issue)
* [锁定议题](/rest/reference/issues#lock-an-issue)
* [解锁议题](/rest/reference/issues#unlock-an-issue)

{% if currentVersion == "free-pro-team@latest" %}
##### Jobs

* [获取工作流程运行的作业](/rest/reference/actions#get-a-job-for-a-workflow-run)
* [下载工作流程运行的作业日志](/rest/reference/actions#download-job-logs-for-a-workflow-run)
* [列出工作流程运行的作业](/rest/reference/actions#list-jobs-for-a-workflow-run)
{% endif %}

##### 标签

* [列出议题的标签](/rest/reference/issues#list-labels-for-an-issue)
* [向议题添加标签](/rest/reference/issues#add-labels-to-an-issue)
* [为议题设置标签](/rest/reference/issues#set-labels-for-an-issue)
* [删除议题的所有标签](/rest/reference/issues#remove-all-labels-from-an-issue)
* [删除议题的一个标签](/rest/reference/issues#remove-a-label-from-an-issue)
* [列出仓库的标签](/rest/reference/issues#list-labels-for-a-repository)
* [创建标签](/rest/reference/issues#create-a-label)
* [获取标签](/rest/reference/issues#get-a-label)
* [更新标签](/rest/reference/issues#update-a-label)
* [删除标签](/rest/reference/issues#delete-a-label)
* [获取里程碑中每个议题的标签](/rest/reference/issues#list-labels-for-issues-in-a-milestone)

##### 许可

* [获取所有常用许可](/rest/reference/licenses#get-all-commonly-used-licenses)
* [获取许可](/rest/reference/licenses#get-a-license)

##### Markdown

* [渲染 Markdown 文档](/rest/reference/markdown#render-a-markdown-document)
* [在原始模式下渲染 Markdown 文档](/rest/reference/markdown#render-a-markdown-document-in-raw-mode)

##### 元数据

* [元数据](/rest/reference/meta#meta)

##### 里程碑

* [列出里程碑](/rest/reference/issues#list-milestones)
* [创建里程碑](/rest/reference/issues#create-a-milestone)
* [获取里程碑](/rest/reference/issues#get-a-milestone)
* [更新里程碑](/rest/reference/issues#update-a-milestone)
* [删除里程碑](/rest/reference/issues#delete-a-milestone)

##### 组织挂钩

* [列出组织 web 挂钩](/rest/reference/orgs#webhooks/#list-organization-webhooks)
* [创建组织 web 挂钩](/rest/reference/orgs#webhooks/#create-an-organization-webhook)
* [获取组织 web 挂钩](/rest/reference/orgs#webhooks/#get-an-organization-webhook)
* [更新组织 web 挂钩](/rest/reference/orgs#webhooks/#update-an-organization-webhook)
* [删除组织 web 挂钩](/rest/reference/orgs#webhooks/#delete-an-organization-webhook)
* [Ping 组织 web 挂钩](/rest/reference/orgs#webhooks/#ping-an-organization-webhook)

{% if currentVersion == "free-pro-team@latest" %}
##### 组织邀请

* [列出待处理的组织邀请](/rest/reference/orgs#list-pending-organization-invitations)
* [创建组织邀请](/rest/reference/orgs#create-an-organization-invitation)
* [列出组织邀请团队](/rest/reference/orgs#list-organization-invitation-teams)
{% endif %}

##### 组织成员

* [列出组织成员](/rest/reference/orgs#list-organization-members)
* [检查用户的组织成员身份](/rest/reference/orgs#check-organization-membership-for-a-user)
* [删除组织成员](/rest/reference/orgs#remove-an-organization-member)
* [获取用户的组织成员身份](/rest/reference/orgs#get-organization-membership-for-a-user)
* [设置用户的组织成员身份](/rest/reference/orgs#set-organization-membership-for-a-user)
* [删除用户的组织成员身份](/rest/reference/orgs#remove-organization-membership-for-a-user)
* [列出公共组织成员](/rest/reference/orgs#list-public-organization-members)
* [检查用户的公共组织成员身份](/rest/reference/orgs#check-public-organization-membership-for-a-user)
* [设置经验证用户的公共组织成员身份](/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user)
* [删除经验证用户的公共组织成员身份](/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user)

##### 组织外部协作者

* [列出组织的外部协作者](/rest/reference/orgs#list-outside-collaborators-for-an-organization)
* [将组织成员转换为外部协作者](/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator)
* [删除组织的外部协作者](/rest/reference/orgs#remove-outside-collaborator-from-an-organization)

{% if enterpriseServerVersions contains currentVersion %}
##### 组织预接收挂钩

* [列出组织的预接收挂钩](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-an-organization)
* [获取组织的预接收挂钩](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-an-organization)
* [更新组织的预接收挂钩实施](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-an-organization)
* [删除组织的预接收挂钩实施](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### 组织团队项目

* [列出团队项目](/rest/reference/teams#list-team-projects)
* [检查项目的团队权限](/rest/reference/teams#check-team-permissions-for-a-project)
* [添加或更新团队项目权限](/rest/reference/teams#add-or-update-team-project-permissions)
* [从团队删除项目](/rest/reference/teams#remove-a-project-from-a-team)
{% endif %}

##### 组织团队仓库

* [列出团队仓库](/rest/reference/teams#list-team-repositories)
* [检查仓库的团队权限](/rest/reference/teams#check-team-permissions-for-a-repository)
* [添加或更新团队仓库权限](/rest/reference/teams#add-or-update-team-repository-permissions)
* [从团队删除仓库](/rest/reference/teams#remove-a-repository-from-a-team)

{% if currentVersion == "free-pro-team@latest" %}
##### 组织团队同步

* [列出团队的 idp 组](/rest/reference/teams#list-idp-groups-for-a-team)
* [创建或更新 idp 组连接](/rest/reference/teams#create-or-update-idp-group-connections)
* [列出组织的 IdP 组](/rest/reference/teams#list-idp-groups-for-an-organization)
{% endif %}

##### 组织团队

* [列出团队](/rest/reference/teams#list-teams)
* [创建团队](/rest/reference/teams#create-a-team)
* [按名称获取团队](/rest/reference/teams#get-a-team-by-name)
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
* [获取团队](/rest/reference/teams#get-a-team)
{% endif %}
* [更新团队](/rest/reference/teams#update-a-team)
* [删除团队](/rest/reference/teams#delete-a-team)
{% if currentVersion == "free-pro-team@latest" %}
* [列出待处理的团队邀请](/rest/reference/teams#list-pending-team-invitations)
{% endif %}
* [列出团队成员](/rest/reference/teams#list-team-members)
* [获取用户的团队成员身份](/rest/reference/teams#get-team-membership-for-a-user)
* [添加或更新用户的团队成员身份](/rest/reference/teams#add-or-update-team-membership-for-a-user)
* [删除用户的团队成员身份](/rest/reference/teams#remove-team-membership-for-a-user)
* [列出子团队](/rest/reference/teams#list-child-teams)
* [列出经验证用户的团队](/rest/reference/teams#list-teams-for-the-authenticated-user)

##### 组织

* [列出组织](/rest/reference/orgs#list-organizations)
* [获取组织](/rest/reference/orgs#get-an-organization)
* [更新组织](/rest/reference/orgs#update-an-organization)
* [列出经验证用户的组织成员身份](/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user)
* [获取经验证用户的组织成员身份](/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user)
* [更新经验证用户的组织成员身份](/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user)
* [列出经验证用户的组织](/rest/reference/orgs#list-organizations-for-the-authenticated-user)
* [列出用户的组织](/rest/reference/orgs#list-organizations-for-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### 组织凭据授权

* [列出组织的 SAML SSO 授权](/rest/reference/orgs#list-saml-sso-authorizations-for-an-organization)
* [删除组织的 SAML SSO 授权](/rest/reference/orgs#remove-a-saml-sso-authorization-for-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### 组织 SCIM

* [列出 SCIM 预配标识](/rest/reference/scim#list-scim-provisioned-identities)
* [预配并邀请 SCIM 用户](/rest/reference/scim#provision-and-invite-a-scim-user)
* [获取用户的 SCIM 预配信息](/rest/reference/scim#get-scim-provisioning-information-for-a-user)
* [为预配用户设置 SCIM 信息](/rest/reference/scim#set-scim-information-for-a-provisioned-user)
* [更新 SCIM 用户的属性](/rest/reference/scim#update-an-attribute-for-a-scim-user)
* [从组织中删除 SCIM 用户](/rest/reference/scim#delete-a-scim-user-from-an-organization)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### 源导入

* [获取导入状态](/rest/reference/migrations#get-an-import-status)
* [开始导入](/rest/reference/migrations#start-an-import)
* [更新导入](/rest/reference/migrations#update-an-import)
* [取消导入](/rest/reference/migrations#cancel-an-import)
* [获取提交作者](/rest/reference/migrations#get-commit-authors)
* [映射提交作者](/rest/reference/migrations#map-a-commit-author)
* [获取大文件](/rest/reference/migrations#get-large-files)
* [更新 Git LFS 首选项](/rest/reference/migrations#update-git-lfs-preference)
{% endif %}

##### 项目协作者

* [列出项目协作者](/rest/reference/projects#list-project-collaborators)
* [添加项目协作者](/rest/reference/projects#add-project-collaborator)
* [删除项目协作者](/rest/reference/projects#remove-project-collaborator)
* [获取用户的项目权限](/rest/reference/projects#get-project-permission-for-a-user)

##### 项目

* [列出组织项目](/rest/reference/projects#list-organization-projects)
* [创建组织项目](/rest/reference/projects#create-an-organization-project)
* [获取项目](/rest/reference/projects#get-a-project)
* [更新项目](/rest/reference/projects#update-a-project)
* [删除项目](/rest/reference/projects#delete-a-project)
* [列出项目列](/rest/reference/projects#list-project-columns)
* [创建项目列](/rest/reference/projects#create-a-project-column)
* [获取项目列](/rest/reference/projects#get-a-project-column)
* [更新项目列](/rest/reference/projects#update-a-project-column)
* [删除项目列](/rest/reference/projects#delete-a-project-column)
* [列出项目卡](/rest/reference/projects#list-project-cards)
* [创建项目卡](/rest/reference/projects#create-a-project-card)
* [移动项目列](/rest/reference/projects#move-a-project-column)
* [获取项目卡](/rest/reference/projects#get-a-project-card)
* [更新项目卡](/rest/reference/projects#update-a-project-card)
* [删除项目卡](/rest/reference/projects#delete-a-project-card)
* [移动项目卡](/rest/reference/projects#move-a-project-card)
* [列出仓库项目](/rest/reference/projects#list-repository-projects)
* [创建仓库项目](/rest/reference/projects#create-a-repository-project)

##### 拉取注释

* [列出拉取请求的审查注释](/rest/reference/pulls#list-review-comments-on-a-pull-request)
* [为拉取请求创建审查注释](/rest/reference/pulls#create-a-review-comment-for-a-pull-request)
* [列出仓库中的审查注释](/rest/reference/pulls#list-review-comments-in-a-repository)
* [获取拉取请求的审查注释](/rest/reference/pulls#get-a-review-comment-for-a-pull-request)
* [更新拉取请求的审查注释](/rest/reference/pulls#update-a-review-comment-for-a-pull-request)
* [删除拉取请求的审查注释](/rest/reference/pulls#delete-a-review-comment-for-a-pull-request)

##### 拉取请求审查事件

* [忽略拉取请求审查](/rest/reference/pulls#dismiss-a-review-for-a-pull-request)
* [提交拉取请求审查](/rest/reference/pulls#submit-a-review-for-a-pull-request)

##### 拉取请求审查请求

* [列出拉取请求的请求审查者](/rest/reference/pulls#list-requested-reviewers-for-a-pull-request)
* [请求拉取请求的审查者](/rest/reference/pulls#request-reviewers-for-a-pull-request)
* [删除拉取请求的请求审查者](/rest/reference/pulls#remove-requested-reviewers-from-a-pull-request)

##### 拉取请求审查

* [列出拉取请求审查](/rest/reference/pulls#list-reviews-for-a-pull-request)
* [创建拉取请求审查](/rest/reference/pulls#create-a-review-for-a-pull-request)
* [获取拉取请求审查](/rest/reference/pulls#get-a-review-for-a-pull-request)
* [更新拉取请求审查](/rest/reference/pulls#update-a-review-for-a-pull-request)
* [列出拉取请求审查的注释](/rest/reference/pulls#list-comments-for-a-pull-request-review)

##### 拉取

* [列出拉取请求](/rest/reference/pulls#list-pull-requests)
* [创建拉取请求](/rest/reference/pulls#create-a-pull-request)
* [获取拉取请求](/rest/reference/pulls#get-a-pull-request)
* [更新拉取请求](/rest/reference/pulls#update-a-pull-request)
* [列出拉取请求上的提交](/rest/reference/pulls#list-commits-on-a-pull-request)
* [列出拉取请求文件](/rest/reference/pulls#list-pull-requests-files)
* [检查拉取请求是否已合并](/rest/reference/pulls#check-if-a-pull-request-has-been-merged)
* [合并拉取请求（合并按钮）](/rest/reference/pulls#merge-a-pull-request)

##### 反应

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}* [删除反应](/rest/reference/reactions#delete-a-reaction-legacy){% else %}* [删除反应](/rest/reference/reactions#delete-a-reaction){% endif %}
* [列出提交注释的反应](/rest/reference/reactions#list-reactions-for-a-commit-comment)
* [创建提交注释的反应](/rest/reference/reactions#create-reaction-for-a-commit-comment)
* [列出议题的反应](/rest/reference/reactions#list-reactions-for-an-issue)
* [创建议题的反应](/rest/reference/reactions#create-reaction-for-an-issue)
* [列出议题注释的反应](/rest/reference/reactions#list-reactions-for-an-issue-comment)
* [创建议题注释的反应](/rest/reference/reactions#create-reaction-for-an-issue-comment)
* [列出拉取请求审查注释的反应](/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment)
* [创建拉取请求审查注释的反应](/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment)
* [列出团队讨论注释的反应](/rest/reference/reactions#list-reactions-for-a-team-discussion-comment)
* [创建团队讨论注释的反应](/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)
* [列出团队讨论的反应](/rest/reference/reactions#list-reactions-for-a-team-discussion)
* [创建团队讨论的反应](/rest/reference/reactions#create-reaction-for-a-team-discussion){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
* [删除提交注释反应](/rest/reference/reactions#delete-a-commit-comment-reaction)
* [删除议题反应](/rest/reference/reactions#delete-an-issue-reaction)
* [删除对提交注释的反应](/rest/reference/reactions#delete-an-issue-comment-reaction)
* [删除拉取请求注释反应](/rest/reference/reactions#delete-a-pull-request-comment-reaction)
* [删除团队讨论反应](/rest/reference/reactions#delete-team-discussion-reaction)
* [删除团队讨论注释反应](/rest/reference/reactions#delete-team-discussion-comment-reaction){% endif %}

##### 仓库

* [列出组织仓库](/rest/reference/repos#list-organization-repositories)
* [为经验证的用户创建仓库。](/rest/reference/repos#create-a-repository-for-the-authenticated-user)
* [获取仓库](/rest/reference/repos#get-a-repository)
* [更新仓库](/rest/reference/repos#update-a-repository)
* [删除仓库](/rest/reference/repos#delete-a-repository)
* [比较两个提交](/rest/reference/repos#compare-two-commits)
* [列出仓库贡献者](/rest/reference/repos#list-repository-contributors)
* [列出复刻](/rest/reference/repos#list-forks)
* [创建复刻](/rest/reference/repos#create-a-fork)
* [列出仓库语言](/rest/reference/repos#list-repository-languages)
* [列出仓库标记](/rest/reference/repos#list-repository-tags)
* [列出仓库团队](/rest/reference/repos#list-repository-teams)
* [转让仓库](/rest/reference/repos#transfer-a-repository)
* [列出公共仓库](/rest/reference/repos#list-public-repositories)
* [列出经验证用户的仓库](/rest/reference/repos#list-repositories-for-the-authenticated-user)
* [列出用户的仓库](/rest/reference/repos#list-repositories-for-a-user)
* [使用仓库模板创建仓库](/rest/reference/repos#create-repository-using-a-repository-template)

##### 仓库活动

* [列出标星者](/rest/reference/activity#list-stargazers)
* [列出关注者](/rest/reference/activity#list-watchers)
* [列出用户标星的仓库](/rest/reference/activity#list-repositories-starred-by-a-user)
* [检查仓库是否被经验证用户标星](/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user)
* [标星经验证用户的仓库](/rest/reference/activity#star-a-repository-for-the-authenticated-user)
* [取消标星经验证用户的仓库](/rest/reference/activity#unstar-a-repository-for-the-authenticated-user)
* [列出用户关注的仓库](/rest/reference/activity#list-repositories-watched-by-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### 仓库自动安全修复

* [启用自动安全修复](/rest/reference/repos#enable-automated-security-fixes)
* [禁用自动安全修复](/rest/reference/repos#disable-automated-security-fixes)
{% endif %}

##### 仓库分支

* [列出分支](/rest/reference/repos#list-branches)
* [获取分支](/rest/reference/repos#get-a-branch)
* [获取分支保护](/rest/reference/repos#get-branch-protection)
* [更新分支保护](/rest/reference/repos#update-branch-protection)
* [删除分支保护](/rest/reference/repos#delete-branch-protection)
* [获取管理员分支保护](/rest/reference/repos#get-admin-branch-protection)
* [设置管理员分支保护](/rest/reference/repos#set-admin-branch-protection)
* [删除管理员分支保护](/rest/reference/repos#delete-admin-branch-protection)
* [获取拉取请求审查保护](/rest/reference/repos#get-pull-request-review-protection)
* [更新拉取请求审查保护](/rest/reference/repos#update-pull-request-review-protection)
* [删除拉取请求审查保护](/rest/reference/repos#delete-pull-request-review-protection)
* [获取提交签名保护](/rest/reference/repos#get-commit-signature-protection)
* [创建提交签名保护](/rest/reference/repos#create-commit-signature-protection)
* [删除提交签名保护](/rest/reference/repos#delete-commit-signature-protection)
* [获取状态检查保护](/rest/reference/repos#get-status-checks-protection)
* [更新状态检查保护](/rest/reference/repos#update-status-check-protection)
* [删除状态检查保护](/rest/reference/repos#remove-status-check-protection)
* [获取所有状态检查上下文](/rest/reference/repos#get-all-status-check-contexts)
* [添加状态检查上下文](/rest/reference/repos#add-status-check-contexts)
* [设置状态检查上下文](/rest/reference/repos#set-status-check-contexts)
* [删除状态检查上下文](/rest/reference/repos#remove-status-check-contexts)
* [获取访问限制](/rest/reference/repos#get-access-restrictions)
* [删除访问限制](/rest/reference/repos#delete-access-restrictions)
* [列出有权访问受保护分支的团队](/rest/reference/repos#list-teams-with-access-to-the-protected-branch)
* [添加团队访问限制](/rest/reference/repos#add-team-access-restrictions)
* [设置团队访问限制](/rest/reference/repos#set-team-access-restrictions)
* [删除团队访问限制](/rest/reference/repos#remove-team-access-restrictions)
* [列出受保护分支的用户限制](/rest/reference/repos#list-users-with-access-to-the-protected-branch)
* [添加用户访问限制](/rest/reference/repos#add-user-access-restrictions)
* [设置用户访问限制](/rest/reference/repos#set-user-access-restrictions)
* [删除用户访问限制](/rest/reference/repos#remove-user-access-restrictions)
* [合并分支](/rest/reference/repos#merge-a-branch)

##### 仓库协作者

* [列出仓库协作者](/rest/reference/repos#list-repository-collaborators)
* [检查用户是否为仓库协作者](/rest/reference/repos#check-if-a-user-is-a-repository-collaborator)
* [添加仓库协作者](/rest/reference/repos#add-a-repository-collaborator)
* [删除仓库协作者](/rest/reference/repos#remove-a-repository-collaborator)
* [获取用户的仓库权限](/rest/reference/repos#get-repository-permissions-for-a-user)

##### 仓库提交注释

* [列出仓库的提交注释](/rest/reference/repos#list-commit-comments-for-a-repository)
* [获取提交注释](/rest/reference/repos#get-a-commit-comment)
* [更新提交注释](/rest/reference/repos#update-a-commit-comment)
* [删除提交注释](/rest/reference/repos#delete-a-commit-comment)
* [列出提交注释](/rest/reference/repos#list-commit-comments)
* [创建提交注释](/rest/reference/repos#create-a-commit-comment)

##### 仓库提交

* [列出提交](/rest/reference/repos#list-commits)
* [获取提交](/rest/reference/repos#get-a-commit)
* [列出头部提交分支](/rest/reference/repos#list-branches-for-head-commit)
* [列出与提交关联的拉取请求](/rest/reference/repos#list-pull-requests-associated-with-commit)

##### 仓库社区

* [获取仓库的行为准则](/rest/reference/codes-of-conduct#get-the-code-of-conduct-for-a-repository)
{% if currentVersion == "free-pro-team@latest" %}
* [获取社区资料指标](/rest/reference/repos#get-community-profile-metrics)
{% endif %}

##### 仓库内容

* [下载仓库存档](/rest/reference/repos#download-a-repository-archive)
* [获取仓库内容](/rest/reference/repos#get-repository-content)
* [创建或更新文件内容](/rest/reference/repos#create-or-update-file-contents)
* [删除文件](/rest/reference/repos#delete-a-file)
* [获取仓库自述文件](/rest/reference/repos#get-a-repository-readme)
* [获取仓库许可](/rest/reference/licenses#get-the-license-for-a-repository)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
##### 仓库事件调度

* [创建仓库调度事件](/rest/reference/repos#create-a-repository-dispatch-event)
{% endif %}

##### 仓库挂钩

* [列出仓库 web 挂钩](/rest/reference/repos#list-repository-webhooks)
* [创建仓库 web 挂钩](/rest/reference/repos#create-a-repository-webhook)
* [获取仓库 web 挂钩](/rest/reference/repos#get-a-repository-webhook)
* [更新仓库 web 挂钩](/rest/reference/repos#update-a-repository-webhook)
* [删除仓库 web 挂钩](/rest/reference/repos#delete-a-repository-webhook)
* [Ping 仓库 web 挂钩](/rest/reference/repos#ping-a-repository-webhook)
* [测试推送仓库 web 挂钩](/rest/reference/repos#test-the-push-repository-webhook)

##### 仓库邀请

* [列出仓库邀请](/rest/reference/repos#list-repository-invitations)
* [更新仓库邀请](/rest/reference/repos#update-a-repository-invitation)
* [删除仓库邀请](/rest/reference/repos#delete-a-repository-invitation)
* [列出经验证用户的仓库邀请](/rest/reference/repos#list-repository-invitations-for-the-authenticated-user)
* [接受仓库邀请](/rest/reference/repos#accept-a-repository-invitation)
* [拒绝仓库邀请](/rest/reference/repos#decline-a-repository-invitation)

##### 仓库密钥

* [列出部署密钥](/rest/reference/repos#list-deploy-keys)
* [创建部署密钥](/rest/reference/repos#create-a-deploy-key)
* [获取部署密钥](/rest/reference/repos#get-a-deploy-key)
* [删除部署密钥](/rest/reference/repos#delete-a-deploy-key)

##### 仓库页面

* [获取 GitHub Pages 站点](/rest/reference/repos#get-a-github-pages-site)
* [创建 GitHub Pages 站点](/rest/reference/repos#create-a-github-pages-site)
* [更新关于 GitHub Pages 站点的信息](/rest/reference/repos#update-information-about-a-github-pages-site)
* [删除 GitHub Pages 站点](/rest/reference/repos#delete-a-github-pages-site)
* [列出 GitHub Pages 构建](/rest/reference/repos#list-github-pages-builds)
* [请求 GitHub Pages 构建](/rest/reference/repos#request-a-github-pages-build)
* [获取 GitHub Pages 构建](/rest/reference/repos#get-github-pages-build)
* [获取最新页面构建](/rest/reference/repos#get-latest-pages-build)

{% if enterpriseServerVersions contains currentVersion %}
##### 仓库预接收挂钩

* [列出仓库的预接收挂钩](/enterprise/user/rest/reference/enterprise-admin#list-pre-receive-hooks-for-a-repository)
* [获取仓库的预接收挂钩](/enterprise/user/rest/reference/enterprise-admin#get-a-pre-receive-hook-for-a-repository)
* [更新仓库的预接收挂钩实施](/enterprise/user/rest/reference/enterprise-admin#update-pre-receive-hook-enforcement-for-a-repository)
* [删除仓库的预接收挂钩实施](/enterprise/user/rest/reference/enterprise-admin#remove-pre-receive-hook-enforcement-for-a-repository)
{% endif %}

##### 仓库发行版

* [列出发行版](/rest/reference/repos/#list-releases)
* [创建发行版](/rest/reference/repos/#create-a-release)
* [获取发行版](/rest/reference/repos/#get-a-release)
* [更新发行版](/rest/reference/repos/#update-a-release)
* [删除发行版](/rest/reference/repos/#delete-a-release)
* [列出发行版资产](/rest/reference/repos/#list-release-assets)
* [获取发行版资产](/rest/reference/repos/#get-a-release-asset)
* [更新发行版资产](/rest/reference/repos/#update-a-release-asset)
* [删除发行版资产](/rest/reference/repos/#delete-a-release-asset)
* [获取最新发行版](/rest/reference/repos/#get-the-latest-release)
* [按标记名称获取发行版](/rest/reference/repos/#get-a-release-by-tag-name)

##### 仓库统计

* [获取每周提交活动](/rest/reference/repos#get-the-weekly-commit-activity)
* [获取最近一年的提交活动](/rest/reference/repos#get-the-last-year-of-commit-activity)
* [获取所有参与者提交活动](/rest/reference/repos#get-all-contributor-commit-activity)
* [获取每周提交计数](/rest/reference/repos#get-the-weekly-commit-count)
* [获取每天的每小时提交计数](/rest/reference/repos#get-the-hourly-commit-count-for-each-day)

{% if currentVersion == "free-pro-team@latest" %}
##### 仓库漏洞警报

* [启用漏洞警报](/rest/reference/repos#enable-vulnerability-alerts)
* [禁用漏洞警报](/rest/reference/repos#disable-vulnerability-alerts)
{% endif %}

##### 根

* [根端点](/rest#root-endpoint)
* [表情符号](/rest/reference/emojis#emojis)
* [获取经验证用户的速率限制状态](/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user)

##### 搜索

* [搜索代码](/rest/reference/search#search-code)
* [搜索提交](/rest/reference/search#search-commits)
* [搜索标签](/rest/reference/search#search-labels)
* [搜索仓库](/rest/reference/search#search-repositories)
* [搜索主题](/rest/reference/search#search-topics)
* [搜索用户](/rest/reference/search#search-users)

##### 状态

* [获取特定引用的组合状态](/rest/reference/repos#get-the-combined-status-for-a-specific-reference)
* [列出引用的提交状态](/rest/reference/repos#list-commit-statuses-for-a-reference)
* [创建提交状态](/rest/reference/repos#create-a-commit-status)

##### 团队讨论

* [列出讨论](/rest/reference/teams#list-discussions)
* [创建讨论](/rest/reference/teams#create-a-discussion)
* [获取讨论](/rest/reference/teams#get-a-discussion)
* [更新讨论](/rest/reference/teams#update-a-discussion)
* [删除讨论](/rest/reference/teams#delete-a-discussion)
* [列出讨论注释](/rest/reference/teams#list-discussion-comments)
* [创建讨论注释](/rest/reference/teams#create-a-discussion-comment)
* [获取讨论注释](/rest/reference/teams#get-a-discussion-comment)
* [更新讨论注释](/rest/reference/teams#update-a-discussion-comment)
* [删除讨论注释](/rest/reference/teams#delete-a-discussion-comment)

##### 主题

* [获取所有仓库主题](/rest/reference/repos#get-all-repository-topics)
* [替换所有仓库主题](/rest/reference/repos#replace-all-repository-topics)

{% if currentVersion == "free-pro-team@latest" %}
##### 流量

* [获取仓库克隆](/rest/reference/repos#get-repository-clones)
* [获取主要推荐途径](/rest/reference/repos#get-top-referral-paths)
* [获取主要推荐来源](/rest/reference/repos#get-top-referral-sources)
* [获取页面视图](/rest/reference/repos#get-page-views)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### 用户阻止

* [列出经验证用户阻止的用户](/rest/reference/users#list-users-blocked-by-the-authenticated-user)
* [检查用户是否被经验证的用户阻止](/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user)
* [列出被组织阻止的用户](/rest/reference/orgs#list-users-blocked-by-an-organization)
* [检查用户是否被组织阻止](/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization)
* [阻止用户访问组织](/rest/reference/orgs#block-a-user-from-an-organization)
* [取消阻止用户访问组织](/rest/reference/orgs#unblock-a-user-from-an-organization)
* [阻止用户](/rest/reference/users#block-a-user)
* [取消阻止用户](/rest/reference/users#unblock-a-user)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
##### 用户电子邮件

{% if currentVersion == "free-pro-team@latest" %}
* [设置经验证用户的主电子邮件地址可见性](/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user)
{% endif %}
* [列出经验证用户的电子邮件地址](/rest/reference/users#list-email-addresses-for-the-authenticated-user)
* [添加电子邮件地址](/rest/reference/users#add-an-email-address-for-the-authenticated-user)
* [删除电子邮件地址](/rest/reference/users#delete-an-email-address-for-the-authenticated-user)
* [列出经验证用户的公开电子邮件地址](/rest/reference/users#list-public-email-addresses-for-the-authenticated-user)
{% endif %}

##### 用户关注者

* [列出用户的关注者](/rest/reference/users#list-followers-of-a-user)
* [列出用户关注的人](/rest/reference/users#list-the-people-a-user-follows)
* [检查用户是否被经验证用户关注](/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user)
* [关注用户](/rest/reference/users#follow-a-user)
* [取消关注用户](/rest/reference/users#unfollow-a-user)
* [检查用户是否关注其他用户](/rest/reference/users#check-if-a-user-follows-another-user)

##### 用户 Gpg 密钥

* [列出经验证用户的 GPG 密钥](/rest/reference/users#list-gpg-keys-for-the-authenticated-user)
* [为经验证用户创建 GPG 密钥](/rest/reference/users#create-a-gpg-key-for-the-authenticated-user)
* [获取经验证用户的 GPG 密钥](/rest/reference/users#get-a-gpg-key-for-the-authenticated-user)
* [删除经验证用户的 GPG 密钥](/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user)
* [列出用户的 Gpg 密钥](/rest/reference/users#list-gpg-keys-for-a-user)

##### 用户公钥

* [列出经验证用户的 SSH 公钥](/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user)
* [为经验证用户创建 SSH 公钥](/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user)
* [获取经验证用户的 SSH 公钥](/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user)
* [删除经验证用户的 SSH 公钥](/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user)
* [列出用户的公钥](/rest/reference/users#list-public-keys-for-a-user)

##### 用户

* [获取经验证的用户](/rest/reference/users#get-the-authenticated-user)
* [列出用户访问令牌可访问的应用程序安装设施](/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token)
{% if currentVersion == "free-pro-team@latest" %}
* [列出经验证用户的订阅](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)
{% endif %}
* [列出用户](/rest/reference/users#list-users)
* [获取用户](/rest/reference/users#get-a-user)

{% if currentVersion == "free-pro-team@latest" %}
##### 工作流程运行

* [列出仓库的工作流程运行](/rest/reference/actions#list-workflow-runs-for-a-repository)
* [获取工作流程运行](/rest/reference/actions#get-a-workflow-run)
* [取消工作流程运行](/rest/reference/actions#cancel-a-workflow-run)
* [下载工作流程运行日志](/rest/reference/actions#download-workflow-run-logs)
* [删除工作流程运行日志](/rest/reference/actions#delete-workflow-run-logs)
* [重新运行工作流程](/rest/reference/actions#re-run-a-workflow)
* [列出工作流程运行](/rest/reference/actions#list-workflow-runs)
* [获取工作流程运行使用情况](/rest/reference/actions#get-workflow-run-usage)
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
##### 工作流程

* [列出仓库工作流程](/rest/reference/actions#list-repository-workflows)
* [获取工作流程](/rest/reference/actions#get-a-workflow)
* [获取工作流程使用情况](/rest/reference/actions#get-workflow-usage)
{% endif %}
