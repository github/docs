---
title: 팀 만들기
intro: 독립된 팀 또는 중첩된 팀을 만들어 사용자 그룹에 대한 리포지토리 권한 및 멘션을 관리할 수 있습니다.
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: c4ffe03e1108caae9bfed1171b08d8a046caeb76
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145125527'
---
부모 팀의 조직 소유자 및 유지 관리자만 부모 아래에 새 자식 팀을 만들 수 있습니다. 소유자는 조직의 모든 팀에 대한 만들기 권한을 제한할 수도 있습니다. 자세한 내용은 “[조직에서 팀 만들기 권한 설정](/articles/setting-team-creation-permissions-in-your-organization)”을 참조하세요.

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.create-team-choose-parent %} {% ifversion ghec %}
1. 필요에 따라 조직 또는 엔터프라이즈 계정이 팀 동기화를 사용하거나 엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는 경우 ID 공급자 그룹을 팀에 연결합니다.
    * 엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는 경우 "ID 공급자 그룹" 드롭다운 메뉴를 사용하고 단일 ID 공급자 그룹을 선택하여 새 팀에 연결합니다. 자세한 내용은 “[ID 공급자 그룹을 사용하여 팀 멤버 자격 관리](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)”를 참조하세요.
    * 조직 또는 엔터프라이즈 계정에서 팀 동기화를 사용하는 경우 "ID 공급자 그룹" 드롭다운 메뉴를 사용하고 최대 5개의 ID 공급자 그룹을 선택하여 새 팀에 연결합니다. 자세한 내용은 “[팀과 ID 공급자 그룹 동기화](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)”를 참조하세요.
    ![ID 공급자 그룹을 선택하는 드롭다운 메뉴](/assets/images/help/teams/choose-an-idp-group.png) {% endif %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}
1. 필요에 따라 [팀에게 조직 리포지토리에 대한 액세스 권한을 부여합니다](/articles/managing-team-access-to-an-organization-repository).

## 추가 참고 자료

- “[팀 정보](/articles/about-teams)”
- "[팀 표시 유형 변경](/articles/changing-team-visibility)"
- “[조직의 계층 구조에서 팀 이동](/articles/moving-a-team-in-your-organization-s-hierarchy)”
