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
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: 速率限制
---

## 服务器到服务器请求

{% ifversion ghec %}

The rate limits for server-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### 标准的服务器到服务器速率限制

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion ghec %}

### {% data variables.product.prodname_ghe_cloud %} 服务器到服务器速率限制

{% data variables.product.prodname_github_apps %} that are installed on an organization or repository owned by an enterprise on {% data variables.product.product_location %} have a rate limit of 15,000 requests per hour for server-to-server requests.

{% endif %}

## 用户到服务器请求

{% data variables.product.prodname_github_apps %} 还可以[代表用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps)发送用户到服务器的请求。

{% ifversion ghec %}

The rate limits for user-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### 标准的用户到服务器速率限制

{% endif %}

User-to-server requests are rate limited at {% ifversion ghae %}15,000{% else %}5,000{% endif %} requests per hour and per authenticated user. 该用户授权的所有 OAuth 应用程序、该用户拥有的个人访问令牌以及使用该用户的{% ifversion ghae %} 令牌{% else %} 用户名和密码{% endif %} 验证的请求，将共享该用户每小时 5,000 个请求的配额。

{% ifversion ghec %}

### {% data variables.product.prodname_ghe_cloud %} 用户到服务器速率限制

When a user belongs to an enterprise on {% data variables.product.product_location %}, user-to-server requests to resources owned by the same enterprise are rate limited at 15,000 requests per hour and per authenticated user. All OAuth applications authorized by that user, personal access tokens owned by that user, and requests authenticated with that user's username and password share the same quota of 5,000 requests per hour for that user.

{% endif %}

有关速率限制的更多信息，请参阅 REST API 的“[速率限制](/rest/overview/resources-in-the-rest-api#rate-limiting)”和 GraphQL API 的“[资源限制]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)”。
