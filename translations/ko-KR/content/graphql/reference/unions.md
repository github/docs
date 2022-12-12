---
title: Unions
redirect_from:
  - /v4/union
  - /v4/reference/union
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 13c5fdf292a58d73b93ff13a9de8840456d16d75
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108984'
---
## 공용 구조체 정보

[공용 구조체](https://graphql.github.io/graphql-spec/June2018/#sec-Unions)는 많은 개체를 나타내는 개체의 형식입니다.

예를 들어 [`ProjectCardItem`](/graphql/reference/unions#projectcarditem)으로 표시된 필드는 [`Issue`](/graphql/reference/objects#issue) 또는 [`PullRequest`](/graphql/reference/objects#pullrequest)일 수 있는데, 이는 각 개체가 프로젝트 카드 안에 있을 수 있기 때문입니다. 개체 대신 공용 구조체를 사용하면 유연성이 있습니다.

자세한 내용은 “[GraphQL 소개](/graphql/guides/introduction-to-graphql)”를 참조하세요.

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
