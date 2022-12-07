---
ms.openlocfilehash: 67b4dd3749936efb6a7eef53fc38543c3c8a6451
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147878851"
---
워크플로 실행을 트리거할 활동 유형을 정의하는 데 `on.<event_name>.types`을 사용합니다. 대부분의 GitHub 이벤트는 둘 이상의 활동 유형에 의해 트리거됩니다.  예를 들어 레이블이 `created`, `edited` 또는 `deleted`일 때 `label`이 트리거됩니다. `types` 키워드를 사용하면 워크플로를 실행하게 하는 작업의 범위를 좁힐 수 있습니다. 하나의 활동 유형만 웹후크 이벤트를 트리거하는 경우 `types` 키워드는 필요하지 않습니다.

이벤트 `types` 배열을 사용할 수 있습니다. 각 이벤트 및 해당 활동 유형에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/using-workflows/events-that-trigger-workflows#available-events)”를 참조하세요.

```yaml
on:
  label:
    types: [created, edited]
```
