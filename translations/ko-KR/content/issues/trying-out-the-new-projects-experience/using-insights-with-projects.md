---
title: 프로젝트에서 인사이트 사용(베타)
intro: 프로젝트의 데이터에서 빌드된 차트를 보고 사용자 지정할 수 있습니다.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: b2e8f2bc76c584d4de33fe00da1fd95982f9d091
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147064708"
---
{% data reusables.projects.insights-alpha %}

## <a name="about-insights"></a>인사이트 정보

인사이트를 사용하여 프로젝트에 추가된 항목을 원본 데이터로 사용하는 차트를 보고 사용자 지정할 수 있습니다. 기본 "Burn" 차트는 시간에 따른 항목 상태를 표시하므로 시간에 따른 진행률을 시각화하고 패턴을 파악할 수 있습니다. 

![현재 반복에 대한 기본 번업 차트의 예제를 보여 주는 스크린샷](/assets/images/help/issues/burnup-example.png)

기본 차트에 필터를 적용하고 고유한 차트를 만들 수도 있습니다. 차트를 만들 때 필터, 차트 종류 및 표시된 정보를 설정하고 프로젝트를 볼 수 있는 모든 사용자가 차트를 사용할 수 있습니다.

![각 반복에 대한 항목 유형을 보여 주는 누적 세로 막대형 차트를 보여 주는 스크린샷](/assets/images/help/issues/column-chart-example.png)

## <a name="creating-a-chart"></a>차트 만들기

{% data reusables.projects.access-insights %}
3. 왼쪽 메뉴에서 **새 차트** 를 클릭합니다.
4. 필요에 따라 새 차트의 이름을 변경하려면 {% octicon "triangle-down" aria-label="The triangle icon" %}을 클릭하고 새 이름을 입력한 후 <kbd>Enter</kbd> 키를 누릅니다.
5. 차트 위에 필터를 입력하여 차트를 작성하는 데 사용되는 데이터를 변경합니다. 자세한 내용은 “[프로젝트 필터링](/issues/trying-out-the-new-projects-experience/filtering-projects)”을 참조하세요.
6. 필터 텍스트 상자 오른쪽에서 **변경 내용 저장** 을 클릭합니다.

## <a name="configuring-a-chart"></a>차트 구성

{% data reusables.projects.access-insights %}
1. 왼쪽 메뉴에서 구성할 차트를 클릭합니다.
1. 페이지 오른쪽에서 **구성** 을 클릭합니다. 오른쪽에 패널이 열립니다.
1. 차트 종류를 변경하려면 **레이아웃** 드롭다운을 선택하고 사용하려는 차트 종류를 클릭합니다.
1. 차트의 X축에 사용되는 필드를 변경하려면 **X축** 드롭다운을 선택하고 사용할 필드를 클릭합니다.
1. 필요에 따라 X축의 항목을 다른 필드별로 그룹화하려면 **그룹화 기준** 을 선택하고 사용하려는 필드를 클릭하거나 "없음"을 클릭하여 그룹화하지 않도록 설정합니다.
1. 필요에 따라 프로젝트에 숫자 필드가 포함되어 있고 Y축에 해당 숫자 필드 중 하나의 합계, 평균, 최솟값 또는 최댓값을 표시하려면 **Y축** 을 선택하고 옵션을 클릭합니다. 그런 다음, 아래에 표시되는 드롭다운을 선택하고 사용하려는 숫자 필드를 클릭합니다. 
1. 차트를 저장하려면 **변경 내용 저장** 을 클릭합니다.
