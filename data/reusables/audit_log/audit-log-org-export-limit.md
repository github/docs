{% ifversion fpt or ghec %}

There is a hard limit when exporting the audit logs for your organization. These limits are either:

* **100 MB** compressed file, or
* **10 minutes** export processing time, or
* **both**.

To avoid these limits, we recommend reducing the audit log to a smaller dataset before exporting. For more information, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log).

{% ifversion ghec %}
If you intend to review a large dataset of audit logs, we recommend streaming your logs to an external data management system. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).
{% endif %}

{% endif %}
