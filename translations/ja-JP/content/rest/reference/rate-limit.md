---
title: レート制限
redirect_from:
  - /v3/rate_limit
  - /v3/rate-limit
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

REST API 概要ドキュメンテーションでは、[レート制限のルール](/rest/overview/resources-in-the-rest-api#rate-limiting)について説明しています。 以下で説明する Rate Limit API を使用して、現在のレート制限ステータスをいつでも確認できます。

### レート制限のステータスを理解する

Search APIは[カスタムのレート制限](/v3/search/#rate-limit)を持ち、他のREST APIを管理するレート制限とは分離されています。 GraphQL APIも[カスタムのレート制限](/v4/guides/resource-limitations/#rate-limit)を持ち、REST APIのレート制限とは分離されて別に計算されます。

そのため、Rate Limit APIのレスポンスは、レート制限を分類します。 `resources` の下には、4 つのオブジェクトがあります。

* `core`オブジェクトは、REST API中の検索に関連しないすべてのリソースに関するレート制限のステータスを提供します。

* `search`オブジェクトは、[Search API](/v3/search/)に対するレート制限のステータスを提供します。

* `graphql`オブジェクトは、[GraphQL API](/v4/)に対するレート制限のステータスを提供します。

* `integration_manifest`オブジェクトは、[GitHub App Manifest コード変換](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)エンドポイントに対するレート制限のステータスを提供します。

レート制限レスポンス中のヘッダと値に関する詳しい情報については「[レート制限](/v3/#rate-limiting)」を参照してください。

{% include rest_operations_at_current_path %}
