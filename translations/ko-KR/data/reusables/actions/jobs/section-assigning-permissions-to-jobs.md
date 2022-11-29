---
ms.openlocfilehash: 92ca4fc15d763b82d057c350d787ff97522a2768
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068215"
---
`permissions`를 사용하여 `GITHUB_TOKEN`에 부여된 기본 사용 권한을 수정하면 필요에 따라 액세스를 추가하거나 제거하여 필요한 최소 액세스만 허용할 수 있습니다. 자세한 내용은 “[워크플로의 인증](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”을 참조하세요.

`permissions`를 최상위 키로 사용하거나, 워크플로의 모든 작업에 적용하거나, 특정 작업 내에서 적용할 수 있습니다. 특정 작업 내에 `permissions` 키를 추가하면 `GITHUB_TOKEN`을 사용하는 해당 작업 내의 모든 동작 및 실행 명령이 지정한 액세스 권한을 얻게 됩니다.  자세한 내용은 [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions)를 참조하세요.

{% data reusables.actions.github-token-available-permissions %} {% data reusables.actions.forked-write-permission %}

### 예: GITHUB_TOKEN에 권한 할당

이 예제에서는 워크플로의 모든 작업에 적용되는 `GITHUB_TOKEN`에 대해 설정되는 사용 권한을 보여 줍니다. 모든 권한에는 읽기 액세스 권한이 부여됩니다.

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
