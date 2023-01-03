---
title: 조직 리포지토리에 대한 개인 액세스 권한 관리
intro: 조직에서 소유한 리포지토리에 대한 사용자의 액세스를 관리할 수 있습니다.
redirect_from:
  - /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
  - /articles/managing-an-individual-s-access-to-an-organization-repository
  - /articles/managing-an-individuals-access-to-an-organization-repository
  - /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
  - /organizations/managing-access-to-your-organizations-repositories/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage individual access
permissions: People with admin access to a repository can manage access to the repository.
ms.openlocfilehash: 604dd0c62d06ffa501695db8836e56c95cb467b7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098517'
---
## 조직 리포지토리에 대한 액세스 정보

조직의 리포지토리에서 협력자를 제거하면 협력자는 리포지토리에 대한 읽기 및 쓰기 액세스 권한을 잃게 됩니다. 리포지토리가 프라이빗이고 협력자가 리포지토리를 포크한 경우 해당 포크도 삭제되지만 협력자는 여전히 리포지토리의 로컬 클론을 유지합니다.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt 또는 ghec 또는 ghes > 3.3 또는 ghae > 3.3 %}
## 조직 리포지토리에 대한 개인 액세스 권한 관리
리포지토리에 대한 액세스 권한을 사용자에게 부여하거나 리포지토리 설정에서 리포지토리에 대한 사용자의 액세스 수준을 변경할 수 있습니다. 자세한 내용은 “[리포지토리에 액세스할 수 있는 팀 및 사용자 관리](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)”를 참조하세요.
{% else %}
## 사용자에게 리포지토리에 대한 액세스 권한 부여

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-manage-access %} {% data reusables.organizations.invite-teams-or-people %}
1. 검색 필드에 초대할 팀 또는 사람의 이름을 입력한 다음, 일치 항목 목록에서 이름을 클릭합니다.
  ![리포지토리에 초대할 팀 또는 사람의 이름을 입력하기 위한 검색 필드](/assets/images/help/repository/manage-access-invite-search-field.png)
6. “역할 선택”에서 사용자에게 할당할 리포지토리 역할을 선택한 다음, **리포지토리에 이름 추가** 를 클릭합니다.
  ![팀 또는 사용자에 대한 권한 선택](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## 조직 리포지토리에 대한 개인 액세스 권한 관리

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. **구성원** 또는 **외부 협력자** 를 클릭하여 다양한 유형의 액세스 권한을 가진 사용자를 관리합니다. ![구성원 또는 외부 협력자를 조직에 초대하는 단추](/assets/images/help/organizations/select-outside-collaborators.png)
5. 관리하려는 사용자의 이름 오른쪽에 있는 {% octicon "gear" aria-label="The Settings gear" %} 드롭다운 메뉴를 사용하고 **관리** 를 클릭합니다.
  ![액세스 관리 링크](/assets/images/help/organizations/member-manage-access.png)
6. “액세스 관리” 페이지의 리포지토리 옆에 있는 **액세스 관리** 를 클릭합니다.
![리포지토리에 대한 액세스 관리 단추](/assets/images/help/organizations/repository-manage-access.png)
7. 협력자인지 또는 팀 멤버 자격을 통해 리포지토리에 액세스할 수 있는지와 같이 지정된 리포지토리에 대한 사용자의 액세스를 검토합니다.
![사용자에 대한 리포지토리 액세스 매트릭스](/assets/images/help/organizations/repository-access-matrix-for-user.png) {% endif %}
## 추가 참고 자료

{% ifversion fpt or ghec %}- “[리포지토리와의 상호 작용 제한](/articles/limiting-interactions-with-your-repository)”{% endif %}
- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
