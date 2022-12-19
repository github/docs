---
title: 작업 목록 정보
intro: 작업 목록을 사용하여 문제를 더 작은 하위 작업으로 나눌 수 있습니다.
versions:
  feature: projects-v2-tasklists
miniTocMaxHeadingLevel: 3
redirect_from:
  - /early-access/issues/about-tasklists
ms.openlocfilehash: 69cdde1bb071f963b1a2f58ef1227bc96ab9d869
ms.sourcegitcommit: f5ec7f52d2945ba8b7c14f8f604e4784a8feda19
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180787'
---
{% data reusables.projects.tasklists-release-stage %}

## 작업 목록 정보

작업 목록은 {% data variables.product.product_name %}의 문제 계층 구조에 대한 지원을 추가하여 문제를 추적하고, 문제를 더 작은 하위 작업으로 나누고, 문제 간에 새로운 관계를 만드는 데 도움이 됩니다.

작업 목록은 [베타 작업 목록](/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists)의 이전 반복을 기반으로 하여 항목을 문제로 변환하고, 작업 목록의 진행률을 표시하고, 문제 간의 "트랙/추적 기준" 관계를 만드는 기능을 유지합니다.

작업 목록에 추가하는 문제는 해당 담당자와 적용된 레이블을 표시하도록 자동으로 채워집니다.

![작업 목록을 보여 주는 이미지](/assets/images/help/issues/tasklist-hero.png)

### {% data variables.projects.projects_v2 %}과의 통합 정보

 프로젝트의 측면 패널에는 이동 경로 메뉴의 계층 구조에 문제의 위치가 표시되므로 작업 목록에 포함된 문제를 탐색할 수 있습니다. 프로젝트 보기에 트랙 및 추적 기준 필드를 추가하여 문제 간의 관계를 빠르게 확인할 수도 있습니다. 자세한 내용은 "[필드별 트랙 및 추적 정보"를 참조하세요](/issues/planning-and-tracking-with-projects/understanding-fields/about-tracks-and-tracked-by-fields).

## 작업 목록 만들기

문제 설명에서 Markdown을 사용하여 작업 목록을 만들 수 있습니다. 펜스 코드 블록을 만들고 여는 백틱 옆에 포함합니다 `[tasklist]` . 그런 다음 각 항목의 서문 앞에 `- [ ]` 다른 문제 또는 텍스트에 대한 링크를 포함할 수 있습니다. 필요에 따라 제목을 목록 맨 위에 Markdown 헤더로 포함할 수 있습니다. 

````
```[tasklist]
### Tasks
- [ ] https://github.com/octo-org/octo-repo/issues/45
- [ ] Draft issue title
```
````
Markdown은 {% data variables.product.product_name %}에 의해 작업 목록으로 렌더링됩니다. 그런 다음, UI를 사용하여 변경하고 문제 및 초안 문제를 추가할 수 있습니다. 문제 설명을 편집하는 경우 Markdown을 직접 수정하거나 Markdown을 복사하여 다른 문제의 작업 목록을 복제할 수 있습니다.

서식 지정 도구 모음에서 {% octicon "checklist" aria-label="The checklist icon" %}을 클릭하여 새 문제를 만들거나 문제 설명을 편집할 때 작업 목록을 삽입할 수도 있습니다.

!['작업 목록 추가' 단추를 보여 주는 스크린샷](/assets/images/help/issues/tasklist-formatting-toolbar.png)

## 작업 목록에 문제 추가

