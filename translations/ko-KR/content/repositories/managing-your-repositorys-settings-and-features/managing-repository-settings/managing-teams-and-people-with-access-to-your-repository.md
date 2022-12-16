---
title: 리포지토리에 액세스할 수 있는 팀 및 사용자 관리
intro: 리포지토리에 대한 액세스 권한이 있는 모든 사용자를 보고 권한을 조정할 수 있습니다.
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Teams & people
ms.openlocfilehash: e378332dda56fad39b18fd10da4ee9bf799a9fe3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136695'
---
## 리포지토리에 대한 액세스 관리 정보

{% data variables.product.prodname_dotcom %}에서 관리하는 각 리포지토리에 대해 리포지토리에 액세스할 수 있는 모든 팀 또는 사용자의 개요를 볼 수 있습니다. 개요에서 새 팀 또는 사람을 초대하거나, 리포지토리에 대한 각 팀이나 사람의 역할을 변경하거나, 리포지토리에 대한 액세스를 제거할 수도 있습니다.

이 개요는 리포지토리, 온보딩 또는 오프보드 계약자 또는 직원에 대한 액세스를 감사하고 보안 인시던트에 효과적으로 대응하는 데 도움이 될 수 있습니다.

{% data reusables.organizations.mixed-roles-warning %}

리포지토리 역할에 대한 자세한 내용은 "[개인 계정 리포지토리에 대한 권한 수준](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" 및 "[조직의 리포지토리 역할"](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)을 참조하세요.

![액세스 관리 개요](/assets/images/help/repository/manage-access-overview.png)

## 팀 및 사용자 목록 필터링

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
1. "액세스 관리" 아래의 검색 필드에 찾으려는 팀 또는 사람의 이름을 입력하기 시작합니다. 필요에 따라 드롭다운 메뉴를 사용하여 검색을 필터링합니다. 
  ![액세스 권한이 있는 팀 또는 사용자 목록을 필터링하기 위한 검색 필드](/assets/images/help/repository/manage-access-filter.png)

## 팀 또는 사용자에 대한 권한 변경

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. "액세스 관리"에서 역할 변경하려는 팀 또는 사람을 찾은 다음, 역할 드롭다운을 선택하고 새 역할을 클릭합니다.
  !["역할" 드롭다운을 사용하여 팀 또는 사용자에 대한 새 권한 선택](/assets/images/help/repository/manage-access-role-drop-down.png)

## 팀 또는 사용자 초대

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %} {% data reusables.organizations.invite-teams-or-people %}
5. 검색 필드에 초대할 팀 또는 사람의 이름을 입력한 다음, 일치 항목 목록에서 이름을 클릭합니다.
  ![리포지토리에 초대할 팀 또는 사람의 이름을 입력하기 위한 검색 필드](/assets/images/help/repository/manage-access-invite-search-field.png)
6. "역할 선택"에서 팀 또는 사람에게 부여할 리포지토리 역할을 선택한 다음, **리포지토리에 이름 추가** 를 클릭합니다.
  ![팀 또는 사용자에 대한 권한 선택](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## 팀 또는 사용자에 대한 액세스 권한 제거

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. "액세스 관리"에서 제거할 액세스 권한이 있는 팀 또는 사람을 찾은 다음, {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
  ![액세스 제거를 위한 휴지통 아이콘](/assets/images/help/repository/manage-access-remove.png)

## 추가 참고 자료

- “[리포지토리 표시 여부 설정](/github/administering-a-repository/setting-repository-visibility)”
- "[조직에 대한 기본 권한 설정](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
