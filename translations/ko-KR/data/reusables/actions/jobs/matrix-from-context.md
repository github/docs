---
ms.openlocfilehash: 9a9d2b4deb488e7b8fa5f0df2377e7d5ca57d194
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147884439"
---
컨텍스트를 사용하여 매트릭스를 만들 수 있습니다. 컨텍스트에 대한 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.

예를 들어 다음 워크플로는 `repository_dispatch` 이벤트에서 트리거하고 이벤트 페이로드의 정보를 사용하여 매트릭스를 빌드합니다. 아래와 같은 페이로드를 사용하여 리포지토리 디스패치 이벤트를 만들면 매트릭스 `version` 변수가 `[12, 14, 16]` 값을 갖습니다. `repository_dispatch` 트리거에 대한 자세한 내용은 “[워크플로를 트리거하는 이벤트](/actions/using-workflows/events-that-trigger-workflows#repository_dispatch)”를 참조하세요.

```json
{
  "event_type": "test",
  "client_payload": {
    "versions": [12, 14, 16]
  }
}
```

```yaml
on:
  repository_dispatch:
    types:
      - test
 
jobs:
  example_matrix:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        version: {% raw %}${{ github.event.client_payload.versions }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
