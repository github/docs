---
title: GraphQL APIについて
intro: '{% data variables.product.prodname_dotcom %}のGraphQL APIは、柔軟性と、フェッチしたいデータを正確に定義できる機能を提供します。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 概要

以下は、GraphQL API v4を使い始めるためのクイックリンクです。

* [認証](/v4/guides/forming-calls/#authenticating-with-graphql)
* [ルートエンドポイント](/v4/guides/forming-calls/#the-graphql-endpoint)
* [スキーマイントロスペクション](/v4/guides/intro-to-graphql/#discovering-the-graphql-api)
* [レート制限](/v4/guides/resource-limitations/)
* [RESTからの移行](/v4/guides/migrating-from-rest)

### GraphQLについて

[GraphQL](https://graphql.github.io/)データクエリ言語は、

* **[仕様](https://graphql.github.io/graphql-spec/June2018/)です。**この仕様は、APIサーバー上の[スキーマ](/v4/guides/intro-to-graphql#schema)の正当性を決定します。 スキーマは、クライアントの呼び出しの正当性を決定します。

* **[強く型付けされて](#about-the-graphql-schema-reference)います。**スキーマは、APIの型システムとすべてのオブジェクトの関係を定義します。

* **[イントロスペクティブ](/v4/guides/intro-to-graphql#discovering-the-graphql-api)です。**クライアントは、スキーマに関する詳細を求めるためにスキーマに対してクエリを行えます。

* **[階層型](/v4/guides/forming-calls)です。**GraphQLの呼び出しの形は、返されるJSONデータの型を反映します。 [入れ子になったフィールド](/v4/guides/migrating-from-rest/#example-nesting)によって、1回のラウンドトリップで指定したデータだけをクエリで返してもらうことができます。

* **アプリケーション層です。**GraphQLはストレージモデルやデータベースクエリ言語ではありません。 _グラフ_はスキーマで定義されたグラフ構造を指し、[ノード](/v4/guides/intro-to-graphql#node)はオブジェクトを、[エッジ](/v4/guides/intro-to-graphql#edge)はオブジェクト間の関係を定義します。 APIは、データがどのように保存されているかに関係なく、スキーマ定義に従ってアプリケーションデータをトラバースして返します。

### GitHubがGraphQLを使う理由

GitHubは、インテグレーターにとって大きな柔軟性を提供してくれることから、API v4にGraphQLを選択しました。 ほしいデータ_だけ_を正確に定義できるのは、REST API v3エンドポイントよりも強力な利点です。 GraphQLを使えば、指定したデータをフェッチするための複数のRESTのリクエストを_単一の呼び出し_で置き換えられます。

GitHubがGraphQLに移行した理由の詳細については、オリジナルの[アナウンスのblogポスト](https://githubengineering.com/the-github-graphql-api/)を参照してください。

### GraphQLのスキーマ参照について

サイドバー内のドキュメントは、{% data variables.product.prodname_dotcom %}のGraphQL[スキーマ](/v4/guides/intro-to-graphql/#discovering-the-graphql-api)から生成されます。 すべての呼び出しは、このスキーマに対して検証され、実行されます。 以下のドキュメントを使って、呼び出せるデータを見つけてください。

* 許可された操作：[クエリ](/v4/query)と[ミューテーション](/v4/mutation)。

* スキーマ定義型：[スカラー](/v4/scalar)、[オブジェクト](/v4/object)、[列挙](/v4/enum)、[インターフェース](/v4/interface)、[union](/v4/union)、[入力オブジェクト](/v4/input_object)。

同じ内容には、[Explorer Docsサイドバー](/v4/guides/using-the-explorer#accessing-the-sidebar-docs)からもアクセスできます。 GraphQL APIの呼び出しをうまく行うためには、ドキュメントとスキーマ検証の両方に依存しなければならないことがあります。

認証やレート制限の詳細など その他の情報については[ガイド](/v4/guides)を参照してください。

### サポートのリクエスト

{% data reusables.support.help_resources %}
