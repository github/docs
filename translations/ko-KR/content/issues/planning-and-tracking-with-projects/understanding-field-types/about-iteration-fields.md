---
title: 반복 필드 정보
shortTitle: About iteration fields
intro: 반복을 만들어 예정된 작업 및 그룹 항목을 계획할 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
- /issues/trying-out-the-new-projects-experience/managing-iterations
type: tutorial
topics:
- Projects
ms.openlocfilehash: 93039327ab7075e0f79c9d5ae5d6652aa635a500
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109780"
---
반복 필드를 만들어 항목을 특정 반복 시간 블록과 연결할 수 있습니다. 반복은 원하는 시간 길이로 설정할 수 있고 중단을 포함할 수 있으며 이름과 날짜 범위를 수정하기 위해 개별적으로 편집할 수 있습니다. 프로젝트를 사용하면 반복별로 그룹화하여 예정된 작업의 균형을 시각화하고 필터를 사용하여 단일 반복에 집중하며 반복별로 정렬할 수 있습니다.

반복 이름을 지정하거나 현재 반복의 경우 `@current`, 이전 반복의 경우 `@previous` 또는 다음 반복의 경우 `@next`를 지정하여 반복을 필터링할 수 있습니다. `>`, `>=`, `<`, `<=`, `..` 등의 연산자를 사용할 수도 있습니다.  예를 들어 `iteration:>"Iteration 4"` 및 `iteration:<@current`를 지정합니다. 자세한 내용은 “[프로젝트 필터링](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”을 참조하세요.

반복 필드를 처음 만들면 세 번의 반복이 자동으로 만들어집니다.  프로젝트의 설정 페이지에서 추가 반복을 추가하고 다른 내용을 변경할 수 있습니다.

![반복 필드의 설정을 보여 주는 스크린샷](/assets/images/help/issues/iterations-example.png)

## 반복 필드 추가

{% data reusables.projects.new-field %}
1. **반복**
   ![반복 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-iteration.png) 선택
2. 필요에 따라 오늘 반복을 시작하지 않으려면 “시작 날짜” 옆에 있는 일정 드롭다운을 선택하고 새 시작 날짜를 선택합니다.
   ![반복 시작 날짜를 보여 주는 스크린샷](/assets/images/help/projects-v2/iteration-field-starts.png)
3. 각 반복 기간을 변경하려면 새 숫자를 입력한 다음 드롭다운을 선택하고 **일** 또는 **주** 를 클릭합니다.
   ![반복 기간을 보여 주는 스크린샷](/assets/images/help/projects-v2/iteration-field-duration.png)
4. **저장** 을 클릭합니다.
   ![저장 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-save-and-create.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “새 필드 만들기”를 입력하기 시작합니다.

## 새 반복 추가

{% data reusables.projects.project-settings %}
1. 조정하려는 반복 필드의 이름을 클릭합니다.
   ![반복 필드를 보여 주는 스크린샷](/assets/images/help/projects-v2/select-iteration-field.png)
1. 동일한 기간의 새 반복을 추가하려면 **반복 추가** 를 클릭합니다.
   ![“반복 추가” 단추 스크린샷](/assets/images/help/projects-v2/add-iteration.png)
1. 필요에 따라 새 반복의 기간과 시작 시간을 사용자 지정하려면 {% octicon "triangle-down" aria-label="The triangle icon" %} **추가 옵션** 을 클릭하고 시작 날짜 및 기간을 선택한 다음, **추가** 를 클릭합니다.
   ![반복 옵션 추가 양식 스크린샷](/assets/images/help/projects-v2/add-iteration-options.png)
1. **변경 내용 저장** 을 클릭합니다.
   ![저장 단추 스크린샷](/assets/images/help/projects-v2/iteration-save.png)

## 반복 편집

프로젝트 설정에서 반복을 편집할 수 있습니다. 또한 필드의 테이블 머리글에서 {% octicon "triangle-down" aria-label="The triangle icon" %}을 클릭하고 **값 편집** 을 클릭하여 반복 필드의 설정에 액세스할 수 있습니다.

{% data reusables.projects.project-settings %}
1. 조정하려는 반복 필드의 이름을 클릭합니다.
   ![반복 필드를 보여 주는 스크린샷](/assets/images/help/projects-v2/select-iteration-field.png)
1. 반복의 이름을 변경하려면 이름을 클릭하고 입력을 시작합니다.
   ![반복 이름을 바꿀 제목 필드 스크린샷](/assets/images/help/projects-v2/iteration-rename.png)
1. 반복 날짜 또는 기간을 변경하려면 날짜를 클릭하여 달력을 엽니다. 시작 날짜를 클릭한 다음 종료 날짜를 클릭하고 **적용** 을 클릭합니다.
   ![반복 날짜를 보여 주는 스크린샷](/assets/images/help/projects-v2/iteration-date.png)
1. 필요에 따라 반복을 삭제하려면 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
   ![삭제 단추 스크린샷](/assets/images/help/projects-v2/iteration-delete.png)
2. **변경 내용 저장** 을 클릭합니다.
   ![저장 단추 스크린샷](/assets/images/help/projects-v2/iteration-save.png)

## 중단 삽입

반복 작업에 중단을 삽입하여 예정된 작업에서 시간을 낼 때 통신할 수 있습니다. 새 중단 기간은 기본적으로 가장 최근에 만든 반복의 길이로 설정됩니다.

{% data reusables.projects.project-settings %}
1. 조정하려는 반복 필드의 이름을 클릭합니다.
   ![반복 필드를 보여 주는 스크린샷](/assets/images/help/projects-v2/select-iteration-field.png)
2. 반복 위 오른쪽의 구분선에서 **중단 삽입** 을 클릭합니다.
   ![“중단 삽입” 단추의 위치를 보여 주는 스크린샷](/assets/images/help/issues/iteration-insert-break.png)
3. 필요에 따라 중단 기간을 변경하려면 날짜를 클릭하여 달력을 엽니다. 시작 날짜를 클릭한 다음 종료 날짜를 클릭하고 **적용** 을 클릭합니다.
4. **변경 내용 저장** 을 클릭합니다.
   ![저장 단추 스크린샷](/assets/images/help/projects-v2/iteration-save.png)
