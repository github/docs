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
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108983'
---
## ユニオンについて

[ユニオン](https://graphql.github.io/graphql-spec/June2018/#sec-Unions)は、多くのオブジェクトを表すオブジェクトの型です。

たとえば、プロジェクト カード内にはそれらの各オブジェクトを含めることができるので、[`ProjectCardItem`](/graphql/reference/unions#projectcarditem) としてマークされるフィールドは、[`Issue`](/graphql/reference/objects#issue) または [`PullRequest`](/graphql/reference/objects#pullrequest) となる可能性があります。 オブジェクトの代わりにユニオンを使うことで柔軟性が得られます。

詳しい情報については、「[GraphQL の概要](/graphql/guides/introduction-to-graphql)」を参照してください。

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
