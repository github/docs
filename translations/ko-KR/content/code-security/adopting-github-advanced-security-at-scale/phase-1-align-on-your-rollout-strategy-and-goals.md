---
title: '1단계: 롤아웃 전략 및 목표 조정'
intro: '{% data variables.product.prodname_code_scanning %} 및 {% data variables.product.prodname_secret_scanning %}를 사용하도록 설정하기 전에 기업 전체에 GHAS를 롤아웃하는 방법을 계획합니다.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 1. Align on strategy
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b2677cf11c300ad657f9bd6b8862fb1f292c2fb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109708'
---
{% note %}

이 문서는 대규모 {% data variables.product.prodname_GH_advanced_security %}를 채택하는 시리즈의 일부입니다. 이 시리즈에 대한 소개는 “[대규모 {% data variables.product.prodname_GH_advanced_security %} 채택 소개](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)”를 참조하세요.

{% endnote %}

### 회사의 전략에 대해 명확한 목표 설정

회사의 롤아웃 방향에 대한 기반을 구축하려면 회사 내 GHAS에 대한 목표를 간략하게 설명하고 이러한 목표를 팀에 전달합니다. 팀이 준비되면 목표는 간단할 수도 있고 복잡할 수도 있습니다. 목표에 대한 지원이 필요한 경우 {% data variables.product.prodname_professional_services %}는 귀사와의 경험 및 다른 고객과의 경험에 따른 자문을 제공할 수 있습니다.

다음은 GHAS 롤아웃에 대한 목표의 대략적인 예시입니다.

  - **취약성 감소**: 이는 일반적인 목표일 발생할 수도 있고, GHAS와 같은 도구를 통해 방지할 수 있었을 심각한 취약성으로 인한 피해가 최근 회사에 발생했기 때문일 수 있습니다.
  - **고위험 리포지토리 식별**: 일부 회사에서는 위험성이 가장 높은 리포지토리를 대상으로 취약성을 시정하여 위험을 줄일 수 있도록 합니다.
  -  **시정 속도 향상**: 보안 부채의 누적을 방지하려면 개발자가 조사 결과를 받아들이도록 하고 이러한 취약성을 신속하게 시정하도록 합니다.  
  - **회의 규정 준수 요구 사항**: 예를 들어 많은 의료 회사에서 PHI(Personal Health Information)의 노출을 방지하기 위해 GHAS를 사용하고 있습니다.
  - **비밀 유출 방지**: 많은 회사에서 소프트웨어 키 또는 금융 데이터와 같은 중요한 정보가 유출되는 것을 방지하려고 합니다.

### 보안 그룹 및 개발 그룹과 함께 롤아웃 진행

GHAS 롤아웃에 보안 및 개발 팀을 모두 포함하는 회사는 파일럿이 완료되면 개발 팀을 포함하기를 기다리는 보안 그룹만 참여하는 회사보다 더 성공하는 경향이 있습니다. 

GHAS는 개발자 워크플로에 원활하게 통합함으로써 소프트웨어 보안에 대해 개발자 중심의 접근 방식을 취합니다. 프로세스 초기에 개발 그룹이 적극적으로 참여하면 롤아웃 위험이 감소하고 조직 차원의 도입이 가능합니다.

초기에 개발 그룹을 참여시키면(구매 시점부터가 이상적임) 기업이 GHAS를 활용하여 개발 프로세스 초기에 보안 문제를 해결하는 데 도움이 됩니다. 두 그룹이 함께 작동하면 프로세스 초기에 조정이 가능하고, 사일로를 제거하고, 작업 관계를 구축 및 강화하고, 롤아웃에 대한 더 많은 책임을 집니다. 


### GHAS에 대해 알아보기

롤아웃에 대한 현실적인 기대치를 설정하려면 모든 이해 관계자가 GHAS 작동 방식에 대한 다음과 같은 주요 사실을 이해해야 합니다.

#### 1. GHAS는 코드를 보호하기 위한 조치가 필요한 보안 도구 모음입니다.

GHAS는 일상적인 워크플로에서 다른 도구와 함께 구성, 유지 관리, 사용될 때 가치를 발휘하는 도구 모음입니다. 

#### 2. GHAS는 사용하기 전에 조정해야 합니다.

리포지토리에 GHAS를 설정한 후에는 회사의 요구에 맞게 GHAS를 구성해야 합니다. 특히 코드 검색에는 초기 결과 평가 및 향후 검사 조정과 같은 추가 사용자 지정이 필요합니다. 많은 고객은 애플리케이션의 위협 모델에 따라 코드 검색이 조정될 때까지 초기 검색이 제한되거나 관련이 없는 결과를 반환한다는 것을 알게 됩니다.

#### 3. GHAS 도구는 함께 사용하고 애플리케이션 보안 프로그램에 통합할 때 가장 효과적입니다.

GHAS는 모든 도구를 함께 사용할 때 가장 효과적입니다. 다른 도구 및 활동(예: 침투 테스트 및 동적 검사)과 GHAS를 통합하면 애플리케이션 보안 프로그램의 효율성이 더욱 향상됩니다. 항상 여러 보호 계층을 활용하는 것이 좋습니다.

#### 4. 사용자 지정 {% data variables.product.prodname_codeql %} 쿼리는 일부 회사에서 검사 결과를 사용자 지정하고 대상으로 지정하는 데 사용됩니다. 

코드 검사는 세계에서 가장 강력한 코드 분석 엔진인 {% data variables.product.prodname_codeql %}에 의해 구동됩니다. 대부분의 고객은 커뮤니티에서 사용 가능한 기본 쿼리 집합 및 추가 집합이 좀 더 효율적입니다. 그러나 다른 회사에서는 사용자 지정 {% data variables.product.prodname_codeql %} 쿼리를 요구하여 다른 결과를 대상으로 하거나 가양성을 줄일 수 있습니다.

그러나 사용자 지정 {% data variables.product.prodname_codeql %} 쿼리를 작성하고자 하는 경우 사용자 지정 쿼리를 살펴보기 전에 GHAS의 롤아웃 및 구현을 완료하는 것이 좋습니다. 그런 다음 회사가 준비되면 {% data variables.product.prodname_professional_services %}를 통해 요구 사항을 탐색하고 회사에 사용자 지정 쿼리가 필요한지 확인할 수 있습니다.  

#### 5. {% data variables.product.prodname_codeql %}은 끌어오기 요청의 변경 내용뿐만 아니라 전체 코드 베이스를 검사합니다.

끌어오기 요청에서 코드 검사를 실행하는 경우 스캔에는 끌어오기 요청의 변경 내용뿐만 아니라 전체 코드베이스가 포함됩니다. 전체 코드베이스 검사는 코드베이스의 모든 상호 작용에 대해 변경 내용을 모두 검토하도록 하는 중요한 단계입니다.

{% note %}

이 시리즈의 다음 문서는 “[2단계: 대규모로 사용하도록 준비](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)”를 참조하세요.

{% endnote %}
