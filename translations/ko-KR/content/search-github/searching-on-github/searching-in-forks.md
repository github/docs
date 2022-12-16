---
title: 포크에서 검색
intro: '기본적으로 [포크](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)는 검색 결과에 표시되지 않습니다. 포크를 리포지토리 검색에 포함하고, 특정 조건을 충족하는 경우 코드 검색에 포함하도록 선택할 수 있습니다.'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
  - /github/searching-for-information-on-github/searching-on-github/searching-in-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 6375fdecd7dba47447b37207467e008f0e7b3fc0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147785792'
---
[리포지토리 검색](/search-github/searching-on-github/searching-for-repositories) 결과에 포크를 표시하려면 쿼리에 `fork:true` 또는 `fork:only`를 추가합니다.

포크는 부모 리포지토리보다 더 많은 별을 가진 경우에만 [코드 검색](/search-github/searching-on-github/searching-code)을 위해 인덱싱됩니다. 부모보다 적은 별을 가진 포크의 코드는 검색할 수 없습니다. 코드 검색 결과에서 부모 리포지토리보다 더 많은 별을 가진 포크를 표시하려면 쿼리에 `fork:true` 또는 `fork:only`를 추가합니다.

`fork:true` 한정자는 포크를 포함하여 검색 쿼리와 일치하는 모든 결과를 찾습니다. `fork:only` 한정자는 검색 쿼리와 일치하는 포크 _만_ 찾습니다.

| 한정자  | 예제
| ------------- | -------------
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories)는 포크를 포함하여 “github”라는 단어가 포함된 모든 리포지토리와 일치합니다.
| | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code)는 포크 및 일반 리포지토리 모두에서 Java로 작성된 “android”라는 단어가 있는 코드와 일치합니다.
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories)는 “github”라는 단어가 포함된 모든 포크 리포지토리와 일치합니다.
| | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories)는 500개가 넘는 포크가 있는 리포지토리와 일치하며, 포크인 리포지토리만 반환합니다.

## 추가 참고 자료

- “[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”
- “[GitHub 검색 정보](/search-github/getting-started-with-searching-on-github/about-searching-on-github)”
