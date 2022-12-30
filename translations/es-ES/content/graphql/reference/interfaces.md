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
ms.openlocfilehash: a6fed36ccd70557b8d88904f83840a7afacdfacb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109930'
---
## Acerca de las interfaces

[Las interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) sirven como objetos primarios de los que otros objetos pueden heredar.

Por ejemplo, [`Lockable`](/graphql/reference/interfaces#lockable) es una interfaz porque los objetos [`Issue`](/graphql/reference/objects#issue) y [`PullRequest`](/graphql/reference/objects#pullrequest) se pueden bloquear. Una interface tiene su propia lista de campos nombrados que se comparte mediante objetos de implementación.

Para más información, vea "[Implementación](/graphql/guides/introduction-to-graphql#implementation)".

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
