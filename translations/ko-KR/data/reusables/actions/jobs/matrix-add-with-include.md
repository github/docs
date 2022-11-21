---
ms.openlocfilehash: d0e9408a29307848c49c9d0889c96b054e1d1222
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062164"
---
예를 들어 이 매트릭스는 매트릭스의 `os` 및 `version` 각 조합에 대해 하나씩 10개의 작업과 `windows-latest`의 `os` 값과 `17`의 `version` 값에 대한 작업을 실행합니다.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        os: [macos-latest, windows-latest, ubuntu-latest]
        version: [12, 14, 16]
        include:
          - os: windows-latest
            version: 17
```

매트릭스 변수를 지정하지 않으면 `include` 아래의 모든 구성이 실행됩니다. 예를 들어 다음 워크플로는 각 `include` 항목에 대해 하나씩 두 개의 작업을 실행합니다. 이렇게 하면 완전히 채워진 매트릭스 없이 매트릭스 전략을 활용할 수 있습니다.

```yaml
jobs:
  includes_only:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        include:
          - site: "production"
            datacenter: "site-a"
          - site: "staging"
            datacenter: "site-b"

```
