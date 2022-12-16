---
ms.openlocfilehash: dfbf31bbfeea726bcd0c1852d881aefc8f149c0e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160285"
---
필터를 검색 창에 `key:value` 쌍으로 입력하여 {% data variables.product.prodname_dependabot_alerts %}를 정렬하고 필터링할 수 있습니다. 

| 옵션 | 설명 | 예제 | 
|:---|:---|:---|
| `ecosystem` | 선택한 에코시스템에 대한 경고 표시 | `ecosystem:npm`을 사용하여 npm에 대해 {% data variables.product.prodname_dependabot_alerts %} 표시 |{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
| `has` | 선택한 필터 조건을 충족하는 경고를 표시합니다. | `has:patch`를 사용하여 패치가 있는 권고와 관련된 경고 표시{% ifversion dependabot-alerts-vulnerable-calls %}</br>`has:vulnerable-calls`를 사용하여 취약한 함수에 대한 호출과 관련된 경고 표시{% endif %} |{% endif %}
| `is` | 상태에 따라 경고 표시 | `is:open`을 사용하여 미해결 경고 표시 |
| `manifest` | 선택한 매니페스트에 대한 경고 표시 | `manifest:webwolf/pom.xml`을 사용하여 webwolf 애플리케이션의 pom.xml 파일에 경고 표시 |
| `package` | 선택한 패키지에 대한 경고 표시 | `package:django`를 사용하여 django에 대한 경고 표시 |
| `resolution` | 선택한 해결 상태의 경고 표시 | `resolution:no-bandwidth`를 사용하여 리소스 부족으로 인해 이전에 대기된 경고 또는 수정 시간 표시 |
| `repo` |  관련된 리포지토리에 따라 경고 표시</br>이 필터는 보안 개요에서만 사용할 수 있습니다. 자세한 내용은 "[보안 개요 정보"를 참조하세요.](/code-security/security-overview/about-the-security-overview) | `repo:octocat-repo`를 사용하여 리포지토리에서 호출한 `octocat-repo`에 경고 표시 |{%- ifversion dependabot-alerts-development-label %}
| `scope` | 관련 종속성의 범위에 따라 경고 표시 | `scope:development`를 사용하여 개발 중에만 사용되는 종속성에 대한 경고 표시 |{% endif %}
| `severity` | 심각도 수준에 따라 경고 표시 | `severity:high`를 사용하여 심각도가 높은 경고 표시 |{%- ifversion dependabot-most-important-sort-option %}
| `sort` | 선택한 정렬 순서에 따라 경고 표시 | 경고에 대한 기본 정렬 옵션은 중요도에 따라 경고의 순위를 지정하는 `sort:most-important`임</br>`sort:newest`를 사용하여 {% data variables.product.prodname_dependabot %}에서 보고하는 최신 경고 표시 |{% endif %}
