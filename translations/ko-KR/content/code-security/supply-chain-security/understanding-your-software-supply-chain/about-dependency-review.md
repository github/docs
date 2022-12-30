---
title: 종속성 검토 정보
intro: '종속성 검토를 사용하면 환경에 도입하기 전에 안전하지 않은 종속성을 파악할 수 있으며 라이선스, 종속 항목 및 종속성 연령에 대한 정보를 제공합니다.'
product: '{% data reusables.gated-features.dependency-review %}'
shortTitle: Dependency review
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
redirect_from:
  - /code-security/supply-chain-security/about-dependency-review
ms.openlocfilehash: 36a80324e75f6ffbe96a2b46016d56561da931f0
ms.sourcegitcommit: 73b91dd4cdf592eadec4252319379d6fbe92858e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164116'
---
## 종속성 검토 정보

{% data reusables.dependency-review.feature-overview %}  

끌어오기 요청이 리포지토리의 기본 분기를 대상으로 하고 패키지 매니페스트 또는 잠금 파일에 대한 변경 내용을 포함하는 경우 종속성 검토를 표시하여 변경된 내용을 확인할 수 있습니다. 종속성 검토에는 잠금 파일의 간접 종속성에 대한 변경 내용 세부 정보가 포함되며, 추가되거나 업데이트된 종속성 중 알려진 취약성이 포함되어 있는지 여부를 알려줍니다.

경우에 따라 매니페스트에서 하나의 종속성 버전을 업데이트하고 끌어오기 요청을 생성하려고 할 수 있습니다. 그러나 업데이트된 이 직접 종속성 버전에도 업데이트된 종속성이 있는 경우 끌어오기 요청에 예상보다 많은 변경 내용이 있을 수 있습니다. 각 매니페스트 및 잠금 파일에 대한 종속성 검토는 변경된 내용과 새 종속성 버전에 알려진 취약성이 포함되어 있는지 여부를 쉽게 확인할 수 있는 방법을 제공합니다.

끌어오기 요청에서 종속성 검토를 확인하고 취약한 것으로 플래그가 지정된 종속성을 변경하면 취약성이 프로젝트에 추가되는 것을 방지할 수 있습니다. 종속성 검토의 작동 방식에 대한 자세한 내용은 “[끌어오기 요청에서 종속성 변경 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”를 참조하세요.

종속성 검토를 구성하는 방법에 대한 자세한 내용은 "[종속성 검토 구성](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review)"을 참조하세요.

{% data variables.product.prodname_dependabot_alerts %}는 종속성에 이미 있는 취약성을 발견하지만, 나중에 문제를 해결하는 것보다 잠재적인 문제가 발생하지 않도록 하는 것이 훨씬 낫습니다. {% data variables.product.prodname_dependabot_alerts %}에 대한 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”를 참조하세요.

종속성 검토는 종속성 그래프와 동일한 언어 및 패키지 관리 에코시스템을 지원합니다. 자세한 내용은 “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”를 참조하세요.

{% data variables.product.product_name %}에서 사용할 수 있는 공급망 기능에 대한 자세한 내용은 "[공급망 보안 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)"를 참조하세요.

{% ifversion ghec or ghes %}
## 종속성 검토 사용

종속성 그래프를 사용하도록 설정하면 종속성 검토 기능을 사용할 수 있게 됩니다. 자세한 내용은 “{% ifversion ghec %}[종속성 그래프 사용](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#enabling-the-dependency-graph){% elsif ghes %}[엔터프라이즈에 대해 종속성 그래프 사용](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% endif %}”을 참조하세요.
{% endif %}

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
## 종속성 검토 적용

이 작업은 모든 {% ifversion fpt or ghec %}퍼블릭 리포지토리뿐만 아니라 {% data variables.product.prodname_GH_advanced_security %}가 활성화된 프라이빗 {% endif %}리포지토리에도 사용할 수 있습니다.

{% data reusables.dependency-review.action-enterprise %}

리포지토리에서 {% data variables.product.prodname_dependency_review_action %}을 사용하여 끌어오기 요청에 대한 종속성 검토를 적용할 수 있습니다. 이 작업은 끌어오기 요청의 패키지 버전 변경에 의해 도입된 취약한 종속성 버전을 검사하고 관련 보안 취약성에 대해 경고합니다. 이를 통해 끌어오기 요청의 변경 내용을 보다 잘 파악할 수 있으며 취약성이 리포지토리에 추가되지 않도록 방지할 수 있습니다. 자세한 내용은 [`dependency-review-action`](https://github.com/actions/dependency-review-action)를 참조하세요.

![종속성 검토 작업 예제](/assets/images/help/graphs/dependency-review-action.png)

기본적으로 {% data variables.product.prodname_dependency_review_action %} 검사는 취약한 패키지를 검색하는 경우 실패합니다. 리포지토리 소유자가 종속성 검토 검사를 통과해야 하는 경우 실패한 검사는 끌어오기 요청이 병합되지 않도록 차단합니다. 자세한 내용은 “[보호된 분기 정보](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#require-status-checks-before-merging)”를 참조하세요.

이 작업은 종속성 검토 REST API를 사용하여 기본 커밋과 헤드 커밋 간의 종속성 변경의 차이를 가져옵니다. 종속성 검토 API를 사용하여 리포지토리의 두 커밋 간에 취약성 데이터를 비롯한 종속성 변경의 차이를 가져올 수 있습니다. 자세한 내용은 “[종속성 검토](/rest/reference/dependency-graph#dependency-review)”를 참조하세요.

{% ifversion dependency-review-action-configuration %} 요구 사항에 맞게 {% data variables.product.prodname_dependency_review_action %}을 구성할 수 있습니다. 예를 들어 작업이 실패할 심각도 수준을 지정하거나 {% ifversion dependency-review-action-licenses %}라이선스가 검사할 허용 또는 거부 목록을 설정할 수 있습니다{% endif %}. 자세한 내용은 "[종속성 검토 구성](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action)"을 참조하세요. {% endif %}

{% endif %}

