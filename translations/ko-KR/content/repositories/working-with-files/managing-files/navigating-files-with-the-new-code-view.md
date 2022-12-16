---
title: 새 코드 뷰를 사용하여 파일 탐색(베타)
intro: 새 코드 뷰(베타)를 사용하면 쉽게 탐색할 수 있는 파일 트리 및 통합 기호 검색을 사용하여 컨텍스트에서 코드를 볼 수 있습니다.
allowTitleToDifferFromFilename: true
versions:
  feature: file-tree-view
topics:
  - Repositories
shortTitle: New code view (beta)
ms.openlocfilehash: 0c0fe588c92f67c92d7f3ffaa09716da39ac4551
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172189'
---
{% note %}

**참고**: {% data reusables.search.code-search-code-view-beta-note %} 

{% data reusables.search.code-search-link %}

{% endnote %}

## 새 코드 뷰 정보(베타)
새 코드 뷰 베타는 파일 트리 뷰를 사용하여 탐색을 개선하고, 파일 편집을 간소화하고, 기호 검색 및 탐색을 위한 기호 창을 도입하고, 파일 컨텍스트를 유지하기 위해 비난 보기를 업데이트합니다. 새 코드 뷰는 {% data variables.product.prodname_dotcom_the_website %}의 제한된 퍼블릭 베타에서 새 코드 검색 엔진 및 검색 인터페이스와 통합됩니다. {% data reusables.search.code-search-link %}

