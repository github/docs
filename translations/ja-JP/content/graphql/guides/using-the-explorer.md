---
title: Explorerの利用
intro: 'ブラウザ内で動作する統合開発環境であるGraphQL Explorerを使って、本物の{% data variables.product.prodname_dotcom %}のデータに対してクエリを実行できます。GraphQL Explorerには、ドキュメント、シンタックスハイライト、検証エラーが含まれています。'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

## GraphQL Explorerについて

{% if currentVersion == "free-pro-team@latest" %}

[GraphQL Explorer](/v4/explorer)は、「グラフィカルでインタラクティブなブラウザ内のGraphQL IDE」である[ GraphiQL](https://github.com/graphql/graphiql)のインスタンスです。

{% note %}

**ノート**: {% data variables.product.prodname_dotcom %}はExplorer内での[ミューテーション](/v4/mutation/)を無効化していますが、独自のGraphiQLのインスタンスではミューテーションが利用できます。

{% endnote %}

{% else %}

[ GraphiQL](https://github.com/graphql/graphiql)はこのドキュメンテーション内ではGraphQL Explorerとも呼ばれており、「グラフィカルでインタラクティブなGraphQL IDE」です。

{% endif %}

### GraphiQLの利用

GraphiQLアプリケーションを使うには、https://github.com/skevy/graphiql-appからダウンロードしてインストールしてください。

#### GraphiQLの設定

1. [OAuthトークン](/v4/guides/forming-calls#authenticating-with-graphql)を取得してください。
1. GraphiQLを起動してください。
1. GraphiQLの右上で、**Edit HTTP Headers（HTTPヘッダの編集）**をクリックしてください。
1. **Key**フィールドに、`Authorization`と入力してください。 **Value**フィールドには`Bearer <token>`と入力してください。ここで、`<token>`は生成したOAuthトークンです。 ![graphiqlのヘッダー](/assets/images/developer/graphiql-headers.png)
1. トークンの右のチェックマークをクリックして保存してください。
1. エディタに戻るには、**Edit HTTP Headers（HTTPヘッダの編集）**モーダルの外をクリックしてください。
1. **GraphQL Endpoint**フィールドに、`{% data variables.product.graphql_url_pre %}`を入力してください。
1. **Method（メソッド）**ドロップダウンメニューで、**POST**を選択してください。

{% note %}

**ノート**: メソッドが`POST`である理由に関する詳しい情報については「[GraphQLでの通信](/v4/guides/forming-calls#communicating-with-graphql)」を参照してください。

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

### サイドバードキュメントへのアクセス

GraphQLスキーマ内のすべての型には、ドキュメントに編集される`description`フィールドが含まれています。 Explorerページの右にある折りたたみ可能な**Docs**ペインからは、型システムに関するドキュメントをブラウズできます。 このドキュメントは自動的に更新され、非推奨のフィールドは削除されます。

{% note %}

**Docs**サイドバーには、「[リファレンス](/v4/)」の下にあるスキーマから自動的に生成されるものと同じ内容が含まれていますが、所々形式が異なっています。

{% endnote %}

### 変数ペインの利用

サンプルの呼び出しの中には、以下のように書かれる[変数](/v4/guides/forming-calls#working-with-variables)を含むものがあります。

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

これは、cURLの`POST`で呼び出しをサブミットするための正しいフォーマットです（[改行をエスケープ](/v4/guides/forming-calls#communicating-with-graphql)するかぎりにおいて）。

この呼び出しをExplorerで実行したい場合は、メインペインに`query`セグメントを入力し、その下の**Query Variables（クエリ変数）**ペインに変数を入力してください。 Explorerからは`variable`という語は省略してください。

```graphql
{
   "number_of_repos": 3
}
```

### サポートのリクエスト

{% data reusables.support.help_resources %}

### エラーのトラブルシューティング

GraphQLは[イントロスペクション](/v4/guides/intro-to-graphql#discovering-the-graphql-api)可能なので、Explorerは以下をサポートしています。

* インテリジェントに現在のスキーマを先行して認識
* 入力中の検証エラープレビュー

正しい形式ではない、あるいは[スキーマ検証](/v4/guides/intro-to-graphql#schema)をパスしないクエリを入力すると、ポップアップがエラーを警告します。 そのクエリを実行すると、レスポンスペインにエラーが返されます。

GraphQLのレスポンスには、`data`ハッシュや`errors`配列といったいくつかのキーが含まれます。

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

**ノート:** {% data variables.product.prodname_dotcom %}は、データを実働環境で使う前にエラーをチェックしておくことをおすすめします。 GraphQLでは、失敗は全体的なものではありません。GraphQLクエリの一部が成功し、その他の部分が失敗しているということもあります。

{% endnote %}
