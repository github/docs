---
title: 리포지토리에 대한 코드 검사 경고 관리
shortTitle: Manage alerts
intro: '보안 관점에서 프로젝트 코드의 잠재적인 취약성 또는 오류에 대한 {% ifversion delete-code-scanning-alerts %}경고를 표시, 수정, 해제 또는 삭제{% else %}경고를 표시, 수정 또는 해제{% endif %}할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permission to a repository you can manage {% data variables.product.prodname_code_scanning %} alerts for that repository.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/managing-alerts-from-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-alerts-from-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/managing-code-scanning-alerts-for-your-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Alerts
  - Repositories
ms.openlocfilehash: b672af79096c1f52a0670cd747ef159f071a3d07
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147693329'
---
{% data reusables.code-scanning.beta %}

## 리포지토리에 대한 경고 보기

리포지토리에 대한 읽기 권한이 있는 사람은 끌어오기 요청에 대한 {% data variables.product.prodname_code_scanning %} 주석을 볼 수 있습니다. 자세한 내용은 “[끌어오기 요청에서 {% data variables.product.prodname_code_scanning %} 경고 심사](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)”를 참조하세요.

**보안** 탭에서 리포지토리에 대한 모든 경고의 요약 정보를 보려면 쓰기 권한이 필요합니다.

기본적으로 코드 검사 경고 페이지는 리포지토리의 기본 분기에 대한 경고만 표시하도록 필터링됩니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. 필요에 따라 무료 텍스트 검색 상자 또는 드롭다운 메뉴를 사용하여 경고를 필터링합니다. 예를 들어 경고를 식별하는 데 사용된 도구로 필터링할 수 있습니다.
   ![도구별 필터링](/assets/images/help/repository/code-scanning-filter-by-tool.png) {% data reusables.code-scanning.explore-alert %} ![경고 요약](/assets/images/help/repository/code-scanning-click-alert.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} ![경고의 "영향을 받는 분기" 섹션](/assets/images/help/repository/code-scanning-affected-branches.png){% endif %}
1. 경고에서 데이터 흐름 문제를 강조하는 경우 필요에 따라 **경로 표시** 를 클릭하여 데이터 원본부터 데이터 원본이 사용된 싱크까지의 경로를 표시합니다.
  {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![경고의 "경로 표시" 링크](/assets/images/help/repository/code-scanning-show-paths.png) {% else %} ![경고의 "경로 표시" 링크](/assets/images/enterprise/3.4/repository/code-scanning-show-paths.png) {% endif %}
2. {% data variables.product.prodname_codeql %} 분석의 경고에는 문제에 대한 설명이 포함됩니다. 코드를 수정하는 방법에 대한 지침을 보려면 **자세히 표시** 를 클릭합니다.
   ![경고 세부 정보](/assets/images/help/repository/code-scanning-alert-details.png)

자세한 내용은 "[{% data variables.product.prodname_code_scanning %} 경고 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts)"를 참조하세요.

{% note %}

**참고:** {% data variables.product.prodname_codeql %}을 사용한 {% data variables.product.prodname_code_scanning %} 분석의 경우 리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 목록의 맨 위에 있는 헤더에서 최신 실행에 대한 정보를 볼 수 있습니다. 

예를 들어 마지막 검색이 실행된 시간, 리포지토리의 총 코드 줄 수와 비교 분석한 코드 줄 수 및 생성된 총 경고 수를 확인할 수 있습니다.
  ![UI 배너](/assets/images/help/repository/code-scanning-ui-banner.png)

{% endnote %}

## {% data variables.product.prodname_code_scanning %} 경고 필터링

{% data variables.product.prodname_code_scanning %} 경고 보기에 표시된 경고를 필터링할 수 있습니다. 수많은 경고가 있을 때 특정 유형의 경고에 집중할 수 있는 유용한 기능입니다. 미리 정의된 필터와 표시되는 경고 목록을 구체화하는 데 사용할 수 있는 다양한 키워드가 있습니다. 

- 미리 정의된 필터를 사용하려면 **필터** 또는 경고 목록의 헤더에 표시된 필터를 클릭하고, 드롭다운 목록에서 필터를 선택합니다.
  {% ifversion fpt or ghes or ghec %}![미리 정의된 필터](/assets/images/help/repository/code-scanning-predefined-filters.png) {% else %}![미리 정의된 필터](/assets/images/enterprise/3.0/code-scanning-predefined-filters.png){% endif %}
- 키워드를 사용하려면 필터 텍스트 상자에 직접 입력하거나 다음을 수행합니다.
  1. 필터 텍스트 상자를 클릭하여 사용 가능한 필터 키워드 목록을 모두 표시합니다.
  2. 사용할 키워드를 클릭하고 드롭다운 목록에서 값을 선택합니다.
  ![키워드 필터 목록](/assets/images/help/repository/code-scanning-filter-keywords.png)

키워드 필터를 사용하면 결과가 있는 값만 드롭다운 목록에 표시된다는 이점이 있습니다. 따라서 결과가 없는 필터를 설정하는 일을 피할 수 있습니다.

여러 필터를 입력하면 이 _모든_ 필터와 일치하는 경고가 보기에 표시됩니다. 예를 들어 `is:closed severity:high branch:main`은 `main` 분기에 있는 종결된 높은 심각도 경고만 표시합니다. refs(`ref`, `branch` 및 `pr`)와 관련된 필터는 예외입니다. `is:open branch:main branch:next`는 `main` 분기와 `next` 분기의 열린 경고를 표시합니다.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}

