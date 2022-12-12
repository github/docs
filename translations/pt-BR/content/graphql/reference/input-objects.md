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
ms.openlocfilehash: 10a84ad425b0c8b871b1c64f09bef4d8cf33d007
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107885'
---
## Sobre objetos de entrada

Os [objetos de entrada](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) podem ser descritos como "objetos combináveis", porque incluem um conjunto de campos de entrada que definem o objeto.

Por exemplo, [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) usa um campo chamado `emails`. O fornecimento de um valor para `emails` transforma `CommitAuthor` em uma lista de objetos `User` que contêm esse endereço de email. Observe que os [objetos](/graphql/reference/objects) **podem** ter objetos de entrada, enquanto as [mutações](/graphql/reference/mutations) **exigem** objetos de entrada.

Para obter mais informações, confira "[Sobre as mutações](/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
