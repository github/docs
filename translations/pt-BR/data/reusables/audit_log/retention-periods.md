---
ms.openlocfilehash: 4f68c550bee6b80eb502220dff0b7f9664eff1d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147424829"
---
O log de auditoria lista os eventos disparados por atividades que afetam sua empresa{% ifversion not ghec %}. Os logs de auditoria de {% data variables.product.product_name %} são retidos indefinidamente{% ifversion audit-data-retention-tab %}, a menos que um proprietário da empresa configure um período de retenção diferente. Para obter mais informações, confira "[Configurar o log de auditoria da sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)". {% else %}.{% endif %}{% else %} dentro do mês atual e até os seis meses anteriores. O log de auditoria mantém os eventos do Git por sete dias.{% endif %}

{% data reusables.audit_log.only-three-months-displayed %}
