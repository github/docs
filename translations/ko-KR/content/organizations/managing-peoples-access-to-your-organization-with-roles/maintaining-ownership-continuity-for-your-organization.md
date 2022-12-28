---
title: 조직의 소유권 연속성 유지 관리
intro: 조직은 소유권 만료를 방지하기 위해 둘 이상의 조직 소유자를 보유할 수 있습니다.
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Maintain ownership continuity
ms.openlocfilehash: 636982e8985a79e617b01220df8a63256c874b70
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147885974'
---
## 조직의 소유권 연속성 유지 관리 정보

{% data reusables.organizations.org-ownership-recommendation %}

조직 사용자는 조직에 대한 완전한 관리 권한을 갖습니다. {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**참고**: 조직 소유자는 다른 조직 멤버 및 소유자의 역할을 변경할 수 있습니다. 자신의 역할을 변경할 수 없습니다. 

{% endnote %}

{% ifversion enterprise-owner-join-org %} 조직이 엔터프라이즈 계정에 의해 소유되는 경우 모든 엔터프라이즈 소유자는 조직의 소유자가 될 수 있습니다. 자세한 내용은 “[엔터프라이즈가 소유한 조직에서 역할 관리](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)”를 참조하세요.
{% endif %}

## 조직 소유자 임명

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 소유자로 승격하려는 사용자를 선택합니다.
  ![두 멤버가 선택된 멤버 목록](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. 멤버 목록 위에 있는 드롭다운 메뉴를 사용하고 **역할 변경** 을 클릭합니다.
  ![멤버를 제거하는 옵션이 있는 드롭다운 메뉴](/assets/images/help/teams/user-bulk-management-options.png)
6. 사용자에 대한 새 역할을 선택한 다음, **역할 변경** 을 클릭합니다.
  ![소유자 및 멤버 역할이 있는 라디오 단추 및 역할 변경 단추](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
