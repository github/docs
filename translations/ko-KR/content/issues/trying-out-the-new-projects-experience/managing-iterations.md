---
title: 프로젝트의 반복 관리(베타)
intro: 반복을 만들어 예정된 작업 및 그룹 항목을 계획할 수 있습니다.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: e64eb3e29efe513578984bc0c198ac8743803287
ms.sourcegitcommit: 95e6f3d3aba8c637a3f72b571a6beacaa38d367f
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/11/2022
ms.locfileid: "147067572"
---
{% data reusables.projects.projects-beta %}

## <a name="about-iterations"></a>반복 정보

반복 필드를 만들어 항목을 특정 반복 시간 블록과 연결할 수 있습니다. 반복은 원하는 시간 길이로 설정할 수 있고 중단을 포함할 수 있으며 이름과 날짜 범위를 수정하기 위해 개별적으로 편집할 수 있습니다. 프로젝트를 사용하면 반복별로 그룹화하여 예정된 작업의 균형을 시각화하고 필터를 사용하여 단일 반복에 집중하며 반복별로 정렬할 수 있습니다.

반복 필드를 처음 만들면 세 번의 반복이 자동으로 만들어집니다.  프로젝트의 설정 페이지에서 추가 반복을 추가하고 다른 내용을 변경할 수 있습니다.

![반복 필드의 설정을 보여 주는 스크린샷](/assets/images/help/issues/iterations-example.png)

## <a name="creating-an-iteration-field"></a>반복 필드 만들기

명령 팔레트 또는 프로젝트의 인터페이스를 사용하여 반복 필드를 만들 수 있습니다.

1. {% data reusables.projects.open-command-palette %} “새 필드 만들기”의 일부를 입력하기 시작합니다. 명령 팔레트에 “새 필드 만들기”가 표시되면 선택합니다.

   또는 맨 오른쪽 필드 머리글에서 {% octicon "plus" aria-label="the plus icon" %}을 클릭합니다. 프로젝트 필드가 있는 드롭다운 메뉴가 나타납니다. **새 필드** 를 클릭합니다.
1. 텍스트 상자에 새 반복 필드의 이름을 입력합니다.
1. 아래 드롭다운 메뉴를 선택하고 **반복** 을 클릭합니다.
1. 필요에 따라 현재 날짜에서 시작 날짜를 변경하려면 “시작 날짜” 옆에 있는 달력 드롭다운을 선택하고 새 시작 날짜를 클릭합니다.
2. 각 반복 기간을 변경하려면 새 숫자를 입력한 다음 드롭다운을 선택하고 **일** 또는 **주** 를 클릭합니다.
3. **저장 및 만들기** 를 클릭합니다.
  
## <a name="adding-new-iterations"></a>새 반복 추가

{% data reusables.projects.project-settings %}
1. 조정하려는 반복 필드의 이름을 클릭합니다.
1. 동일한 기간의 새 반복을 추가하려면 **반복 추가** 를 클릭합니다.
1. 필요에 따라 새 반복의 기간과 시작 시간을 사용자 지정하려면 “반복 추가” 옆에 있는 {% octicon "triangle-down" aria-label="The triangle icon" %}을 클릭하고 시작 날짜 및 기간을 선택한 다음 **추가** 를 클릭합니다.
1. **변경 내용 저장** 을 클릭합니다.

## <a name="editing-an-iteration"></a>반복 편집

프로젝트 설정에서 반복을 편집할 수 있습니다. 또한 필드의 테이블 머리글에서 {% octicon "triangle-down" aria-label="The triangle icon" %}을 클릭하고 **값 편집** 을 클릭하여 반복 필드의 설정에 액세스할 수 있습니다.

{% data reusables.projects.project-settings %}
1. 조정하려는 반복 필드의 이름을 클릭합니다.
1. 반복의 이름을 변경하려면 이름을 클릭하고 입력을 시작합니다.
1. 반복 날짜 또는 기간을 변경하려면 날짜를 클릭하여 달력을 엽니다. 시작 날짜를 클릭한 다음 종료 날짜를 클릭하고 **적용** 을 클릭합니다.
1. 필요에 따라 반복을 삭제하려면 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
1. **변경 내용 저장** 을 클릭합니다.

## <a name="inserting-a-break"></a>중단 삽입

반복 작업에 중단을 삽입하여 예정된 작업에서 시간을 낼 때 통신할 수 있습니다. 새 중단 기간은 기본적으로 가장 최근에 만든 반복의 길이로 설정됩니다.

{% data reusables.projects.project-settings %}
1. 조정하려는 반복 필드의 이름을 클릭합니다.
2. 반복 위 오른쪽의 구분선에서 **중단 삽입** 을 클릭합니다.
   ![“중단 삽입” 단추의 위치를 보여 주는 스크린샷](/assets/images/help/issues/iteration-insert-break.png)
3. 필요에 따라 중단 기간을 변경하려면 날짜를 클릭하여 달력을 엽니다. 시작 날짜를 클릭한 다음 종료 날짜를 클릭하고 **적용** 을 클릭합니다.
4. **변경 내용 저장** 을 클릭합니다.
