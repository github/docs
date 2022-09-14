---
ms.openlocfilehash: 02959a116ad5d087dc8a9d7fb3293e36b9b9cb24
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145118626"
---
- Para filtrar por cualquier coincidencia de varios valores (una consulta OR), separe los valores con una coma. Por ejemplo, `label:"good first issue",bug` mostrará todas las incidencias etiquetadas con `good first issue` o `bug`.
- Para filtrar la ausencia de un valor específico, coloque `-` por delante del filtro. Por ejemplo, `-label:"bug"` solo mostrará los elementos que no tienen la etiqueta `bug`.
- Para filtrar por la ausencia de todos los valores, escriba `no:` seguido del nombre del campo. Por ejemplo, `no:assignee` solo mostrará los elementos que no tienen un usuario asignado.
- Para filtrar por estado, escriba `is:`. Por ejemplo, `is: issue` o `is:open`.
- Separa los filtros múltiples con un espacio. Por ejemplo, `status:"In progress" -label:"bug" no:assignee` solo mostrará los elementos que tienen un estado de `In progress`, no tienen la etiqueta `bug` y no tienen un usuario asignado.
- Para filtrar por la iteración anterior, actual o siguiente de un campo de iteración, use `@previous`, `@current` o `@next`. Por ejemplo, `sprint:@current`.
- Para filtrar por los elementos asignados al visor, use `@me`. Por ejemplo, `assignee:@me`. Cualquiera que use esta vista verá los elementos asignados a ellos mismos.
- Para filtrar los campos de fecha y número, use las consultas de intervalo `>`, `>=`, `<`, `<=` y `..`. Por ejemplo: `target:2022-03-01..2022-03-15`. Para más información, vea "[Descripción de la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)".
