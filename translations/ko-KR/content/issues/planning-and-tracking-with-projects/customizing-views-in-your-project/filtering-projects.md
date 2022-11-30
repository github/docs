---
title: '{% data variables.projects.projects_v2 %} 필터링'
intro: 필터를 사용하여 프로젝트 보기에 표시되는 항목을 선택합니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/filtering-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 680d6cff10dfc063ebaef0ebc9f8f7d0c15ba2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158943'
---
할당자 및 문제에 적용된 레이블 및 프로젝트의 필드와 같은 항목 메타데이터에 대한 필터를 사용하여 보기를 사용자 지정할 수 있습니다. 필터를 결합하고 보기로 저장할 수 있습니다. 자세한 내용은 “[프로젝트 보기 사용자 지정](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”을 참조하세요.

프로젝트를 필터링하려면 {% octicon "filter" aria-label="The Filter icon" %}을 클릭하고 필터링할 필드와 값을 입력하기 시작합니다. 입력하면 가능한 값이 나타납니다. {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “필터링 기준”을 입력하여 사용 가능한 필터 중에서 선택할 수도 있습니다.

여러 필터를 사용하면 논리적 AND 필터로 작동합니다. 예를 들어, `label:bug status:"In progress"`는 상태가 “진행 중”인 `bug` 레이블이 있는 항목을 반환합니다. {% data variables.product.prodname_projects_v2 %}는 현재 여러 필드의 논리적 OR 필터를 지원하지 않습니다.

{% data variables.product.prodname_projects_v2 %}에 대한 인사이트를 사용하여 만든 차트에 동일한 필터를 사용할 수 있으므로 차트를 만드는 데 사용되는 데이터를 필터링할 수 있습니다. 자세한 내용은 "[프로젝트에서 인사이트 사용](/issues/planning-and-tracking-with-projects/viewing-insights-from-your-project/about-insights-for-projects)"을 참조하세요.

보기를 필터링한 다음 항목을 추가하면 필터링된 메타데이터가 추가된 항목에 적용됩니다. 예를 들어 를 기준으로 필터링하고 `status:"In progress"` 항목을 추가하는 경우 새 항목의 상태는 "진행 중"으로 설정됩니다.

## 항목 필터링

표 위쪽의 {% octicon "filter" aria-label="the filter icon" %}을 클릭하면 “키워드 또는 필드별로 필터링” 표시줄이 표시됩니다. 필터링 기준으로 사용할 필드 이름과 값을 입력하기 시작합니다. 입력하면 가능한 값이 나타납니다.

{% data reusables.projects.projects-filters %}

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “필터링 기준”을 입력하기 시작합니다.

보드 레이아웃에서 항목 데이터를 클릭하여 해당 값이 있는 항목을 필터링할 수 있습니다. 예를 들어 담당자를 클릭하여 해당 담당자에 대한 항목만 표시합니다. 필터를 제거하려면 항목 데이터를 다시 클릭합니다.
