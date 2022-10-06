---
ms.openlocfilehash: e01273fe15058c00b11d380a3c50d4448cfb92b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180787"
---
El nombre de cada entrada del registro de auditoría se compone del calificador de objeto o categoría `action`, seguido de un tipo de operación. Por ejemplo, la entrada `repo.create` hace referencia a la operación `create` de la categoría `repo`.

Cada entrada del registro de auditoría muestra información vigente acerca de un evento, como:

- La empresa {% ifversion ghec or ghes or ghae %}u {% endif %}organización en la que se ha realizado una acción
- El usuario (actor) que ha realizado la acción
- El usuario afectado por la acción
- En qué repositorio se realizó una acción
- La acción que se realizó
- En qué país se realizó la acción
- Fecha y hora en que se produjo la acción {%- ifversion enterprise-audit-log-ip-addresses %}
- Opcionalmente, la dirección IP de origen del usuario (actor) que realizó la acción {%- endif %}
