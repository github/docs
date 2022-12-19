---
title: Uniones
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
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109875'
---
## Acerca de las uniones

Una [unión](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) es un tipo de objeto que representa muchos objetos.

Por ejemplo, un campo marcado como [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) podría ser [`Issue`](/graphql/reference/objects#issue) o [`PullRequest`](/graphql/reference/objects#pullrequest) porque cada uno de esos objetos puede estar dentro de una tarjeta de proyecto. Utilizar una unión en vez de un objeto te otorga flexibilidad.

Para más información, vea "[Introducción a GraphQL](/graphql/guides/introduction-to-graphql)".

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
