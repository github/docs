---
title: 使用 URL 参数创建 GitHub 应用程序
intro: '您可以使用 URL [查询参数](https://en.wikipedia.org/wiki/Query_string) 预选新 {% data variables.product.prodname_github_app %} 的设置，以快速设置新 {% data variables.product.prodname_github_app %} 的配置。'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: 应用程序创建查询参数
---

## 关于 {% data variables.product.prodname_github_app %} URL 参数

您可以将查询参数添加到这些 URL 中，以便在个人或组织帐户上预选 {% data variables.product.prodname_github_app %} 的配置：

* **个人帐户：** `{% data variables.product.oauth_host_code %}/settings/apps/new`
* **组织帐户：** `{% data variables.product.oauth_host_code %}/organizations/:org/settings/apps/new`

创建应用程序的人在提交应用程序之前，可以从 {% data variables.product.prodname_github_app %} 注册页面编辑预选值。 如果您没有在 URL 查询字符串中包含必需的参数，例如 `name`，则创建应用程序的人在提交该应用程序之前需要输入值。

对于需要密钥来保护其 web 挂钩的应用，该密钥的价值必须由应用创建者以该形式设置，而不是通过使用查询参数。 更多信息请参阅“[保护 web 挂钩](/developers/webhooks-and-events/webhooks/securing-your-webhooks)”。

