---
title: '{% data variables.product.prodname_project_v1 %}에서 카드 필터링'
intro: '{% data variables.projects.projects_v1_board %}에서 카드를 필터링하여 특정 카드를 검색하거나 카드의 하위 집합을 볼 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f203785a6fc18dc5f67b2ae62934aa10c2f6e8b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109557'
---
{% data reusables.projects.project_boards_old %}

카드에서 모든 담당자, 마일스톤 또는 레이블을 클릭하여 해당 한정자로 {% data variables.projects.projects_v1_board %}를 필터링할 수 있습니다. 검색을 지우려면 동일한 담당자, 마일스톤 또는 레이블을 다시 클릭하면 됩니다.

각 {% data variables.projects.projects_v1_board %}의 맨 위에 있는 “필터 카드” 검색 표시줄을 사용하여 카드를 검색할 수도 있습니다. 모든 조합에서 다음 검색 한정자를 사용하거나 검색하려는 일부 텍스트를 입력하여 카드를 필터링할 수 있습니다.

- `author:USERNAME`을 사용하여 작성자별 카드 필터링
- `assignee:USERNAME` 또는 `no:assignee`를 사용하여 할당자별 카드 필터링
- `label:LABEL`, `label:"MULTI-WORD LABEL NAME"` 또는 `no:label`을 사용하여 라벨별 카드 필터링
- `milestone:MY-MILESTONE`을 사용하여 마일스톤별 필터링
- `state:open`, `state:closed` 또는 `state:merged`를 사용하여 상태별 카드 필터링
- `review:none`, `review:required`, `review:approved` 또는 `review:changes_requested`를 사용하여 검토 상태별 필터링
- `status:pending`, `status:success` 또는 `status:failure`를 사용하여 검사 상태별 필터링
- `type:issue`, `type:pr` 또는 `type:note`를 사용하여 형식별 카드 필터링
- `is:open`, `is:closed` 또는 `is:merged`와 `is:issue`, `is:pr` 또는 `is:note`를 사용하여 상태 및 형식별 카드 필터링
- `linked:pr`을 사용하여 닫는 참조를 통해 끌어오기 요청에 연결되는 문제별로 카드 필터링
- `repo:ORGANIZATION/REPOSITORY`를 사용하여 조직 전체 {% data variables.projects.projects_v1_board %}에서 리포지토리별로 카드 필터링

1. 필터링할 카드가 포함된 {% data variables.projects.projects_v1_board %}로 이동합니다.
2. 프로젝트 카드 열 위에서 “카드 필터링” 검색 창을 클릭하고 검색 쿼리를 입력하여 카드를 필터링합니다.
![카드 필터링 검색 창](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**팁:** 필터링된 카드를 끌어서 놓거나 바로 가기 키를 사용하여 열 간에 이동할 수 있습니다. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## 추가 참고 자료

- “[{% data variables.product.prodname_projects_v1 %} 정보](/articles/about-project-boards)”
- 자세한 내용은 “[{% data variables.product.prodname_project_v1 %}에 이슈 및 끌어오기 요청 추가](/articles/adding-issues-and-pull-requests-to-a-project-board)”를 참조하세요.
- “[{% data variables.product.prodname_project_v1 %}에 메모 추가](/articles/adding-notes-to-a-project-board)”
