---
title: GraphQLの紹介
intro: GitHub GraphQL APIを利用するための有益な用語と概念を学んでください。
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: abc74dfd4aa65035405fd956c6438a487381284b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068471'
---
## GraphQLの用語

GitHub GraphQL APIは、GitHub REST APIからのアーキテクチャ及び概念的な移行を表すものです。 GraphQL API の[リファレンス ドキュメント](/graphql)では、いくつかの新しい用語が登場することになるでしょう。

## スキーマ

スキーマは、GraphQL APIの型システムを定義します。 これは、クライアントがアクセスできる、存在しうるデータ（オブジェクト、フィールド、リレーションシップ、すべて）の完全な集合を記述します。 クライアントからの呼び出しは、スキーマに対して[検証](https://graphql.github.io/learn/validation/)され、[実行](https://graphql.github.io/learn/execution/)されます。 クライアントは、[イントロスペクション](#discovering-the-graphql-api)を使用してスキーマに関する情報を確認できます。 スキーマはGraphQL APIサーバー上にあります。 詳細については、「[GraphQL API の検出](#discovering-the-graphql-api)」を参照してください。

## フィールド

フィールドは、オブジェクトから取り出せるデータの単位です。 [GraphQL の公式ドキュメント](https://graphql.github.io/learn/schema/)では、「GraphQL クエリ言語は、基本的にオブジェクトのフィールドを選択するものです」と記載されています。

[公式仕様](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields)では、フィールドについても次のように記載されています。

> すべてのGraphQLの操作は、明確な形のレスポンスが保証されるよう、スカラー値を返すフィールドまで降りた指定をしなければなりません。

これはすなわち、スカラーではないフィールドを返させようとすると、スキーマ検証でエラーが投げられるということです。 すべてのフィールドがスカラー値を返すまで、入れ子になったサブフィールドを追加しなければなりません。

## 引数

引数は、特定のフィールドに添付されるキー/値ペアの集合です。 フィールドの中には、引数を必要とするものがあります。 [ミューテーション](/graphql/guides/forming-calls-with-graphql#about-mutations)では、引数として入力オブジェクトが要求されます。

## 実装

GraphQL スキーマでは、_実装_ という用語を使用して、オブジェクトが [インターフェイス](/graphql/reference/interfaces)からどのように継承されるかを定義することがあります。

以下は、インターフェース `X` とオブジェクト `Y` を定義するスキーマの考案された例です。

```
interface X {
  some_field: String!
  other_field: String!
}

type Y implements X {
  some_field: String!
  other_field: String!
  new_field: String!
}
```

これは、オブジェクト `Y` でインターフェース `X` と同じフィールド/引数/戻り値の型が必要とされる一方で、オブジェクト `Y` 固有の新たなフィールドを追加する必要があるということです。 (`!` はそのフィールドが必須であることを意味します。)

リファレンスドキュメントには、以下のような記述があります。

* 各 [オブジェクト](/graphql/reference/objects) には、継承元のインターフェイス _が_ **[実装**] の下に一覧表示されます。

* 各 [インターフェイス](/graphql/reference/interfaces) には、継承 _するオブジェクトが_ **[実装]** の下に一覧表示されます。

## Connection

コネクションを使うと、同じ呼び出しの一部として関連するオブジェクトに対するクエリを実行できます。 コネクションを使うと、REST APIでは複数の呼び出しを使うような場合に、単一のGraphQL呼び出しを使うことができます。 詳細については、「[REST から GraphQL への移行](/graphql/guides/migrating-from-rest-to-graphql)」を参照してください。

点を線でつなぎ、グラフを図示すると役立ちます。 点はノードで、線はエッジです。 コネクションは、ノード間の関係を定義します。

## Edge

エッジは、ノード間のコネクションを表します。 コネクションに対してクエリを行うと、そのエッジをトラバースしてノードを取得することになります。 すべての `edges` フィールドには、`node` フィールドと `cursor` フィールドがあります。 カーソルは[改ページ位置の自動修正](https://graphql.github.io/learn/pagination/)に使用されます。

## Node

_ノード_ はオブジェクトの総称です。 ノードは直接ルックアップすることもできますが、コネクションを通じて関連するノードにアクセスすることもできます。 [スカラー](/graphql/reference/scalars)を返さない `node` を指定する場合は、すべてのフィールドでスカラーが返されるまでサブフィールドを含める必要があります。 REST API を通じてノード ID にアクセスし、それらを GraphQL クエリで使用する方法について詳しくは、「[グローバル ノード ID を使用する](/graphql/guides/using-global-node-ids)」を参照してください。

## GraphQL APIの発見

GraphQL は[内省的](https://graphql.github.io/learn/introspection/)です。 これはすなわち、GraphQLスキーマに関する詳細をクエリできるということです。

* `__schema` に対してクエリを実行して、スキーマで定義されているすべての型を一覧表示させ、それぞれの詳細を取得します。

  ```graphql
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
  ```

* `__type` に対してクエリを実行して、任意の型の詳細を取得します。

  ```graphql
  query {
    __type(name: "Repository") {
      name
      kind
      description
      fields {
        name
      }
    }
  }
  ```

* `GET` 要求を使用して、スキーマの _イントロスペクション クエリ_ を実行することもできます。

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```
  
  {% note %}

  **注**: `"message": "Bad credentials"` または `401 Unauthorized` 応答を受け取った場合は、有効なトークンを使用していることを確認してください。 詳細については、[個人アクセス トークンの作成](/github/authenticating-to-github/creating-a-personal-access-token)に関する記事を参照してください。 

  {% endnote %}
  
  結果はJSONで返されるので、読んだり検索したりしやすくするために、プリティプリントすることをおすすめします。 [jq](https://stedolan.github.io/jq/) などのコマンドライン ツールを使用したり、この目的のために結果を `python -m json.tool` にパイプしたりできます。
  
  あるいは、`idl` メディア型を渡して、IDL 形式で結果を返してもらうこともできます。これはスキーマの圧縮バージョンです。

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **注**: イントロスペクション クエリは、おそらく GraphQL で実行する唯一の `GET` 要求です。 本文を渡す場合、GraphQL の要求メソッドは、クエリでもミューテーションでも `POST` です。

  {% endnote %}

  クエリの実行について詳しくは、「[GraphQL での呼び出しの作成](/graphql/guides/forming-calls-with-graphql)」を参照してください。
