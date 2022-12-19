---
title: 列挙型
redirect_from:
  - /v4/enum
  - /v4/reference/enum
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 3be1688849e7cfef4a0b81af1ee045a3ddccd625
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109049'
---
## 列挙型について

[列挙型](https://graphql.github.io/graphql-spec/June2018/#sec-Enums)は、フィールドに使える値のセットを表します。

たとえば、[`Issue`](/graphql/reference/objects#issue) オブジェクトには `state` と呼ばれるフィールドが含まれます。 状態は `OPEN` または `CLOSED` であるため、列挙型 (具体的には型 [`IssueState`](/graphql/reference/enums#issuestate)) です。

詳しくは、「[GraphQL の概要](/graphql/guides/introduction-to-graphql)」をご覧ください。

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
