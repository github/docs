---
title: 프로젝트(베타) 보기 사용자 지정
intro: 프로젝트에서 레이아웃, 그룹화, 정렬 및 필터를 변경하여 필요한 정보를 표시합니다.
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Projects
ms.openlocfilehash: 86b8d7e439b19327b1f752f8d893e349665168f4
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135363"
---
{% data reusables.projects.projects-beta %}

## <a name="project-command-palette"></a>프로젝트 명령 팔레트

프로젝트 명령 팔레트를 사용하여 프로젝트에서 빠르게 설정을 변경하고 명령을 실행합니다.

1. {% data reusables.projects.open-command-palette %}
2. 명령의 일부를 입력하거나 명령 팔레트 창을 탐색하여 명령을 찾습니다. 명령의 더 많은 예제는 다음 섹션을 참조하세요.

## <a name="changing-the-project-layout"></a>프로젝트 레이아웃 변경

프로젝트를 테이블이나 보드로 볼 수 있습니다.

1. {% data reusables.projects.open-command-palette %}
2. “레이아웃 전환”을 입력하기 시작합니다.
3. 필요한 명령을 선택합니다. 예를 들어 **레이아웃 전환: 테이블** 을 선택합니다.

또는 보기 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 **테이블** 또는 **보드** 를 클릭합니다.

## <a name="showing-and-hiding-fields"></a>필드 표시 및 숨기기

특정 필드를 표시하거나 숨길 수 있습니다.

### <a name="showing-and-hiding-fields-in-table-layout"></a>테이블 레이아웃에서 필드 표시 및 숨기기

1. {% data reusables.projects.open-command-palette %}
2. 수행하려는 작업(“표시” 또는 “숨기기”) 또는 필드 이름을 입력하기 시작합니다.
3. 필요한 명령을 선택합니다. 예를 들어 **표시: 마일스톤** 을 선택합니다.

또는 테이블 오른쪽에 있는 {% octicon "plus" aria-label="the plus icon" %}을 클릭합니다. 표시되는 드롭다운 메뉴에서 표시하거나 숨길 필드를 지정합니다. {% octicon "check" aria-label="check icon" %}은 표시되는 필드를 나타냅니다.

또는 필드 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 **필드 숨기기** 를 클릭합니다.

### <a name="showing-and-hiding-fields-in-board-layout"></a>보드 레이아웃에서 필드 표시 및 숨기기

1. 보기 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭합니다.
2. **구성** 에서 {% octicon "list-unordered" aria-label="the unordered list icon" %}을 클릭합니다.
3. 표시되는 메뉴에서 필드를 추가하려면 필드를 선택하고 보기에서 제거하려면 필드를 선택 취소합니다.

## <a name="reordering-fields"></a>필드 순서 다시 지정

필드의 순서를 변경할 수 있습니다.

1. 필드 머리글을 클릭합니다.
2. 클릭하는 동안 필드를 필요한 위치로 끌어옵니다.

## <a name="reordering-rows"></a>행 순서 다시 지정

테이블 레이아웃에서 행의 순서를 변경할 수 있습니다.

1. 행의 시작 부분에 있는 숫자를 클릭합니다.
2. 클릭하는 동안 행을 필요한 위치로 끌어옵니다.

## <a name="sorting-by-field-values"></a>필드 값으로 정렬

테이블 레이아웃에서 필드 값을 기준으로 항목을 정렬할 수 있습니다.

1. {% data reusables.projects.open-command-palette %}
2. “정렬 기준” 또는 정렬 기준으로 사용할 필드 이름을 입력하기 시작합니다.
3. 필요한 명령을 선택합니다. 예를 들어 **정렬 기준: 담당자, 오름차순** 입니다.

또는 정렬 기준으로 사용할 필드 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 **오름차순 정렬** 또는 **내림차순 정렬** 을 클릭합니다.

{% note %}

**참고:** 테이블이 정렬되면 행을 수동으로 다시 정렬할 수 없습니다.

