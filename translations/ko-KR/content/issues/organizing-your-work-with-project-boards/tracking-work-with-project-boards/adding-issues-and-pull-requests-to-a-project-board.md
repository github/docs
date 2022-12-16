---
title: '자세한 내용은 {% data variables.product.prodname_project_v1 %}에 이슈 및 끌어오기 요청 추가를 참조하세요.'
intro: '이슈 및 끌어오기 요청을 카드 형식으로 {% data variables.projects.projects_v1_board %}에 추가하고 열로 심사할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-issues-and-pull-requests-to-a-project-board
  - /articles/adding-issues-and-pull-requests-to-a-project
  - /articles/adding-issues-and-pull-requests-to-a-project-board
  - /github/managing-your-work-on-github/adding-issues-and-pull-requests-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add issues & PRs to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 3adfb2c337a417b8e4f932ab9ae9860939217c6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109693'
---
{% data reusables.projects.project_boards_old %}

다음을 통해 {% data variables.projects.projects_v1_board %}에 이슈 또는 끌어오기 요청 카드를 추가할 수 있습니다.
- 사이드바의 **심사** 섹션에서 카드를 끕니다.
- 카드에 문제 또는 끌어오기 요청 URL을 입력합니다.
- {% data variables.projects.projects_v1_board %} 검색 사이드바에서 이슈 또는 끌어오기 요청을 검색합니다.

각 프로젝트 열에 최대 2,500장의 카드를 넣을 수 있습니다. 열이 최대 카드 수에 도달하면 해당 열로 카드를 이동할 수 없습니다.

![커서로 문제 카드를 심사 사이드바에서 프로젝트 보드 열로 이동](/assets/images/help/projects/add-card-from-sidebar.gif)

{% note %}

**참고:** 프로젝트 보드에 메모를 추가하여 작업 미리 알림 또는 {% data variables.product.product_name %}의 리포지토리에 있는 이슈 및 끌어오기 요청에 대한 참조로 사용하거나 {% data variables.projects.projects_v1_board %}에 관련 정보를 추가할 수도 있습니다. 자세한 내용은 “[프로젝트 보드에 메모 추가](/articles/adding-notes-to-a-project-board)”를 참조하세요.

{% endnote %}

{% data reusables.project-management.edit-in-project %}

{% data reusables.project-management.link-repos-to-project-board %} {% data variables.projects.projects_v1_board %}에 추가할 이슈 및 끌어오기 요청을 검색하면, 검색에서 자동으로 연결된 리포지토리로 범위가 지정됩니다. 한정자를 제거하여 모든 조직 리포지토리 내에서 검색할 수 있습니다. 자세한 내용은 “[프로젝트 보드에 리포지토리 연결](/articles/linking-a-repository-to-a-project-board)”을 참조하세요.

## {% data variables.projects.projects_v1_board %}에 이슈 및 끌어오기 요청 추가

1. 이슈 및 끌어오기 요청을 추가하려는 {% data variables.projects.projects_v1_board %}로 이동합니다.
2. {% data variables.projects.projects_v1_board %}에서 {% octicon "plus" aria-label="The plus icon" %} **카드 추가** 를 클릭합니다.
![카드 추가 단추](/assets/images/help/projects/add-cards-button.png)
3. 검색 한정자를 사용하여 {% data variables.projects.projects_v1_board %}에 추가할 이슈 및 끌어오기 요청을 검색합니다. 사용할 수 있는 검색 한정자에 대한 자세한 내용은 “[문제 검색](/articles/searching-issues)”을 참조하세요.
  ![문제 및 끌어오기 요청 검색](/assets/images/help/issues/issues_search_bar.png)

  {% tip %}

  **팁:**
    - 카드에 URL을 입력하여 문제 또는 끌어오기 요청을 추가할 수도 있습니다.
    - 특정 기능을 사용하는 경우 각 관련 문제 또는 해당 기능에 대한 끌어오기 요청에 레이블을 적용한 다음 레이블 이름을 검색하여 {% data variables.projects.projects_v1_board %}에 카드를 쉽게 추가할 수 있습니다. 자세한 내용은 “[문제 및 끌어오기 요청에 레이블 적용](/articles/applying-labels-to-issues-and-pull-requests)”을 참조하세요.

  {% endtip %}
4. 필터링된 이슈 및 끌어오기 요청 목록에서 {% data variables.projects.projects_v1_board %}에 추가할 카드를 끌어 올바른 열에 놓습니다. 또는 바로 가기 키를 사용하여 카드를 이동할 수 있습니다. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% tip %}

    **팁:** 끌어서 놓거나 바로 가기 키를 사용하여 카드를 다시 정렬하고 열 간에 이동할 수 있습니다. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

    {% endtip %}

## 사이드바에서 {% data variables.projects.projects_v1_board %}에 이슈 및 끌어오기 요청 추가

1. 문제 또는 끌어오기 요청의 오른쪽에서 **프로젝트 {% octicon "gear" aria-label="The Gear icon" %} 아이콘** 을 클릭합니다.
  ![사이드바의 프로젝트 보드 단추](/assets/images/help/projects/sidebar-project.png)
2. 추가하려는 {% data variables.projects.projects_v1_board %}에 대해 **최근**, **리포지토리**, **사용자** 또는 **조직** 탭을 클릭합니다.
  ![최근, 리포지토리 및 조직 탭](/assets/images/help/projects/sidebar-project-tabs.png)
3. **프로젝트 필터** 필드에 프로젝트 이름을 입력합니다.
  ![프로젝트 보드 검색 상자](/assets/images/help/projects/sidebar-search-project.png)
4. 이슈 또는 끌어오기 요청을 추가하려는 하나 이상의 {% data variables.projects.projects_v1_boards %}를 고릅니다.
  ![선택한 프로젝트 보드](/assets/images/help/projects/sidebar-select-project.png)
5. {% octicon "triangle-down" aria-label="The down triangle icon" %} 아이콘을 클릭한 다음 문제 또는 끌어오기 요청을 놓으려는 열을 클릭합니다. 선택한 {% data variables.projects.projects_v1_board %} 열의 아래쪽으로 카드가 이동합니다.
  ![카드를 열로 이동 메뉴](/assets/images/help/projects/sidebar-select-project-board-column-menu.png)

## 추가 참고 자료

- “[{% data variables.product.prodname_projects_v1 %} 정보](/articles/about-project-boards)”
- “[{% data variables.product.prodname_project_v1 %} 편집](/articles/editing-a-project-board)”
- “[{% data variables.product.prodname_project_v1 %}에서 카드 필터링](/articles/filtering-cards-on-a-project-board)”
