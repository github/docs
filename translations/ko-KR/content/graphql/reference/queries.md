---
title: 쿼리
miniTocMaxHeadingLevel: 3
redirect_from:
  - /v4/query
  - /v4/reference/query
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: d5c31e8e00788d2e75f27b0bb161249f01fcfb1d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109044'
---
## 쿼리 정보

모든 GraphQL 스키마에는 쿼리 및 변형 모두에 대한 루트 형식이 있습니다. [쿼리 형식](https://graphql.github.io/graphql-spec/June2018/#sec-Type-System)은 서버의 데이터를 검색하는 GraphQL 작업을 정의합니다.

자세한 내용은 “[쿼리 정보](/graphql/guides/forming-calls-with-graphql#about-queries)”를 참조하세요.

{% note %}

**참고:** [user-to-server](/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) {% data variables.product.prodname_github_app %} 요청의 경우, 이슈와 끌어오기 요청에 대해 별도의 쿼리를 사용해야 합니다. 예를 들어, `is:issue` 또는 `is:pull-request` 필터 및 그와 동등한 것을 사용하세요. `search` 연결을 사용하여 단일 쿼리에서 이슈 및 끌어오기 요청의 조합을 반환하면 빈 노드 집합이 생성됩니다.

{% endnote %}

<!-- Content after this section is automatically generated -->
