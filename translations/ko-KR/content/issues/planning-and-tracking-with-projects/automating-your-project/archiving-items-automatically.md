---
title: 자동으로 항목 보관
shortTitle: Archiving automatically
intro: 특정 조건에 맞는 항목을 자동으로 보관하도록 프로젝트의 기본 제공 워크플로를 구성할 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-auto-archive
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 75346021f51cb8cc373b4a50aef43e0b5c7646dc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107223'
---
{% note %}

**참고:** 기본 제공 워크플로는 제한된 베타의 일부로 제공됩니다.

{% endnote %}

## 항목 자동 보관 정보

항목을 자동으로 보관하도록 프로젝트의 기본 제공 워크플로를 구성할 수 있습니다. 항목을 보관하면 각 프로젝트에서 {% data variables.projects.item_limit %} 항목의 한도 미만을 유지하는 데 도움이 됩니다.

, `reason`및 `last-updated` 필터를 `is`사용하여 항목을 보관해야 하는 시기를 지정할 수 있습니다.

문제 또는 끌어오기 요청에 대해 자동 보관을 사용하도록 설정하면 이미 조건을 충족하는 프로젝트의 항목도 보관됩니다. 이미 조건을 충족하는 많은 수의 항목을 보관하는 데 약간의 지연이 있을 수 있습니다.

프로젝트에는 포함할 수 있는 보관된 항목의 수도 제한됩니다. 프로젝트에는 보관된 항목에 최대 {% data variables.projects.archived_item_limit %}이(가) 포함될 수 있습니다. 항목을 영구적으로 삭제하는 방법에 대한 자세한 내용은 "[항목 삭제"를 참조하세요 ](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project#deleting-items).

## 프로젝트에서 자동 보관 구성

{% data reusables.projects.access-workflows %}
1. "기본 워크플로" 목록에서 **항목 자동 보관을** 클릭합니다.
   
   ![자동 보관 워크플로를 보여 주는 스크린샷](/assets/images/help/projects-v2/archive-workflows.png)
   
1. **시기** 옆에 있는 자동으로 보관할 항목 유형을 확인합니다.
   
   ![워크플로에 대한 “시기” 구성을 보여 주는 스크린샷](/assets/images/help/projects-v2/workflow-when-archive.png)

1. {% octicon "filter" aria-label="The filter icon" %} 옆에 항목을 자동으로 보관하는 데 사용할 필터 조건을 입력합니다. , `reason`및 `last-updated` 필터만 사용할 `is`수 있습니다. 필터 구문에 대한 자세한 내용은 "[프로젝트 필터링"을 참조하세요](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects).
   
   ![필터 텍스트 영역을 보여 주는 스크린샷](/assets/images/help/projects-v2/auto-archive-filter.png)
   
1. 워크플로를 사용하지 않도록 설정한 경우 **끄** 기 옆에 있는 토글을 클릭하여 워크플로를 사용하도록 설정합니다.
   
   ![워크플로에 대한 "켜기/끄기" 컨트롤을 보여 주는 스크린샷](/assets/images/help/projects-v2/workflow-enable.png)
   

## 추가 정보

* "[프로젝트에서 항목 보관](/issues/planning-and-tracking-with-projects/managing-items-in-your-project/archiving-items-from-your-project)"
* "[기본 제공 자동화 사용](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-built-in-automations)"
