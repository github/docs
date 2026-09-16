{% ifversion ghec %}

There is a hard limit when exporting the audit logs for your enterprise. These limits are either:

* **100 MB** compressed file, or
* **10 minutes** export processing time, or
* **both**.

To avoid these limits, we recommend filtering the audit log to a smaller dataset before exporting. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise).

If you intend to review a large dataset of audit logs, we recommend streaming your logs to an external data management system. For more information, see [AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise).

{% endif %}
