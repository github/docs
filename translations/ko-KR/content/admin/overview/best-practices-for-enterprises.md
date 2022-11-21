---
title: 기업에 대한 모범 사례
shortTitle: Best practices
intro: '엔터프라이즈에 대한 {% data variables.product.company_short %}권장 사례를 알아봅니다.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9c9ccfb0437b451188f8180dcf5ae29a6030f72d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163457'
---
{% ifversion ghec %}
## 엔터프라이즈에 가장 적합한 인증 방법 식별

{% data reusables.enterprise.ghec-authentication-options %}

요구 사항을 가장 잘 충족하는 인증 방법을 식별하는 데 도움이 필요한 경우 "[엔터프라이즈 인증 정보"를 참조하세요](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise). {% endif %}

## 정책 사용

정책을 사용하여 비즈니스 규칙 및 규정 준수를 적용하는 것이 좋습니다. 

{% data reusables.enterprise.about-policies %} 자세한 내용은 “[엔터프라이즈 정책 정보](/admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies)”를 참조하세요.

## 조직 수 최소화

대기업에는 종종 여러 조직이 필요하지만 최상위 기업 부서를 반영하기 위해 가능한 한 적은 수의 조직을 만들려고 합니다. 소수의 조직이 내부 원본 관행을 장려하고 토론이 더 많은 청중을 참여시킬 수 있도록 합니다.

대신 팀을 사용하여 각 조직 내에서 보다 세분화된 수준에서 리포지토리 액세스 및 보안 요구 사항을 관리할 수 있습니다. 자세한 내용은 “[팀 정보](/organizations/organizing-members-into-teams/about-teams)”를 참조하세요.

## 사용자 소유 리포지토리에서 광범위한 협업 방지

가능하면 조직 소유 리포지토리에서 공동 작업하고 사용자 소유 리포지토리에서 협업을 최소화하는 것이 좋습니다. 조직 소유 리포지토리에는 보다 정교한 보안 및 관리 기능이 있으며 엔터프라이즈 멤버 자격이 변경되더라도 계속 액세스할 수 있습니다.

## 사람이 읽을 수 있는 사용자 이름 사용

{% ifversion ghec %} 엔터프라이즈 멤버의 사용자 이름을 제어하는 경우{% else %}사용자가 읽을 수 있는 사용자 이름{% endif %}을(를) 사용하고 사람이 읽기 어려운 컴퓨터 생성 ID를 사용하지 않도록 합니다.

엔터프라이즈의 프라이빗 리포지토리 내에서 사용자 이름 표시를 관리할 수 있습니다. 자세한 내용은 “[조직에서 구성원 이름 표시 관리](/organizations/managing-organization-settings/managing-the-display-of-member-names-in-your-organization)”를 참조하세요.

## 추가 정보

- "[리포지토리에 대한 모범 사례](/repositories/creating-and-managing-repositories/best-practices-for-repositories)"
- "[조직을 위한 모범 사례](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations)"