{% endnote %}

비슷한 단계에 따라 정렬을 제거합니다.

1. {% data reusables.projects.open-command-palette %}
2. “정렬 기준 제거”를 입력하기 시작합니다.
3. **정렬 기준 제거** 를 선택합니다.

또는 보기 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 현재 정렬을 나타내는 메뉴 항목을 클릭합니다.

## <a name="grouping-by-field-values-in-table-layout"></a>테이블 레이아웃의 필드 값에 따라 그룹화

테이블 레이아웃에서 사용자 지정 필드 값으로 항목을 그룹화할 수 있습니다. 항목이 그룹화될 때 항목을 새 그룹으로 끌면 해당 그룹의 값이 적용됩니다. 예를 들어 “상태”별로 그룹화한 다음 상태가 `In progress`인 항목을 `Done` 그룹으로 끌면 항목의 상태가 `Done`으로 전환됩니다. 마찬가지로 그룹에 새 항목을 추가하면 새 항목이 그룹의 값으로 채워집니다.

{% note %}

**참고:** 현재 제목, 레이블, 검토자 또는 연결된 끌어오기 요청별로 그룹화할 수 없습니다.

{% endnote %}

1. {% data reusables.projects.open-command-palette %}
2. “그룹화 기준” 또는 그룹화 기준으로 사용할 필드 이름을 입력하기 시작합니다.
3. 필요한 명령을 선택합니다. 예를 들어 **그룹 기준: 상태** 입니다.

또는 그룹화할 필드 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 **그룹 기준 값** 을 클릭합니다.

비슷한 단계에 따라 그룹화를 제거합니다.

1. {% data reusables.projects.open-command-palette %}
2. “그룹화 기준 제거”를 입력하기 시작합니다.
3. **그룹화 기준 제거** 를 선택합니다.

또는 보기 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 현재 그룹화를 나타내는 메뉴 항목을 클릭합니다.

## <a name="setting-the-column-field-in-board-layout"></a>보드 레이아웃에서 열 필드 설정

보드 레이아웃에서 열에 대한 단일 선택 또는 반복 필드를 선택합니다. 항목을 새 열로 끌면 해당 열의 값이 끈 항목에 적용됩니다. 예를 들어 보드 열에 “상태” 필드를 사용한 다음 상태가 `In progress`인 항목을 `Done` 열로 끌면 항목 상태가 `Done`으로 전환됩니다.

1. {% data reusables.projects.open-command-palette %}
1. 열에 사용할 필드 이름 또는 “열 필드 기준”을 입력하기 시작합니다.
1. 필요한 명령을 선택합니다. 예를 들어 **열 필드 기준: 상태** 를 선택합니다.

또는 수정하려는 보드 보기 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 {% octicon "columns" aria-label="the column icon" %} **열 필드** 를 클릭합니다. 그런 다음 보드 열에 사용하려는 필드를 선택합니다.

## <a name="filtering-items"></a>항목 필터링

표 위쪽의 {% octicon "filter" aria-label="the filter icon" %}을 클릭하면 “키워드 또는 필드별로 필터링” 표시줄이 표시됩니다. 필터링 기준으로 사용할 필드 이름과 값을 입력하기 시작합니다. 입력하면 가능한 값이 나타납니다.

{% data reusables.projects.projects-filters %}

또는 명령 팔레트를 사용합니다.

1. {% data reusables.projects.open-command-palette %}
2. “필터링 기준” 또는 필터링하려는 필드의 이름을 입력하기 시작합니다.
3. 필요한 명령을 선택합니다. 예를 들어 **상태별로 필터링** 을 선택합니다.
4. 필터링하려는 값을 입력합니다. 예를 들어 “진행 중”을 입력합니다. 특정 값의 부재(예: “상태 제외”를 선택한 다음 상태 선택) 또는 모든 값의 부재(예: “상태 없음”)를 필터링할 수도 있습니다.

