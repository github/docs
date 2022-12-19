---
title: 텍스트 및 숫자 필드 정보
shortTitle: About text and number fields
intro: 프로젝트에 사용자 지정 텍스트 및 숫자 필드를 추가할 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
redirect_from:
  - /issues/planning-and-tracking-with-projects/understanding-field-types/about-text-and-number-fields
ms.openlocfilehash: 531931f74afd1d4fdc206002742d8d27bca67dc4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160089'
---
텍스트 필드를 사용하여 프로젝트에 노트 또는 기타 자유형 텍스트를 포함할 수 있습니다.

텍스트 필드는 필터에서 사용할 수 있습니다(예: `field:"exact text"`). 필드를 지정하지 않고 텍스트를 필터링하는 경우에도 텍스트 필드와 항목 제목이 사용됩니다. 

숫자 필드는 필터에서도 사용할 수 있습니다. `>`, `>=`, `<`, `<=`, `..` 범위 쿼리를 사용하여 숫자 필드로 필터링할 수 있습니다. 예를 들어 `field:5..15` 또는 `field:>=20`입니다. 자세한 내용은 “[프로젝트 필터링](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”을 참조하세요.

## 텍스트 필드 추가

{% data reusables.projects.new-field %}
1. **텍스트**
   ![텍스트 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-text.png) 선택
1. **저장** 을 클릭합니다.
   ![저장 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-save.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “새 필드 만들기”를 입력하기 시작합니다.

## 숫자 필드 추가

{% data reusables.projects.new-field %}
1. **숫자**
   ![숫자 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-number.png) 선택
1. **저장** 을 클릭합니다.
   ![저장 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-save.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “새 필드 만들기”를 입력하기 시작합니다.
