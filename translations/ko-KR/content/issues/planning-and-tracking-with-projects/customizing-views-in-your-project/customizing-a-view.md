---
title: 보기 사용자 지정
intro: 프로젝트에서 레이아웃, 그룹화, 정렬을 변경하여 필요한 정보를 표시합니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
- /issues/trying-out-the-new-projects-experience/customizing-your-project-views
type: tutorial
topics:
- Projects
ms.openlocfilehash: 0a7d1076fcf1a9d7f20b65a5e0a75b7d8029f834
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106775"
---
## 프로젝트 레이아웃 변경

프로젝트를 테이블이나 보드로 볼 수 있습니다.

{% data reusables.projects.open-view-menu %}
1. “레이아웃”에서 **테이블** 또는 **보드** 를 클릭합니다.
   ![레이아웃 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/table-or-board.png)

 

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “레이아웃 전환”을 입력하기 시작합니다.

## 필드 표시 및 숨기기

특정 필드를 표시하거나 숨길 수 있습니다.

{% data reusables.projects.open-view-menu %}
1. “구성”에서 {% octicon "note" aria-label="the note icon" %} 및 현재 표시된 필드 목록을 클릭합니다.
   ![필드 메뉴 옵션 표시 및 숨기기를 보여 주는 스크린샷](/assets/images/help/projects-v2/show-hide-fields-menu-item.png)
1. 표시하거나 숨기려는 필드를 선택하거나 선택 취소합니다.
   ![필드 메뉴 표시 및 숨기기를 보여 주는 스크린샷](/assets/images/help/projects-v2/show-hide-fields.png)

테이블 뷰에서 개별 필드를 숨길 수도 있습니다.

1. 숨길 필드 옆에 있는 {% octicon "kebab-horizontal" aria-label="the kebab icon" %}을 클릭합니다.
   ![필드 메뉴 아이콘을 보여 주는 스크린샷](/assets/images/help/projects-v2/modify-field-menu.png)
