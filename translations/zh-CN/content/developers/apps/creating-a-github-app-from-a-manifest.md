---
title: 从清单创建 GitHub 应用程序
intro: 'GitHub 应用程序清单是预先配置的 GitHub 应用程序，您可以与希望在其个人仓库中使用您的应用程序的任何用户分享它。 清单流程允许用户快速创建、安装和开始扩展 GitHub 应用程序，而无需注册应用程序或将注册连接到托管应用代码。'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github apps
---


### 关于 GitHub 应用程序清单

当有人从清单创建 GitHub 应用程序时，他们只需遵循 URL 并命名应用程序即可。 清单包括自动注册应用程序所需的权限、事件和 web 挂钩 URL。 清单流程创建 GitHub 应用程序注册并检索应用程序的 web 挂钩密钥、私钥 （PEM 文件） 和 GitHub 应用程序 ID。 从清单创建应用程序的人将拥有该应用程序，并且可以选择[编辑应用程序的配置设置](/apps/managing-github-apps/modifying-a-github-app/)、删除它或将其转让给 GitHub 上的其他人。

您可以使用 [Probot](https://probot.github.io/) 开始使用 GitHub 应用程序清单或查看示例实现。 更多信息请参阅“[使用 Probot 实现 GitHub 应用程序清单流程](#using-probot-to-implement-the-github-app-manifest-flow)”。

以下是您可以使用 GitHub 应用程序清单来创建预配置应用程序的一些场景：

* 开发 GitHub 应用程序时，帮助新的团队成员快速上手。
* 允许其他人使用 GitHub API 扩展 GitHub 应用程序，而无需他们配置应用程序。
* 创建 GitHub 应用程序参考设计，与 GitHub 社区分享。
* 确保使用相同的配置将 GitHub 应用程序部署到开发和生产环境。
* 跟踪对 GitHub 应用程序配置的修订。

### 实现 GitHub 应用程序清单流程

GitHub 应用程序清单使用类似于 [OAuth 流程](/apps/building-oauth-apps/authorizing-oauth-apps/)的握手过程。 该流程使用清单[注册 GitHub 应用程序](/apps/building-github-apps/creating-a-github-app/)，并接收用于检索应用程序私钥、web 挂钩密钥和 ID 的临时 `code`。

{% note %}

**注：**您必须在一小时内完成 GitHub 应用程序清单流程中的所有三个步骤。

{% endnote %}

按照以下步骤实现 GitHub 应用程序清单流程：

1. 将人员重定向到 GitHub 以创建新的 GitHub 应用程序。
1. GitHub 将人员重定向回您的站点。
1. 交换临时代码以检索应用程序配置。

#### 1. 将人员重定向到 GitHub 以创建新的 GitHub 应用程序。

要重定向人员以创建新的 GitHub 应用程序，请[提供一个链接](#examples)，供他们单击以将 `POST` 请求发送到用户帐户的 `https://github.com/settings/apps/new` 或组织帐户的 `https://github.com/organizations/ORGANIZATION/settings/apps/new`，其中的 `ORGANIZATION` 替换为要在其中创建应用程序的组织帐户的名称。

必须将 [GitHub 应用程序清单参数](#github-app-manifest-parameters)作为 JSON 编码的字符串包含在名为 `manifest` 的参数中。 还可以包括 `state` [参数](#parameters) 以增加安全性。

创建应用程序的人将被重定向到含有输入字段的 GitHub 页面，他们可以在其中编辑您包含在 `manifest` 参数中的应用程序名称。 如果您在 `manifest` 中没有包含 `name`，他们可以在此字段中为应用程序设置自己的名称。

![创建 GitHub 应用程序清单](/assets/images/github-apps/create-github-app-manifest.png)

##### GitHub 应用程序清单参数

 | 名称                    | 类型      | 描述                                                                                                                                                                        |
 | --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `name`                | `字符串`   | GitHub 应用程序的名称。                                                                                                                                                           |
 | `url`                 | `字符串`   | **必填。**GitHub 应用程序的主页。                                                                                                                                                    |
 | `hook_attributes`     | `对象`    | GitHub 应用程序 web 挂钩的配置                                                                                                                                                     |
 | `redirect_url`        | `字符串`   | 在用户从清单创建 GitHub 应用程序后重定向到的完整 URL。{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}
 | `callback_urls`       | `字符串数组` | 在用户授权安装后重定向到的完整 URL。 您可以提供最多 10 个回叫 URL。{% else %}
 | `callback_url`        | `字符串`   | 在用户授权安装后重定向到的完整 URL。{% endif %}
 | `说明`                  | `字符串`   | GitHub 应用程序的说明。                                                                                                                                                           |
 | `public`              | `布尔值`   | 当 GitHub 应用程序可供公众使用时，设置为 `true` ；当它仅供应用程序的所有者访问时，设置为 `false`。                                                                                                             |
 | `default_events`      | `数组`    | GitHub 应用程序订阅的[事件](/webhooks/event-payloads)列表。                                                                                                                           |
 | `default_permissions` | `对象`    | GitHub 应用程序所需的[权限](/rest/reference/permissions-required-for-github-apps)集。 对象的格式使用键的权限名称（例如 `issues`）和值的访问类型（例如 `write`）。                                                 |

`hook_attributes` 对象含有以下键：

| 名称       | 类型    | 描述                                    |
| -------- | ----- | ------------------------------------- |
| `url`    | `字符串` | **必填。**将接收 web 挂钩 `POST` 请求的服务器的 URL。 |
| `active` | `布尔值` | 当此挂钩被触发时提供事件详细信息，默认值为 true。           |

##### 参数

 | 名称      | 类型    | 描述                                          |
 | ------- | ----- | ------------------------------------------- |
 | `state` | `字符串` | {% data reusables.apps.state_description %}

##### 示例

此示例使用网页上的表单，其中包含一个按钮，该按钮可触发用户帐户的 `POST` 请求：

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}"callback_urls": [
     "https://example.com/callback"
   ],{% else %}"callback_url": "https://example.com/callback",{% endif %}
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

此示例使用网页上的表单，其中包含一个按钮，该按钮可触发组织帐户的 `POST` 请求： 将 `ORGANIZATION` 替换为要在其中创建应用程序的组织帐户的名称。

```html
<form action="https://github.com/organizations/ORGANIZATION/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.0" %}"callback_urls": [
     "https://example.com/callback"
   ],{% else %}"callback_url": "https://example.com/callback",{% endif %}
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

#### 2. GitHub 将人员重定向回您的站点

当用户单击**创建 GitHub 应用程序**时，GitHub 将使用代码参数中的临时 `code` 重定向回 `redirect_url` 。 例如：

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

如果您提供了 `state` 参数，您还会在 `redirect_url` 中看到该参数。 例如：

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

#### 3. 交换临时代码以检索应用程序配置

要完成握手，请在 `POST` 请求中将临时 `code` 发送到[从清单创建 GitHub 应用程序](/rest/reference/apps#create-a-github-app-from-a-manifest)端点。 响应将包括 `id`（GitHub 应用程序 ID）、`pem`（私钥）和 `webhook_secret`。 GitHub 会自动为应用程序创建一个 web 挂钩密钥。 您可以将这些值存储在应用程序服务器上的环境变量中。 例如，如果您的应用程序使用 [dotenv](https://github.com/bkeepers/dotenv) 来存储环境变量，则您将把变量存储在应用程序的 `.env` 文件中。

您必须在一小时内完成 GitHub 应用程序清单流程中的此步骤。

{% note %}

**注：**此端点受速率限制。 请参阅[速率限制](/rest/reference/rate-limit)，了解如何获取当前速率限制状态。

{% endnote %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
{% data reusables.pre-release-program.fury-pre-release %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

    POST /app-manifests/:code/conversions

有关端点响应的更多信息，请参阅[从清单创建 GitHub 应用程序](/rest/reference/apps#create-a-github-app-from-a-manifest)。

清单流程的最后一步完成后，从流程创建应用程序的人将是注册 GitHub 应用程序的所有者，他们可以将其安装到他们的任何个人仓库中。 他们可以选择使用 GitHub API 扩展应用程序、将所有权转让给其他人或者随时删除它。

### 使用 Probot 实现 GitHub 应用程序清单流程

[Probot](https://probot.github.io/) 是一个使用 [Node.js](https://nodejs.org/) 构建的框架，可执行所有 GitHub 应用程序所需的许多任务，例如验证 web 挂钩和执行身份验证。 Probot 实现 [GitHub 应用程序清单流程](#implementing-the-github-app-manifest-flow)，便于创建 GitHub 应用程序参考设计并与 GitHub 社区分享。

要创建可以分享的 Probot 应用程序，请遵循以下步骤：

1. [生成新的 GitHub 应用程序](https://probot.github.io/docs/development/#generating-a-new-app)。
1. 打开您创建的项目，自定义 `app.yml` 文件中的设置。 Probot 使用 `app.yml` 中的设置作为 [GitHub 应用程序清单参数](#github-app-manifest-parameters)。
1. 添加应用程序的自定义代码。
1. [在本地运行 GitHub 应用程序](https://probot.github.io/docs/development/#running-the-app-locally)或[将其托管在您想要的任何位置](#hosting-your-app-with-glitch)。 导航到托管应用程序的 URL 时，您会发现一个包含**注册 GitHub 应用程序**按钮的网页，用户可以单击该按钮创建预配置的应用程序。 以下网页是 Probot 实现 GitHub 应用程序清单流程中的[第 1 步](#1-you-redirect-people-to-github-to-create-a-new-github-app)：

![注册 Probot GitHub 应用程序](/assets/images/github-apps/github_apps_probot-registration.png)

Probot 使用 [dotenv](https://github.com/bkeepers/dotenv) 创建 `.env` 文件，并设置 `APP_ID`、`PRIVATE_KEY` 和 `WEBHOOK_SECRET` 环境变量，变量值[从应用程序配置中检索](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)。

#### 使用 Glitch 托管应用程序

您可以看到一个使用 [Glitch](https://glitch.com/) 托管和分享应用程序的[示例 Probot 应用程序](https://glitch.com/~auspicious-aardwolf)。 该示例使用[检查 API](/rest/reference/checks)，并在 `app.yml` 文件中选择必要的检查 API 事件和权限。 Glitch 是一个允许您“重新组合自己的”应用程序的工具。 重新组合应用程序将创建一个 Glitch 托管和部署的应用程序副本。 请参阅“[关于 Glitch](https://glitch.com/about/)”了解如何重新组合 Glitch 应用程序。
