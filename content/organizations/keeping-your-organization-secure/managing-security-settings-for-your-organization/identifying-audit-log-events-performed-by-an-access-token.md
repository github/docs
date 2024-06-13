---
title: Identifying audit log events performed by an access token
shortTitle: Identify events by token
intro: 'You can identify the actions performed by a specific token in your organization.'
versions:
  ghec: '*'
topics:
  - Organizations
  - Authentication
  - OAuth apps
  - GitHub Apps
---

## About token data in the audit log for an organization

Your organization's audit log contains an event for each action that a user or integration performs. If the action occurred outside of {% data variables.product.prodname_dotcom %}'s web UI, the event's data will show details about how the user or integration authenticated.

{% data reusables.audit_log.understand-actions-taken-with-token %}

{% data reusables.audit_log.authentication-methods-with-metadata %}

## Token data in audit log events

{% data reusables.audit_log.data-describing-token-use %}

## Identifying events associated with a token

{% data reusables.audit_log.searching-for-associated-events %}

### Generating a SHA-256 hash value for a token

{% data reusables.audit_log.generating-hash-for-a-token %}

### Searching on {% data variables.product.prodname_dotcom %}

{% data reusables.audit_log.searching-for-a-token-on-githubcom %}

### Searching with the REST API

{% data reusables.audit_log.searching-for-a-token-with-rest-api %}

For example, if the name of the organization account is `octo-org`, the following curl command would search @octo-org's audit log for all events that are associated with the token whose URI-encoded SHA-256 hash is `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8`.

```shell
curl --header "Accept: application/vnd.github+json" --header "Authorization: Bearer YOUR-TOKEN" {% data reusables.rest-api.version-header %} 'https://api.github.com/orgs/octo-org/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"'
```

{% ifversion token-audit-log-more-metadata %}

### Identifying Git events

{% data reusables.audit_log.you-can-identify-git-events %} For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)."

{% data reusables.audit_log.authentication-metadata-git-events-release-phase %}

{% endif %}

## Further reading

* "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)"
* "[AUTOTITLE](/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)"
