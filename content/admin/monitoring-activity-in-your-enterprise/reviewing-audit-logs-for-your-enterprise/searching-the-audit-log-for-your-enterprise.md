---
title: Searching the audit log for your enterprise
intro: You can search an extensive list of audited actions in your enterprise.
shortTitle: Search audit logs
permissions: Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can search the audit log.
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
  - /admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
miniTocMaxHeadingLevel: 3
---

## About search for the enterprise audit log

You can search your enterprise audit log directly from the user interface by using the **Filters** dropdown, or by typing a search query.

  ![Search query](/assets/images/enterprise/site-admin-settings/search-query.png)

For more information about viewing your enterprise audit log, see "[Accessing the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)." 

You can also use the API to retrieve audit log events. For more information, see "[Using the audit log API for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)."

Note that you cannot search for entries using text. You can, however, construct search queries using a variety of filters. Many operators used when querying the log, such as `-`, `>`, or `<`, match the same format as searching across {% data variables.product.product_name %}. For more information, see "[Searching on {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."

{% note %}

**Note**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Search query filters

Filter| Description
--------------:| -----------
`Yesterday's activity` | All actions created in the past day.
`Enterprise account management` | All actions in the `business` category.
`Organization membership` | All actions for when a new user was invited to join an organization.
`Team management` | All actions related to team management.<br/>- When a user account or repository was added or removed from a team<br/>- When a team maintainer was promoted or demoted<br/>-  When a team was deleted
`Repository management` | All actions for repository management.<br/>- When a repository was created or deleted<br/>- When the repository visibility was changed<br/>- When a team was added or removed from a repository{% ifversion ghec %}
`Billing updates` | All actions concerning how your enterprise pays for {% data variables.product.prodname_dotcom %} and for when your billing email address was changed.{% endif %}
`Hook activity` | All actions for webhooks and pre-receive hooks.
`Security management` | All actions concerning SSH keys, deploy keys, security keys, 2FA, and SAML single sign-on credential authorization, and vulnerability alerts for repositories.

## Search query syntax

You can compose a search query from one or more `key:value` pairs, separated by AND/OR logical operators. For example, to see all actions that have affected the repository `octocat/Spoon-Knife` since the beginning of 2017:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

The `key:value` pairs that can be used in a search query are:

Key            | Value
--------------:| --------------------------------------------------------
`actor_id`     | ID of the user account that initiated the action
`actor`        | Name of the user account that initiated the action
`oauth_app_id` | ID of the OAuth application associated with the action
`action`       | Name of the audited action
`user_id`      | ID of the user affected by the action
`user`         | Name of the user affected by the action
`repo_id`      | ID of the repository affected by the action (if applicable)
`repo`         | Name of the repository affected by the action (if applicable)
`actor_ip`     | IP address from which the action was initiated
`created`      | Time at which the action occurred{% ifversion ghes %}. If querying the audit log from the site admin dashboard, use `created_at` instead{% endif %}
`from`         | View from which the action was initiated
`note`         | Miscellaneous event-specific information (in either plain text or JSON format)
`org`          | Name of the organization affected by the action (if applicable)
`org_id`       | ID of the organization affected by the action (if applicable)
`business` | Name of the enterprise affected by the action (if applicable)
`business_id` | ID of the enterprise affected by the action (if applicable)

To see actions grouped by category, you can also use the action qualifier as a `key:value` pair. For more information, see "[Search based on the action performed](#search-based-on-the-action-performed)."

For a full list of actions in your enterprise audit log, see "[Audit log actions for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."

## Searching the audit log

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### Search based on the action performed

To search for specific events, use the `action` qualifier in your query. For example:

  * `action:team` finds all events grouped within the team category.
  * `-action:hook` excludes all events in the webhook category.

Each category has a set of associated actions that you can filter on. For example:

  * `action:team.create` finds all events where a team was created.
  * `-action:hook.events_changed` excludes all events where the events on a webhook have been altered.

Actions that can be found in your enterprise audit log are grouped within the following categories:

{% data reusables.audit_log.audit-log-action-categories %}
### Search based on time of action

Use the `created` qualifier to filter events in the audit log based on when they occurred.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

For example:

  * `created:2014-07-08` finds all events that occurred on July 8th, 2014.
  * `created:>=2014-07-08` finds all events that occurred on or after July 8th, 2014.
  * `created:<=2014-07-08` finds all events that occurred on or before July 8th, 2014.
  * `created:2014-07-01..2014-07-31` finds all events that occurred in the month of July 2014.

### Search based on location

Using the qualifier `country`, you can filter events in the audit log based on the originating country. You can use a country's two-letter short code or full name. Countries with spaces in their name will need to be wrapped in quotation marks. For example:

  * `country:de` finds all events that occurred in Germany.
  * `country:Mexico` finds all events that occurred in Mexico.
  * `country:"United States"` all finds events that occurred in the United States.
