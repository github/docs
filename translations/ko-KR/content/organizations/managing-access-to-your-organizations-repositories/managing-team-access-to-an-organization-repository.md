---
title: 조직 리포지토리에 대한 팀 액세스 관리
intro: 리포지토리에 대한 팀 액세스 권한을 부여하거나, 리포지토리에 대한 팀의 액세스를 제거하거나, 리포지토리에 대한 팀의 권한 수준을 변경할 수 있습니다.
redirect_from:
- /articles/managing-team-access-to-an-organization-repository-early-access-program
- /articles/managing-team-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage team access
ms.openlocfilehash: 34f912f4d5c55df30629b7b56200bef25281bf2d
ms.sourcegitcommit: 72e1c60459a610944184ca00e3ae60bf1f5fc6db
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878609"
---
리포지토리에 대한 관리자 액세스 권한이 있는 사용자는 리포지토리에 대한 팀 액세스 권한을 관리할 수 있습니다. 팀이 리포지토리에 직접 액세스할 수 있는 경우 팀 유지관리자는 리포지토리에 대한 팀의 액세스 권한을 제거할 수 있습니다. 팀의 리포지토리에 대한 액세스가 부모 팀에서 상속되는 경우 유지 관리자는 현재 권한을 부모 팀의 권한과 일치하게 다시 설정하도록 선택할 수 있습니다.

{% warning %}

**경고:**
- 팀이 리포지토리에 직접 액세스할 수 있는 경우 팀의 권한 수준을 변경할 수 있습니다. 리포지토리에 대한 팀의 액세스 권한이 부모 팀에서 상속되는 경우 리포지토리에 대한 부모 팀의 액세스 권한을 변경해야 합니다.
- 부모 팀에 대한 리포지토리 액세스 권한을 추가하거나 제거하면 해당 부모의 각 자식 팀도 리포지토리에 대한 액세스 권한을 받거나 잃게 됩니다. 자세한 내용은 “[팀 정보](/articles/about-teams)”를 참조하세요.

{% endwarning %}

## 팀에 리포지토리에 대한 액세스 권한 부여

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 팀에 리포지토리에 대한 액세스 권한을 부여하거나 리포지토리 설정에서 리포지토리에 대한 팀의 액세스 수준을 변경할 수 있습니다. 자세한 내용은 “[리포지토리에 액세스할 수 있는 팀 및 사용자 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)”를 참조하세요. {% else %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. 리포지토리 목록 위에서 **리포지토리 추가** 를 클릭합니다.
  ![리포지토리 추가 버튼](/assets/images/help/organizations/add-repositories-button.png)
6. 리포지토리의 이름을 입력한 다음, **팀에 리포지토리 추가** 를 클릭합니다.
  ![리포지토리 검색 필드](/assets/images/help/organizations/team-repositories-add.png)
7. 필요에 따라 리포지토리 이름 오른쪽에 있는 드롭다운 메뉴를 사용하고 팀에 대해 다른 권한 수준을 선택합니다.
  ![리포지토리 액세스 수준 드롭다운](/assets/images/help/organizations/team-repositories-change-permission-level.png) {% endif %}
## 리포지토리에 대한 팀의 액세스 권한 제거

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 리포지토리 설정에서 조직의 리포지토리에 대한 팀의 액세스 권한을 제거할 수 있습니다. 자세한 내용은 “[리포지토리에 액세스할 수 있는 팀 및 사용자 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)”를 참조하세요.

팀이 리포지토리에 직접 액세스할 수 있는 경우 리포지토리에 대한 해당 팀의 액세스 권한을 제거할 수 있습니다. 리포지토리에 대한 팀의 액세스 권한이 부모 팀에서 상속되는 경우 자식 팀에서 리포지토리를 제거하려면 부모 팀에서 리포지토리를 제거해야 합니다.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% else %}

팀이 리포지토리에 직접 액세스할 수 있는 경우 리포지토리에 대한 팀의 액세스 권한을 제거할 수 있습니다. 리포지토리에 대한 팀의 액세스 권한이 부모 팀에서 상속되는 경우 자식 팀에서 리포지토리를 제거하려면 부모 팀에서 리포지토리를 제거해야 합니다.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-repositories-tab %}
5. 팀에서 제거하려는 리포지토리를 선택합니다.
  ![일부 리포지토리에 대한 확인란이 선택된 팀 리포지토리 목록](/assets/images/help/teams/select-team-repositories-bulk.png)
6. 리포지토리 목록 위에서 드롭다운 메뉴를 사용하여 **팀에서 제거** 를 클릭합니다.
  ![팀에서 리포지토리를 제거하는 옵션이 있는 드롭다운 메뉴](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. 팀에서 제거될 리포지토리를 검토한 다음, **리포지토리 제거** 를 클릭합니다.
  ![팀이 더 이상 액세스할 수 없는 리포지토리 목록이 있는 모달 상자](/assets/images/help/teams/confirm-remove-team-repos.png) {% endif %}
## 추가 참고 자료

- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
