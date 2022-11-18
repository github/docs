---
ms.openlocfilehash: d503b739b31064e743351c490bfbdc2dda14028f
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147865931"
---
리포지토리의 `GITHUB_TOKEN`을 사용하여 작업을 수행하는 경우 `GITHUB_TOKEN`{% ifversion actions-token-updated-triggers %}에 의해 트리거되는 이벤트(`workflow_dispatch` 및 `repository_dispatch` 예외),{% endif %}는 새 워크플로 실행을 만들지 않습니다. 이렇게 하면 실수로 재귀 워크플로 실행을 만들지 못하도록 방지됩니다. 예를 들어, 워크플로 실행이 리포지토리의 `GITHUB_TOKEN`을 사용하여 코드를 푸시하는 경우 리포지토리가 `push` 이벤트 발생 시 실행되도록 구성된 워크플로를 포함하고 있더라도 새 워크플로가 실행되지 않습니다.
