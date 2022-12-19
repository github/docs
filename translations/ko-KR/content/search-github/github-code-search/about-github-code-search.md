---
title: GitHub 코드 검색 정보(베타)
intro: '새 코드 검색(베타)을 사용하여 GitHub에서 코드를 검색, 탐색 및 이해할 수 있습니다.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 8bf3232e87de2fc773f69bf5047e75ab0e52c7e2
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160226'
---
{% note %}

**참고:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-view-link %}

{% endnote %}

## 새 코드 검색 정보(베타)

새 코드 검색(베타)을 사용하면 {% data variables.product.prodname_dotcom_the_website %}에서 코드, 팀의 코드 및 오픈 소스 커뮤니티의 코드를 빠르게 검색, 탐색 및 이해할 수 있습니다. 이 검색 엔진은 확장 가능하고 코드를 인식하며 정규식, 부울 작업, 특수 한정자 및 기호 검색을 사용하여 GitHub에서 코드 검색을 지원하도록 설계되었습니다. 새 코드 검색(베타)의 구문에 대한 자세한 내용은 "[GitHub 코드 검색(베타) 구문 이해](/search-github/github-code-search/understanding-github-code-search-syntax)"를 참조하세요.

새 코드 검색 엔진 외에도 코드 검색(베타)에는 {% data variables.product.prodname_dotcom_the_website %}의 검색 인터페이스에 제안, 완료 및 검색 저장 기능과 같은 새로운 기능이 포함되어 있습니다. 새 검색 인터페이스를 사용하면 원하는 항목을 더 빠르고 쉽게 찾을 수 있습니다. 자세한 내용은 "[GitHub 코드 검색(베타) 사용"을 참조하세요](/search-github/github-code-search/using-github-code-search).

{% data reusables.search.non-code-search-explanation %}

새 코드 검색(베타)은 {% data variables.product.prodname_dotcom_the_website %}에서 새롭게 디자인된 코드 뷰(베타)와 긴밀하게 통합됩니다. {% data reusables.search.code-view-link %}

새 코드 검색(베타)에 액세스하려면 새 코드 보기와 함께 [대기 목록에](https://github.com/features/code-search-code-view/signup) 등록할 수 있습니다. 

## 새 코드 검색 및 코드 뷰 사용 및 사용 안 함(베타)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## 제한 사항

새 코드 검색(베타)을 위해 많은 공용 리포지토리를 인덱싱하고 더 많은 인덱싱을 계속합니다. 또한 베타에 있는 GitHub 사용자의 프라이빗 리포지토리는 이미 GitHub.com 해당 프라이빗 리포지토리에 액세스할 수 있는 베타 참가자가 인덱싱하고 검색할 수 있습니다. 그러나 현재는 매우 큰 리포지토리가 인덱싱되지 않을 수 있으며 모든 코드가 인덱싱되는 것은 아닙니다. 

인덱싱된 코드의 현재 제한 사항은 다음과 같습니다.
   - 공급업체 및 생성된 코드는 제외됩니다( [Enry](https://github.com/go-enry/go-enry)에 의해 결정됨).
   - 350KiB를 넘는 빈 파일 및 파일은 제외됩니다.
   - UTF-8로 인코딩된 파일만 포함됩니다.
   - 매우 큰 리포지토리는 인덱싱되지 않을 수 있습니다.

현재 리포지토리의 기본 분기에서 코드 검색만 지원합니다.

새 코드 검색(베타)을 사용하여 검색에 대한 결과는 100개 결과(10페이지)로 제한됩니다. 현재 코드 검색 결과에는 정렬이 지원되지 않습니다. 이 제한은 새 코드 검색(베타)을 사용하여 코드를 검색하는 경우에만 적용되며 다른 유형의 검색에는 적용되지 않습니다.

새 코드 검색(베타)은 한정자를 사용하여 함수 또는 클래스 정의와 같은 코드의 기호 정의 검색을 `symbol:` 지원합니다. 그러나 한정자는 `symbol:` 참조가 아닌 정의만 검색하며, 모든 기호 형식이나 언어가 아직 완전히 지원되지는 않습니다. 지원되는 언어 목록은 "[기호 한정자](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)"를 참조하세요.

## 피드백 및 지원

[토론 포럼](https://github.com/orgs/community/discussions/categories/code-search-and-navigation)에서 새 코드 검색(베타)에 대한 피드백을 보고 공유할 수 있습니다.
