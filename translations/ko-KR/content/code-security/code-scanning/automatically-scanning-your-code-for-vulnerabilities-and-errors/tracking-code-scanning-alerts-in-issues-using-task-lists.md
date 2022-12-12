---
title: 작업 목록을 사용하여 이슈에서 코드 검사 경고 추적
shortTitle: Track alerts in issues
intro: 작업 목록을 사용하여 코드 검사 경고를 문제에 추가할 수 있습니다. 이렇게 하면 경고 수정을 포함하는 개발 작업 계획을 쉽게 만들 수 있습니다.
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can track {% data variables.product.prodname_code_scanning %} alerts in issues using task lists.'
versions:
  feature: code-scanning-task-lists
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
  - Issues
ms.openlocfilehash: a5112bc5982415865a47d752af4e980a2e3d12ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116839'
---
{% data reusables.code-scanning.beta-alert-tracking-in-issues %}

## 이슈에서 {% data variables.product.prodname_code_scanning %} 경고 추적 정보

{% data reusables.code-scanning.github-issues-integration %}

경고를 추적하는 새 이슈를 만들 수도 있습니다.
- {% data variables.product.prodname_code_scanning %} 경고에서 코드 검색 경고를 새 이슈의 작업 목록에 자동으로 추가합니다. 자세한 내용은 아래의 “[{% data variables.product.prodname_code_scanning %} 경고에서 추적 이슈 만들기](#creating-a-tracking-issue-from-a-code-scanning-alert)”를 참조하세요.

- 평소처럼 API를 통해 이슈의 본문 내에서 코드 검사 링크를 제공합니다. 추적된 관계를 만들려면 작업 목록 구문을 사용해야 합니다. 
   - `- [ ] <full-URL- to-the-code-scanning-alert>`
   - 예를 들어 이슈에 `- [ ] https://github.com/octocat-org/octocat-repo/security/code-scanning/17`을 추가하는 경우 이슈는 `octocat-org` 조직의 `octocat-repo` 리포지토리의 “보안” 탭에서 ID 번호가 17인 코드 검사 경고를 추적합니다.

둘 이상의 이슈를 사용하여 동일한 {% data variables.product.prodname_code_scanning %} 경고를 추적할 수 있으며, 이슈는 {% data variables.product.prodname_code_scanning %} 경고가 발견된 리포지토리의 다른 리포지토리에 속할 수 있습니다.


{% data variables.product.product_name %}은 이슈에서 {% data variables.product.prodname_code_scanning %} 경고를 추적하는 시기를 나타내는 사용자 인터페이스의 여러 위치에 시각적 신호를 제공합니다.

- 코드 검사 경고 목록 페이지에는 여전히 처리가 필요한 경고를 한눈에 볼 수 있도록 이슈에서 추적되는 경고가 표시됩니다.

  ![코드 검사 경고 페이지의 필에서 추적됨](/assets/images/help/repository/code-scanning-alert-list-tracked-issues.png)

- “다음에서 추적됨” 섹션도 해당 경고 페이지에 표시됩니다. 

  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![코드 검색 경고 페이지의 다음에서 추적됨 섹션](/assets/images/help/repository/code-scanning-alert-tracked-in-pill.png) {% else %} ![코드 검색 경고 페이지의 다음에서 추적됨 섹션](/assets/images/enterprise/3.4/repository/code-scanning-alert-tracked-in-pill.png) {% endif %}

- 추적 이슈에서 {% data variables.product.prodname_dotcom %}은 작업 목록과 호버 카드에 보안 배지 아이콘을 표시합니다. 
  
  {% note %}

  리포지토리에 대한 쓰기 권한이 있는 사용자만 호버 카드와 함께 이슈의 경고에 대한 풀리지 않은 URL을 볼 수 있습니다. 리포지토리에 대한 읽기 권한이 있거나 권한이 전혀 없는 사용자의 경우 경고가 일반 URL로 표시됩니다.

  {% endnote %}
  
  경고의 상태가 모든 분기에서 “열림” 또는 “닫힘”이므로 아이콘의 색은 회색입니다. 이슈는 경고를 추적하므로 경고는 이슈에 열려 있거나 닫힌 상태를 하나만 가질 수 없습니다. 한 분기에서 경고가 닫혀 있으면 아이콘 색이 변경되지 않습니다.

  ![추적 이슈의 호버 카드](/assets/images/help/repository/code-scanning-tracking-issue-hovercard.png)

이슈에서 해당 작업 목록 항목의 확인란 상태(선택/선택 취소)를 변경하면 추적된 경고의 상태가 변경되지 않습니다.

## 코드 검사 경고에서 추적 이슈 만들기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %} {% ifversion fpt or ghes or ghae %} {% data reusables.code-scanning.explore-alert %}
1. 필요에 따라 추적할 경고를 찾으려면 자유 텍스트 검색 또는 드롭다운 메뉴를 사용하여 경고를 필터링하고 찾을 수 있습니다. 자세한 내용은 “[리포지토리에 대한 코드 검사 경고 관리](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository#filtering-code-scanning-alerts)를 참조하세요.
{% endif %}
1. 페이지 위쪽의 오른쪽에서 **이슈 만들기** 를 클릭합니다. 
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![ 코드 검색 경고에 대한 추적 이슈 만들기](/assets/images/help/repository/code-scanning-create-issue-for-alert.png) {% else %} ![코드 검사 경고에 대한 추적 이슈 만들기](/assets/images/enterprise/3.4/repository/code-scanning-create-issue-for-alert.png) {% endif %} {% data variables.product.prodname_dotcom %}에서는 경고를 추적하는 이슈를 자동으로 만들고 경고를 작업 목록 항목으로 추가합니다.
   {% data variables.product.prodname_dotcom %}은 이슈를 미리 채웁니다.
   - 제목에는 {% data variables.product.prodname_code_scanning %} 경고의 이름이 포함되어 있습니다.
   - 본문에는 {% data variables.product.prodname_code_scanning %} 경고에 대한 전체 URL이 있는 작업 목록 항목이 포함되어 있습니다. 
2. 필요에 따라 이슈의 제목과 본문을 편집합니다.
   {% warning %}

    **경고:** 보안 정보를 노출할 수 있으므로 이슈의 제목을 편집할 수 있습니다. 이슈의 본문을 편집할 수도 있지만 작업 목록 항목을 편집하지 않으면 이슈가 더 이상 경고를 추적하지 않습니다.
   {% endwarning %}

   ![코드 검사 경고에 대한 새 추적 이슈](/assets/images/help/repository/code-scanning-new-tracking-issue.png)
3. **새로운 이슈 제출** 을 클릭합니다.
