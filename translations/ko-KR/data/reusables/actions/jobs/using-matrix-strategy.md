---
ms.openlocfilehash: 02f279903abd69f50ad55aa88462c9c8e4b9a1a8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091343"
---
`jobs.<job_id>.strategy.matrix`를 사용하여 다양한 작업 구성 행렬을 정의합니다. 행렬 내에서 하나 이상의 변수와 값 배열을 정의합니다. 예를 들어 다음 행렬에는 값 `[10, 12, 14]`의 `version` 변수와 값 `[ubuntu-latest, windows-latest]`의 `os` 변수가 있습니다.

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

가능한 각 변수 조합에 대해 작업이 실행됩니다. 이 예제에서 워크플로는 `os` 및 `version` 변수의 각 조합에 대해 하나씩 6개의 작업을 실행합니다. 

기본적으로 {% data variables.product.product_name %}는 실행기 가용성에 따라 병렬로 실행되는 작업 수를 최대화합니다. 행렬의 변수 순서에 따라 작업이 생성되는 순서가 결정됩니다. 정의한 첫 번째 변수는 워크플로 실행에서 만든 첫 번째 작업이 됩니다. 예를 들어 위의 행렬은 다음 순서로 작업을 만듭니다.

- `{version: 10, os: ubuntu-latest}`
- `{version: 10, os: windows-latest}`
- `{version: 12, os: ubuntu-latest}`
- `{version: 12, os: windows-latest}`
- `{version: 14, os: ubuntu-latest}`
- `{version: 14, os: windows-latest}`

행렬은 워크플로 실행당 최대 256개의 작업을 생성합니다. 이러한 제한은 {% data variables.product.product_name %} 호스팅 및 자체 호스팅 실행기 둘 다에 적용됩니다.

정의하는 변수는 `matrix` 컨텍스트의 속성이 되며 워크플로 파일의 다른 영역에서 속성을 참조할 수 있습니다. 이 예제에서는 `matrix.version` 및 `matrix.os`를 사용하여 작업에서 사용 중인 `version` 및 `os`의 현재 값에 액세스할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.
