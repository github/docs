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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496609'
---
## Sobre interfaces

As [interfaces](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces) servem como objetos pai dos quais outros objetos podem herdar.

Por exemplo, [`Lockable`](/graphql/reference/interfaces#lockable) é uma interface porque os objetos [`Issue`](/graphql/reference/objects#issue) e [`PullRequest`](/graphql/reference/objects#pullrequest) podem ser bloqueados. Uma interface possui sua própria lista de campos nomeados que são compartilhados mediante os objetos de implementação.

Para obter mais informações, confira "[Implementação](/graphql/guides/introduction-to-graphql#implementation)".

<!-- Content after this section is automatically generated -->
