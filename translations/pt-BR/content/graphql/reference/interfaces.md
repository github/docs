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
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107884'
---
## Sobre interfaces

As [interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) servem como objetos pai dos quais outros objetos podem herdar.

Por exemplo, [`Lockable`](/graphql/reference/interfaces#lockable) é uma interface porque os objetos [`Issue`](/graphql/reference/objects#issue) e [`PullRequest`](/graphql/reference/objects#pullrequest) podem ser bloqueados. Uma interface possui sua própria lista de campos nomeados que são compartilhados mediante os objetos de implementação.

Para obter mais informações, confira "[Implementação](/graphql/guides/introduction-to-graphql#implementation)".

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
