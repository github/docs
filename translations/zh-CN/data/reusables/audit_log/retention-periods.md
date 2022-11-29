---
ms.openlocfilehash: 4f68c550bee6b80eb502220dff0b7f9664eff1d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147424830"
---
审核日志列出了由影响企业的活动触发的事件{% ifversion not ghec %}。 {% data variables.product.product_name %} 的审核日志将无限期保留{% ifversion audit-data-retention-tab %}，除非企业所有者配置了不同的保留期。 有关详细信息，请参阅“[为企业配置审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)”。{% else %}.{% endif %}{% else %}本月内，最多前六个月内。 审核日志将 Git 事件保留 7 天。{% endif %}

{% data reusables.audit_log.only-three-months-displayed %}
