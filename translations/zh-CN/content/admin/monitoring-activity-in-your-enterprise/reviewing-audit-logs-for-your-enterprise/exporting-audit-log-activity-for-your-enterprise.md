---
title: 导出企业的审核日志活动
intro: 可以将审核和 Git 事件数据导出到文件以进行脱机分析。
shortTitle: 导出审核日志
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
---

## 关于审核日志和 Git 事件数据的导出

您可以通过在 {% data variables.product.product_name %} 上从企业下载 JSON 或 CSV 文件来导出审核日志。 导出审核日志事件时，可以按一个或多个受支持的限定符进行查询，以筛选要导出的特定日志事件。 有关搜索限定符的更多信息，请参阅“[根据执行的操作进行搜索](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed)”。

可以通过从企业审核日志下载 JSON 文件来导出 Git 事件数据。 与审核日志数据不同，您无法在审核日志用户界面中查询要筛选和导出的特定 Git 事件。

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

作为导出日志事件的替代方法，您可以使用 API 检索审核日志事件，或设置 {% data variables.product.product_name %} 以在记录事件时流式传输审核数据。 更多信息请参阅“[对企业使用审核日志 API](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)”和“[流式传输企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)”。

## 导出审核日志数据

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. （可选）若要仅导出筛选的结果，请按一个或多个受支持的限定符或日志筛选器进行搜索。
2. 选择 {% octicon "download" aria-label="The Download icon" %} **Export（导出）**下拉菜单，然后选择要将日志事件导出到的文件格式（JSON 或 CSV）。

    ![导出按钮](/assets/images/help/organizations/org-audit-log-export.png)

## 导出 Git 事件数据

您还可以按日期范围导出 Git 事件数据。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. 选择 {% octicon "download" aria-label="The Download icon" %} **Export Git Events（导出 Git 事件）**下拉菜单，然后选择要为其导出日志事件的日期范围。

    ![“导出 Git 事件”按钮](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. 单击 {% octicon "file-zip" aria-label="The File-zip icon" %} **Download Results（下载结果）**以下载文件。
1. 数据将导出为压缩的 JSON 文件。 要提取 JSON 数据，请使用归档实用程序客户端或命令解压缩文件。 例如：

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
