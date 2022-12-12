---
ms.openlocfilehash: 4f68c550bee6b80eb502220dff0b7f9664eff1d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147424835"
---
В журнале аудита перечисляются события, которые активируются действиями, влияющими на ваше предприятие{% ifversion not ghec %}. Журналы аудита для {% data variables.product.product_name %} хранятся неограниченное время{% ifversion audit-data-retention-tab %}, если только владелец предприятия не настроил другой период хранения. Дополнительные сведения см. в разделе [Настройка журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise). {% else %}. {% endif %} {% else %} в течение текущего месяца и до предыдущих шести месяцев. События Git хранятся в журнале аудита семь дней.{% endif %}

{% data reusables.audit_log.only-three-months-displayed %}
