---
title: Tags do Git
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'Use a API REST para interagir com objetos de tag em seu banco de dados Git em {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0d0a10afabf100cb34a0061585b87b17d5afc416
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192886'
---
## Sobre tags Git

Uma tag do Git é semelhante a uma [referência do Git](/rest/reference/git#refs), mas o commit do Git para o qual ela aponta nunca muda. As tags do Git são úteis quando você deseja apontar para versões específicas. Esses pontos de extremidade permitem que você leia e grave [objetos de marca](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags) no banco de dados do Git do {% data variables.product.product_name %}. A API tem suporte apenas para [objetos de tag anotados](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags), não tags leves.
