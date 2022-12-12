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
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109931'
---
## Acerca de los objetos de entrada

[Los objetos de entrada](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects) se pueden describir como "objetos que admiten composición" porque incluyen un conjunto de campos de entrada que definen el objeto.

Por ejemplo, [`CommitAuthor`](/graphql/reference/input-objects#commitauthor) toma un campo denominado `emails`. Proporcionar un valor para `emails` transforma `CommitAuthor` en una lista de objetos `User` que contienen esa dirección de correo electrónico. Tenga en cuenta que los [objetos](/graphql/reference/objects) **pueden** tener objetos de entrada, mientras que en el caso de las [mutaciones](/graphql/reference/mutations), los objetos de entrada son **obligatorios**.

Para más información, consulte "[Acerca de las mutaciones](/graphql/guides/forming-calls-with-graphql#about-mutations)".

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
