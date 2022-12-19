---
title: 입력 개체
redirect_from:
  - /v4/input_object
  - /v4/reference/input_object
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 10a84ad425b0c8b871b1c64f09bef4d8cf33d007
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109152'
---
## 입력 개체 정보

[입력 개체](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects)는 개체를 정의하는 입력 필드의 집합을 포함하므로 “구성 가능한 개체”로 설명할 수 있습니다.

예를 들어 [`CommitAuthor`](/graphql/reference/input-objects#commitauthor)는 `emails`라는 필드를 사용합니다. `emails`에 대한 값을 제공하면 `CommitAuthor`는 해당 이메일 주소를 포함하는 `User` 개체의 목록으로 변환됩니다. [개체](/graphql/reference/objects)는 입력 개체를 **가질 수도** 있지만, [변형](/graphql/reference/mutations)은 입력 개체를 **반드시 가져야** 합니다.

자세한 내용은 “[변형 정보](/graphql/guides/forming-calls-with-graphql#about-mutations)”를 참조하세요.

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
