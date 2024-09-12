---
title: Searching the audit log for your enterprise
intro: You can search an extensive list of audited actions in your enterprise.
shortTitle: Search audit logs
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can search the audit log.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
  - /admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
---

## About search for the enterprise audit log

You can search your enterprise audit log directly from the user interface by using the **Filters** dropdown, or by typing a search query.

For more information about viewing your enterprise audit log, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."

{% data reusables.audit_log.git-events-not-in-search-results %}

You can also use the API to retrieve audit log events. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)."

You cannot search for entries using text. You can, however, construct search queries using a variety of filters. Many operators used when querying the log, such as `-`, `>`, or `<`, match the same format as searching across {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."

{% note %}

**Note**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Search query filters

| Filter | Description |
| ------:| ----------- |
| `Yesterday's activity` | All actions created in the past day. |
| `Enterprise account management` | All actions in the `business` category. |
| `Organization membership` | All actions for when a new user was invited to join an organization. |
| `Team management` | All actions related to team management.<br/>- When a user account or repository was added or removed from a team<br/>- When a team maintainer was promoted or demoted<br/>-  When a team was deleted |
| `Repository management` | All actions for repository management.<br/>- When a repository was created or deleted<br/>- When the repository visibility was changed<br/>- When a team was added or removed from a repository |
| {% ifversion ghec %} |
| `Billing updates` | All actions concerning how your enterprise pays for {% data variables.product.prodname_dotcom %} and for when your billing email address was changed. |
| {% endif %} |
| `Hook activity` | All actions for webhooks and pre-receive hooks. |
| `Security management` | All actions concerning SSH keys, deploy keys, security keys, 2FA, and SAML single sign-on credential authorization, and vulnerability alerts for repositories. |

## Search query syntax

You can compose a search query from one or more `key:value` pairs. For example, to see all actions that have affected the repository `octocat/Spoon-Knife` since the beginning of 2017:

`repo:"octocat/Spoon-Knife" created:>=2017-01-01`

The `key:value` pairs that can be used in a search query are:

| Key          | Value |
| ------------ | ----- |
| `action` | Name of the audited action. |
| `actor` | Name of the user account that initiated the action. |
| {% ifversion ghes %} |
| `actor_id` | ID of the user account that initiated the action.
| {% endif %} |
| {% ifversion ghes %} |
| `actor_ip`   | IP address from which the action was initiated. |
| {% endif %} |
| {% ifversion ghes %} |
| `business`   | Name of the enterprise affected by the action (if applicable). |
| {% endif %} |
| {% ifversion ghes %} |
| `business_id` | ID of the enterprise affected by the action (if applicable). |
| {% endif %} |
| {% ifversion token-audit-log %} |
| `created` | Time at which the action occurred.{% ifversion ghes %} If querying the audit log from the site admin dashboard, use `created_at` instead. |
| {% endif %} |
| `country`           | Name of the country where the actor was when performing the action. |
| `country_code`      | Two-letter short code of the country where the actor was when performing the action. |
| {% ifversion ghes %} |
| `from`         | View from which the action was initiated. |
| {% endif %} |
| `hashed_token` | The token used to authenticate for the action (if applicable, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)"). |
| {% endif %} |
| `ip`                | IP address of the actor. |
| {% ifversion ghes %} |
| `note`         | Miscellaneous event-specific information (in either plain text or JSON format). |
| {% endif %} |
| {% ifversion ghes %} |
| `oauth_app_id` | ID of the {% data variables.product.prodname_oauth_app %} associated with the action. |
|  {% endif %} |
| `operation`         | Operation type that corresponds with the action. Operation types are `create`, `access`, `modify`, `remove`, `authentication`, `transfer`, and `restore`. |
|  {% ifversion ghes %} |
| `org`          | Name of the organization affected by the action (if applicable). |
|  {% endif %} |
|  {% ifversion ghes %} |
| `org_id`       | ID of the organization affected by the action (if applicable). |
|  {% endif %} |
|  {% ifversion ghes %} |
| `repo_id`      | ID of the repository affected by the action (if applicable). |
|  {% endif %} |
|  {% ifversion ghes %} |
| `repository`        | Name with owner of the repository where the action occurred (such as `"octocat/octo-repo"`). |
|  {% endif %} |
|  {% ifversion ghec %} |
| `repository`        | Name with owner of the repository where the action occurred (such as `octocat/octo-repo`). |
|  {% endif %} |
|  {% ifversion ghes %} |
| `user_id`      | ID of the user affected by the action. |
|  {% endif %} |
| `user`         | Name of the user affected by the action. |

To see actions grouped by category, you can also use the action qualifier as a `key:value` pair. For more information, see "[Search based on the action performed](#search-based-on-the-action-performed)."

For a full list of actions in your enterprise audit log, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."

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

{% ifversion token-audit-log %}

### Search based on the token that performed the action

Use the `hashed_token` qualifier to search based on the token that performed the action. Before you can search for a token, you must generate a SHA-256 hash. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)."
{% endif %}
