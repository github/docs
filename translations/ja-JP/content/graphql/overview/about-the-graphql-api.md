---
title: GraphQL APIについて
intro: '{% data variables.product.prodname_dotcom %}のGraphQL APIは、柔軟性と、フェッチしたいデータを正確に定義できる機能を提供します。'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 9b447925609425157d5d965370c09fdd12d30b56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068422'
---
## 概要

以下は、GraphQL APIを使い始めるためのクイックリンクです。

* [認証](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [ルート エンドポイント](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [スキーマ イントロスペクション](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [転送率の制限](/graphql/overview/resource-limitations)
* [REST からの移行](/graphql/guides/migrating-from-rest-to-graphql)

## GraphQLについて

[GraphQL](https://graphql.github.io/) データ クエリ言語は次のとおりです。

* **[仕様](https://graphql.github.io/graphql-spec/June2018/)です。** 仕様によって、API サーバー上の [スキーマ](/graphql/guides/introduction-to-graphql#schema) の有効性が決まります。 スキーマは、クライアントの呼び出しの正当性を決定します。

* **[厳密に型指定](#about-the-graphql-schema-reference)されます。** スキーマによって、API の型システムとすべてのオブジェクト リレーションシップが定義されます。

* **[内省的](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)です。** クライアントはスキーマに対してクエリを実行して、スキーマの詳細を確認できます。

* **[階層構造](/graphql/guides/forming-calls-with-graphql)です。** GraphQL 呼び出しの構造は、返される JSON データの構造を反映しています。 [入れ子になったフィールド](/graphql/guides/migrating-from-rest-to-graphql#example-nesting)を使用すると、1 回のラウンド トリップで指定したデータのみをクエリおよび受信できます。

* **アプリケーション レイヤーです。** GraphQL は、ストレージ モデルまたはデータベース クエリ言語ではありません。 _graph_ は、スキーマで定義されたグラフ構造を指します。[ノード](/graphql/guides/introduction-to-graphql#node)でオブジェクトが定義され、[エッジ](/graphql/guides/introduction-to-graphql#edge)でオブジェクト間のリレーションシップが定義されます。 APIは、データがどのように保存されているかに関係なく、スキーマ定義に従ってアプリケーションデータをトラバースして返します。

## GitHubがGraphQLを使う理由

GitHubは、インテグレーターにとって大きな柔軟性を提供してくれることから、GraphQLを選択しました。 必要&mdash;なデータを正確に定義する機能と、必要 _なデータ_ のみを&mdash;定義できることは、従来の REST API エンドポイントよりも強力な利点です。 GraphQL を使用すると、複数の REST 要求を _1 回の呼び出しに_ 置き換えて、指定したデータをフェッチできます。

GitHub が GraphQL に投資した理由の詳細については、元の[お知らせブログ記事](https://github.blog/2016-09-14-the-github-graphql-api/)をご覧ください。

## GraphQLのスキーマ参照について

サイドバーのドキュメントは、{% data variables.product.prodname_dotcom %} GraphQL [スキーマ](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)から生成されます。 すべての呼び出しは、このスキーマに対して検証され、実行されます。 以下のドキュメントを使って、呼び出せるデータを見つけてください。

* 許可される操作: [クエリ](/graphql/reference/queries)と[ミューテーション](/graphql/reference/mutations)。

* スキーマ定義型: [スカラー](/graphql/reference/scalars)、[オブジェクト](/graphql/reference/objects)、[列挙型](/graphql/reference/enums)、[インターフェイス](/graphql/reference/interfaces)、[和集合](/graphql/reference/unions)、[および入力オブジェクト](/graphql/reference/input-objects)。

この同じコンテンツには、[Explorer のドキュメントのサイドバー](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)からアクセスできます。 GraphQL APIの呼び出しをうまく行うためには、ドキュメントとスキーマ検証の両方に依存しなければならないことがあります。

認証やレート制限の詳細など、その他の情報については「[ガイド](/graphql/guides)」を参照してください。

## サポートのリクエスト

{% data reusables.support.help_resources %}
