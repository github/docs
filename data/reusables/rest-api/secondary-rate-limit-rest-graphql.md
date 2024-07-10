In addition to primary rate limits, {% data variables.product.company_short %} enforces secondary rate limits in order to prevent abuse and keep the API available for all users.

You may encounter a secondary rate limit if you:

* _Make too many concurrent requests._ No more than 100 concurrent requests are allowed. This limit is shared across the REST API and GraphQL API.
* _Make too many requests to a single endpoint per minute._ No more than 900 points per minute are allowed for REST API endpoints, and no more than 2,000 points per minute are allowed for the GraphQL API endpoint. For more information about points, see "[Calculating points for the secondary rate limit](#calculating-points-for-the-secondary-rate-limit)."
* _Make too many requests per minute._ No more than 90 seconds of CPU time per 60 seconds of real time is allowed. No more than 60 seconds of this CPU time may be for the GraphQL API. You can roughly estimate the CPU time by measuring the total response time for your API requests.
* _Create too much content on {% data variables.product.company_short %} in a short amount of time._ In general, no more than 80 content-generating requests per minute and no more than 500 content-generating requests per hour are allowed. Some endpoints have lower content creation limits. Content creation limits include actions taken on the {% data variables.product.company_short %} web interface as well as via the REST API and GraphQL API.

These secondary rate limits are subject to change without notice. You may also encounter a secondary rate limit for undisclosed reasons.

### Calculating points for the secondary rate limit

Some secondary rate limits are determined by the point values of requests. For GraphQL requests, these point values are separate from the point value calculations for the primary rate limit.

| Request | Points |
|--------|--------|
| GraphQL requests without mutations | 1 |
| GraphQL requests with mutations | 5 |
| Most REST API `GET`, `HEAD`, and `OPTIONS` requests | 1 |
| Most REST API `POST`, `PATCH`, `PUT`, or `DELETE`  requests | 5 |

Some REST API endpoints have a different point cost that is not shared publicly.
