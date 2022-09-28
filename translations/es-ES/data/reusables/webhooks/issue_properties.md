---
ms.openlocfilehash: 905d4497bb48d1c5bfab91a1bb06389e5cd197e1
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: "145069239"
---
`issue`|`object` | La propia [incidencia](/rest/reference/issues).
`changes`|`object`| Cambios en la incidencia si la acción ha sido `edited`.
`changes[title][from]`|`string` | Versión previa del título si la acción ha sido `edited`.
`changes[body][from]`|`string` | Versión previa del cuerpo si la acción ha sido `edited`.
`assignee`|`object` | Usuario opcional que se ha asignado a la incidencia o se ha desasignado de ella.
`label`|`object` | Etiqueta opcional que se ha agregado a la incidencia o se ha quitado de ella.
