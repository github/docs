---
ms.openlocfilehash: 1f368a08409f4b10daa8b9e45340886ba8d9a47d
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876848"
---
Clé | Type | Description
----|------|-------------
`action`|`string` | action effectuée. Peut être : <ul><li> `queued` - Un travail a été créé.</li><li> `in_progress` - Le travail a commencé sur l’exécuteur.</li><li> `completed` - Le `status` du travail est `completed`.</li></ul>
`workflow_job`|`object`| Travail du workflow. De nombreuses clés `workflow_job`, telles que `head_sha`, `conclusion` et `started_at` sont identiques à celles dans un objet [`check_run`](#check_run).
`workflow_job[status]`|`string`| L’état actuel du travail. Peut être `queued`, `in_progress` ou `completed`.
`workflow_job[labels]`|`array`| Étiquettes personnalisées pour le travail. Spécifié par l’[attribut `"runs-on"`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) dans le workflow YAML.
`workflow_job[runner_id]`|`integer`| ID de l’exécuteur qui exécute ce travail. La valeur est `null` tant que `workflow_job[status]` est `queued`.
`workflow_job[runner_name]`|`string`| Nom de l’exécuteur exécutant ce travail. La valeur est `null` tant que `workflow_job[status]` est `queued`.
`workflow_job[runner_group_id]`|`integer`| ID du groupe d’exécuteurs qui exécute ce travail. La valeur est `null` tant que `workflow_job[status]` est `queued`.
`workflow_job[runner_group_name]`|`string`| Nom du groupe d’exécuteurs qui exécute ce travail. La valeur est `null` tant que `workflow_job[status]` est `queued`.
