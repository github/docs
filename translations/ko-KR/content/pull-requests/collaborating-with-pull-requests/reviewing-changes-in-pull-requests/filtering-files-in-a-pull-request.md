---
title: 끌어오기 요청에서 파일 필터링
intro: '대규모 끌어오기 요청의 변경 내용을 빠르게 검토할 수 있도록 변경된 파일을 필터링하거나{% ifversion pr-tree-view %} 파일 트리를 사용하여 파일을 탐색할 수 있습니다{% endif %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter files
ms.openlocfilehash: 1ca50334e4329d40ee164cd01523abc69e127ab3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884175'
---
`.html` 또는 `.js`와 같은 파일 확장 형식, 확장 부족, 코드 소유권 또는 dot 파일별로 끌어오기 요청의 파일을 필터링할 수 있습니다.{% ifversion pr-tree-view %} 또한 파일 트리를 사용하여 파일 경로별로 필터링하거나, 파일 사이를 탐색하거나, 변경된 파일의 상위 수준 보기를 확인할 수 있습니다.{% endif %}

## 파일 필터 드롭다운 사용

{% tip %}

**팁:** 끌어오기 요청 Diff 보기를 간소화하기 위해 파일 필터 드롭다운 메뉴에서 끌어오기 요청 Diff에서 이미 본 삭제된 파일이나 파일을 일시적으로 숨길 수도 있습니다.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. 끌어오기 요청 목록에서 필터링하려는 끌어오기 요청을 클릭합니다.
{% data reusables.repositories.changed-files %}
4. 파일 필터 드롭다운 메뉴를 사용하고 원하는 필터를 선택하거나 선택 취소하거나 클릭합니다.
  ![끌어오기 요청 Diff 위의 파일 필터 옵션](/assets/images/help/pull_requests/file-filter-option.png)
5. 선택적으로 필터 선택을 지우려면 **변경된 파일** 탭에서 **삭제** 를 클릭합니다.
  ![파일 필터 선택 취소](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## 파일 트리 사용

{% data reusables.repositories.sidebar-pr %}
1. 끌어오기 요청 목록에서 필터링하려는 끌어오기 요청을 클릭합니다.
{% data reusables.repositories.changed-files %}

1. 해당 파일의 Diff를 보려면 파일 트리에서 파일을 클릭합니다. 파일 트리가 숨겨져 있으면 {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %}을 클릭하여 파일 트리를 표시합니다.

   {% note %}

   **참고**: 화면 너비가 너무 좁거나 끌어오기 요청에 파일이 하나만 포함되어 있으면 파일 트리가 표시되지 않습니다.

   {% endnote %}
   
   ![변경된 파일 필터링 검색 상자 및 강조된 파일 트리의 스크린샷](/assets/images/help/repository/file-tree.png)
1. 파일 경로를 기준으로 필터링하려면 **변경된 파일 필터링** 검색 상자에 파일 경로의 일부 또는 전체를 입력합니다. 또는 파일 필터 드롭다운을 사용합니다. 자세한 내용은 “[파일 필터 드롭다운 사용](#using-the-file-filter-dropdown)”을 참조하세요.

{% endif %}

## 추가 참고 자료

- “[끌어오기 요청의 분기 비교 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)”
- “[끌어오기 요청에서 변경된 메서드 및 함수 찾기](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)
