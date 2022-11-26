---
title: 为企业配置审核日志
intro: 可以为企业的审核日志配置设置。
shortTitle: Configure audit logs
permissions: Enterprise owners can configure the audit log.
versions:
  feature: audit-data-retention-tab
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: f624607d5729d32d836efedf1fa355a96489a175
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106563'
---
## 关于审核日志配置

可以为审核日志数据配置保留期，并查看索引存储详细信息。

{% ifversion enable-git-events %}配置保留期后，可以启用或禁用与 Git 相关的事件出现在在审核日志中。
{% endif %}

## 为审核日志数据配置保留期

可以为 {% data variables.location.product_location %} 的审核日志数据配置保留期。 超过配置期限的数据将从磁盘中永久移除。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. 在“配置审核日志保留期设置”下，选择下拉菜单并选择一个保留期。

   ![审核日志保留期设置下拉菜单的屏幕截图](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. 单击“ **保存**”。

{% ifversion enable-git-events %}
## 管理审核日志中的 Git 事件

可以启用或禁用与 Git 相关的事件（例如 `git.clone` 和 `git.push`）出现在审核日志中。 有关记录的 Git 事件列表，请参阅“[企业的审核日志事件](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)”。

如果确实启用了 Git 事件，由于记录了大量的 Git 事件，我们建议监视实例的文件存储并查看相关的警报配置。 有关详细信息，请参阅“[监视存储](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage)”。

在审核日志中启用 Git 事件之前，必须为审核日志数据配置保留期，而不是“无限制”。 有关详细信息，请参阅“[为审核日志数据配置保留期](#configuring-a-retention-period-for-audit-log-data)”。

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. 在“Git 事件选择加入”下，选择或取消选择“在审核日志中启用 Git 事件”。

   ![用于在审核日志中启用 Git 事件的复选框的屏幕截图](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. 单击“ **保存**”。

{% endif %}
