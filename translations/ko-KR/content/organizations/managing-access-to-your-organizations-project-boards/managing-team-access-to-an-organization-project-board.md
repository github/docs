---
title: '조직 {% data variables.product.prodname_project_v1 %}에 대한 팀의 액세스 관리'
intro: '조직 소유자 또는 {% data variables.projects.projects_v1_board %} 관리자는 조직 소유의 {% data variables.projects.projects_v1_board %}에 대해 팀에 액세스를 부여할 수 있습니다.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-access-to-an-organization-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage team access
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c49fab76bbf286f865e3845356213bc1af18b20a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109458'
---
{% data reusables.projects.project_boards_old %}

{% warning %}

**경고:**
- 팀이 {% data variables.projects.projects_v1_board %}에 직접 액세스할 수 있는 경우 팀의 권한 수준을 변경할 수 있습니다. {% data variables.projects.projects_v1_board %}에 대한 팀의 액세스가 부모 팀에서 상속되는 경우 부모 팀의 {% data variables.projects.projects_v1_board %}에 대한 액세스를 변경해야 합니다.
- 부모 팀에 대한 {% data variables.projects.projects_v1_board %} 액세스를 추가하거나 제거하면 해당 부모의 각 자식 팀도 {% data variables.projects.projects_v1_board %}에 대한 액세스 권한을 받거나 잃게 됩니다. 자세한 내용은 “[팀 정보](/articles/about-teams)”를 참조하세요.

{% endwarning %}

## 팀에 {% data variables.projects.projects_v1_board %}에 대한 액세스 권한 부여

전체 팀에 {% data variables.projects.projects_v1_board %}에 대한 동일한 사용 권한 수준을 부여할 수 있습니다.

{% note %}

**참고:** {% data reusables.project-management.cascading-permissions %} 예를 들어 조직 소유자가 팀에 {% data variables.projects.projects_v1_board %}에 대한 읽기 권한을 부여하고, {% data variables.projects.projects_v1_board %} 관리자가 팀 멤버 중 한 명에게 개별 공동 작업자로서 해당 보드에 대한 관리자 권한을 부여하는 경우 해당 사용자는 {% data variables.projects.projects_v1_board %}에 대한 관리자 권한을 갖습니다. 자세한 내용은 “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”을 참조하세요.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}{% ifversion projects-v2 %}
1. **프로젝트(클래식)** 클릭{% endif %} {% data reusables.project-management.select-project %} {% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
8. 왼쪽 사이드바에서 **팀** 을 클릭합니다.
9. 팀을 추가하려면 **팀 추가: 팀 선택** 을 클릭합니다. 그런 다음, 드롭다운 메뉴에서 팀을 선택하거나 추가할 팀을 검색합니다.
 ![조직의 팀 목록이 포함된 팀 추가 드롭다운 메뉴](/assets/images/help/projects/add-a-team.png)
10. 팀 이름 옆에 있는 드롭다운 메뉴를 사용하여 원하는 권한 수준인 **읽기**, **쓰기** 또는 **관리** 를 선택합니다. ![읽기, 쓰기 및 관리 옵션이 있는 팀 권한 드롭다운 메뉴](/assets/images/help/projects/org-project-team-choose-permissions.png)

## {% data variables.projects.projects_v1_board %}에 대한 팀의 액세스 구성

{% data variables.projects.projects_v1_board %}에 대한 팀의 액세스 권한이 부모 팀에서 상속되는 경우 {% data variables.projects.projects_v1_board %}에 대한 부모 팀의 액세스 권한을 변경하여 자식 팀에 대한 액세스 권한을 업데이트해야 합니다.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. 팀의 대화 위에서 {% octicon "project" aria-label="The Projects icon" %} **프로젝트** 를 클릭합니다.
  ![팀 리포지토리 탭](/assets/images/help/organizations/team-project-board-button.png)
5. 권한 수준을 변경하려면 업데이트하려는 {% data variables.projects.projects_v1_board %}의 오른쪽에 있는 드롭다운을 사용합니다. {% data variables.projects.projects_v1_board %}를 제거하려면 **{% octicon "trash" aria-label="The trash icon" %}** 을 클릭합니다.
  ![팀 휴지통 단추에서 프로젝트 보드 제거](/assets/images/help/organizations/trash-button.png)

{% ifversion projects-v2-add-to-team %}

## 추가 정보

- [팀에 프로젝트 추가](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)


{% endif %}
