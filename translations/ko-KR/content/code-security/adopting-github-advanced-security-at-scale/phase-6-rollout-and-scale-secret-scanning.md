---
title: '6단계: 비밀 검사 롤아웃 및 크기 조정'
intro: '마지막 단계에서는 {% data variables.product.prodname_secret_scanning %}의 롤아웃에 집중합니다. {% data variables.product.prodname_secret_scanning_caps %}는 구성이 적기 때문에 {% data variables.product.prodname_code_scanning %}보다 더 간단한 롤아웃 도구이지만 새 결과와 이전 결과를 처리하기 위한 전략을 갖는 것이 중요합니다.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 6. Rollout secret scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 15254d9a4d490f6eeff566cd71d94da7c6e8c467
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158759'
---
{% note %}

이 문서는 대규모 {% data variables.product.prodname_GH_advanced_security %}를 채택하는 시리즈의 일부입니다. 이 시리즈의 이전 문서는 “[5단계: 코드 검사 롤아웃 및 크기 조정](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning)”을 참조하세요.

{% endnote %}

개별 리포지토리 또는 조직의 모든 리포지토리에 대해 비밀 검사를 사용하도록 설정할 수 있습니다. 자세한 내용은 “[리포지토리의 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)” 또는 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”를 참조하세요.

이 문서에서는 조직의 모든 리포지토리에 대해 {% data variables.product.prodname_secret_scanning %}를 사용하도록 설정하는 데 중점을 둔 개략적인 프로세스를 설명합니다. 이 문서에서 설명하는 원칙은 개별 리포지토리에 대해 {% data variables.product.prodname_secret_scanning %}를 사용하도록 설정하는 보다 시차를 두는 접근 방식을 사용하더라도 계속 적용할 수 있습니다. 

### 1. 새로 커밋된 비밀에 집중

{% data variables.product.prodname_secret_scanning %}를 사용하도록 설정하면 비밀 검사를 통해 검색된 새로 커밋된 자격 증명을 수정하는 데 집중해야 합니다. 커밋된 자격 증명을 정리하는 데 집중하는 경우 개발자는 실수로 새 자격 증명을 계속 푸시할 수 있습니다. 즉, 총 비밀 수는 의도한 대로 감소하지 않고 동일한 수준으로 유지됩니다. 따라서 현재 비밀을 취소하는 데 집중하기 전에 새 자격 증명이 유출되지 않도록 해야 합니다.

새로 커밋된 자격 증명을 해결하기 위한 몇 가지 방법이 있지만 그 중 한 가지 예시 접근 방식은 다음과 같습니다.

1. **알림**: 웹후크를 사용하여 올바른 팀에서 새 비밀 경고를 가능한 한 빨리 볼 수 있도록 합니다. 비밀 경고를 만들거나 해결하거나 다시 열면 웹후크가 발생합니다. 그런 다음 웹후크 페이로드를 구문 분석하여 Slack, Teams, Splunk 또는 메일과 같은 사용자와 팀이 사용하는 모든 도구에 통합할 수 있습니다. 자세한 내용은 “[웹후크 정보](/developers/webhooks-and-events/webhooks/about-webhooks)” 및 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert)”를 참조하세요.
2. **후속 작업**: 모든 비밀 형식에 대해 작동하는 개략적인 수정 프로세스를 만듭니다. 예를 들어 해당 프로젝트에서 비밀 및 기술 책임자를 커밋한 개발자에게 연락하여 GitHub에 비밀을 커밋하는 위험을 강조 표시한 후 이를 철회하고 검색된 비밀을 업데이트하도록 요청할 수 있습니다.

  {% note %}
  
  **참고:** 이 단계는 자동화할 수 있습니다. 수백 개의 리포지토리가 있는 대기업 및 조직의 경우 수동으로 후속 작업을 지속할 수 없습니다. 첫 번째 단계에서 정의된 웹후크 프로세스에 자동화를 통합할 수 있습니다. 웹후크 페이로드에는 유출된 비밀에 대한 리포지토리 및 조직 정보가 포함됩니다. 이 정보를 사용하여 현재 리포지토리 유지 관리자에게 문의하고 담당자에게 메일/메시지를 보내거나 문제를 제기할 수 있습니다.
  
  {% endnote %} 
3. **교육**: 비밀을 커밋한 개발자에게 할당된 내부 교육 문서를 만듭니다. 이 교육 문서에서는 비밀을 커밋하여 발생하는 위험을 설명하고 개발 시 비밀을 안전하게 사용하는 방법에 대한 모범 사례 정보로 안내할 수 있습니다. 개발자가 경험에서 학습하지 않고 비밀을 계속 커밋하는 경우 에스컬레이션 프로세스를 만들 수 있지만 보통 교육으로도 충분합니다.

유출된 새 비밀에 대해 마지막 두 단계를 반복합니다. 이 프로세스를 통해 개발자는 코드에 사용된 비밀을 안전하게 관리할 책임이 있으며 새로 커밋된 비밀의 감소를 측정할 수 있습니다.

{% note %}

