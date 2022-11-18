---
ms.openlocfilehash: e0ae7814db2deb2c1e666172e71566cc6d28ca1b
ms.sourcegitcommit: 6edb015070d3f0fda4525c6c931f1324626345dc
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: "147888004"
---
{% note %}

**참고:** 작업 수준에서 동시성이 지정되면 작업 순서가 보장되지 않거나 서로 5분 이내에 해당 큐를 실행합니다.

{% endnote %}

`jobs.<job_id>.concurrency`를 사용하여 동일한 동시성 그룹을 사용하는 단일 작업 또는 워크플로만 한 번에 실행되도록 할 수 있습니다. 동시성 그룹은 모든 문자열 또는 식일 수 있습니다. 식은 `secrets` 컨텍스트를 제외한 모든 컨텍스트를 사용할 수 있습니다. 식에 대한 자세한 내용은 “[식](/actions/learn-github-actions/expressions)”을 참조하세요.

워크플로 수준에서 `concurrency`를 지정할 수도 있습니다. 자세한 내용은 [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency)를 참조하세요.

{% data reusables.actions.actions-group-concurrency %}
