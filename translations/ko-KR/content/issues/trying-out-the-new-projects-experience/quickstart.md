---
title: 프로젝트(베타)를 위한 빠른 시작
intro: 이 대화형 가이드에서 프로젝트를 만들어 프로젝트(베타)의 속도, 유연성 및 사용자 지정을 경험해보세요.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
- Projects
ms.openlocfilehash: 3baf341d38b59e20e6fe1e677e338d6bec1d57da
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135316"
---
{% data reusables.projects.projects-beta %}

## <a name="introduction"></a>소개

이 가이드에서는 프로젝트(베타)를 사용하여 작업을 계획하고 추적하는 방법을 보여 줍니다. 이 가이드에서는 새 프로젝트를 만들고 사용자 지정 필드를 추가하여 작업의 우선 순위를 추적합니다. 또한 공동 작업자와 우선 순위 및 진행 상황에 대해 소통하는 데 도움이 되는 저장된 보기를 만드는 방법도 알아봅니다.

## <a name="prerequisites"></a>필수 조건

조직 프로젝트 또는 사용자 프로젝트를 만들 수 있습니다. 조직 프로젝트를 만들려면 {% data variables.product.prodname_dotcom %} 조직이 필요합니다. 조직 만들기에 대한 자세한 내용은 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요.

이 가이드에서는 조직 소유의 리포지토리(조직 프로젝트용) 또는 사용자 소유의 리포지토리(사용자 프로젝트용)의 기존 이슈를 새 프로젝트에 추가합니다. 이슈를 만드는 데 관한 자세한 내용은 “[이슈 만들기](/issues/tracking-your-work-with-issues/creating-an-issue)”를 참조하세요.

## <a name="creating-a-project"></a>프로젝트 만들기

첫 번째로 조직 프로젝트 또는 사용자 프로젝트를 만듭니다.

### <a name="creating-an-organization-project"></a>조직 프로젝트 만들기

{% data reusables.projects.create-project %}

### <a name="creating-a-user-project"></a>사용자 프로젝트 만들기

{% data reusables.projects.create-user-project %}

## <a name="setting-your-project-description-and-readme"></a>프로젝트 설명 및 추가 정보 설정

{% data reusables.projects.project-description %}

## <a name="adding-issues-to-your-project"></a>프로젝트에 이슈 추가

다음으로 프로젝트에 몇 가지 이슈를 추가합니다.

새 프로젝트가 초기화되면 프로젝트에 항목을 추가하라는 메시지가 표시됩니다. 이 보기가 손실되거나 나중에 더 많은 이슈를 추가하려면 {% octicon "plus" aria-label="plus icon" %} 옆에 있는 프로젝트의 아래쪽 행에 커서를 놓습니다.

1. `#`.
2. 이슈가 있는 리포지토리를 선택합니다. 옵션의 범위를 좁히려면 리포지토리 이름의 일부를 입력하기 시작할 수 있습니다.
3. 이슈를 선택합니다. 옵션의 범위를 좁히려면 이슈 제목의 일부를 입력하기 시작할 수 있습니다.

위의 단계를 몇 번 반복하여 프로젝트에 여러 이슈를 추가합니다.

