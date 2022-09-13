---
title: GraphQLでの呼び出しの作成
intro: GraphQL APIの認証方法を学び、クエリとミューテーションの作成と実行方法を学んでください。
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Form calls with GraphQL
ms.openlocfilehash: b3778872cad120f64f2fdbc238f2319bdd758513
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147527895'
---
## GraphQLでの認証

GraphQLサーバーと通信するには、適切なスコープを持つOAuthトークンが必要です。

「[個人用アクセス トークンの作成](/github/authenticating-to-github/creating-a-personal-access-token)」のステップに従ってトークンを作成します。 必要なスコープは、リクエストしようとしているデータの種類によります。 たとえば、ユーザー データを要求する **ユーザー** スコープを選択します。 リポジトリ情報にアクセスする必要がある場合は、適切な **リポジトリ** スコープを選択してください。

{% ifversion fpt or ghec %}

[GraphQL Explorer](/graphql/guides/using-the-explorer) の動作を一致させるために、次のスコープを要求します。

{% else %}

以下のスコープをおすすめします。

{% endif %}


```
repo
read:packages
read:org
read:public_key
read:repo_hook
user
read:discussion
read:enterprise
read:gpg_key
```

リソースが特定のスコープを必要とするなら、APIは通知してくれます。

## GraphQLのエンドポイント

REST APIは多数のエンドポイントを持ちますが、GraphQL APIは単一のエンドポイントを持ちます。

<pre>{% data variables.product.graphql_url_pre %}</pre>

行う操作にかかわらず、エンドポイントは一定のままです。

## GraphQLでの通信

GraphQL の操作は複数行の JSON で構成されるため、GitHub は [Explorer](/graphql/guides/using-the-explorer) を使用して GraphQL 呼び出しを行うことをお勧めします。 cURLや、その他の任意のHTTPを使うライブラリも利用できます。

