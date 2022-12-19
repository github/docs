---
ms.openlocfilehash: 0e043c5b9b4163a5d2c900188b5b98faeccfa786
ms.sourcegitcommit: 34a7be5cc8176dea971cbbdea77cbe7a3ff4fa65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: "148009401"
---
명명된 입력을 호출된 워크플로에 전달하려면 작업에서 `with` 키워드를 사용합니다. 명명된 비밀을 전달하려면 `secrets` 키워드를 사용합니다. 입력의 경우 입력 값의 데이터 형식은 호출된 워크플로에 지정된 형식(부울, 숫자 또는 문자열)과 일치해야 합니다.

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      envPAT: ${{ secrets.envPAT }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %} 동일한 조직 또는 엔터프라이즈에서 재사용 가능한 워크플로를 호출하는 워크플로는 `inherit` 키워드를 사용하여 비밀을 암시적으로 전달할 수 있습니다.

{% raw %}
```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      config-path: .github/labeler.yml
    secrets: inherit
```
{% endraw %}

{%endif%}