1. {% octicon "eye-closed" aria-label="the eye closed icon" %} **필드 숨기기** 를 클릭합니다.
   ![필드 메뉴 숨기기 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/hide-field-via-menu.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “표시”, “숨기기” 또는 필드 이름을 입력하기 시작합니다.

## 필드 순서 다시 지정

테이블 레이아웃에서 필드의 순서를 변경할 수 있습니다.

1. 필드 머리글을 클릭합니다.
   ![필드 머리글을 보여 주는 스크린샷](/assets/images/help/projects-v2/select-field-header.png)
2. 계속 클릭하면서 필드를 원하는 위치로 끕니다.

## 행 순서 다시 지정

테이블 레이아웃에서 행의 순서를 변경할 수 있습니다.

1. 행의 시작 부분에 있는 숫자를 클릭합니다.
   ![행 번호를 보여 주는 스크린샷](/assets/images/help/projects-v2/select-row-number.png)
2. 계속 클릭하면서 행을 원하는 위치로 끕니다.

## 필드 값으로 정렬

테이블 레이아웃에서 필드 값을 기준으로 항목을 정렬할 수 있습니다.

{% note %}

**참고:** 테이블이 정렬되면 행을 수동으로 다시 정렬할 수 없습니다.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. **정렬** 을 클릭합니다.
   ![정렬 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/sort-menu-item.png)
1. 정렬 기준으로 사용할 필드를 클릭합니다.
   ![정렬 메뉴를 보여 주는 스크린샷](/assets/images/help/projects-v2/sort-menu.png)
2. 필요에 따라 정렬 방향을 변경하려면 {% octicon "sort-desc" aria-label="the sort icon" %}을 클릭합니다.
   ![정렬 순서 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/sort-order.png)
3. 필요에 따라 정렬을 제거하려면 목록 아래쪽에서 {% octicon "x" aria-label="the x icon" %} **정렬 안 함** 을 클릭합니다.
   ![“정렬 안 함”을 보여 주는 스크린샷](/assets/images/help/projects-v2/no-sorting.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “정렬 기준”을 입력하기 시작합니다.

## 테이블 레이아웃의 필드 값에 따라 그룹화

테이블 레이아웃에서 사용자 지정 필드 값으로 항목을 그룹화할 수 있습니다. 항목이 그룹화될 때 항목을 새 그룹으로 끌면 해당 그룹의 값이 적용됩니다. 예를 들어 “상태”별로 그룹화한 다음 상태가 `In progress`인 항목을 `Done` 그룹으로 끌면 항목의 상태가 `Done`으로 전환됩니다. 마찬가지로 그룹에 새 항목을 추가하면 새 항목이 그룹의 값으로 채워집니다.

{% note %}

**참고:** 제목, 레이블, 검토자 또는 연결된 끌어오기 요청별로 그룹화할 수 없습니다.

{% endnote %}

{% data reusables.projects.open-view-menu %}
1. {% octicon "rows" aria-label="the rows icon" %} **그룹** 을 클릭합니다.
   ![그룹 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/group-menu-item.png)
1. 그룹화할 필드를 클릭합니다.
   ![그룹 메뉴를 보여 주는 스크린샷](/assets/images/help/projects-v2/group-menu.png)
2. 필요에 따라 그룹화하지 않으려면 목록 맨 아래에 {% octicon "x" aria-label="the x icon" %} **그룹화 안 함** 을 클릭합니다.
   ![“그룹화 안 함”을 보여 주는 스크린샷](/assets/images/help/projects-v2/no-grouping.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “그룹화 기준”을 입력하기 시작합니다.

{% ifversion projects-v2-numeric-summary %}

## 숫자 필드의 합계 표시

그룹 또는 열의 항목 수를 포함하여 더 많은 숫자 필드 중 하나의 합계를 표시하도록 보기를 구성할 수 있습니다. 예를 들어 각 항목이 완료되는 데 걸리는 시간을 추적하는 숫자 필드가 있는 경우 각 그룹 또는 열에 대해 해당 시간의 합계를 표시할 수 있습니다.

보드 레이아웃에서 필드 합계는 각 열의 맨 위에 표시됩니다. 테이블 레이아웃에서 필드별로 그룹화할 때 필드 합계가 각 그룹의 헤더에 포함됩니다.

{% data reusables.projects.open-view-menu %}
1. {% octicon "number" aria-label="the number icon" %} **Field sum** 을 클릭합니다.
   
   ![필드 합계 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/field-sum-menu.png)
   
1. 포함할 필드를 선택합니다.
   
   ![필드 합계 메뉴를 보여 주는 스크린샷](/assets/images/help/projects-v2/field-sum-select-field.png)
   

{% endif %}

## 보드 레이아웃에서 열 필드 설정

보드 레이아웃에서 열에 대한 단일 선택 또는 반복 필드를 선택합니다. 항목을 새 열로 끌면 해당 열의 값이 끈 항목에 적용됩니다. 예를 들어 보드 열에 “상태” 필드를 사용한 다음 상태가 `In progress`인 항목을 `Done` 열로 끌면 항목 상태가 `Done`으로 전환됩니다.

{% data reusables.projects.open-view-menu %}
1. {% octicon "columns" aria-label="the columns icon" %} **열 필드** 를 클릭합니다.
   ![열 필드 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/column-field-menu-item.png)
1. 사용하려는 필드를 클릭합니다.
   ![열 필드 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/column-field-menu.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “열 필드 기준”을 입력하기 시작합니다.

{% ifversion projects-v2-column-visibility %}

## 보드 레이아웃에서 열 표시 및 숨기기

보드 레이아웃에서 표시할 열을 선택할 수 있습니다. 사용 가능한 열은 선택한 열 필드의 내용으로 구성됩니다.

1. 보드 레이아웃에서 열의 오른쪽으로 스크롤하고 {% octicon "plus" aria-label="the plus icon" %}을 클릭합니다.
   
   ![더하기 기호 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/board-add-column.png)
   
1. 표시할 열을 선택합니다.
   
   ![열 목록을 보여 주는 스크린샷](/assets/images/help/projects-v2/board-select-columns.png)
   
{% endif %}
