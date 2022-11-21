---
ms.openlocfilehash: 7013bd204f8af1a27bbba837fda49eb7fbfe779b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089502"
---
특정 작업의 경우 `jobs.<job_id>.permissions`를 사용하여 `GITHUB_TOKEN`에 부여된 기본 사용 권한을 수정하면 필요에 따라 액세스를 추가하거나 제거하여 필요한 최소 액세스만 허용할 수 있습니다. 자세한 내용은 “[워크플로의 인증](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”을 참조하세요.

작업 정의 내에서 사용 권한을 지정하여 필요한 경우 각 작업의 `GITHUB_TOKEN`에 대해 다른 사용 권한 집합을 구성할 수 있습니다. 또는 워크플로의 모든 작업에 대한 사용 권한을 지정할 수 있습니다. 워크플로 수준에서 사용 권한을 정의하는 방법에 대한 자세한 내용은 [`permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#permissions)를 참조하세요.

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

#### 예: 특정 작업에 대한 사용 권한 설정

이 예제에서는 이름이 `stale`로 지정된 작업에만 적용되는 `GITHUB_TOKEN`에 대해 설명되는 사용 권한을 보여 줍니다. `issues` 및 `pull-requests` 범위에 대한 쓰기 권한이 부여됩니다. 다른 모든 범위에는 액세스할 수 없습니다.

```yaml
jobs:
  stale:
    runs-on: ubuntu-latest

    permissions:
      issues: write
      pull-requests: write

    steps:
      - uses: {% data reusables.actions.action-stale %}
```
