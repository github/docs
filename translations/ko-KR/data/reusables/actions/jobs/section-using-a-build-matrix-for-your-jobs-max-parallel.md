---
ms.openlocfilehash: 50b42f8e3c703723fc592bf63881c997e88b059c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145114236"
---
기본적으로 {% data variables.product.product_name %}은 실행기 가용성에 따라 병렬로 실행되는 작업 수를 최대화합니다. `matrix` 작업 전략을 사용할 때 동시에 실행할 수 있는 최대 작업 수를 설정하려면 `jobs.<job_id>.strategy.max-parallel`을 사용하세요.

예를 들어 다음 워크플로는 한 번에 6개의 작업을 모두 실행할 수 있는 실행자가 있더라도 한 번에 최대 두 개의 작업만 실행합니다.

```yaml
jobs:
  example_matrix:
    strategy:
      max-parallel: 2
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
