---
title: '{% data variables.product.prodname_project_v1 %} 복사'
intro: '{% data variables.projects.projects_v1_board %}를 복사하여 새 프로젝트를 빠르게 만들 수 있습니다. 자주 사용되거나 고도로 사용자 지정된 {% data variables.projects.projects_v1_boards %}를 복사하면 워크플로를 표준화하는 데 도움이 됩니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 33f2822f338a2210c87ec9baad986231f11fe310
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108942'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}를 복사하면 {% data variables.projects.projects_v1_board %}의 제목, 설명 및 자동화 구성을 다시 사용할 수 있습니다. {% data variables.projects.projects_v1_boards %}를 복사하여 유사한 워크플로에 대해 새 {% data variables.projects.projects_v1_boards %}를 만드는 수동 프로세스를 제거할 수 있습니다.

쓰기 권한이 있는 리포지토리 또는 조직에 복사하려면 {% data variables.projects.projects_v1_board %}에 대한 읽기 권한이 있어야 합니다.

{% data variables.projects.projects_v1_board %}를 조직에 복사하면 {% data variables.projects.projects_v1_board %}의 표시 유형은 기본적으로 프라이빗으로 설정되며 표시 유형을 변경하는 옵션이 있습니다. 자세한 내용은 “[{% data variables.product.prodname_project_v1 %} 표시 유형 변경](/articles/changing-project-board-visibility/)”을 참조하세요.

{% data variables.projects.projects_v1_board %}의 자동화도 기본적으로 사용하도록 설정됩니다. 자세한 내용은 “[{% data variables.product.prodname_projects_v1 %}에 대한 자동화 정보](/articles/about-automation-for-project-boards/)”를 참조하세요.

1. 복사하려는 {% data variables.projects.projects_v1_board %}로 이동합니다.
{% data reusables.project-management.click-menu %}
3. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 아이콘을 클릭한 다음 **편집** 을 클릭합니다.
![프로젝트 보드 사이드바의 드롭다운 메뉴에 있는 복사 옵션](/assets/images/help/projects/project-board-copy-setting.png)
4. “소유자” 아래에서 드롭다운 메뉴를 사용하여 프로젝트 보드를 복사할 리포지토리 또는 조직을 클릭합니다.
![드롭다운 메뉴에서 복사한 프로젝트 보드의 소유자 선택](/assets/images/help/projects/copied-project-board-owner.png)
5. 필요에 따라 “프로젝트 보드 이름”에서 복사한 {% data variables.projects.projects_v1_board %}의 이름을 입력합니다.
![복사한 프로젝트 보드의 이름을 입력할 필드](/assets/images/help/projects/copied-project-board-name.png)
6. 필요에 따라 “설명” 아래에 다른 사용자가 볼 수 있도록 복사한 프로젝트 보드의 설명을 입력합니다.
![복사한 프로젝트 보드의 설명을 입력할 필드](/assets/images/help/projects/copied-project-board-description.png)
7. 필요에 따라 “자동화 설정” 아래에서, 구성된 자동 워크플로를 복사할지 여부를 선택합니다. 이 옵션은 기본적으로 사용됩니다. 자세한 내용은 “[프로젝트 보드에 대한 자동화 정보](/articles/about-automation-for-project-boards/)”를 참조하세요.
![복사한 프로젝트 보드에 대한 자동화 설정 선택](/assets/images/help/projects/copied-project-board-automation-settings.png) {% data reusables.project-management.choose-visibility %}
9. **프로젝트 복사** 를 클릭합니다.
![복사 확인 단추](/assets/images/help/projects/confirm-copy-project-board.png)
