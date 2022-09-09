---
ms.openlocfilehash: c29755014aac40c0ab7e96f879d19a3fb06d79fb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145091951"
---
Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | La acción que se realizó en la columna de proyecto. Puede ser `created`, `edited`, `moved` o `deleted`.
`changes`|`object` | Cambios en la columna del proyecto si la acción ha sido `edited`.
`changes[name][from]` |`string` | Versión anterior del nombre si la acción ha sido `edited`.
`after_id`|`integer` | La id de la columna a la cual sigue ahora esta coumna si la acción se "movió". Será `null` si es la primera columna de un proyecto.
`project_column`|`object` | La propia [columna del proyecto](/rest/reference/projects#columns).
