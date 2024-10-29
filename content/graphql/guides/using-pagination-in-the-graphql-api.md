---
title: Using pagination in the GraphQL API
intro: Learn how to traverse data sets using cursor based pagination with the GraphQL API.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - API
shortTitle: Pagination
---

## About pagination

{% data variables.product.company_short %}'s GraphQL API limits the number of items that you can fetch in a single request in order to protect against excessive or abusive requests to GitHub's servers. When you use the GraphQL API, you must supply a `first` or `last` argument on any connection. The value of these arguments must be between 1 and 100. The GraphQL API will return the number of connections specified by the `first` or `last` argument.

If the data that you are accessing has more connections than the number of items specified by the `first` or `last` argument, the response is divided into smaller "pages" of the specified size. These pages can be fetched one at a time until the entire data set has been retrieved. Each page contains the number of items specified by the `first` or `last` argument, unless it is the last page, which may contain a lower number of items.

This guide demonstrates how to request additional pages of results for paginated responses, how to change the number of results returned on each page, and how to write a script to fetch multiple pages of results.

## Requesting a `cursor` in your query

When using the GraphQL API, you use cursors to traverse through a paginated data set. The cursor represents a specific position in the data set. You can get the first and last cursor on a page by querying the `pageInfo` object. For example:

```graphql
query($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    pullRequests(first: 100, after: null) {
      nodes {
        createdAt
        number
        title
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
}
```

In this example, `pageInfo.startCursor` gives the cursor for the first item on the page. `pageInfo.endCursor` gives the cursor for the last item on the page. `pageInfo.hasNextPage` and `pageInfo.hasPreviousPage` indicate whether there is a page before and after the page that was returned.

## Changing the number of items per page

The `first` and `last` arguments control how many items are returned. The maximum number of items you can fetch using the `first` or `last` argument is 100. You may need to request fewer than 100 items if your query touches a lot of data in order to avoid hitting a rate or node limit. For more information, see "[AUTOTITLE](/graphql/overview/rate-limits-and-node-limits-for-the-graphql-api)."

## Traversing the data set using pagination

Once you return a cursor from a query, you can use the cursor to request the next page of results. To do so, you will use the `after` or `before` argument and the cursor.

For example, assuming the `pageInfo.endCursor` value from the previous example was `Y3Vyc29yOnYyOpHOUH8B7g==`, you can use this query to request the next page of results:

```graphql
query($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    pullRequests(first: 1, after: "Y3Vyc29yOnYyOpHOUH8B7g==") {
      nodes {
        createdAt
        number
        title
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
}
```

You can continue to send queries with the new `pageInfo.endCursor` value returned in the response until there are no pages left to traverse, indicated by `pageInfo.hasNextPage` returning `false`.

If you specified the `last` instead of the `first` argument, the last page of results will be returned first. In this case, you will use the `pageInfo.startCursor` value and the `before` argument to get the previous page of results. Once `pageInfo.hasPreviousPage` returns `false`, you have reached the last page. For example:

```graphql
query($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    pullRequests(last: 1, before: "R3Vyc29yOnYyOpHOHcfoOg==") {
      nodes {
        createdAt
        number
        title
      }
      pageInfo {
        startCursor
        hasPreviousPage
      }
    }
  }
}
```

## Next steps

You can use {% data variables.product.company_short %}'s Octokit SDK and the `octokit/plugin-paginate-graphql` plugin to support pagination in your scripts. For more information, see "[plugin-paginate-graphql.js](https://github.com/octokit/plugin-paginate-graphql.js)."
