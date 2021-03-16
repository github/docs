---
title: GitHub 应用程序的速率限制
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits/
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps/
  - /apps/building-github-apps/rate-limits-for-github-apps/
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 服务器到服务器请求

{% if currentVersion == "free-pro-team@latest" %}

如果应用程序安装在 {% data variables.product.prodname_ghe_cloud %} 帐户拥有的组织或仓库上，则不同的服务器到服务器请求速率限制适用于 {% data variables.product.prodname_github_app %}。

#### 标准的服务器到服务器速率限制

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% if currentVersion == "free-pro-team@latest" %}

#### {% data variables.product.prodname_ghe_cloud %} 服务器到服务器速率限制

{% data variables.product.prodname_github_app %} 安装在 {% data variables.product.prodname_ghe_cloud %} 帐户拥有的组织或仓库上，发送服务器到服务器请求的速率限制为每小时 15,000 个请求。

{% endif %}

### 用户到服务器请求

{% data variables.product.prodname_github_app %} 还可以[代表用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps)发送用户到服务器的请求。

{% if currentVersion == "free-pro-team@latest" %}

如果应用程序安装在 {% data variables.product.prodname_ghe_cloud %} 帐户拥有的组织或仓库上，并且经验证用户也属于同一个 {% data variables.product.prodname_ghe_cloud %} 帐户，则不同的用户到服务器请求速率限制适用于 {% data variables.product.prodname_github_app %}。

#### 标准的用户到服务器速率限制

{% endif %}

用户到服务器请求的速率限制为每个经验证的用户每小时最多发送 5,000 个请求。 该用户授权的所有 OAuth 应用程序、该用户拥有的个人访问令牌以及使用该用户的{% if currentVersion == "github-ae@latest" %}令牌{% else %} 用户名和密码{% endif %} 验证的请求，将共享该用户每小时 5,000 个请求的配额。

{% if currentVersion == "free-pro-team@latest" %}

#### {% data variables.product.prodname_ghe_cloud %} 用户到服务器速率限制

如果用户属于 {% data variables.product.prodname_ghe_cloud %} 帐户，则对同一个 {% data variables.product.prodname_ghe_cloud %} 帐户拥有的资源发出的用户到服务器请求，速率限制为每个经验证用户每小时 15,000 个请求。 该用户授权的所有 OAuth 应用程序、该用户拥有的个人访问令牌以及使用该用户的用户名和密码验证的 {% data variables.product.prodname_ghe_cloud %} 请求，将共享该用户每小时 5,000 个请求的配额。

{% endif %}

有关速率限制的更多信息，请参阅 REST API 的“[速率限制](/rest/overview/resources-in-the-rest-api#rate-limiting)”和 GraphQL API 的“[资源限制](/graphql/overview/resource-limitations)”。
