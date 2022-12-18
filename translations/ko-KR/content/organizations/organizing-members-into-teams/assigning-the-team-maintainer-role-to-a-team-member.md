---
title: 팀 멤버에게 팀 유지 관리자 역할 할당
intro: 팀 구성원에게 팀 유지 관리자 역할을 할당하여 팀 멤버 자격 및 설정을 관리할 수 있는 기능을 제공할 수 있습니다.
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
ms.openlocfilehash: 2408d8c12718375d777432be03d6e19f7d6d04b5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145125535'
---
## 팀 유지 관리자 정보

팀 유지 관리자 역할이 있는 사용자는 팀 멤버 자격 및 설정을 관리할 수 있습니다.

- [팀의 이름 및 설명 변경](/articles/renaming-a-team)
- [팀의 표시 여부 변경](/articles/changing-team-visibility)
- [자식 팀 추가 요청](/articles/requesting-to-add-a-child-team)
- [부모 팀 추가 또는 변경 요청](/articles/requesting-to-add-or-change-a-parent-team)
- [팀 프로필 사진 설정](/articles/setting-your-team-s-profile-picture)
- [팀 토론 편집](/articles/managing-disruptive-comments/#editing-a-comment)
- [팀 토론 삭제](/articles/managing-disruptive-comments/#deleting-a-comment)
- [팀에 조직 멤버 추가](/articles/adding-organization-members-to-a-team)
- [팀에서 조직 멤버 제거](/articles/removing-organization-members-from-a-team)
- 리포지토리에 대한 팀의 액세스 권한을 제거합니다.
- [팀의 코드 검토 할당 관리](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% ifversion fpt or ghec %}
- [끌어오기 요청에 대한 예약된 미리 알림을 관리](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}

## 조직 멤버를 팀 유지 관리자로 승격

조직 멤버를 팀 유지 관리자로 승격하려면 먼저 해당 사용자가 이미 팀의 멤버여야 합니다.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
4. 팀 유지 관리자로 승격하려는 사용자를 선택합니다.
![조직 구성원 옆에 있는 확인란](/assets/images/help/teams/team-member-check-box.png)
5. 팀 멤버 목록 위에서 드롭다운 메뉴를 사용하고 **역할 변경...** 을 클릭합니다. ![역할을 변경하는 옵션이 있는 드롭다운 메뉴](/assets/images/help/teams/bulk-edit-drop-down.png)
6. 새 역할을 선택하고 **역할 변경** 을 클릭합니다.
![유지 관리자 또는 멤버 역할에 대한 라디오 단추](/assets/images/help/teams/team-role-modal.png)
