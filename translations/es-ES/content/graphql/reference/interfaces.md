---
title: Interfaces
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: de0a12e638a7f98f34b1704e272b040a6178eaeb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496616'
---
## Acerca de las interfaces

[Las interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) sirven como objetos primarios de los que otros objetos pueden heredar.

Por ejemplo, [`Lockable`](/graphql/reference/interfaces#lockable) es una interfaz porque los objetos [`Issue`](/graphql/reference/objects#issue) y [`PullRequest`](/graphql/reference/objects#pullrequest) se pueden bloquear. Una interface tiene su propia lista de campos nombrados que se comparte mediante objetos de implementación.

Para más información, vea "[Implementación](/graphql/guides/introduction-to-graphql#implementation)".

<!-- Content after this section is automatically generated -->
