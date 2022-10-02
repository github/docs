---
title: API 预览
intro: 您可以使用 API 预览来试用新功能并在这些功能正式发布之前提供反馈。
redirect_from:
  - /v3/previews
versions:
  ghes: <3.4
topics:
  - API
ms.openlocfilehash: fe00e2ab78881edab8d0f7704f80f2f20163fdeb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876003'
---
API 预览允许您试用新的 API 以及对现有 API 方法的更改（在它们被纳入正式的 GitHub API 之前）。

在预览期间，我们可以根据开发者的反馈更改某些功能。 如果我们确实进行了更改，我们将在[开发者博客](https://developer.github.com/changes/)上公布这些更改，而不会事先通知。

要访问 API 预览，需要在请求的 `Accept` 标头中提供自定义[媒体类型](/rest/overview/media-types)。 每个预览的功能文档可指定要提供的自定义媒体类型。

{% ifversion ghes < 3.3 %}

## 增强型部署

使用更详细和更精细的方式更好地控制[部署](/rest/reference/repos#deployments)。

自定义媒体类型：`ant-man-preview`
公布日期：[2016-04-06](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements/)

{% endif %}

{% ifversion ghes < 3.3 %}

## 反应

管理对提交、问题和注释的[反应](/rest/reference/reactions)。

自定义媒体类型：`squirrel-girl-preview`
公布日期：[2016-05-12](https://developer.github.com/changes/2016-05-12-reactions-api-preview/)
更新日期：[2016-06-07](https://developer.github.com/changes/2016-06-07-reactions-api-update/)

{% endif %}

{% ifversion ghes < 3.3 %}

## 时间线

获取问题或拉取请求的[事件列表](/rest/reference/issues#timeline)。

自定义媒体类型：`mockingbird-preview`
公布日期：[2016-05-23](https://developer.github.com/changes/2016-05-23-timeline-preview-api/)

{% endif %}

{% ifversion ghes < 3.3 %}
## 项目

管理[项目](/rest/reference/projects)。

自定义媒体类型：`inertia-preview`
公布日期：[2016-09-14](https://developer.github.com/changes/2016-09-14-projects-api/)
更新日期：[2016-10-27](https://developer.github.com/changes/2016-10-27-changes-to-projects-api/) {% endif %} {% ifversion ghes < 3.3 %}

## 提交搜索

[搜索提交](/rest/reference/search)。

自定义媒体类型：`cloak-preview`
公布日期：[2017-01-05](https://developer.github.com/changes/2017-01-05-commit-search-api/) {% endif %} {% ifversion ghes < 3.3 %}

## 仓库主题

在返回存储库结果的[调用](/rest/reference/repos)中查看[存储库主题](/articles/about-topics/)列表。

自定义媒体类型：`mercy-preview`
公布日期：[2017-01-31](https://github.com/blog/2309-introducing-topics) {% endif %} {% ifversion ghes < 3.3 %}

## 行为准则

查看所有[行为准则](/rest/reference/codes-of-conduct)或获取存储库的当前行为准则。

自定义媒体类型：`scarlet-witch-preview`

{% endif %}

{% ifversion ghes < 3.3 %}

## 全局 web 挂钩

为[组织](/webhooks/event-payloads/#organization)和[用户](/webhooks/event-payloads/#user)事件类型启用[全局 Webhook](/rest/reference/enterprise-admin#global-webhooks/)。 此 API 预览仅适用于 {% data variables.product.prodname_ghe_server %}。

自定义媒体类型：`superpro-preview`
公布日期：[2017-12-12](/rest/reference/enterprise-admin#global-webhooks)

{% endif %}

{% ifversion ghes < 3.3 %}

## 要求签名提交

现在，可以使用 API 来管理[要求在受保护的分支上进行签名提交](/rest/reference/repos#branches)的设置。

自定义媒体类型：`zzzax-preview`
公布日期：[2018-02-22](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures) {% endif %} {% ifversion ghes < 3.3 %}

## 要求多次审批

现在，可以使用 API [要求多次审批](/rest/reference/repos#branches)拉取请求。

自定义媒体类型：`luke-cage-preview`
公布日期：[2018-03-16](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews)

{% endif %}

{% ifversion ghes < 3.3 %}

## 项目卡详细信息

REST API 对[问题事件](/rest/reference/issues#events)和[问题时间表事件](/rest/reference/issues#timeline)的响应现在可返回项目相关事件的 `project_card` 字段。

自定义媒体类型：`starfox-preview`
公布日期：[2018-09-05](https://developer.github.com/changes/2018-09-05-project-card-events)

{% endif %}

{% ifversion ghes < 3.3 %}

## 部署状态

现在可以更新[部署状态](/rest/reference/deployments#create-a-deployment-status)的 `environment` 并使用 `in_progress` 和 `queued` 状态。 创建部署状态时，现在可以使用 `auto_inactive` 参数将旧的 `production` 部署标记为 `inactive`。

自定义媒体类型：`flash-preview`
公布日期：[2018-10-16](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)

{% endif %}

{% ifversion ghes < 3.3 %}

## 仓库创建权限

现在，您可以配置组织成员是否可以创建仓库以及他们可以创建哪些类型的仓库。 有关详细信息，请参阅“[更新组织](/rest/reference/orgs#update-an-organization)”。

自定义媒体类型：`surtur-preview`
公布日期：[2019-12-03](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)

{% endif %}

{% ifversion ghes < 3.4 %}
## 内容附件

现在，您可以在 GitHub 中使用 {% data variables.product.prodname_unfurls %} API 提供有关链接到注册域的 URL 的更多信息。 有关详细信息，请参阅“[使用内容附件](/apps/using-content-attachments/)”。

自定义媒体类型：`corsair-preview`
公布日期：[2018-12-10](https://developer.github.com/changes/2018-12-10-content-attachments-api/)

{% endif %} {% ifversion ghes < 3.3 %}

## 启用和禁用页面

可以使用[页面 API](/rest/reference/repos#pages) 中的新终结点来启用或禁用页面。 若要了解有关页面的详细信息，请参阅“[GitHub 页面基础知识](/categories/github-pages-basics)”。

自定义媒体类型：`switcheroo-preview`
公布日期：[2019-03-14](https://developer.github.com/changes/2019-03-14-enabling-disabling-pages/)

{% endif %}

{% ifversion ghes < 3.3 %}

## 列出提交的分支或拉取请求

可以使用[提交 API](/rest/reference/repos#commits) 中的两个新终结点来列出提交的分支或拉取请求。

自定义媒体类型：`groot-preview`
公布日期：[2019-04-11](https://developer.github.com/changes/2019-04-11-pulls-branches-for-commit/)

{% endif %}

{% ifversion ghes < 3.3 %}

## 更新拉取请求分支

可以使用新的终结点根据上游分支的 HEAD 更改来[更新拉取请求分支](/rest/reference/pulls#update-a-pull-request-branch)。

自定义媒体类型：`lydian-preview`
公布日期：[2019-05-29](https://developer.github.com/changes/2019-05-29-update-branch-api/)

{% endif %} {% ifversion ghes < 3.3 %}

## 创建和使用仓库模板

可以使用新的终结点来[使用模板创建存储库](/rest/reference/repos#create-a-repository-using-a-template)，并通过将 `is_template` 参数设置为 `true`，[为经过身份验证的用户创建存储库](/rest/reference/repos#create-a-repository-for-the-authenticated-user)。 [获取存储库](/rest/reference/repos#get-a-repository)以检查是否使用 `is_template` 键将其设置为模板存储库。

自定义媒体类型：`baptiste-preview`
公布日期：[2019-07-05](https://developer.github.com/changes/2019-07-16-repository-templates-api/) {% endif %} {% ifversion ghes < 3.3 %}

## 仓库 API 的新可见性参数

可以在[存储库 API](/rest/reference/repos) 中设置和检索存储库可见性。

自定义媒体类型：`nebula-preview`
公布日期：[2019-11-25](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/) {% endif %}
