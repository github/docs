---
ms.openlocfilehash: a38aec9a1becf4c15877b2d3057d413b6d609f6c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880190"
---
매트릭스에 정의된 특정 구성을 제거하려면 `jobs.<job_id>.strategy.matrix.exclude`를 사용합니다. 제외된 구성은 제외되려면 부분 일치여야 합니다. 예를 들어 다음 워크플로는 9개의 작업을 실행합니다. 12개 구성 각각에 대해 하나의 작업에서 `{os: macos-latest, version: 12, environment: production}`과 일치하는 제외된 작업 하나와 `{os: windows-latest, version: 16}`과 일치하는 제외된 작업 2개를 뺀 값입니다.

```yaml
strategy:
  matrix:
    os: [macos-latest, windows-latest]
    version: [12, 14, 16]
    environment: [staging, production]
    exclude:
      - os: macos-latest
        version: 12
        environment: production
      - os: windows-latest
        version: 16
runs-on: {% raw %}${{ matrix.os }}{% endraw %}
```

{% note %}

**참고:** 모든 `include` 조합은 `exclude` 다음에 처리됩니다. `include`를 사용하여 이전에 제외된 조합을 다시 추가하는 데 사용할 수 있습니다.

{% endnote %}
