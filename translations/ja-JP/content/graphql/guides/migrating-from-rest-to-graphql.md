---
title: RESTからGraphQLへの移行
intro: '{% data variables.product.prodname_dotcom %}のREST APIから{% data variables.product.prodname_dotcom %}のGraphQL APIへの移行に関するベストプラクティスと考慮点について学んでください。'
redirect_from:
  - /v4/guides/migrating-from-rest
  - /graphql/guides/migrating-from-rest
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Migrate from REST to GraphQL
ms.openlocfilehash: dbafde83c8acac664b6a0f712927af82c646d397
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068452'
---
## APIのロジックに関する差異

RESTからGraphQLへの移行は、APIロジックの大きな変化を示します。 スタイルとしての REST と仕様としての GraphQL との違いのために、REST API の呼び出しを GraphQL API のクエリに 1 対 1 で置き換えることは難しく、&mdash;しばしば望まない&mdash;結果になります。 移行の具体的な例を以下に示しました。

コードを [REST API](/rest) から GraphQL API に移行するには、以下を行います。

- [GraphQL 仕様](https://graphql.github.io/graphql-spec/June2018/)を確認する
- GitHub の [GraphQL スキーマ](/graphql/reference)を確認する
- 現在のコードによるGitHub REST APIとのやりとりの考慮
- [グローバル ノード ID](/graphql/guides/using-global-node-ids) を使用して API バージョン間でオブジェクトを参照する

GraphQLによる重要な利点には以下があります。

- [必要とするデータだけを取得できる](#example-getting-the-data-you-need-and-nothing-more)
- [入れ子になったフィールド](#example-nesting)
- [強い型付け](#example-strong-typing)

以下にそれぞれの例を示します。

## 例：必要なデータだけを取得

1つのREST API呼び出しで、Organizationのメンバーのリストを取得します。
```shell
curl -v {% data variables.product.api_url_pre %}/orgs/:org/members
```

目的がメンバー名とアバターへのリンクの取得だけなのであれば、このRESTのペイロードには過剰なデータが含まれています。 しかし、GraphQLのクエリでは指定した内容だけが返されます。

```graphql
query {
    organization(login:"github") {
    membersWithRole(first: 100) {
      edges {
        node {
          name
          avatarUrl
        }
      }
    }
  }
}
```

別の例を考えてみましょう。プルリクエストのリストを取得して、それぞれがマージ可能かをチェックします。 REST API を呼び出すと、pull request とその [概要表現](/rest#summary-representations)の一覧が取得されます。
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

pull request がマージ可能かを判断するには、個別にそれぞれの pull request の[詳細な表現](/rest#detailed-representations) (大きなペイロード) を取得し、その `mergeable` 属性が true か false かをチェックする必要があります。
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

GraphQL では、各 pull request の `number` 属性と `mergeable` 属性のみを取得できます。

```graphql
query {
    repository(owner:"octocat", name:"Hello-World") {
    pullRequests(last: 10) {
      edges {
        node {
          number
          mergeable
        }
      }
    }
  }
}
```

## 例：入れ子

入れ子になったフィールドにクエリを行うことで、複数のRESTの呼び出しを少数のGraphQLクエリに置き換えられます。 たとえば、**REST API** を使って、コミット、非レビュー コメント、レビューと一緒に pull request を取得するには、4 つの別々の呼び出しが必要になります。
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

**GraphQL API** を使えば、入れ子のフィールドを利用して単一のクエリでこのデータを取得できます。

```graphql
{
  repository(owner: "octocat", name: "Hello-World") {
    pullRequest(number: 1) {
      commits(first: 10) {
        edges {
          node {
            commit {
              oid
              message
            }
          }
        }
      }
      comments(first: 10) {
        edges {
          node {
            body
            author {
              login
            }
          }
        }
      }
      reviews(first: 10) {
        edges {
          node {
            state
          }
        }
      }
    }
  }
}
```

pull request 番号の [変数を置き換えることで](/graphql/guides/forming-calls-with-graphql#working-with-variables)、このクエリの機能を拡張することもできます。

## 例：強力な型付け

GraphQLスキーマは強く型付けされており、データの扱いが安全になっています。

GraphQL [ミューテーション](/graphql/reference/mutations)を使用して問題または pull request にコメントを追加し、[`clientMutationId`](/graphql/reference/mutations#addcomment) の値に文字列ではなく整数を誤って指定する例を考えてみましょう。

```graphql
mutation {
  addComment(input:{clientMutationId: 1234, subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```

このクエリを実行すると、この操作に期待される型を指定したエラーが返されます。

```json
{
  "data": null,
  "errors": [
    {
      "message": "Argument 'input' on Field 'addComment' has an invalid value. Expected type 'AddCommentInput!'.",
      "locations": [
        {
          "line": 3,
          "column": 3
        }
      ]
    },
    {
      "message": "Argument 'clientMutationId' on InputObject 'AddCommentInput' has an invalid value. Expected type 'String'.",
      "locations": [
        {
          "line": 3,
          "column": 20
        }
      ]
    }
  ]
}
```

クオートで `1234` をラップすると、この値を整数値から期待されている型である文字列に変換できます。

```graphql
mutation {
  addComment(input:{clientMutationId: "1234", subjectId: "MDA6SXNzdWUyMjcyMDA2MTT=", body: "Looks good to me!"}) {
    clientMutationId
    commentEdge {
      node {
        body
        repository {
          id
          name
          nameWithOwner
        }
        issue {
          number
        }
      }
    }
  }
}
```
