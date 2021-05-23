---
title: API 预览
intro: 您可以使用 API 预览来试用新功能并在这些功能正式发布之前提供反馈。
redirect_from:
  - /v3/previews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---


API 预览允许您试用新的 API 以及对现有 API 方法的更改（在它们被纳入正式的 GitHub API 之前）。

在预览期间，我们可以根据开发者的反馈更改某些功能。 如果我们要执行变更，将在[开发者博客](https://developer.github.com/changes/)上宣布消息，不会事先通知。

要访问 API 预览，需要在 `Accept` 标头中为您的请求提供自定义[媒体类型](/rest/overview/media-types)。 每个预览的功能文档可指定要提供的自定义媒体类型。

{% if currentVersion == "free-pro-team@latest" %}
### 迁移

允许您从自己的 GitHub 用户或组织帐户下载仓库，以审查、备份以及[迁移](/rest/reference/migrations)数据到 {% data variables.product.prodname_ghe_server %}。

**自定义媒体类型：** `wyandotte-preview` **公布日期：** [2018-05-24](https://developer.github.com/changes/2018-05-24-user-migration-api/)
{% endif %}

### 增强型部署

使用更多信息和更精细的方式更好地控制[部署](/rest/reference/repos#deployments)。

**自定义媒体类型：** `ant-man-preview` **公布日期：** [2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

### 反应

管理对提交、议题和注释的[反应](/rest/reference/reactions)。

**自定义媒体类型：** `squirrel-girl-preview` **公布日期：** [2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/) **更新日期：** [2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

### 时间表

获取针对议题或拉取请求的[事件列表](/rest/reference/issues#timeline)。

**自定义媒体类型：** `mockingbird-preview` **公布日期：** [2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% if enterpriseServerVersions contains currentVersion %}
### 预接收环境

创建、列出、更新和删除预接收挂钩的环境。

**自定义媒体类型：** `eye-scream-preview` **公布日期：** [2015-07-29](/rest/reference/enterprise-admin#pre-receive-environments)
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
### 集成

通过 API 管理[集成](/v3/integrations)。

**自定义媒体类型：** `machine-man-preview` **公布日期：** [2016-09-14](https://developer.github.com/changes/2016-09-14-Integrations-Early-Access/)
{% endif %}

### 项目

管理[项目](/rest/reference/projects)。

**自定义媒体类型：** `inertia-preview` **公布日期：** [2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/) **更新日期：** [2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/)

### 提交搜索

[搜索提交](/rest/reference/search)。

**自定义媒体类型：** `cloak-preview` **公布日期：** [2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/)

### 仓库主题

在返回仓库结果的[调用](/rest/reference/repos)中查看[仓库主题](/articles/about-topics/)列表。

**自定义媒体类型：** `mercy-preview` **公布日期：** [2017-01-31](https://github.com/blog/2309-introducing-topics)

### 行为准则

查看[所有行为准则](/rest/reference/codes-of-conduct)或获取仓库的当前行为准则。

**自定义媒体类型：** `scarlet-witch-preview`

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
### 嵌套团队

在[团队](/rest/reference/teams)有效负载中包含嵌套团队内容。

**自定义媒体类型：** `hellcat-preview` **公布日期：** [2017-09-01](https://developer.github.com/changes/2017-08-30-preview-nested-teams)

{% endif %}

{% if currentVersion == "github-ae@latest" or enterpriseServerVersions contains currentVersion %}

### 全局 web 挂钩

为[组织](/webhooks/event-payloads/#organization)和[用户](/webhooks/event-payloads/#user)事件类型启用[全局 web 挂钩](/rest/reference/enterprise-admin#global-webhooks/)。 此 API 预览仅适用于 {% data variables.product.prodname_ghe_server %}。

**自定义媒体类型：** `superpro-preview` **公布日期：** [2017-12-12](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
### 仓库转让

将[仓库](/rest/reference/repos)转让给组织或用户。

**自定义媒体类型：** `nightshade-preview` **公布日期：** [2017-11-09](https://developer.github.com/changes/2017-11-09-repository-transfer-api-preview)
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
### 添加锁定原因

现在，您可以在[锁定议题](/rest/reference/issues#lock-an-issue)时添加原因。

**自定义媒体类型：** `sailor-v-preview` **公布日期：** [2018-01-10](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview)
{% endif %}

### 要求签名提交

现在，您可以使用 API 来管理[要求在受保护的分支上进行签名提交](/rest/reference/repos#branches)的设置。

**自定义媒体类型：** `zzzax-preview` **公布日期：** [2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures)

### 要求多次审批

现在，您可以使用 API [要求多次审批](/rest/reference/repos#branches)拉取请求。

**自定义媒体类型：** `luke-cage-preview` **公布日期：** [2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.19" %}
### 检索悬停卡信息

从[某人的悬停卡](/rest/reference/users#get-contextual-information-for-a-user)检索信息。

**自定义媒体类型：** `hagar-preview` **公布日期：** [2018-03-21](https://developer.github.com/changes/2018-03-21-hovercard-api-preview)

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}
### 检查运行和检查套件 API

允许 GitHub 应用程序对仓库的代码运行外部检查。 更多信息请参阅[检查运行](/rest/reference/checks#runs)和[检查套件](/rest/reference/checks#suites) API。

**自定义媒体类型：** `antiope-preview` **公布日期：** [2018-05-07](https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/)
{% endif %}

{% if currentVersion == enterpriseServerVersions contains currentVersion %}

### 对仓库的匿名 Git 访问

当 {% data variables.product.prodname_ghe_server %} 实例处于私有模式时，站点和仓库管理员可以为公共仓库启用匿名 Git 访问。

**自定义媒体类型：** `x-ray-preview` **公布日期：** [2018-07-12](https://blog.github.com/2018-07-12-introducing-enterprise-2-14/)

{% endif %}

### 项目卡详细信息

REST API 对[议题事件](/rest/reference/issues#events)和[议题时间表事件](/rest/reference/issues#timeline)的响应现在可返回项目相关事件的 `project_card` 字段。

**自定义媒体类型：** `starfox-preview` **公布日期：** [2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% if currentVersion == "free-pro-team@latest" %}

### GitHub 应用程序清单

GitHub 应用程序清单允许用户创建预配置的 GitHub 应用程序。 更多信息请参阅“[从清单创建 GitHub 应用程序](/apps/building-github-apps/creating-github-apps-from-a-manifest/)”。

**自定义媒体类型：** `fury-preview`

{% endif %}

### 部署状态

现在，您可以更新[部署状态](/rest/reference/repos#create-a-deployment-status)的 `environment` 并使用 `in_progress` 和 `queued` 状态。 创建部署状态时，现在可以使用 `auto_inactive` 参数将旧的 `production` 部署标记为 `inactive`。

**自定义媒体类型：** `flash-preview` **公布日期：** [2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

### 仓库创建权限

现在，您可以配置组织成员是否可以创建仓库以及他们可以创建哪些类型的仓库。 更多信息请参阅“[更新组织](/rest/reference/orgs#update-an-organization)”。

**自定义媒体类型：** `surtur-preview` **公布日期：** [2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

### 内容附件

现在，您可以在 GitHub 中使用 {% data variables.product.prodname_unfurls %} API 提供有关链接到注册域的 URL 的更多信息。 更多信息请参阅“[使用内容附件](/apps/using-content-attachments/)”。

**自定义媒体类型：** `corsair-preview` **公布日期：** [2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
### 草稿拉取请求

您可以使用草稿拉取请求 API 及其[拉取请求](/rest/reference/pulls)端点来查看拉取请求是否处于草稿状态。 要了解有关草稿拉取请求的更多信息，请参阅“[关于拉取请求](/articles/about-pull-requests/)”。

**自定义媒体类型：** `shadow-cat-preview` **公布日期：** [2019-02-14](https://developer.github.com/changes/2019-02-14-draft-pull-requests/)

{% endif %}

### 启用和禁用页面

您可以使用[页面 API](/rest/reference/repos#pages) 中的新端点来启用或禁用页面。 要了解有关页面的更多信息，请参阅“[GitHub Pages 基础知识](/categories/github-pages-basics)”。

**自定义媒体类型：** `switcheroo-preview` **公布日期：** [2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

### 列出提交的分支或拉取请求

您可以使用[提交 API](/rest/reference/repos#commits) 中的两个新端点来列出提交的分支或拉取请求。

**自定义媒体类型：** `groot-preview` **公布日期：** [2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
### 卸载 GitHub 应用程序

GitHub 应用程序的所有者现在可以使用[应用程序 API](/rest/reference/apps#delete-an-installation-for-the-authenticated-app) 卸载其应用程序。

**自定义媒体类型：** `gambit-preview`
{% endif %}

### 为仓库启用或禁用漏洞警报

您可以使用[仓库 API](/rest/reference/repos) 中的两个新端点来启用或禁用漏洞警报。

**自定义媒体类型：** `dorian-preview` **公布日期：** [2019-04-24](https://developer.github.com/changes/2019-04-24-vulnerability-alerts/)

### 更新拉取请求分支

您可以使用新的端点根据上游分支的 HEAD 更改来[更新拉取请求分支](/rest/reference/pulls#update-a-pull-request-branch)。

**自定义媒体类型：** `lydian-preview` **公布日期：** [2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% if currentVersion == "free-pro-team@latest" %}
### 启用或禁用自动安全修复

您可以使用一组新的端点来[启用和禁用自动安全修复](/rest/reference/repos#enable-automated-security-fixes)。

**自定义媒体类型：** `london-preview` **公布日期：** [2019-06-04](https://developer.github.com/changes/2019-06-04-automated-security-fixes/)
{% endif %}

### 创建和使用仓库模板

您可以使用新的端点来[利用模板创建仓库](/rest/reference/repos#create-a-repository-using-a-template)，并通过将 `is_template` 参数设置为 `true`，[为经过身份验证的用户创建模板仓库](/rest/reference/repos#create-a-repository-for-the-authenticated-user)。 [获取仓库](/rest/reference/repos#get-a-repository)以检查是否使用 `is_template` 键将其设置为模板仓库。

**自定义媒体类型：** `baptiste-preview` **公布日期：** [2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/)

{% if currentVersion == "enterprise-server@2.20" %}
### 新的 OAuth 应用程序 API 端点

您可以使用新的 [OAuth 应用程序 API](/rest/reference/apps#oauth-applications) 端点，通过将 OAuth 令牌用作输入参数而不是路径参数，更安全地管理 OAuth 应用程序的令牌。

**自定义媒体类型：** `doctor-strange-preview` **公布日期：** [2019-11-05](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api/)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
### 仓库 API 的新可见性参数

您可以在[仓库 API](/rest/reference/repos) 中设置和检索仓库可见性。

**自定义媒体类型：** `nebula-preview` **公布日期：** [2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)
{% endif %}
