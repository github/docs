---
title: 조직에 사용자 추가
intro: '{% data variables.product.product_name %} 사용자 이름 또는 메일 주소를 사용하여 모든 사용자를 조직의 구성원으로 만들 수 있습니다.'
redirect_from:
  - /articles/adding-people-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-people-to-your-organization
versions:
  ghes: '*'
  ghae: '*'
permissions: Organization owners can add people to an organization.
shortTitle: Add people to organization
ms.openlocfilehash: 4dc022539ca8458e20fe5c04eadf6f2b71b1735c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109831'
---
{% ifversion not ghae %} 조직에서 [구성원에게 2단계 인증을 사용하도록 요구하는](/articles/requiring-two-factor-authentication-in-your-organization) 경우 사용자는 [2단계 인증을 활성화](/articles/securing-your-account-with-two-factor-authentication-2fa)해야 조직에 추가할 수 있습니다.
{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.choose-user-license %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %}

## 추가 참고 자료
- "[팀에 조직 구성원 추가](/articles/adding-organization-members-to-a-team)"
