---
title: GitHub Actions로 엔터프라이즈 마이그레이션
shortTitle: Migrate to Actions
intro: '기업을 위해 다른 공급자에서 {% data variables.product.prodname_actions %}로 마이그레이션을 계획하는 방법을 알아봅니다.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 332d8af7f1087626509a9c72751882ea11f3072f
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160301'
---
## {% data variables.product.prodname_actions %}로 엔터프라이즈 마이그레이션 정보

기존 시스템에서 {% data variables.product.prodname_actions %}로 엔터프라이즈를 마이그레이션하려면 마이그레이션을 계획하고, 마이그레이션을 완료하고, 기존 시스템을 사용 중지할 수 있습니다.

이 가이드에서는 마이그레이션에 대한 구체적인 고려 사항을 다룹니다. 엔터프라이즈에 {% data variables.product.prodname_actions %}를 도입하는 방법에 대한 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_actions %} 도입](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)”을 참조하세요.

## 마이그레이션 계획

엔터프라이즈를 {% data variables.product.prodname_actions %}로 마이그레이션하기 전에 마이그레이션할 워크플로와 마이그레이션이 팀에 미치는 영향을 파악한 다음 마이그레이션을 완료하는 방법과 시기를 계획해야 합니다.

### 마이그레이션 전문가 활용

{% data variables.product.company_short %}는 마이그레이션에 도움이 될 수 있으며 {% data variables.product.prodname_professional_services %}를 구매하면 도움이 될 수 있습니다. 자세한 내용은 전담 담당자 또는 {% data variables.contact.contact_enterprise_sales %}에 문의하세요.

### 마이그레이션 대상 식별 및 인벤토리 작성

{% data variables.product.prodname_actions %}로 마이그레이션하려면 기존 시스템 내에서 엔터프라이즈에서 사용하는 워크플로를 완전히 이해해야 합니다.

먼저, 엔터프라이즈 내에서 기존 빌드 및 릴리스 워크플로의 인벤토리를 만들어 현재 사용 중인 워크플로, 마이그레이션해야 하는 워크플로 및 남아 있는 워크플로에 대한 정보를 수집합니다.

다음으로, 현재 공급자 및 {% data variables.product.prodname_actions %} 간의 차이점을 알아봅니다. 이렇게 하면 각 워크플로를 마이그레이션하는 데 어려운 점과 엔터프라이즈에서 기능의 차이를 경험할 수 있는 위치를 평가하는 데 도움이 됩니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}로 마이그레이션](/actions/migrating-to-github-actions)을 참조하세요.

이 정보를 사용하여 {% data variables.product.prodname_actions %}로 마이그레이션할 수 있는 워크플로를 결정할 수 있습니다.

### 마이그레이션이 팀에 미치는 영향 확인

엔터프라이즈 내에서 사용 중인 도구를 변경하면 팀의 작동 방식에 영향을 줍니다. 워크플로를 기존 시스템에서 {% data variables.product.prodname_actions %}로 이전하면 개발자의 일상적인 작업에 미치는 영향을 고려해야 합니다.

마이그레이션의 영향을 받을 프로세스, 통합 및 타사 도구를 식별하고 수행해야 하는 모든 업데이트에 대한 계획을 수립합니다.

마이그레이션이 규정 준수 문제에 어떤 영향을 미칠 수 있는지 고려합니다. 예를 들어 기존 자격 증명 검사 및 보안 분석 도구가 {% data variables.product.prodname_actions %}에서 작동하나요? 아니면 새 도구를 사용해야 하나요?

기존 시스템에서 게이트 및 체크 인을 식별하고 {% data variables.product.prodname_actions %}를 사용하여 이들을 구현할 수 있는지 확인합니다.

### 마이그레이션 도구 식별 및 유효성 검사

자동화된 마이그레이션 도구는 엔터프라이즈 워크플로를 기존 시스템의 구문에서 {% data variables.product.prodname_actions %}에 필요한 구문으로 변환할 수 있습니다. 타사 도구를 식별하거나 전담 담당자 또는 {% data variables.contact.contact_enterprise_sales %}에 문의하여 {% data variables.product.company_short %}에서 제공할 수 있는 도구에 대해 문의하세요. 예를 들어 {% data variables.product.prodname_actions_importer %}를 사용하여 지원되는 다양한 서비스에서 CI 파이프라인을 계획, 범위 지정 및 {% 데이터 variables.product.prodname_actions %}로 마이그레이션할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_actions_importer %}을(를) 사용하여 마이그레이션 자동화](/actions/migrating-to-github-actions/automating-migration-with-github-actions-importer)"를 참조하세요.

