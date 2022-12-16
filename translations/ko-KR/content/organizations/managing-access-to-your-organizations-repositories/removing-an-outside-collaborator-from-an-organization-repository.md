---
title: 조직 리포지토리에서 외부 협력자 제거
intro: 소유자 및 리포지토리 관리자는 리포지토리에 대한 외부 협력자의 액세스를 제거할 수 있습니다.
redirect_from:
- /articles/removing-an-outside-collaborator-from-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove collaborator
ms.openlocfilehash: 71c8017b79425570e4ee7c2d2c7d3ac695c5c531
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134962"
---
{% ifversion fpt or ghec %}

{% warning %}

**경고:**
- 프라이빗 리포지토리에서 외부 협력자를 제거하는 경우 유료 라이선스 수가 자동으로 다운그레이드되지 않습니다. 조직에서 사용자를 제거한 후 더 적은 수의 라이선스 비용을 지불하려면 "[조직의 유료 시트 다운그레이드"](/articles/downgrading-your-organization-s-paid-seats)의 단계를 따릅니다.

- 귀하는 리포지토리에 대한 액세스 권한을 상실한 사용자가 기밀 정보 또는 지적 재산권을 삭제하도록 할 책임이 있습니다.

{% endwarning %}

{% endif %}

협력자를 제거하면 프라이빗 리포지토리의 포크가 삭제되는 반면, 해당 사용자는 리포지토리의 로컬 복제본을 계속 유지합니다.

## 조직의 모든 리포지토리에서 외부 협력자 제거

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. 조직에서 제거하려는 외부 협력자 또는 외부 협력자를 선택합니다.
![외부 협력자 2명이 선택된 외부 협력자 목록](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. 외부 협력자 목록 위에 드롭다운 메뉴를 사용하고 **모든 리포지토리에서 제거** 를 클릭합니다.
![외부 협력자를 제거하는 옵션이 있는 드롭다운 메뉴 ](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. 조직에서 제거될 외부 협력자 또는 외부 협력자를 검토한 다음, **외부 협력자 제거** 를 클릭합니다.
  ![제거될 외부 협력자 목록 및 외부 협력자 제거 단추](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

## 조직의 특정 리포지토리에서 외부 협력자 제거

조직의 특정 리포지토리에서 외부 협력자만 제거하려는 경우 한 번에 하나의 특정 리포지토리에 대한 이 사용자의 액세스 권한을 제거할 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. 제거하려는 사람의 사용자 이름 오른쪽에 있는 {% octicon "gear" aria-label="The Settings gear" %} 드롭다운 메뉴를 사용하고 **관리** 를 클릭합니다.
  ![액세스 관리 단추](/assets/images/help/organizations/member-manage-access.png)
6. 외부 협력자를 제거하려는 리포지토리의 오른쪽에서 **액세스 관리** 를 클릭합니다.
![외부 협력자가 액세스할 수 있는 리포지토리 옆에 있는 액세스 관리 단추 선택](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. 리포지토리에 대한 외부 협력자의 액세스 권한을 완전히 제거하려면 오른쪽 위 모서리에서 **이 리포지토리에 대한 액세스 권한 제거** 를 클릭합니다.
![이 리포지토리에 대한 액세스 권한 제거 단추](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. 확인하려면 **액세스 권한 제거** 를 클릭합니다.
![리포지토리에서 제거될 외부 협력자 확인](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} 리포지토리 설정의 액세스 개요에 있는 리포지토리에서 외부 협력자를 제거할 수도 있습니다. 자세한 내용은 “[리포지토리에 액세스할 수 있는 팀 및 사용자 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)”를 참조하세요.
{% endif %}
## 추가 참고 자료

- “[조직의 리포지토리에 외부 협력자 추가](/articles/adding-outside-collaborators-to-repositories-in-your-organization)”
- “[조직 멤버를 외부 협력자로 변환](/articles/converting-an-organization-member-to-an-outside-collaborator)”
