---
title: CITATION 파일 정보
intro: 사용자가 소프트웨어를 올바르게 인용할 수 있도록 CITATION 파일을 리포지토리에 추가할 수 있습니다.
redirect_from:
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 96e5e7308ba5d1877f231dcb454d7b797a63f221
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108972'
---
## CITATION 파일 정보

리포지토리의 루트에 `CITATION.cff` 파일을 추가하여 다른 사용자가 작업을 인용하는 방법을 알릴 수 있습니다. 인용 파일 형식은 사람 및 컴퓨터가 읽을 수 있는 인용 정보가 포함된 일반 텍스트입니다.

예제 `CITATION.cff` 파일:

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
```

리포지토리의 GitHub 인용 프롬프트에는 다음 형식의 예제 `CITATION.cff` 콘텐츠가 표시됩니다.

**APA**

```
Lisa, M., & Bot, H. (2017). My Research Software (Version 2.0.4) [Computer software]. https://doi.org/10.5281/zenodo.1234
```

**BibTeX**

{% raw %}
```
@software{Lisa_My_Research_Software_2017,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.5281/zenodo.1234},
  month = {12},
  title = {{My Research Software}},
  url = {https://github.com/github/linguist},
  version = {2.0.4},
  year = {2017}
}
```
{% endraw %}

위의 예제에서는 소프트웨어 인용(즉, `@article` 대신 BibTeX에서 `@software` 입력)을 생성합니다.

자세한 내용은 [인용 파일 형식](https://citation-file-format.github.io/) 웹 사이트를 참조하세요.

리포지토리의 기본 분기에 `CITATION.cff` 파일을 추가하면 리포지토리 방문 페이지에서 자동으로 연결됩니다. 이렇게 하면 사용자가 제공한 정보를 사용하여 다른 사용자가 소프트웨어 프로젝트를 쉽게 인용할 수 있습니다.

![리포지토리 방문 페이지의 인용 링크](/assets/images/help/repository/citation-link.png)

## 소프트웨어 이외의 다른 내용 인용

{% data variables.product.prodname_dotcom %} 인용 정보를 연구 문서와 같은 다른 리소스에 연결하려는 경우 다음 형식으로 CFF에서 `preferred-citation` 재정의를 사용할 수 있습니다.

| 리소스 | CFF 형식 | BibTeX 형식 | APA 주석 |
|----------|----------|-------------|----------------|
| 저널 아티클/논문 | `article` | `@article` | |
| Book | `book` | `@book` | |
| 소책자(바인딩되었지만 게시되지 않음) | `pamphlet` | `@booklet` | |
| 회의 문서/논문 | `conference-paper` | `@inproceedings` | [컨퍼런스 백서] |
| 회의 자료 | `conference`, `proceedings` | `@proceedings` | |
| 데이터 집합 | `data`, `database` | `@misc` | [데이터 세트] |
| 잡지 기사 | `magazine-article` | `@article` | |
| 설명서 | `manual` | `@manual` | |
| 기타/일반/기타 | `generic`, 다른 모든 CFF 형식 | `@misc` | |
| 신문 기사 | `newspaper-article` | `@article` | |
| 소프트웨어 |  `software`, `software-code`, `software-container`, `software-executable`, `software-virtual-machine` | `@software` | [컴퓨터 소프트웨어] |
| 보고서/기술 보고서 | `report` | `@techreport` | |
| 게시 취소됨 | `unpublished` | `@unpublished` | |

소프트웨어를 설명하는 확장 CITATION.cff 파일이지만, 연구 문서에 기본 인용으로 연결합니다.

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
- family-names: "Lisa"
  given-names: "Mona"
  orcid: "https://orcid.org/0000-0000-0000-0000"
- family-names: "Bot"
  given-names: "Hew"
  orcid: "https://orcid.org/0000-0000-0000-0000"
title: "My Research Software"
version: 2.0.4
doi: 10.5281/zenodo.1234
date-released: 2017-12-18
url: "https://github.com/github/linguist"
preferred-citation:
  type: article
  authors:
  - family-names: "Lisa"
    given-names: "Mona"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  - family-names: "Bot"
    given-names: "Hew"
    orcid: "https://orcid.org/0000-0000-0000-0000"
  doi: "10.0000/00000"
  journal: "Journal Title"
  month: 9
  start: 1 # First page number
  end: 10 # Last page number
  title: "My awesome research software"
  issue: 1
  volume: 1
  year: 2021
```

위의 예제 `CITATION.cff` 파일은 GitHub 인용 프롬프트에서 다음 출력을 생성합니다.

**APA**

```
Lisa, M., & Bot, H. (2021). My awesome research software. Journal Title, 1(1), 1. https://doi.org/10.0000/00000
```

**BibTeX**

{% raw %}
```
@article{Lisa_My_awesome_research_2021,
  author = {Lisa, Mona and Bot, Hew},
  doi = {10.0000/00000},
  journal = {Journal Title},
  month = {9},
  number = {1},
  pages = {1--10},
  title = {{My awesome research software}},
  volume = {1},
  year = {2021}
}
```
{% endraw %}

## 데이터 세트 인용

리포지토리에 데이터 세트가 포함된 경우 `CITATION.cff` 파일의 최상위 수준에서 `type: dataset`를 설정하여 {% data variables.product.prodname_dotcom %} 인용 프롬프트에서 데이터 인용 문자열 출력을 생성할 수 있습니다.

## 기타 인용 파일

또한 GitHub 인용 기능은 커뮤니티 및 프로젝트에서 자주 사용되는 소수의 추가 파일을 검색하여 작업을 인용하는 방법을 설명합니다.

GitHub는 이 리포지토리 인용 프롬프트에서 이러한 파일에 연결되지만 다른 인용 형식으로 구문 분석하려고 시도하지는 않습니다.

```
# Note these are case-insensitive and must be in the root of the repository
CITATION
CITATIONS
CITATION.bib
CITATIONS.bib
CITATION.md
CITATIONS.md

# CITATION files for R packages are typically found at inst/CITATION
inst/CITATION
```

## 인용 형식

현재 APA 및 BibTex 파일 형식을 지원합니다.

추가 인용 형식을 찾고 있나요? GitHub는 Ruby 라이브러리를 사용하여 `CITATION.cff` 파일을 구문 분석합니다. [ruby-cff](https://github.com/citation-file-format/ruby-cff) 리포지토리에서 추가 형식을 요청하거나 직접 기여할 수 있습니다.