REST では、[HTTP 動詞](/rest#http-verbs)によって実行される操作が決まります。 GraphQL では、クエリまたはミューテーションを実行する場合でも、JSON でエンコードされた本文を提供するので、HTTP 動詞は `POST` となります。 例外は、エンドポイントに対する単純な `GET` である[イントロスペクション クエリ](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)です。 GraphQL と REST の詳細については、「[REST から GraphQL への移行](/graphql/guides/migrating-from-rest-to-graphql)」を参照してください。

cURL を使用して GraphQL にクエリを実行するには、JSON ペイロードを使用して `POST` 要求を行います。 ペイロードには、`query` という文字列が含まれている必要があります。

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**注**: `"query"` の文字列値は改行文字をエスケープする必要があります。さもないと、スキーマで正しく解析されません。 `POST` の本文には、外側の二重引用符とエスケープされた内側の二重引用符を使用します。

{% endtip %}

### クエリ及びミューテーション操作について

GitHubの GraphQL API で許可される操作の 2 種類は _、クエリ_ と _変更です_。 GraphQL と REST を比較すると、クエリは `GET` 要求と同様に動作しますが、ミューテーションは `POST`/`PATCH`/`DELETE` のように動作します。 [ミューテーション名](/graphql/reference/mutations)によって、実行される変更が決まります。

レート制限の詳細については、「[GraphQL リソース制限](/graphql/overview/resource-limitations)」を参照してください。

クエリとミューテーションは似た形式を持っていますが、重要な違いがあります。

### クエリについて

GraphQL クエリからは、指定したデータのみが返されます。 クエリを作成するには、[スカラー](/graphql/reference/scalars)だけを返すまで、[フィールド内フィールド](/graphql/guides/introduction-to-graphql#field)を指定する必要があります (_入れ子になったサブフィールド_ とも呼ばれます)。

クエリは次のように構成されます。

<pre>query {
  <em>JSON objects to return</em>
}</pre>

実際の例については、「[クエリの例](#example-query)」を参照してください。

### ミューテーションについて

ミューテーションを作成するには、3つのことを指定しなければなりません。

1. _ミューテーション名_。 実行したい変更の種類です。
2. _入力オブジェクト_。 サーバーに送信するデータ。_入力フィールド_ で構成されます。 これはミューテーション名に引数として渡してください。
3. _ペイロード オブジェクト_。 サーバーから返すデータ。_戻り値のフィールド_ で構成されます。 これは、ミューテーション名のボディとして渡してください。

ミューテーションは以下のような構造になります。

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
  }
}</pre>

この例の入力オブジェクトは `MutationNameInput`、ペイロード オブジェクトは `MutationNamePayload` です。

[ミューテーション](/graphql/reference/mutations)参照では、一覧表示された _入力フィールド_ が入力オブジェクトとして渡されます。 一覧表示されている _戻り値のフィールド_ は、ペイロード オブジェクトとして渡されます。

実際の例については、「[ミューテーションの例](#example-mutation)」を参照してください。

## 変数の使用

[変数](https://graphql.github.io/learn/queries/#variables)を使用すると、クエリをより動的かつ強力にすることができ、ミューテーションの入力オブジェクトを渡すときの複雑さを軽減できます。

{% note %}

**注**: Explorer を使用している場合は、別の [クエリ変数ペイン](/graphql/guides/using-the-explorer#using-the-variable-pane)に変数を入力し、JSON オブジェクトの前に単語 `variables` を含めないでください。

{% endnote %}

以下は、1つの変数を持つクエリの例です。

```graphql
query($number_of_repos:Int!) {
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

変数を利用するには3つのステップがあります。

1. `variables` オブジェクト内の操作の外部で変数を定義します。

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  オブジェクトは有効なJSONでなければなりません。 この例は単純な `Int` 変数型を示していますが、入力オブジェクトなど、より複雑な変数型を定義できます。 ここで複数の変数を定義することもできます。

2. 変数を操作に引数として渡します。

  ```graphql
  query($number_of_repos:Int!){
  ```

  引数はキーと値のペアで、キーは _名前_ (例: ) で `$` 始まり、 `$number_of_repos`値は _型_ (例: `Int`) です。 型が必要かどうかを示す `!` を追加します。 複数の変数を定義した場合は、それらをここで複数の引数として含めてください。

3. 変数を操作の中で利用してください。

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  この例では、変数を取得するリポジトリ数に置き換えています。 GraphQLは強い型付けを強制するので、ステップ2で型を指定しています。

このプロセスでクエリの引数は動的になります。 これで、`variables` オブジェクト内の値を変更し、クエリの残りの部分を同じに保つことができます。

変数を引数として使用すると、クエリを変更せずに `variables` オブジェクト内の値を動的に更新できます。

## クエリの例

もっと複雑なクエリを見ていき、これらの情報を流れの中で捉えていきましょう。

次のクエリでは、`octocat/Hello-World` リポジトリを検索し、最新の 20 個の解決された issue を検索し、各 issue のタイトル、URL、最初の 5 つのラベルを返します。

```graphql
query {
  repository(owner:"octocat", name:"Hello-World") {
    issues(last:20, states:CLOSED) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```

この構造を1行ずつ見ていきましょう。

* `query {`

  目的はサーバーからデータを読み取ることであり、変更することではありません。`query` はルート操作です。 (操作を指定しない場合は、`query` も既定値になります。)

* `repository(owner:"octocat", name:"Hello-World") {`

  クエリを開始するには、[`repository`](/graphql/reference/objects#repository) オブジェクトを検索します。 スキーマの検証により、このオブジェクトに `owner` と `name` の引数が必要であることがわかります。

* `issues(last:20, states:CLOSED) {`

  リポジトリ内のすべての issue について説明するために、`issues` オブジェクトを呼び出します。 (1  つのクエリを`issue`実行`repository`することもできますが、返す問題の数を把握し、引数として指定する必要があります)。

  `issues` オブジェクトに関するいくつかの詳細を次に示します。

  - この[ドキュメント](/graphql/reference/objects#repository)では、このオブジェクトに型 `IssueConnection` があることがわかります。
  - スキーマの検証では、このオブジェクトでは引数として結果の `last` の数または `first` の数が必要であることがわかるので、`20` を指定します。
  - この[ドキュメント](/graphql/reference/objects#repository)では、このオブジェクトが `states` 引数を受け入れることも示しています。これは `OPEN` または `CLOSED` の値を受け入れる [`IssueState`](/graphql/reference/enums#issuestate) 列挙型です。 解決された issue のみを見つけるには、`states` キーに `CLOSED` の値を指定します。

* `edges {`

  `IssueConnection` 型を持っているため、`issues` は接続であることがわかります。 個々の問題に関するデータを取得するには、`edges` を使用してノードにアクセスする必要があります。

* `node {`

  ここで、エッジの端にあるノードを取り出します。 [`IssueConnection`このドキュメント](/graphql/reference/objects#issueconnection)では、`IssueConnection` 型の末尾にあるノードが `Issue` オブジェクトであることが示されています。

* `Issue` オブジェクトを取得することがわかっているので、[ドキュメント](/graphql/reference/objects#issue)を確認し、返すフィールドを指定できます。

  ```graphql
  title
  url
  labels(first:5) {
    edges {
      node {
        name
      }
    }
  }
  ```

  ここで、`Issue` オブジェクトの `title`、`url`、`labels` フィールドを指定します。

  `labels` フィールドは型 [`LabelConnection`](/graphql/reference/objects#labelconnection) を持っています。 `issues` オブジェクトと同様に、`labels` は接続であるため、そのエッジを接続されたノード (`label` オブジェクト) に移動する必要があります。 ノードでは、返す `label` オブジェクト フィールドを指定できます。この場合は、`name` です。

Octocat の{% ifversion not ghae %}パブリック{% endif %} `Hello-World` リポジトリでこのクエリを実行しても、多くのラベルが返されないことに気付くかもしれません。 ラベルを使っている自分自身のリポジトリに対してこれを実行してみれば、違いがわかるでしょう。

## ミューテーションの例

ミューテーションでは、まずクエリを実行して見なければ分からない情報が必要になることがよくあります。 この例では2つの操作を示します。

1. IssueのIDを取得するクエリ。
2. 絵文字のリアクションをそのIssueに追加するミューテーション。

```graphql
query FindIssueID {
  repository(owner:"octocat", name:"Hello-World") {
    issue(number:349) {
      id
    }
  }
}

mutation AddReactionToIssue {
  addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
```

{% tip %}

クエリとミューテーションに名前 (この例では `FindIssueID` と `AddReactionToIssue`) を付ければ、同じ Explorer ウィンドウに含めることができますが、操作は GraphQL エンドポイントへの個別の呼び出しとして実行されます。 クエリをミューテーションと同時に、あるいはミューテーションとクエリを同時に実行することはできません。

{% endtip %}

例を見ていきましょう。 このタスクはシンプルに見えます。絵文字のリアクションをIssueに加えるだけです。

それでは、クエリから始めることはどのように知ることができるのでしょうか？ この時点ではまだわかりません。

サーバー上のデータを変更したい（絵文字をIssueに添付する）ので、まずは役に立つミューテーションを探してスキーマを検索することから始めます。 参照ドキュメントでは、[`addReaction`](/graphql/reference/mutations#addreaction) ミューテーションが、「`Adds a reaction to a subject.`」という説明とともに示されています。完璧です。

このミューテーションのドキュメントには、3つの入力フィールドがリストアップされています。

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

`!` は `subjectId` と `content` が必須フィールドであることを示します。 必須の `content` は意味があります。リアクションを追加するため、使用する絵文字を指定する必要があります。

しかし、なぜ `subjectId` が必要なのでしょうか。 これは`subjectId`、リポジトリがどの問題に対応 _するかを_ 特定する唯一の方法であるためです。

このため、この例では `ID` を取得するためのクエリから始めています。

クエリを1行ずつ調べていきましょう。

* `query FindIssueID {`

  ここではクエリを実行し、`FindIssueID` という名前を付けます。 クエリに名前を付けるのはオプションだということに注意してください。ここでは、ミューテーションと同じExplorerウィンドウに置けるように名前を付けています。

* `repository(owner:"octocat", name:"Hello-World") {`

  リポジトリを指定するには、`repository` オブジェクトに対してクエリを実行し、`owner` および `name` 引数を渡します。

* `issue(number:349) {`

  `issue` オブジェクトに対してクエリを実行し、`number` 引数を渡すことによって、対応する issue を指定します。

* `id`

  ここで、`subjectId` として渡す `https://github.com/octocat/Hello-World/issues/349` の `id` を取得します。

クエリを実行すると、`MDU6SXNzdWUyMzEzOTE1NTE=` という `id` が取得されます。

{% tip %}

**注**: クエリで返される `id` は、ミューテーションで `subjectID` として渡す値です。 ドキュメントも、スキーマのイントロスペクションでもこの関係は示されません。このことを理解するには、名前の背景となっている概念を理解しなければなりません。

{% endtip %}

IDが分かれば、ミューテーションで先に進むことができます。

* `mutation AddReactionToIssue {`

  ここではミューテーションを実行し、`AddReactionToIssue` という名前を付けます。 クエリと同じように、ミューテーションに名前を付けることはオプションです。ここではクエリと一緒に同じExplorerウィンドウに置けるように名前を付けています。

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  この行を調べましょう。

  - `addReaction` はミューテーションの名前です。
  - `input` は必要な引数キーです。 ミューテーションではこれは常に `input` になります。
  - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}` は必要な引数の値です。 これは常に、ミューテーションの入力フィールド (この場合は `subjectId` と `content`) で構成される [入力オブジェクト](/graphql/reference/input-objects) (したがって中かっこ) になります。

  どの値がcontentとして使われるのかは、どのように分かるのでしょうか？ [`addReaction` のドキュメント](/graphql/reference/mutations#addreaction)では、`content` フィールドの型は [`ReactionContent`](/graphql/reference/enums#reactioncontent) です。これは GitHub issue で特定の絵文字のリアクションのみがサポートされているため[列挙型](/graphql/reference/enums)になっています。 リアクションとして使える値は以下のとおりです（いくつかの値は対応する絵文字の名前とは異なっていることに注意してください）。

  {% data reusables.repositories.reaction_list %}

* 呼び出しの残りの部分は、ペイロードオブジェクトから構成されます。 ここでは、ミューテーションを行った後にサーバーから返してほしいデータを指定します。 これらの行は、[`addReaction` のドキュメント](/graphql/reference/mutations#addreaction)から取得したもので、次の 3 つの可能な戻り値フィールドがあります。

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  この例では、2 つの必須フィールド (`reaction` および`subject`) を返します。両方とも必須サブフィールド (それぞれ `content` および `id`) を持っています。

このミューテーションを実行すると、レスポンスは次のようになります。

```json
{
  "data": {
    "addReaction": {
      "reaction": {
        "content": "HOORAY"
      },
      "subject": {
        "id": "MDU6SXNzdWUyMTc5NTQ0OTc="
      }
    }
  }
}
```

これで完了です。 :tada: の上にカーソルを合わせてユーザー名を探し、[issue に対する反応](https://github.com/octocat/Hello-World/issues/349)をチェックアウトします。

最後に一つ注意です。インプットオブジェクト中で複数のフィールドを渡す場合、構文が扱いにくくなることがあります。 フィールドを[変数](#working-with-variables)に移動すると役立ちます。 以下では、オリジナルのミューテーションを変数を使って書き換えています。

```graphql
mutation($myVar:AddReactionInput!) {
  addReaction(input:$myVar) {
    reaction {
      content
    }
    subject {
      id
    }
  }
}
variables {
  "myVar": {
    "subjectId":"MDU6SXNzdWUyMTc5NTQ0OTc=",
    "content":"HOORAY"
  }
}
```

{% note %}

先ほどの例では、`content` のフィールド値 (これはミューテーション中で直接使用されます) には `HOORAY` の周りに引用符がありませんが、変数で使用される場合には引用符があることがわかります。 これには理由があります。
* ミューテーションで `content` を直接使用する場合、スキーマはその値が文字列ではなく _列挙型_ である [`ReactionContent`](/graphql/reference/enums#reactioncontent) 型であると想定します。 スキーマ検証は、列挙値の周りにクオートを加えるとエラーを投げます。これはクオートが文字列のために予約されているからです。
* `content` を変数で使用する場合、variables セクションは有効な JSON である必要があるため、引用符が必要です。 スキーマ検証では、実行中に変数がミューテーションに渡されるときに、`ReactionContent` 型が正しく解釈されます。

列挙型と文字列型の違いの詳細については、[公式の GraphQL 仕様](https://graphql.github.io/graphql-spec/June2018/#sec-Enums)に関するページを参照してください。

{% endnote %}

## 参考資料

GraphQL 呼び出しを形成する場合は、さらに _多くの_ ことができます。 以下は、次に見るべき場所です。

* [改ページ位置の自動修正](https://graphql.org/learn/pagination/)
* [フラグメント](https://graphql.org/learn/queries/#fragments)
* [インライン フラグメント](https://graphql.org/learn/queries/#inline-fragments)
* [ディレクティブ](https://graphql.org/learn/queries/#directives)
