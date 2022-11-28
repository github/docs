---
ms.openlocfilehash: 830540b45884edcec609f94aeeaaf5b661a95a51
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163213"
---
| 작업 | Description
|--------|------------
| `workflows.approve_workflow_job` | 워크플로 작업이 승인되었습니다. 자세한 내용은 “[배포 검토](/actions/managing-workflow-runs/reviewing-deployments)”를 참조하세요.
| `workflows.cancel_workflow_run` | 워크플로 실행이 취소되었습니다. 자세한 내용은 "[워크플로 취소](/actions/managing-workflow-runs/canceling-a-workflow)"를 참조하세요.
| `workflows.delete_workflow_run` | 워크플로 실행이 삭제되었습니다. 자세한 내용은 “[워크플로 실행 삭제](/actions/managing-workflow-runs/deleting-a-workflow-run)”를 참조하세요.
| `workflows.disable_workflow` | 워크플로 실행이 비활성화되었습니다.
| `workflows.enable_workflow` | 워크플로가 이전에 `disable_workflow`로 비활성화된 후 활성화되었습니다.
| `workflows.reject_workflow_job` | 워크플로 작업이 거부되었습니다. 자세한 내용은 “[배포 검토](/actions/managing-workflow-runs/reviewing-deployments)”를 참조하세요.
| `workflows.rerun_workflow_run` | 워크플로 실행이 다시 실행되었습니다. 자세한 내용은 “[워크플로 다시 실행](/actions/managing-workflow-runs/re-running-a-workflow)”을 참조하세요.
| `workflows.completed_workflow_run` | 워크플로 상태가 로 변경되었습니다 `completed`. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.
| `workflows.created_workflow_run` | 워크플로 실행이 만들어졌습니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[예제 워크플로 만들기](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)”를 참조하세요.
| `workflows.prepared_workflow_job` | 워크플로 작업이 시작되었습니다. 작업에 제공된 비밀 목록을 포함합니다. REST API를 통해서만 볼 수 있습니다. {% data variables.product.prodname_dotcom %} 웹 인터페이스에 표시되지 않거나 JSON/CSV 내보내기에서 볼 수 없습니다. 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows)”를 참조하세요.
