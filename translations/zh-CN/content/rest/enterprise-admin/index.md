---
title: GitHub Enterprise 管理
intro: 可以使用这些终结点来管理企业。
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
  - /rest/reference/enterprise-admin
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
shortTitle: Enterprise administration
children:
  - /admin-stats
  - /announcement
  - /audit-log
  - /billing
  - /code-security-and-analysis
  - /global-webhooks
  - /ldap
  - /license
  - /management-console
  - /org-pre-receive-hooks
  - /orgs
  - /pre-receive-environments
  - /pre-receive-hooks
  - /repo-pre-receive-hooks
  - /users
  - /scim
ms.openlocfilehash: 19688f806101c8022b64dfc21806b79338917353
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065591'
---
{% ifversion fpt or ghec %}

{% note %}

注意：本文章适用于 {% data variables.product.prodname_ghe_cloud %}。 要查看 {% data variables.product.prodname_ghe_managed %} 或 {% data variables.product.prodname_ghe_server %} 版本，请使用 {% data ui.pages.article_version %} 下拉菜单。

{% endnote %}

{% endif %}

### 端点 URL

REST API 终结点{% ifversion ghes %}（[管理控制台](#management-console) API 终结点除外）{% endif %} 是以下 URL 的前缀：

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion fpt or ghec %} 当终结点包含 `{enterprise}` 时，将 `{enterprise}` 替换为企业帐户的句柄，该句柄包含在企业设置的 URL 中。 例如，如果企业帐户位于 `https://github.com/enterprises/octo-enterprise`，请用 `octo-enterprise` 替换 `{enterprise}`。
{% endif %}

{% ifversion ghes %} [管理控制台](#management-console) API 终结点仅以主机名为前缀：

```shell
http(s)://<em>hostname</em>/
```
{% endif %} {% ifversion ghae or ghes %}
### 身份验证

{% data variables.product.product_name %} 安装的 API 终结点接受与 GitHub.com API [相同的身份验证方法](/rest/overview/resources-in-the-rest-api#authentication)。 可通过 [OAuth 标记](/apps/building-integrations/setting-up-and-registering-oauth-apps/){% ifversion ghes %}（可使用[授权 API](/rest/reference/oauth-authorizations#create-a-new-authorization) 创建）{% endif %}或[基本身份验证](/rest/overview/resources-in-the-rest-api#basic-authentication)自行进行身份验证 。 {% ifversion ghes %} OAuth 标记用于企业特定的终结点时必须具有 `site_admin` [OAuth 范围](/developers/apps/scopes-for-oauth-apps#available-scopes)。{% endif %}

企业管理 API 终结点只有经过身份验证的 {% data variables.product.product_name %} 站点管理员{% ifversion ghes %}可以访问，但[管理控制台](#management-console) API 例外，它需要[管理控制台密码](/enterprise/admin/articles/accessing-the-management-console/){% endif %}。

{% endif %}

{% ifversion ghae or ghes %}
### 版本信息

企业当前版本在每个 API 的响应头中返回：`X-GitHub-Enterprise-Version: {{currentVersion}}.0`
还可通过调用[元终结点](/rest/reference/meta/)来读取当前版本。

{% endif %}
