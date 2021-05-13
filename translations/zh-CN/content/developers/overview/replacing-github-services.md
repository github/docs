---
title: 替换 GitHub 服务
intro: '如果您仍然依赖已弃用的 {% data variables.product.prodname_dotcom %} 服务，请了解如何将服务挂钩迁移到 web 挂钩。'
redirect_from:
  - /guides/replacing-github-services/
  - /v3/guides/automating-deployments-to-integrators/
  - /v3/guides/replacing-github-services
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - API
---


我们弃用了 GitHub 服务，转而支持与 web 挂钩集成。 本指南可帮助您从 GitHub 服务过渡到 web 挂钩。 有关此公告的更多信息，请参阅[博客文章](https://developer.github.com/changes/2018-10-01-denying-new-github-services)。

{% note %}

作为电子邮件服务的替代方法，您现在可以开始使用推送到仓库的电子邮件通知。 有关如何配置提交电子邮件通知，请参阅“[关于推送到仓库的电子邮件通知](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)”。

{% endnote %}

### 弃用时间表

- **2018 年 10 月 1 日**：GitHub 停止允许用户安装服务。 我们从 GitHub.com 用户界面中删除了 GitHub 服务。
- **2019 年 1 月 29 日**：作为电子邮件服务的替代方法，您现在可以开始使用推送到仓库的电子邮件通知。 有关如何配置提交电子邮件通知，请参阅“[关于推送到仓库的电子邮件通知](/github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository/)”。
- **2019 年 1 月 31 日**：GitHub 将停止在 GitHub.com 上交付已安装服务的事件。

### GitHub 服务背景信息

GitHub 服务（有时称为服务挂钩）是传统的集成方法，其中 GitHub 通过[ `github-services` 仓库](https://github.com/github/github-services)托管集成者的部分服务。 在 GitHub 上执行的操作会触发这些服务，您可以使用这些服务在 GitHub 之外触发操作。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
### 查找使用 GitHub 服务的仓库
我们提供命令行脚本，帮助您识别设备上哪些仓库使用 GitHub 服务。 更多信息请参阅 [ghe-legacy-github-services-report](/enterprise/{{currentVersion}}/admin/articles/command-line-utilities/#ghe-legacy-github-services-report)。{% endif %}

### GitHub 服务与 web 挂钩

GitHub 服务与 web 挂钩之间的主要区别：
- **配置**：GitHub 服务具有特定于服务的配置选项，而 web 挂钩只需指定 URL 和一组事件即可进行配置。
- **自定义逻辑**：GitHub 服务可以具有自定义逻辑，在处理单个事件时使用多个操作进行响应，而 web 挂钩没有自定义逻辑。
- **服务类型**：GitHub 服务可以发出 HTTP 和非 HTTP 请求，而 web 挂钩只能发出 HTTP 请求。

### 用 web 挂钩替换服务

要用 web 挂钩替换 GitHub 服务:

1. 从[此列表](/webhooks/#events)确定您需要订阅的相关 web 挂钩事件。

2. 根据您当前如何使用 GitHub 服务更改您的配置：

   - **GitHub 应用程序**：更新应用程序的权限和订阅的事件，以配置应用程序接收相关的 web 挂钩事件。
   - **OAuth 应用程序**：请求 `repo_hook` 和/或 `org_hook` 作用域以代表用户管理相关事件。
   - **GitHub 服务提供商**：请求用户手动配置包含发送给您的相关事件的 web 挂钩，或者借此机会构建一个应用程序来管理此功能。 更多信息请参阅“[关于应用程序](/apps/about-apps/)”。

3. 从 GitHub 外部移动额外配置。 某些 GitHub 服务需要在 GitHub 中的配置页面上进行额外的自定义配置。 如果您的服务这样做，则需要将此功能移动到应用程序中，或在适用的情况下依赖 GitHub 或 OAuth 应用程序。

### 支持 {% data variables.product.prodname_ghe_server %}

- **{% data variables.product.prodname_ghe_server %} 2.17**：{% data variables.product.prodname_ghe_server %} 2.17 及更高版本将停止允许管理员安装服务。 在 {% data variables.product.prodname_ghe_server %} 2.17 至 2.19 版本中，管理员仍然能够修改现有服务挂钩和接收服务挂钩。 在 {% data variables.product.prodname_ghe_server %} 2.17 及更高版本中，作为电子邮件服务的替代方法，您将能够使用推送到仓库的电子邮件通知。 更多信息请参阅[这篇博客文章](https://developer.github.com/changes/2019-01-29-life-after-github-services)。
- **{% data variables.product.prodname_ghe_server %} 2.20**：{% data variables.product.prodname_ghe_server %} 2.20 及更高版本将停止交付所有已安装服务的事件。

{% data variables.product.prodname_ghe_server %} 2.17 版将是不允许管理员安装 GitHub 服务的第一个版本。 我们将仅支持现有的 GitHub 服务，直到 {% data variables.product.prodname_ghe_server %} 2.20 版本。 我们还将接受 {% data variables.product.prodname_ghe_server %} 上运行的 GitHub 服务的任何重要补丁，直到 2019 年 10 月 1 日。

### 在我们的帮助下迁移

如有任何问题，请[联系我们](https://github.com/contact?form%5Bsubject%5D=GitHub+Services+Deprecation)。

作为高度概述，迁移过程通常涉及：
  - 确定产品使用 GitHub 服务的方式和位置。
  - 确定需要配置的相应 web 挂钩事件，以便移动到普通 web 挂钩。
  - 使用 [{% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/) 或 [{% data variables.product.prodname_github_app %} 实现设计。 {% data variables.product.prodname_github_app %}](/apps/building-github-apps/) 优先。 要了解为什么优先使用 {% data variables.product.prodname_github_app %}，请参阅“[切换到 {% data variables.product.prodname_github_app %} 的原因](/apps/migrating-oauth-apps-to-github-apps/#reasons-for-switching-to-github-apps)”。
