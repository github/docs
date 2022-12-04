---
ms.openlocfilehash: 61eae3ef1bfff1fc27fcfd45a693934155021a2a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089481"
---
`jobs.<job_id>.strategy.fail-fast` 및 `jobs.<job_id>.continue-on-error`로 작업 오류를 처리하는 방법을 제어할 수 있습니다.

`jobs.<job_id>.strategy.fail-fast`는 전체 행렬에 적용됩니다. `jobs.<job_id>.strategy.fail-fast`가 `true`로 설정되면 {% data variables.product.product_name %}는 행렬의 작업이 실패할 경우 행렬의 진행 중인 작업과 대기 중인 작업을 모두 취소합니다. 이 속성은 기본적으로 `true`로 설정됩니다.

`jobs.<job_id>.continue-on-error`는 단일 작업에 적용됩니다. `jobs.<job_id>.continue-on-error`가 `true`인 경우 `jobs.<job_id>.continue-on-error: true`인 작업이 실패하더라도 행렬의 다른 작업은 계속 실행됩니다.

`jobs.<job_id>.strategy.fail-fast` 및 `jobs.<job_id>.continue-on-error`를 함께 사용할 수 있습니다. 예를 들어 다음 워크플로는 4개의 작업을 시작합니다. 각 작업에 대해 `continue-on-error`는 `matrix.experimental` 값으로 결정됩니다. `continue-on-error: false`인 작업이 실패하면 진행 중이거나 큐에 대기 중인 모든 작업이 취소됩니다. `continue-on-error: true`인 작업이 실패하면 다른 작업은 영향을 받지 않습니다.


```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    continue-on-error: {% raw %}${{ matrix.experimental }}{% endraw %}
    strategy:
      fail-fast: true
      matrix:
        version: [6, 7, 8]
        experimental: [false]
        include:
          - version: 9
            experimental: true
```