프로젝트에 이슈를 추가하는 다른 방법 또는 프로젝트에 추가할 수 있는 다른 항목에 대한 자세한 내용은 “[프로젝트 만들기](/issues/trying-out-the-new-projects-experience/creating-a-project#adding-items-to-your-project)”를 참조하세요.

## <a name="adding-draft-issues-to-your-project"></a>프로젝트에 초안 이슈 추가

다음으로 프로젝트에 초안 이슈를 추가합니다.

1. {% octicon "plus" aria-label="plus icon" %} 옆에 있는 프로젝트의 아래쪽 행에 커서를 놓습니다.
1. 아이디어를 입력한 다음 **Enter** 키를 누릅니다.
1. 초안 이슈의 제목을 클릭합니다. 표시되는 Markdown 입력 상자에 아이디어에 대한 몇 가지 추가 정보를 입력한 다음, **저장** 을 클릭합니다.

## <a name="creating-a-field-to-track-priority"></a>우선 순위를 추적하는 필드 만들기

이제 `High`, `Medium` 및 `Low` 값을 포함하도록 `Priority`라는 사용자 지정 필드를 만듭니다.

1. {% data reusables.projects.open-command-palette %}
2. “새 필드 만들기”의 모든 부분을 입력하기 시작합니다.
3. **새 필드 만들기** 를 선택합니다.
4. 결과 팝업에서 텍스트 상자에 `Priority`를 입력합니다.
5. 드롭다운에서 **단일 선택** 을 선택합니다.
6. `High`, `Medium` 및 `Low`에 대한 옵션을 추가합니다. 또한 옵션에 이모지도 포함할 수 있습니다.
   ![새 단일 선택 필드 예제](/assets/images/help/projects/new-single-select-field.png)
7. **저장** 을 클릭합니다.

프로젝트의 모든 이슈에 우선 순위를 지정합니다.

![예제 우선 순위](/assets/images/help/projects/priority_example.png)

## <a name="grouping-issues-by-priority"></a>우선 순위별로 이슈 그룹화

다음으로 우선 순위가 높은 항목에 더 쉽게 집중할 수 있도록 프로젝트의 모든 항목을 우선 순위별로 그룹화합니다.

1. {% data reusables.projects.open-command-palette %}
2. “그룹화 기준”의 모든 부분을 입력하기 시작합니다.
3. **그룹화 기준: 우선 순위** 를 선택합니다.

이제 그룹 간에 이슈를 이동하여 우선 순위를 변경합니다.

1. 이슈를 선택합니다.
2. 이슈를 다른 우선 순위 그룹으로 끌어서 놓습니다. 이렇게 하면 이슈의 우선 순위가 새 그룹의 우선 순위로 변경됩니다.

![그룹 간에 이슈 이동](/assets/images/help/projects/move_between_group.gif)

## <a name="saving-the-priority-view"></a>우선 순위 보기 저장

이전 단계에서 우선 순위별로 이슈를 그룹화한 경우 프로젝트에서 보기가 수정되었음을 표시하는 표시기를 표시했습니다. 공동 작업자가 우선 순위별로 그룹화된 작업도 볼 수 있도록 이러한 변경 내용을 저장합니다.

1. 보기 이름 옆에 있는 드롭다운 메뉴를 선택합니다.
2. **변경 내용 저장** 을 클릭합니다.

보기의 용도를 나타내려면 설명이 포함된 이름을 지정합니다.

1. 현재 보기 이름 **View 1** 에 커서를 놓습니다.
2. 기존 텍스트를 새 이름 `Priorities`로 바꿉니다.

URL을 팀과 공유하여 모든 사용자가 프로젝트 우선 순위에 맞게 정렬되도록 할 수 있습니다.

보기가 저장되면 프로젝트를 여는 모든 사용자에게 저장된 보기가 표시됩니다. 여기서는 우선 순위별로 그룹화하지만 정렬, 필터 또는 레이아웃과 같은 다른 한정자를 추가할 수도 있습니다. 다음으로 레이아웃이 수정된 새 보기를 만듭니다.

## <a name="adding-a-board-layout"></a>보드 레이아웃 추가

프로젝트 이슈의 진행 상황을 보려면 보드 레이아웃으로 전환할 수 있습니다.

보드 레이아웃은 상태 필드를 기반으로 하므로 프로젝트의 각 이슈에 대한 상태를 지정합니다.

![예제 상태](/assets/images/help/projects/status_example.png)

그런 다음, 새 뷰를 만듭니다.

1. 맨 오른쪽 보기 옆에 있는 {% octicon "plus" aria-label="the plus icon" %} **새 보기** 를 클릭합니다.

다음으로 보드 레이아웃으로 전환합니다.

1. {% data reusables.projects.open-command-palette %}
2. “스위치 레이아웃: 보드”의 일부를 입력하기 시작합니다.
3. **스위치 레이아웃: 보드** 를 선택합니다.
   ![예제 우선 순위](/assets/images/help/projects/example_board.png)

레이아웃을 변경하면 프로젝트에 보기가 수정되었음을 표시하는 표시기가 표시됩니다. 사용자와 공동 작업자가 나중에 쉽게 액세스할 수 있도록 이 보기를 저장합니다.

1. 보기 이름 옆에 있는 드롭다운 메뉴를 선택합니다.
2. **변경 내용 저장** 을 클릭합니다.

보기의 용도를 나타내려면 설명이 포함된 이름을 지정합니다.

1. 현재 보기 이름 **View 2** 에 커서를 놓습니다.
2. 기존 텍스트를 새 이름 `Progress`로 바꿉니다.

![예제 우선 순위](/assets/images/help/projects/project-view-switch.gif)

## <a name="configure-built-in-automation"></a>기본 제공 자동화 구성

마지막으로, 항목이 프로젝트에 추가되면 상태를 **Todo** 로 설정하는 기본 제공 워크플로를 추가합니다.

1. 프로젝트에서 {% octicon "workflow" aria-label="the workflow icon" %}을 클릭합니다.
2. **기본 워크플로** 에서 **프로젝트에 추가된 항목** 을 클릭합니다.
3. **시기** 옆에 `issues` 및 `pull requests`가 모두 선택되어 있는지 확인합니다.
4. **설정** 옆에 있는 **상태:Todo** 를 선택합니다.
5. **사용 안 함** 토글을 클릭하여 워크플로를 사용하도록 설정합니다.

## <a name="next-steps"></a>다음 단계

다양한 용도로 프로젝트를 사용할 수 있습니다. 예를 들면 다음과 같습니다.

- 릴리스에 대한 작업 추적
- 스프린트 계획
- 백로그 우선 순위 지정

다음은 {% data variables.product.prodname_github_issues %}로 다음 단계를 수행하는 데 유용한 리소스입니다.

- 프로젝트(베타) 환경에 대한 피드백을 제공하려면 [GitHub 피드백 리포지토리](https://github.com/github/feedback/discussions/categories/issues-feedback)로 이동합니다.
- 프로젝트가 계획 및 추적에 도움이 되는 방법에 대한 자세한 내용은 “[프로젝트 정보](/issues/trying-out-the-new-projects-experience/about-projects)”를 참조하세요.
- 프로젝트에 추가할 수 있는 필드 및 항목에 대한 자세한 내용은 “[프로젝트 만들기](/issues/trying-out-the-new-projects-experience/creating-a-project)”를 참조하세요.
- 필요한 정보를 표시하는 방법에 대한 자세한 내용은 “[프로젝트 보기 사용자 지정](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”을 참조하세요.
