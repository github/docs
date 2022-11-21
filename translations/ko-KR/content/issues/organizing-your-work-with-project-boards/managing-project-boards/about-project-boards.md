---
title: '{% data variables.product.prodname_projects_v1 %} 정보'
intro: '{% data variables.product.product_name %}의 {% data variables.product.prodname_projects_v1_caps %}는 작업을 구성하고 우선 순위를 지정하는 데 도움이 됩니다. 특정 기능 작업, 포괄적인 로드맵 또는 릴리스 검사 목록을 위한 {% data variables.projects.projects_v1_boards %}를 만들 수 있습니다. {% data variables.product.prodname_projects_v1 %}를 사용하면 필요에 맞는 사용자 지정 워크플로를 유연하게 만들 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/about-project-boards
  - /articles/about-projects
  - /articles/about-project-boards
  - /github/managing-your-work-on-github/about-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c14ee749a2e97bb9ef608e1b2d548098f18af0d0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107623'
---
{% data reusables.projects.project_boards_old %}

{% data variables.projects.projects_v1_boards_caps %}는 선택한 열에서 카드로 분류되는 문제, 끌어오기 요청, 메모로 구성됩니다. 끌어서 놓거나 바로 가기 키를 사용하여 열 내에서 카드의 순서를 변경하고, 열에서 열로 카드를 이동하고, 열의 순서를 변경할 수 있습니다.

{% data variables.projects.projects_v1_board_caps %} 카드에는 레이블, 담당자, 상태, 책임 사용자와 같은 이슈 및 끌어오기 요청에 대한 관련 메타데이터가 포함되어 있습니다. {% data reusables.project-management.edit-in-project %}

{% data variables.location.product_location %}의 리포지토리에서 작업 미리 알림, 문제에 대한 참조 및 끌어오기 요청으로 사용하거나 {% data variables.projects.projects_v1_board %}와 관련된 정보를 추가할 수 있습니다. 메모에 링크를 추가하여 다른 {% data variables.projects.projects_v1_board %}에 대한 참조 카드를 만들 수 있습니다. 메모가 요구를 충족하지 못하는 경우 이를 이슈로 변환할 수 있습니다. 노트를 문제로 변환하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_project_v1 %}에 노트 추가](/articles/adding-notes-to-a-project-board)”를 참조하세요.

프로젝트 보드 유형:

- **사용자 소유의 {% data variables.projects.projects_v1_board %}** 는 프라이빗 리포지토리의 이슈 및 끌어오기 요청을 포함할 수 있습니다.
- **조직 전체의 {% data variables.projects.projects_v1_board %}** 는 조직에 속한 리포지토리의 이슈 및 끌어오기 요청을 포함할 수 있습니다.  {% data reusables.project-management.link-repos-to-project-board %}자세한 내용은 “[리포지토리를 {% data variables.product.prodname_project_v1 %}에 연결](/articles/linking-a-repository-to-a-project-board)”을 참조하세요.
- **리포지토리 {% data variables.projects.projects_v1_board %}** 는 단일 리포지토리 내에서 이슈 및 끌어오기 요청으로 범위가 지정됩니다. 또한 다른 리포지토리에 있는 이슈 및 끌어오기 요청을 참조하는 메모를 포함할 수도 있습니다.

## {% data variables.projects.projects_v1_boards %} 만들기 및 보기

조직에 대한 {% data variables.projects.projects_v1_board %}를 만들려면 조직 구성원이어야 합니다. {% data variables.projects.projects_v1_board %} 관리자 권한이 있는 조직 소유자 및 사용자는 {% data variables.projects.projects_v1_board %}에 대한 액세스를 사용자 지정할 수 있습니다.

{% ifversion classic-project-visibility-permissions %}{% data reusables.projects.owners-can-limit-visibility-permissions %}{% endif %}

보기 권한이 없는 리포지토리의 이슈 또는 끌어오기 요청이 조직 소유의 {% data variables.projects.projects_v1_board %}에 포함된 경우 카드가 수정됩니다.  자세한 내용은 “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”을 참조하세요.

