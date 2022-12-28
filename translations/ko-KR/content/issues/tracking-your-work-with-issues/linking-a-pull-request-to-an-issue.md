---
title: 끌어오기 요청을 이슈에 연결
intro: '끌어오기 요청 {% ifversion link-existing-branches-to-issue %}또는 분기{% endif %}를 문제에 연결하여 수정이 진행 중임을 표시하고 끌어오기 요청 {% ifversion link-existing-branches-to-issue %}또는 분기{% endif %}가 병합될 때 문제를 자동으로 닫을 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message
  - /articles/closing-issues-via-commit-messages
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Link PR to issue
ms.openlocfilehash: 8c3ec2b778029c91d0e97783ced873e6b9b28a9b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109365'
---
{% note %}

**참고:** 끌어오기 요청 설명의 특수 키워드는 끌어오기 요청이 리포지토리의 기본 분기를 대상으로 할 때 해석됩니다. 그러나 PR의 기반이 다른 분기인 경우 이러한 키워드는 무시되고 링크가 생성되지 않으며 PR을 병합해도 문제에 영향을 주지 않습니다. **키워드를 사용하여 끌어오기 요청을 문제에 연결하려면 PR이 기본 분기에 있어야 합니다.**

{% endnote %}

## 연결된 문제 및 끌어오기 요청 정보

문제를 끌어오기 요청에 수동으로 연결하거나 끌어오기 요청 설명에서 지원되는 키워드를 사용할 수 있습니다.

끌어오기 요청을 끌어오기 요청 주소 문제에 연결하면 협력자는 누군가가 이 문제에 대해 작업하고 있음을 확인할 수 있습니다.

연결된 끌어오기 요청을 리포지토리의 기본 분기에 병합하면 연결된 문제가 자동으로 닫힙니다. 기본 분기에 대한 자세한 내용은 “[기본 분기 변경](/github/administering-a-repository/changing-the-default-branch)”을 참조하세요.

## 키워드를 사용하여 끌어오기 요청을 이슈에 연결

끌어오기 요청의 설명 또는 커밋 메시지에서 지원되는 키워드를 사용하여 끌어오기 요청을 문제에 연결할 수 있습니다. 끌어오기 요청은 기본 분기에 **있어야 합니다**.

* 닫기
* closes
* closed
* 수정
* fixes
* 고정
* resolve
* resolves
* resolved

키워드를 사용하여 다른 끌어오기 요청에서 끌어오기 요청 주석을 참조하는 경우 끌어오기 요청이 연결됩니다. 참조하는 끌어오기 요청을 병합하면 참조된 끌어오기 요청도 닫힙니다.

키워드를 닫는 구문은 문제가 끌어오기 요청과 동일한 리포지토리에 있는지 여부에 따라 달라집니다.

연결된 문제 | 구문 | 예제
--------------- | ------ | ------
동일한 리포지토리의 문제 | *KEYWORD* #*ISSUE-NUMBER* | `Closes #10`
다른 리포지토리의 문제 | *KEYWORD* *OWNER*/*REPOSITORY*#*ISSUE-NUMBER* | `Fixes octo-org/octo-repo#100`
여러 문제 | 각 문제에 대해 전체 구문 사용 | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

수동으로 연결된 끌어오기 요청만 수동으로 연결을 해제할 수 있습니다. 키워드를 사용하여 연결한 문제를 연결 해제하려면 끌어오기 요청 설명을 편집하여 키워드를 제거해야 합니다.

커밋 메시지에서 닫는 키워드를 사용할 수도 있습니다. 커밋을 기본 분기에 병합할 때 문제가 닫혀 있지만 커밋이 포함된 끌어오기 요청은 연결된 끌어오기 요청으로 나열되지 않습니다.

## 끌어오기 요청 사이드바를 사용하여 끌어오기 요청을 문제에 수동으로 연결

리포지토리에 대한 쓰기 권한이 있는 사용자는 모두 끌어오기 요청을 끌어오기 요청 사이드바에서 문제에 수동으로 연결할 수 있습니다.

각 끌어오기 요청에 최대 10개의 문제를 수동으로 연결할 수 있습니다. 문제 및 끌어오기 요청은 동일한 리포지토리에 있어야 합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. 끌어오기 요청 목록에서 문제에 연결하려는 끌어오기 요청을 클릭합니다.
{% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}
4. 오른쪽 사이드바의 “개발” 섹션에서 {% octicon "gear" aria-label="The Gear icon" %}을(를) 클릭합니다.
{% else %}
4. 오른쪽 사이드바에서 **연결된 문제** 를 클릭합니다.
  ![오른쪽 사이드바의 연결된 문제](/assets/images/help/pull_requests/linked-issues.png) {% endif %}
5. 끌어오기 요청에 연결하려는 문제를 클릭합니다.
  ![드롭다운하여 문제 연결](/assets/images/help/pull_requests/link-issue-drop-down.png)

{% ifversion link-existing-branches-to-issue %}

## 문제 사이드바를 사용하여 끌어오기 요청 또는 분기를 문제에 수동으로 연결

리포지토리에 대한 쓰기 권한이 있는 사용자는 모두 끌어오기 요청을 수동으로 문제 사이드바에서 문제에 연결할 수 있습니다.

각 끌어오기 요청에 최대 10개의 문제를 수동으로 연결할 수 있습니다. 문제는 연결된 끌어오기 요청 또는 분기와 다른 리포지토리에 있을 수 있습니다. 마지막으로 선택한 리포지토리가 기억됩니다. 

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
3. 문제 목록에서 끌어오기 요청 또는 분기를 연결하려는 문제를 클릭합니다.
4. 오른쪽 사이드바에서 **개발** 을 클릭합니다.
  ![오른쪽 사이드바의 개발 메뉴](/assets/images/help/issues/development-menu.png)
5. 문제에 연결하려는 끌어오기 요청 또는 분기가 포함된 리포지토리를 클릭합니다.
  ![드롭다운하여 리포지토리 선택](/assets/images/help/issues/development-menu-select-repository.png)
6. 문제에 연결하려는 끌어오기 요청 또는 분기를 클릭합니다.
  ![드롭다운하여 끌어오기 요청 또는 분기 연결](/assets/images/help/issues/development-menu-select-pr-or-branch.png)
7. **적용** 을 클릭합니다.
  ![적용](/assets/images/help/issues/development-menu-apply.png)

{% endif %}

## 추가 참고 자료

* “[자동 링크된 참조 및 URL](/articles/autolinked-references-and-urls/#issues-and-pull-requests)”
