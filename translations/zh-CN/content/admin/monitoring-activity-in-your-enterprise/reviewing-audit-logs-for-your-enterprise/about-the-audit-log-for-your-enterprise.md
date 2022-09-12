---
title: 关于企业的审核日志
intro: '为了支持调试和内部及外部符合性，{% data variables.product.product_name %} 提供了经审核的{% ifversion ghes %}系统、{% endif %}用户、组织和存储库事件的日志。'
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
ms.openlocfilehash: 33b3fddb766ede89f973003d9562c4daf6fb3b77
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147424734'
---
## 关于审核日志

{% data reusables.audit_log.retention-periods %}

{% data reusables.audit_log.audit-log-search-list-info-about-action %}

除了查看审核日志之外，你也可以通过其他方式监视企业中的活动，例如{% ifversion ghes or ghae %}查看推送日志和{% endif %}管理全局 Webhook。 有关详细信息，请参阅“[探索企业中的用户活动](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity)”。

## 使用审核日志

作为企业所有者{% ifversion ghes %}或站点管理员{% endif %}，你可以通过多种方式与企业的审核日志数据进行交互：
- 可以查看企业的审核日志。 有关详细信息，请参阅“[访问企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)”。
- 可以在审核日志中搜索具体事件{% ifversion ghec %}，并导出审核日志数据{% endif %}。 有关详细信息，请参阅“[搜索企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise)”{% ifversion ghec %}和“[导出企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)”{% endif %}。{% ifversion audit-data-retention-tab %}
- 可以配置设置，例如审核日志事件{% ifversion enable-git-events %}的保持期以及是否包含 Git 事件{% endif %}。 有关详细信息，请参阅“[为企业配置审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)”。{% endif %} {%- ifversion enterprise-audit-log-ip-addresses %}
- 可以在审核日志中显示与事件关联的 IP 地址。 有关详细信息，请参阅“[在企业的审核日志中显示 IP 地址](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/displaying-ip-addresses-in-the-audit-log-for-your-enterprise)”。
{%- endif %} {%- ifversion audit-log-streaming %}
- 您可以将审核和 Git 事件数据从 {% data variables.product.prodname_dotcom %} 流式传输到外部数据管理系统。 有关详细信息，请参阅“[流式处理企业的审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)”。
{%- endif %} {%- ifversion ghes %}
- 可以将审核日志和系统日志从企业转发到第三方托管的监视系统。 有关详细信息，请参阅“[日志转发](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)”。
{%- endif %} {%- ifversion ghec or ghes > 3.2 or ghae-issue-6648 %}
- 可以使用审核日志 API 查看在企业中执行的操作。 有关详细信息，请参阅“[使用企业的审核日志 API](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)”。
{%- endif %}

有关可能显示在企业审核日志中的审核日志操作的完整列表，请参阅“[企业的审核日志操作](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)”。

## 延伸阅读
- [查看组织的审核日志](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization){%- ifversion ghes %}
- [关于系统日志](/admin/enterprise-management/monitoring-your-appliance/about-system-logs){%- endif %}
