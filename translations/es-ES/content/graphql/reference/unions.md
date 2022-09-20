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
ms.openlocfilehash: 550085d5cf8d9e3f9918b0e8e9c837a2ff85d9d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496495'
---
## Acerca de las uniones

Una [unión](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) es un tipo de objeto que representa muchos objetos.

Por ejemplo, un campo marcado como [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) podría ser [`Issue`](/graphql/reference/objects#issue) o [`PullRequest`](/graphql/reference/objects#pullrequest) porque cada uno de esos objetos puede estar dentro de una tarjeta de proyecto. Utilizar una unión en vez de un objeto te otorga flexibilidad.

Para más información, vea "[Introducción a GraphQL](/graphql/guides/introduction-to-graphql)".

<!-- Content after this section is automatically generated -->
