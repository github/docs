---
ms.openlocfilehash: 4f04b4395ec12d834bc4d8f350b302c09badea6d
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/12/2022
ms.locfileid: "148163181"
---
| 작업 | Description
|------------------|-------------------
| `cancel_workflow_run` | 워크플로 실행이 취소되었을 때 트리거됩니다. 자세한 내용은 "[워크플로 취소](/actions/managing-workflow-runs/canceling-a-workflow)"를 참조하세요.
| `completed_workflow_run` | 워크플로 상태가 `completed`로 변경될 때 트리거됩니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.
| `created_workflow_run` | 워크플로 실행이 만들어질 때 트리거됩니다. REST API를 사용해야만 볼 수 있으며 UI 또는 JSON/CSV 내보내기에 표시되지 않습니다. 자세한 내용은 “[예제 워크플로 만들기](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow)”를 참조하세요.
| `delete_workflow_run` | 워크플로 실행이 삭제될 때 트리거됩니다. 자세한 내용은 “[워크플로 실행 삭제](/actions/managing-workflow-runs/deleting-a-workflow-run)”를 참조하세요.
| `disable_workflow` | 워크플로가 사용하지 않도록 설정될 때 트리거됩니다.
| `enable_workflow` | 이전에 `disable_workflow`에 의해 비활성화된 후 워크플로가 활성화될 때 트리거됩니다.
| `rerun_workflow_run` | 워크플로 실행이 다시 실행될 때 트리거됩니다. 자세한 내용은 “[워크플로 다시 실행](/actions/managing-workflow-runs/re-running-a-workflow)”을 참조하세요.
| `prepared_workflow_job` | 워크플로 작업이 시작될 때 트리거됩니다. 작업에 제공된 비밀 목록을 포함합니다. REST API를 통해서만 볼 수 있습니다. {% data variables.product.prodname_dotcom %} 웹 인터페이스에 표시되지 않거나 JSON/CSV 내보내기에서 볼 수 없습니다. 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/reference/events-that-trigger-workflows)”를 참조하세요.
| `approve_workflow_job` | 워크플로 작업이 승인되었을 때 트리거됩니다. 자세한 내용은 “[배포 검토](/actions/managing-workflow-runs/reviewing-deployments)”를 참조하세요.
| `reject_workflow_job` | 워크플로 작업이 거부되었을 때 트리거됩니다. 자세한 내용은 “[배포 검토](/actions/managing-workflow-runs/reviewing-deployments)”를 참조하세요.