`tag` 필터에 `-`를 접두사로 사용하면 해당 태그가 있는 결과를 제외할 수 있습니다. 예를 들어 `-tag:style`은 `style` 태그가 없는 경고만 표시하고{% ifversion codeql-ml-queries %} `-tag:experimental`는 모든 experimental 경고를 생략합니다. 자세한 내용은 "[{% data variables.product.prodname_code_scanning %} 경고 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)"를 참조하세요.{% else %}.{% endif %}

{% endif %}

### 결과를 애플리케이션 코드로 제한

"애플리케이션 코드의 경고만" 필터 또는 `autofilter:true` 키워드와 값을 사용하여 결과를 애플리케이션 코드의 경고로 제한할 수 있습니다. 애플리케이션 코드가 아닌 코드 유형에 대한 자세한 내용은 위의 "[애플리케이션 코드에 없는 경고에 대한 레이블 정보](#about-labels-for-alerts-that-are-not-found-in-application-code)"를 참조하세요.

{% ifversion fpt or ghes or ghec %}

## {% data variables.product.prodname_code_scanning %} 경고 검색

경고 목록을 검색할 수 있습니다. 이 기능은 리포지토리에 수많은 경고가 있거나 경고의 정확한 이름을 모르는 경우에 유용합니다. {% data variables.product.product_name %}은 다음 위치에서 무료 텍스트 검색을 수행합니다.
- 경고의 이름입니다.
- 경고 세부 정보(**자세히 표시** 축소 가능 섹션에서 기본적으로 숨겨지는 정보도 포함됨) {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![검색에 사용되는 경고 정보](/assets/images/help/repository/code-scanning-free-text-search-areas.png) {% else %} ![검색에 사용되는 경고 정보](/assets/images/enterprise/3.4/repository/code-scanning-free-text-search-areas.png) {% endif %}

| 지원되는 검색 | 구문 예제 | 결과 |
| ---- | ---- | ---- |
| 단일 단어 검색 | `injection` | `injection`이라는 단어가 포함된 모든 경고를 반환 |
| 여러 단어 검색 | `sql injection` | `sql` 또는 `injection`이라는 단어가 포함된 모든 경고를 반환 |
| 정확하게 일치 검색</br>(큰따옴표 사용) |  `"sql injection"` | `sql injection`과 정확하게 일치하는 구가 포함된 모든 경고를 반환 |
| OR 검색 | `sql OR injection` | `sql` 또는 `injection`이라는 단어가 포함된 모든 경고를 반환 |
| AND 검색 | `sql AND injection` | `sql` 및 `injection`이라는 단어가 모두 포함된 경고를 반환 | 

{% tip %}

**팁:** 
- 여러 단어 검색은 OR 검색과 동일합니다.
- AND 검색은 경고 이름 또는 세부 정보에서 _위치_ 와 순서에 상관없이 검색어가 포함된 결과를 반환합니다.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}
1. **필터** 드롭다운 메뉴의 오른쪽에 있는 무료 텍스트 검색 상자에 검색할 키워드를 입력합니다.
  ![무료 텍스트 검색 상자](/assets/images/help/repository/code-scanning-search-alerts.png)
