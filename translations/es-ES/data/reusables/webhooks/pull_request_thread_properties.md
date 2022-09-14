---
ms.openlocfilehash: 563e9f384acbc3e6e243db8d2dae5eb05d833d04
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883776"
---
Clave | Tipo | Descripción
----|------|------------
`action` | `string` | La acción que se ha realizado. Puede ser una de las siguientes:<ul><li>`resolved`: un subproceso de comentario en una solicitud de incorporación de cambios se ha marcado como resuelto.</li><li>`unresolved`: un subproceso de comentario resuelto previamente en una solicitud de incorporación de cambios se ha marcado como sin resolver.</li></ul>
`pull_request` | `object` | La [solicitud de incorporación de cambios](/rest/reference/pulls) a la que pertenece el subproceso.
`thread` | `object` | El subproceso afectado.
