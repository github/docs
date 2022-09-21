---
ms.openlocfilehash: 32ab126dadd891784d769bd869cf563c6783aedc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069245"
---
Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | acción realizada. Puede ser una de las siguientes: <ul><li> `created`: se ha creado una ejecución de comprobación.</li><li> `completed`: el elemento `status` de la ejecución de comprobación es `completed`.</li><li> `rerequested`: alguien ha solicitado que se vuelva a ejecutar la ejecución de comprobación desde la UI de la solicitud de incorporación de cambios. Vea "[Acerca de las comprobaciones de estado](/articles/about-status-checks#checks)" para obtener más información sobre la interfaz de usuario de GitHub. Cuando reciba una acción `rerequested`, deberá [crear una ejecución de comprobación](/rest/reference/checks#create-a-check-run). Solo la {% data variables.product.prodname_github_app %} para la cual alguien ha solicitado volver a ejecutar la comprobación recibirá la carga útil `rerequested`.</li><li> `requested_action`: alguien ha solicitado una acción que proporciona la aplicación. Solo la {% data variables.product.prodname_github_app %} para la cual alguien ha solicitado llevar a cabo una acción recibirá la carga útil de `requested_action`. Para obtener más información sobre las ejecuciones de comprobación y las acciones solicitadas, vea "[Comprobar ejecuciones y acciones solicitadas](/rest/reference/checks#check-runs-and-requested-actions)".</li></ul>
`check_run`|`object` | El elemento [check_run](/rest/reference/checks#get-a-check-run).
`check_run[status]`|`string` | El estado actual de la ejecución de verificación. Puede ser `queued`, `in_progress` o `completed`.
`check_run[conclusion]`|`string` | El resultado de la ejecución de verificación que se completó. Puede ser `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` o `stale`. Este valor será `null` hasta que la ejecución de verificación se haya `completed`.
`check_run[name]`|`string` | El nombre de la ejecución de verificación.
`check_run[check_suite][id]`|`integer` | La id de la suite de verificaciones de la cual es parte esta ejecución de verificación.
`check_run[check_suite][pull_requests]`|`array`| Una matriz de solicitudes de extracción que empatan con esta suite de verificaciones. Una solicitud de incorporación de cambios coincide con un conjunto de comprobación si tienen el mismo elemento `head_branch`.<br/><br/>**Nota:**<ul><li>El elemento `head_sha` del conjunto de comprobaciones puede diferir del elemento `sha` de la solicitud de incorporación de cambios si las inserciones posteriores se realizan en la PR.</li><li>Cuando el elemento `head_branch` del conjunto de comprobación está en un repositorio bifurcado, será `null` y la matriz `pull_requests` estará vacía.</li></ul>
`check_run[check_suite][deployment]`|`object`| Un despliegue a un ambiente de repositorio. Esto solo se rellenará si un trabajo de flujo de trabajo de {% data variables.product.prodname_actions %} que hace referencia a un entorno ha creado la ejecución de comprobación.
`requested_action`|`object` | La acción que solicitó el usuario.
`requested_action[identifier]`|`string` | La referencia del integrador de la acción que solicitó el usuario.
