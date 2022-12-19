---
title: 작업 목록 정보
intro: '작업 목록을 사용하여 문제에 대한 작업을 중단하거나 요청을 더 작은 작업으로 끌어온 다음, 완료할 전체 작업 집합을 추적할 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-task-lists
  - /articles/about-task-lists
  - /github/managing-your-work-on-github/about-task-lists
  - /issues/tracking-your-work-with-issues/creating-issues/about-task-lists
  - /issues/tracking-your-work-with-issues/about-task-lists
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
ms.openlocfilehash: dcb8d7972e83d8d35ed2425d57e2950d64ef1352
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159993'
---
{% ifversion projects-v2-tasklists %} {% note %}

**참고:** 현재 프라이빗 베타 버전인 Tasklists의 새 반복에 대한 자세한 내용은 "[작업 목록 정보](/issues/tracking-your-work-with-issues/about-tasklists)"를 참조하세요.

{% endnote %} {% endif %}

## 작업 목록 정보

작업 목록은 클릭 가능한 확인란을 사용하여 각각 별도의 줄에 렌더링되는 작업 집합입니다. 확인란을 선택하거나 선택 취소하여 작업을 완료 또는 완료되지 않은 것으로 표시할 수 있습니다. 

Markdown을 사용하여 {% data variables.product.product_name %}에 대한 주석에서 작업 목록을 만들 수 있습니다. {% ifversion fpt or ghec %}작업 목록에서 이슈, 끌어오기 요청 또는 토론을 참조하는 경우 제목과 상태를 표시하도록 참조가 펼쳐집니다.{% endif %} 

{% ifversion not fpt or ghec %} 작업 목록이 초기 주석에 있을 때 문제의 작업 목록 요약 정보를 보고 요청 목록을 끌어올 수 있습니다.
{% else %}

## 문제 작업 목록 정보

문제의 본문에 작업 목록을 추가하면 목록에 기능이 추가됩니다.

- 문제에 대한 팀의 작업을 추적할 수 있도록 리포지토리의 문제 목록과 같은 {% data variables.product.product_name %}의 다양한 위치에 문제 작업 목록의 진행률이 표시됩니다.
- 태스크가 다른 문제를 참조하고 누군가가 해당 문제를 닫으면 작업의 확인란이 자동으로 완료로 표시됩니다. 
- 작업에 추가 추적 또는 토론이 필요한 경우 작업을 마우스로 가리키고 작업의 오른쪽 위 모서리에 있는 {% octicon "issue-opened" aria-label="The issue opened icon" %} 아이콘을 클릭하여 작업을 문제로 변환할 수 있습니다. 문제를 만들기 전에 자세한 내용을 추가하려면 바로 가기 키를 사용하여 새 문제 양식을 열 수 있습니다. 자세한 내용은 “[바로 가기 키](/github/getting-started-with-github/using-github/keyboard-shortcuts#issues-and-pull-requests)”를 참조하세요.
- 작업 목록에서 참조되는 모든 문제는 참조하는 문제에서 추적되도록 지정합니다.

![렌더링된 작업 목록](/assets/images/help/writing/task-list-rendered.png)

{% endif %}

## 작업 목록 만들기

{% data reusables.repositories.task-list-markdown %}

{% tip %}

**팁:** 닫힌 문제 또는 연결된 끌어오기 요청과 관련된 문제 내에 작업 목록 항목을 만들 수 없습니다.

{% endtip %}

## 작업 순서 다시 지정

작업 확인란의 왼쪽을 클릭하고 작업을 새 위치로 끌어서 작업을 삭제하여 작업 목록의 항목 순서를 변경할 수 있습니다. 동일한 주석의 여러 목록에서 작업의 순서를 변경할 수 있지만 다른 주석 간 작업의 순서를 변경할 수는 없습니다.

{% ifversion fpt %} ![순서가 변경된 작업 목록](/assets/images/help/writing/task-list-reordered.gif) {% else %} ![ 작업 목록](/assets/images/enterprise/writing/task-lists-reorder.gif) {% endif %}

{% ifversion fpt %}

## 추적된 문제 탐색

작업 목록에서 참조되는 모든 문제는 작업 목록이 포함된 문제에 의해 추적되도록 지정합니다. 추적된 문제에서 추적 문제로 이동하려면 문제 상태 옆의 **추적** 섹션에서 추적 문제 번호를 클릭합니다.

![추적 예제](/assets/images/help/writing/task_list_tracked.png)

{% endif %}

## 추가 참고 자료

{% ifversion code-scanning-task-lists %}
* “[작업 목록을 사용하는 문제에서 {% data variables.product.prodname_code_scanning %} 경고 추적](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/tracking-code-scanning-alerts-in-issues-using-task-lists)”{% endif %}
