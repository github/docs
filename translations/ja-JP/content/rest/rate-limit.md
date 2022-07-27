---
title: レート制限
intro: Rate limit APIを使うと、様々なREST APIの現在のレート制限のステータスをチェックできます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/rate-limit
---

## Rate limit APIについて

REST API 概要ドキュメンテーションでは、[レート制限のルール](/rest/overview/resources-in-the-rest-api#rate-limiting)について説明しています。 以下で説明する Rate Limit API を使用して、現在のレート制限ステータスをいつでも確認できます。

### レート制限のステータスを理解する

Search APIは[カスタムのレート制限](/rest/reference/search#rate-limit)を持ち、他のREST APIを管理するレート制限とは分離されています。 GraphQL APIも[カスタムのレート制限](/graphql/overview/resource-limitations#rate-limit)を持ち、REST APIのレート制限とは分離されて別に計算されます。

そのため、Rate Limit APIのレスポンスは、レート制限を分類します。 `resources` の下には、4 つのオブジェクトがあります。

* `core`オブジェクトは、REST API中の検索に関連しないすべてのリソースに関するレート制限のステータスを提供します。

* `search`オブジェクトは、[Search API](/rest/reference/search)に対するレート制限のステータスを提供します。

* `graphql`オブジェクトは、[GraphQL API](/graphql)に対するレート制限のステータスを提供します。

* `integration_manifest`オブジェクトは、[GitHub App Manifest コード変換](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)エンドポイントに対するレート制限のステータスを提供します。

レート制限レスポンス中のヘッダと値に関する詳しい情報については「[REST API中のリソース](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)」を参照してください。
