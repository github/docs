---
ms.openlocfilehash: dfbf31bbfeea726bcd0c1852d881aefc8f149c0e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160357"
---
Puedes ordenar y filtrar {% data variables.product.prodname_dependabot_alerts %} escribiendo filtros como pares de `key:value` en la barra de búsqueda. 

| Opción | Descripción | Ejemplo | 
|:---|:---|:---|
| `ecosystem` | Se muestran alertas para el ecosistema seleccionado | Usa `ecosystem:npm` para mostrar {% data variables.product.prodname_dependabot_alerts %} para npm |{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
| `has` | Se muestran alertas que cumplen los criterios de filtro seleccionados | Usa `has:patch` para mostrar alertas relacionadas con avisos que tienen una revisión{% ifversion dependabot-alerts-vulnerable-calls %}</br>Usa `has:vulnerable-calls` para mostrar alertas relacionadas con llamadas a funciones vulnerables{% endif %} |{% endif %}
| `is` | Se muestran alertas en función de su estado | Usa `is:open` para mostrar alertas abiertas |
| `manifest` | Se muestran alertas para el manifiesto seleccionado | Usa `manifest:webwolf/pom.xml` para mostrar alertas en el archivo pom.xml de la aplicación WebWolf |
| `package` | Se muestran alertas para el paquete seleccionado | Usa `package:django` para mostrar alertas para Django |
| `resolution` | Se muestran alertas del estado de resolución seleccionado | Usa `resolution:no-bandwidth` para mostrar alertas previamente estacionadas debido a la falta de recursos o de tiempo para corregirlas |
| `repo` |  Se muestran alertas basadas en el repositorio al que hacen referencia</br>Ten en cuenta que este filtro solo está disponible en la información general de seguridad. Para obtener más información, consulta "[Acerca de la introducción de seguridad](/code-security/security-overview/about-the-security-overview)" | Usa `repo:octocat-repo` para mostrar alertas en el repositorio denominado `octocat-repo` |{%- ifversion dependabot-alerts-development-label %}
| `scope` | Se muestran alertas basadas en el ámbito de la dependencia a la que hacen referencia | Usa `scope:development` para mostrar alertas de dependencias que solo se usan durante el desarrollo |{% endif %}
| `severity` | Se muestran alertas en función de su nivel de gravedad | Usa `severity:high` para mostrar alertas de gravedad alta |{%- ifversion dependabot-most-important-sort-option %}
| `sort` | Se muestran alertas según el criterio de ordenación seleccionado | La opción de ordenación predeterminada para las alertas es `sort:most-important`, que clasifica las alertas por importancia</br>Usa `sort:newest` para mostrar las alertas más recientes notificadas por {% data variables.product.prodname_dependabot %} |{% endif %}
