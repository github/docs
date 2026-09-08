---
title: Best practices for using the REST API
intro: 'Follow these best practices when using {% data variables.product.company_short %}''s API.'
redirect_from:
  - /guides/best-practices-for-integrators
  - /v3/guides/best-practices-for-integrators
  - /rest/guides/best-practices-for-integrators
  - /rest/guides/best-practices-for-using-the-rest-api
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Best practices
category:
  - Learn about the REST API
---

{% ifversion ghes %}

> [!NOTE]
> Rate limits are only enabled for your instance if your site administrator has enabled them. Even if rate limits are disabled for your instance, you may still want to follow the best practices that are intended to help you avoid exceeding the rate limit. This can help reduce load on your servers.

{% endif %}

## Avoid polling

You should subscribe to webhook events instead of polling the API for data. This will help your integration stay within the API rate limit. For more information, see [AUTOTITLE](/webhooks).

If you cannot use webhooks and you must poll the API, poll as efficiently as possible to avoid exceeding the rate limit:

* Poll only as often as you need to, on a fixed schedule. If a response includes an `x-poll-interval` header, wait at least that many seconds before you poll the same endpoint again.
* Make authenticated conditional requests, so that unchanged data does not count against your primary rate limit. For more information, see [Use conditional requests](#use-conditional-requests).
* Request only the data that you need, and keep responses stable, so that more of your polls return `304 Not Modified`. For more information, see [Make requests that can be cached](#make-requests-that-can-be-cached).

## Make authenticated requests

Authenticated requests have a higher primary rate limit than unauthenticated requests. To avoid exceeding the rate limit, you should make authenticated requests. For more information, see [AUTOTITLE](/rest/using-the-rest-api/rate-limits-for-the-rest-api).

## Avoid concurrent requests

To avoid exceeding secondary rate limits, you should make requests serially instead of concurrently. To achieve this, you can implement a queue system for requests.

## Pause between mutative requests

If you are making a large number of `POST`, `PATCH`, `PUT`, or `DELETE` requests, wait at least one second between each request. This will help you avoid secondary rate limits.

## Handle rate limit errors appropriately

If you receive a rate limit error, you should stop making requests temporarily according to these guidelines:

* If the `retry-after` response header is present, you should not retry your request until after that many seconds has elapsed.
* If the `x-ratelimit-remaining` header is `0`, you should not make another request until after the time specified by the `x-ratelimit-reset` header. The `x-ratelimit-reset` header is in UTC epoch seconds.
* Otherwise, wait for at least one minute before retrying. If your request continues to fail due to a secondary rate limit, wait for an exponentially increasing amount of time between retries, and throw an error after a specific number of retries.

Continuing to make requests while you are rate limited may result in the banning of your integration.

{% data reusables.organizations.api-insights-learn-about %}

## Follow redirects

The {% data variables.product.github %} REST API uses HTTP redirection where appropriate. You should assume that any
request may result in a redirection. Receiving an HTTP redirection is not an error, and you should follow the redirect.

A `301` status code indicates permanent redirection. You should repeat your request to the URL specified by the `location` header. Additionally, you should update your code to use this URL for future requests.

A `302` or `307` status code indicates temporary redirection. You should repeat your request to the URL specified by the `location` header. However, you should not update your code to use this URL for future requests.

Other redirection status codes may be used in accordance with HTTP specifications.

## Do not manually parse URLs

Many API endpoints return URL values for fields in the response body. You should not try to parse these URLs or to predict the structure of future URLs. This can cause your integration to break if {% data variables.product.company_short %} changes the structure of the URL in the future. Instead, you should look for a field that contains the information that you need. For example, the endpoint to create an issue returns an `html_url` field with a value like `https://github.com/octocat/Hello-World/issues/1347` and a `number` field with a value like `1347`. If you need to know the number of the issue, use the `number` field instead of parsing the `html_url` field.

Similarly, you should not try to manually construct pagination queries. Instead, you should use the link headers to determine what pages of results you can request. For more information, see [AUTOTITLE](/rest/using-the-rest-api/using-pagination-in-the-rest-api).

## Use conditional requests

Most endpoints return an `etag` header, and many endpoints return a `last-modified` header. You can use the values of these headers to make conditional `GET` requests. If the response has not changed, you will receive a `304 Not Modified` response. Making a conditional request does not count against your primary rate limit if a `304` response is returned and the request was made while correctly authorized with an `Authorization` header. This makes conditional requests especially useful when you poll an endpoint, because each `304 Not Modified` response is fast and does not use your rate limit.

In the following examples, replace `YOUR-TOKEN` with your access token.{% ifversion ghes %} Replace `REPO-OWNER` with the account that owns the repository, and replace `REPO-NAME` with the name of the repository.{% endif %}

To make a conditional request with an `etag`:

1. Make a request and save the value of the `etag` header from the response.

   ```shell
   curl --include --header "Authorization: Bearer YOUR-TOKEN" {% data variables.product.rest_url %}/repos/{% ifversion ghes %}REPO-OWNER/REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}/pulls
   ```

   The response includes an `etag` header:

   ```text
   HTTP/2 200
   etag: "644b5b0155e6404a9cc4bd9d8b1ae730"
   ```

1. On your next request to the same URL, send the saved value in the `if-none-match` header.

   ```shell
   curl --include --header "Authorization: Bearer YOUR-TOKEN" --header 'if-none-match: "644b5b0155e6404a9cc4bd9d8b1ae730"' {% data variables.product.rest_url %}/repos/{% ifversion ghes %}REPO-OWNER/REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}/pulls
   ```

   If the data has not changed, you will receive a `304 Not Modified` response, which does not count against your primary rate limit:

   ```text
   HTTP/2 304
   ```

You can also use the `last-modified` header. For example, if a previous request returned a `last-modified` header value of `Wed, 25 Oct 2023 19:17:59 GMT`, you can use the `if-modified-since` header in a future request:

```shell
curl --include --header "Authorization: Bearer YOUR-TOKEN" --header 'if-modified-since: Wed, 25 Oct 2023 19:17:59 GMT' {% data variables.product.rest_url %}/repos/{% ifversion ghes %}REPO-OWNER/REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}
```

Conditional requests for unsafe methods, such as `POST`, `PUT`, `PATCH`, and `DELETE` are not supported unless otherwise noted in the documentation for a specific endpoint.

## Make requests that can be cached

A conditional request only saves you time and rate limit if the endpoint returns `304 Not Modified`. The endpoint returns `304` when the representation that you requested has not changed since you saved its `etag` or `last-modified` value; unrelated response headers, such as the date, can still differ. To make `304` responses more likely when you poll, keep your requests stable and specific.

Request only the data that you need. A smaller, more specific response changes less often, so it returns `304 Not Modified` more often. For example, to check the pull requests for one branch, filter the list by that branch instead of listing every pull request and searching the results yourself. Replace `HEAD-OWNER` with the account that owns the head branch; for a pull request from a fork, this is the account that owns the fork. Replace `BRANCH-NAME` with the name of the branch, and URL-encode it if it contains special characters such as `#` or `&`:

```shell
curl --include --header "Authorization: Bearer YOUR-TOKEN" "{% data variables.product.rest_url %}/repos/{% ifversion ghes %}REPO-OWNER/REPO-NAME{% else %}octocat/Spoon-Knife{% endif %}/pulls?head=HEAD-OWNER:BRANCH-NAME"
```

If you page through a list, use a stable sort order. Some parameters, such as `sort=updated`, reorder the list whenever an item changes. When an item moves to a new position, the items between its old and new positions shift onto different pages, so pages that you already fetched can return new data instead of `304 Not Modified`. A stable order, such as the default, stops updates to existing items from reordering the list, although adding or removing items can still shift entries onto other pages.

Use the same parameters every time you poll the same data. A different page size, page number, or filter produces a different response with a different `etag`.

## Do not ignore errors

You should not ignore repeated `4xx` and `5xx` error codes. Instead, you should ensure that you are correctly interacting with the API. For example, if an endpoint requests a string and you are passing it a numeric value, you will receive a validation error. Similarly, attempting to access an unauthorized or nonexistent endpoint will result in a `4xx` error.

If you are polling and a resource repeatedly returns a `404 Not Found` response, do not keep requesting it on every poll. First, make sure that the `404` is not caused by authentication or authorization. {% data variables.product.company_short %} returns a `404 Not Found` response instead of a `403 Forbidden` response for some private resources when your credentials do not grant access, so a `404` does not always mean that the resource is absent. For more information, see [AUTOTITLE](/rest/using-the-rest-api/troubleshooting-the-rest-api#404-not-found-for-an-existing-resource). Once you have confirmed that your credentials are correct, wait much longer before you check again, or check again only when you have a reason to believe that the resource now exists. Repeatedly requesting a missing resource wastes your rate limit and can trigger a secondary rate limit.

Intentionally ignoring repeated validation errors may result in the suspension of your app for abuse.

## Further reading

* [AUTOTITLE](/webhooks/using-webhooks/best-practices-for-using-webhooks)
* [AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/best-practices-for-creating-a-github-app)
