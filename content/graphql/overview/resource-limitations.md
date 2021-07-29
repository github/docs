---
title: Resource limitations
intro: 'The {% data variables.product.prodname_dotcom %} GraphQL API has limitations in place to protect against excessive or abusive calls to {% data variables.product.prodname_dotcom %}''s servers.'
redirect_from:
  - /v4/guides/resource-limitations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
---

## Node limit

To pass [schema](/graphql/guides/introduction-to-graphql#schema) validation, all GraphQL API v4 [calls](/graphql/guides/forming-calls-with-graphql) must meet these standards:

* Clients must supply a `first` or `last` argument on any [connection](/graphql/guides/introduction-to-graphql#connection).
* Values of `first` and `last` must be within 1-100.
* Individual calls cannot request more than 500,000 total [nodes](/graphql/guides/introduction-to-graphql#node).

### Calculating nodes in a call

These two examples show how to calculate the total nodes in a call.

1. Simple query:

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

  Calculation:

  <pre><span class="redbox">50</span>         = 50 repositories
   +
  <span class="redbox">50</span> x <span class="greenbox">10</span>  = 500 repository issues

              = 550 total nodes</pre>

2. Complex query:

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

  Calculation:

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

## Rate limit

The GraphQL API v4 limit is different from the REST API v3's [rate limits](/rest/overview/resources-in-the-rest-api#rate-limiting).

Why are the API rate limits different? With [GraphQL](/graphql), one GraphQL call can replace [multiple REST calls](/graphql/guides/migrating-from-rest-to-graphql). A single complex GraphQL call could be the equivalent of thousands of REST requests. While a single GraphQL call would fall well below the REST API rate limit, the query might be just as expensive for GitHub's servers to compute.

To accurately represent the server cost of a query, the GraphQL API v4 calculates a call's **rate limit score** based on a normalized scale of points. A query's score factors in first and last arguments on a parent connection and its children.

* The formula uses the `first` and `last` arguments on a parent connection and its children to pre-calculate the potential load on GitHub's systems, such as MySQL, ElasticSearch, and Git.
* Each new connection has its own point value. Points are combined with other points from the call into an overall rate limit score.

The GraphQL API v4 rate limit is **5,000 points per hour**. 

Note that 5,000 points per hour is not the same as 5,000 calls per hour: the GraphQL API v4 and REST API v3 use different rate limits.

{% note %}

**Note**: The current formula and rate limit are subject to change as we observe how developers use the GraphQL API v4.

{% endnote %}

### Returning a call's rate limit status

With the REST API v3, you can check the rate limit status by [inspecting](/rest/overview/resources-in-the-rest-api#rate-limiting) the returned HTTP headers.

With the GraphQL API v4, you can check the rate limit status by querying fields on the `rateLimit` object:

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

* The `limit` field returns the maximum number of points the client is permitted to consume in a 60-minute window.

* The `cost` field returns the point cost for the current call that counts against the rate limit.

* The `remaining` field returns the number of points remaining in the current rate limit window.)

* The `resetAt` field returns the time at which the current rate limit window resets in [UTC epoch seconds](http://en.wikipedia.org/wiki/Unix_time).

### Calculating a rate limit score before running the call

Querying the `rateLimit` object returns a call's score, but running the call counts against the limit. To avoid this dilemma, you can calculate the score of a call before you run it. The following calculation works out to roughly the same cost that `rateLimit { cost }` returns.

1. Add up the number of requests needed to fulfill each unique connection in the call. Assume every request will reach the `first` or `last` argument limits.
2. Divide the number by **100** and round the result to get the final aggregate cost. This step normalizes large numbers.

{% note %}

**Note**: The minimum cost of a call to the GraphQL API v4 is **1**, representing a single request.

{% endnote %}

Here's an example query and score calculation:

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

This query requires 5,101 requests to fulfill:

* Although we're returning 100 repositories, the API has to connect to the viewer's account **once** to get the list of repositories. So, requests for repositories = **1**
* Although we're returning 50 issues, the API has to connect to each of the **100** repositories to get the list of issues. So, requests for issues = **100**
* Although we're returning 60 labels, the API has to connect to each of the **5,000** potential total issues to get the list of labels. So, requests for labels = **5,000**
* Total = **5,101**

Dividing by 100 and rounding gives us the final score of the query: **51**