마이그레이션을 자동화하는 도구를 식별한 후 일부 테스트 워크플로에서 도구를 실행하고 결과가 예상대로 표시되는지 확인하여 도구의 유효성을 검사합니다.

자동화된 도구는 대부분의 워크플로를 마이그레이션할 수 있어야 하지만 최소 비율의 워크플로를 수동으로 다시 작성해야 할 수 있습니다. 완료해야 하는 수동 작업의 양을 예측합니다.

### 마이그레이션 접근 방식 결정

엔터프라이즈에 가장 적합한 마이그레이션 접근 방식을 결정합니다. 소규모 팀에서는 “완전 바꾸기(rip-and-replace)” 접근 방식을 사용하여 모든 워크플로를 한 번에 마이그레이션할 수 있습니다. 대기업의 경우 반복 접근 방식이 더 현실적일 수 있습니다. 중앙 기구가 전체 마이그레이션을 관리하도록 선택하거나 자체 워크플로를 마이그레이션하여 개별 팀에 셀프 서비스로 관리하도록 요청할 수 있습니다.

활성 관리와 셀프 서비스를 결합하는 반복 접근 방식을 사용하는 것이 좋습니다. 내부 챔피언 역할을 할 수 있는 소규모 얼리어답터 그룹으로 시작합니다. 비즈니스의 범위를 나타낼 수 있을 만큼 포괄적인 소수의 워크플로를 식별합니다. 얼리어답터와 협력하여 해당 워크플로를 {% data variables.product.prodname_actions %}로 마이그레이션하고 필요에 따라 반복합니다. 이렇게 하면 다른 팀에도 워크플로를 마이그레이션할 수 있다는 확신을 줄 수 있습니다.

그런 다음 대규모 조직에서 {% data variables.product.prodname_actions %}를 사용할 수 있도록 합니다. 이러한 팀이 자신의 워크플로를 {% data variables.product.prodname_actions %}로 마이그레이션하는 데 도움이 되는 리소스를 제공하고 기존 시스템이 사용 중지될 때 팀에 알릴 수 있습니다. 

마지막으로 이전 시스템을 사용하고 있는 모든 팀에 특정 기간 내에 마이그레이션을 완료하도록 알릴 수 있습니다. 다른 팀의 성공을 언급하면서 마이그레이션이 가능하고 바람직하다고 안심시킬 수 있습니다.

### 마이그레이션 일정 정의

마이그레이션 접근 방식을 결정한 후 각 팀이 워크플로를 {% data variables.product.prodname_actions %}로 마이그레이션할 시기를 간략하게 설명하는 일정을 작성합니다.

먼저 마이그레이션을 완료하고자 하는 날짜를 결정합니다. 예를 들어 현재 공급자와의 계약이 종료되는 시점까지 마이그레이션을 완료하도록 계획할 수 있습니다.

그런 다음 팀과 협력하여 팀 목표 저하 없이 마감일을 충족하는 일정을 만듭니다. 마이그레이션을 요청하려고 하는 개별 팀의 비즈니스의 주기와 워크로드를 확인합니다. 각 팀과 협력하여 제공 일정을 파악하고 팀의 제공 능력에 영향을 주지 않으면서 워크플로를 한 번에 마이그레이션할 수 있는 계획을 수립합니다.

## {% data variables.product.prodname_actions %}로 마이그레이션

마이그레이션을 시작할 준비가 되면 위에서 계획한 자동화된 도구 및 수동 다시 쓰기를 사용하여 기존 워크플로를 {% data variables.product.prodname_actions %}로 이동합니다.

또한 아티팩트를 보관하도록 스크립팅된 프로세스를 작성하여 기존 시스템에서 이전 빌드 아티팩트도 유지 관리할 수 있습니다.

## 기존 시스템 사용 중지

마이그레이션이 완료되면 기존 시스템의 사용 중지를 고려할 수 있습니다.

개발자가 불편한 경험을 하지 않도록 {% data variables.product.prodname_actions %} 구성이 안정적인지 확인하는 일정 기간 동안 두 시스템을 나란히 실행할 수 있습니다.

결국에는 이전 시스템을 해제 및 종료하고, 엔터프라이즈 내의 누구도 이전 시스템을 다시 설정하지 않도록 하세요.
