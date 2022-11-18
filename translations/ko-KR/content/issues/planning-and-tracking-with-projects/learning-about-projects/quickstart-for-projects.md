---
title: '{% data variables.product.prodname_projects_v2 %}에 대한 빠른 시작'
intro: '이 대화형 가이드에서 프로젝트를 생성하여 {% data variables.product.prodname_projects_v2 %}의 속도, 유연성, 사용자 지정을 경험해 보세요.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/quickstart
type: quick_start
topics:
  - Projects
ms.openlocfilehash: 39798565419acaa831a996a0c86cc62f367f4bb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109684'
---
## 소개

이 가이드에서는 {% data variables.product.prodname_projects_v2 %}를 사용하여 작업을 계획하고 추적하는 방법을 보여 줍니다. 이 가이드에서는 새 프로젝트를 만들고 사용자 지정 필드를 추가하여 작업의 우선 순위를 추적합니다. 또한 공동 작업자와 우선 순위 및 진행 상황에 대해 소통하는 데 도움이 되는 저장된 보기를 만드는 방법도 알아봅니다.

## 필수 조건

조직 프로젝트 또는 사용자 프로젝트를 만들 수 있습니다. 조직 프로젝트를 만들려면 {% data variables.product.prodname_dotcom %} 조직이 필요합니다. 조직 만들기에 대한 자세한 내용은 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요.

이 가이드에서는 조직 소유의 리포지토리(조직 프로젝트용) 또는 사용자 소유의 리포지토리(사용자 프로젝트용)의 기존 이슈를 새 프로젝트에 추가합니다. 이슈를 만드는 데 관한 자세한 내용은 “[이슈 만들기](/issues/tracking-your-work-with-issues/creating-an-issue)”를 참조하세요.

## 프로젝트 만들기

첫 번째로 조직 프로젝트 또는 사용자 프로젝트를 만듭니다.

### 조직 프로젝트 만들기

{% data reusables.projects.create-project %}

### 사용자 프로젝트 만들기

{% data reusables.projects.create-user-project %}

## 프로젝트 설명 및 추가 정보 설정

{% data reusables.projects.project-description %}

## 프로젝트에 이슈 추가

다음으로 프로젝트에 몇 가지 이슈를 추가합니다.

{% data reusables.projects.add-item-via-paste %}

위의 단계를 몇 번 반복하여 프로젝트에 여러 이슈를 추가합니다.

프로젝트에 이슈를 추가하는 다른 방법 또는 프로젝트에 추가할 수 있는 다른 항목에 대한 자세한 내용은 “[프로젝트에 항목 추가](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)”를 참조하세요.

## 프로젝트에 초안 이슈 추가

다음으로 프로젝트에 초안 이슈를 추가합니다.

{% data reusables.projects.add-draft-issue %}

## 반복 필드 추가

다음으로, 반복 시간 블록을 통해 작업을 계획하고 추적할 수 있도록 반복 필드를 만듭니다. 사용자 지정 가능한 길이와 중단 삽입 기능을 사용하여 사용자와 팀의 작동 방식에 맞게 반복을 구성할 수 있습니다.

{% data reusables.projects.new-field %}
1. **반복**
   ![반복 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-iteration.png) 선택
3. 각 반복 기간을 변경하려면 새 숫자를 입력한 다음 드롭다운을 선택하고 **일** 또는 **주** 를 클릭합니다.
   ![반복 기간을 보여 주는 스크린샷](/assets/images/help/projects-v2/iteration-field-duration.png)
4. **저장** 을 클릭합니다.
   ![저장 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-save-and-create.png)

## 우선 순위를 추적하는 필드 만들기

이제 `Priority`라는 사용자 지정 필드를 만들고 `High`, `Medium` 또는 `Low` 값을 포함합니다.

{% data reusables.projects.new-field %}
1. **단일 선택**
   ![단일 선택 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-single-select.png)을 선택합니다.
1. “옵션” 아래에 첫 번째 옵션인 “높음”을 입력합니다.
   ![단일 선택 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/priority-example.png)
1. 필드를 더 추가하려면 “보통” 및 “낮음”에 대해 **옵션 추가** 를 클릭합니다.
1. **저장** 을 클릭합니다.
   ![저장 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-save.png)

프로젝트의 모든 이슈에 우선 순위를 지정합니다.

![예제 우선 순위](/assets/images/help/projects/priority_example.png)

## 우선 순위별로 이슈 그룹화

다음으로 우선 순위가 높은 항목에 더 쉽게 집중할 수 있도록 프로젝트의 모든 항목을 우선 순위별로 그룹화합니다.

{% data reusables.projects.open-view-menu %}
1. {% octicon "rows" aria-label="the rows icon" %} **그룹** 을 클릭합니다.
   ![그룹 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/group-menu-item.png)
