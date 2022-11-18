---
title: '{% data variables.product.prodname_project_v1 %}에 메모 추가'
intro: '{% data variables.projects.projects_v1_board %}에 메모를 추가하여 작업 미리 알림으로 사용하거나 {% data variables.projects.projects_v1_board %} 관련 정보를 추가할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/adding-notes-to-a-project-board
  - /articles/adding-notes-to-a-project
  - /articles/adding-notes-to-a-project-board
  - /github/managing-your-work-on-github/adding-notes-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Add notes to {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: fc9df02b211056a08ed608a6c98b9d2f0b78c5b7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109789'
---
{% data reusables.projects.project_boards_old %}

{% tip %}

**팁:**
- Markdown 구문을 사용하여 메모의 서식을 지정할 수 있습니다. 예를 들어 제목, 링크, 작업 목록 또는 이모지 등을 사용할 수 있습니다. 자세한 내용은 “[기본 쓰기 및 서식 구문](/articles/basic-writing-and-formatting-syntax)”을 참조하세요.
- 끌어서 놓거나 바로 가기 키를 사용하여 메모를 다시 정렬하고 열 간에 이동할 수 있습니다. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}
- {% data variables.projects.projects_v1_board %}에 하나 이상의 열이 있어야 메모를 추가할 수 있습니다. 자세한 내용은 “[프로젝트 보드 만들기](/articles/creating-a-project-board)”를 참조하세요.

{% endtip %}

문제, 끌어오기 요청 또는 다른 {% data variables.projects.projects_v1_board %}에 대한 URL을 메모에 추가하면 텍스트 아래의 요약 카드에 미리 보기가 표시됩니다.

![문제 및 다른 프로젝트 보드의 미리 보기를 보여 주는 프로젝트 보드 카드](/assets/images/help/projects/note-with-summary-card.png)

## {% data variables.projects.projects_v1_board %}에 메모 추가

1. 메모를 추가할 {% data variables.projects.projects_v1_board %}로 이동합니다.
2. 메모를 추가할 열에서 {% octicon "plus" aria-label="The plus icon" %} 아이콘을 클릭합니다.
![열 머리글의 더하기 아이콘](/assets/images/help/projects/add-note-button.png)
3. 메모를 입력한 다음 **추가** 를 클릭합니다.
![메모 입력 필드 및 카드 추가 단추](/assets/images/help/projects/create-and-add-note-button.png)

  {% tip %}

  **팁:** 카드에 해당 URL을 입력하여 메모에서 문제 또는 끌어오기 요청을 참조할 수 있습니다.

  {% endtip %}

## 메모를 문제로 변환

메모를 만들고 요구 사항에 충분하지 않다는 것을 알게 되면 해당 메모를 문제로 변환할 수 있습니다.

메모를 문제로 변환하면 메모의 콘텐츠를 사용하여 문제가 자동으로 만들어집니다. 메모의 첫 번째 줄은 문제 제목이며 메모의 추가 콘텐츠는 문제 설명에 추가됩니다.

{% tip %}

**팁:** 메모 본문에 있는 콘텐츠를 추가하여 다른 사람에게 @mention으로 멘션하고, 다른 문제 또는 끌어오기 요청에 연결하고, 이모지를 추가할 수 있습니다. {% data variables.product.prodname_dotcom %} Flavored Markdown 기능은 {% data variables.projects.projects_v1_board %} 메모 내에서 지원되지 않지만 메모가 문제로 변환되면 올바르게 표시됩니다. 이 기능 사용에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 쓰기 및 서식 지정 정보](/articles/about-writing-and-formatting-on-github)”를 참조하세요.

{% endtip %}

1. 문제로 변환하려는 메모로 이동합니다.
{% data reusables.project-management.project-note-more-options %}
3. **문제로 변환** 을 클릭합니다.
  ![문제로 변환 단추](/assets/images/help/projects/convert-to-issue.png)
4. 카드가 조직 전체 {% data variables.projects.projects_v1_board %}에 있는 경우 드롭다운 메뉴에서 문제를 추가할 리포지토리를 선택합니다.
  ![문제를 만들 수 있는 리포지토리를 나열하는 드롭다운 메뉴](/assets/images/help/projects/convert-note-choose-repository.png)
5. 필요에 따라 미리 채워진 문제 제목을 편집하고 문제 본문을 입력합니다.
  ![문제 제목 및 본문 필드](/assets/images/help/projects/convert-note-issue-title-body.png)
6. **문제로 변환** 을 클릭합니다.
7. 메모는 자동으로 문제로 변환됩니다. {% data variables.projects.projects_v1_board %}에서 새 이슈 카드는 이전 메모와 동일한 위치에 있습니다.

## 메모 편집 및 제거

1. 편집하거나 제거할 노트로 이동합니다.
{% data reusables.project-management.project-note-more-options %}
3. 메모의 콘텐츠를 편집하려면 **메모 편집** 을 클릭합니다.
  ![메모 편집 단추](/assets/images/help/projects/edit-note.png)
4. 메모의 콘텐츠를 삭제하려면 **메모 삭제** 를 클릭합니다.
  ![메모 삭제 단추](/assets/images/help/projects/delete-note.png)

## 추가 참고 자료

- “[{% data variables.product.prodname_projects_v1 %} 정보](/articles/about-project-boards)”
- “[{% data variables.product.prodname_project_v1 %} 만들기](/articles/creating-a-project-board)”
- “[{% data variables.product.prodname_project_v1 %} 편집](/articles/editing-a-project-board)”
- 자세한 내용은 “[{% data variables.product.prodname_project_v1 %}에 이슈 및 끌어오기 요청 추가](/articles/adding-issues-and-pull-requests-to-a-project-board)”를 참조하세요.
