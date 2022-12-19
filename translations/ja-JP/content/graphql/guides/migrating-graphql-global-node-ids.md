---
title: GraphQLグローバルノードIDの移行
intro: 2つのグローバルノードIDフォーマットについて、そして旧来のフォーマットから新フォーマットへの移行方法について学びます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Migrating global node IDs
ms.openlocfilehash: 7d62d81e52b848e4fb8b5f6b2bae9997e0ac1209
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717854'
---
## バックグラウンド

{% data variables.product.product_name %} GraphQL APIは、現在2種類のグローバルノードIDフォーマットをサポートしています。 旧来のフォーマットは非推奨と成り、新しいフォーマットで置き換えられます。  このガイドは、必要な場合の新フォーマットへの移行方法を紹介します。 

新しいフォーマットに移行することで、リクエストに対するレスポンスタイムが一貫して小さくなることが保証できます。 また、旧来のIDが完全に非推奨になっても、アプリケーションが動作し続けられることも保証できます。

レガシ グローバル ノード ID 形式が非推奨になる理由の詳細については、「[New global ID format coming to GraphQL (GraphQL に新しいグローバル ID 形式が登場)](https://github.blog/2021-02-10-new-global-id-format-coming-to-graphql)」を参照してください。

## 対応の必要性の判断

GraphQLグローバルノードIDへの参照を保存している場合にのみ、移行のステップを踏んでいかなければなりません。  これらの ID は、スキーマ内の任意のオブジェクトの `id` フィールドに対応します。  グローバルノードIDをまったく保存していないなら、変更なしにAPIを扱い続けられます。

さらに、現在、レガシ ID をデコードして型情報を抽出する場合 (たとえば、オブジェクトが pull request であるかどうかを判断するために `PR_kwDOAHz1OX4uYAah` の最初の 2 文字を使用する場合)、ID の形式が変更されたため、サービスは中断されます。  これらのIDを不透明な文字列として扱うよう、サービスを移行しなければなりません。  これらのIDは一意になるので、直接参照として依存できます。


## 新しいグローバルIDへの移行

新しい ID 形式への移行を支援するために、GraphQL API 要求で `X-Github-Next-Global-ID` ヘッダーを使用できます。 `X-Github-Next-Global-ID` ヘッダーの値は、`1` または `0` にできます。  値を `1` に設定すると、`id` フィールドを要求したオブジェクトに対して、常に新しい ID 形式が使用されるように応答ペイロードが強制されます。  値を `0` 設定すると、既定の動作に戻ります。この場合、オブジェクトの作成日に応じてレガシ ID または新しい ID が表示されます。 

以下は、cURLを使ったリクエストの例です:

```
$ curl \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-Github-Next-Global-ID: 1" \
  https://api.github.com/graphql \
  -d '{ "query": "{ node(id: \"MDQ6VXNlcjM0MDczMDM=\") { id } }" }'
```

クエリでレガシ ID `MDQ6VXNlcjM0MDczMDM=` が使用された場合でも、応答には新しい ID 形式が含まれます。
```
{"data":{"node":{"id":"U_kgDOADP9xw"}}}
```
`X-Github-Next-Global-ID` ヘッダーを使用すると、アプリケーションで参照するレガシ ID の新しい ID 形式を確認できます。 レスポンスで受信されたIDで、それらの参照を更新できます。 旧来のidへの参照をすべて更新し、移行のAPIへのリクエストでは新しいIDフォーマットを使わなければなりません。 バルク操作を行う際には、1つのAPIコールで複数ノードのクエリをサブミットするために、エイリアスを利用できます。 詳細については、[GraphQL のドキュメント](https://graphql.org/learn/queries/#aliases)を参照してください。

アイテムのコレクションに対して新しいIDを取得することもできます。 たとえば、Organization中の最後の10個のリポジトリの新しいIDを取得したい場合は、以下のようなクエリを使うことができます。
```
{
  organization(login: "github") {
    repositories(last: 10) {
      edges {
        cursor
        node {
          name
          id
        }
      }
    }
  }
}
```

`X-Github-Next-Global-ID` を `1` に設定すると、クエリ内のすべての `id` フィールドの戻り値に影響することに注意してください。  つまり、`node` 以外のクエリを送信した場合でも、`id` フィールドを要求した場合は新しい形式の ID が返されます。

## フィードバックを送る

アプリに影響を与えるこの変更のロールアウトに関する懸念がある場合は、[{% data variables.product.product_name %} にお問い合わせ](https://support.github.com/contact)いただき、アプリ名などの情報を提供していただければ、より良いサポートを提供できます。
