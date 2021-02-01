---
title: GitHub Appのレート制限
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

### さーばーからサーバーへのリクエスト

{% if currentVersion == "free-pro-team@latest" %}

{% data variables.product.prodname_ghe_cloud %}アカウントが所有するOrganizationもしくはリポジトリにアプリエーションがインストールされた場合、様々なサーバーからサーバーへのリクエストのレート制限が{% data variables.product.prodname_github_app %}に適用されます。

#### 通常のサーバーからサーバーへのレート制限

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% if currentVersion == "free-pro-team@latest" %}

#### {% data variables.product.prodname_ghe_cloud %}のサーバーからサーバーへのレート制限

{% data variables.product.prodname_ghe_cloud %}アカウントが所有するOrganizationもしくはリポジトリにインストールされ、サーバーからサーバーへのリクエストを発行する{% data variables.product.prodname_github_app %}は、1時間あたり15,000リクエストのレート制限を持ちます。

{% endif %}

### ユーザからサーバーへのリクエスト

{% data variables.product.prodname_github_app %}[ユーザの代わりに](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps)動作し、ユーザからサーバーへのリクエストを発行することができます。

{% if currentVersion == "free-pro-team@latest" %}

アプリケーションが{% data variables.product.prodname_ghe_cloud %}アカウントが所有するOrganiozationもしくはリポジトリにインストールされ、認証されたユーザが同じ{% data variables.product.prodname_ghe_cloud %}アカウントに属しているなら、様々なユーザからサーバーへのリクエストのレート制限が{% data variables.product.prodname_github_app %}に適用されます。

#### 通常のユーザからサーバーへのレート制限

{% endif %}

ユーザからサーバーへのリクエストは、1時間あたり及び認証されたユーザごとに5,000リクエストのレート制限を受けます。 そのユーザが認可したすべてのOAuthアプリケーション、そのユーザが所有する個人アクセストークン、そのユーザの{% if currentVersion == "github-ae@latest" %}トークン{% else %}ユーザ名及びパスワード{% endif %}で認証されたリクエストは、そのユーザに対する1時間あたり5,000リクエストの同じクォータを共有します。

{% if currentVersion == "free-pro-team@latest" %}

#### {% data variables.product.prodname_ghe_cloud %}のユーザからサーバーへのレート制限

ユーザが{% data variables.product.prodname_ghe_cloud %}アカウントに属している場合、同じ{% data variables.product.prodname_ghe_cloud %}アカウントに所有されているリソースへのユーザからサーバーへのリクエストは、1時間あたり認証されたユーザごとに15,000リクエストのレート制限を受けます。 そのユーザが認可したすべてのOAuthアプリケーション、そのユーザが所有する個人アクセストークン、そのユーザのユーザ名及びパスワードで認証された{% data variables.product.prodname_ghe_cloud %}リクエストは、そのユーザに対する1時間あたり5,000リクエストの同じクォータを共有します。

{% endif %}

レート制限に関する詳細な情報については、REST APIについては「[レート制限](/rest/overview/resources-in-the-rest-api#rate-limiting)」を、GraphQL APIについては「[リソース制限](/graphql/overview/resource-limitations)」を参照してください。
