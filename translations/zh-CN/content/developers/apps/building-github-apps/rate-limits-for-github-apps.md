---
title: GitHub 应用程序的速率限制
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps
  - /apps/building-github-apps/rate-limits-for-github-apps
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

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## About rate limits for apps

Rate limits for {% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} depend on the plan for the organization where you install the application. For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products)" and "[Types of {% data variables.product.company_short %} accounts](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)."

{% endif %}

## 服务器到服务器请求

{% ifversion ghec or fpt %}

### Default server-to-server rate limits for {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

发出服务器-服务器请求的 {% data variables.product.prodname_github_apps %} 使用安装的最低速率限制为每小时 5,000 个请求。 If an application is installed on an organization with more than 20 users, the application receives another 50 requests per hour for each user. 具有 20 个以上仓库的安装每小时会为每个仓库再接收 50 个请求。 安装的最大速率限制为每小时 12,500 个请求。

{% ifversion fpt or ghec %}

### Server-to-server rate limits for {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_github_apps %} that are installed on an organization or a repository within an enterprise on {% data variables.product.product_location %} are subject to a limit of 15,000 requests per hour.

{% endif %}

## 用户到服务器请求

{% data variables.product.prodname_github_apps %} and {% data variables.product.prodname_oauth_apps %} can also act on behalf of a user, making user-to-server requests after the user authorizes the app. For more information, see "[Authorizing {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)" and "[Authorizing {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)."

User-to-server requests from {% data variables.product.prodname_oauth_apps %} are authenticated with an OAuth token. User-to-server requests from {% data variables.product.prodname_github_apps %} are authenticated with either an OAuth token or an expiring user access token. For more information, see "[Identifying and authorizing users for {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps)" and "[Authorizing {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps)."

{% ifversion fpt or ghec %}

### Default user-to-server rate limits for {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% ifversion ghec %}

The rate limits for user-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### User-to-server rate limits for {% data variables.product.prodname_ghe_cloud %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## 延伸阅读

- "[Rate limiting](/rest/overview/resources-in-the-rest-api#rate-limiting)" in the REST API documentation
- "[Resource limitations]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)" in the GraphQL API documentation
