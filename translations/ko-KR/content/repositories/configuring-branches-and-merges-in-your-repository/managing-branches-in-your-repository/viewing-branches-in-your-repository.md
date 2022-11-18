---
title: 리포지토리에서 분기 보기
intro: '분기는 {% data variables.product.product_name %}에 대한 협업의 중심이며 분기 페이지를 보는 가장 좋은 방법은 분기 페이지입니다.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
  - /github/administering-a-repository/viewing-branches-in-your-repository
  - /github/administering-a-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View branches
ms.openlocfilehash: 286c8eb8c717f5a002db0059e65c416ccc3981e8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136930'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
3. 페이지 맨 위에 있는 탐색을 사용하여 특정 분기 목록을 볼 수 있습니다.
    - **분기**: 푸시 액세스 권한이 있는 리포지토리에서 가장 최근 분기가 먼저 있는 기본 분기를 제외하고 사용자가 푸시한 모든 분기가 **사용자** 보기에 표시됩니다.
    - **활성 분기**: **활성** 보기에는 가장 최근 커밋이 먼저 있는 분기 순으로 정렬된 지난 3개월 이내에 커밋한 모든 분기를 표시합니다.
    - **부실 분기**: **부실** 보기에는 가장 이전 커밋이 먼저 있는 분기 순으로 정렬된 지난 3개월 동안 커밋되지 않은 모든 분기를 표시합니다. 이 목록을 사용하여 [삭제할 분기](/articles/creating-and-deleting-branches-within-your-repository)를 결정합니다.
    - **모든 분기**: **모든** 보기에는 기본 분기가 표시되고, 그 뒤에 가장 최근 커밋이 먼저 있는 분기 순으로 정렬된 다른 모든 분기가 표시됩니다.

4. 필요에 따라 오른쪽 위에 있는 검색 필드를 사용합니다. 분기 이름에 대해 대/소문자를 구분하지 않는 간단한 하위 문자열 검색을 제공합니다. 추가 쿼리 구문은 지원하지 않습니다.

![Atom 리포지토리의 분기 페이지](/assets/images/help/branches/branches-overview-atom.png)

## 추가 참고 자료

- “[리포지토리 내에서 분기 만들기 및 삭제](/articles/creating-and-deleting-branches-within-your-repository)”
- “[사용되지 않는 분기 삭제](/articles/deleting-unused-branches)”
