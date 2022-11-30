---
title: クエリ
miniTocMaxHeadingLevel: 3
redirect_from:
  - /v4/query
  - /v4/reference/query
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: d5c31e8e00788d2e75f27b0bb161249f01fcfb1d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109043'
---
## クエリについて

すべてのGraphQLスキーマは、クエリとミューテーションの両方についてルート型を持っています。 [クエリの種類](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System)によって、サーバーからデータを取得する GraphQL 操作が定義されます。

詳細については、「[クエリについて](/graphql/guides/forming-calls-with-graphql#about-queries)」を参照してください。

{% note %}

**注:** [ユーザーからサーバーへの](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) {% data variables.product.prodname_github_app %} 要求の場合は、issue と pull request に対して個別のクエリを使う必要があります。 たとえば、`is:issue` または `is:pull-request` のフィルターと同等のものを使います。 `search` 接続を使って issue と pull request の組み合わせを 1 つのクエリで返すと、ノードのセットが空になります。

{% endnote %}

<!-- Content after this section is automatically generated -->
