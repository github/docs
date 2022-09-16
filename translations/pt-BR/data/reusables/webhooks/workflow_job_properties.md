---
ms.openlocfilehash: 1f368a08409f4b10daa8b9e45340886ba8d9a47d
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147875510"
---
Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação executada. Pode ser uma das ações a seguir: <ul><li> `queued` – Um trabalho foi criado.</li><li> `in_progress` – O trabalho começou a ser processado no executor.</li><li> `completed` – O `status` do trabalho é `completed`.</li></ul>
`workflow_job`|`object`| O trabalho de fluxo de trabalho. Muitas chaves `workflow_job`, como `head_sha`, `conclusion` e `started_at` são iguais às de um objeto [`check_run`](#check_run).
`workflow_job[status]`|`string`| O estado atual do trabalho. Pode ser `queued`, `in_progress` ou `completed`.
`workflow_job[labels]`|`array`| Rótulos personalizados para o trabalho. Especificado pelo [atributo `"runs-on"`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) no YAML do fluxo de trabalho.
`workflow_job[runner_id]`|`integer`| A ID do executor que executa este trabalho. Isso será `null`, desde que `workflow_job[status]` seja `queued`.
`workflow_job[runner_name]`|`string`| O nome do executor que executa este trabalho. Isso será `null`, desde que `workflow_job[status]` seja `queued`.
`workflow_job[runner_group_id]`|`integer`| A ID do grupo de executores que executa este trabalho. Isso será `null`, desde que `workflow_job[status]` seja `queued`.
`workflow_job[runner_group_name]`|`string`| O nome do grupo de executores que executa este trabalho. Isso será `null`, desde que `workflow_job[status]` seja `queued`.
