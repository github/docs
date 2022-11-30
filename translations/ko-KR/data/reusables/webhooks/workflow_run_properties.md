---
ms.openlocfilehash: ef1965dfec0f00d60c0653d7b8bf1f799c0a08bd
ms.sourcegitcommit: f768d3fb6d31898dc524b5827bfed5679d202b3b
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/06/2022
ms.locfileid: "148009665"
---
키 | Type | 설명
----|------|-------------
`action`|`string` | 수행된 작업입니다. `requested`{% ifversion actions-workflow-run-in-progress %}, `in_progress`,{% endif %} 또는 `completed`.
`workflow_run`| `object` | 워크플로 실행 `artifacts_url`, `check_suite_id`, `conclusion`, `head_branch` 및 `head_sha` 등과 같은 정보가 포함됩니다.
