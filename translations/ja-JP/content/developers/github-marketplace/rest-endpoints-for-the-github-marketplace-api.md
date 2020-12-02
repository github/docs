---
title: GItHub Marketplace API用のRESTエンドポイント
intro: '{% data variables.product.prodname_marketplace %}上でのアプリケーションの管理を支援するために、以下の{% data variables.product.prodname_marketplace %} APIエンドポイントを使ってください。'
redirect_from:
  - /apps/marketplace/github-marketplace-api-endpoints/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints/
  - /marketplace/integrating-with-the-github-marketplace-api/github-marketplace-rest-api-endpoints
versions:
  free-pro-team: '*'
---



以下は、Marketplaceのリストで利用できる便利なエンドポイントです。

* [プランのリスト](/rest/reference/apps#list-plans)
* [プランのアカウントのリスト](/rest/reference/apps#list-accounts-for-a-plan)
* [アカウントのサブスクリプションプランの取得](/rest/reference/apps#get-a-subscription-plan-for-an-account)
* [認証されたユーザのサブスクリプションのリスト](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)

{% data variables.product.prodname_marketplace %} APIを使用する際の認証の受け方の詳細については、以下のページを参照してください。

* [OAuth Appの認可オプション](/apps/building-oauth-apps/authorizing-oauth-apps/)
* [GitHub Appの認可オプション](/apps/building-github-apps/authenticating-with-github-apps/)

{% note %}

**ノート:** [REST APIのためのレート制限](/rest#rate-limiting)は、{% data variables.product.prodname_marketplace %} APIのすべてのエンドポイントに適用されます。

{% endnote %}
