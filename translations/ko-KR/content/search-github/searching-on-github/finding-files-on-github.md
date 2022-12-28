---
title: GitHub에서 파일 찾기
intro: '파일 파인더를 사용하여 리포지토리에서 파일을 검색할 수도 있습니다. {% data variables.product.product_name %}의 여러 리포지토리에서 파일을 검색하려면 [`filename`코드 검색 한정자](/search-github/searching-on-github/searching-code#search-by-filename)를 사용합니다.'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 7cecdfd58ecf56cac251bd77af3a4e1a7fcfd607
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880198'
---
{% tip %}

**팁:**

- 기본적으로 파일 찾기 결과에는 일부 디렉터리(예: `build`, `log`, `tmp`, `vendor`)가 제외됩니다. 이러한 디렉터리에서 파일을 검색하려면 [`filename` 코드 검색 한정자](/search-github/searching-on-github/searching-code#search-by-filename)를 사용합니다.{% ifversion file-finder-exclusion-controls %} 또는 [`.gitattributes` 파일을 사용](#customizing-excluded-files)하여 기본적으로 제외되는 디렉터리를 사용자 지정할 수 있습니다.{% endif %}
- 키보드에서 `t`를 눌러 파일 찾기를 열 수도 있습니다. 자세한 내용은 “[바로 가기 키](/articles/keyboard-shortcuts)”를 참조하세요.

{% endtip %}

## 파일 찾기 사용

{% data reusables.repositories.navigate-to-repo %}
2. 위 파일 목록에서 **파일로 이동** 을 클릭합니다.
![파일 찾기 단추](/assets/images/help/search/find-file-button.png)
3. 검색 필드에 찾으려는 파일의 이름을 입력합니다.
![파일 찾기 검색 필드](/assets/images/help/search/find-file-search-field.png)
4. 결과 목록에서 찾으려는 파일을 클릭합니다.

{% ifversion file-finder-exclusion-controls %}

## 제외된 파일 사용자 지정

기본적으로 파일 찾기 결과는 리포지토리 루트에 있는 경우 다음 디렉터리에 파일을 포함하지 않습니다.

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

`.gitattributes` 파일을 사용하여 이러한 기본 제외를 재정의할 수 있습니다.

이렇게 하려면 파일 찾기 결과에 포함되어야 하는 각 디렉터리에 대해 [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) 특성을 `false`로 설정하여 리포지토리 루트에서 `.gitattributes`라는 파일을 만들거나 업데이트합니다.

예를 들어 다음 `.gitattributes` 파일은 `build/` 디렉터리의 파일을 파일 찾기에서 사용할 수 있게 합니다.

```
build/** linguist-generated=false
```

이 재정의를 수행하려면 재귀 GLOB 패턴(`**`)을 사용해야 합니다. 자세한 내용은 Git 설명서의 “[패턴 형식](https://git-scm.com/docs/gitignore#_pattern_format)”을 참조하세요. 제외된 기본 디렉터리 내의 하위 디렉터리에 대한 더 복잡한 재정의는 지원되지 않습니다.

{% endif %}

## 추가 참고 자료

- “[GitHub에서 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”{% ifversion file-finder-exclusion-controls %}
- “[변경된 파일이 GitHub에 표시되는 방식 사용자 지정](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)”
- Git 설명서의 [`.gitattributes`](https://git-scm.com/docs/gitattributes){% endif %}
