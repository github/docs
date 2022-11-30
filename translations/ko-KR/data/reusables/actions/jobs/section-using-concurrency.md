---
ms.openlocfilehash: 411eca8837a5457c87a78fbee442b6824fb3c158
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089478"
---
`concurrency`를 사용하여 동일한 동시성 그룹을 사용하는 작업 또는 워크플로가 한 번에 하나만 실행되도록 합니다. 동시성 그룹은 임의 문자열 또는 식일 수 있습니다. 식은 [`github` 컨텍스트](/actions/learn-github-actions/contexts#github-context)만 사용할 수 있습니다. 식에 대한 자세한 내용은 “[식](/actions/learn-github-actions/expressions)”을 참조하세요.

작업 수준에서 `concurrency`를 지정할 수도 있습니다. 자세한 내용은 [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency)를 참조하세요.

{% data reusables.actions.actions-group-concurrency %}
