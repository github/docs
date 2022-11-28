---
title: 종속성 그래프 문제 해결
intro: 종속성 그래프가 보고하는 종속성 정보가 예상과 다른 경우 여러 가지 고려해야 할 사항과 확인할 수 있는 사항이 있습니다.
shortTitle: Troubleshoot dependency graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
  - Errors
  - Dependencies
  - Vulnerabilities
  - Dependency graph
  - CVEs
  - Repositories
ms.openlocfilehash: 30c4830c125e9b20ada59e0e0e29fa0eb5c6c649
ms.sourcegitcommit: a9af58ef52d8d109186053d184d9b1e52e5f0323
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/02/2022
ms.locfileid: '148128906'
---
{% data reusables.dependabot.result-discrepancy %}

## 종속성 그래프는 매니페스트 및 잠금 파일에서만 종속성을 찾나요?

종속성 그래프에는 사용자 환경에서 명시적으로 선언된 종속성에 대한 정보가 {% ifversion dependency-submission-api %}자동으로{% endif %} 포함됩니다. 즉, 매니페스트 또는 잠금 파일에 지정된 종속성입니다. 종속성 그래프는 일반적으로 매니페스트 파일에서 종속성의 종속성을 확인하여 전이적 종속성이 잠금 파일에 지정되지 않은 경우에도 포함합니다.

종속성 그래프는 “느슨한” 종속성을 {% ifversion dependency-submission-api %}자동으로{% endif %} 포함하지 않습니다. “느슨한” 종속성은 패키지 관리자의 매니페스트 또는 잠금 파일에서 참조되는 것이 아니라 다른 원본에서 복사하여 리포지토리에 직접 또는 보관 파일(예: ZIP 또는 JAR 파일) 내에 체크인되는 개별 파일입니다. 

{% ifversion dependency-submission-api %}그러나 종속성이 매니페스트 또는 잠금 파일에 선언되지 않은 경우에도 종속성 제출 API(베타)를 사용하여 프로젝트의 종속성 그래프에 종속성을 추가할 수 있습니다(예: 프로젝트를 빌드할 때 확인된 종속성). 종속성 그래프는 제출된 종속성을 에코시스템별로 그룹화하여 표시하지만 매니페스트 또는 잠금 파일에서 구문 분석된 종속성과는 별도로 표시됩니다. 종속성 제출 API에 대한 자세한 내용은 “[종속성 제출 API 사용](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”을 참조하세요.{% endif %}

**확인**: 리포지토리의 매니페스트 또는 잠금 파일에 지정되지 않은 구성 요소에 대해 누락된 종속성인가요?

## 종속성 그래프가 변수를 사용하여 지정된 종속성을 검색하나요?

종속성 그래프는 {% data variables.product.prodname_dotcom %}에 푸시될 때 매니페스트를 분석합니다. 따라서 종속성 그래프는 프로젝트의 빌드 환경에 액세스할 수 없으므로 매니페스트 내에서 사용되는 변수를 확인할 수 없습니다. 매니페스트 내에서 변수를 사용하여 이름 또는 보다 일반적으로 종속성 버전을 지정하는 경우 해당 종속성은 {% ifversion dependency-submission-api %}자동으로{% endif %} 종속성 그래프에 포함되지 않습니다.

{% ifversion dependency-submission-api %}그러나 종속성 제출 API(베타)를 사용하여 프로젝트가 빌드될 때만 종속성이 확인되는 경우에도 종속성을 프로젝트의 종속성 그래프에 추가할 수 있습니다. 종속성 제출 API에 대한 자세한 내용은 “[종속성 제출 API 사용](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”을 참조하세요.{% endif %}

**확인:** 매니페스트에서 이름 또는 버전에 변수를 사용하여 누락된 종속성이 선언되었나요?

## 종속성 그래프 데이터에 영향을 미치는 제한이 있나요?

예, 종속성 그래프에는 두 가지 범주의 제한이 있습니다.

1. **처리 제한**

    처리 제한은 {% data variables.product.prodname_dotcom %} 내에 표시되는 종속성 그래프에 영향을 주고 {% data variables.product.prodname_dependabot_alerts %}가 만들어지는 것을 방지합니다.

    크기가 0.5MB를 넘는 매니페스트는 엔터프라이즈 계정에 대해서만 처리됩니다. 다른 계정의 경우 0.5MB를 넘는 매니페스트는 무시되며 {% data variables.product.prodname_dependabot_alerts %}를 만들지 않습니다.

    기본적으로 {% data variables.product.prodname_dotcom %}은(는) 리포지토리당 {% ifversion fpt %}150{% else %}600{% endif %} 매니페스트를 초과하여 처리되지 않습니다. {% data variables.product.prodname_dependabot_alerts %}는 이 제한을 초과하는 매니페스트에 대해 만들어지지 않습니다. 제한을 늘려야 하는 경우 {% data variables.contact.contact_support %}에 문의하세요. 

2. **시각화 제한**

    시각화 제한은 {% data variables.product.prodname_dotcom %}의 종속성 그래프에 표시되는 내용에 영향을 미칩니다. 그러나 만들어진 {% data variables.product.prodname_dependabot_alerts %}에는 영향을 주지 않습니다.

    리포지토리에 대한 종속성 그래프의 종속성 보기에는 100개의 매니페스트만 표시됩니다. 일반적으로 이 숫자는 위에서 설명한 처리 제한보다 훨씬 높기 때문에 적절합니다. 처리 제한이 100을 초과하는 경우 {% data variables.product.prodname_dotcom %} 내에 표시되지 않는 매니페스트에 대해 {% data variables.product.prodname_dependabot_alerts %}가 여전히 만들어집니다.

**확인:** 0.5MB를 초과하는 매니페스트 파일 또는 매니페스트 수가 많은 리포지토리에서 누락된 종속성인가요?

## 추가 참고 자료

- “[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”
- “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”
- "[취약한 종속성 검색 문제 해결](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes %}
- “[{% data variables.product.prodname_dependabot %} 오류 문제 해결](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)”{% endif %}
