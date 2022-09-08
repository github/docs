---
ms.openlocfilehash: 43e874e29bca10faa81fd0f24e4098fe20eab90c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069241"
---
Clave | Tipo | Descripción
----|------|------------
`action` | `string` | La acción que se ha realizado. Puede ser `added` o `removed`.
`repository_selection` | `string` | La elección de repositorios en los cuales se encuentra la instalación. Puede ser `selected` o `all`.
`repositories_added` | `array` | Una matriz de objetos del repositorio, los cuales se agregaron a la instalación.
`repositories_removed` | `array` | Una matriz de objetos del repositorio, los cuales se eliminaron de la instalación.
