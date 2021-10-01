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
topics:
  - GitHub Apps
shortTitle: レート制限
---

## サーバーからサーバーへのリクエスト

{% ifversion fpt %}

Different server-to-server request rate limits apply to {% data variables.product.prodname_github_apps %} if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account.

### 通常のサーバーからサーバーへのレート制限

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion fpt %}

### {% data variables.product.prodname_ghe_cloud %}のサーバーからサーバーへのレート制限

{% data variables.product.prodname_github_apps %} that are installed on an organization or repository owned by a {% data variables.product.prodname_ghe_cloud %} account and make server-to-server requests have a rate limit of 15,000 requests per hour.

{% endif %}

## ユーザからサーバーへのリクエスト

{% data variables.product.prodname_github_apps %} can also act [on behalf of a user](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps), making user-to-server requests.

{% ifversion fpt %}

Different user-to-server request rate limits apply to {% data variables.product.prodname_github_apps %} if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account and the authenticated user also belongs to the same {% data variables.product.prodname_ghe_cloud %} account.

### 通常のユーザからサーバーへのレート制限

{% endif %}

ユーザからサーバーへのリクエストは、1時間あたり及び認証されたユーザごとに5,000リクエストのレート制限を受けます。 ユーザが認可したすべてのOAuthアプリケーション、ユーザが所有する個人アクセストークン、ユーザの{% ifversion ghae %} トークン{% else %} ユーザ名およびパスワード{% endif %} で認証されたリクエストは、ユーザに対する1時間あたり5,000リクエストという割り当てを共有します。

{% ifversion fpt %}

### {% data variables.product.prodname_ghe_cloud %}のユーザからサーバーへのレート制限

ユーザが{% data variables.product.prodname_ghe_cloud %}アカウントに属している場合、同じ{% data variables.product.prodname_ghe_cloud %}アカウントに所有されているリソースへのユーザからサーバーへのリクエストは、1時間あたり認証されたユーザごとに15,000リクエストのレート制限を受けます。 そのユーザが認可したすべてのOAuthアプリケーション、そのユーザが所有する個人アクセストークン、そのユーザのユーザ名及びパスワードで認証された{% data variables.product.prodname_ghe_cloud %}リクエストは、そのユーザに対する1時間あたり5,000リクエストの同じクォータを共有します。

{% endif %}

レート制限に関する詳細な情報については、REST APIについては「[レート制限](/rest/overview/resources-in-the-rest-api#rate-limiting)」を、GraphQL APIについては「[リソース制限](/graphql/overview/resource-limitations)」を参照してください。
