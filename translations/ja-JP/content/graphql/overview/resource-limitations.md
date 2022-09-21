---
title: リソースの制限事項
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
ms.openlocfilehash: 7a0f040b86435573171c4022a72f8d558ad06c29
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381425'
---
## ノードの制限

[スキーマ](/graphql/guides/introduction-to-graphql#schema)検証に合格するには、すべての GraphQL API [呼び出し](/graphql/guides/forming-calls-with-graphql)が次の標準を満たしている必要があります。

* クライアントでは、すべての[接続](/graphql/guides/introduction-to-graphql#connection)で `first` または `last` 引数を指定する必要があります。
* `first` と `last` の値は 1 から 100 である必要があります。
* 個々の呼び出しでは、合計 500,000 個を超える[ノード](/graphql/guides/introduction-to-graphql#node)を要求することはできません。

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

  計算:

  <pre><span class="redbox">50</span>         = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">10</span>  = 500 repository issues

              = 550 total nodes</pre>

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

  計算:

  <pre><span class="redbox">50</span>              = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 pullRequests
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 pullRequest comments
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span>       = 1,000 issues
   +
  <span class="redbox">50</span> x <span class="greenbox">20</span> x <span class="bluebox">10</span> = 10,000 issue comments
   +
  <span class="bluebox">10</span>              = 10 followers

                   = 22,060 total nodes</pre>

## レート制限

GraphQL API の制限は、REST API の[レート制限](/rest/overview/resources-in-the-rest-api#rate-limiting)とは異なります。

APIのレート制限が異なっているのはなぜでしょうか？ [GraphQL](/graphql) では、1 つの GraphQL 呼び出しで[複数の REST 呼び出し](/graphql/guides/migrating-from-rest-to-graphql)を置き換えることができます。 単一の複雑なGraphQLの呼び出しが、数千のRESTリクエストと等価なこともあります。 単一の GraphQL 呼び出しは REST API レート制限を大幅に下回りますが、クエリはGitHub のサーバーが演算するのと同等の負荷になる可能性があります。

サーバーでのクエリのコストを正確に表すために、GraphQL API では呼び出しの **レート制限スコア** を正規化されたポイントのスケールに基づいて計算します。 クエリのスコアは、親のコネクションやその子のfirst及びlast引数を計算に入れます。

* この式では、MySQL、ElasticSearch、Git などの GitHub のシステムの潜在的な負荷を事前計算するために、親のコネクションとその子の `first` および `last` 引数が使用されます。
* 新しいコネクションはそれぞれ独自のポイント値を持ちます。 ポイントは呼び出しからの他のポイントと組み合わされて、全体としてのレート制限スコアになります。

GraphQL API のレート制限は、**1 時間あたり 5,000 ポイント** です。 

1 時間あたり 5,000 ポイントは、1 時間あたり 5,000 回の呼び出しと同じではないことに注意してください。GraphQL API と REST API では異なるレート制限が使用されます。

{% note %}

**注**: 現在の式とレート制限は、開発者による GraphQL API の使用状況に鑑みて、変更される可能性があります。

{% endnote %}

### 呼び出しのレート制限のステータスを返す

REST API では、返された HTTP ヘッダーを[検査する](/rest/overview/resources-in-the-rest-api#rate-limiting)ことで、レート制限の状態を確認できます。

GraphQL API では、`rateLimit` オブジェクトのフィールドに対して問い合せることで、レート制限の状態を確認できます。

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

* `limit` フィールドには、60 分のウィンドウ内でクライアントで消費できる最大のポイント数が返されます。

* `cost` フィールドには、レート制限に対してカウントされる、現在の呼び出しのポイント コストが返されます。

* `remaining` フィールドには、現在のレート制限ウィンドウ内に残っているポイント数が返されます。

* `resetAt` フィールドには、現在のレート制限ウィンドウが [UTC エポック秒単位](http://en.wikipedia.org/wiki/Unix_time)でリセットされる時刻が返されます。

### 呼び出しの実行前にレート制限スコアを計算する

`rateLimit` オブジェクトに対して問い合せると呼び出しのスコアが返されますが、その呼び出しを実行すると制限に対してカウントされます。 このジレンマを避けるために、呼び出しのスコアを実行前に計算することができます。 次の計算では、`rateLimit { cost }` で返されるのとほぼ同じコストが計算されます。

1. 呼び出し中のそれぞれのユニークなコネクションを満たすために必要なリクエスト数を加算していきます。 すべての要求が `first` または `last` 引数の制限に達するとします。
2. その数字を **100** で除算し、結果を丸めて最終的な集計コストを取得します。 このステップは、大きな数値を正規化します。

{% note %}

**注**: GraphQL API に対する呼び出しの最小コストは **1** であり、これは 1 つの要求を表します。

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

* 100 個のリポジトリが返されますが、API でリポジトリのリストを取得するために表示者のアカウントに接続する必要があるのは **一度** だけです。 したがって、リポジトリの要求 = **1** です
* 50 個の Issue が返されますが、API では Issue のリストを取得するために **100** 個のリポジトリそれぞれに接続する必要があります。 したがって、Issue の要求 = **100** です
* 60 個のラベルが返されますが、API ではラベルのリストを取得するために潜在的に合計 **5,000** 個の Issue のそれぞれに接続する必要があります。 したがって、ラベルの要求 = **5,000** です
* 合計 = **5,101** です

100 で除算して丸めると、最終的なクエリのスコアは **51** になります。
