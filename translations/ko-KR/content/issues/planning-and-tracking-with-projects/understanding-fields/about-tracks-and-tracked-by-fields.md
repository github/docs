---
title: 필드별 트랙 및 추적 정보
shortTitle: About Tracks and Tracked by fields
intro: 프로젝트에서 문제의 하위 작업을 볼 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-tasklists
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 44c1fcf3ed4495b57a0f2dbe3e92076f0e815502
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180747'
---
{% data reusables.projects.tasklists-release-stage %}

작업 목록에 하위 작업을 추가할 때 프로젝트의 트랙 및 추적 기준 필드를 사용하도록 설정하여 문제 간의 관계를 확인할 수 있습니다. 작업 목록에서 문제 계층을 만드는 방법에 대한 자세한 내용은 "[작업 목록 정보](/issues/tracking-your-work-with-issues/about-tasklists)"를 참조하세요.

추적 기준 필드를 사용하여 항목을 그룹화하여 각 문제의 하위 작업과 항목을 완료하는 데 필요한 작업을 명확하게 보여 주는 보기를 만들 수 있습니다. 자세한 내용은 "[테이블 레이아웃의 필드 값별 그룹화"를 참조하세요](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#grouping-by-field-values-in-table-layout).

추적 기준 필드를 기준으로 필터링하여 특정 문제에 의해 추적되는 항목만 표시할 수도 있습니다. "tracked-by" 입력을 시작하고 목록에서 문제를 선택하거나 리포지토리 및 문제 번호를 알고 있는 경우 아래 필터를 전체로 입력할 수 있습니다.

```
tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"
```

필터를 사용하려면 를 리포지토리 소유자, `<REPO>` 리포지토리 이름으로, `<ISSUE NUMBER>` 를 문제 번호로 바꿉 `<OWNER>` 다. 자세한 내용은 “[프로젝트 필터링](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”을 참조하세요.

### 추적 기준 필드 사용

추적 기준 필드를 사용하도록 설정하여 프로젝트에서 항목을 추적하는 문제를 확인할 수 있습니다.

1. 테이블 보기의 맨 오른쪽 필드 머리글에서 {% octicon "plus" aria-label="the plus icon" %}을 클릭합니다.
   
   ![새 필드 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-button.png)
   
1. "숨겨진 필드"에서 **추적 기준 을** 클릭합니다.
   
   ![필드 메뉴를 보여 주는 스크린샷](/assets/images/help/projects-v2/select-tracked-by-field.png)
   

### 트랙 필드 사용

트랙 필드를 사용하도록 설정하여 프로젝트의 항목이 추적하는 다른 문제를 확인할 수 있습니다.

1. 테이블 보기의 맨 오른쪽 필드 머리글에서 {% octicon "plus" aria-label="the plus icon" %}을 클릭합니다.
   
   ![새 필드 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-button.png)
   
1. "숨겨진 필드"에서 **트랙을** 클릭합니다.
   
   ![필드 메뉴를 보여 주는 스크린샷](/assets/images/help/projects-v2/select-tracks-field.png)
   
