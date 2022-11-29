---
ms.openlocfilehash: 154c75025c0c83ff96a9da096d824a6d8541a3b3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148009697"
---
Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | La acción que se ha realizado. Puede ser una de las siguientes:<ul><li>`assigned`</li><li>`auto_merge_disabled`</li><li>`auto_merge_enabled`</li><li>`closed`: si la acción es `closed` y la clave `merged` es `false`, la solicitud de incorporación de cambios se ha cerrado con confirmaciones no combinadas. Si la acción es `closed` y la clave `merged` es `true`, la solicitud de incorporación de cambios se ha combinado.</li><li>`converted_to_draft`</li>{% ifversion fpt or ghec %}<li>`dequeued`: se activa cuando una solicitud de incorporación de cambios se quita de una cola de combinación.</li>{% endif %}<li>`edited`</li>{% ifversion fpt or ghec %}<li>`enqueued`: se activa cuando una solicitud de incorporación de cambios se agrega a una cola de combinación.</li>{% endif %}<li>`labeled`</li><li>`locked`</li><li>`opened`</li><li>`ready_for_review`</li><li>`reopened`</li><li>`review_request_removed`</li><li>`review_requested`</li><li>`synchronize`: se desencadena cuando se actualiza la rama principal de una solicitud de incorporación de cambios. Por ejemplo, cuando se actualiza la rama de encabezado desde la rama base, cuando las confirmaciones nuevas se suben a la rama de encabezado o cuando se cambia la rama de encabezado.</li><li>`unassigned`</li><li>`unlabeled`</li><li>`unlocked`</li></ul>
