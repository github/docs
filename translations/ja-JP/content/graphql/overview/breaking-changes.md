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
ms.openlocfilehash: c76520b1f9dc806659373771b42501e072319937
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109499'
---
## 破壊的変更について

破壊的変更は、インテグレーターからのアクションが必要になるかもしれない変更です。 これらの変更は、2つに分類されます。

- **破壊的:** GraphQL API に対する既存のクエリを損なう変更。 たとえば、フィールドの削除は破壊的変更です。
- **危険:** 既存のクエリを損なうことはないものの、クライアントの実行時の振る舞いに影響するかもしれない変更。 enum値の追加は危険な変更の例です。

私たちは、インテグレーターに安定したAPIを提供するよう努めています。 新しい機能が進化を続けている場合、それは[スキーマ プレビュー](/graphql/overview/schema-previews)の背後でリリースしています。

今後の破壊的変更のアナウンスは、遅くてもGraphQLスキーマに対して変更を行う3ヶ月前にアナウンスを行い、インテグレーターに必要な調整を行う時間を提供します。 変更は、四半期の初日（1月1日、4月1日、7月1日、10月1日）に適用されます。 たとえば、変更を1月115日にアナウンスした場合、その変更は7月1日に行われます。
