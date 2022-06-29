---
title: リソース制限
intro: '{% data variables.product.prodname_dotcom %}のGraphQL APIは、{% data variables.product.prodname_dotcom %}のサービスに対する過剰な呼び出し、あるいは悪用の呼び出しに対する保護としてかけられている制限があります。'
redirect_from:
  - /v4/guides/resource-limitations
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## ノードの制限

[スキーマ](/graphql/guides/introduction-to-graphql#schema)検証をパスするためには、すべてのGraphQL APIの[呼び出し](/graphql/guides/forming-calls-with-graphql)が以下の標準を満す必要があります。

* クライアントはすべての[コネクション](/graphql/guides/introduction-to-graphql#connection)で引数として`first`もしくは`last`を渡さなければなりません。
* `first`及び`last`の値は1から100の間でなければなりません。
* 個々の呼び出しは合計500,000以上の[ノード](/graphql/guides/introduction-to-graphql#node)をリクエストできません。

### 呼び出し中のノードの計算

以下の2つの例は、呼び出し中の合計ノード数を計算する方法を示しています。

1. 単純なクエリ：

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            issues(first: <span class="greenbox">10</span>) {
              totalCount
              edges {
                node {
                  title
                  bodyHTML
                }
              }
            }
          }
        }
      }
    }
  }</pre>

  計算：

  <pre><span class="redbox">50</span>         = 50 リポジトリ
   +
  <span class="redbox">50</span> x <span class="greenbox">10</span>  = 500 リポジトリのIssue

              = 550 総ノード</pre>

2. 複雑なクエリ：

  <pre>query {
    viewer {
      repositories(first: <span class="redbox">50</span>) {
        edges {
          repository:node {
            name

            pullRequests(first: <span class="greenbox">20</span>) {
              edges {
                pullRequest:node {
                  title

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }

            issues(first: <span class="greenbox">20</span>) {
              totalCount
              edges {
                issue:node {
                  title
                  bodyHTML

                  comments(first: <span class="bluebox">10</span>) {
                    edges {
                      comment:node {
                        bodyHTML
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      followers(first: <span class="bluebox">10</span>) {
        edges {
          follower:node {
            login
          }
        }
      }
    }
  }</code></pre>

  計算：

  <pre><span class="redbox">50</span>              = 50 リポジトリ
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 プルリクエスト
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 プルリクエストのコメント
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 Issue
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 Issueのコメント
   +
  <span class="bluebox">10</span>              = 10 フォロワー

                   = 22,060 総ノード</pre>

## レート制限

GraphQL APIの制限は、REST APIの[レート制限](/rest/overview/resources-in-the-rest-api#rate-limiting)とは異なります。

APIのレート制限が異なっているのはなぜでしょうか？ [GraphQL](/graphql)では、一つのGraphQLの呼び出しで[複数のRESTの呼び出し](/graphql/guides/migrating-from-rest-to-graphql)を置き換えることができます。 単一の複雑なGraphQLの呼び出しが、数千のRESTリクエストと等価なこともあります。 単一の GraphQL 呼び出しは REST API レート制限を大幅に下回りますが、クエリはGitHub のサーバーが演算するのと同等の負荷になる可能性があります。

To accurately represent the server cost of a query, the GraphQL API calculates a call's **rate limit score** based on a normalized scale of points. クエリのスコアは、親のコネクションやその子のfirst及びlast引数を計算に入れます。

* この式は、MySQLやElasticSearch、GitといったGitHubのシステムの潜在的な負荷を事前計算するために、親のコネクション及びその子の`first`及び`last`引数を使います。
* 新しいコネクションはそれぞれ独自のポイント値を持ちます。 ポイントは呼び出しからの他のポイントと組み合わされて、全体としてのレート制限スコアになります。

The GraphQL API rate limit is **5,000 points per hour**.

Note that 5,000 points per hour is not the same as 5,000 calls per hour: the GraphQL API and REST API use different rate limits.

{% note %}

**Note**: The current formula and rate limit are subject to change as we observe how developers use the GraphQL API.

{% endnote %}

### 呼び出しのレート制限のステータスを返す

With the REST API, you can check the rate limit status by [inspecting](/rest/overview/resources-in-the-rest-api#rate-limiting) the returned HTTP headers.

With the GraphQL API, you can check the rate limit status by querying fields on the `rateLimit` object:

```graphql
query {
  viewer {
    login
  }
  rateLimit {
    limit
    cost
    remaining
    resetAt
  }
}
```

* `limit`フィールドは、60分のウィンドウ内でクライアントが消費できる最大のポイント数を返します。

* `cost`フィールドは、レート制限に対してカウントされる、現在の呼び出しのポイントコストを返します。

* `remaining`フィールドは、現在のレート制限ウィンドウ内に残っているポイント数を返します。

* `resetAt`は、現在のレート制限ウィンドウがリセットされる時間を[UTCエポック秒](http://en.wikipedia.org/wiki/Unix_time)で返します。

### 呼び出しの実行前にレート制限スコアを計算する

`rateLimit`オブジェクトに対してクエリを実行すれば、呼び出しのスコアが返されますが、その呼び出しを実行すると制限に対してカウントされます。 このジレンマを避けるために、呼び出しのスコアを実行前に計算することができます。 以下の計算は、`rateLimit { cost }`が返すのとおおよそ同じコストを求めます。

1. 呼び出し中のそれぞれのユニークなコネクションを満たすために必要なリクエスト数を加算していきます。 すべてのリクエストが`first`もしくは`last`引数の制限に達すると仮定します。
2. その数字を**100**で割り、その結果を丸めて最終的な総計コストを得ます。 このステップは、大きな数値を正規化します。

{% note %}

**Note**: The minimum cost of a call to the GraphQL API is **1**, representing a single request.

{% endnote %}

以下は、クエリとスコアの計算の例です。

```graphql
query {
  viewer {
    login
    repositories(first: 100) {
      edges {
        node {
          id

          issues(first: 50) {
            edges {
              node {
                id

                labels(first: 60) {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

このクエリを完了するには、5,101リクエストが必要です。

* 返しているのは100個のリポジトリですが、APIがリポジトリのリストを取得するために閲覧者のアカウントに接続しなければならないのは**一度**だけです。 そのため、リポジトリのためのリクエスト = **1**
* 返しているのは50個のIssueですが、APIはIssueのリストを取得するために**100個**のリポジトリそれぞれに接続しなければなりません。 そのため、Issueのためのリクエスト = **100**
* 返しているのは60個のラベルですが、APIはラベルのリストを取得するために潜在的に合計**5,000**個のIssueのそれぞれに接続しなければなりません。 そのため、ラベルのためのリクエスト = **5,000**
* 合計 = **5,101**

100で割って丸めると、最終的なクエリのスコアは**51**になります。
