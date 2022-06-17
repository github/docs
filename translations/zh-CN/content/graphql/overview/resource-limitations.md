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
---

## 节点限制

To pass [schema](/graphql/guides/introduction-to-graphql#schema) validation, all GraphQL API [calls](/graphql/guides/forming-calls-with-graphql) must meet these standards:

* 客户端必须提供任何[连接](/graphql/guides/introduction-to-graphql#connection)上的 `first` 或 `last` 参数。
* `first` 和 `last` 的值必须在 1 至 100 之间。
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

The GraphQL API limit is different from the REST API's [rate limits](/rest/overview/resources-in-the-rest-api#rate-limiting).

API 速率限制为什么不同？ 使用 [GraphQL](/graphql)，一个 GraphQL 调用可替换[多个 REST 调用](/graphql/guides/migrating-from-rest-to-graphql)。 单个复杂 GraphQL 调用可能相当于数千个 REST 请求。 虽然单个 GraphQL 调用远远低于 REST API v3 速率限制，但对 GitHub 的服务器来说，查询的计算成本可能同样高昂。

To accurately represent the server cost of a query, the GraphQL API calculates a call's **rate limit score** based on a normalized scale of points. 查询分数计入了父连接及其子连接上的第一个和最后一个参数。

* 计算公式利用父连接及其子连接上的 `first` 和 `last` 参数预计算 GitHub 系统上的潜在负载，如 MySQL、ElasticSearch 和 Git。
* 每个连接都有自己的点值。 此点值与调用的其他点数相结合，计入总速率限制分数。

The GraphQL API rate limit is **5,000 points per hour**.

Note that 5,000 points per hour is not the same as 5,000 calls per hour: the GraphQL API and REST API use different rate limits.

{% note %}

**Note**: The current formula and rate limit are subject to change as we observe how developers use the GraphQL API.

{% endnote %}

### 返回调用的速率限制状态

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

* `limit` 字段可返回客户端在 60 分钟期限内允许使用的最大客户端点数。

* `cost` 字段可返回根据速率限制计算的当前调用的点成本。

* `remaining` 字段可返回当前速率限制期限内剩余的点数。）

* `resetAt` 字段可返回当前速率限制期限内重置的时间（[UTC 时期秒数](http://en.wikipedia.org/wiki/Unix_time)）。

### 在运行调用之前计算速率限制分数

查询 `rateLimit` 对象会返回调用分数，但运行调用需要根据限制进行计算。 为避免这种两难局面，可以在运行之前计算调用分数。 下面的计算方法算出的结果与 `rateLimit { cost }` 返回的成本大致相同。

1. 将完成调用中每个独有连接所需的请求数加起来。 假设每个请求都将达到 `first` 或 `last` 参数限制。
2. 用这个数除以 **100**，将结果四舍五入，得到最终总成本。 这一步可使大数字规范化。

{% note %}

**Note**: The minimum cost of a call to the GraphQL API is **1**, representing a single request.

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

* 尽管我们要返回 100 个仓库，但 API 必须**一次**连接至查看者的账户，以获取仓库列表。 因此，仓库请求数 = **1**
* 尽管我们要返回 50 个议题，但 API 必须分别连接至 **100** 个仓库，以获取议题列表。 因此，议题请求数 = **100**
* 尽管我们要返回 60 个标签，但 API 必须分别连接至 **5,000** 个潜在总议题，以获取标签列表。 因此，标签请求数 = **5,000**
* 总数 = **5,101**

除以 100 然后四舍五入，得出最终查询分数：**51**
