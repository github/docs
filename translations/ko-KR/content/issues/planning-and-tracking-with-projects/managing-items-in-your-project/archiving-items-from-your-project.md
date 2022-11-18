---
title: '{% data variables.projects.project_v2 %}에서 항목 보관'
shortTitle: Archiving items
intro: 항목을 보관하거나 복원할 수 있도록 유지하거나 영구적으로 삭제할 수 있습니다.
miniTocMaxHeadingLevel: 2
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 2348805c920e456e2b8388c2ac41d4badd757703
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107719'
---
## 보관 항목

항목을 보관하여 프로젝트의 항목에 대한 컨텍스트를 유지하지만 프로젝트 보기에서는 제거할 수 있습니다. {% ifversion projects-v2-auto-archive %} 특정 조건에 맞는 항목을 자동으로 보관하도록 프로젝트의 기본 제공 워크플로를 구성할 수도 있습니다. 자세한 내용은 "[자동으로 항목 보관"을 참조하세요](/issues/planning-and-tracking-with-projects/automating-your-project/archiving-items-automatically). {% endif %}

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. **보관** 을 클릭합니다.
   ![보관 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/archive-menu-item.png)
1. 메시지가 표시되면 **보관** 을 클릭하여 선택을 확인합니다.
   ![보관 메시지를 보여 주는 스크린샷](/assets/images/help/projects-v2/archive-item-prompt.png)

## 보관된 항목 복원

1. 프로젝트로 이동합니다.
1. 오른쪽 위에 있는 {% octicon "kebab-horizontal" aria-label="The menu icon" %}을 클릭하여 메뉴를 엽니다.
  ![메뉴 아이콘을 보여 주는 스크린샷](/assets/images/help/projects-v2/open-menu.png)
1. 메뉴에서 {% octicon "archive" aria-label="The archive icon" %} **보관 항목** 을 클릭합니다.
  ![‘보관된 항목’ 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/archived-items-menu-item.png)
1. 필요에 따라 표시된 보관된 항목을 필터링하려면 항목 목록 위의 텍스트 상자에 필터를 입력합니다. 사용 가능한 필터에 대한 자세한 내용은 “[프로젝트 필터링”](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)을 참조하세요.
   ![보관된 항목을 필터링하는 필드를 보여 주는 스크린샷](/assets/images/help/issues/filter-archived-items.png)   
1. 각 항목 제목 왼쪽에서 복원할 항목을 선택합니다.
   ![보관된 항목 옆의 확인란을 보여 주는 스크린샷](/assets/images/help/issues/select-archived-item.png)   
1. 선택한 항목을 복원하려면 항목 목록 위에서 **복원** 을 클릭합니다. 
   !["복원" 단추를 보여 주는 스크린샷](/assets/images/help/issues/restore-archived-item-button.png)

## 항목 삭제

항목을 삭제하여 프로젝트에서 완전히 제거할 수 있습니다.

{% data reusables.projects.select-an-item %} {% data reusables.projects.open-item-menu %}
1. **프로젝트에서 삭제** 를 클릭합니다.
   ![삭제 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/delete-menu-item.png)
1. 메시지가 표시되면 **삭제** 를 클릭하여 선택을 확인합니다.
   ![삭제 메시지를 보여 주는 스크린샷](/assets/images/help/projects-v2/delete-item-prompt.png)
