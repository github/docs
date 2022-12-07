---
title: 조직에 대한 모범 사례
shortTitle: Best practices
intro: '조직에 대한 {% data variables.product.prodname_dotcom %}권장 사례를 알아봅니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 015c74d7a69a1feb5c8ff9467a4219753f2cb5eb
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163460'
---
## 여러 소유자 할당

{% data reusables.organizations.org-ownership-recommendation %} 자세한 내용은 “[조직의 소유권 연속성 유지 관리](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)”를 참조하세요.

## 팀 사용

조직에서 공동 작업을 용이하게 하기 위해 팀을 사용하는 것이 좋습니다. 자세한 내용은 “[팀 정보](/organizations/organizing-members-into-teams/about-teams)”를 참조하세요.

{% ifversion ghec %} IdP(ID 공급자)를 통해 팀 멤버 자격을 관리하는 것이 좋습니다. 자세한 내용은 “[조직의 팀 동기화 관리](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”를 참조하세요.

{% data reusables.enterprise-accounts.emu-scim-note %} {% endif %}

가능한 경우 팀을 계속 표시하고 중요한 상황에 대한 비밀 팀을 예약하는 것이 좋습니다. 자세한 내용은 “[팀 표시 여부 변경](/organizations/organizing-members-into-teams/changing-team-visibility)”을 참조하세요.

{% ifversion ghec or ghes or ghae %}
## 보안 개요 사용

{% data reusables.security-overview.about-the-security-overview %} 자세한 내용은 "[보안 개요 정보"를 참조하세요](/code-security/security-overview/about-the-security-overview).
{% endif %}
