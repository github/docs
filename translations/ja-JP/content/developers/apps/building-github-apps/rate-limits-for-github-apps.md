---
title: GitHub Appのレート制限
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
shortTitle: レート制限
---

## サーバーからサーバーへのリクエスト

{% ifversion ghec %}

The rate limits for server-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### 通常のサーバーからサーバーへのレート制限

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion ghec %}

### {% data variables.product.prodname_ghe_cloud %}のサーバーからサーバーへのレート制限

{% data variables.product.prodname_github_apps %} that are installed on an organization or repository owned by an enterprise on {% data variables.product.product_location %} have a rate limit of 15,000 requests per hour for server-to-server requests.

{% endif %}

## ユーザからサーバーへのリクエスト

{% data variables.product.prodname_github_apps %}[ユーザの代わりに](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps)動作し、ユーザからサーバーへのリクエストを発行することができます。

{% ifversion ghec %}

The rate limits for user-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### 通常のユーザからサーバーへのレート制限

{% endif %}

User-to-server requests are rate limited at {% ifversion ghae %}15,000{% else %}5,000{% endif %} requests per hour and per authenticated user. ユーザが認可したすべてのOAuthアプリケーション、ユーザが所有する個人アクセストークン、ユーザの{% ifversion ghae %} トークン{% else %} ユーザ名およびパスワード{% endif %} で認証されたリクエストは、ユーザに対する1時間あたり5,000リクエストという割り当てを共有します。

{% ifversion ghec %}

### {% data variables.product.prodname_ghe_cloud %}のユーザからサーバーへのレート制限

When a user belongs to an enterprise on {% data variables.product.product_location %}, user-to-server requests to resources owned by the same enterprise are rate limited at 15,000 requests per hour and per authenticated user. All OAuth applications authorized by that user, personal access tokens owned by that user, and requests authenticated with that user's username and password share the same quota of 5,000 requests per hour for that user.

{% endif %}

レート制限に関する詳細な情報については、REST APIについては「[レート制限](/rest/overview/resources-in-the-rest-api#rate-limiting)」を、GraphQL APIについては「[リソース制限]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)」を参照してください。
