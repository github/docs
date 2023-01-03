---
title: 끌어오기 요청에서 종속성 변경 검토
intro: 끌어오기 요청에 종속성 변경 내용이 포함된 경우 변경된 내용 및 종속성에 알려진 취약성이 있는지 여부에 대한 요약을 볼 수 있습니다.
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
shortTitle: Review dependency changes
ms.openlocfilehash: 34cefbae8b7ccfd32773a47de2509a6eccc7a799
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106607'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

## 종속성 검토 정보

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %} 프라이빗 리포지토리에서 종속성 검토를 사용하려면 먼저 종속성 그래프를 사용하도록 설정해야 합니다. 자세한 내용은 “[리포지토리의 종속성 탐색](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”을 참조하세요.{% endif %}

{% ifversion ghes %} 종속성 검토를 사용하려면 먼저 종속성 그래프를 사용하도록 설정하고 {% data variables.location.product_location %}를 {% data variables.product.prodname_dotcom_the_website %}에 연결해야 합니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}에서 취약한 종속성에 대한 경고 사용](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”을 참조하세요.{% endif %}

종속성 검토를 사용하면 “왼쪽으로 이동”할 수 있습니다. 제공된 예측 정보를 사용하여 프로덕션에 도달하기 전에 취약한 종속성을 파악할 수 있습니다. 자세한 내용은 “[종속성 검토 정보](/code-security/supply-chain-security/about-dependency-review)”를 참조하세요.

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}

{% data variables.product.prodname_dependency_review_action %}을 사용하여 리포지토리의 끌어오기 요청에 대한 종속성 검토를 적용할 수 있습니다. {% data reusables.dependency-review.dependency-review-action-overview %}

catch하려는 종속성 취약성 유형을 지정하여 요구 사항에 더 잘 맞도록 {% ifversion dependency-review-action-configuration %} {% data variables.product.prodname_dependency_review_action %}을 구성할 수 있습니다. 자세한 내용은 "[종속성 검토 구성](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)"을 참조하세요. {% endif %}

{% endif %}
## 끌어오기 요청에서 종속성 검토

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}

1. 끌어오기 요청에 많은 파일이 포함된 경우 **파일 필터** 드롭다운 메뉴를 사용하여 종속성을 기록하지 않는 모든 파일을 축소합니다. 이렇게 하면 종속성 변경 내용에 대한 검토에 더 쉽게 집중할 수 있습니다.

   ![파일 필터 메뉴](/assets/images/help/pull_requests/file-filter-menu-json.png) 종속성 검토를 사용하면 기본적으로 원본 차이가 렌더링되지 않는 큰 잠금 파일에서 변경된 내용을 좀 더 명확하게 볼 수 있습니다.

  {% note %}

   **참고:** 종속성 검토 서식 있는 차이는 커밋된 정적 JavaScript 파일(예: `jquery.js`)에 사용할 수 없습니다.

   {% endnote %}

1. 매니페스트 또는 잠금 파일의 헤더 오른쪽에서 **{% octicon "file" aria-label="The rich diff icon" %}** 서식 있는 차이 단추를 클릭하여 종속성 검토를 표시합니다.

   ![서식 있는 차이 단추](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. 종속성 검토에 나열된 종속성을 확인합니다.

   ![종속성 검토의 취약성 경고](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   취약성이 있는 추가되거나 변경된 종속성은 먼저 심각도에 따라 정렬된 다음 종속성 이름순으로 나열됩니다. 즉, 가장 높은 심각도 종속성은 항상 종속성 검토의 맨 위에 있습니다. 다른 종속성은 종속성 이름에 따라 사전순으로 나열됩니다.

   각 종속성 옆에 있는 아이콘은 이 끌어오기 요청에서 종속성이 추가되었는지(<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), 업데이트되었는지(<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>), 제거되었는지(<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>)를 나타냅니다.

   기타 정보는 다음과 같습니다.

   * 새 종속성, 업데이트된 종속성, 삭제된 종속성의 버전 또는 버전 범위.
   * 종속성의 특정 버전의 경우:
      * 종속성 릴리스의 기간.
      * 이 소프트웨어에 종속된 프로젝트의 수. 이 정보는 종속성 그래프에서 가져옵니다. 종속성의 수를 확인하면 실수로 잘못된 종속성을 추가하는 것을 방지할 수 있습니다.
      * 이 정보를 사용할 수 있는 경우 이 종속성에서 사용하는 라이선스. 이 기능은 특정 라이선스가 있는 코드가 프로젝트에서 사용되는 것을 방지하려는 경우에 유용합니다.

   종속성에 알려진 취약성이 있는 경우 경고 메시지에는 다음이 포함됩니다.

   * 취약성에 대한 간략한 설명.
   * CVE(Common Vulnerabilities and Exposures) 또는 GHSA({% data variables.product.prodname_security_advisories %}) ID 번호. 이 ID를 클릭하여 취약성에 대해 자세히 알아볼 수 있습니다.
   * 취약성의 심각도.
   * 취약성이 수정된 종속성의 버전. 다른 사용자에 대한 끌어오기 요청을 검토하는 경우 기여자에게 종속성을 패치된 버전 또는 이후 릴리스로 업데이트하도록 요청할 수 있습니다.

{% data reusables.repositories.return-to-source-diff %}
