---
title: '{% data variables.product.prodname_projects_v2 %} 정보'
intro: '{% data variables.product.prodname_projects_v2 %}는 {% data variables.product.company_short %}에서 작업을 계획하고 추적하기 위한 적응 가능하고 유연한 도구입니다.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/about-projects
type: overview
topics:
  - Projects
ms.openlocfilehash: 768234aa5e6c9cfbca6a6144a80ac2868f3316ce
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158863'
---
## {% data variables.product.prodname_projects_v2 %} 정보

프로젝트는 {% data variables.product.company_short %}에 대한 문제 및 끌어오기 요청과 통합되어 작업을 효과적으로 계획하고 추적하는 데 도움이 되는 적응 가능한 스프레드시트입니다. 문제 및 끌어오기 요청을 필터링, 정렬, 그룹화하고, 사용자 지정 필드를 추가하여 팀과 관련된 메타데이터를 추적하고, 구성 가능한 차트로 작업을 시각화하여 여러 보기를 만들고 사용자 지정할 수 있습니다. 프로젝트는 특정 방법론을 적용하는 대신 팀의 요구 사항 및 프로세스에 맞게 사용자 지정할 수 있는 유연한 기능을 제공합니다.

### 최신 상태 유지

프로젝트는 추가하는 문제 및 끌어오기 요청에서 빌드되어 프로젝트와 작업 간에 직접 참조를 만듭니다. 변경하면 정보가 프로젝트에 자동으로 동기화되어 보기와 차트가 업데이트됩니다. 이 통합은 두 가지 방법으로도 작동하므로 프로젝트에서 끌어오기 요청 또는 문제에 대한 정보를 변경하면 끌어오기 요청 또는 문제가 해당 정보를 반영합니다. 예를 들어 프로젝트에서 담당자를 변경하면 해당 변경 내용이 문제에 표시됩니다. 이 통합을 더 자세히 수행하고, 담당자별로 프로젝트를 그룹화하고, 문제를 다른 그룹으로 끌어서 문제 할당을 변경할 수 있습니다.

### 항목에 메타데이터 추가

사용자 지정 필드를 사용하여 문제에 메타데이터를 추가하고, 요청을 끌어오고, 문제 초안을 작성하고, 항목 특성에 대한 보다 풍부한 보기를 빌드할 수 있습니다. 현재 문제 및 끌어오기 요청에 대해 존재하는 기본 제공 메타데이터(담당자, 마일스톤, 레이블 등)로 제한되지 않습니다. 예를 들어 다음 메타데이터를 사용자 지정 필드로 추가할 수 있습니다.

- 목표 배달 날짜를 추적하는 날짜 필드.
- 작업의 복잡성을 추적하는 숫자 필드.
- 작업이 낮음, 보통 또는 높음 우선 순위인지 여부를 추적하는 단일 선택 필드.
- 빠른 메모를 추가할 텍스트 필드.
- 휴식 지원을 포함하여 주별 작업을 계획하는 반복 필드.

{% ifversion projects-v2-tasklists %}

### 문제 간의 관계 탐색

{% data reusables.projects.tasklists-release-stage %}

작업 목록을 사용하여 문제의 계층 구조를 빌드하고, 문제를 더 작은 하위 작업으로 나누고, 문제 간에 새로운 관계를 만들 수 있습니다. 자세한 내용은 "[작업 목록 정보](/issues/tracking-your-work-with-issues/about-tasklists)"를 참조하세요.

이러한 관계는 프로젝트의 추적됨 및 트랙 필드뿐만 아니라 문제에 표시됩니다. 다른 문제로 추적되는 문제를 기준으로 필터링할 수 있으며, 테이블 보기를 추적 기준 필드별로 그룹화하여 하위 작업 목록의 모든 부모 문제를 표시할 수도 있습니다.

{% endif %}

### 다양한 관점에서 프로젝트 보기

프로젝트 보기를 조정하여 필요한 정보를 제공하여 가장 시급한 질문에 신속하게 답변하세요. 이러한 보기를 저장하여 필요에 따라 신속하게 돌아가 팀에서 사용할 수 있도록 할 수 있습니다. 보기를 사용하면 나열된 항목의 범위를 지정할 뿐만 아니라 두 가지 레이아웃 옵션을 제공할 수 있습니다.

프로젝트를 고밀도 테이블 레이아웃으로 볼 수 있습니다.

![프로젝트 테이블](/assets/images/help/issues/projects_table.png)

또는 보드로:

![프로젝트 보드](/assets/images/help/issues/projects_board.png)

프로젝트의 특정 측면에 집중할 수 있도록 항목을 그룹화, 정렬 또는 필터링할 수 있습니다.

![프로젝트 보기](/assets/images/help/issues/project_view.png)

자세한 내용은 “[보기 사용자 지정](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)”을 참조하세요.
