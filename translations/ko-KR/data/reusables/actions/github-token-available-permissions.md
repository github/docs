---
ms.openlocfilehash: 56ed7762c2325d0328bd52ca89fe7879b5ce4601
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089582"
---
사용 가능한 범위 및 액세스 값:

```yaml
permissions:
  actions: read|write|none
  checks: read|write|none
  contents: read|write|none
  deployments: read|write|none{% ifversion fpt or ghec %}
  id-token: read|write|none{% endif %}
  issues: read|write|none
  discussions: read|write|none
  packages: read|write|none
  pages: read|write|none
  pull-requests: read|write|none
  repository-projects: read|write|none
  security-events: read|write|none
  statuses: read|write|none
```

범위에 대한 액세스를 지정하면 지정되지 않은 모든 범위는 `none`으로 설정됩니다.

다음 구문을 사용하여 사용 가능한 모든 범위에 대한 읽기 또는 쓰기 권한을 정의할 수 있습니다.

```yaml
permissions: read-all|write-all
```

다음 구문을 사용하여 사용 가능한 모든 범위에 대한 사용 권한을 사용하지 않도록 설정할 수 있습니다.

```yaml
permissions: {}
```
