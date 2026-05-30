---
title: Best practices for configuring API rate limits
shortTitle: API rate limits best practices
intro: 'A data-driven approach to API rate limits protects your {% data variables.product.prodname_ghe_server %} instance from excessive usage without disrupting critical integrations.'
permissions: Site administrators can configure rate limits for a {% data variables.product.prodname_ghe_server %} instance.
versions:
  ghes: '*'
contentType: how-tos
category:
  - Enable GitHub features for your enterprise
---

## About a data-driven approach to rate limits

Without rate limits, a single CI integration making tens of thousands of requests per hour can slow down your entire instance for every user. But setting limits too aggressively can break the integrations your teams rely on. A data-driven approach helps you find the right balance—start by observing real usage patterns, then gradually enforce limits based on the data you collect.

The approach follows these phases:

1. **Observe**: Enable log forwarding and analyze API traffic patterns.
1. **Baseline**: Enable rate limits with a high initial value to start collecting rate limit data.
1. **Refine**: Adjust limits based on observed usage and communicate with affected teams.
1. **Maintain**: Continuously monitor and adjust limits over time.

For information about enabling rate limits through the {% data variables.enterprise.management_console %}, see [AUTOTITLE](/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-rate-limits).

## Prerequisites

Before you begin, make sure you have:

* Admin access to the {% data variables.enterprise.management_console %}
* Access to log forwarding configuration
* The ability to analyze centralized logs
* An understanding of your organization's API usage patterns and critical integrations

## Step 1: Enable log forwarding

Use log forwarding to centralize API request logs for monitoring and analysis. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity-in-your-enterprise/log-forwarding).

When analyzing forwarded logs, focus on these key fields:

| Field | Description |
|-------|-------------|
| `Timestamp` | Tracks when requests are made |
| `user` / `gh.actor.login` | Identifies the user or integration making requests |
| `path_info` / `gh.request.api.route` | The API route being accessed |
| `status` | HTTP response code (for example, `200` for success or `429` when rate limited) |
| `user_agent` | Identifies the client or integration sending the request |

## Step 2: Analyze API trends before enabling limits

Before enabling rate limits, analyze your overall usage trends to establish a baseline:

* **Identify top consumers.** Find users or integrations making the highest number of requests.
* **Review high-demand endpoints.** Highlight API routes (`path_info`) that receive the most traffic and may benefit from optimization.
* **Detect inefficient patterns.** Look for signs of heavy or inefficient usage, such as frequent polling without caching or redundant requests.

This baseline data will help you set rate limits that are informed by actual usage rather than guesswork.

## Step 3: Enable rate limits with a high initial value

When you're ready to enable rate limits, start with a high threshold so you can gather additional data without disrupting existing workflows.

1. In the {% data variables.enterprise.management_console %}, set the primary API rate limit to a high value, such as 25,000 requests per hour. For more information, see [AUTOTITLE](/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-rate-limits#enabling-rate-limits-for-the-github-enterprise-server-apis).
1. After enabling rate limits, monitor the `gh.rate_limit` fields that appear in your forwarded logs:

   | Field | Description |
   |-------|-------------|
   | `gh.rate_limit.primary.max` | Maximum allowed requests |
   | `gh.rate_limit.primary.remaining` | Remaining requests in the current period |
   | `gh.rate_limit.primary.used` | Requests already made in the period |
   | `gh.rate_limit.primary.reset` | Unix timestamp when the rate limit period resets |

## Step 4: Refine limits and address heavy usage

Use the data from the `gh.rate_limit` fields to make informed decisions:

* **Identify users nearing the limit.** Find users or integrations that are frequently approaching or exceeding the threshold.
* **Determine appropriate limits.** Set rate limits based on observed usage trends rather than arbitrary values.
* **Communicate with affected teams.** Work with teams to optimize their API usage through techniques like request batching, response caching, and conditional requests.

## Step 5: Reduce limits and maintain over time

Once you have a clear picture of your API usage, gradually reduce the rate limit to align with your instance's capacity and actual usage patterns. Monitor for unintended disruptions after each adjustment.

As you refine limits, work with teams whose integrations are affected. Techniques like request batching, response caching, and conditional requests can help teams reduce their API usage. You can also exempt specific users from rate limits using the `ghe-config` utility. For more information, see [AUTOTITLE](/admin/administering-your-instance/administering-your-instance-from-the-command-line/command-line-utilities#ghe-config).

Review your rate limit data periodically, since usage patterns change as new integrations are added and workflows evolve.

## Additional considerations

* **GraphQL API limits.** The GraphQL API has a separate rate limit (default: 5,000 points per hour) that cannot be bypassed through the exemption list. For more information, see [AUTOTITLE](/graphql/overview/rate-limits-and-node-limits-for-the-graphql-api).
* **Secondary rate limits.** You can also enable secondary rate limits to protect the overall level of service. For more information, see [AUTOTITLE](/admin/configuring-settings/configuring-user-applications-for-your-enterprise/configuring-rate-limits#enabling-secondary-rate-limits).

## Further reading

* [AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)
