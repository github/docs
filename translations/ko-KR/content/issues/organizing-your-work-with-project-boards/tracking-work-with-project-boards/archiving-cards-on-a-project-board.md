---
title: '{% data variables.product.prodname_project_v1 %}에 카드 보관'
intro: '{% data variables.projects.projects_v1_board %} 카드를 보관하여 프로젝트의 기록 컨텍스트를 잃지 않고 워크플로를 정리할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Archive cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: bef90f56a55d6d087c21603586def91ec2f1c9ed
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109690'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_board %}의 자동화는 보관된 {% data variables.projects.projects_v1_board %} 카드에는 적용되지 않습니다. 예를 들어 {% data variables.projects.projects_v1_board %}의 보관함에서 문제를 닫으면 보관된 카드가 자동으로 “완료” 열로 이동되지 않습니다. {% data variables.projects.projects_v1_board %} 보관함에서 카드를 복원하면 카드가 보관된 열로 돌아갑니다.

## {% data variables.projects.projects_v1_board %}에 카드 보관

1. {% data variables.projects.projects_v1_board %}에서 보관할 카드를 찾은 다음, {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭합니다.
![프로젝트 보드 카드를 편집하기 위한 옵션 목록](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. **보관** 을 클릭합니다.
![메뉴에서 보관 옵션 선택](/assets/images/help/projects/archive-project-board-card.png)

## 사이드바에서 {% data variables.projects.projects_v1_board %}의 카드 복원

{% data reusables.project-management.click-menu %}
2. {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 아이콘을 클릭한 다음 **보관함 보기** 를 클릭합니다.
  ![메뉴에서 보관함 보기 옵션 선택](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. 보관하지 않으려는 {% data variables.projects.projects_v1_board %} 카드 위에서 **복원** 을 클릭합니다.
  ![프로젝트 보드 카드 복원 선택](/assets/images/help/projects/restore-card.png)