2. <kbd>return</kbd>을 누릅니다. 경고 목록에는 검색 조건과 일치하는 열린 {% data variables.product.prodname_code_scanning %} 경고가 포함됩니다.

{% endif %}

{% ifversion code-scanning-task-lists %}
## 이슈에서 {% data variables.product.prodname_code_scanning %} 경고 추적

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} {% data reusables.code-scanning.github-issues-integration %} {% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## 경고 해결

리포지토리에 대한 쓰기 권한이 있는 모든 사용자는 코드 수정을 커밋하여 경고를 해결할 수 있습니다. 리포지토리에서 끌어오기 요청을 실행하도록 예약된 {% data variables.product.prodname_code_scanning %}가 있는 경우 수정을 통해 끌어오기 요청을 발생시키는 것이 가장 좋습니다. 이렇게 하면 변경 내용의 {% data variables.product.prodname_code_scanning %} 분석이 트리거되고 수정으로 인해 새로운 문제가 발생하지 않는지 테스트가 수행됩니다. 자세한 내용은 "[{% data variables.product.prodname_code_scanning %} 구성](/code-security/secure-coding/configuring-code-scanning)" 및 "[끌어오기 요청에서 {% data variables.product.prodname_code_scanning %} 경고 심사](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"를 참조하세요.

리포지토리에 대한 쓰기 권한이 있는 경우 경고 요약 정보를 살펴보고 **종결됨** 을 클릭하여 해결된 경고를 볼 수 있습니다. 자세한 내용은 "[리포지토리에 대한 경고 보기](#viewing-the-alerts-for-a-repository)"를 참조하세요. "종결됨" 목록에는 해결된 경고와 사용자가 해제한 경고가 표시됩니다.

무료 텍스트 검색 또는 필터를 사용하여 경고 하위 집합을 표시한 다음, 일치하는 모든 경고를 종결된 것으로 표시할 수 있습니다. 

경고는 한 분기에서 해결할 수 있지만 다른 분기에서는 해결할 수 없습니다. 경고 요약에서 "분기" 필터를 사용하여 특정 분기에서 경고가 해결되었는지 확인할 수 있습니다.

![분기별 경고 필터링](/assets/images/help/repository/code-scanning-branch-filter.png)

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.filter-non-default-branches %} {% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% note %}

**참고:** 여러 구성을 사용하여 코드 검사를 실행할 때 경고의 분석 원본이 여러 개 있는 경우가 가끔 있습니다. 모든 구성을 정기적으로 실행하지 않는 한, 한 분석 원본에서 해결되었지만 다른 분석 원본에서는 해결되지 않은 경고가 표시 될 수 있습니다. 자세한 내용은 "[분석 원본 정보](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-analysis-origins)"를 참조하세요.

{% endnote %} {% endif %}
## 경고 해제 {% ifversion delete-code-scanning-alerts %}또는 삭제{% endif %}

경고를 종결하는 두 가지 방법이 있습니다. 코드에서 문제를 해결하거나 경고를 해제할 수 있습니다. {% ifversion delete-code-scanning-alerts %}또는 리포지토리에 대한 관리자 권한이 있는 경우 경고를 삭제할 수 있습니다. 경고 삭제는 {% data variables.product.prodname_code_scanning %} 도구를 설정했는데 이후에 제거하기로 결정한 경우 또는 계속 사용할 쿼리보다 큰 쿼리 세트로 {% data variables.product.prodname_codeql %} 분석을 구성했고 이후에 도구에서 일부 쿼리를 제거한 경우에 유용합니다. 두 경우 모두 경고를 삭제하면 {% data variables.product.prodname_code_scanning %} 결과를 정리할 수 있습니다. **보안 탭** 의 요약 목록에서 경고를 삭제할 수 있습니다.{% endif %}

경고를 해제하는 것은 수정할 필요가 없다고 생각되는 경고를 종료하는 방법입니다. {% data reusables.code-scanning.close-alert-examples %} 코드의 {% data variables.product.prodname_code_scanning %} 주석 또는 **보안** 탭의 요약 목록에서 경고를 해제할 수 있습니다.

경고를 해제하는 경우:

