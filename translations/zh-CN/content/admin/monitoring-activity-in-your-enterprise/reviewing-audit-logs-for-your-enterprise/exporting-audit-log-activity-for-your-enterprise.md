---
title: 导出企业审核日志活动
intro: 可以将审核和 Git 事件数据导出到文件进行脱机分析。
shortTitle: Export audit logs
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: 208e086fa93c89879357d340aa459b3d40824383
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060736'
---
## 关于导出审核日志和 Git 事件数据

可通过在 {% data variables.product.product_name %} 上下载企业的 JSON 或 CSV 文件来导出审核日志。 导出审核日志事件时，可通过一个或多个支持的限定符进行查询，以筛选要导出的特定日志事件。 有关搜索限定符的详细信息，请参阅“[基于执行的操作进行搜索](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed)”。

可通过下载企业审核日志中的 JSON 文件来导出 Git 事件数据。 与审核日志数据不同，你无法在审核日志用户界面中查询要筛选和导出的特定 Git 事件。 

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

作为导出日志事件的替代方法，可以使用 API 检索审核日志事件，或设置 {% data variables.product.product_name %} 以在记录事件时流式处理审核数据。 有关详细信息，请参阅“[在企业中使用审核日志 API](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)”和“[流式处理企业审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)”。

## 导出审核日志数据

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. （可选）若仅需导出筛选的结果，请通过一个或多个支持的限定符或日志筛选器进行搜索。
2. 选择 {% octicon "download" aria-label="The Download icon" %}“导出”下拉菜单，然后选择导出日志事件的文件格式（JSON 或 CSV）。

    ![“导出”按钮](/assets/images/help/organizations/org-audit-log-export.png)

## 导出 Git 事件数据

还可按日期范围导出 Git 事件数据。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. 选择 {% octicon "download" aria-label="The Download icon" %}“导出 Git 事件”下拉菜单，然后选择要导出的日志事件的日期范围。

    ![“导出 Git 事件”按钮](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. 单击 {% octicon "file-zip" aria-label="The File-zip icon" %}“下载结果”下载文件。
1. 数据将导出为压缩的 JSON 文件。 若要提取 JSON 数据，请使用存档实用工具客户端或命令解压缩文件。 例如：

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