1. 작업 목록 아래쪽에서 **작업에 항목 추가를** 클릭합니다.
   
   !["작업에 항목 추가" 단추를 보여 주는 스크린샷](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. 작업 목록에 추가할 문제를 선택합니다.
   
   * 리포지토리에서 최근에 업데이트된 문제를 추가하려면 드롭다운에서 문제를 클릭하거나 화살표 키를 사용하여 선택한 다음 Enter 키를 누릅니 <kbd>다</kbd>. 
     
     ![최근 문제를 보여 주는 스크린샷](/assets/images/help/issues/select-recent-issue.png)
     
   * 리포지토리에서 문제를 검색하려면 문제 또는 문제 번호의 제목을 입력하기 시작하고 결과를 클릭하거나 화살표 키를 사용하여 선택하고 Enter 키를 누릅니 <kbd>다</kbd>.
     
     ![문제 검색을 보여 주는 스크린샷](/assets/images/help/issues/search-for-issue.png)
     
   * 해당 URL을 사용하여 직접 문제를 추가하려면 문제의 URL을 붙여넣고 Enter 키를 누릅니 <kbd>다</kbd>.
        
     ![붙여넣은 문제 URL을 보여 주는 스크린샷](/assets/images/help/issues/paste-issue-url.png)
     

## 작업 목록에서 초안 문제 만들기

초안 문제는 나중에 이슈로 변환할 수 있는 아이디어를 빠르게 캡처하는 데 유용합니다. 리포지토리에서 참조되는 문제 및 끌어오기 요청과 달리 초안 문제는 작업 목록에만 존재합니다.

1. 작업 목록 아래쪽에서 **작업에 항목 추가를** 클릭합니다.
   
   !["작업에 항목 추가" 단추를 보여 주는 스크린샷](/assets/images/help/issues/add-new-tasklist-button.png)
   
1. 초안 문제 제목을 입력하고 Enter 키를 누릅니 <kbd>다</kbd>.
   
   ![초안 문제 제목을 보여 주는 스크린샷](/assets/images/help/issues/add-draft-issue-to-tasklist.png)
   

## 초안 문제를 작업 목록의 문제로 변환

초안 문제를 문제로 변환할 수 있습니다. 문제는 작업 목록의 부모 문제와 동일한 리포지토리에서 만들어집니다.

1. 변환할 초안 문제 옆에 있는 {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}을 클릭합니다.
   
   ![메뉴 아이콘을 보여 주는 스크린샷](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. 메뉴에서 **문제로 변환을** 클릭합니다.
   
   !["이슈로 변환" 옵션 스크린샷](/assets/images/help/issues/tasklist-convert-to-issue.png)
   

## 작업 목록에서 문제 또는 초안 문제 제거

작업 목록에서 문제 및 초안 문제를 제거할 수 있습니다. 작업 목록에서 제거된 문제는 리포지토리에서 제거되지 않습니다.

1. 제거하려는 초안 문제 옆에 있는 {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}을 클릭합니다.
   
   ![메뉴 아이콘을 보여 주는 스크린샷](/assets/images/help/issues/tasklist-item-kebab.png)
   
1. 메뉴에서 **제거** 를 클릭합니다.
   
   !["제거" 옵션을 보여 주는 스크린샷](/assets/images/help/issues/tasklist-remove.png)
   
## 작업 목록 제목 변경

새 작업 목록을 만들 때 기본 제목은 "작업"입니다. 문제의 마크다운을 편집하여 제목을 수정할 수 있습니다.

1. 문제 본문의 오른쪽 위에서 {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}을 클릭합니다.
   
   ![메뉴 아이콘의 위치를 보여 주는 스크린샷](/assets/images/help/issues/comment-menu.png)
   
1. 메뉴에서 **편집** 을 클릭합니다.
   
   ![편집 옵션을 보여 주는 스크린샷](/assets/images/help/issues/comment-menu-edit.png)
   
1. 펜스 코드 블록의 헤더를 새 제목으로 수정합니다. 예를 들어 `### Tasks`를 `### My new title`로 변경합니다. 
   
   ![편집 옵션을 보여 주는 스크린샷](/assets/images/help/issues/edit-tasklist-title.png)
   
1. **댓글 업데이트** 를 클릭합니다.

## 작업 목록 복사

"Markdown 복사" 옵션을 사용하여 작업 목록을 복사하는 경우 {% data variables.product.product_name %}은 Markdown을 클립보드에 복사하고 문제 이름을 포함하므로 컨텍스트를 잃지 않고 GitHub 외부에 작업 목록을 붙여넣을 수 있습니다. 

1. 작업 목록의 오른쪽 위에서 {% octicon "kebab-horizontal" aria-label="The kebab menu icon" %}을 클릭합니다.
   
   ![메뉴 아이콘을 보여 주는 스크린샷](/assets/images/help/issues/tasklist-kebab.png)
   
1. 메뉴에서 **Markdown 복사** 를 클릭합니다.
   
   !["Markdown 복사" 옵션을 보여 주는 스크린샷](/assets/images/help/issues/tasklist-copy-markdown.png)
   
