---
title: '{% data variables.product.prodname_projects_v1 %}에 대한 자동화 구성'
intro: '지정된 이벤트가 발생할 때 이슈 및 끌어오기 요청을 {% data variables.projects.projects_v1_board %} 열로 이동하도록 자동 워크플로를 설정할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/configuring-automation-for-project-boards
  - /articles/configuring-automation-for-project-boards
  - /github/managing-your-work-on-github/configuring-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Projects
  - Issues
  - Project management
shortTitle: Configure automation
type: how_to
allowTitleToDifferFromFilename: true
ms.openlocfilehash: faf559c3423178b43f3b524bbf3cdc41acd18a92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109699'
---
{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} 자세한 내용은 “[{% data variables.product.prodname_projects_v1 %}에 대한 자동화 정보](/articles/about-automation-for-project-boards)”를 참조하세요.

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**팁**: 자동화를 이미 구성한 열을 편집하려면 열 하단에서 **관리** 를 클릭합니다.

{% endtip %}

1. 자동화하려는 {% data variables.projects.projects_v1_board %}로 이동합니다.
2. 자동화할 열에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭합니다.
![편집 아이콘](/assets/images/help/projects/edit-column-button.png)
3. **자동화 관리** 를 클릭합니다.
![자동화 관리 단추](/assets/images/help/projects/manage-automation-button.png)
4. 사전 설정 드롭다운 메뉴를 사용하여 자동화 사전 설정을 선택합니다.
![메뉴에서 사전 설정 자동화 선택](/assets/images/help/projects/select-automation.png)
5. 열에 대해 구성하려는 워크플로 자동화를 선택합니다.
![열 자동화를 위한 옵션 목록](/assets/images/help/projects/select-automation-options-existing-column.png)
6. **업데이트 자동화** 를 클릭합니다.

## 추가 참고 자료
- “[{% data variables.product.prodname_projects_v1 %}에 대한 자동화 정보](/articles/about-automation-for-project-boards)”
