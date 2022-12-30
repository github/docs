---
ms.openlocfilehash: 4c9dffae916ec9dd367a0d8b92a3a1831a6e9b41
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145091952"
---
Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | La acción llevada a cabo en la tarjeta del proyecto. Puede ser `created`, `edited`, `moved`, `converted` o `deleted`.
`changes`|`object` | Cambios en el proyecto si la acción ha sido `edited` o `converted`.
`changes[note][from]` |`string` | Versión anterior de la nota si la acción ha sido `edited` o `converted`.
`after_id`|`integer` | La id de la tarjeta a la cual sigue esta tarjeta ahora si la acción se "movió". Será `null` si es la primera tarjeta de una columna.
`project_card`|`object` | La propia [tarjeta del proyecto](/rest/reference/projects#cards).
