---
title: Rate limit
intro: 'Use the REST API to check your current rate limit status.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/rate-limit
---

## About rate limits

You can check your current rate limit status at any time. For more information about rate limit rules, see "[Resources in the REST API](/rest/overview/resources-in-the-rest-api#rate-limiting)." 

The REST API for searching items has a custom rate limit that is separate from the rate limit governing the other REST API endpoints. For more information, see "[Search](/rest/search)." The GraphQL API also has a custom rate limit that is separate from and calculated differently than rate limits in the REST API. For more information, see "[Resource limitations](/graphql/overview/resource-limitations#rate-limit)." For these reasons, the API response categorizes your rate limit. Under `resources`, you'll see objects relating to different categories:

* The `core` object provides your rate limit status for all non-search-related resources in the REST API.

* The `search` object provides your rate limit status for the REST API for searching.

* The `graphql` object provides your rate limit status for the GraphQL API.

* The `integration_manifest` object provides your rate limit status for the `POST /app-manifests/{code}/conversions` operation. For more information, see "[Creating a GitHub App from a manifest](/apps/building-github-apps/creating-github-apps-from-a-manifest/#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration)."

For more information on the headers and values in the rate limit response, see "[Resources in the REST API](/rest/overview/resources-in-the-rest-api#rate-limit-http-headers)."
