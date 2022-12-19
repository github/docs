---
title: 날짜 필드 정보
shortTitle: About date fields
intro: 날짜를 입력하거나 일정을 사용하여 설정할 수 있는 사용자 지정 날짜 필드를 만들 수 있습니다.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
- Projects
ms.openlocfilehash: 7c3bc45c036e209e0be682c3b13b9dafcba17885
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109669"
---
`YYYY-MM-DD` 형식을 사용하여 날짜 값을 필터링할 수 있습니다(예: `date:2022-07-01`). `>`, `>=`, `<`, `<=`, `..` 등의 연산자를 사용할 수도 있습니다. 예를 들어 `date:>2022-07-01` 및 `date:2022-07-01..2022-07-31`를 지정합니다. 필터에서 현재 날짜를 나타내기 위해 `@today`를 제공할 수도 있습니다. 자세한 내용은 “[프로젝트 필터링](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/filtering-projects)”을 참조하세요.

## 날짜 필드 추가

{% data reusables.projects.new-field %}
1. **날짜**
   ![날짜 옵션을 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-date.png) 선택
1. **저장** 을 클릭합니다.
   ![저장 단추를 보여 주는 스크린샷](/assets/images/help/projects-v2/new-field-save.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “새 필드 만들기”를 입력하기 시작합니다.
