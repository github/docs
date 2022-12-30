---
title: '{% data variables.projects.project_v2 %}에 항목 추가'
shortTitle: Adding items
intro: '프로젝트에 개별적으로 또는 대량으로 끌어오기 요청, 문제, 초안 문제를 추가하는 방법을 알아봅니다.'
miniTocMaxHeadingLevel: 4
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: cba8a20d0ec17ec8fceb0cb30671eb3d608ae715
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107615'
---
프로젝트는 초안 문제, 문제, 끌어오기 요청을 추적할 수 있습니다. 

{% note %}

**참고:** 프로젝트에는 최대 {% 데이터 variables.projects.item_limit %} 항목 및 {% 데이터 variables.projects.archived_item_limit %}의 보관된 항목이 포함될 수 있습니다. {% ifversion projects-v2-auto-archive %} 특정 조건을 충족할 때 항목을 자동으로 보관하는 방법에 대한 자세한 내용은 "[항목 자동 보관"을 참조하세요](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically). {% endif %}

{% endnote %}

### 프로젝트에 이슈 및 끌어오기 요청 추가

#### 문제 또는 끌어오기 요청의 URL 붙여넣기

{% data reusables.projects.add-item-via-paste %}

#### 문제 또는 끌어오기 요청 검색

{% data reusables.projects.add-item-bottom-row %}
2. <kbd>#</kbd> 을 입력합니다.
3. 끌어오기 요청 또는 문제가 있는 리포지토리를 선택합니다. 리포지토리 이름의 일부를 입력하여 옵션 범위를 좁힐 수 있습니다.
  ![프로젝트에 추가할 문제 URL 붙여넣기를 보여 주는 스크린샷](/assets/images/help/projects-v2/add-item-select-repo.png)
4. 문제 또는 끌어오기 요청을 선택합니다. 제목의 일부를 입력하여 옵션 범위를 좁힐 수 있습니다.
  ![프로젝트에 추가할 문제 URL 붙여넣기를 보여 주는 스크린샷](/assets/images/help/projects-v2/add-item-select-issue.png)

#### 문제 및 끌어오기 요청 대량 추가

1. 프로젝트 아래쪽 행에서 {% octicon "plus" aria-label="plus icon" %}을 클릭합니다.
  ![프로젝트 아래쪽에 + 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/omnibar-add.png)
1. **리포지토리에서 항목 추가** 를 클릭합니다.
  ![“리포지토리에서 항목 추가” 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/add-bulk-menu-item.png) {% data reusables.projects.bulk-add %}

#### 리포지토리에서 여러 문제 또는 끌어오기 요청 추가

1. {% data variables.location.product_location %}에서 프로젝트에 추가하려는 문제 또는 끌어오기 요청이 포함된 리포지토리로 이동합니다.
{% data reusables.repositories.sidebar-issue-pr %}
1. 각 문제 제목 왼쪽에서 프로젝트에 추가할 문제를 선택합니다.
  ![문제 또는 끌어오기 요청을 선택하는 확인란을 보여 주는 스크린샷](/assets/images/help/issues/select-issue-checkbox.png)
1. 필요에 따라 페이지에서 모든 문제 또는 끌어오기 요청을 선택하려면 문제 또는 끌어오기 요청 목록 맨 위에서 모두를 선택합니다. 
  ![화면에서 모두를 선택하는 확인란을 보여 주는 스크린샷](/assets/images/help/issues/select-all-checkbox.png)
1. 문제 또는 끌어오기 요청 목록 위에서 **프로젝트** 를 클릭합니다. 
  ![프로젝트 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/issue-index-project-menu.png)
1. 선택한 문제 또는 끌어오기 요청을 추가할 프로젝트를 클릭합니다.
  ![화면에서 모두를 선택하는 확인란을 보여 주는 스크린샷](/assets/images/help/projects-v2/issue-index-select-project.png)

#### 문제 또는 끌어오기 요청 내에서 프로젝트 할당

1. 프로젝트에 추가하려는 문제 또는 끌어오기 요청으로 이동합니다.
2. 사이드바에서 **프로젝트** 를 클릭합니다.
  ![문제 사이드바의 “프로젝트”를 보여 주는 스크린샷](/assets/images/help/projects-v2/issue-sidebar-projects.png)
3. 문제나 끌어오기 요청을 추가하려는 프로젝트를 선택합니다.
  ![문제 사이드바에서 프로젝트 선택을 보여 주는 스크린샷](/assets/images/help/projects-v2/issue-sidebar-select-project.png)
4. 필요에 따라 사용자 지정 필드를 채웁니다.
  ![프로젝트 사이드바](/assets/images/help/projects-v2/issue-edit-project-sidebar.png)

#### 명령 팔레트를 사용하여 문제 또는 끌어오기 요청 추가

1. {% data reusables.projects.open-command-palette %}
1. “항목 추가” 입력을 시작하고 <kbd>Return</kbd> 키를 누릅니다.
{% data reusables.projects.bulk-add %}

### 초안 문제 만들기

초안 문제는 아이디어를 빠르게 캡처하는 데 유용합니다. 리포지토리에서 참조되는 문제 및 끌어오기 요청과 달리 초안 문제는 프로젝트에만 존재합니다.

{% data reusables.projects.add-draft-issue %}

초안 문제에는 프로젝트의 제목, 텍스트 본문, 담당자, 사용자 지정 필드가 있을 수 있습니다. 초안 문제에 대한 리포지토리, 레이블 또는 마일스톤을 채우려면 먼저 초안 문제를 문제로 변환해야 합니다. 자세한 내용은 “[초안 문제를 문제로 변환](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/converting-draft-issues-to-issues)”을 참조하세요.

{% note %}

**참고**: 사용자는 초안 문제가 문제로 변환되지 않는 한 초안 문제에 할당되거나 언급될 때 알림을 받지 못합니다.

{% endnote %}
