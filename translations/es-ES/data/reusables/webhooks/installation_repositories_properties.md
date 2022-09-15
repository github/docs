---
ms.openlocfilehash: 43e874e29bca10faa81fd0f24e4098fe20eab90c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069241"
---
Clave | Tipo | Descripción
----|------|------------
`action` | `string` | La acción que se ha realizado. Puede ser `added` o `removed`.
`repository_selection` | `string` | La elección de repositorios en los cuales se encuentra la instalación. Puede ser `selected` o `all`.
`repositories_added` | `array` | Una matriz de objetos del repositorio, los cuales se agregaron a la instalación.
`repositories_removed` | `array` | Una matriz de objetos del repositorio, los cuales se eliminaron de la instalación.
