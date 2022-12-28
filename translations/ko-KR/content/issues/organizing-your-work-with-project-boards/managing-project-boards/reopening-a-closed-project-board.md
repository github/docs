---
title: '닫힌 {% data variables.product.prodname_project_v1 %} 다시 열기'
intro: '닫힌 {% data variables.projects.projects_v1_board %}를 다시 열고 {% data variables.projects.projects_v1_board %}에 대해 구성된 워크플로 자동화를 다시 시작할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/reopening-a-closed-project-board
  - /articles/reopening-a-closed-project-board
  - /github/managing-your-work-on-github/reopening-a-closed-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Reopen {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e0101378c0b7049f7cba5e04dd28231a1237d0c5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109573'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}를 닫으면 {% data variables.projects.projects_v1_board %}에 대해 구성된 워크플로 자동화가 기본적으로 일시 중지됩니다. 자세한 내용은 “[{% data variables.product.prodname_project_v1 %} 닫기](/articles/closing-a-project-board)”를 참조하세요.

{% data variables.projects.projects_v1_board %}를 다시 열면 보드에 대해 구성된 자동화 설정에 따라 보드의 카드 위치를 업데이트하는 자동화를 동기화할 수 있습니다.

1. 다시 열 {% data variables.projects.projects_v1_board %}로 이동합니다.
{% data reusables.project-management.click-menu %}
3. {% data variables.projects.projects_v1_board %}에 대한 자동화를 동기화할지 아니면 동기화하지 않고 {% data variables.projects.projects_v1_board %}를 다시 열지 선택합니다.
    - {% data variables.projects.projects_v1_board %}를 다시 열고 자동화를 동기화하려면 **프로젝트 다시 열기 및 동기화** 를 클릭합니다.
  ![“프로젝트 다시 열기 및 다시 동기화” 단추 선택](/assets/images/help/projects/reopen-and-sync-project.png)
    - 자동화를 동기화하지 않고 {% data variables.projects.projects_v1_board %}를 다시 열려면 다시 열기 드롭다운 메뉴를 사용하여 **다시 열기만** 을 클릭합니다. 그런 다음 **다시 열기만** 을 클릭합니다.
  ![닫힌 프로젝트 보드 드롭다운 메뉴 다시 열기](/assets/images/help/projects/reopen-closed-project-board-drop-down-menu.png)

## 추가 참고 자료

- “[{% data variables.product.prodname_projects_v1 %}에 대한 자동화 구성](/articles/configuring-automation-for-project-boards)”
