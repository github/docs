---
title: '{% data variables.product.prodname_project_v1 %}에 리포지토리 연결'
intro: '조직의 또는 개인 계정의 {% data variables.projects.projects_v1_board %}에 리포지토리를 연결할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Link repository to board
allowTitleToDifferFromFilename: true
ms.openlocfilehash: d0893b64551be80577547b9791e7a7ed6a432de0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109696'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}에 대한 쓰기 권한이 있는 사용자는 해당 조직 또는 개인 계정이 소유한 리포지토리를 {% data variables.projects.projects_v1_board %}에 연결할 수 있습니다. 자세한 내용은 “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization/)” 또는 “[사용자 소유 {% data variables.product.prodname_projects_v1 %}에 대한 사용 권한 수준](/articles/permission-levels-for-user-owned-project-boards/)”을 참조하세요.

{% data reusables.project-management.link-repos-to-project-board %} 카드에 이슈 또는 끌어오기 요청 URL을 입력함으로써 연결되지 않은 리포지토리의 이슈 및 끌어오기 요청을 추가할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_project_v1 %}에 문제 추가 및 끌어오기 요청](/articles/adding-issues-and-pull-requests-to-a-project-board)”을 참조하세요.

1. 리포지토리를 연결하려는 {% data variables.projects.projects_v1_board %}로 이동합니다.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
4. 왼쪽 사이드바에서 **연결된 리포지토리** 를 클릭합니다.
![왼쪽 사이드바의 연결된 리포지토리 메뉴 옵션](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. **리포지토리 연결** 을 클릭합니다.
![연결된 리포지토리 탭의 리포지토리 연결 단추](/assets/images/help/projects/link-repository-button.png)
6. 연결하려는 리포지토리를 검색합니다.
![리포지토리 연결 창의 검색 필드](/assets/images/help/projects/search-to-link-repository.png)
7. **링크** 를 클릭합니다. 연결을 해제하려면 **연결 끊기** 를 클릭합니다.
![연결 단추](/assets/images/help/projects/link-button.png)

{% note %}

**참고:** 리포지토리를 조직 또는 사용자 소유 {% data variables.projects.projects_v1_board %}에 연결하려면 리포지토리에서 이슈를 사용하도록 설정해야 합니다. 즉, 리포지토리에 “이슈” 탭이 있습니다(포크된 리포지토리 이슈는 기본적으로 사용하지 않도록 설정됨).  리포지토리에 대해 이슈를 사용하거나 사용하지 않도록 설정하는 방법에 대한 자세한 내용은 “[리포지토리에 대해 이슈 사용 안 함](/github/managing-your-work-on-github/disabling-issues)”을 참조하세요.

{% endnote %}

## 추가 참고 자료

- “[{% data variables.product.prodname_projects_v1 %} 정보](/articles/about-project-boards)”
