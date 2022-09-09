---
ms.openlocfilehash: e2c781f830b789fbb8fdaaa9403fe4c7a37c63b5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145165098"
---
`number`|`integer` | Número de la solicitud de incorporación de cambios.
`changes`|`object` | Cambios en el comentario si la acción ha sido `edited`.
`changes[title][from]`|`string` | Versión previa del título si la acción ha sido `edited`.
`changes[body][from]`|`string` | Versión previa del cuerpo si la acción ha sido `edited`.
`pull_request`|`object` | La propia [solicitud de incorporación de cambios](/rest/reference/pulls).
