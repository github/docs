---
ms.openlocfilehash: dae1f0d42b9b0b2e122bfcfc2a096d062efd8ee0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145114188"
---
`jobs.<job_id>.defaults.run`을(를) 사용하여 작업의 모든 `run` 단계에 기본값 `shell` 및 `working-directory`를 제공합니다. 컨텍스트 및 식은 이 섹션에서 허용되지 않습니다.

작업의 모든 [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) 단계에 기본 `shell`및`working-directory` 옵션을 제공할 수 있습니다. 전체 워크플로에 대한 `run`의 기본 설정을 지정할 수도 있습니다. 자세한 내용은 [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun)를 참조하세요. 이 키워드에는 컨텍스트 또는 식을 사용할 수 없습니다.

{% data reusables.actions.defaults-override %}

#### 예: 작업에 대한 기본 `run` 단계 옵션 설정

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
