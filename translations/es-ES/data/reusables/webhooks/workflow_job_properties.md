---
ms.openlocfilehash: 1f368a08409f4b10daa8b9e45340886ba8d9a47d
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878507"
---
Clave | Tipo | Descripción
----|------|-------------
`action`|`string` | acción realizada. Puede ser una de las siguientes: <ul><li> `queued`: se ha creado un nuevo trabajo.</li><li> `in_progress`: el trabajo se ha comenzado a procesar en el ejecutor.</li><li> `completed`: el estado (`status`) del trabajo es `completed`.</li></ul>
`workflow_job`|`object`| El job de flujo de trabajo. Muchas claves `workflow_job`, como `head_sha`, `conclusion` y `started_at`, son las mismas que en un objeto [`check_run`](#check_run).
`workflow_job[status]`|`string`| Estado actual del trabajo. Puede ser `queued`, `in_progress` o `completed`.
`workflow_job[labels]`|`array`| Etiquetas personalizadas para el job. Especificadas por el [atributo `"runs-on"`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) en el flujo de trabajo de YAML.
`workflow_job[runner_id]`|`integer`| La ID del ejecutor que está ejecutando este job. Será `null` siempre que el estado de `workflow_job[status]` sea `queued`.
`workflow_job[runner_name]`|`string`| El nombre del ejecutor que está ejecutando este job. Será `null` siempre que el estado de `workflow_job[status]` sea `queued`.
`workflow_job[runner_group_id]`|`integer`| La ID del grupo de ejecutores que está ejecutando este job. Será `null` siempre que el estado de `workflow_job[status]` sea `queued`.
`workflow_job[runner_group_name]`|`string`| El nombre del grupo de ejecutores que está ejecutando este job. Será `null` siempre que el estado de `workflow_job[status]` sea `queued`.
