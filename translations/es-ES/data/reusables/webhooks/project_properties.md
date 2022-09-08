---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145091950"
---
Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | La acción que se realizó en el proyecto. Puede ser `created`, `edited`, `closed`, `reopened` o `deleted`.
`changes`|`object` | Cambios en el proyecto si la acción ha sido `edited`.
`changes[name][from]` |`string` | Versión anterior del nombre si la acción ha sido `edited`.
`changes[body][from]` |`string` | Versión anterior del cuerpo si la acción ha sido `edited`.
`project`|`object` | El propio [proyecto](/rest/reference/projects).
