---
title: Using the audit log API for your enterprise
intro: Learn how to programmatically retrieve enterprise events with the REST API.
shortTitle: Audit log API
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}'
versions:
  ghec: '*'
  ghes: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - API
---

>[!NOTE] {% data reusables.webhooks.webhooks-as-audit-log-alternative %}

Maintain compliance and secure intellectual property with endpoints relating to the audit log. See "[AUTOTITLE](/rest/enterprise-admin/audit-log)" and "[AUTOTITLE](/rest/orgs#get-the-audit-log-for-an-organization)."

For more information about the specific events that you can access via the audit log endpoints, see the following articles.

* "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)"
* "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/audit-log-events-for-your-organization)"
* "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/security-log-events)"

## Audit log details

{% data reusables.audit_log.retention-periods %}

Timestamps and date fields in the API response are measured in [UTC epoch milliseconds](https://en.wikipedia.org/wiki/Unix_time).

{% ifversion read-audit-scope %}You can use the `read:audit_log` scope to access the audit log via the API.{% endif %}

{% ifversion ghec %}

## Rate limit

Each audit log API endpoint has a rate limit of 1,750 queries per hour for a given combination of user and IP address. To avoid rate limiting, integrations that query the audit log API should query at a maximum frequency of 1,750 queries per hour. Additionally, if your integration receives a rate limit error (typically a 403 or 429 response), it should wait before making another request to the API. See "[AUTOTITLE](/rest/overview/rate-limits-for-the-rest-api)" and "[AUTOTITLE](/rest/guides/best-practices-for-integrators)."{% endif %}

## Example 1: All events in an enterprise, for a specific date, with pagination

You can use {% ifversion ghes %}page-based{% else %}cursor based{% endif %} pagination. For more information about pagination, see "[AUTOTITLE](/rest/guides/using-pagination-in-the-rest-api)."

{% ifversion ghes %}

The query below searches for audit log events created on Jan 1st, 2022 in the `avocado-corp` enterprise, and return the first page with a maximum of 100 items per page using pagination. For more information about pagination, see "[AUTOTITLE](/rest/guides/using-pagination-in-the-rest-api)."

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"{% data variables.product.rest_url %}/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

{% else %}

The query below searches for audit log events created on Jan 1st, 2022 in the `avocado-corp` enterprise, and returns the first page with a maximum of 100 items per page using pagination. For more information about pagination, see "[AUTOTITLE](/rest/guides/using-pagination-in-the-rest-api)." The `--include` flag causes the headers to be returned along with the response.

```shell
curl --include -H "Authorization: Bearer TOKEN" \
--request GET \
"{% data variables.product.rest_url %}/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&per_page=100"
```

If there are more than 100 results, the `link` header will include URLs to fetch the next, first, and previous pages of results.

```text
link: <{% data variables.product.rest_url %}/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42NjQzODMzNTk5MjdlKzEyfDloQzBxdURzaFdVbVlLWjkxRU9mNXc%3D&before=>; rel="next",
<{% data variables.product.rest_url %}/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=>; rel="first",
<{% data variables.product.rest_url %}/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=MS42Njc4NDA2MjM4MzNlKzEyfExqeG5sUElvNEZMbG1XZHA5akdKTVE%3D>; rel="prev"
```

Copy the corresponding pagination link into your next request. For example:

```shell
curl -I -H "Authorization: Bearer TOKEN" \
--request GET \
"{% data variables.product.rest_url %}/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42Njc4NDA2MjM5NDFlKzEyfHRYa3AwSkxUd2xyRjA5bWxfOS1RbFE%3D&before="
```

{% endif %}

## Example 2: Events for pull requests in an enterprise, for a specific date and actor

You can specify multiple search phrases, such as `created` and `actor`, by separating them in your formed URL with the `+` symbol or ASCII character code `%20`.

The query below searches for audit log events for pull requests, where the event occurred on or after Jan 1st, 2022 in the `avocado-corp` enterprise, and the action was performed by the `octocat` user:

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"{% data variables.product.rest_url %}/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```

## Example 3: Events for Git activity in an enterprise, for a specific date and actor

You can search for Git events in an enterprise, such as cloning, fetching, and pushing, by adding `include=git` as a parameter in the URL. Alternatively, you can use `include=all` to search for both web events and Git events.

The query below searches for audit log events for Git activity, where the event occurred after Jan 1st, 2024, in the `avocado-corp` enterprise, and the action was performed by the `octocat` user.

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"{% data variables.product.rest_url %}/enterprises/avocado-corp/audit-log?phrase=created:>=2024-01-01+actor:octocat&include=git"
```
