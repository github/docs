---
title: '조직에서 {% ifversion projects-v2 %}프로젝트{% else %}프로젝트 보드{% endif %}를 사용하지 않도록 설정'
intro: '조직 소유자는 조직에서 {% ifversion projects-v2 %}조직 전체 {% data variables.projects.projects_v2 %}, 조직 전체 {% data variables.projects.projects_v1_boards %}, 리포지토리 수준 {% data variables.projects.projects_v1_boards %}{% else %}조직 전체 프로젝트 보드 및 리포지토리 프로젝트 보드{% endif %}를 해제할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-your-organization
  - /articles/disabling-project-boards-in-your-organization
  - /github/managing-your-work-on-github/disabling-project-boards-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Disable projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1e2aed1e7c689bee83dabc4a6750f8976206f4a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423326'
---
조직 전체 프로젝트 보드를 비활성화하면 조직 수준에서 새 프로젝트 보드를 만들 수 없으며 기존 조직 수준 프로젝트 보드는 이전 URL에서 액세스할 수 없게 됩니다. 조직의 리포지토리에 있는 프로젝트 보드는 영향을 받지 않습니다. {% ifversion projects-v2 %}이러한 설정은 {% data variables.projects.projects_v2 %} 및 {% data variables.projects.projects_v1_boards %}에 적용됩니다.{% endif %}

조직에서 리포지토리 프로젝트 보드를 비활성화하면 조직의 모든 리포지토리에 새 프로젝트 보드를 만들 수 없으며, 조직의 리포지토리에 있는 기존 프로젝트 보드는 이전 URL에서 액세스할 수 없게 됩니다. 조직 수준의 프로젝트 보드는 영향을 받지 않습니다.


프로젝트 보드를 비활성화하면 타임라인 또는 [감사 로그](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization)에 프로젝트 보드 정보가 더 이상 표시되지 않습니다.


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
1. 사이드바의 “코드 계획, 자동화” 섹션에서 **{% octicon "table" aria-label="The table icon" %} 프로젝트** 를 클릭합니다.
{% endif %}
1. 조직 전체 프로젝트 보드를 비활성화할지, 조직에서 리포지토리 프로젝트 보드를 비활성화할지 또는 둘 다 비활성화할지 결정합니다. 그런 다음, "프로젝트"에서:
    - 조직 전체 프로젝트 보드를 비활성화하려면 **조직에 대한 프로젝트 사용** 선택을 취소합니다.
    - 조직에서 리포지토리 프로젝트 보드를 비활성화하려면 **모든 리포지토리에 대해 프로젝트 사용** 선택을 취소합니다.
  ![조직 또는 조직의 모든 리포지토리에 대한 프로젝트를 비활성화하는 확인란](/assets/images/help/projects/disable-org-projects-checkbox.png)
1. **저장** 을 클릭합니다.

{% data reusables.organizations.disable_project_board_results %}

## 추가 참고 자료

{% ifversion projects-v2 %}- “[{% data variables.product.prodname_projects_v2 %} 정보](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”{% endif %}
- “[{% data variables.product.prodname_projects_v1 %} 정보](/articles/about-project-boards)”
- “[{% data variables.projects.projects_v1_board %}닫기](/articles/closing-a-project-board)”
- “[{% data variables.projects.projects_v1_board %} 삭제](/articles/deleting-a-project-board)”
- “[리포지토리에서 {% data variables.projects.projects_v1_boards %} 사용 안 함](/articles/disabling-project-boards-in-a-repository)”
