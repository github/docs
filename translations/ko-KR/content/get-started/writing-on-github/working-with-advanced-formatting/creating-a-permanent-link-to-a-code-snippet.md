---
title: 코드 조각에 대한 고정 링크 만들기
intro: 파일 또는 끌어오기 요청의 특정 버전에서 특정 줄 또는 코드 줄 범위에 대한 영구 링크를 만들 수 있습니다.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
  - /github/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
ms.openlocfilehash: d1c363eba2a45558f3fdc9b55025309544ef677b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145068629'
---
## 코드에 연결

이 유형의 고정 링크는 원래 출처인 리포지토리에서만 코드 조각으로 렌더링됩니다. 다른 리포지토리에서 고정 링크 코드 조각은 URL로 렌더링됩니다.

![주석에 렌더링된 코드 조각](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**팁:** 전체 파일에 대한 고정 링크를 만들려면 “[파일에 대한 고정 링크 가져오기](/articles/getting-permanent-links-to-files)”를 참조하세요.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. 연결할 코드를 찾습니다.
    - 파일에서 코드에 연결하려면 해당 파일로 이동합니다.
    - 끌어오기 요청에서 코드에 연결하려면 끌어오기 요청으로 이동하고 {% octicon "diff" aria-label="The file diff icon" %} **변경된 파일** 을 클릭합니다. 그런 다음 주석에 포함할 코드가 포함된 파일을 찾아 **보기** 를 클릭합니다.
{% data reusables.repositories.choose-line-or-range %}
4. 줄의 왼쪽 또는 줄의 범위에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}을 클릭합니다. 드롭다운 메뉴에서 **고정 링크 복사** 를 클릭합니다.
  ![선택한 줄에 대한 고정 링크를 복사하는 옵션이 있는 줄임표 메뉴](/assets/images/help/repository/copy-permalink-specific-line.png)
5. 코드 조각에 연결하려는 대화로 이동합니다.
6. 고정 링크를 주석에 붙여넣고 **주석** 을 클릭합니다.
  ![동일한 리포지토리의 주석에 붙여넣은 고정 링크](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Markdown에 연결

Markdown 렌더링 없이 Markdown 파일을 로드하여 Markdown 파일의 특정 줄에 연결할 수 있습니다. 렌더링하지 않고 Markdown 파일을 로드하려면 파일의 URL 끝에 있는 `?plain=1` 매개 변수를 사용할 수 있습니다. 예: `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

코드에서와 동일한 방식으로 Markdown 파일의 특정 줄에 연결할 수 있습니다. URL 끝에 줄 번호 또는 숫자와 함께 `#L`을 추가합니다. 예를 들어 `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14`는 일반 README.md 파일에서 줄 14를 강조 표시합니다.

## 추가 참고 자료

- “[이슈 만들기](/articles/creating-an-issue/)”
- “[코드에서 이슈 열기](/articles/opening-an-issue-from-code/)”
- “[끌어오기 요청의 변경 사항 검토](/articles/reviewing-changes-in-pull-requests/)”
