---
ms.openlocfilehash: ec6ab3ed5541819ee7578b34ce61fc11de31b51f
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120918"
---

{% ifversion target-runner-groups %} {% ifversion ghec or ghae or ghes %}
## 실행기 그룹에 고유한 이름 사용

{% data variables.product.prodname_actions %}을(를) 사용하려면 실행기 그룹 이름이 조직 수준에서 고유해야 합니다. 즉, 조직은 더 이상 엔터프라이즈의 이름과 동일한 실행기 그룹을 만들 수 없습니다. 또한 엔터프라이즈의 그룹과 동일한 이름을 공유하는 실행기 그룹에 경고 배너가 표시되어 조직 그룹의 이름을 바꿔야 합니다.

모호성을 방지하기 위해 조직 및 엔터프라이즈에 중복 실행기 그룹이 있는 경우 워크플로가 실패합니다. 이 문제를 해결하려면 조직 또는 엔터프라이즈에서 실행기 그룹 중 하나의 이름을 바꾸거나 워크플로 파일을 업데이트하여 실행기 그룹 이름에 접두사를 추가할 수 있습니다.

- `org/` 또는 `organization/`
- `ent/` 또는 `enterprise/`

### 예: 접두사를 사용하여 실행기 그룹 구분

예를 들어 조직에서 라는 실행기 그룹과 엔터프라이즈에 이름이 `my-group` 다른 `my-group` 실행기 그룹이 있는 경우 워크플로 파일을 업데이트하여 두 그룹을 사용 `org/my-group` 하거나 `ent/my-group` 구분할 수 있습니다.

`org/`사용:

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

`ent/`사용:

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```

{% endif %}

{% endif %}
