---
title: About the audit log for your enterprise
intro: 'To support debugging and internal and external compliance, {% data variables.product.product_name %} provides logs of audited{% ifversion ghes %} system,{% endif %} user, organization, and repository events.'
shortTitle: About audit logs
redirect_from:
  - /enterprise/admin/articles/audit-logging
  - /enterprise/admin/installation/audit-logging
  - /enterprise/admin/user-management/audit-logging
  - /admin/user-management/audit-logging
  - /admin/user-management/monitoring-activity-in-your-enterprise/audit-logging
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/auditing-activity-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/auditing-activity-in-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Auditing
  - Enterprise
  - Logging
  - Security
---

## About audit logs

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

In addition to viewing your audit log, you can monitor activity in your enterprise in other ways, such as {% ifversion ghes or ghae %}viewing push logs and {% endif %}managing global webhooks. For more information, see "[Exploring user activity in your enterprise](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity)."

## Using your audit logs

As an enterprise owner{% ifversion ghes %} or site administrator{% endif %}, you can interact with the audit log data for your enterprise in several ways:
- You can view the audit log for your enterprise. For more information, see "[Accessing the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)."
- You can search the audit log for specific events{% ifversion ghec %} and export audit log data{% endif %}. For more information, see "[Searching the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)"{% ifversion ghec %} and "[Exporting the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)"{% endif %}.
{%- ifversion enterprise-audit-log-ip-addresses %}
- You can display the IP address associated with events in the audit log. For more information, see "[Displaying IP addresses in the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise)."
{%- endif %}
{%- ifversion ghec %}
- You can stream audit and Git events data from {% data variables.product.prodname_dotcom %} to an external data management system. For more information, see "[Streaming the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)."
{%- else %}
- You can forward audit and system logs, from your enterprise to an third-party hosted monitoring system. 詳しい情報については、「[ログの転送](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)」を参照してください。
{%- endif %}
{%- ifversion ghec or ghes > 3.2 or ghae-issue-6648 %}
- You can use the Audit log API to view actions performed in your enterprise. For more information, see "[Using the audit log API for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)."
{%- endif %}

For a full list of audit log actions that may appear in your enterprise audit log, see "[Audit log actions for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)."

{% ifversion ghec %}
## Git events

Git events data, such as cloning, fetching, and pushing is logged. For more information, see "[Streaming the audit log for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)."

{% endif %}

## 参考リンク
- 「[Organization の Audit log をレビューする](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization)」
{%- ifversion ghes %}
- "[About system logs](/admin/enterprise-management/monitoring-your-appliance/about-system-logs)"
{%- endif %}
