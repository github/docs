---
ms.openlocfilehash: 1f368a08409f4b10daa8b9e45340886ba8d9a47d
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147876849"
---
Schlüssel | type | BESCHREIBUNG
----|------|-------------
`action`|`string` | Die ausgeführte Aktion. Kann eine der folgenden Aktionen sein: <ul><li> `queued` - Ein neuer Auftrag wurde erstellt.</li><li> `in_progress` - Der Auftrag hat mit der Verarbeitung des Runners begonnen.</li><li> `completed` - Der `status` des Job ist `completed`.</li></ul>
`workflow_job`|`object`| Der Workflow-Auftrag. Viele `workflow_job`-Schlüssel, so wie `head_sha`, `conclusion` und `started_at` sind identisch mit denen in einem [`check_run`](#check_run)-Objekt.
`workflow_job[status]`|`string`| Den aktuellen Status des Auftrags. Kann `queued`, `in_progress` oder `completed` sein.
`workflow_job[labels]`|`array`| Benutzerdefinierte Bezeichnungen für den Auftrag. Durch das [`"runs-on"`-Attribut](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on) im Workflow-YAML angegeben.
`workflow_job[runner_id]`|`integer`| Die ID des Runners, der diesen Auftrag ausführt. Dies wird `null` sein, solange `workflow_job[status]` `queued` ist.
`workflow_job[runner_name]`|`string`| Der Name des Runners, der diesen Auftrag ausführt. Dies wird `null` sein, solange `workflow_job[status]` `queued` ist.
`workflow_job[runner_group_id]`|`integer`| Die ID der Runner-Gruppe, die diesen Auftrag ausführt. Dies wird `null` sein, solange `workflow_job[status]` `queued` ist.
`workflow_job[runner_group_name]`|`string`| Der Name der Runner-Gruppe, die diesen Auftrag ausführt. Dies wird `null` sein, solange `workflow_job[status]` `queued` ist.
