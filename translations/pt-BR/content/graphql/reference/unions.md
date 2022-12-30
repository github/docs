---
title: Uniões
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
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107829'
---
## Sobre uniões

Uma [união](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) é um tipo de objeto que representa muitos objetos.

Por exemplo, um campo marcado como um [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) pode ser um [`Issue`](/graphql/reference/objects#issue) ou uma [`PullRequest`](/graphql/reference/objects#pullrequest), porque cada um desses objetos pode estar dentro de um cartão de projeto. Usar uma união em vez de um objeto dá flexibilidade.

Para obter mais informações, confira "[Introdução ao GraphQL](/graphql/guides/introduction-to-graphql)".

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
