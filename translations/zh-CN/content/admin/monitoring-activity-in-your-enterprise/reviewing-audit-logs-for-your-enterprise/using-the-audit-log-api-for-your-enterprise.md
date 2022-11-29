---
title: Using the audit log API for your enterprise
intro: 'You can programmatically retrieve enterprise events with the REST or GraphQL API.'
shortTitle: Audit log API
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can use the audit log API.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - API
---

## Using the audit log API

You can interact with the audit log using the GraphQL API or the REST API.{% ifversion read-audit-scope %} You can use the `read:audit_log` scope to access the audit log via the APIs.{% endif %}

Timestamps and date fields in the API response are measured in [UTC epoch milliseconds](http://en.wikipedia.org/wiki/Unix_time).

## Querying the audit log GraphQL API

To ensure your intellectual property is secure, and you maintain compliance for your enterprise, you can use the audit log GraphQL API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audit-log-api-info %}

Note that you can't retrieve Git events using the {% ifversion not ghec %}audit log API.{% else %}GraphQL API. To retrieve Git events, use the REST API instead. For more information, see `git` category actions in "[Audit log actions for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)", and also the "[Enterprise administration](/rest/reference/enterprise-admin#audit-log)" and "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization) audit log endpoints in the REST API documentation."{% endif %}

The GraphQL response can include data for up to 90 to 120 days.

### Example 1: Members added to or removed from organizations in an enterprise

The query below fetches the audit logs for the `avocado-corp` enterprise and returns the first 10 organizations in the enterprise, where the only actions performed were adding or removing a member from an organization. The first 20 audit log entries for each organization are returned. 

This query uses the [auditlog](/graphql/reference/objects) field from the Organization object, and the [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) and [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry) objects. The  {% data variables.product.prodname_dotcom %} account querying the enterprise audit log must be an organization owner for each organization within the enterprise.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 10, orderBy: {field: LOGIN, direction: DESC}) {
      nodes {
        name
        auditLog(first: 20) {
          edges {
            node {
              ... on OrgAddMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
              ... on OrgRemoveMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

The GraphQL API will return at most 100 nodes per query. To retrieve additional results, you'll need to implement pagination. For more information, see "[Resource limitations](/graphql/overview/resource-limitations#node-limit)" in the GraphQL API documentation and [Pagination](https://graphql.org/learn/pagination/) in the official GraphQL documentation.
### Example 2: Events in an organization, for a specific date and actor

You can specify multiple search phrases, such as `created` and `actor`, by separating them in your query string with a space.

The query below fetches all the audit logs for the `avocado-corp` enterprise that relate to the `octo-org` organization, where the actions were performed by the `octocat` user on or after the 1 Jan, 2022. The first 20 audit log entries are returned, with the newest log entry appearing first. 

This query uses the [AuditEntry](/graphql/reference/interfaces#auditentry) interface. The {% data variables.product.prodname_dotcom %} account querying the enterprise audit log must be an owner of the `octo-org` organization.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 1, query: "octo-org") {
      nodes {
        name
        auditLog(first: 20, query: "actor:octocat created:>=2022-01-01T00:00:00.000Z", orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              ... on AuditEntry {
                action
                actorLogin
                createdAt
                user {
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
```

For more query examples, see the [platform-samples repository](https://github.com/github/platform-samples/blob/master/graphql/queries).

## Querying the audit log REST API

To ensure your intellectual property is secure, and you maintain compliance for your enterprise, you can use the audit log REST API to keep copies of your audit log data and monitor:
{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

For more information about the audit log REST API, see "[Enterprise administration](/rest/reference/enterprise-admin#audit-log)" and "[Organizations](/rest/reference/orgs#get-the-audit-log-for-an-organization)."

### Example 1: All events in an enterprise, for a specific date, with pagination

The query below searches for audit log events created on Jan 1st, 2022 in the `avocado-corp` enterprise, and return the first page with a maximum of 100 items per page using [REST API pagination](/rest/overview/resources-in-the-rest-api#pagination):

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

### Example 2: Events for pull requests in an enterprise, for a specific date and actor

You can specify multiple search phrases, such as `created` and `actor`, by separating them in your formed URL with the `+` symbol or ASCII character code `%20`.

The query below searches for audit log events for pull requests, where the event occurred on or after Jan 1st, 2022 in the `avocado-corp` enterprise, and the action was performed by the `octocat` user:

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```
