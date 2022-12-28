---
ms.openlocfilehash: 2bdab95a93e5eff4bc68d8da73fd9d7d9a93580a
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879703"
---
Eine Workflowausführung besteht aus einem oder mehreren `jobs`, die standardmäßig parallel ausgeführt werden. Um Aufträge nacheinander auszuführen, kannst du mit dem Schlüsselwort `jobs.<job_id>.needs` Abhängigkeiten von anderen Aufträgen definieren.

Jeder Auftrag wird in einer durch `runs-on` festgelegten Runnerumgebung ausgeführt.

Innerhalb der Nutzungsbeschränkungen des Workflows kannst Du unbegrenzt viele Jobs ausführen. Weitere Informationen findest du unter {% ifversion fpt or ghec or ghes %}[Nutzungseinschränkungen und Abrechnung](/actions/reference/usage-limits-billing-and-administration) für auf {% data variables.product.prodname_dotcom %} gehostete Runner und unter {% endif %}[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %} für Nutzungseinschränkungen für selbstgehostete Runner.{% elsif ghae %}.{% endif %}

Wenn du den eindeutigen Bezeichner eines Auftrags in einer Workflowausführung ermitteln musst, kannst du die {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API verwenden. Weitere Informationen findest du unter [Workflowaufträge](/rest/reference/actions#workflow-jobs).
