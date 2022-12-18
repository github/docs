---
ms.openlocfilehash: 1f368a08409f4b10daa8b9e45340886ba8d9a47d
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878505"
---
키 | 형식 | 설명
----|------|-------------
`action`|`string` | 실행된 동작. 다음 중 하나일 수 있습니다. <ul><li> `queued` - 새 작업이 생성되었습니다.</li><li> `in_progress` - 실행기에서 작업을 처리하기 시작했습니다.</li><li> `completed` - 작업의 `status`가 `completed`입니다.</li></ul>
`workflow_job`|`object`| 워크플로 작업 많은 `workflow_job` 키(예: `head_sha`, `conclusion` 및 `started_at`)는 [`check_run`](#check_run) 개체의 키와 동일합니다.
`workflow_job[status]`|`string`| 작업의 현재 상태 `queued`, `in_progress` 또는 `completed`일 수 있습니다.
`workflow_job[labels]`|`array`| 작업에 대한 사용자 지정 레이블입니다. 워크플로 YAML의 [`"runs-on"` 특성](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)에 의해 지정됩니다.
`workflow_job[runner_id]`|`integer`| 이 작업을 실행하는 실행기의 ID입니다. `workflow_job[status]`가 `queued`이면 `null`입니다.
`workflow_job[runner_name]`|`string`| 이 작업을 실행하는 실행기의 이름입니다. `workflow_job[status]`가 `queued`이면 `null`입니다.
`workflow_job[runner_group_id]`|`integer`| 이 작업을 실행하는 실행기 그룹의 ID입니다. `workflow_job[status]`가 `queued`이면 `null`입니다.
`workflow_job[runner_group_name]`|`string`| 이 작업을 실행하는 실행기 그룹의 이름입니다. `workflow_job[status]`가 `queued`이면 `null`입니다.
