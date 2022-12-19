---
title: Explorerの利用
intro: 'ブラウザ内で動作する統合開発環境であるGraphQL Explorerを使って、本物の{% data variables.product.prodname_dotcom %}のデータに対してクエリを実行できます。GraphQL Explorerには、ドキュメント、シンタックスハイライト、検証エラーが含まれています。'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 19c534dd0cdcacdfd0d96bb93d055ff3fca8690b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749490'
---
## GraphQL Explorerについて

{% ifversion fpt or ghec %}

[GraphQL Explorer](/graphql/overview/explorer) は、[GraphiQL](https://github.com/graphql/graphiql) のインスタンスです。これは "グラフィカル インタラクティブ ブラウザー内 GraphQL IDE" です。

{% else %}

[GraphiQL](https://github.com/graphql/graphiql) は、このドキュメント内では GraphQL Explorer とも呼ばれており、これは "グラフィカル インタラクティブ ブラウザー内 GraphQL IDE" です。

{% endif %}

## GraphiQLの利用

GraphiQL アプリを使うには、 https://github.com/skevy/graphiql-app からダウンロードしてインストールします。

### GraphiQLの設定

1. [OAuth トークン](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)を取得します。
1. GraphiQL を起動します。
1. GraphiQL の右上隅にある **[Edit HTTP Headers](HTTP ヘッダーの編集)** をクリックします。
1. **[キー]** フィールドに「`Authorization`」と入力します。 **[Value] (値)** フィールドに「`Bearer <token>`」と入力します。ここで、`<token>` は生成した OAuth トークンです。
![graphiql ヘッダー](/assets/images/developer/graphiql-headers.png)
1. トークンの右側にあるチェックマークをクリックして保存します。
1. エディターに戻るには、 **[HTTP ヘッダーの編集]** モーダルの外部をクリックします。
1. **[GraphQL Endpoint](GraphQL エンドポイント)** フィールドに、「`{% data variables.product.graphql_url_pre %}`」と入力します。
1. **[メソッド]** ドロップダウン メニューで、 **[POST]** を選びます。

{% note %}

**注**: メソッドが `POST` である理由について詳しくは、「[GraphQL との通信](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)」をご覧ください。

{% endnote %}

自分自身についてのクエリを実行することで、アクセスのテストができます。

```graphql
query {
  viewer {
    login
  }
}
```

すべてが正しく動作していれば、これでログイン情報が表示されます。 これでクエリを発行する準備ができました。

## サイドバードキュメントへのアクセス

GraphQL スキーマ内のすべての型には、ドキュメントにコンパイルされる `description` フィールドが含まれています。 Explorer ページの右側にある折りたたみ可能な **[Docs]** ペインからは、型システムに関するドキュメントを参照できます。 このドキュメントは自動的に更新され、非推奨のフィールドは削除されます。

{% note %}

**[Docs]** サイドバーには、[[リファレンス]](/graphql) の下にあるスキーマから自動的に生成されるものと同じ内容が含まれていますが、所々形式が異なっています。

{% endnote %}

## 変数ペインの利用

呼び出しの例には、次のように記述された[変数](/graphql/guides/forming-calls-with-graphql#working-with-variables)が含まれます。

```graphql
query($number_of_repos:Int!){
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

これは、([改行をエスケープ](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)する限り) cURL `POST` を介して呼び出しを送信する正しい形式です。

この呼び出しを Explorer で実行したい場合は、メイン ペインに `query` セグメントを、その下の **[クエリ変数]** ペインに変数を入力してください。 Explorer から単語 `variables` を省略します。

```graphql
{
   "number_of_repos": 3
}
```

## サポートのリクエスト

{% data reusables.support.help_resources %}

## エラーのトラブルシューティング

GraphQL は[内省的](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)であるため、Explorer では次のことがサポートされています。

* インテリジェントに現在のスキーマを先行して認識
* 入力中の検証エラープレビュー

整形式ではない、または[スキーマ検証](/graphql/guides/introduction-to-graphql#schema)に合格しないクエリを入力すると、エラーの警告がポップアップで表示されます。 そのクエリを実行すると、レスポンスペインにエラーが返されます。

GraphQL 応答には、`data` ハッシュと `errors` 配列といういくつかのキーが含まれています。

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

スキーマに関係ない、予想外のエラーに行き当たることもあります。 そうなった場合には、メッセージには問題を報告する際に利用できる参照コードが含まれます。

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. This is most likely a GitHub bug. Please include \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" when reporting this issue."
    }
  ]
}
```

{% note %}

**注:** {% data variables.product.prodname_dotcom %} は、データを実働環境で使う前にエラーをチェックしておくことをお勧めします。 GraphQLでは、失敗は全体的なものではありません。GraphQLクエリの一部が成功し、その他の部分が失敗しているということもあります。

{% endnote %}
