---
title: レート制限
intro: Rate Limit API を使うと、さまざまな REST API の現在のレート制限のステータスを確認できます。
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
ms.openlocfilehash: 282b7e7bbb947256ccad4950b6a17d8874044d8f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081049'
---
## Rate Limit API について

REST API の概要ドキュメントでは、[レート制限のルール](/rest/overview/resources-in-the-rest-api#rate-limiting)について説明しています。 以下で説明する Rate Limit API を使用して、現在のレート制限ステータスをいつでも確認できます。

### レート制限のステータスを理解する

Search API には、残りの REST API に適用されるレート制限とは別の、[カスタム](/rest/reference/search#rate-limit)のレート制限があります。 GraphQL API にも、REST API のレート制限とは別の、別の方法で計算される[カスタム レート制限](/graphql/overview/resource-limitations#rate-limit)があります。

そのため、Rate Limit APIのレスポンスは、レート制限を分類します。 `resources` の下に、次の 4 つのオブジェクトがあります。

* `core` オブジェクトは、REST API の検索に関連しないすべてのリソースに関するレート制限の状態を示します。

* `search` オブジェクトは、[Search API](/rest/reference/search) のレート制限の状態を示します。

* `graphql` オブジェクトは、[GraphQL API](/graphql) のレート制限の状態を示します。

* `integration_manifest` オブジェクトは、[GitHub App Manifest コード変換](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)エンドポイントのレート制限の状態を示します。

レート制限の応答のヘッダーと値の詳細については、「[Resources in the REST API](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)」 (REST API のリソース) を参照してください。
