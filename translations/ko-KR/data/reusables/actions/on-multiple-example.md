---
ms.openlocfilehash: de2ab71ca5c93229329c2887dc71685aa92e199d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147883062"
---
단일 이벤트 또는 여러 이벤트를 지정할 수 있습니다. 예를 들어 다음 `on` 값이 있는 워크플로는 워크플로 리포지토리의 분기로 푸시될 때 실행됩니다.

```yaml
on: [push, fork]
```

여러 이벤트를 지정하는 경우 워크플로를 트리거하려면 이러한 이벤트 중 하나만 발생해야 합니다. 워크플로에 대한 트리거 이벤트가 여러 개 동시에 발생하는 경우 워크플로 실행 여러 개가 트리거됩니다.
