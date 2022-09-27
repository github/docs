---
ms.openlocfilehash: e2c781f830b789fbb8fdaaa9403fe4c7a37c63b5
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878524"
---
`number`|`integer` | Número de la solicitud de incorporación de cambios.
`changes`|`object` | Cambios en el comentario si la acción ha sido `edited`.
`changes[title][from]`|`string` | Versión previa del título si la acción ha sido `edited`.
`changes[body][from]`|`string` | Versión previa del cuerpo si la acción ha sido `edited`.
`pull_request`|`object` | La propia [solicitud de incorporación de cambios](/rest/reference/pulls).
