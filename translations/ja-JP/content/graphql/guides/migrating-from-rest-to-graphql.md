---
title: RESTからGraphQLへの移行
intro: '{% data variables.product.prodname_dotcom %}のREST APIから{% data variables.product.prodname_dotcom %}のGraphQL APIへの移行に関するベストプラクティスと考慮点について学んでください。'
redirect_from:
  - /v4/guides/migrating-from-rest
  - /graphql/guides/migrating-from-rest
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### APIのロジックに関する差異

RESTからGraphQLへの移行は、APIロジックの大きな変化を示します。 スタイルとしてのRESTと仕様としてのGraphQLとの違いのために、REST APIの呼び出しをGraphQL APIのクエリに1対1で置き換えることは難しく、しばしば望ましくないことになります。 移行の具体的な例を以下に示しました。

コードを [REST API](/v3) から GraphQL API に移行するには、以下を行います。

- [GraphQL仕様](https://graphql.github.io/graphql-spec/June2018/)のレビュー
- GitHubの[GraphQLスキーマ](/v4/reference/)のレビュー
- 現在のコードによるGitHub REST APIとのやりとりの考慮
- [グローバルノードID](/v4/guides/using-global-node-ids)を使ったAPIバージョン間でのオブジェクトの参照

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

別の例を考えてみましょう。プルリクエストのリストを取得して、それぞれがマージ可能かをチェックします。 REST APIの呼び出しは、プルリクエストとその[サマリ表現](/v3/#summary-representations)のリストを取得します。
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls
```

プルリクエストがマージ可能かを判断するためには、個別にそれぞれのプルリクエストの[詳細な表現](/v3/#detailed-representations)（大きなペイロード）を取得し、その`mergeable`属性がtrueかfalse下をチェックしなければなりません。
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
```

GraphQLでは、それぞれのプルリクエストについて`number`と`mergeable`属性だけを取得できます。

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

入れ子になったフィールドにクエリを行うことで、複数のRESTの呼び出しを少数のGraphQLクエリに置き換えられます。 たとえば、プルリクエストをコミット、非レビューコメント、レビューを**REST API**を使って取得するには、4つの別々の呼び出しが必要になります。
```shell
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/commits
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/issues/:number/comments
curl -v {% data variables.product.api_url_pre %}/repos/:owner/:repo/pulls/:number/reviews
```

**GraphQL API**を使えば、入れ子のフィールドを利用して単一のクエリでこのデータを取得できます。

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

プルリクエストの番号で[変数を置き換える](/v4/guides/forming-calls/#working-with-variables)ことで、このクエリの力を拡張することもできます。

## 例：強力な型付け

GraphQLスキーマは強く型付けされており、データの扱いが安全になっています。

IssueもしくはプルリクエストにGraphQLの[ミューテーション](/v4/mutation)を使ってコメントを追加する例で、間違って[`clientMutationId`](/v4/mutation/addcomment/)の値に文字列ではなく整数値を指定してしまったとしましょう。

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

`1234`をクオートでラップすれば、この値を整数値から期待されている型である文字列に変換できます。

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
