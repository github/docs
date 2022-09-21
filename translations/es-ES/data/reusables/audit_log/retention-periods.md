---
ms.openlocfilehash: 4f68c550bee6b80eb502220dff0b7f9664eff1d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147424836"
---
El registro de auditoría muestra los eventos que desencadenan las actividades que afectan a la empresa{% ifversion not ghec %}. Los registros de auditoría de {% data variables.product.product_name %} se conservan indefinidamente{% ifversion audit-data-retention-tab %}, a menos que un propietario de la empresa haya configurado un período de retención diferente. Para más información, consulta "[Configuración del registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise)".{% else %}.{% endif %}{% else %} dentro del mes actual y hasta los seis meses anteriores. El registro de auditoría retiene eventos de Git durante siete días.{% endif %}

{% data reusables.audit_log.only-three-months-displayed %}
