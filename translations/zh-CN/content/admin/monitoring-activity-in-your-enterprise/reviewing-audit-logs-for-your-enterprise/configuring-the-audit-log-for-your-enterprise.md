---
title: Configuring the audit log for your enterprise
intro: You can configure settings for your enterprise's audit log.
shortTitle: Configure audit logs
permissions: Enterprise owners can configure the audit log.
versions:
  feature: audit-data-retention-tab
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
---

## About audit log configuration

You can configure a retention period for audit log data and see index storage details.

{% ifversion enable-git-events %}
After you configure a retention period, you can enable or disable Git-related events from appearing in the audit log.
{% endif %}

## Configuring a retention period for audit log data

You can configure a retention period for audit log data for {% data variables.product.product_location %}. Data that exceeds the period you configure will be permanently removed from disk.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
{% data reusables.audit_log.audit-data-retention-tab %}
1. Under "Configure audit log retention settings", select the dropdown menu and click a retention period.

   ![Screenshot of the dropdown menu for audit log retention settings](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. 单击 **Save（保存）**。

{% ifversion enable-git-events %}
## Managing Git events in the audit log

You can enable or disable Git-related events, such as `git.clone` and `git.push`, from appearing in your audit log. For a list of the Git events are are logged, see "[Audit log events for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)."

If you do enable Git events, due to the large number of Git events that are logged, we recommend monitoring your instance's file storage and reviewing your related alert configurations. For more information, see "[Monitoring storage](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage)."

Before you can enable Git events in the audit log, you must configure a retention period for audit log data other than "infinite." For more information, see "[Configuring a retention period for audit log data](#configuring-a-retention-period-for-audit-log-data)."

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
{% data reusables.audit_log.audit-data-retention-tab %}
1. Under "Git event opt-in", select or deselect **Enable git events in the audit-log**.

   ![Screenshot of the checkbox to enable Git events in the audit log](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. 单击 **Save（保存）**。

{% endif %}
