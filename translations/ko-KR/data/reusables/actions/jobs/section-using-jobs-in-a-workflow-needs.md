---
ms.openlocfilehash: ec9ff0fb1eb8f9fd06d4da13716b3e8e31a758e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145883579"
---
이 작업이 실행되기 전에 완료해야 하는 작업을 식별하는 데 `jobs.<job_id>.needs`를 사용합니다. 문자열 또는 문자열 배열일 수 있습니다. 작업이 실패하면 작업이 계속되도록 하는 조건식을 사용하지 않는 한 작업이 필요한 모든 작업을 건너뜁니다. 실행에 서로 필요한 일련의 작업이 포함된 경우 오류 지점부터 종속성 체인의 모든 작업에 오류가 적용됩니다.

#### 예: 성공적인 종속 작업 요구 

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

이 예제에서 `job1`은 `job2`가 시작되기 전에 성공적으로 완료해야 하며 `job3`은 `job1` 및 `job2` 모두 완료되기를 기다립니다.

이 예제의 작업은 순차적으로 실행됩니다.

1. `job1`
2. `job2`
3. `job3`

#### 예: 성공적인 종속 작업이 필요하지 않음

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

이 예제에서 `job3`은 `always()` 조건식을 사용하여 성공 여부에 관계없이 `job1` 및 `job2`가 완료된 후에 항상 실행되도록 합니다. 자세한 내용은 “[언어 식](/actions/learn-github-actions/expressions#status-check-functions)”을 참조하세요.
