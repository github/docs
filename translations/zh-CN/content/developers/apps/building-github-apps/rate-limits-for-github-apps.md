---
title: GitHub 应用程序的速率限制
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits/
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps/
  - /apps/building-github-apps/rate-limits-for-github-apps/
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
  - /developers/apps/rate-limits-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub Apps
shortTitle: 速率限制
---

## 服务器到服务器请求

{% ifversion fpt %}

Different server-to-server request rate limits apply to {% data variables.product.prodname_github_apps %} if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account.

### 标准的服务器到服务器速率限制

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion fpt %}

### {% data variables.product.prodname_ghe_cloud %} 服务器到服务器速率限制

{% data variables.product.prodname_github_apps %} that are installed on an organization or repository owned by a {% data variables.product.prodname_ghe_cloud %} account and make server-to-server requests have a rate limit of 15,000 requests per hour per organization for organization installations or per repository for repository installations.

{% endif %}

## 用户到服务器请求

{% data variables.product.prodname_github_apps %} can also act [on behalf of a user](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps), making user-to-server requests.

{% ifversion fpt %}

Different user-to-server request rate limits apply to {% data variables.product.prodname_github_apps %} if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account and the authenticated user also belongs to the same {% data variables.product.prodname_ghe_cloud %} account.

### 标准的用户到服务器速率限制

{% endif %}

用户到服务器请求的速率限制为每个经验证的用户每小时最多发送 5,000 个请求。 该用户授权的所有 OAuth 应用程序、该用户拥有的个人访问令牌以及使用该用户的{% ifversion ghae %} 令牌{% else %} 用户名和密码{% endif %} 验证的请求，将共享该用户每小时 5,000 个请求的配额。

{% ifversion fpt %}

### {% data variables.product.prodname_ghe_cloud %} 用户到服务器速率限制

如果用户属于 {% data variables.product.prodname_ghe_cloud %} 帐户，则对同一个 {% data variables.product.prodname_ghe_cloud %} 帐户拥有的资源发出的用户到服务器请求，速率限制为每个经验证用户每小时 15,000 个请求。 该用户授权的所有 OAuth 应用程序、该用户拥有的个人访问令牌以及使用该用户的用户名和密码验证的 {% data variables.product.prodname_ghe_cloud %} 请求，将共享该用户每小时 5,000 个请求的配额。

{% endif %}

有关速率限制的更多信息，请参阅 REST API 的“[速率限制](/rest/overview/resources-in-the-rest-api#rate-limiting)”和 GraphQL API 的“[资源限制](/graphql/overview/resource-limitations)”。
