---
title: Blobs do Git
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'Use a API REST para interagir com um Git blob (objeto binário grande), o tipo de objeto usado para armazenar o conteúdo de cada arquivo em um repositório.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b29c69d2635e20720d23aad62c7aa88984cff984
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192718'
---
## Sobre blobs do Git

Um blob (objeto binário grande) do Git é o tipo de objeto usado para armazenar o conteúdo de cada arquivo em um repositório. O hash SHA-1 do arquivo é calculado e armazenado no objeto do blob. Esses pontos de extremidade permitem que você leia e grave [objetos de blob](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) no banco de dados do Git no {% data variables.product.product_name %}. Os blobs aproveitam [estes tipos de mídia personalizados](#custom-media-types-for-blobs). Leia mais sobre o uso de tipos de mídia na API [aqui](/rest/overview/media-types).

### Tipos de mídia personalizados para os blobs

Estes são os tipos de mídia compatíveis com blobs.

    application/json
    application/vnd.github.raw

Para obter mais informações, confira "[Tipos de mídia](/rest/overview/media-types)".
