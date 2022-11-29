---
ms.openlocfilehash: 1f368a08409f4b10daa8b9e45340886ba8d9a47d
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878506"
---
Ключ | Тип | Описание
----|------|-------------
`action`|`string` | выполненные операции; Возможные значения: <ul><li> `queued` — было создано задание.</li><li> `in_progress` — задание начало обработку в средстве выполнения.</li><li> `completed` — `status` задания имеет значение `completed`.</li></ul>
`workflow_job`|`object`| Задание рабочего процесса. Многие ключи `workflow_job`, такие как `head_sha`, `conclusion` и `started_at`, аналогичны ключам в объекте [`check_run`](#check_run).
`workflow_job[status]`|`string`| текущее состояние задания; Возможные значения: `queued`, `in_progress` или `completed`.
`workflow_job[labels]`|`array`| Пользовательские метки для задания. Определяется [атрибутом`"runs-on"`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) в YAML рабочего процесса.
`workflow_job[runner_id]`|`integer`| Идентификатор средства выполнения, выполняющего это задание. Может иметь значение `null` до тех пор, пока `workflow_job[status]` имеет значение`queued`.
`workflow_job[runner_name]`|`string`| Имя средства выполнения, выполняющего это задание. Может иметь значение `null` до тех пор, пока `workflow_job[status]` имеет значение`queued`.
`workflow_job[runner_group_id]`|`integer`| Идентификатор группы средства выполнения, выполняющего это задание. Может иметь значение `null` до тех пор, пока `workflow_job[status]` имеет значение`queued`.
`workflow_job[runner_group_name]`|`string`| Имя группы средства выполнения, выполняющего это задание. Может иметь значение `null` до тех пор, пока `workflow_job[status]` имеет значение`queued`.
