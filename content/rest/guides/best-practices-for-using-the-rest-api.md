---
title: Best practices for using the REST API
intro: 'Follow these best practices when using {% data variables.product.company_short %}''s API.'
redirect_from:
  - /guides/best-practices-for-integrators
  - /v3/guides/best-practices-for-integrators
  - /rest/guides/best-practices-for-integrators
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Best practices
---

{% ifversion ghes %}

{% note %}

**Note**: Rate limits are only enabled for your instance if your site administrator has enabled them. Even if rate limits are disabled for your instance, you may still want to follow the best practices that are intended to help you avoid exceeding the rate limit. This can help reduce load on your servers.

{% endnote %}

{% endif %}

## Avoid polling

You should subscribe to webhook events instead of polling the API for data. This will help your integration stay within the API rate limit. For more information, see "[AUTOTITLE](/webhooks)."

## Make authenticated requests

Authenticated requests have a higher primary rate limit than unauthenticated requests. To avoid exceeding the rate limit, you should make authenticated requests. For more information, see "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)."

## Avoid concurrent requests

To avoid exceeding secondary rate limits, you should make requests serially instead of concurrently. To achieve this, you can implement a queue system for requests.

## Pause between mutative requests

If you are making a large number of `POST`, `PATCH`, `PUT`, or `DELETE` requests, wait at least one second between each request. This will help you avoid secondary rate limits.

## Handle rate limit errors appropriately

If you receive a rate limit error, you should stop making requests temporarily according to these guidelines:

- If the `retry-after` response header is present, you should not retry your request until after that many seconds has elapsed.
- If the `x-ratelimit-remaining` header is `0`, you should not make another request until after the time specified by the `x-ratelimit-reset` header. The `x-ratelimit-reset` header is in UTC epoch seconds.
- Otherwise, wait for at least one minute before retrying. If your request continues to fail due to a secondary rate limit, wait for an exponentially increasing amount of time between retries, and throw an error after a specific number of retries.

Continuing to make requests while you are rate limited may result in the banning of your integration.

## Follow any redirects that the API sends you

GitHub is explicit in telling you when a resource has moved by providing a redirect status code. You should follow these redirections. Every redirect response sets the `Location` header with the new URI to go to. If you receive a redirect, it's best to update your code to follow the new URI, in case you're requesting a deprecated path that we might remove.

We've provided [a list of HTTP status codes](/rest#http-redirects) to watch out for when designing your app to follow redirects.

## Don't manually parse URLs

Often, API responses contain data in the form of URLs. For example, when requesting a repository, we'll send a key called `clone_url` with a URL you can use to clone the repository.

For the stability of your app, you shouldn't try to parse this data or try to guess and construct the format of future URLs. Your app is liable to break if we decide to change the URL.

For example, when working with paginated results, it's often tempting to construct URLs that append `?page=<number>` to the end. Avoid that temptation. For more information about dependably following paginated results, see "[AUTOTITLE](/rest/guides/using-pagination-in-the-rest-api)."

## Use conditional requests if appropriate

Most endpoints return an `etag` header, and many endpoints return a `last-modified` header. You can use the values of these headers to make conditional requests. If the response has not changed, you will receive a `304 Not Modified` response. Making a conditional request does not count against your primary rate limit if a `304` response is returned.

For example, if a previous request returned an `etag` header value of `644b5b0155e6404a9cc4bd9d8b1ae730`, you can use the `if-none-match` header in a future request:

```shell
curl {% data variables.product.api_url_pre %}/meta --include --header 'if-none-match: "644b5b0155e6404a9cc4bd9d8b1ae730"'
```

For example, if a previous request returned a `last-modified` header value of `Wed, 25 Oct 2023 19:17:59 GMT`, you can use the `if-modified-since` header in a future request:

```shell
curl {% data variables.product.api_url_pre %}/repos/github/docs --include --header 'if-modified-since: Wed, 25 Oct 2023 19:17:59 GMT'
```

## Dealing with API errors

Although your code would never introduce a bug, you may find that you've encountered successive errors when trying to access the API.

Rather than ignore repeated `4xx` and `5xx` status codes, you should ensure that you're correctly interacting with the API. For example, if an endpoint requests a string and you're passing it a numeric value, you're going to receive a `5xx` validation error, and your call won't succeed. Similarly, attempting to access an unauthorized or nonexistent endpoint will result in a `4xx` error.

Intentionally ignoring repeated validation errors may result in the suspension of your app for abuse.

## Further reading

- "[AUTOTITLE](/webhooks/using-webhooks/best-practices-for-using-webhooks)"
- "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/best-practices-for-creating-a-github-app)"
