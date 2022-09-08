---
title: Tags do Git
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'A API de tags do Git permite que você leia e grave objetos de tag no banco de dados do Git no {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d0ba994be564467d3b84744e6618417b927828aa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126782'
---
## Sobre a API de Tags do Git

Uma tag do Git é semelhante a uma [referência do Git](/rest/reference/git#refs), mas o commit do Git para o qual ela aponta nunca muda. As tags do Git são úteis quando você deseja apontar para versões específicas. Esses pontos de extremidade permitem que você leia e grave [objetos de marca](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags) no banco de dados do Git do {% data variables.product.product_name %}. A API de tags do Git só dá suporte a [objetos de tag anotados](https://git-scm.com/book/en/v1/Git-Internals-Git-References#Tags), não a tags leves.
