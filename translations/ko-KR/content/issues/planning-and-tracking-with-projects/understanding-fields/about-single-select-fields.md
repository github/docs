---
title: 단일 선택 필드 정보
shortTitle: About single select fields
intro: 드롭다운 메뉴에서 선택할 수 있는 정의된 옵션을 사용하여 단일 선택 필드를 만들 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-single-select-fields
ms.openlocfilehash: b401f11502185527444cd72fa3264fda51465116
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160282'
---
옵션을 지정하여 단일 선택 필드로 필터링할 수 있습니다(예: `fieldname:option`). 쉼표로 구분된 옵션 목록을 제공하여 여러 값을 필터링할 수 있습니다(예: `fieldname:option,option`). 자세한 내용은 “[프로젝트 필터링](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”을 참조하세요.

단일 선택 필드에는 최대 50개의 옵션이 포함될 수 있습니다. 

## 단일 선택 필드 업데이트

{% data reusables.projects.new-field %}
1. **단일 선택**
   ![단일 선택 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-single-select.png)을 선택합니다.
1. “옵션” 아래에 첫 번째 옵션을 입력합니다.
   ![단일 선택 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/single-select-create-with-options.png)
   - 추가 옵션을 추가하려면 **추가 옵션** 을 클릭합니다.
1. **저장** 을 클릭합니다.
   ![저장 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-save.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “새 필드 만들기”를 입력하기 시작합니다.

## 단일 선택 필드 편집

{% data reusables.projects.project-settings %}
1. 조정하려는 단일 선택 필드의 이름을 클릭합니다.
   ![단일 선택 필드를 보여 주는 스크린샷](/assets/images/help/projects-v2/select-single-select.png)
1. 기존 옵션을 편집하거나 **옵션 추가** 를 클릭합니다.
   ![단일 선택 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/single-select-edit-options.png)
1. 필요에 따라 옵션을 삭제하려면 {% octicon "x" aria-label="The x icon" %}을 클릭합니다.
   ![삭제 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/single-select-delete.png)
1. **저장 옵션** 을 클릭합니다.
   ![저장 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/save-options.png)
