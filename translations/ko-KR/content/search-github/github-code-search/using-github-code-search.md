---
title: GitHub 코드 검색 사용(베타)
intro: '업그레이드된 검색 인터페이스에서 제안, 완료 및 저장된 검색을 사용하여 {% data variables.product.prodname_dotcom_the_website %}에서 원하는 항목을 빠르게 찾을 수 있습니다.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 7578dd05f251b1df23fbd64c63d04e533f7fa9ef
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160202'
---
{% note %}

**참고:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## 새 코드 검색 사용 정보(베타)

새 코드 검색 베타에 액세스하면 GitHub는 소유한 모든 리포지토리와 멤버인 조직의 모든 리포지토리(퍼블릭, 프라이빗 또는 내부)를 인덱싱합니다. 즉, 이미 인덱싱된 {% data variables.product.prodname_dotcom_the_website %}의 퍼블릭 리포지토리 외에 모든 리포지토리에서 검색할 수 있습니다. {% data variables.product.prodname_dotcom_the_website %}에서 코드를 볼 수 있는 권한이 있는 사용자만 검색 결과에서 코드를 볼 수 있습니다. 포크는 다른 리포지토리와 동일한 방식으로 인덱싱되고 검색할 수 있습니다.

모든 코드가 인덱싱되는 것은 아니며 현재 리포지토리의 기본 분기만 검색할 수 있습니다. 알려진 제한 사항에 대한 자세한 내용은 "[GitHub 코드 검색 정보(베타)](/search-github/github-code-search/about-github-code-search#limitations)"를 참조하세요.

새 코드 검색 베타는 새 코드 뷰 베타 내에 통합됩니다. {% data reusables.search.code-view-link %}

## 검색 창 사용

새 코드 검색 엔진 위에 베타에는 {% data variables.product.prodname_dotcom_the_website %}에 업그레이드된 검색 인터페이스가 포함되어 있습니다. 제안, 완료 및 저장된 검색을 사용하면 쿼리를 완전히 입력하거나 검색 결과 페이지를 볼 필요 없이 원하는 항목을 빠르게 찾을 수 있습니다.

새 코드 검색(베타)의 검색 구문에 대한 자세한 내용은 "[GitHub 코드 검색(베타) 구문 이해](/search-github/github-code-search/understanding-github-code-search-syntax)"를 참조하세요.

{% data reusables.search.non-code-search-explanation %}

1. {% data variables.product.prodname_dotcom_the_website %}의 위쪽 탐색 영역에서 검색 창을 클릭합니다.
1. 검색 창 아래에는 최근 검색 및 제안된 리포지토리, 팀 및 액세스 권한이 있는 프로젝트를 포함하여 범주별로 구성된 제안 목록이 표시됩니다. 만든 저장된 검색 목록을 볼 수도 있습니다. 저장된 검색에 대한 자세한 내용은 "[저장된 검색 만들기 및 관리"를](#creating-and-managing-saved-searches) 참조하세요.

    ![제안 및 저장된 검색이 있는 검색 창](/assets/images/help/search/code-search-beta-search-bar.png)

    특정 제안을 클릭하면 해당 제안(예: 리포지토리 또는 프로젝트 페이지)에 대한 페이지로 직접 이동됩니다. 최근 검색 또는 저장된 검색을 클릭하면 검색 유형에 따라 검색 쿼리가 검색 창에 표시되거나 검색어의 검색 결과 페이지로 이동합니다.

1. 검색 쿼리 입력을 시작하면 쿼리와 일치하는 완료 및 제안 목록이 표시됩니다. 제안을 클릭하여 특정 위치로 이동할 수 있습니다. 더 많은 한정자를 입력하면 직접 이동할 수 있는 코드 파일과 같은 보다 구체적인 제안이 표시됩니다.
   
   ![쿼리 및 코드 제안이 있는 검색 창](/assets/images/help/search/code-search-beta-search-bar-code-suggestions.png)

1.  쿼리를 입력한 후 Enter 키를 눌러 전체 검색 결과 보기로 이동하여 각 일치 항목과 필터 적용을 위한 시각적 인터페이스를 볼 수 있습니다. 자세한 내용은 "[검색 결과 보기 사용"을 참조하세요](#using-the-search-results-view).

## 저장된 검색 만들기 및 관리

1. {% data variables.product.prodname_dotcom_the_website %}의 위쪽 탐색 영역에서 검색 창을 클릭하고 검색 쿼리(또는 모든 문자)를 입력하기 시작합니다.
1. 이제 검색 창 아래에 "저장된 검색" 섹션이 표시됩니다. {% octicon "plus-circle" aria-label="The plus-circle icon" %} **저장된 검색 만들기** 를 클릭합니다.

    ![검색 창의 "저장된 검색 만들기" 단추](/assets/images/help/search/code-search-beta-create-saved-search.png)

1. 팝업 창에서 쿼리에 대해 원하는 이름과 저장하려는 쿼리를 입력합니다. **저장된 검색 만들기** 를 클릭합니다.

    !["저장된 검색 만들기" 창](/assets/images/help/search/code-search-beta-create-saved-search-window.png)

1. 검색 창을 다시 클릭하면 이제 검색 창 아래의 "저장된 검색" 섹션에서 저장된 검색을 볼 수 있습니다. 저장된 검색 항목을 클릭하면 검색 창에 쿼리가 추가되고 그에 따라 제안이 필터링됩니다.

  ![검색 창에서 저장된 검색 사용](/assets/images/help/search/code-search-beta-saved-search-in-search-bar.png)

    - 저장된 검색을 편집하려면 "저장된 검색" 섹션에서 저장된 검색 오른쪽에 있는 {% octicon "pencil" aria-label="The pencil icon" %}을 클릭합니다. 
    - 저장된 검색을 삭제하려면 저장된 검색 오른쪽에 있는 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.

  ![저장된 검색을 편집하거나 삭제하는 단추](/assets/images/help/search/code-search-beta-edit-or-delete-saved-search.png)

## 검색 결과 보기 사용

GitHub의 클래식 검색에 대한 검색 결과 보기가 이미 있으며 코드를 제외한 대부분의 검색 유형에 대한 기능은 동일합니다. 새 코드 검색 베타를 사용하도록 설정하면 검색 결과 페이지에 다시 디자인된 UI가 있으며 경로 및 기호 필터와 같은 새 코드 검색 엔진에서 지원되는 필터가 포함됩니다.

시각적 인터페이스를 사용하여 검색 쿼리를 생성하고 결과를 보고 필터링하려면 {% data variables.search.search_page_url %} 또는 {% data variables.search.advanced_url %}을(를) 사용할 수 있습니다. 검색 창에 검색 쿼리를 입력한 후 Enter 키를 누르면 검색 결과 보기로 이동됩니다.

검색 결과 보기에서 코드, 문제, 끌어오기 요청, 리포지토리 등을 비롯한 다양한 유형의 검색 결과를 탐색할 수 있습니다. 필터를 보고 사용할 수도 있습니다.

![검색 결과 보기](/assets/images/help/search/code-search-beta-results-view.png)
