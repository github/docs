---
ms.openlocfilehash: 00fcbabef5e440a27a495ab562cf7ccc43a7e030
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114175"
---
단일 변수를 지정하여 단일 차원 행렬을 만들 수 있습니다.

예를 들어 다음 워크플로는 값 `[10, 12, 14]`를 사용하여 변수 `version`을 정의합니다. 워크플로는 변수의 각 값에 대해 하나씩 3개의 작업을 실행합니다. 각 작업은 `matrix.version` 컨텍스트를 통해 `version` 값에 액세스하고 해당 값을 `actions/setup-node` 작업에 `node-version`으로 전달합니다.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
