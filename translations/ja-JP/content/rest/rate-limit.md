---
title: レート制限
intro: REST API を使って、現在のレート制限の状態を確認します。
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
ms.openlocfilehash: a609d339af2201bba5ec12044a8eebe733013cea
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193415'
---
## レート制限について

現在のレート制限の状態はいつでも確認できます。 レート制限規則について詳しくは、「[REST API のリソース](/rest/overview/resources-in-the-rest-api#rate-limiting)」をご覧ください。 

アイテムを検索するための REST API には、他の REST API エンドポイントを管理するレート制限とは別のカスタム レート制限があります。 詳しくは、「[search](/rest/search)」をご覧ください。 GraphQL API にも、REST API のレート制限とは別の、別の方法で計算されるカスタム レート制限があります。 詳しくは、「[リソースの制限](/graphql/overview/resource-limitations#rate-limit)」をご覧ください。 そのため、API の応答は、レート制限を分類します。 `resources` の下には、次のようなさまざまなカテゴリに関連するオブジェクトが表示されます。

* `core` オブジェクトは、REST API の検索に関連しないすべてのリソースに関するレート制限の状態を示します。

* `search` オブジェクトは、REST API の検索に関するレート制限の状態を示します。

* `graphql` オブジェクトは、GraphQL API のレート制限の状態を示します。

* `integration_manifest` オブジェクトは、`POST /app-manifests/{code}/conversions` 操作のレート制限の状態を示します。 詳しくは、「[マニフェストから GitHub アプリを作成する](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)」をご覧ください。

レート制限の応答のヘッダーと値の詳細については、「[Resources in the REST API](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)」 (REST API のリソース) を参照してください。
