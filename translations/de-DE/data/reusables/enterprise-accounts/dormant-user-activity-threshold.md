---
ms.openlocfilehash: 0e815b78ccfa3c799c0558fca89fc84f0fccd2bf
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145108620"
---
{% ifversion not ghec%}Ein Benutzerkonto gilt standardmäßig{% else %}Ein Benutzerkonto gilt{% endif %} als ruhend, wenn es seit 90 Tagen nicht mehr aktiv war. {% ifversion not ghec %}Du kannst die Zeitspanne konfigurieren, die ein Benutzer inaktiv sein muss, um als ruhend zu gelten{% ifversion ghes%} und festlegen, dass ruhende Benutzer gesperrt werden, um Benutzerlizenzen freizugeben{% endif %}.{% endif %}
