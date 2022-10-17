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
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '147496695'
---
## Acerca de los objetos de entrada

[Los objetos de entrada](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) se pueden describir como "objetos que admiten composición" porque incluyen un conjunto de campos de entrada que definen el objeto.

Por ejemplo, [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) toma un campo denominado `emails`. Proporcionar un valor para `emails` transforma `CommitAuthor` en una lista de objetos `User` que contienen esa dirección de correo electrónico. Tenga en cuenta que los [objetos](/graphql/reference/objects) **pueden** tener objetos de entrada, mientras que en el caso de las [mutaciones](/graphql/reference/mutations), los objetos de entrada son **obligatorios**.

Para más información, consulte "[Acerca de las mutaciones](/graphql/guides/forming-calls-with-graphql#about-mutations)".

<!-- Content after this section is automatically generated -->
