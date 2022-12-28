---
title: 리포지토리 언어 정보
intro: 리포지토리 내의 파일 및 디렉터리는 리포지토리를 구성하는 언어를 결정합니다. 리포지토리의 언어를 보고 리포지토리에 대한 간략한 개요를 확인할 수 있습니다.
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language
  - /articles/why-isn-t-my-favorite-language-recognized
  - /articles/my-repo-is-marked-as-the-wrong-language
  - /articles/why-isn-t-sql-recognized-as-a-language
  - /articles/why-isn-t-my-favorite-language-recognized-by-github
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository languages
ms.openlocfilehash: 5ae844d133a09829220f16e90759dabd0b7b0ab3
ms.sourcegitcommit: e8df903f8f79fab07197d39685782476c3d272b8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/06/2022
ms.locfileid: '148011134'
---
{% data variables.product.product_name %}는 오픈 소스 [Linguist 라이브러리](https://github.com/github/linguist)를 사용하여 구문 강조 표시 및 리포지토리 통계를 위한 파일 언어를 결정합니다. 기본 분기에 변경 내용을 푸시하면 언어 통계가 업데이트됩니다.

일부 파일은 식별하기 어렵고, 프로젝트에 기본 코드보다 더 많은 라이브러리 및 공급업체 파일이 포함된 경우도 있습니다. 잘못된 결과가 표시되는 경우 Linguist [문제 해결 가이드](https://github.com/github/linguist/blob/master/docs/troubleshooting.md)를 참조하세요. Linguist는 파일이 100,000개 미만인 리포지토리에서만 작동합니다. 

## 태그 언어

태그 언어는 HTML로 렌더링되고 오픈 소스 [태그 라이브러리](https://github.com/github/markup)를 사용하여 인라인으로 표시됩니다. 지금은 {% data variables.product.product_name %}에 표시할 새 태그 언어를 허용하지 않습니다. 그러나 현재 태그 언어를 적극적으로 유지 관리하고 있습니다. 문제가 발견되면 [이슈를 만드세요](https://github.com/github/markup/issues/new).
