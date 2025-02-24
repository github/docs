---
title: About the audit log for your enterprise
intro: 'Learn how to use the audit log to monitor activity in your enterprise.'
versions:
  ghec: '*'
type: overview
topics:
  - Enterprise
shortTitle: Audit log
---

## About audit logs

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

{% data reusables.audit_log.retention-periods %}

In addition to viewing your audit log, you can monitor activity in your enterprise in other ways, such as managing global webhooks. Webhooks provide a way for GitHub to notify your server when specific events occur for a repository, organization, or enterprise. Compared to the API or searching the audit log, webhooks can be more efficient if you just want to learn and possibly log when certain events occur on your enterprise, organization, or repository. See [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity-in-your-enterprise/managing-global-webhooks).

You can also use the audit log, and other tools, to monitor the actions taken in response to security alerts. For more information, see [AUTOTITLE](/code-security/getting-started/auditing-security-alerts).

## Using your audit logs

As an enterprise owner, you can interact with the audit log data for your enterprise in several ways:
* You can view the audit log for your enterprise. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise).
* You can search the audit log for specific events and export audit log data. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise) and [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise).
* You can identify all events that were performed by a specific access token. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token).
* You can display the IP address associated with events in the audit log. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise).
* You can stream audit and Git events data from {% data variables.product.prodname_dotcom %} to an external data management system. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).
* You can use the Audit log API to view actions performed in your enterprise. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise).

For a full list of audit log actions that may appear in your enterprise audit log, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

## Next steps

Next, learn how to control who has access to your enterprise's resources using roles. See [AUTOTITLE](/enterprise-onboarding/feature-enhancements/about-access-permissions-on-github).
