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
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108406'
---
## Informationen zu Unions

Eine [Union](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) ist ein Objekttyp, der viele Objekte repräsentiert.

Zum Beispiel könnte ein Feld, das als [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) markiert ist, ein [`Issue`](/graphql/reference/objects#issue) oder ein [`PullRequest`](/graphql/reference/objects#pullrequest) sein, weil jedes dieser Objekte in einer Projektkarte enthalten sein kann. Die Verwendung einer Union anstelle eines Objekts bietet dir Flexibilität.

Weitere Informationen findest du unter [Einführung in GraphQL](/graphql/guides/introduction-to-graphql).

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
