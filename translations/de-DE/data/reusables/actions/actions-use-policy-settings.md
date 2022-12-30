---
ms.openlocfilehash: d12805516bcd1d9b079acc9d1260d887bac27eed
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "146179719"
---
Wenn du {% data reusables.actions.policy-label-for-select-actions-workflows %} auswählst, werden Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} innerhalb {% ifversion ghec or ghes or ghae %}deines Unternehmens{% else %}deiner Organisation{% endif %} zugelassen, und es stehen zusätzliche Optionen zur Verfügung, um andere spezifische Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows{% endif %} zuzulassen. Weitere Informationen findest du unter [Zulassen der Ausführung ausgewählter Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbarer Workflows{% endif %}](#allowing-select-actions{% ifversion actions-workflow-policy %}-and-reusable-workflows{% endif %}-to-run).

{% ifversion ghec or fpt %}Wenn du Aktionen{% ifversion actions-workflow-policy %} und wiederverwendbare Workflows nur in{% else %} lokal in{% endif %} {% ifversion ghec or ghes or ghae %}deinem Unternehmen{% else %}deiner Organisation{% endif %} zulässt, blockiert die Richtlinie jeglichen Zugriff auf Aktionen, die von {% data variables.product.prodname_dotcom %} erstellt wurden. Auf die Aktion [`actions/checkout`](https://github.com/actions/checkout) könnte also beispielsweise nicht zugegriffen werden.{% endif %}
