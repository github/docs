---
title: Objetos de entrada
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
ms.openlocfilehash: 1e89d84c895ec4516188b0c42a0147a95d0bb5e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496682'
---
## Sobre objetos de entrada

Os [objetos de entrada](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) podem ser descritos como "objetos combináveis", porque incluem um conjunto de campos de entrada que definem o objeto.

Por exemplo, [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) usa um campo chamado `emails`. O fornecimento de um valor para `emails` transforma `CommitAuthor` em uma lista de objetos `User` que contêm esse endereço de email. Observe que os [objetos](/graphql/reference/objects) **podem** ter objetos de entrada, enquanto as [mutações](/graphql/reference/mutations) **exigem** objetos de entrada.

Para obter mais informações, confira "[Sobre as mutações](/graphql/guides/forming-calls-with-graphql#about-mutations)".

<!-- Content after this section is automatically generated -->
