---
title: 互換性に影響する変更
intro: '最近の、及び今後の{% data variables.product.prodname_dotcom %} GraphQL APIに対する破壊的変更について学んでください。'
redirect_from:
  - /v4/breaking_changes
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: ee38f60dfd12d00688e46c739fc41f328203daf5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496653'
---
## 破壊的変更について

破壊的変更は、インテグレーターからのアクションが必要になるかもしれない変更です。 これらの変更は、2つに分類されます。

- **破壊的:** GraphQL API に対する既存のクエリを損なう変更。 たとえば、フィールドの削除は破壊的変更です。
- **危険:** 既存のクエリを損なうことはないものの、クライアントの実行時の振る舞いに影響するかもしれない変更。 enum値の追加は危険な変更の例です。

私たちは、インテグレーターに安定したAPIを提供するよう努めています。 新しい機能が進化を続けている場合、それは[スキーマ プレビュー](/graphql/overview/schema-previews)の背後でリリースしています。

今後の破壊的変更のアナウンスは、遅くてもGraphQLスキーマに対して変更を行う3ヶ月前にアナウンスを行い、インテグレーターに必要な調整を行う時間を提供します。 変更は、四半期の初日（1月1日、4月1日、7月1日、10月1日）に適用されます。 たとえば、変更を1月115日にアナウンスした場合、その変更は7月1日に行われます。
