---
ms.openlocfilehash: 4f68c550bee6b80eb502220dff0b7f9664eff1d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147424831"
---
Le journal d’audit liste les événements déclenchés par les activités qui affectent votre entreprise{% ifversion not ghec %}. Les journaux d’audit pour {% data variables.product.product_name %} sont conservés indéfiniment{% ifversion audit-data-retention-tab %}, sauf si un propriétaire d’entreprise a configuré une période de conservation différente. Pour plus d’informations, consultez « [Configuration du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/configuring-the-audit-log-for-your-enterprise) ».{% else %}. {% endif %}{% else %} dans le mois en cours et jusqu’aux six mois précédents. Le journal d’audit conserve les événements Git pendant sept jours.{% endif %}

{% data reusables.audit_log.only-three-months-displayed %}
