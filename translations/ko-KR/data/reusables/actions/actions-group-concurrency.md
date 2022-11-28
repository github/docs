---
ms.openlocfilehash: a0c8b24bacdd41e32d9b8bdd0d8850e7a6ada557
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114751"
---
동시 작업 또는 워크플로가 큐에 대기 중인 경우 리포지토리의 동일한 동시성 그룹을 사용하는 다른 작업 또는 워크플로가 진행 중이면 대기 중인 작업 또는 워크플로는 `pending` 상태가 됩니다. 동시성 그룹에서 이전에 보류 중인 작업 또는 워크플로는 모두 취소됩니다. 동일한 동시성 그룹에서 현재 실행 중인 작업 또는 워크플로도 취소하려면 `cancel-in-progress: true`를 지정합니다.

### 예: 동시성 및 기본 동작 사용

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

### 예: 동시성을 사용하여 진행 중인 작업 또는 실행 취소

{% raw %}
```yaml
concurrency: 
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### 예: 대체 값 사용

특정 이벤트에 대해서만 정의되는 속성으로 그룹 이름을 빌드하는 경우 대체 값을 사용할 수 있습니다. 예를 들어 `github.head_ref`는 `pull_request` 이벤트에서만 정의됩니다. 워크플로가 `pull_request` 이벤트 외에 다른 이벤트에도 응답하는 경우 구문 오류를 방지하기 위해 대체를 제공해야 합니다. 다음 동시성 그룹은 `pull_request` 이벤트에서만 진행 중인 작업 또는 실행을 취소합니다. `github.head_ref`가 정의되지 않은 경우 동시성 그룹은 실행에 고유하고 정의된 실행 ID로 대체됩니다.

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### 예: 현재 워크플로에 대해서만 진행 중인 작업 또는 실행 취소

 동일한 리포지토리에 여러 워크플로가 있는 경우 다른 워크플로에서 진행 중인 작업 또는 실행이 취소되지 않도록 워크플로 전체에서 동시성 그룹 이름이 고유해야 합니다. 그렇지 않으면 워크플로에 관계없이 이전에 진행 중이거나 보류 중인 작업이 취소됩니다.

동일한 워크플로의 진행 중인 실행만 취소하기 위해 `github.workflow` 속성을 사용하여 동시성 그룹을 빌드할 수 있습니다.

{% raw %}
```yaml
concurrency: 
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

