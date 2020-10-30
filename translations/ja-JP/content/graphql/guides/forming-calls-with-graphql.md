---
title: GraphQLでの呼び出しの作成
intro: GraphQL APIの認証方法を学び、クエリとミューテーションの作成と実行方法を学んでください。
redirect_from:
  - /v4/guides/forming-calls
  - /graphql/guides/forming-calls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### GraphQLでの認証

GraphQLサーバーと通信するには、適切なスコープを持つOAuthトークンが必要です。

トークンを作成するには、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」のステップに従ってください。 必要なスコープは、リクエストしようとしているデータの種類によります。 たとえば、ユーザデータをリクエストするには**User**スコープを選択してください。 リポジトリ情報にアクセスする必要があるなら、適切な**Repository**スコープを選択してください。

{% if currentVersion == "free-pro-team@latest" %}

[GraphQL Explorer](/v4/guides/using-the-explorer)の動作とマッチさせるためには、以下のスコープをリクエストしてください。

{% else %}

以下のスコープをおすすめします。

{% endif %}

```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

リソースが特定のスコープを必要とするなら、APIは通知してくれます。

### GraphQLのエンドポイント

REST APIは多数のエンドポイントを持ちますが、GraphQL APIは単一のエンドポイントを持ちます。

<pre>{% data variables.product.graphql_url_pre %}</pre>

行う操作にかかわらず、エンドポイントは一定のままです。

### GraphQLでの通信

GraphQLの操作は複数行のJSONからなるので、GitHubはGraphQLの呼び出しを行うのに[Explorer](/v4/guides/using-the-explorer)を使うことをおすすめします。 cURLや、その他の任意のHTTPを使うライブラリも利用できます。

RESTでは、[HTTPの動詞](/v3/#http-verbs)によって行う操作が決まります。 GraphQLでは、クエリを実行しているのかミューテーションを実行しているかにかかわらず、JSONエンコードされたボディを提供するので、HTTPの動詞は`POST`です。 例外は[イントロスペクションクエリ](/v4/guides/intro-to-graphql#discovering-the-graphql-api)で、これはエンドポイントへのシンプルな`GET`です。 GraphQLとRESTの比較に関する詳しい情報については「[RESTからGraphQLへの移行](/v4/guides/migrating-from-rest)」を参照してください。

cURLを使ってGraphQLのクエリを行うには、JSONのペイロードを持つ`POST`リクエストを作成してください。 このペイロードには、`query`という文字列が含まれていなければなりません。

```shell
curl -H "Authorization: bearer <em>token</em>" -X POST -d " \
 { \
   \"query\": \"query { viewer { login }}\" \
 } \
" {% data variables.product.graphql_url_code %}
```

{% tip %}

**ノート**: `"query"`の文字列値は、改行文字をエスケープしていなければならず、そうなっていなかった場合にはスキーマが正しくパースできません。 `POST`のボディについては、外側をダブルクオートで囲み、内部のダブルクオートはエスケープしてください。

{% endtip %}

#### クエリ及びミューテーション操作について

GitHubのGraphQL APIで許されている操作は、_クエリ_と_ミューテーション_の2種類です。 GraphQLをRESTと比較すると、クエリは`GET`リクエストのような操作で、ミューテーションは`POST`/`PATCH`/`DELETE`のような操作です。 [ミューテーション名](/v4/mutation/)が、どの変更が実行されるのかを決定します。

レート制限に関する情報については「[GraphQLのリソース制限](/v4/guides/resource-limitations/)」を参照してください。

クエリとミューテーションは似た形式を持っていますが、重要な違いがあります。

#### クエリについて

GraphQLのクエリは、指定したデータのみを返します。 クエリを作成する2は、[フィールド内のフィールド](/v4/guides/intro-to-graphql#field)（_入れ子になったサブフィールド_とも呼ばれます）を、[スカラー](/v4/scalar/)だけを返すまで指定します。

クエリは以下のような構造になります。

<pre>query {
  <em>JSON objects to return</em>
}</pre>

実際の例については「[クエリの例](#example-query)」を参照してください。

#### ミューテーションについて

ミューテーションを作成するには、3つのことを指定しなければなりません。

1. _ミューテーション名_。 実行したい変更の種類です。
2. _入力オブジェクト_。 サーバーに送信したいデータで、_入力フィールド_から構成されます。 これはミューテーション名に引数として渡してください。
3. _ペイロードオブジェクト_。 サーバーから返して欲しいデータで、_返値フィールド_から構成されます。 これは、ミューテーション名のボディとして渡してください。

ミューテーションは以下のような構造になります。

<pre>mutation {
  <em>mutationName</em>(input: {<em>MutationNameInput!</em>}) {
    <em>MutationNamePayload</em>
}</pre>

この例の入力オブジェクトは`MuitationNameInput`であり、ペイロードオブジェクトは `MuitationNamePayload` です。

[ミューテーション](/v4/mutation/)の参照では、リストされた_入力フィールド_は、入力オブジェクトとして渡すものです。 リストされている_返値フィールド_は、ペイロードオブジェクトとして渡すものです。

実際の例については「[ミューテーションの例](#example-mutation)」を参照してください。

### 変数の扱い

[変数](https://graphql.github.io/learn/queries/#variables)はクエリをより動的かつ強力にするもので、ミューテーションの入力オブジェクトを渡す際の複雑さを引き下げてくれます。

{% note %}

**ノート**: Explorerを使っている場合は、変数を個別の[クエリ変数ペイン](/v4/guides/using-the-explorer/#using-the-variable-pane)に入力するようにして、JSONオブジェクトの前に`variables`という語を含めないようにしてください。

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

1. 操作の外部で`variables`オブジェクト中に変数を定義します。

  ```graphql
  variables {
     "number_of_repos": 3
  }
  ```

  オブジェクトは有効なJSONでなければなりません。 この例はシンプルな`Int`変数型を示していますが、入力オブジェクトのようなもっと複雑な変数型を定義することもできます。 ここで複数の変数を定義することもできます。

2. 変数を操作に引数として渡します。

  ```graphql
  query($number_of_repos:Int!){
  ```

  この引数はキー/値ペアで、キーは`$`で始まる_名前_（たとえば`$number_of_repos`）であり、値は_型_（たとえば`Int`）です。 型が必須であることを示すには`!`を加えてください。 複数の変数を定義した場合は、それらをここで複数の引数として含めてください。

3. 変数を操作の中で利用してください。

  ```graphql
  repositories(last: $number_of_repos) {
  ```

  この例では、変数を取得するリポジトリ数に置き換えています。 GraphQLは強い型付けを強制するので、ステップ2で型を指定しています。

このプロセスでクエリの引数は動的になります。 これで、単純に`variables`オブジェクトの値を変更して、それ以外のクエリを同じままに保てるようになります。

変数を引数として使うことで、クエリを変更することなく`variables` オブジェクト内の値を動的に更新できるようになります。

### クエリの例

もっと複雑なクエリを見ていき、これらの情報を流れの中で捉えていきましょう。

以下のクエリは`octocat/Hello-World`リポジトリをルックアップし、最も最近にクローズされた20個のIssueを見つけ、それぞれのIssueのタイトル、URL、最初の5つのラベルを返します。

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

  データを変更するのではなく、サーバーからデータを読み取りたいので、`query`がルート操作になります。 （操作を指定しなかった場合、`query`はデフォルトでもあります）

* `repository(owner:"octocat", name:"Hello-World") {`

  クエリを始めるにあたって、見つけたいのは[`repository`](/v4/object/repository/)オブジェクトです。 スキーマの検証によって、このオブジェクトが引数として`owner` と`name`を必要とすることが示されます。

* `issues(last:20, states:CLOSED) {`

  リポジトリ中のすべてのIssueを扱うために、`issues`オブジェクトを呼びます。 （`repository`上の単一の`issue`に対するクエリを実行することも_可能_ですが、そのためには返して欲しいIssueの数を知り、それを引数として提供しなければなりません）

  以下は`issues`オブジェクトに関する詳細です。

  - [docs](/v4/object/repository/)は、このオブジェクトが`IssueConnection`という型を持つことを示します。
  - スキーマ検証によって、このオブジェクトが引数として`last`もしくは`first`の結果数を必要とすることが示されるので、`20`を渡します。
  - [docs](/v4/object/repository/)は、このオブジェクトが引数として`states`も取ることを示します。これはenumの[`IssueState`](/v4/enum/issuestate/)で、値として`OPEN`か`CLOSED`を取ります。 クローズされたIssueだけを見つけるために、`states`キーに`CLOSED`という値を渡します。

* `edges {`

  `IssueConnection`という型を持っているので、`issues`はコネクションだということが分かっています。 個々のIssueに関するデータを取り出すためには、`edges`を通じてノードにアクセスしなければなりません。

* `node {`

  ここで、エッジの端にあるノードを取り出します。 [`IssueConnection` docs](/v4/object/issueconnection)は、`IssueConnection`型の端にあるノードが`Issue`オブジェクトであることを示しています。

* `Issue`オブジェクトを取り出そうとしていることが分かっているので、[docs](/v4/object/issue)を見て返してほしいフィールドを指定できます。

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

  ここでは、`Issue`オブジェクトの`title`、`url`、`labels`フィールドを指定しています。

  `labels`フィールドは[`LabelConnection`](/v4/object/labelconnection/)という型を持っています。 `issues`オブジェクトと同じように、`labels`はコネクションなので、そのエッジを経て接続されたノードである`label`オブジェクトに到達しなければなりません。 このノードでは、返してほしい`label`オブジェクトフィールドを指定できます。ここでは`name`です。

Octocatのパブリックな`Hello-World`リポジトリに対してこのクエリを実行しても、多くのラベルは返されないことに気づくかもしれません。 ラベルを使っている自分自身のリポジトリに対してこれを実行してみれば、違いがわかるでしょう。

### ミューテーションの例

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

名前を付ければ（この例では`FindIssueID`と`AddReactionToIssue`）、同じExplorerのウィンドウ内にクエリとミューテーションを置くことができますが、それらの操作はGraphQLのエンドポイントへの個別の呼び出しとして実行されます。 クエリをミューテーションと同時に、あるいはミューテーションとクエリを同時に実行することはできません。

{% endtip %}

例を見ていきましょう。 このタスクはシンプルに見えます。絵文字のリアクションをIssueに加えるだけです。

それでは、クエリから始めることはどのように知ることができるのでしょうか？ この時点ではまだわかりません。

サーバー上のデータを変更したい（絵文字をIssueに添付する）ので、まずは役に立つミューテーションを探してスキーマを検索することから始めます。 リファレンスのドキュメントは、 [`addReaction`](/v4/mutation/addreaction)ミューテーションに`Adds a reaction to a subject.`という説明を付けています。完璧です！

このミューテーションのドキュメントには、3つの入力フィールドがリストアップされています。

* `clientMutationId` (`String`)
* `subjectId` (`ID!`)
* `content` (`ReactionContent!`)

`!`は、`subjectId`及び`content`が必須のフィールドであることを示しています。 `content`が必須なのは妥当です。リアクションを追加したいので、使う絵文字を指定しなければなりません。

しかしなぜ`subjectId`が必須なのでしょうか？ これは、_どの_リポジトリ内の_どの_Issueに対応するのかを識別する唯一の方法が`subjectId`だからです。

これが、`ID`を取得するためのクエリでこの例を始めなければならない理由です。

クエリを1行ずつ調べていきましょう。

* `query FindIssueID {`

  ここではクエリを実行します。その名前を`FindIssueID`とします。 クエリに名前を付けるのはオプションだということに注意してください。ここでは、ミューテーションと同じExplorerウィンドウに置けるように名前を付けています。

* `repository(owner:"octocat", name:"Hello-World") {`

  `repository`オブジェクトに引数として`owner`と`name`を渡すことでクエリを実行し、リポジトリを特定しています。

* `issue(number:349) {`

  `issue`オブジェクトに`number`を引数として渡してクエリを行うことによって、対応するIssueを特定します。

* `id`

  ここで、`subjectId`として渡す`https://github.com/octocat/Hello-World/issues/349`の`id`を取り出します。

このクエリを実行すると、`id`: `MDU6SXNzdWUyMzEzOTE1NTE=`が得られます。

{% tip %}

**ノート**: このクエリが返す`id`は、ミューテーション中で`subjectID`として渡す値です。 ドキュメントも、スキーマのイントロスペクションでもこの関係は示されません。このことを理解するには、名前の背景となっている概念を理解しなければなりません。

{% endtip %}

IDが分かれば、ミューテーションで先に進むことができます。

* `mutation AddReactionToIssue {`

  ここでミューテーションを実行します。`AddReactionToIssue`という名前を付けます。 クエリと同じように、ミューテーションに名前を付けることはオプションです。ここではクエリと一緒に同じExplorerウィンドウに置けるように名前を付けています。

* `addReaction(input:{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}) {`

  この行を調べましょう。

    - `addReaction`はミューテーションの名前です。
    - `input`は必須の引数のキーです。 ミューテーションではこれは常に`input`になります。
    - `{subjectId:"MDU6SXNzdWUyMzEzOTE1NTE=",content:HOORAY}`は必須の引数の値です。 ミューテーションでは、これは常に入力フィールド（このケースでは`subjectId`と`content`）から構成される[入力オブジェクト](/v4/input_object/)（そのため波括弧です）になります。

  どの値がcontentとして使われるのかは、どのように分かるのでしょうか？ [`addReaction`のドキュメント](/v4/mutation/addreaction/)は、`content`フィールドが[`ReactionContent`](/v4/enum/reactioncontent/)という型を持っていることを教えてくれます。GitHubのIssueでは特定の絵文字リアクションだけがサポートされているので、これは[enum](/v4/enum)です。 リアクションとして使える値は以下のとおりです（いくつかの値は対応する絵文字の名前とは異なっていることに注意してください）。

  {% data reusables.repositories.reaction_list %}

* 呼び出しの残りの部分は、ペイロードオブジェクトから構成されます。 ここでは、ミューテーションを行った後にサーバーから返してほしいデータを指定します。 これらの行は、[`addReaction`のドキュメント](/v4/mutation/addreaction)から来ています。指定できる返値フィールドは3つあります。

    - `clientMutationId` (`String`)
    - `reaction` (`Reaction!`)
    - `subject` (`Reactable!`)

  この例では、2つの必須フィールド（`reaction`及び`subject`）を返します。これらはどちらも必須のサブフィールドを持っています（それぞれ`content`と`id`）。

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

これで完了です。 :tada:の上にホバーして自分のユーザ名を見つけ、[Issueへのリアクション](https://github.com/octocat/Hello-World/issues/349)を確認してください。

最後に一つ注意です。インプットオブジェクト中で複数のフィールドを渡す場合、構文が扱いにくくなることがあります。 フィールドを[変数](#working-with-variables)に移すと役立つかもしれません。 以下では、オリジナルのミューテーションを変数を使って書き換えています。

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

先ほどの例では、`content`のフィールド値（これはミューテーション中で直接使われています）で、`HOORAY`の周りにクオートがありませんが、変数で使われる場合にはクオートがあることに気づいたかもしれません。 これには理由があります。
* ミューテーション中で`content`を直接使う場合には、スキーマはその値が[`ReactionContent`](/v4/enum/reactioncontent/)型であることを期待しています。これは文字列ではなく_列挙型_です。 スキーマ検証は、列挙値の周りにクオートを加えるとエラーを投げます。これはクオートが文字列のために予約されているからです。
* `content`を変数中で使う場合、変数のセクションは適切なJSONでなければならないので、クオートが必要になります。 スキーマ検証は、変数が実行時にミューテーションに渡されるとき、`ReactionContent`型を正しく解釈します。

列挙型と文字列の違いに関する詳しい情報については、[公式のGraphQL仕様](https://graphql.github.io/graphql-spec/June2018/#sec-Enums)を参照してください。

{% endnote %}

### 参考リンク

GraphQLの呼び出しを作成する際にできることは、_もっと_たくさんあります。 以下は、次に見るべき場所です。

* [ページネーション](https://graphql.github.io/learn/pagination/)
* [フラグメント](https://graphql.github.io/learn/queries/#fragments)
* [インラインフラグメント](https://graphql.github.io/learn/queries/#inline-fragments)
* [ディレクティブ](https://graphql.github.io/learn/queries/#directives)
