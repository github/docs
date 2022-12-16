---
title: 보기 관리
intro: '프로젝트 보기를 만들고, 저장하고, 관리하는 방법을 알아봅니다.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
type: tutorial
topics:
  - Projects
ms.openlocfilehash: 9b3d7f4b12210841a0c55f3b0b7356da9b225416
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109562'
---
## 프로젝트 보기 만들기

프로젝트 보기를 사용하면 프로젝트의 특정 측면을 빠르게 볼 수 있습니다. 각 보기는 프로젝트의 별도 탭에 표시됩니다. 

예를 들어 다음이 표시될 수 있습니다.
- 아직 시작되지 않은 모든 항목을 표시하는 보기(“상태”에서 필터링).
- 각 팀의 워크로드를 보여 주는 보기(사용자 지정 “팀” 필드별로 그룹화).
- 목표 배송 날짜가 가장 빠른 항목을 표시하는 보기(날짜 필드로 정렬).

새 보기를 추가하려면 다음을 수행합니다.

{% data reusables.projects.new-view %}

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “새 보기”를 입력하기 시작합니다.

새 보기가 자동으로 저장됩니다.

## 보기 복제

기존 보기를 복제하고 기본 보기로 사용하여 추가로 변경할 수 있습니다.

1. 복제하려는 보기로 전환합니다.
{% data reusables.projects.open-view-menu %}
1. {% octicon "versions" aria-label="the versions icon" %} **보기 복제** 를 클릭합니다.
   ![복제 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/duplicate-view.png)

## 보기에 변경 내용 저장

보기에서 데이터 정렬, 순서 변경, 필터링 또는 그룹화와 같이 보기를 변경하면 보기 이름 옆에 점이 표시되어 저장되지 않은 변경 내용이 있음을 나타냅니다. 

![저장되지 않은 변경 표시기](/assets/images/help/projects/unsaved-changes.png)

변경 내용을 저장하지 않으려면 이 표시기를 무시할 수 있습니다. 다른 사람은 변경 내용을 볼 수 없습니다.

{% data reusables.projects.save-view %}

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “보기 저장”을 입력하기 시작합니다.

## 저장된 보기 순서 다시 지정

저장된 보기가 포함된 탭의 순서를 변경하려면 탭을 클릭하고 새 위치로 끕니다. 새 탭 순서가 자동으로 저장됩니다.

## 저장된 보기 이름 바꾸기

저장된 보기의 이름을 바꿀 수 있습니다. 이름 변경 내용이 자동으로 저장됩니다.

1. 이름을 바꿀 보기로 전환합니다.
{% data reusables.projects.open-view-menu %}
1. {% octicon "pencil" aria-label="the pencil icon" %} **보기 이름 바꾸기** 를 클릭합니다.
   ![이름 바꾸기 메뉴 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/rename-view.png)
1. 보기의 새 이름을 입력합니다.
1. 변경 내용을 저장하려면 <kbd>Return</kbd> 키를 누릅니다.

## 저장된 보기 삭제

1. 삭제할 보기로 전환합니다.
{% data reusables.projects.open-view-menu %}
1. {% octicon "trash" aria-label="the trasj icon" %} **보기 삭제** 를 클릭합니다.
   ![이름 바꾸기 삭제 항목을 보여 주는 스크린샷](/assets/images/help/projects-v2/delete-view.png)

또는 {% data variables.projects.command-palette-shortcut %}을 눌러 프로젝트 명령 팔레트를 열고 “보기 삭제”를 입력하기 시작합니다.
