---
ms.openlocfilehash: 59b68e124208e167e58e295905ff993ecf0530ef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091961"
---
Clave | Tipo | Descripción
----|------|-------------
`action` |`string` | La acción que se ha realizado. Puede ser `created`, `closed`, `opened` (se vuelve a abrir un hito cerrado), `edited` o `deleted`.
`milestone`  |`object` | El hito mismo.
`changes`|`object`| Cambios en el hito si la acción ha sido `edited`.
`changes[description][from]`|`string` | Versión anterior de la descripción si la acción ha sido `edited`.
`changes[due_on][from]`|`string` | Versión anterior de la fecha de vencimiento si la acción ha sido `edited`.
`changes[title][from]`|`string` | Versión anterior del título si la acción ha sido `edited`.