새 코드 검색과 함께 새 코드 뷰(베타)에 액세스하려면 [대기 목록에](https://github.com/features/code-search-code-view/signup) 등록할 수 있습니다.

새 코드 뷰 베타에 대한 피드백을 제공하려면 [토론 포럼](https://github.com/orgs/community/discussions/categories/repositories)을 참조하세요.

## 새 코드 검색 및 코드 뷰 사용 및 사용 안 함(베타)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## 파일 트리 뷰 사용
새 파일 트리 뷰는 쉽게 탐색할 수 있는 트리 내에 리포지토리의 디렉터리와 파일을 표시하는 패널입니다. 디렉터리와 파일 간에 빠르게 이동하고 보는 각 항목의 컨텍스트를 이해할 수 있습니다.

1. 리포지토리를 선택한 다음, 해당 리포지토리 내의 디렉터리 또는 파일을 클릭하여 파일 트리 뷰를 엽니다.

  ![파일 트리 뷰에 중점을 둔 "github/docs" 리포지토리의 스크린샷](/assets/images/help/repository/file-tree-view-directory-selected.png)

1. 특정 디렉터리 또는 파일을 검색하려면 {% octicon "filter" aria-label="The filter icon" %} 파일 검색 창 **으로 이동** 한 다음 디렉터리 또는 파일 이름을 입력하고 결과에서 디렉터리 또는 파일을 선택합니다. 각 검색 결과 아래에 있는 디렉터리 또는 파일의 파일 경로를 볼 수 있습니다.

  !["파일로 이동" 검색 창에 중점을 둔 파일 트리 보기의 스크린샷](/assets/images/help/repository/file-tree-view-jump-to-file.png)

     - {% data variables.product.prodname_dotcom %} 검색 창을 사용하여 리포지토리 내에서 검색하려면 {% octicon "search" aria-label="The search icon" %}을 클릭합니다.

        ![검색 아이콘이 강조 표시된 파일 트리 보기의 스크린샷](/assets/images/help/repository/file-tree-view-search-icon.png)

1. 분기 간에 전환하려면 {% octicon "git-branch" aria-label="The branch icon" %} 분기 드롭다운 메뉴를 선택한 다음 결과에서 원하는 분기를 클릭합니다. 리포지토리에 대한 모든 분기를 보려면 **모든 분기 보기를** 클릭합니다.

  ![분기 드롭다운 메뉴의 "분기" 탭에 강조 표시된 파일 트리 보기의 스크린샷](/assets/images/help/repository/file-tree-view-branch-dropdown.png)

1. 태그 간에 전환하려면 {% octicon "git-branch" aria-label="The branch icon" %} 분기 드롭다운 메뉴를 선택하고 **태그** 탭을 클릭한 다음 결과에서 원하는 태그를 클릭합니다. 리포지토리에 대한 모든 태그를 보려면 **모든 태그 보기를** 클릭합니다.

  ![분기 드롭다운 메뉴의 "태그" 탭에 강조 표시된 파일 트리 보기의 스크린샷](/assets/images/help/repository/file-tree-view-branch-dropdown-tags.png)

## 파일 작업
새 코드 뷰에는 파일 작업 방식에 대한 업데이트도 포함되어 있습니다. 파일 편집, 파일 만들기 또는 업로드, 파일 또는 디렉터리 삭제와 같은 기존 기능이 간소화되었습니다. 이제 github.dev 또는 {% data variables.product.prodname_desktop %}에서 파일을 편집하고 파일 내 통합 함수를 빠르게 편집할 수 있습니다. 

1. 리포지토리를 선택한 다음, 해당 리포지토리 내의 파일을 클릭하여 새 코드 보기를 엽니다.

  ![파일 트리 뷰에서 선택한 파일에 중점을 둔 "github/docs" 리포지토리의 스크린샷](/assets/images/help/repository/file-tree-view-file-selected.png)

1. 통합 파일 편집기에서 파일을 편집하려면 {% octicon "pencil" aria-label="The pencil icon" %}을 클릭합니다.

  ![편집 아이콘이 강조 표시된 새 코드 보기의 파일 편집기 스크린샷](/assets/images/help/repository/code-view-edit-icon.png)

1. github.dev {% data variables.codespaces.serverless %} 또는 {% data variables.product.prodname_desktop %}에서 파일을 편집하려면 {% octicon "pencil" aria-label="The pencil icon" %} 옆에 있는 {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %}을 선택한 다음 **github.dev** 또는 **{% data variables.product.prodname_desktop %}** 를 클릭합니다.

  {% note %}

  **참고:** github.dev {% data variables.codespaces.serverless %}는 현재 베타 미리 보기로 제공됩니다. [토론에서](https://github.com/community/community/discussions/categories/general) 피드백을 제공할 수 있습니다.

  {% endnote %}

  ![편집 드롭다운 메뉴에 중점을 둔 새 코드 보기의 파일 편집기 스크린샷](/assets/images/help/repository/code-view-edit-dropdown.png)

1. 파일 내에서 특정 문자를 찾으려면 **코드 단추를 클릭하여** 파일의 원시 코드를 확인합니다. 다음으로 <kbd>명령</kbd>+<kbd>F</kbd> (Mac) 또는 <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux)를 누르고 찾으려는 문자를 입력합니다. <kbd>Return</kbd>(Mac) 또는 <kbd>Enter</kbd>(Windows/Linux)를 누르거나 {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} 및 {% octicon "chevron-up" aria-label="The ups-facing chevron icon" %}을 클릭하여 결과 간을 탐색할 수 있습니다.

  {% note %}

  **참고:** 브라우저의 기본 find 함수를 사용하려면 <kbd>명령</kbd>+<kbd>F</kbd> (Mac) 또는 <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux)를 두 번 누릅니다. 브라우저의 기본 찾기 함수는 큰 파일 전체를 검색할 수 없지만 새 코드 보기에 통합된 검색은 검색됩니다.

  {% endnote %}

  ![새 코드 보기의 "파일에서 찾기" 함수 스크린샷](/assets/images/help/repository/code-view-find-in-file.png)

1. 특정 디렉터리에 새 파일을 추가하려면 해당 디렉터리를 클릭한 다음 {% octicon "plus" aria-label="The plus sign icon" %} **새 파일을** 클릭하거나 파일 트리 뷰에서 {% octicon "plus" aria-label="The plus sign icon" %}을 클릭합니다.

  ![더하기 아이콘이 강조 표시된 파일 트리 뷰의 스크린샷](/assets/images/help/repository/file-tree-view-new-file-icon.png)

1. 디렉터리 또는 파일을 삭제하려면 디렉터리 또는 파일로 이동하고 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 을 클릭합니다. 그런 다음 **디렉터리 삭제** 또는 **파일 삭제** 를 클릭합니다.

  !["디렉터리 삭제" 옵션에 중점을 둔 새 코드 보기의 옵션 메뉴 스크린샷](/assets/images/help/repository/code-view-delete-directory.png)

1. 파일을 업로드하려면 선택한 디렉터리로 이동한 다음 {% octicon "upload" aria-label="The upload icon" %} **파일을 업로드하거나 파일을** 브라우저로 끌어서 놓습니다.

  ![새 코드 보기의 "파일 업로드" 단추 스크린샷](/assets/images/help/repository/code-view-upload-files.png)

## 기호 창 사용
이제 기호 창을 사용하여 코드의 함수 또는 클래스와 같은 기호를 빠르게 보고 탐색할 수 있습니다. 단일 파일, 리포지토리의 모든 파일 또는 {% data variables.product.prodname_dotcom %}의 모든 퍼블릭 리포지토리에서 기호를 검색할 수 있습니다.

기호 검색은 새 코드 검색(베타)의 기능입니다. 자세한 내용은 "[GitHub 코드 검색(베타) 구문 이해](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)"를 참조하세요.

1. 리포지토리를 선택한 다음 기호가 포함된 파일로 이동합니다.
2. 기호 창을 표시하려면 {% octicon "code-square" aria-label="The code square icon" %}을 클릭합니다.

  ![새 코드 보기의 기호 창 아이콘 스크린샷](/assets/images/help/repository/code-view-symbols-pane-icon.png)

  또는 파일에서 적격 기호를 클릭하여 기호 창을 열 수 있습니다. 클릭할 수 있는 기호를 마우스로 가리키면 노란색으로 강조 표시됩니다.

  ![클릭 가능한 기호에 중점을 둔 새 코드 뷰의 파일 스크린샷](/assets/images/help/repository/code-view-clickable-symbol.png)

1. 기호 창 또는 파일 자체 내에서 찾으려는 기호를 클릭합니다.

  ![자동 채워진 기호에 중점을 둔 기호 창의 스크린샷](/assets/images/help/repository/code-view-symbols-pane-symbol.png)

   - 리포지토리 전체에서 기호를 검색하려면 **이 리포지토리에서 이 기호 검색** 을 클릭합니다. {% data variables.product.prodname_dotcom %}의 모든 리포지토리에서 기호를 검색하려면 **모든 리포지토리** 를 클릭합니다.

      ![기호 검색 범위를 넓히는 옵션에 중점을 둔 기호 창의 스크린샷](/assets/images/help/repository/code-view-symbols-pane-expand-search.png)

1. 기호에 대한 참조 사이를 이동하려면 {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} 또는 {% octicon "chevron-up" aria-label="The ups facing chevron icon" %}을 클릭합니다.

  ![검색 탐색 펼침 단추가 강조 표시된 기호 창의 스크린샷](/assets/images/help/repository/code-view-symbol-result-navigation.png)

1. 기호에 대한 특정 참조로 이동하려면 **이 파일** 의 {% octicon "chevron-down" aria-label="The downs-facing chevron icon" %} 아래에서 기호 검색 결과를 클릭합니다.

  ![기호 검색 결과에 중점을 둔 기호 창의 스크린샷](/assets/images/help/repository/code-view-symbol-search-result.png)

1. 특정 기호 검색을 종료하려면 {% octicon "arrow-left" aria-label="The left arrow icon" %} **모든 기호를** 클릭합니다.

  !["모든 기호" 단추가 강조 표시된 기호 창의 스크린샷](/assets/images/help/repository/code-view-symbols-pane-all-symbols.png)

## 비난 보기 사용
이제 비난 보기를 입력할 때 파일 컨텍스트가 손실되는 대신 새 코드 뷰를 사용하여 파일 형식에 따라 비난 보기, 원시 코드 뷰 및 파일 미리 보기 간에 빠르게 전환할 수 있습니다.

1. 리포지토리를 선택한 다음, 해당 리포지토리 내의 파일을 클릭하여 새 코드 보기를 엽니다.

  ![파일 트리 뷰에서 선택한 파일에 중점을 둔 "github/docs" 리포지토리의 스크린샷](/assets/images/help/repository/file-tree-view-file-selected.png)

1. 파일의 수정 기록을 보려면 **비난을** 클릭합니다. 이 보기는 커밋으로 구분된 파일의 코드를 사용하여 줄별 수정 기록을 제공합니다. 각 커밋에는 작성자, 커밋 설명 및 커밋 날짜가 나열됩니다.

  !["비난" 단추가 강조 표시된 새 코드 보기의 스크린샷](/assets/images/help/repository/code-view-blame-button.png)

   - 특정 커밋 전에 파일 버전을 보려면 {% octicon "versions" aria-label="The versions icon" %}을 클릭합니다.

      ![버전 아이콘이 강조 표시된 비난 보기의 커밋 스크린샷](/assets/images/help/repository/code-view-blame-hide-commit.png)

   - 특정 커밋에 대한 자세한 내용을 보려면 커밋 설명을 클릭합니다.

      ![커밋 설명에 중점을 둔 비난 보기의 커밋 스크린샷](/assets/images/help/repository/code-view-blame-commit-description.png)

1. 원시 코드 보기로 돌아가려면 **코드를** 클릭합니다.

  ![코드 보기 단추가 강조 표시된 코드 보기 도구 모음의 스크린샷](/assets/images/help/repository/code-view-button.png)

   - Markdown 파일을 보고 있는 경우 **미리 보기를** 클릭하여 Markdown 서식이 적용된 보기로 돌아갈 수도 있습니다.

      ![Markdown 미리 보기 단추가 강조 표시된 코드 보기 도구 모음의 스크린샷](/assets/images/help/repository/code-view-preview-button.png)

## 추가 정보

- "[파일을 새 위치로 이동](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)"
- "[GitHub 코드 검색 정보(베타)](/search-github/github-code-search/about-github-code-search)"