보드 레이아웃에서 항목 데이터를 클릭하여 해당 값이 있는 항목을 필터링할 수 있습니다. 예를 들어 담당자를 클릭하여 해당 담당자에 대한 항목만 표시합니다. 필터를 제거하려면 항목 데이터를 다시 클릭합니다.

자세한 내용은 “[프로젝트 필터링](/issues/trying-out-the-new-projects-experience/filtering-projects)”을 참조하세요.

## <a name="creating-a-project-view"></a>프로젝트 보기 만들기

프로젝트 보기를 사용하면 프로젝트의 특정 측면을 빠르게 볼 수 있습니다. 각 보기는 프로젝트의 별도 탭에 표시됩니다. 

예를 들어 다음이 표시될 수 있습니다.
- 아직 시작되지 않은 모든 항목을 표시하는 보기(“상태”에서 필터링).
- 각 팀의 워크로드를 보여 주는 보기(사용자 지정 “팀” 필드별로 그룹화).
- 목표 배송 날짜가 가장 빠른 항목을 표시하는 보기(날짜 필드로 정렬).

새 보기를 추가하려면 다음을 수행합니다.

1. {% data reusables.projects.open-command-palette %}
2. 새 보기를 만들려면 “새 보기”, 현재 보기를 복제하려면 “중복 보기”를 입력하기 시작합니다.
3. 필요한 명령을 선택합니다.

또는 맨 오른쪽 보기 옆에 있는 {% octicon "plus" aria-label="the plus icon" %} **새 보기** 를 클릭합니다.

또는 보기 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 **중복 보기** 를 클릭합니다.

새 보기가 자동으로 저장됩니다.

## <a name="saving-changes-to-a-view"></a>보기에 변경 내용 저장

보기에서 데이터 정렬, 순서 변경, 필터링 또는 그룹화와 같이 보기를 변경하면 보기 이름 옆에 점이 표시되어 저장되지 않은 변경 내용이 있음을 나타냅니다. 

![저장되지 않은 변경 표시기](/assets/images/help/projects/unsaved-changes.png)

변경 내용을 저장하지 않으려면 이 표시기를 무시할 수 있습니다. 다른 사람은 변경 내용을 볼 수 없습니다.

모든 프로젝트 멤버에 대한 보기의 현재 구성을 저장하려면 다음을 수행합니다.
1. {% data reusables.projects.open-command-palette %}
1. “보기 저장” 또는 “새 보기에 변경 내용 저장”을 입력하기 시작합니다.
1. 필요한 명령을 선택합니다.

또는 보기 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 **보기 저장** 또는 **새 보기에 변경 내용 저장** 을 클릭합니다.

## <a name="reordering-saved-views"></a>저장된 보기 순서 다시 지정

저장된 보기가 포함된 탭의 순서를 변경하려면 탭을 클릭하고 새 위치로 끕니다.

새 탭 순서가 자동으로 저장됩니다.

## <a name="renaming-a-saved-view"></a>저장된 보기 이름 바꾸기

보기 이름을 바꾸려면 다음을 수행합니다.
1. 프로젝트 탭에서 이름을 두 번 클릭합니다.
1. 이름을 변경합니다.
1. Enter 키를 누르거나 탭 바깥쪽을 클릭합니다.

이름 변경 내용이 자동으로 저장됩니다.

## <a name="deleting-a-saved-view"></a>저장된 보기 삭제

보기를 삭제하려면 다음을 수행합니다.
1. {% data reusables.projects.open-command-palette %}
2. “보기 삭제”를 입력하기 시작합니다.
3. 필요한 명령을 선택합니다.

또는 보기 이름 옆에 있는 {% octicon "triangle-down" aria-label="the drop-down icon" %}을 클릭하고 **보기 삭제** 를 클릭합니다.

## <a name="further-reading"></a>추가 참고 자료

- “[프로젝트 정보(베타)](/issues/trying-out-the-new-projects-experience/about-projects)”
- “[프로젝트 만들기(베타)](/issues/trying-out-the-new-projects-experience/creating-a-project)”
