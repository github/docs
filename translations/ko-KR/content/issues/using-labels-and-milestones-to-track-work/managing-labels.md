---
title: 레이블 관리
intro: '레이블을 만들고, 편집하고, 적용하고, 삭제하여 {% ifversion fpt or ghec %}문제, 끌어오기 요청 및 토론{% else %}문제 및 끌어오기 요청{% endif %}을 분류할 수 있습니다.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
ms.openlocfilehash: 42feddd5ebbdee81140d3aab48b81f83a2c6e69f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145135268'
---
## 레이블 정보

{% ifversion fpt or ghec %}이슈, 끌어오기 요청, 토론{% else %}이슈 및 끌어오기 요청{% endif %}을 분류하는 레이블을 만들어 {% data variables.product.product_name %}에서 작업을 관리할 수 있습니다. 레이블이 만들어진 리포지토리에 레이블을 적용할 수 있습니다. 레이블이 있으면 해당 리포지토리 내에서 {% ifversion fpt or ghec %}이슈, 끌어오기 요청 또는 토론{% else %}이슈 또는 끌어오기 요청{% endif %}에 레이블을 사용할 수 있습니다.

## 기본 레이블 정보

{% data variables.product.product_name %}는 모든 새 리포지토리에서 기본 레이블을 제공합니다. 기본 레이블을 사용하여 리포지토리에서 표준 워크플로를 만들 수 있습니다.

레이블 | Description
---  | ---
`bug` | 예기치 않은 문제 또는 의도하지 않은 동작{% ifversion fpt or ghes or ghec %}을 나타냅니다.
`documentation` | 설명서{% endif %} 개선 또는 추가가 필요함을 나타냅니다.
`duplicate` | 유사한 {% ifversion fpt or ghec %}이슈, 끌어오기 요청 또는 토론{% else %}이슈 또는 끌어오기 요청{% endif %}을 나타냅니다.
`enhancement` | 새 기능 요청을 나타냅니다.
`good first issue` | 최초 기여자에게 적절한 이슈를 나타냅니다.
`help wanted` | 유지 관리자가 이슈 또는 끌어오기 요청에 대한 지원을 원함을 나타냅니다.
`invalid` | {% ifversion fpt or ghec %}이슈, 끌어오기 요청 또는 토론{% else %}이슈 또는 끌어오기 요청{% endif %}이 더 이상 관련이 없음을 나타냅니다.
`question` | {% ifversion fpt or ghec %}이슈, 끌어오기 요청 또는 토론{% else %}이슈 또는 끌어오기 요청{% endif %}에 더 많은 정보가 필요함을 나타냅니다.
`wontfix` | {% ifversion fpt or ghec %}이슈, 끌어오기 요청 또는 토론{% else %}이슈 또는 끌어오기 요청{% endif %}에 대한 작업이 계속되지 않음을 나타냅니다.

기본 레이블은 리포지토리를 만들 때 모든 새 리포지토리에 포함되지만 나중에 레이블을 편집하거나 삭제할 수 있습니다.

`good first issue` 레이블 관련 이슈는 리포지토리의 `contribute` 페이지를 채우는 데 사용됩니다. `contribute` 페이지에 대한 예는 [github/docs/contribute](https://github.com/github/docs/contribute)를 참조하세요. 

{% ifversion fpt or ghes or ghec %}조직 소유자는 조직의 리포지토리에 대한 기본 레이블을 사용자 지정할 수 있습니다. 자세한 내용은 “[조직의 리포지토리에 대한 기본 레이블 관리](/articles/managing-default-labels-for-repositories-in-your-organization)”를 참조하세요.
{% endif %}

## 레이블 만들기

리포지토리에 대한 쓰기 권한이 있는 사용자는 누구나 레이블을 만들 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. 검색 필드 오른쪽에 있는 **새 레이블** 을 클릭합니다.
{% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## 레이블 적용

리포지토리에 대한 심사 액세스 권한이 있는 사용자는 누구나 레이블을 적용하고 해제할 수 있습니다.

1. {% ifversion fpt or ghec %}이슈, 끌어오기 요청 또는 토론{% else %}이슈 또는 끌어오기 요청{% endif %}으로 이동합니다.
1. 오른쪽 사이드바의 “레이블” 오른쪽에서 {% octicon "gear" aria-label="The gear icon" %} 아이콘을 클릭하고 레이블을 클릭합니다.
  ![“레이블” 드롭다운 메뉴](/assets/images/help/issues/labels-drop-down.png)

## 레이블 편집

리포지토리에 대한 쓰기 권한이 있는 사용자는 누구나 기존 레이블을 편집할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## 레이블 삭제

리포지토리에 대한 쓰기 권한이 있는 사용자는 누구나 기존 레이블을 삭제할 수 있습니다.

레이블을 삭제하면 이슈 및 끌어오기 요청에서 레이블이 제거됩니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.delete-label %}

## 추가 참고 자료
- “[이슈 및 끌어오기 요청 필터링 및 검색](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)”{% ifversion fpt or ghes or ghec %}
- “[조직의 리포지토리에 대한 기본 레이블 관리](/articles/managing-default-labels-for-repositories-in-your-organization)”{% endif %}{% ifversion fpt or ghec %}
- “[레이블을 사용하여 프로젝트에 유용한 기여 장려](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)”{% endif %}
- “[기본 쓰기 및 서식 지정 구문](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#using-emoji)”
