---
title: 인터페이스
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: a6fed36ccd70557b8d88904f83840a7afacdfacb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109149'
---
## 인터페이스 정보

[인터페이스](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces)는 다른 개체가 상속할 수 있는 부모 개체로 사용됩니다.

예를 들어 [`Issue`](/graphql/reference/objects#issue) 및 [`PullRequest`](/graphql/reference/objects#pullrequest) 개체를 모두 잠글 수 있으므로 [`Lockable`](/graphql/reference/interfaces#lockable)은 인터페이스입니다. 인터페이스에는 개체를 구현하여 공유되는 명명된 필드의 자체 목록이 있습니다.

자세한 내용은 “[구현](/graphql/guides/introduction-to-graphql#implementation)”을 참조하세요.

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