작업 보기는 사용자가 만들거나 열 간에 이동한 카드와 같은 {% data variables.projects.projects_v1_board %}의 최근 기록을 보여 줍니다. 작업 보기에 액세스하려면 **메뉴** 를 클릭하고 아래로 스크롤합니다.

{% data variables.projects.projects_v1_board %}에서 특정 카드를 찾거나 카드의 하위 집합을 보려면 {% data variables.projects.projects_v1_board %} 카드를 필터링할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_project_v1 %} 에서 카드 필터링](/articles/filtering-cards-on-a-project-board)”을 참조하세요.

워크플로를 단순화하고 완료된 작업을 {% data variables.projects.projects_v1_board %}에 유지하지 않으려면 카드를 보관할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_project_v1 %} 에서 카드 보관](/articles/archiving-cards-on-a-project-board)”을 참조하세요.

{% data variables.projects.projects_v1_board %} 작업의 모두를 완료했거나 더 이상 {% data variables.projects.projects_v1_board %}를 사용할 필요가 없는 경우 {% data variables.projects.projects_v1_board %}를 닫을 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_project_v1 %} 닫기](/articles/closing-a-project-board)”를 참조하세요.

다른 방식으로 작업을 추적하려는 경우 [리포지토리에서 {% data variables.projects.projects_v1_boards %} 사용 안 함](/articles/disabling-project-boards-in-a-repository) 또는 [조직에서 {% data variables.projects.projects_v1_boards %} 사용 안 함](/articles/disabling-project-boards-in-your-organization)을 설정할 수 있습니다.

{% data reusables.project-management.project-board-import-with-api %}

## {% data variables.projects.projects_v1_boards %}에 대한 템플릿

템플릿을 사용하여 새 {% data variables.projects.projects_v1_board %}를 빠르게 설정할 수 있습니다. 템플릿을 사용하여 {% data variables.projects.projects_v1_board %}를 만들면 새 보드에는 열과 {% data variables.product.prodname_projects_v1 %}를 사용하기 위한 팁이 있는 카드가 포함됩니다. 자동화가 이미 구성된 템플릿을 선택할 수도 있습니다.

| 템플릿 | 설명 |
| --- | --- |
| 기본 Kanban | 할 일, 진행 중, 완료 열을 사용하여 작업 추적 |
| 자동화된 Kanban | 카드가 할 일, 진행 중, 완료 열 간에 자동으로 이동 | 
| 검토가 포함된 자동화된 Kanban | 카드가 끌어오기 요청 검토 상태에 대한 추가 트리거와 함께 할 일, 진행 중, 완료 열 간에 자동으로 이동 |
| 버그 심사 | 할 일, 높은 우선 순위, 낮은 우선 순위, 닫힌 열을 사용하여 버그 심사 및 우선 순위 지정 |

{% data variables.product.prodname_projects_v1 %},의 자동화에 대한 자세한 내용은 “[{% data variables.product.prodname_projects_v1 %}에 대한 자동화 정보](/articles/about-automation-for-project-boards)”를 참조하세요.

![기본 kanban 템플릿이 있는 {% data variables.product.prodname_project_v1 %}](/assets/images/help/projects/project-board-basic-kanban-template.png)

{% data reusables.project-management.copy-project-boards %}

## 추가 참고 자료

- “[{% data variables.product.prodname_project_v1 %} 만들기](/articles/creating-a-project-board)”
- “[{% data variables.product.prodname_project_v1 %} 편집](/articles/editing-a-project-board)”{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_project_v1 %} 복사](/articles/copying-a-project-board)”{% endif %}
- 자세한 내용은 “[{% data variables.product.prodname_project_v1 %}에 이슈 및 끌어오기 요청 추가](/articles/adding-issues-and-pull-requests-to-a-project-board)”를 참조하세요.
- “[조직에 대한 {% data variables.product.prodname_project_v1_caps %} 권한](/articles/project-board-permissions-for-an-organization)”
- “[바로 가기 키](/articles/keyboard-shortcuts/#project-boards)”
