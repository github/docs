---
ms.openlocfilehash: 9a29d1039a0929c7366eeb4624e1fb6fb8a2e4f9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147529338"
---
여러 변수를 지정하여 다차원 매트릭스를 만들 수 있습니다. 가능한 각 변수 조합에 대해 작업이 실행됩니다.

예를 들어 다음 워크플로는 두 개의 변수를 지정합니다.

- `os` 변수에 지정된 운영 체제 2개
- `version` 변수에 지정된 Node.js 버전 3개

워크플로는 `os` 및 `version` 변수의 각 조합에 대해 하나씩 6개의 작업을 실행합니다. 각 작업은 `runs-on` 값을 현재 `os` 값으로 설정하고 현재 `version` 값을 `actions/setup-node` 작업에 전달합니다.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [ubuntu-22.04, ubuntu-20.04]
        version: [10, 12, 14]
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.version }}{% endraw %}
```
