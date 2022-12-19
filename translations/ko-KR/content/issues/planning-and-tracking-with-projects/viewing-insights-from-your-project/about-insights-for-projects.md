---
title: '{% data variables.product.prodname_projects_v2 %}에 대한 인사이트 정보'
intro: 프로젝트의 데이터에서 빌드된 차트를 보고 사용자 지정할 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/using-insights-with-projects
type: tutorial
product: '{% data reusables.gated-features.historical-insights-for-projects %}'
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 809d8492bb1ec7c8cd4eb051b1eaefb00d29097e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158575'
---
{% ifversion fpt %}

{% note %}

**참고:** 기록 차트는 현재 {% data variables.product.prodname_team %}을 사용하는 조직의 기능 미리 보기로 제공되며 일반적으로 {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직에서 사용할 수 있습니다.

{% endnote %}

{% endif %}

 {% data variables.product.prodname_projects_v2 %}에 대한 인사이트를 사용하여 프로젝트에 추가된 항목을 원본 데이터로 사용하는 차트를 보고, 만들고, 사용자 지정할 수 있습니다. 기본 차트에 필터를 적용하고 고유한 차트를 만들 수도 있습니다. 차트를 만들 때 필터, 차트 종류, 표시된 정보를 설정하고 프로젝트를 볼 수 있는 모든 사용자가 차트를 사용할 수 있습니다. 현재 차트와 기록 차트의 두 가지 유형의 차트를 생성할 수 있습니다.

 Insights는 보관하거나 삭제한 항목을 추적합니다.

 ### 현재 차트 정보

현재 차트를 만들어 프로젝트 항목을 시각화할 수 있습니다. 예를 들어 차트를 만들어 각 개인에게 할당된 항목 수 또는 예정된 각 반복에 할당된 문제 수를 표시할 수 있습니다.

필터를 사용하여 차트를 작성하는 데 사용되는 데이터를 조작할 수도 있습니다. 예를 들어 예정된 작업의 양을 보여 주는 차트를 만들 수 있지만 해당 결과를 특정 레이블 또는 담당자로 제한할 수 있습니다. 자세한 내용은 “[프로젝트 필터링](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”을 참조하세요.

 ![각 반복에 대한 항목 유형을 보여 주는 누적 세로 막대형 차트를 보여 주는 스크린샷](/assets/images/help/issues/column-chart-example.png)

자세한 내용은 “[차트 만들기](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)”를 참조하세요.

 ### 기록 차트 정보

 기록 차트는 프로젝트의 추세와 진행률을 볼 수 있는 시간 기반 차트입니다. 시간이 지남에 따라 상태 및 기타 필드를 기준으로 그룹화된 항목 수를 볼 수 있습니다.
 
 기본 "Burn" 차트는 시간에 따른 항목 상태를 표시하므로 시간에 따른 진행률을 시각화하고 패턴을 파악할 수 있습니다. 

![현재 반복에 대한 기본 번업 차트의 예제를 보여 주는 스크린샷](/assets/images/help/issues/burnup-example.png)

 기록 차트를 만들려면 차트의 X축을 “시간”으로 설정합니다. 자세한 내용은 “[차트 만들기](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/creating-charts)” 및 “[차트 구성](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/configuring-charts)”을 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_projects_v2 %} 정보](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”
- “[조직에서 {% data variables.product.prodname_projects_v2 %}에 대한 인사이트 사용 안 함](/organizations/managing-organization-settings/disabling-insights-for-projects-in-your-organization)”
