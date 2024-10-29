---
title: Auditing users across your enterprise
intro: 'The audit log dashboard shows site administrators the actions performed by all users and organizations across your enterprise within the last 180 days. The audit log includes details such as who performed the action, what the action was, and when the action was performed.'
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-enterprise
  - /admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Organizations
  - Security
  - User account
shortTitle: Audit users
---
## Accessing the audit log

The audit log dashboard gives you a visual display of audit data across your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

Within the map, you can pan and zoom to see events around the world. Hover over a country to see a quick count of events from that country.

## Searching for events across your enterprise

The audit log lists the following information about actions made within your enterprise:

* [The repository](#search-based-on-the-repository) an action was performed in
* [The user](#search-based-on-the-user) who performed the action
* [Which organization](#search-based-on-the-organization) an action pertained to
* [The action](#search-based-on-the-action-performed) that was performed
* [Which country](#search-based-on-the-location) the action took place in
* [The date and time](#search-based-on-the-time-of-action) the action occurred

{% warning %}

**Notes:**

* While you can't use text to search for audit entries, you can construct search queries using a variety of filters. {% data variables.product.product_name %} supports many operators for searching across {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."
* Audit records are available for the last 180 days.

{% endwarning %}

### Search based on the repository

The `repo` qualifier limits actions to a specific repository owned by your organization. For example:

* `repo:my-org/our-repo` finds all events that occurred for the `our-repo` repository in the `my-org` organization.
* `repo:my-org/our-repo repo:my-org/another-repo` finds all events that occurred for both the `our-repo` and `another-repo` repositories in the `my-org` organization.
* `-repo:my-org/not-this-repo` excludes all events that occurred for the `not-this-repo` repository in the `my-org` organization.

You must include your organization's name within the `repo` qualifier; searching for just `repo:our-repo` will not work.

### Search based on the user

The `actor` qualifier scopes events based on the member of your organization that performed the action. For example:

* `actor:octocat` finds all events performed by `octocat`.
* `actor:octocat actor:hubot` finds all events performed by both `octocat` and `hubot`.
* `-actor:hubot` excludes all events performed by `hubot`.

You can only use a {% data variables.product.product_name %} username, not an individual's real name.

### Search based on the organization

The `org` qualifier limits actions to a specific organization. For example:

* `org:my-org` finds all events that occurred for the `my-org` organization.
* `org:my-org action:team` finds all team events performed within the `my-org` organization.
* `-org:my-org` excludes all events that occurred for the `my-org` organization.

### Search based on the action performed

The `action` qualifier searches for specific events, grouped within categories. For information on the events associated with these categories, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

| Category name | Description
|------------------|-------------------
| `hook` | Contains all activities related to webhooks.
| `org` | Contains all activities related organization membership
| `repo` | Contains all activities related to the repositories owned by your organization.
| `team` | Contains all activities related to teams in your organization.

You can search for specific sets of actions using these terms. For example:

* `action:team` finds all events grouped within the team category.
* `-action:billing` excludes all events in the billing category.

Each category has a set of associated events that you can filter on. For example:

* `action:team.create` finds all events where a team was created.
* `-action:billing.change_email` excludes all events where the billing email was changed.

### Search based on the location

The `country` qualifier filters actions by the originating country.
* You can use a country's two-letter short code or its full name.
* Countries with spaces in their name must be wrapped in quotation marks. For example:
  * `country:de` finds all events that occurred in Germany.
  * `country:Mexico` finds all events that occurred in Mexico.
  * `country:"United States"` all finds events that occurred in the United States.

### Search based on the time of action

The `created` qualifier filters actions by the time they occurred.
* Define dates using the format of `YYYY-MM-DD`--that's year, followed by month, followed by day.
* Dates support [greater than, less than, and range qualifiers](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax). For example:
  * `created:2014-07-08` finds all events that occurred on July 8th, 2014.
  * `created:>=2014-07-01` finds all events that occurred on or after July 8th, 2014.
  * `created:<=2014-07-01` finds all events that occurred on or before July 8th, 2014.
  * `created:2014-07-01..2014-07-31` finds all events that occurred in the month of July 2014.
