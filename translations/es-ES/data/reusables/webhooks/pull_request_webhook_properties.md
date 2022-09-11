---
ms.openlocfilehash: b7fde4d22f9d5e5e8b7a3d8f55b3ab19dee1185a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091462"
---
Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | La acción que se ha realizado. Puede ser una de las siguientes:<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`: si la acción es `closed` y la clave `merged` es `false`, la solicitud de incorporación de cambios se ha cerrado con confirmaciones no combinadas. Si la acción es `closed` y la clave `merged` es `true`, la solicitud de incorporación de cambios se ha combinado.</li><li>`converted_to_draft`</li><li>`edited`</li><li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`: se desencadena cuando se actualiza la rama principal de una solicitud de incorporación de cambios. Por ejemplo, cuando se actualiza la rama de encabezado desde la rama base, cuando las confirmaciones nuevas se suben a la rama de encabezado o cuando se cambia la rama de encabezado.</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
