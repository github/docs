---
title: 资源限制
intro: '{% data variables.product.prodname_dotcom %} GraphQL API 利用限制防止过度或胡乱调用 {% data variables.product.prodname_dotcom %} 的服务器。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146381422'
---
## 节点限制

若要通过[架构](/graphql/guides/introduction-to-graphql#schema)验证，所有 GraphQL API [调用](/graphql/guides/forming-calls-with-graphql)都必须满足以下标准：

* 客户端必须在任何[连接](/graphql/guides/introduction-to-graphql#connection)上提供 `first` 或 `last` 参数。
* `first` 和 `last` 的值必须在 1-100 以内。
* 单个调用请求的[节点](/graphql/guides/introduction-to-graphql#node)总数不能超过 500,000。

### 计算调用中的节点

下面两个示例显示如何计算调用中的节点总数。

1. 简单查询：

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

  计算：

  <pre><span class="redbox">50</span>         = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">10</span>  = 500 repository issues

              = 550 total nodes</pre>

2. 复杂查询：

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

  计算：

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

## 速率限制

GraphQL API 限制不同于 REST API 的[速率限制](/rest/overview/resources-in-the-rest-api#rate-limiting)。

API 速率限制为什么不同？ 使用 [GraphQL](/graphql)，一个 GraphQL 调用可以替换 [多个 REST 调用](/graphql/guides/migrating-from-rest-to-graphql)。 单个复杂 GraphQL 调用可能相当于数千个 REST 请求。 虽然单个 GraphQL 调用远远低于 REST API v3 速率限制，但对 GitHub 的服务器来说，查询的计算成本可能同样高昂。

为了准确表示查询的服务器成本，GraphQL API 将根据标准化点数来计算调用的速率限制分数。 查询分数计入了父连接及其子连接上的第一个和最后一个参数。

* 公式使用父连接及其子连接上的 `first` 和 `last` 参数预计算 GitHub 系统上的潜在负载，如 MySQL、ElasticSearch 和 Git。
* 每个连接都有自己的点值。 此点值与调用的其他点数相结合，计入总速率限制分数。

GraphQL API 速率限制为每小时 5,000 点。 

请注意，每小时 5,000 点与每小时 5,000 个调用不同：GraphQL API 和 REST API 使用的速率限制不同。

{% note %}

注意：在我们观察开发者如何使用 GraphQL API 时，当前公式和速率限制可能会发生更改。

{% endnote %}

### 返回调用的速率限制状态

使用 REST API，你可以通过[检查](/rest/overview/resources-in-the-rest-api#rate-limiting)返回的 HTTP 标头来检查速率限制状态。

使用 GraphQL API，你可以通过查询 `rateLimit` 对象上的字段来检查速率限制状态：

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

* `limit` 字段返回客户端在 60 分钟窗口期限内允许使用的最大客户端点数。

* `cost` 字段返回计入速率限制的当前调用的点成本。

* `remaining` 字段返回当前速率限制窗口中剩余的点数。）

* `resetAt` 字段返回当前速率限制窗口重置的时间，单位为 [UTC 纪元秒](http://en.wikipedia.org/wiki/Unix_time)。

### 在运行调用之前计算速率限制分数

查询 `rateLimit` 对象时会返回调用的分数，但运行调用时会计入限制。 为避免这种两难局面，可以在运行之前计算调用分数。 下面的计算结果与 `rateLimit { cost }` 返回的成本大致相同。

1. 将完成调用中每个独有连接所需的请求数加起来。 假设每个请求都将达到 `first` 或 `last` 参数限制。
2. 将数字除以 100，然后将结果四舍五入，获取最终的聚合成本。 这一步可使大数字规范化。

{% note %}

注意：调用 GraphQL API 的最低成本为 1，表示单一请求。

{% endnote %}

下面是一个查询和分数计算示例：

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

此查询需要 5,101 个请求才能完成：

* 虽然我们要返回 100 个存储库，但 API 必须连接到查看器的帐户一次才能获取存储库列表。 因此，存储库的请求 = 1
* 虽然我们要返回 50 个问题，但 API 必须与 100 个存储库的每个库相连接，才能获取问题列表。 因此，问题请求 = 100
* 虽然我们要返回 60 个标签，但 API 必须与 5,000 个潜在总问题中的每个问题相连接，才能获取标签列表。 因此，标签请求 = 5,000
* 总计 = 5,101

除以100，然后四舍五入就得到了查询的最终分数：51
