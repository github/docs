---
title: 팀 및 조직에서 사용자 제거
intro: 조직의 구성원이 더 이상 특정 리포지토리에 액세스할 필요가 없는 경우 이들을 해당 액세스를 허용하는 팀에서 제거할 수 있습니다. 조직의 구성원이 더 이상 어떤 조직 소유의 리포지토리에도 액세스할 필요가 없는 경우 조직에서 제거할 수 있습니다.
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
shortTitle: Remove user membership
ms.openlocfilehash: 575cc032786b2bbbf264104002f503b5061df8e6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116295'
---
소유자 또는 팀 관리자만 조직 멤버를 제거할 수 있습니다. 사용자가 팀 또는 조직에서 제거된 경우에도 조직 리포지토리에 있는 해당 이슈, 끌어오기 요청, 주석은 그대로 유지되며 계속 사용자에게 귀속됩니다.

{% warning %}

**경고**: 조직에서 사용자를 제거하면 조직 **프라이빗 리포지토리** 의 프라이빗 포크에 대한 액세스 권한을 잃게 됩니다. 포크의 로컬 복사본을 계속 보유할 수 있습니다. 그러나 조직의 리포지토리와 동기화할 수는 없습니다. 리포지토리에 대한 액세스 권한이 손실된 사용자가 기밀 정보 또는 지적 재산을 삭제하도록 할 책임이 있습니다. 조직에서 제거된 사용자가 조직 멤버였던 경우 조직에서 제거된 날부터 3개월 이내에 [조직 멤버로 복구](/articles/reinstating-a-former-member-of-your-organization)되면 조직 리포지토리의 프라이빗 포크에 대한 액세스 권한을 복원할 수 있습니다.

{% endwarning %}

## 팀 멤버 제거

{% ifversion ghes %}

{% warning %}

**참고:** {% data reusables.enterprise_management_console.badge_indicator %}

LDAP 그룹에 동기화된 팀의 기존 멤버를 제거하려면 LDAP 관리자에게 문의하세요.

{% endwarning %}

{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. 제거할 사용자를 선택합니다.
![조직 구성원 옆에 있는 확인란](/assets/images/help/teams/team-member-check-box.png)
5. 팀 구성원 목록 위에서 드롭다운 메뉴를 사용하여 **팀에서 제거** 를 클릭합니다.
![역할 변경 옵션이 있는 드롭다운 메뉴](/assets/images/help/teams/bulk-edit-drop-down.png)

## 조직에서 사용자 제거

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. 조직에서 제거할 사용자 이름 옆에 있는 확인란을 클릭합니다.
![사용자 제거 확인란](/assets/images/help/organizations/Organization-remove-user.png)
5. 페이지 맨 위의 조직 이름 아래에 있는 **조직에서 제거** 를 클릭합니다.
![조직에서 제거 단추](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
