---
ms.openlocfilehash: f41668ecc39ec7b3efc30deaf59bdf406a60d0cb
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878572"
---
Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | La acción que se realizó en el proyecto. Puede ser `created`, `edited`, `closed`, `reopened` o `deleted`.
`changes`|`object` | Cambios en el proyecto si la acción ha sido `edited`.
`changes[name][from]` |`string` | Versión anterior del nombre si la acción ha sido `edited`.
`changes[body][from]` |`string` | Versión anterior del cuerpo si la acción ha sido `edited`.
`project`|`object` | El propio [proyecto](/rest/reference/projects).
