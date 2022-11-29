---
title: GitHub에서 코드 탐색
intro: '{% data variables.product.product_name %}에서 직접 코드를 탐색하여 리포지토리의 내부와 리포지토리 간의 관계를 이해할 수 있습니다.'
redirect_from:
  - /articles/navigating-code-on-github
  - /github/managing-files-in-a-repository/navigating-code-on-github
  - /github/managing-files-in-a-repository/managing-files-on-github/navigating-code-on-github
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 89fc5092468d50484cfcad71824870b6456d9ac7
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164165'
---
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the article accordingly. -->

## {% data variables.product.prodname_dotcom %}의 코드 탐색 정보

코드 탐색을 사용하면 해당 엔터티에 대한 참조에 해당하는 명명된 엔터티의 정의와 엔터티 정의에 해당하는 참조를 표시하고 연결하여 코드를 읽고 탐색하고 이해할 수 있습니다.

![코드 탐색 표시](/assets/images/help/repository/code-navigation-popover.png)

코드 탐색은 오픈 소스 [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) 라이브러리를 사용합니다. 지원되는 언어 및 탐색 전략은 다음과 같습니다.

| 언어   | 검색 기반 코드 탐색 | 정확한 코드 탐색 |
|:----------:|:----------------------------:|:-----------------------:|
| C#         | ✅                           |                         |
| CodeQL     | ✅                           |                         |
| Elixir     | ✅                           |                         |
| Go         | ✅                           |                         |
| Java       | ✅                           |                         |
| JavaScript | ✅                           |                         |
| PHP        | ✅                           |                         |
| Python     | ✅                           | ✅                      |
| Ruby       | ✅                           |                         |
| Rust       | ✅                           |                         |
| TypeScript | ✅                           |                         |


코드 탐색을 사용하도록 리포지토리에서 아무것도 구성할 필요가 없습니다. 모든 리포지토리에서 이러한 지원되는 언어에 대한 검색 기반 및 정확한 코드 탐색 정보를 자동으로 추출하고 프로그래밍 언어가 둘 모두에서 지원되는 경우 지원되는 두 코드 탐색 방법 간에 전환할 수 있습니다.

{% data variables.product.prodname_dotcom %}은(는) 오픈 소스 [`tree-sitter`](https://github.com/tree-sitter/tree-sitter) 및 [`stack-graphs`](https://github.com/github/stack-graphs) 라이브러리를 기반으로 두 가지 코드 탐색 방법을 개발했습니다.
 - 검색 기반 - 리포지토리 전체의 모든 정의 및 참조를 검색하여 지정된 이름의 엔터티를 찾습니다.
 - 정확 - 코드의 지정된 지점에서 클래스, 함수 및 가져온 정의 집합을 기반으로 정의 및 참조를 확인합니다.

이러한 접근 방식에 대한 자세한 내용은 “[정확 및 검색 기반 탐색](#precise-and-search-based-navigation)”을 참조하세요.

이후 릴리스에서는 더 많은 언어에 대해 정확한 코드 탐색을 추가할 예정이며, 이는 보다 정확한 결과를 제공할 수 있는 코드 탐색 방법입니다.

## 함수 또는 메서드의 정의로 이동

파일에서 함수 또는 메서드 호출을 클릭하여 동일한 리포지토리 내에서 함수 또는 메서드 정의로 이동할 수 있습니다.

![정의로 이동 탭](/assets/images/help/repository/jump-to-definition-tab.png)

## 함수 또는 메서드의 모든 참조 찾기

파일에서 함수 또는 메서드 호출을 클릭한 다음 **참조** 탭을 클릭하여 동일한 리포지토리 내에서 함수 또는 메서드에 대한 모든 참조를 찾을 수 있습니다.

![모든 참조 찾기 탭](/assets/images/help/repository/find-all-references-tab.png)

## 정확 및 검색 기반 탐색

{% data variables.product.prodname_dotcom %}에서 지원되는 특정 언어는 정확한 코드 탐색에 액세스할 수 있습니다. 이 언어는 코드의 지정된 지점에 표시되는 클래스, 함수 및 가져온 정의 집합을 기반으로 정의 및 참조를 확인하는 알고리즘(오픈 소스 [`stack-graphs`](https://github.com/github/stack-graphs) 라이브러리 기반)을 사용합니다. 다른 언어는 검색 기반 코드 탐색을 사용하여 리포지토리 전체의 모든 정의와 참조를 검색하여 지정된 이름의 엔터티를 찾습니다. 두 전략 모두 결과를 찾는 데 효과적이며 둘 다 주석과 같은 부적절한 결과를 방지할 수 있지만, 정확한 코드 탐색은 특히 리포지토리에 동일한 이름의 여러 메서드 또는 함수가 포함된 경우 보다 정확한 결과를 제공할 수 있습니다.

정확한 코드 탐색 쿼리에서 예상한 결과가 표시되지 않으면 표시된 팝오버에서 “검색 기반” 링크를 클릭하여 검색 기반 탐색을 수행할 수 있습니다.

![검색 기반 코드 탐색 링크](/assets/images/help/repository/search-based-code-navigation-link.png)

정확한 결과가 부정확한 것으로 표시되면 지원 요청을 제출할 수 있습니다.

## 리포지토리 간 정밀 코드 탐색

교차 리포지토리 코드 탐색은 정확한 코드 탐색 및 종속성 그래프에서 지원하는 언어에 사용할 수 있습니다. 자세한 내용은 “[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”를 참조하세요. 리포지토리 간 코드 탐색을 사용하면 해당 종속성이 {% data variables.product.prodname_dotcom %}에서 호스트하는 리포지토리인 경우 프로젝트에서 가져온 종속성에 정의된 함수 또는 변수의 정의로 이동할 수 있습니다. 교차 리포지토리 코드 탐색은 현재 모든 참조 찾기 요청을 지원하지 않습니다.

![리포지토리 간 코드 탐색 스크린샷](/assets/images/help/repository/cross-repository-code-navigation.png)

## 코드 탐색 문제 해결

코드 탐색을 사용하도록 설정했지만 함수 및 메서드 정의에 대한 링크가 표시되지 않는 경우:
- 코드 탐색은 활성 분기에 대해서만 작동합니다. 분기로 푸시하고 다시 시도합니다.
- 코드 탐색은 파일이 100,000개 미만인 리포지토리에서만 작동합니다.

## 추가 참고 자료
- “[코드 검색](/github/searching-for-information-on-github/searching-code)”
