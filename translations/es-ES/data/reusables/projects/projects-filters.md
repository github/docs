---
ms.openlocfilehash: 9106c4a2e538e62d23cd0aa2e417758376f6ffcd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158857"
---
- Para filtrar por cualquier coincidencia de varios valores (una consulta OR), separe los valores con una coma. Por ejemplo, `label:"good first issue",bug` mostrará todas las incidencias etiquetadas con `good first issue` o `bug`.
- Para filtrar la ausencia de un valor específico, coloque `-` por delante del filtro. Por ejemplo, `-label:"bug"` solo mostrará los elementos que no tienen la etiqueta `bug`.
- Para filtrar por la ausencia de todos los valores, escriba `no:` seguido del nombre del campo. Por ejemplo, `no:assignee` solo mostrará los elementos que no tienen un usuario asignado.
- Para filtrar por estado, escriba `is:`. Por ejemplo, `is: issue` o `is:open`.
- Separa los filtros múltiples con un espacio. Por ejemplo, `status:"In progress" -label:"bug" no:assignee` solo mostrará los elementos que tienen un estado de `In progress`, no tienen la etiqueta `bug` y no tienen un usuario asignado.
- Para filtrar por la iteración anterior, actual o siguiente de un campo de iteración, use `@previous`, `@current` o `@next`. Por ejemplo, `iteration:@current`.
- Para filtrar por los elementos asignados al visor, use `@me`. Por ejemplo, `assignee:@me`. Cualquiera que use esta vista verá los elementos asignados a ellos mismos.
- Para filtrar por cuándo se actualizó por última vez un elemento, usa `last-updated:` seguido del número de días. Este filtro solo admite `{number}days` (o `1day` para un solo día) como unidad. Por ejemplo, `last-updated:7days` solo mostrará los elementos que se hayan actualizado por última vez hace 7 días o más.
- Para filtrar los campos de fecha y número, use las consultas de intervalo `>`, `>=`, `<`, `<=` y `..`. Por ejemplo: `target:2022-03-01..2022-03-15`. Para más información, vea "[Descripción de la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)". {% ifversion projects-v2-tasklists %}
- Para filtrar los problemas supervisados mediante un problema especificado, usa `tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"` y reemplaza `<OWNER>` por el propietario del repositorio, `<REPO>` por el nombre del repositorio y `<ISSUE NUMBER>` por el número de problema. {% endif %}
