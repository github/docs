---
title: Rate limits and node limits for the GraphQL API
shortTitle: Rate and node limits
intro: 'The {% data variables.product.prodname_dotcom %} GraphQL API has limitations in place to protect against excessive or abusive calls to {% data variables.product.prodname_dotcom %}''s servers.'
redirect_from:
  - /v4/guides/resource-limitations
  - /graphql/overview/resource-limitations
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - API
---

## Node limit

To pass [schema](/graphql/guides/introduction-to-graphql#schema) validation, all GraphQL API [calls](/graphql/guides/forming-calls-with-graphql) must meet these standards:

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

1. Complex query:

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

## Primary rate limit

{% ifversion ghes %}

Rate limits are disabled by default for {% data variables.product.product_name %}. Contact your site administrator to confirm the rate limits for your instance.

If you are a site administrator, you can set rate limits for your instance. For more information, see "[AUTOTITLE](/admin/configuration/configuring-user-applications-for-your-enterprise/configuring-rate-limits)."

If you are developing an app for users or organizations outside of your instance, the standard {% data variables.product.prodname_dotcom_the_website %} rate limits apply. For more information, see "[AUTOTITLE](/free-pro-team@latest/graphql/overview/resource-limitations)" in the {% data variables.product.prodname_free_user %} documentation.

{% else %}

The GraphQL API assigns points to each query and limits the points that you can use within a specific amount of time. This limit helps prevent abuse and denial-of-service attacks, and ensures that the API remains available for all users.

The REST API also has a separate primary rate limit. For more information, see "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)."

In general, you can calculate your primary rate limit for the GraphQL API based on your method of authentication:

* _For users_: 5,000 points per hour per user. This includes requests made with a {% data variables.product.pat_generic %} as well as requests made by a {% data variables.product.prodname_github_app %} or {% data variables.product.prodname_oauth_app %} on behalf of a user that authorized the app. Requests made on a user's behalf by a {% data variables.product.prodname_github_app %} that is owned by a {% data variables.product.prodname_ghe_cloud %} organization have a higher rate limit of 10,000 points per hour. Similarly, requests made on your behalf by an {% data variables.product.prodname_oauth_app %} that is owned or approved by a {% data variables.product.prodname_ghe_cloud %} organization have a higher rate limit of 10,000 points per hour if you are a member of the {% data variables.product.prodname_ghe_cloud %} organization.
* _For {% data variables.product.prodname_github_app %} installations not on a {% data variables.product.prodname_ghe_cloud %} organization_: 5,000 points per hour per installation. Installations that have more than 20 repositories receive another 50 points per hour for each repository. Installations that are on an organization that have more than 20 users receive another 50 points per hour for each user. The rate limit cannot increase beyond 12,500 points per hour. The rate limit for user access tokens (as opposed to installation access tokens) are dictated by the primary rate limit for users.
* _For {% data variables.product.prodname_github_app %} installations on a {% data variables.product.prodname_ghe_cloud %} organization_: 10,000 points per hour per installation. The rate limit for user access tokens (as opposed to installation access tokens) are dictated by the primary rate limit for users.
* _For {% data variables.product.prodname_oauth_apps %}_: 5,000 points per hour, or 10,000 points per hour if the app is owned by a {% data variables.product.prodname_ghe_cloud %} organization. This only applies when the app uses their client ID and client secret to request public data. The rate limit for OAuth access tokens generated by a {% data variables.product.prodname_oauth_app %} are dictated by the primary rate limit for users.
* _For `GITHUB_TOKEN` in {% data variables.product.prodname_actions %} workflows_: 1,000 points per hour per repository. For requests to resources that belong to an enterprise account on GitHub.com, the limit is 15,000 points per hour per repository.

You can check the point value of a query or calculate the expected point value as described in the following sections. The formula for calculating points and the rate limit are subject to change.

### Checking the status of your primary rate limit

You can use the headers that are sent with each response to determine the current status of your primary rate limit.

Header name | Description
-----------|-----------|
`x-ratelimit-limit` | The maximum number of points that you can use per hour
`x-ratelimit-remaining` | The number of points remaining in the current rate limit window
`x-ratelimit-used` | The number of points you have used in the current rate limit window
`x-ratelimit-reset` | The time at which the current rate limit window resets, in UTC epoch seconds
`x-ratelimit-resource` | The rate limit resource that the request counted against. For GraphQL requests, this will always be `graphql`.

You can also query the `rateLimit` object to check your rate limit. When possible, you should use the rate limit response headers instead of querying the API to check your rate limit.

```graphql
query {
  viewer {
    login
  }
  rateLimit {
    limit
    remaining
    used
    resetAt
  }
}
```

Field | Description
-----------|-----------|
`limit` | The maximum number of points that you can use per hour
`remaining` | The number of points remaining in the current rate limit window
`used` | The number of points you have used in the current rate limit window
`resetAt` | The time at which the current rate limit window resets, in UTC epoch seconds

### Returning the point value of a query

You can return the point value of a query by querying the `cost` field on the `rateLimit` object:

```graphql
query {
  viewer {
    login
  }
  rateLimit {
    cost
  }
}
```

### Predicting the point value of a query

You can also roughly calculate the point value of a query before you make the query.

1. Add up the number of requests needed to fulfill each unique connection in the call. Assume every request will reach the `first` or `last` argument limits.
1. Divide the number by **100** and round the result to the nearest whole number to get the final aggregate point value. This step normalizes large numbers.

{% note %}

**Note**: The minimum point value of a call to the GraphQL API is **1**.

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

## Secondary rate limits

{% data reusables.rest-api.secondary-rate-limit-rest-graphql %}

## Exceeding the rate limit

If you exceed your primary rate limit, the response status will still be `200`, but you will receive an error message, and the value of the `x-ratelimit-remaining` header will be `0`. You should not retry your request until after the time specified by the `x-ratelimit-reset` header.

If you exceed a secondary rate limit, the response status will be `200` or `403`, and you will receive an error message that indicates that you hit a secondary rate limit. If the `retry-after` response header is present, you should not retry your request until after that many seconds has elapsed. If the `x-ratelimit-remaining` header is `0`, you should not retry your request until after the time, in UTC epoch seconds, specified by the `x-ratelimit-reset` header. Otherwise, wait for at least one minute before retrying. If your request continues to fail due to a secondary rate limit, wait for an exponentially increasing amount of time between retries, and throw an error after a specific number of retries.

Continuing to make requests while you are rate limited may result in the banning of your integration.

## Staying under the rate limit

To avoid exceeding a rate limit, you should pause at least 1 second between mutative requests and avoid concurrent requests.

You should also subscribe to webhook events instead of polling the API for data. For more information, see "[AUTOTITLE](/webhooks)."

{% ifversion audit-log-streaming %}

You can also stream the audit log in order to view API requests. This can help you troubleshoot integrations that are exceeding the rate limit. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)."

{% endif %}

{% endif %}
