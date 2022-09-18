---
ms.openlocfilehash: 67fd6cd7e895b7e121c0972702473305fc560b24
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147116197"
---
Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | acción realizada. Puede ser:<ul><li>`completed`: Se han completado todas las ejecuciones de verificación en una suite de verificación.</li><li>`requested`: Ocurre cuando se inserta código nuevo en el repositorio de la aplicación. Cuando recibas una acción `requested`, deberás [crear una ejecución de verificación](/rest/reference/checks#create-a-check-run).</li><li>`rerequested`: Ocurre cuando alguien solicita volver a ejecutar toda la suite de verificaciones desde la interfaz de usuario de la solicitud de extracción. Cuando recibas los eventos de la acción `rerequested`, deberás [crear una ejecución de comprobación](/rest/reference/checks#create-a-check-run). Consulta "[Acerca de las comprobaciones de estado](/articles/about-status-checks#checks)" para obtener más información sobre la interfaz de usuario de GitHub.</li></ul>
`check_suite`|`object` | La [check_suite](/rest/reference/checks#suites).
`check_suite[head_branch]`|`string` | El nombre de la rama principal en la cual están los cambios.
`check_suite[head_sha]`|`string` | El SHA de la confirmación más reciente para esta suite de verificaciones.
`check_suite[status]`|`string` | El estado de resumen para todas las ejecuciones de verificación que son parte de la suite de verificaciones. Puede ser `queued`, `requested`, `in_progress` o `completed`.
`check_suite[conclusion]`|`string`| La conclusión de resumen para todas las ejecuciones de verificación que son parte de la suite de verificaciones. Puede ser uno de entre `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` o `stale`. Este valor será `null` hasta que la ejecución de verificación se haya `completed`.
`check_suite[url]`|`string` | La URL que apunta al recurso de la API de suite de verificación.
`check_suite[pull_requests]`|`array`| Una matriz de solicitudes de extracción que empatan con esta suite de verificaciones. Una solicitud de incorporación de cambios coincide con un conjunto de comprobación si tienen el mismo elemento `head_branch`.<br/><br/>**Nota:**<ul><li>El elemento `head_sha` del conjunto de comprobaciones puede diferir del elemento `sha` de la solicitud de incorporación de cambios si las inserciones posteriores se realizan en la PR.</li><li>Cuando el elemento `head_branch` del conjunto de comprobación esté en un repositorio bifurcado, será `null` y la matriz `pull_requests` estará vacía.</li></ul>