1. **우선 순위** 를 클릭합니다.
   ![그룹 메뉴를 보여 주는 스크린샷](/assets/images/help/projects-v2/group-menu.png)

이제 그룹 간에 이슈를 이동하여 우선 순위를 변경합니다.

1. 이슈를 선택합니다.
2. 이슈를 다른 우선 순위 그룹으로 끌어서 놓습니다. 이렇게 하면 이슈의 우선 순위가 새 그룹의 우선 순위로 변경됩니다.

![그룹 간에 이슈 이동](/assets/images/help/projects/move_between_group.gif)

## 우선 순위 보기 저장

이전 단계에서 우선 순위별로 이슈를 그룹화한 경우 프로젝트에서 보기가 수정되었음을 표시하는 표시기를 표시했습니다. 공동 작업자가 우선 순위별로 그룹화된 작업도 볼 수 있도록 이러한 변경 내용을 저장합니다.

{% data reusables.projects.save-view %}

URL을 팀과 공유하여 모든 사용자가 프로젝트 우선 순위에 맞게 정렬되도록 할 수 있습니다.

보기가 저장되면 프로젝트를 여는 모든 사용자에게 저장된 보기가 표시됩니다. 여기서는 우선 순위별로 그룹화하지만 정렬, 필터 또는 레이아웃과 같은 다른 한정자를 추가할 수도 있습니다. 다음으로 레이아웃이 수정된 새 보기를 만듭니다.

## 보드 레이아웃 추가

프로젝트 이슈의 진행 상황을 보려면 보드 레이아웃으로 전환할 수 있습니다.

보드 레이아웃은 상태 필드를 기반으로 하므로 프로젝트의 각 이슈에 대한 상태를 지정합니다.

![예제 상태](/assets/images/help/projects/status_example.png)

그런 다음, 새 뷰를 만듭니다.

{% data reusables.projects.new-view %}

다음으로 보드 레이아웃으로 전환합니다.

{% data reusables.projects.open-view-menu %}
1. “레이아웃”에서 **보드** 를 클릭합니다.
   ![레이아웃 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/table-or-board.png)

![예제 우선 순위](/assets/images/help/projects/example_board.png)

레이아웃을 변경하면 프로젝트에 보기가 수정되었음을 표시하는 표시기가 표시됩니다. 사용자와 공동 작업자가 나중에 쉽게 액세스할 수 있도록 이 보기를 저장합니다.

{% data reusables.projects.save-view %}

보기의 용도를 나타내려면 설명이 포함된 이름을 지정합니다.

{% data reusables.projects.open-view-menu %}
1. {% octicon "pencil" aria-label="the pencil icon" %} **보기 이름 바꾸기** 를 클릭합니다.
   ![이름 바꾸기 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/rename-view.png)
1. 보기의 새 이름을 입력합니다.
1. 변경 내용을 저장하려면 <kbd>Return</kbd> 키를 누릅니다.

![예제 우선 순위](/assets/images/help/projects/project-view-switch.gif)

## 기본 제공 자동화 구성

마지막으로, 항목이 프로젝트에 추가되면 상태를 **Todo** 로 설정하는 기본 제공 워크플로를 추가합니다.

1. 오른쪽 위에 있는 {% octicon "kebab-horizontal" aria-label="The menu icon" %}을 클릭하여 메뉴를 엽니다.
  ![메뉴 아이콘을 보여 주는 스크린샷](/assets/images/help/projects-v2/open-menu.png)
1. 메뉴에서 {% octicon "workflow" aria-label="The workflow icon" %} **워크플로** 를 클릭합니다.
  ![‘워크플로’ 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/workflows-menu-item.png)
1. **기본 워크플로** 에서 **프로젝트에 추가된 항목** 을 클릭합니다.
  ![기본 워크플로를 보여 주는 스크린샷](/assets/images/help/projects-v2/default-workflows.png)
1. **시기** 옆에 `issues` 및 `pull requests`가 모두 선택되어 있는지 확인합니다.
  ![워크플로에 대한 “시기” 구성을 보여 주는 스크린샷](/assets/images/help/projects-v2/workflow-when.png)
1. **설정** 옆에 있는 **상태:Todo** 를 선택합니다.
  ![워크플로에 대한 “설정” 구성을 보여 주는 스크린샷](/assets/images/help/projects-v2/workflow-set.png)
1. **사용 안 함** 토글을 클릭하여 워크플로를 사용하도록 설정합니다.
  ![워크플로에 대한 “사용” 컨트롤을 보여 주는 스크린샷](/assets/images/help/projects-v2/workflow-enable.png)

## 추가 참고 자료

- “[프로젝트에 항목 추가](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/adding-items-to-your-project)”
- “[보기 사용자 지정](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”