以下 URL 使用预配置的说明和回调 URL 创建名为 `octocat-github-app` 的新公共应用程序。 此 URL 还选择了 `checks` 的读取和写入权限，订阅了 `check_run` 和 `check_suite` web 挂钩事件，并选择了在安装过程中请求用户授权 (OAuth) 的选项：

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&events[]=check_run&events[]=check_suite
```

下面几节列出了可用查询参数、权限和事件的完整列表。

## {% data variables.product.prodname_github_app %} 配置参数

 | 名称                                   | 类型      | 描述                                                                                                                                                                                                                                                                                                                    |
 | ------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `name`                               | `字符串`   | {% data variables.product.prodname_github_app %} 的名称。 给应用程序一个清晰简洁的名称。 应用程序不能与现有 GitHub 用户同名，除非它是您自己的用户或组织的名称。 当您的集成执行操作时，应用程序名称的缓存版本将显示在用户界面上。                                                                                                                                                                      |
 | `说明`                                 | `字符串`   | {% data variables.product.prodname_github_app %} 的说明。                                                                                                                                                                                                                                                               |
 | `url`                                | `字符串`   | 您的 {% data variables.product.prodname_github_app %} 网站主页的完整 URL。                                                                                                                                                                                                                                                    |
 | `callback_urls`                      | `字符串数组` | 在用户授权安装后重定向到的完整 URL。 您可以提供最多 10 个回叫 URL。 如果应用程序需要识别和授权用户到服务器的请求，则使用这些 URL。 例如 `callback_urls[]=https://example.com&callback_urls[]=https://example-2.com`。                                                                                                                                                        |
 | `request_oauth_on_install`           | `布尔值`   | 如果应用程序授权用户使用 OAuth 流程，您可以将此选项设置为 `true`，以允许用户在安装应用程序时授权它，从而省去一个步骤。 如果您选择此选项，则 `setup_url` 将不可用，用户在安装应用程序后将被重定向到您的 `callback_url`。                                                                                                                                                                                     |
 | `setup_url`                          | `字符串`   | 在用户安装 {% data variables.product.prodname_github_app %} 后重定向到的完整 URL（如果应用程序在安装之后需要额外设置）。                                                                                                                                                                                                                             |
 | `setup_on_update`                    | `布尔值`   | 设置为 `true` 可在更新安装后（例如在添加或删除仓库之后）将用户重定向到设置 URL。                                                                                                                                                                                                                                                                        |
 | `public`                             | `布尔值`   | 当 {% data variables.product.prodname_github_app %} 可供公众使用时，设置为 `true` ；当它仅供应用程序的所有者访问时，设置为 `false`。                                                                                                                                                                                                                 |
 | `webhook_active`                     | `布尔值`   | 设置为 `false` 以禁用 web 挂钩。 Web 挂钩默认启用。                                                                                                                                                                                                                                                                                   |
 | `webhook_url`                        | `字符串`   | 要向其发送 web 挂钩事件有效负载的完整 URL。                                                                                                                                                                                                                                                                                            |
 | {% ifversion ghae %}`webhook_secret` | `字符串`   | 您可以指定一个密钥来保护 web 挂钩。 更多信息请参阅“[保护 web 挂钩](/webhooks/securing/)”。                                                                                                                                                                                                                                                       |
 | {% endif %}`events`                  | `字符串数组` | Web 挂钩事件. 某些 web 挂钩事件需要您对资源有 `read` 或 `write` 权限，才能在注册新 {% data variables.product.prodname_github_app %} 时选择事件。 有关可用事件及其所需权限，请参阅“[{% data variables.product.prodname_github_app %} web 挂钩事件](#github-app-webhook-events)”一节。 您可以在查询字符串中选择多个事件。 例如 `events[]=public&events[]=label`.{% ifversion ghes < 3.4 %}
 | `域`                                  | `字符串`   | 内容引用的 URL。{% endif %}
 | `single_file_name`                   | `字符串`   | 这是一种范围狭窄的权限，允许应用程序访问任何仓库中的单个文件。 当您将 `single_file` 权限设置为 `read` 或 `write` 时，此字段提供 {% data variables.product.prodname_github_app %} 将要管理的单个文件的路径。 {% ifversion fpt or ghes or ghec %} 如果您需要管理多个文件，请参阅下面的 `single_file_paths`。 {% endif %}{% ifversion fpt or ghes or ghec %}
 | `single_file_paths`                  | `字符串数组` | 这允许应用程序访问仓库中的最多 10 个指定文件。 当您将 `single_file` 权限设置为 `read` 或 `write` 时，此数组可存储 {% data variables.product.prodname_github_app %} 将要管理的最多 10 个文件的路径。 这些文件都接收由 `single_file` 设置的相同权限，没有单独的权限。 配置了两个或更多文件时，API 将返回 `multiple_single_files=true`，否则它将返回 `multiple_single_files=false`。{% endif %}

## {% data variables.product.prodname_github_app %} 权限

您可以在查询字符串中选择权限：使用下表中的权限名称作为查询参数名称，使用权限类型作为查询值。 例如，要在用户界面中为 `contents` 选择 `Read & write` 权限，您的查询字符串将包括 `&contents=write`。 要在用户界面中为 `blocking` 选择 `Read-only` 权限，您的查询字符串将包括 `&blocking=read`。 要在用户界面中为 `checks` 选择 `no-access` ，您的查询字符串将包括 `checks` 权限。

| 权限                                                                                                                               | 描述                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`管理`](/rest/reference/permissions-required-for-github-apps/#permission-on-administration)                                       | 对用于组织和仓库管理的各种端点授予访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% ifversion fpt or ghec %}
| [`blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-blocking)                                       | 授予对[阻止用户 API](/rest/reference/users#blocking) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% endif %}
| [`检查`](/rest/reference/permissions-required-for-github-apps/#permission-on-checks)                                               | 授予对[检查 API](/rest/reference/checks) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% ifversion ghes < 3.4 %}
| `content_references`                                                                                                             | 授予对“[创建内容附件](/rest/reference/apps#create-a-content-attachment)”端点的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% endif %}
| [`内容`](/rest/reference/permissions-required-for-github-apps/#permission-on-contents)                                             | 对用于修改仓库内容的各种端点授予访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                                                         |
| [`部署`](/rest/reference/permissions-required-for-github-apps/#permission-on-deployments)                                          | 授予对[部署 API](/rest/reference/repos#deployments) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% ifversion fpt or ghes or ghec %}
| [`emails`](/rest/reference/permissions-required-for-github-apps/#permission-on-emails)                                           | 授予对[电子邮件 API](/rest/reference/users#emails) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% endif %}
| [`关注者`](/rest/reference/permissions-required-for-github-apps/#permission-on-followers)                                           | 授予对[关注者 API](/rest/reference/users#followers) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                          |
| [`gpg_keys`](/rest/reference/permissions-required-for-github-apps/#permission-on-gpg-keys)                                       | 授予对[GPG 密钥 API](/rest/reference/users#gpg-keys) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                        |
| [`议题`](/rest/reference/permissions-required-for-github-apps/#permission-on-issues)                                               | 授予对[议题 API](/rest/reference/issues) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                                    |
| [`键`](/rest/reference/permissions-required-for-github-apps/#permission-on-keys)                                                  | 授予对[公钥 API](/rest/reference/users#keys) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                                |
| [`members`](/rest/reference/permissions-required-for-github-apps/#permission-on-members)                                         | 授予管理组织成员的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% ifversion fpt or ghec %}
| [`元数据`](/rest/reference/permissions-required-for-github-apps/#metadata-permissions)                                              | 授予对不泄漏敏感数据的只读端点的访问权限。 可以是 `read` 或 `none`。 设置任何权限时，默认值为 `read`；没有为 {% data variables.product.prodname_github_app %} 指定任何权限时，默认值为 `none`。                                                                                                      |
| [`organization_administration`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-administration) | 授予对“[更新组织](/rest/reference/orgs#update-an-organization)”端点和[组织交互限制 API](/rest/reference/interactions#set-interaction-restrictions-for-an-organization) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% endif %}
| [`organization_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-hooks)                   | 授予对[组织 web 挂钩 API](/rest/reference/orgs#webhooks/) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                     |
| `organization_plan`                                                                                                              | 授予使用“[获取组织](/rest/reference/orgs#get-an-organization)”端点获取有关组织计划的信息的权限。 可以是以下项之一：`none` 或 `read`。                                                                                                                                               |
| [`organization_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects)             | 授予对[项目 API](/rest/reference/projects) 的访问权限。 可以是以下项之一：`none`、`read`、`write` 或 `admin`。{% ifversion fpt or ghec %}
| [`organization_user_blocking`](/rest/reference/permissions-required-for-github-apps/#permission-on-organization-projects)        | 授予对[阻止组织用户 API](/rest/reference/orgs#blocking) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% endif %}
| [`页面`](/rest/reference/permissions-required-for-github-apps/#permission-on-pages)                                                | 授予对[页面 API](/rest/reference/repos#pages) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                               |
| `plan`                                                                                                                           | 授予使用“[获取用户](/rest/reference/users#get-a-user)”端点获取有关用户 GitHub 计划的信息的权限。 可以是以下项之一：`none` 或 `read`。                                                                                                                                               |
| [`pull_requests`](/rest/reference/permissions-required-for-github-apps/#permission-on-pull-requests)                             | 授予对各种拉取请求端点的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                                                             |
| [`repository_hooks`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-hooks)                       | 授予对[仓库 web 挂钩 API](/rest/reference/repos#hooks) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                        |
| [`repository_projects`](/rest/reference/permissions-required-for-github-apps/#permission-on-repository-projects)                 | 授予对[项目 API](/rest/reference/projects) 的访问权限。 可以是以下项之一：`none`、`read`、`write` 或 `admin`。{% ifversion ghes or ghec %}
| [`secret_scanning_alerts`](/rest/reference/permissions-required-for-github-apps/#permission-on-secret-scanning-alerts)           | 授予对[密钥扫描 API](/rest/reference/secret-scanning) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% endif %}{% ifversion fpt or ghes or ghec %}
| [`security_events`](/rest/reference/permissions-required-for-github-apps/#permission-on-security-events)                         | 授予对[代码扫描 API](/rest/reference/code-scanning/) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。{% endif %}
| [`single_file`](/rest/reference/permissions-required-for-github-apps/#permission-on-single-file)                                 | 授予对[内容 API](/rest/reference/repos#contents) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                            |
| [`标星`](/rest/reference/permissions-required-for-github-apps/#permission-on-starring)                                             | 授予对[标星 API](/rest/reference/activity#starring) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                         |
| [`状态`](/rest/reference/permissions-required-for-github-apps/#permission-on-statuses)                                             | 授予对[状态 API](/rest/reference/commits#commit-statuses) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                   |
| [`team_discussions`](/rest/reference/permissions-required-for-github-apps/#permission-on-team-discussions)                       | 授予对[团队讨论 API](/rest/reference/teams#discussions) 和[团队讨论注释 API](/rest/reference/teams#discussion-comments) 的访问权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                              |
| `vulnerability_alerts`                                                                                                           | 授予接收存储库中的 {% data variables.product.prodname_dependabot_alerts %}。 请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”以了解更多信息。 可以是以下项之一：`none` 或 `read`。 |
| `关注`                                                                                                                             | 授予列出和更改用户订阅的仓库的权限。 可以是以下项之一：`none`、`read` 或 `write`。                                                                                                                                                                                            |

## {% data variables.product.prodname_github_app %} web 挂钩事件

| Web 挂钩事件名称                                                                             | 所需权限                                            | 描述                                                                                  |
| -------------------------------------------------------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------- |
| [`check_run`](/webhooks/event-payloads/#check_run)                                     | `检查`                                            | {% data reusables.webhooks.check_run_short_desc %}
| [`check_suite`](/webhooks/event-payloads/#check_suite)                                 | `检查`                                            | {% data reusables.webhooks.check_suite_short_desc %}
| [`commit_comment`](/webhooks/event-payloads/#commit_comment)                           | `内容`                                            | {% data reusables.webhooks.commit_comment_short_desc %}{% ifversion ghes < 3.4 %}
| [`content_reference`](/webhooks/event-payloads/#content_reference)                     | `content_references`                            | {% data reusables.webhooks.content_reference_short_desc %}{% endif %}
| [`create`](/webhooks/event-payloads/#create)                                           | `内容`                                            | {% data reusables.webhooks.create_short_desc %}
| [`delete`](/webhooks/event-payloads/#delete)                                           | `内容`                                            | {% data reusables.webhooks.delete_short_desc %}
| [`deployment`](/webhooks/event-payloads/#deployment)                                   | `部署`                                            | {% data reusables.webhooks.deployment_short_desc %}
| [`deployment_status`](/webhooks/event-payloads/#deployment_status)                     | `部署`                                            | {% data reusables.webhooks.deployment_status_short_desc %}
| [`复刻`](/webhooks/event-payloads/#fork)                                                 | `内容`                                            | {% data reusables.webhooks.fork_short_desc %}
| [`gollum`](/webhooks/event-payloads/#gollum)                                           | `内容`                                            | {% data reusables.webhooks.gollum_short_desc %}
| [`议题`](/webhooks/event-payloads/#issues)                                               | `议题`                                            | {% data reusables.webhooks.issues_short_desc %}
| [`issue_comment`](/webhooks/event-payloads/#issue_comment)                             | `议题`                                            | {% data reusables.webhooks.issue_comment_short_desc %}
| [`标签`](/webhooks/event-payloads/#label)                                                | `元数据`                                           | {% data reusables.webhooks.label_short_desc %}
| [`成员`](/webhooks/event-payloads/#member)                                               | `members`                                       | {% data reusables.webhooks.member_short_desc %}
| [`membership`](/webhooks/event-payloads/#membership)                                   | `members`                                       | {% data reusables.webhooks.membership_short_desc %}
| [`里程碑`](/webhooks/event-payloads/#milestone)                                           | `pull_request`                                  | {% data reusables.webhooks.milestone_short_desc %}{% ifversion fpt or ghec %}
| [`org_block`](/webhooks/event-payloads/#org_block)                                     | `organization_administration`                   | {% data reusables.webhooks.org_block_short_desc %}{% endif %}
| [`组织`](/webhooks/event-payloads/#organization)                                         | `members`                                       | {% data reusables.webhooks.organization_short_desc %}
| [`page_build`](/webhooks/event-payloads/#page_build)                                   | `页面`                                            | {% data reusables.webhooks.page_build_short_desc %}
| [`project`](/webhooks/event-payloads/#project)                                         | `repository_projects` 或 `organization_projects` | {% data reusables.webhooks.project_short_desc %}
| [`project_card`](/webhooks/event-payloads/#project_card)                               | `repository_projects` 或 `organization_projects` | {% data reusables.webhooks.project_card_short_desc %}
| [`project_column`](/webhooks/event-payloads/#project_column)                           | `repository_projects` 或 `organization_projects` | {% data reusables.webhooks.project_column_short_desc %}
| [`public`](/webhooks/event-payloads/#public)                                           | `元数据`                                           | {% data reusables.webhooks.public_short_desc %}
| [`pull_request`](/webhooks/event-payloads/#pull_request)                               | `pull_requests`                                 | {% data reusables.webhooks.pull_request_short_desc %}
| [`pull_request_review`](/webhooks/event-payloads/#pull_request_review)                 | `pull_request`                                  | {% data reusables.webhooks.pull_request_review_short_desc %}
| [`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | `pull_request`                                  | {% data reusables.webhooks.pull_request_review_comment_short_desc %}
| [`pull_request_review_thread`](/webhooks/event-payloads/#pull_request_review_thread)   | `pull_request`                                  | {% data reusables.webhooks.pull_request_review_thread_short_desc %}
| [`推送`](/webhooks/event-payloads/#push)                                                 | `内容`                                            | {% data reusables.webhooks.push_short_desc %}
| [`发行版`](/webhooks/event-payloads/#release)                                             | `内容`                                            | {% data reusables.webhooks.release_short_desc %}
| [`仓库`](/webhooks/event-payloads/#repository)                                           | `元数据`                                           | {% data reusables.webhooks.repository_short_desc %}{% ifversion fpt or ghec %}
| [`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch)                 | `内容`                                            | 允许集成者使用 GitHub Actions 触发自定义事件。{% endif %}
| [`状态`](/webhooks/event-payloads/#status)                                               | `状态`                                            | {% data reusables.webhooks.status_short_desc %}
| [`团队`](/webhooks/event-payloads/#team)                                                 | `members`                                       | {% data reusables.webhooks.team_short_desc %}
| [`team_add`](/webhooks/event-payloads/#team_add)                                       | `members`                                       | {% data reusables.webhooks.team_add_short_desc %}
| [`查看`](/webhooks/event-payloads/#watch)                                                | `元数据`                                           | {% data reusables.webhooks.watch_short_desc %}
