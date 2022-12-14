---
title: 프로젝트 정보(베타)
intro: 프로젝트는 {% data variables.product.company_short %}에서 작업을 계획하고 추적하기 위한 사용자 지정 가능하고 유연한 도구입니다.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Projects
ms.openlocfilehash: eee2010b449aa65795f03ffa513138abcf3d5caf
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145135381"
---
{% data reusables.projects.projects-beta %}

## <a name="about-projects"></a>프로젝트 정보

프로젝트는 {% data variables.product.company_short %}에 대한 문제 및 끌어오기 요청과 통합되는 사용자 지정 가능한 스프레드시트입니다. 문제와 PR을 필터링, 정렬 및 그룹화하여 레이아웃을 사용자 지정할 수 있습니다. 메타데이터를 추적하는 사용자 지정 필드를 추가할 수도 있습니다. 프로젝트는 유연하므로 팀이 가장 적합한 방식으로 작업할 수 있습니다.

### <a name="staying-up-to-date"></a>최신 상태 유지

프로젝트는 {% data variables.product.company_short %}에 대한 정보를 사용하여 자동으로 최신 상태를 유지합니다. 끌어오기 요청이나 문제가 변경되면 프로젝트에 해당 변경 내용이 반영됩니다. 이 통합은 두 가지 방법으로도 작동하므로 프로젝트에서 끌어오기 요청 또는 문제에 대한 정보를 변경하면 끌어오기 요청 또는 문제가 해당 정보를 반영합니다.

### <a name="adding-metadata-to-your-tasks"></a>작업에 메타데이터 추가

사용자 지정 필드를 사용하여 작업에 메타데이터를 추가할 수 있습니다. 예를 들어 다음 메타데이터를 추적할 수 있습니다.

- 목표 전달 날짜를 추적하는 날짜 필드
- 작업의 복잡성을 추적하는 숫자 필드
- 작업이 낮음, 보통 또는 높음 우선 순위인지 여부를 추적하는 단일 선택 필드
- 빠른 메모를 추가할 텍스트 필드
- 휴식 지원을 포함하여 주별 작업을 계획하는 반복 필드

### <a name="viewing-your-project-from-different-perspectives"></a>다양한 관점에서 프로젝트 보기

프로젝트를 고밀도 테이블 레이아웃으로 볼 수 있습니다.

![프로젝트 테이블](/assets/images/help/issues/projects_table.png)

또는 보드로:

![프로젝트 보드](/assets/images/help/issues/projects_board.png)

프로젝트의 특정 측면에 집중할 수 있도록 항목을 그룹화, 정렬 또는 필터링할 수 있습니다.

![프로젝트 보기](/assets/images/help/issues/project_view.png)

자세한 내용은 “[프로젝트 보기 사용자 지정](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”을 참조하세요.

### <a name="working-with-the-project-command-palette"></a>프로젝트 명령 팔레트 작업

프로젝트 명령 팔레트를 사용하여 보기를 빠르게 변경하거나 필드를 추가할 수 있습니다. 명령 팔레트는 사용자 지정 바로 가기 키를 기억할 필요가 없도록 안내합니다. 자세한 내용은 “[프로젝트 보기 사용자 지정](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)”을 참조하세요.

### <a name="automating-project-management-tasks"></a>프로젝트 관리 작업 자동화

프로젝트(베타)는 기본 제공 워크플로를 제공합니다. 예를 들어 문제가 해결되면 상태를 자동으로 "완료"로 설정할 수 있습니다. GraphQL API 및 {% data variables.product.prodname_actions %}를 사용하여 일상적인 프로젝트 관리 작업을 자동화할 수도 있습니다. 자세한 내용은 "[프로젝트 자동화](/issues/trying-out-the-new-projects-experience/automating-projects)" 및 "[API를 사용하여 프로젝트 관리](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)"를 참조하세요.

## <a name="comparing-projects-beta-with-the-non-beta-projects"></a>프로젝트(베타)와 비 베타 프로젝트 비교

프로젝트(베타)는 사용자 지정 가능한 새 버전의 프로젝트입니다. 비 베타 버전의 프로젝트에 대한 자세한 내용은 "[프로젝트 보드를 사용하여 작업 구성"](/issues/organizing-your-work-with-project-boards)을 참조하세요.

## <a name="sharing-feedback"></a>피드백 공유

프로젝트(베타)에 대한 피드백을 {% data variables.product.company_short %}와 공유할 수 있습니다. 대화에 참여하려면 [피드백 토론](https://github.com/github/feedback/discussions/categories/issues-feedback)을 참조하세요.