- 모든 분기에서 경고가 해제됩니다.
- 경고가 프로젝트에 대한 현재 경고 수에서 제거됩니다.
- 경고가 경고 요약의 "종결됨" 목록으로 이동됩니다. 필요하다면 이 목록에서 경고를 다시 열 수 있습니다.
- 경고를 닫은 이유가 기록됩니다.{% ifversion comment-dismissed-code-scanning-alert %} 
- 필요에 따라 해제에 대한 주석을 달아 경고 해제의 컨텍스트를 기록할 수 있습니다. {% endif %}
- 다음에 {% data variables.product.prodname_code_scanning %}가 실행될 때 동일한 코드가 경고를 생성하지 않습니다.

{% ifversion delete-code-scanning-alerts %}경고를 삭제하는 경우:

- 모든 분기에서 경고가 삭제됩니다.
- 경고가 프로젝트에 대한 현재 경고 수에서 제거됩니다.
- 경고 요약의 "종결됨" 목록에 경고가 추가되지 _않습니다_.
- 경고를 생성한 코드가 동일하게 유지되고 동일한 {% data variables.product.prodname_code_scanning %} 도구가 구성 변경 없이 다시 실행되면 경고가 분석 결과에 다시 표시됩니다.{% endif %}

경고를 해제 {% ifversion delete-code-scanning-alerts %}또는 삭제{% endif %}하려면 다음을 수행합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-code-scanning-alerts %}{% ifversion delete-code-scanning-alerts %}
1. 리포지토리에 대한 관리자 권한이 있고 이 {% data variables.product.prodname_code_scanning %} 도구에 대한 경고를 삭제하려면 확인란의 일부 또는 전체를 선택하고 **삭제** 를 클릭합니다.

   ![경고 삭제](/assets/images/help/repository/code-scanning-delete-alerts.png)

   필요에 따라 자유 텍스트 검색 또는 필터를 사용하여 경고 하위 집합을 표시한 다음, 일치하는 모든 경고를 한 번에 삭제할 수 있습니다. 예를 들어 {% data variables.product.prodname_codeql %} 분석에서 쿼리를 제거한 경우 "규칙" 필터를 사용하여 해당 쿼리에 대한 경고만 나열한 다음, 모든 경고를 선택하여 삭제할 수 있습니다.

{% ifversion ghes or ghae %} ![규칙으로 경고 필터링](/assets/images/help/repository/code-scanning-filter-by-rule.png) {% else %} ![규칙으로 경고 필터링](/assets/images/enterprise/3.1/help/repository/code-scanning-filter-by-rule.png) {% endif %}{% endif %}
1. 경고를 해제하려면 올바른 해제 이유를 선택할 수 있도록 먼저 경고를 살펴보는 것이 중요합니다. 살펴볼 경고를 클릭합니다.
![요약 목록에서 경고 열기](/assets/images/help/repository/code-scanning-click-alert.png) {%- ifversion comment-dismissed-code-scanning-alert %}
1. 경고를 검토한 다음 **경고 해제** 를 클릭하고, 경고를 종결하는 이유를 선택하거나 입력합니다. 
  ![해제 이유를 선택하기 위한 드롭다운이 강조 표시된 코드 검사 경고의 스크린샷](/assets/images/help/repository/code-scanning-alert-dropdown-reason.png) {%- else %}
1. 경고를 검토한 다음, **해제** 를 클릭하고 경고를 종결하는 이유를 선택합니다.
  ![경고를 해제하는 이유 선택](/assets/images/help/repository/code-scanning-alert-close-drop-down.png) {%- endif %} {% data reusables.code-scanning.choose-alert-dismissal-reason %}

   {% data reusables.code-scanning.false-positive-fix-codeql %}

### 여러 경고를 한꺼번에 해제

프로젝트에 동일한 이유로 해제하려는 여러 경고가 있는 경우 경고 요약에서 경고를 대량으로 해제할 수 있습니다. 목록을 필터링한 다음, 일치하는 모든 경고를 해제하는 것이 일반적입니다. 예를 들어 특정 CWE(Common Weakness Enumeration) 취약성에 대한 태그가 지정된 프로젝트의 모든 현재 경고를 해제할 수 있습니다.

## 추가 참고 자료

- "[끌어오기 요청에서 {% data variables.product.prodname_code_scanning %} 경고 심사](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)"
- "[리포지토리에 대해 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)"
- "[{% data variables.product.prodname_code_scanning %}과의 통합 정보](/code-security/secure-coding/about-integration-with-code-scanning)"
