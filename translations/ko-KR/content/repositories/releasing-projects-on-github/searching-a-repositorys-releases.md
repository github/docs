---
title: 리포지토리의 릴리스 검색
intro: '키워드, 태그 및 기타 한정자를 사용하여 리포지토리에서 특정 릴리스를 검색할 수 있습니다.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Searching releases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '>= 3.4'
topics:
  - Repositories
ms.openlocfilehash: a61e49521452befdcddf2724cad837062c7d54a1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109653'
---
## 리포지토리에서 릴리스 검색

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. 리포지토리의 릴리스를 검색하려면 릴리스 페이지의 맨 위에 있는 검색 필드에 쿼리를 입력하고 **Enter** 키를 누릅니다.
![릴리스 검색 필드](/assets/images/help/releases/search-releases.png)

## 리포지토리에서 릴리스를 검색하기 위한 검색 구문

리포지토리 릴리스의 제목, 본문, 태그와 일치하는 텍스트를 검색 쿼리에 제공할 수 있습니다. 다음 한정자를 결합하여 특정 릴리스를 대상으로 할 수도 있습니다.

| 한정자        | 예제
| ------------- | -------------
| `draft:true` | **draft:true** 는 초안 릴리스와만 일치합니다.
| `draft:false` | **draft:false** 는 게시된 릴리스와만 일치합니다.
| `prerelease:true` | **prerelease:true** 는 사전 릴리스와만 일치합니다.
| `prerelease:false` | **prerelease:false** 는 사전 릴리스가 아닌 릴리스와만 일치합니다.
| <code>tag:<em>TAG</em></code> | **tag:v1** 은 v1 태그가 있는 릴리스 및 v1.0, v1.2, v1.2.5와 같은 v1 내의 모든 부 버전 또는 패치 버전과 일치합니다.
| <code>created:<em>DATE</em></code> | **created:2021** 은 2021년 중에 생성된 릴리스와 일치합니다. 또는 날짜 범위를 제공할 수도 있습니다. 자세한 내용은 “[검색 구문 이해](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)”를 참조하세요.
