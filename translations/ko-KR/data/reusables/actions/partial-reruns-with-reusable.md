---
ms.openlocfilehash: 142794535bf66481cbdf5ec8430ed18ff9a0034d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079934"
---
퍼블릭 리포지토리에서 재사용 가능한 워크플로는 SHA, 릴리스 태그 또는 분기 이름을 사용하여 참조할 수 있습니다. 자세한 내용은 [“재사용 가능한 워크플로 호출”](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)을 참조하세요. 

재사용 가능한 워크플로를 사용하는 워크플로를 다시 실행했으며 참조가 SHA가 아닌 경우 다음과 같은 몇 가지 동작을 주의해야 합니다.

* 워크플로에서 모든 작업을 다시 실행하면 지정된 참조에서 재사용 가능한 워크플로가 사용됩니다. 워크플로의 모든 작업을 다시 실행하는 방법에 대한 자세한 내용은 [“워크플로의 모든 작업 다시 실행”](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow)을 참조하세요.
* 실패한 작업 또는 워크플로의 특정 작업을 다시 실행하면 첫 번째 시도와 동일한 커밋 SHA에서 재사용 가능한 워크플로가 사용됩니다. 워크플로에서 실패한 작업을 다시 실행하는 방법에 대한 자세한 내용은 [“워크플로에서 실패한 작업 다시 실행”](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-failed-jobs-in-a-workflow)을 참조하세요. 워크플로에서 특정 작업을 다시 실행하는 방법에 대한 자세한 내용은 [“워크플로에서 특정 작업 다시 실행”](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-a-specific-job-in-a-workflow)을 참조하세요.
