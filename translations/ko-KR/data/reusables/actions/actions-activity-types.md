---
ms.openlocfilehash: 03c7480afe114a1f9fa676f6872be9081289295a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146688935"
---
일부 이벤트에는 워크플로가 실행되어야 하는 시기를 보다 정확하게 제어할 수 있는 활동 유형이 있습니다. `on.<event_name>.types`를 사용하여 워크플로 실행을 트리거할 이벤트 활동 유형을 정의합니다.

예를 들어 `issue_comment` 이벤트에는 `created`, `edited` 및 `deleted` 활동 유형이 있습니다. `label` 이벤트에 대해 워크플로가 트리거되면 레이블을 만들거나 편집하거나 삭제할 때마다 이 워크플로가 실행됩니다. `label` 이벤트에 대해 `created` 활동 유형을 지정하면 레이블을 편집하거나 삭제할 때가 아니라 레이블을 만들 때 워크플로가 실행됩니다.

```yaml
on:
  label:
    types:
      - created
```

활동 유형을 여러 개 지정한 경우 워크플로를 트리거하려면 이러한 이벤트 활동 유형 중 하나만 발생해야 합니다. 워크플로에 대한 트리거 이벤트 활동 유형 여러 개가 동시에 발생하는 경우 워크플로 실행 여러 개가 트리거됩니다. 예를 들어 다음 워크플로는 이슈가 시작되거나 레이블이 지정될 때 트리거됩니다. 레이블 두 개가 지정된 이슈가 시작되면 워크플로 실행 세 개가 시작됩니다. 하나는 이슈 시작됨 이벤트를 위한 실행이고, 두 개는 이슈에 레이블이 지정됨 이벤트 두 개를 위한 실행입니다.

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

각 이벤트 및 해당 활동 유형에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/using-workflows/events-that-trigger-workflows)”를 참조하세요.