**참고:** 고급 조직에서는 특정 유형의 비밀에 대한 자동 수정을 수행할 수 있습니다. AWS, Azure 또는 GCP 환경에 배포하고 가장 중요한 것으로 정의한 내용에 따라 특정 유형의 비밀을 자동으로 철회하도록 조정하는 [GitHub 비밀 스캐너 자동 수정자](https://github.com/NickLiffen/GSSAR)라는 오픈 소스 이니셔티브가 있습니다. 이것은 또한 더 자동화된 접근 방식으로 커밋되는 새로운 비밀에 대응할 수 있는 훌륭한 방법입니다.

{% endnote %}

### 2. 가장 중요한 것부터 시작하여 이전에 커밋된 비밀 수정

새로 게시된 비밀을 모니터링, 알림 및 수정하는 프로세스를 설정한 후에는 {% data variables.product.prodname_GH_advanced_security %}가 도입되기 전에 커밋된 비밀에 대한 작업을 시작할 수 있습니다.

가장 중요한 비밀을 정의하는 방법은 조직의 프로세스 및 통합에 따라 달라집니다. 예를 들어, 회사에서 Slack을 사용하지 않는 경우 들어오는 Slack 웹후크 비밀에 대해 걱정하지 않을 수 있습니다. 조직에서 가장 중요한 상위 5가지 자격 증명 유형에 집중하여 시작하는 것이 유용할 수 있습니다.

비밀 유형을 결정했으면 다음을 수행할 수 있습니다.

1. 각 비밀 유형을 수정하는 프로세스를 정의합니다. 각 비밀 유형에 대한 실제 프로시저가 크게 다른 경우도 있습니다. 문서 또는 내부 기술 자료의 각 비밀 유형에 대한 프로세스를 적어 둡니다.
  
  {% note %}
  
  **참고:** 비밀을 해지하는 프로세스를 만들 때는 중앙 팀 대신 리포지토리를 유지 관리하는 팀에 비밀을 해지할 책임을 부여합니다. GHAS의 원칙 중 하나는 개발자가 보안 소유권을 가지고 보안 문제를 수정할 책임이 있다는 것입니다(특히 보안 문제를 만든 경우).

  {% endnote %}

2. 팀이 자격 증명을 해지하기 위해 따를 프로세스를 만든 경우 유출된 비밀과 관련된 비밀 유형 및 기타 메타데이터에 대한 정보를 수집하여 새 프로세스를 전달할 사람을 식별할 수 있습니다.
  
  {% ifversion not ghae %}
  
  보안 개요를 사용하여 이 정보를 수집할 수 있습니다. 보안 개요 사용에 대한 자세한 내용은 "보안 [개요에서 경고 필터링"을 참조하세요.](/code-security/security-overview/filtering-alerts-in-the-security-overview)
  
  {% endif %}
  
  수집할 수 있는 일부 정보에는 다음이 포함됩니다.
  
    - 조직
    - 리포지토리
    - 비밀 형식
    - 비밀 값
    - 연락할 리포지토리의 유지 관리자
  
  {% note %}
  
  **참고:** 해당 형식의 비밀이 유출된 경우 UI를 사용합니다. 수백 개의 유출된 비밀이 있는 경우 API를 사용하여 정보를 수집합니다. 자세한 내용은 “[비밀 검사 REST API](/rest/reference/secret-scanning)”를 참조하세요.
    
  {% endnote %}

3. 유출된 비밀에 대한 정보를 수집한 후 각 비밀 유형의 영향을 받는 리포지토리를 유지 관리하는 사용자를 위한 대상 통신 계획을 만듭니다. 영향을 받는 리포지토리에서 메일, 메시징을 사용하거나 GitHub 문제를 만들 수도 있습니다. 이러한 도구에서 제공하는 API를 사용하여 자동화된 방식으로 통신을 보낼 수 있는 경우 이렇게 하면 여러 비밀 형식으로 쉽게 확장할 수 있습니다.

### 3. 더 많은 비밀 형식 및 사용자 지정 패턴을 포함하도록 프로그램 확장

이제 가장 중요한 5가지 비밀 유형을 넘어 보다 포괄적인 목록으로 확장할 수 있으며, 교육에 더 초점을 맞출 수 있습니다. 이전에 커밋된 비밀을 대상이 되는 다양한 비밀 형식에 대해 수정하여 이전 단계를 반복할 수 있습니다.

또한 이전 단계에서 수집된 사용자 지정 패턴을 더 많이 포함하고 보안 및 개발자 팀이 더 많은 패턴을 제출하도록 요청하여 새 비밀 형식이 만들어짐에 따라 새 패턴을 제출하는 프로세스를 설정할 수 있습니다. 자세한 내용은 “[비밀 검사를 위한 사용자 지정 패턴 정의](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)”를 참조하세요.

{% ifversion secret-scanning-push-protection %}

비밀 검사를 통해 푸시 보호를 사용하도록 설정할 수도 있습니다. 사용하도록 설정되면 비밀 검사에서 신뢰도가 높은 비밀을 푸시하고 푸시를 차단합니다. 자세한 내용은 “[비밀 검사를 사용하여 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#using-secret-scanning-as-a-push-protection-from-the-command-line)”를 참조하세요.

{% endif %}

다른 비밀 유형에 대한 수정 프로세스를 계속 빌드하는 동안 조직의 모든 GitHub 개발자와 공유할 수 있는 사전 교육 자료를 만들기 시작합니다. 지금까지는 많은 초점을 대응에 맞추었습니다. 사전 대응으로 초점을 전환하고 개발자가 처음에 GitHub에 자격 증명을 푸시하지 않도록 하는 것이 좋습니다. 여러 가지 방법으로 이 작업을 수행할 수 있지만 위험과 이유를 설명하는 짧은 문서를 만드는 것이 좋은 시작이 될 것입니다.

{% note %}

{% data variables.product.prodname_GH_advanced_security %}를 대규모로 채택하는 시리즈의 마지막 문서입니다. 질문이 있거나 지원이 필요한 경우 “[대규모 {% data variables.product.prodname_GH_advanced_security %} 도입 소개](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale#github-support-and-professional-services)”에서 {% data variables.contact.github_support %} 및 {% data variables.product.prodname_professional_services_team %}에 대한 섹션을 참조하세요.

{% endnote %}
