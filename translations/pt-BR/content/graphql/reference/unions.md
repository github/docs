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
ms.openlocfilehash: 550085d5cf8d9e3f9918b0e8e9c837a2ff85d9d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496481'
---
## Sobre uniões

Uma [união](https://graphql.github.io/graphql-spec/June2018/#sec-Unions) é um tipo de objeto que representa muitos objetos.

Por exemplo, um campo marcado como um [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) pode ser um [`Issue`](/graphql/reference/objects#issue) ou uma [`PullRequest`](/graphql/reference/objects#pullrequest), porque cada um desses objetos pode estar dentro de um cartão de projeto. Usar uma união em vez de um objeto dá flexibilidade.

Para obter mais informações, confira "[Introdução ao GraphQL](/graphql/guides/introduction-to-graphql)".

<!-- Content after this section is automatically generated -->
