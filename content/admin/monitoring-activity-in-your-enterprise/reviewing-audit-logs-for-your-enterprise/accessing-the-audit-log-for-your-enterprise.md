---
title: Accessing the audit log for your enterprise
intro: You can view aggregated actions from all of the organizations owned by an enterprise account in the enterprise's audit log.
shortTitle: Access audit logs
permissions: Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can access the audit log.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /articles/viewing-the-audit-logs-for-organizations-in-your-business-account
  - /articles/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/viewing-the-audit-logs-for-organizations-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
contentType: how-tos
category:
  - Monitor and audit your enterprise
---

{% ifversion ghec %}

There are several ways to access and retain audit log data for your enterprise:

* **Web interface**: View recent activity in your enterprise settings. See [Viewing the enterprise's audit log via the web interface](#viewing-the-enterprises-audit-log-via-the-web-interface).
* **JSON/CSV exports**: Download a file of audit log activity. See [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise).
* **REST API endpoint**: Query audit log events programmatically. See [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise).
* **Streaming to an external system**: Deliver events continuously to a system that your incident responders can access and query. See [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

Each method exposes a different subset of your audit log data. For the full list of events, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise).

## Audit log data available by access method

{% data reusables.audit_log.events-data-retention-enterprise %}

For enterprises that use {% data variables.product.prodname_emus %}, the enterprise audit log also includes user events. For a list of these user events, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/security-log-events).

To retain Git events beyond their availability in the audit log, save them to external storage before they expire. Configure audit log streaming in advance to collect events continuously.

Git event exports do not include events initiated through the web interface or the REST or GraphQL APIs. For example, when someone merges a pull request in the web interface, the resulting push to the base branch is missing from the export.

`api.request` events are available only in streamed enterprise audit logs, and only when the option to stream API request events has been enabled. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#enabling-audit-log-streaming-of-api-requests). 

> [!IMPORTANT]
> {% data reusables.audit_log.streaming-not-retroactive %}

## Preparing for an incident response

Enable enterprise audit log streaming, API request event streaming, and source IP address disclosure to prepare for incident response. Without all three features enabled, responders will have critical visibility gaps when investigating incidents affecting your enterprise or its organizations. Set an appropriate retention period for the streamed logs and ensure incident responders can access them.

For setup instructions, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#setting-up-audit-log-streaming), [Enabling audit log streaming of API requests](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise#enabling-audit-log-streaming-of-api-requests), and [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise).

{% data reusables.support.security-incident-expectations %}

{% endif %}

## Viewing the enterprise's audit log via the web interface

{% data reusables.audit_log.retention-periods %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
