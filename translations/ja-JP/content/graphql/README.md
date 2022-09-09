---
ms.openlocfilehash: aadf6a8e4452758098031014ad7ade2ca28ac09a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068483"
---
# GraphQL

`/content/graphql` ディレクトリは、GitHub GraphQL API ドキュメントが保存されている場所です。

* `/content/graphql/guides` と `/content/graphql/overview` のディレクトリには、人間が編集できるアーティクルが含まれています。
* `/content/graphql/reference` ディレクトリには、GitHub GraphQL API で使われる各 GraphQL データ型のアーティクルが含まれています。 このディレクトリ内のコンテンツのほとんどは、`include` タグを使ってレンダリングされます。

  `include` タグによってレンダリングされるコンテンツは、`/lib/graphql/static` ディレクトリから取得され、これは GitHub で内部的に API ソース コードから自動的に生成されます。ユーザーは編集しないでください。 詳細については、[`/lib/graphql/README.md`](/lib/graphql/README.md) を参照してください。

  **そのため、このリポジトリで GraphQL API リファレンスに対するコントリビューションを受け付けることはできません。**
