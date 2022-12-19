---
ms.openlocfilehash: 33034d7d2f00ba494e16629a57ab07ec9d34810b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148009698"
---
`number`|`integer` | Número de la solicitud de incorporación de cambios.
`changes`|`object` | Cambios en el comentario si la acción ha sido `edited`.
`changes[title][from]`|`string` | Versión previa del título si la acción ha sido `edited`.
`changes[body][from]`|`string` | Versión previa del cuerpo si la acción ha sido `edited`.
`pull_request`|`object` | La [solicitud de incorporación de cambios](/rest/reference/pulls) en sí.{% ifversion fpt or ghec %} `reason`|`string` | Motivo por el que la solicitud de incorporación de cambios se quitaba de una cola de combinación si la acción era `dequeued`.{% endif %}
