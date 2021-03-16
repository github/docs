---
title: GraphQLの紹介
intro: GitHub GraphQL APIを利用するための有益な用語と概念を学んでください。
redirect_from:
  - /v4/guides/intro-to-graphql
  - /graphql/guides/intro-to-graphql
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### GraphQLの用語

GitHub GraphQL APIは、GitHub REST APIからのアーキテクチャ及び概念的な移行を表すものです。 GraphQL APIの[リファレンスドキュメント](/graphql)では、いくつかの新しい用語が登場することになるでしょう。

### スキーマ

スキーマは、GraphQL APIの型システムを定義します。 これは、クライアントがアクセスできる、存在しうるデータ（オブジェクト、フィールド、リレーションシップ、すべて）の完全な集合を記述します。 クライアントからの呼び出しは、スキーマに対して[検証](https://graphql.github.io/learn/validation/)され、[実行](https://graphql.github.io/learn/execution/)されます。 クライアントは、[イントロスペクション](#discovering-the-graphql-api)を通じてスキーマに関する情報を見つけます。 スキーマはGraphQL APIサーバー上にあります。 詳しい情報については「[GraphQL APIを見つける](#discovering-the-graphql-api)」を参照してください。

### フィールド

フィールドは、オブジェクトから取り出せるデータの単位です。 [公式GraphQLドキュメント](https://graphql.github.io/learn/schema/)は「GraphQLクエリ言語は、基本的にオブジェクト上のフィールドを選択するものです」と述べています。

[公式の仕様](https://graphql.github.io/graphql-spec/June2018/#sec-Language.Fields)も、フィールドについて述べています。

> すべてのGraphQLの操作は、明確な形のレスポンスが保証されるよう、スカラー値を返すフィールドまで降りた指定をしなければなりません。

これはすなわち、スカラーではないフィールドを返させようとすると、スキーマ検証でエラーが投げられるということです。 すべてのフィールドがスカラー値を返すまで、入れ子になったサブフィールドを追加しなければなりません。

### 引数

引数は、特定のフィールドに添付されるキー/値ペアの集合です。 フィールドの中には、引数を必要とするものがあります。 [ミューテーション](/graphql/guides/forming-calls-with-graphql#about-mutations)は引数として入力オブジェクトを必要とします。

### Implementation

GraphQLのスキーマは、_implements_という語を使ってオブジェクトが[インターフェース](/graphql/reference/interfaces)からどのように継承するかを定義することがあります。

以下は、インターフェース`X`とオブジェクト`Y`の仮想的な例です。

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

これは、オブジェクト`Y`がインターフェース`X`と同じフィールド/引数/返値型を必要とし、一方でオブジェクト`Y`固有の新たなフィールドを追加しているということです。 （`!`はそのフィールドが必須だという意味です）

リファレンスドキュメントには、以下のような記述があります。

* 各[オブジェクト](/graphql/reference/objects)は、**Implements**の下に_継承元の_インターフェースを並べます。

* 各[インターフェース](/graphql/reference/interfaces)は、** Implementations**の下に_継承先_のオブジェクトを並べます。

### コネクション

コネクションを使うと、同じ呼び出しの一部として関連するオブジェクトに対するクエリを実行できます。 コネクションを使うと、REST APIでは複数の呼び出しを使うような場合に、単一のGraphQL呼び出しを使うことができます。 詳しい情報については「[RESTからGraphQLへの移行](/graphql/guides/migrating-from-rest-to-graphql)」を参照してください。

点を線でつなぎ、グラフを図示すると役立ちます。 点はノードで、線はエッジです。 コネクションは、ノード間の関係を定義します。

### エッジ

エッジは、ノード間のコネクションを表します。 コネクションに対してクエリを行うと、そのエッジをトラバースしてノードを取得することになります。 すべての`edges`フィールドは`node`フィールドと`cursor`フィールドを持ちます。 カーソルは[ページネーション](https://graphql.github.io/learn/pagination/)に使われます。

### ノード

_ノード_ はオブジェクトの総称です。 ノードは直接ルックアップすることもできますが、コネクションを通じて関連するノードにアクセスすることもできます。 [スカラー](/graphql/reference/scalars)を返さない`node`を指定する場合は、すべてのフィールドがスカラーを返すまでサブフィールドを含めなければなりません。 REST APIを通じてノードIDにアクセスし、それらをGraphQLクエリで利用することに関する情報については、「[グローバルノードIDの利用](/graphql/guides/using-global-node-ids)」を参照してください。

## GraphQL APIの発見

GraphQLは[イントロスペクション](https://graphql.github.io/learn/introspection/)ができます。 これはすなわち、GraphQLスキーマに関する詳細をクエリできるということです。

* `__schema`に対してクエリを行い、スキーマ中で定義されているすべての型と、それぞれについての詳細を取得してください。

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

* 任意の型について、`__type`にクエリを行って詳細を得てください。

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

* `GET`リクエストを通じてスキーマの_イントロスペクションクエリ_を実行することもできます。

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" {% data variables.product.graphql_url_pre %}
  ```

  結果はJSONで返されるので、読んだり検索したりしやすくするために、プリティプリントすることをおすすめします。 そのためには、[jq](https://stedolan.github.io/jq/)のようなコマンドラインツールを使ったり、結果を`python -m json.tool`にパイプしたりすることができます。

  あるいは、`idl`メディアタイプを渡して、IDLフォーマットで結果を返してもらうこともできます。これはスキーマの圧縮バージョンです。

  ```shell
  $ curl -H "Authorization: bearer <em>token</em>" -H "Accept: application/vnd.github.v4.idl" \
  {% data variables.product.graphql_url_pre %}
  ```

  {% note %}

  **ノート**: イントロスペクションクエリは、おそらくGraphQLで実行する唯一の`GET`リクエストです。 ボディを渡す場合、GraphQLのリクエストメソッドはクエリでもミューテーションでも`POST`です。

  {% endnote %}

  クエリの実行に関する詳しい情報については「[GraphQLでの呼び出しの作成](/graphql/guides/forming-calls-with-graphql)」を参照してください。
