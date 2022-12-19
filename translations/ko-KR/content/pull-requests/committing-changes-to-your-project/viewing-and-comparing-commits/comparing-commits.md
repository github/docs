---
title: 커밋 비교
intro: '분기, 태그, 커밋, 포크 및 날짜에 걸쳐 리포지토리의 상태를 비교할 수 있습니다.'
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 2ebf1a3cc83463e97d9a4d60401277bb844135b1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145137098'
---
리포지토리의 서로 다른 버전을 비교하려면 리포지토리의 경로에 `/compare`를 추가합니다.

[https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master)에 있는 [Linguist 리포지토리의 포크](https://github.com/octocat/linguist)에 대한 비교 페이지를 살펴봄으로써 비교의 강력한 기능을 보여 드리겠습니다.

모든 리포지토리의 비교 보기에는 두 개의 드롭다운 메뉴가 포함되어 있습니다(`base` 및 `compare`).

`base`는 비교의 시작점으로 간주되어야 하며 `compare`는 엔드포인트입니다. 비교하는 동안 `base`편집`compare`을 클릭하여 언제든지 **지점과** 지점을 변경할 수 있습니다.

## 분기 비교

비교의 가장 일반적인 용도는 새 끌어오기 요청을 시작할 때와 같이 분기를 비교하는 것입니다. [새 끌어오기 요청](/articles/creating-a-pull-request)을 시작할 때 항상 분기 비교 보기로 이동하게 됩니다.

분기를 비교하려면 페이지 상단의 `compare` 드롭다운 메뉴에서 분기 이름을 선택할 수 있습니다.

다음은 [두 분기 간의 비교](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs) 예제입니다.

## 태그 비교

릴리스 태그를 비교하면 마지막 릴리스 이후 리포지토리에 대한 변경 내용이 표시됩니다. 자세한 내용은 "[릴리스 비교](/github/administering-a-repository/comparing-releases)"를 참조하세요.

태그를 비교하려면 페이지 상단의 `compare` 드롭다운 메뉴에서 태그 이름을 선택할 수 있습니다.

다음은 [두 태그 간의 비교](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3) 예제입니다.

## 커밋 비교

또한 리포지토리에 있는 두 개의 임의의 커밋 또는 {% data variables.product.prodname_dotcom %}의 해당 포크를 2도트 차이 비교로 비교할 수 있습니다.

{% data variables.product.prodname_dotcom %}에서 2도트 차이 비교로 두 개의 커밋 또는 Git OID(개체 ID)를 서로 직접 빠르게 비교하려면 리포지토리의 “변경 내용 비교” 페이지의 URL을 편집합니다.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

다른 비교 옵션에 대한 자세한 내용은 “[3도트 및 2도트 차이 비교](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)”를 참조하세요.

## 포크 간 비교

기본 리포지토리와 포크된 리포지토리를 비교할 수 있습니다. 이것은 사용자가 프로젝트에 끌어오기 요청을 수행할 때 표시되는 보기입니다.

서로 다른 리포지토리의 분기를 비교하려면 분기 이름 앞에 사용자 이름을 추가합니다. 예를 들어 `base`에 `octocat:main`을 지정하고 `compare`에 `octo-org:main`을 지정함으로써 `octocat` 및 `octo-org`에서 각각 소유한 리포지토리의 `main` 분기를 비교할 수 있습니다.

다음은 [두 리포지토리 간의 비교](https://github.com/github/linguist/compare/master...octocat:master) 예제입니다.

## 커밋 간 비교

약식으로 Git은 `^` 표기법을 사용하여 “하나 이전 커밋”을 의미합니다.

이 표기법을 사용하여 단일 커밋 또는 분기를 바로 이전 것들과 비교할 수 있습니다. 예를 들어, `96d29b7^^^^^`에는 5개의 `^` 표시가 있기 때문에 `96d29b7` 이전 5개의 커밋을 나타냅니다. `base` 분기에 `96d29b7^^^^^`를 입력하고 `compare` 분기에 `96d29b7`을 입력하면 `96d29b7` 이전에 작성된 5개의 커밋을 `96d29b7` 커밋과 비교합니다.

다음은 [`^` 표기법을 사용한 비교](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7)의 예제입니다.

## 추가 참고 자료

- “[끌어오기 요청의 기본 분기 변경](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)”
