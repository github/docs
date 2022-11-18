---
title: '{% data variables.product.prodname_project_v1 %} 선택'
intro: '{% data variables.projects.projects_v1_board %}의 모든 작업을 완료했거나 더 이상 {% data variables.projects.projects_v1_board %}를 사용할 필요가 없는 경우 {% data variables.projects.projects_v1_board %}를 닫을 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/closing-a-project-board
  - /articles/closing-a-project
  - /articles/closing-a-project-board
  - /github/managing-your-work-on-github/closing-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 21dfb0c6837f97d567f19168cd7f343aac06a4c0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109702'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}를 닫으면 구성된 모든 워크플로 자동화가 기본적으로 일시 중지됩니다.

{% data variables.projects.projects_v1_board %}를 다시 열면 보드에 대해 구성된 자동화 설정에 따라 보드의 카드 위치를 업데이트하는 자동화를 동기화할 수 있습니다. 자세한 내용은 “[닫힌 {% data variables.product.prodname_project_v1 %} 다시 열기](/articles/reopening-a-closed-project-board)” 또는 “[{% data variables.product.prodname_projects_v1 %}에 대한 자동화 정보](/articles/about-automation-for-project-boards)”를 참조하세요.

1. 리포지토리 또는 조직의 또는 개인 계정이 소유한 {% data variables.projects.projects_v1_boards %}의 목록으로 이동합니다.
2. 프로젝트 목록에서 닫을 {% data variables.projects.projects_v1_board %} 옆에 있는 {% octicon "chevron-down" aria-label="The chevron icon" %}을 클릭합니다.
![프로젝트 보드 이름 오른쪽에 있는 펼침 단추 아이콘](/assets/images/help/projects/project-list-action-chevron.png)
3. **닫기** 를 클릭합니다.
![프로젝트 보드의 드롭다운 메뉴에서 항목 닫기](/assets/images/help/projects/close-project.png)

## 추가 참고 자료

- “[{% data variables.product.prodname_projects_v1 %} 정보](/articles/about-project-boards)”
- “[{% data variables.product.prodname_project_v1 %} 삭제](/articles/deleting-a-project-board)”
- “[리포지토리에서 {% data variables.product.prodname_projects_v1 %} 사용 안 함](/articles/disabling-project-boards-in-a-repository)”
- “[조직에서 {% data variables.product.prodname_projects_v1 %} 사용 안 함](/articles/disabling-project-boards-in-your-organization)”
- “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”
