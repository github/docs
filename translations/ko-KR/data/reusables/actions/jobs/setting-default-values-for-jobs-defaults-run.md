---
ms.openlocfilehash: 95ea94c1f81a3b586d60d96dbd5a882dcdbe89fc
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114183"
---
`defaults.run`을 사용하여 워크플로의 모든 [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) 단계에 기본 `shell` 및 `working-directory` 옵션을 제공할 수 있습니다. 작업에만 사용할 수 있는 `run`에 대한 기본 설정을 지정할 수도 있습니다. 자세한 내용은 [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun)를 참조하세요. 이 키워드에는 컨텍스트 또는 식을 사용할 수 없습니다.

{% data reusables.actions.defaults-override %}

#### 예: 기본 셸 및 작업 디렉터리 설정

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```
