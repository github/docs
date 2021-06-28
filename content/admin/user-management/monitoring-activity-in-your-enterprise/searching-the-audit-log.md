---
title: Searching the audit log
intro: Site administrators can search an extensive list of audited actions on the enterprise.
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log/
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
---
## Search query syntax

Compose a search query from one or more key:value pairs separated by AND/OR logical operators.

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
`created_at`   | Time at which the action occurred
`from`         | View from which the action was initiated
`note`         | Miscellaneous event-specific information (in either plain text or JSON format)
`org`          | Name of the organization affected by the action (if applicable)
`org_id`       | ID of the organization affected by the action (if applicable)

For example, to see all actions that have affected the repository `octocat/Spoon-Knife` since the beginning of 2017:

  `repo:"octocat/Spoon-Knife" AND created_at:[2017-01-01 TO *]`

For a full list of actions, see "[Audited actions](/admin/user-management/audited-actions)."

## Searching the audit log

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
4. Type a search query.
![Search query](/assets/images/enterprise/site-admin-settings/search-query.png)
