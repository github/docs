---
title: Blobs do Git
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'A API Blob do Git permite criar e obter um blob (objeto binário grande) do Git, o tipo de objeto usado para armazenar o conteúdo de cada arquivo em um repositório.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3b7cac6d268fb4c7e786651a7281ca5ce4241ec5
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181242'
---
## Sobre a API de blobs do Git

Um blob (objeto binário grande) do Git é o tipo de objeto usado para armazenar o conteúdo de cada arquivo em um repositório. O hash SHA-1 do arquivo é calculado e armazenado no objeto do blob. Esses pontos de extremidade permitem que você leia e grave [objetos de blob](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) no banco de dados do Git no {% data variables.product.product_name %}. Os blobs aproveitam [estes tipos de mídia personalizados](#custom-media-types-for-blobs). Leia mais sobre o uso de tipos de mídia na API [aqui](/rest/overview/media-types).

### Tipos de mídia personalizados para os blobs

Estes são os tipos de mídia compatíveis com blobs.

    application/json
    application/vnd.github.raw

Para obter mais informações, confira "[Tipos de mídia](/rest/overview/media-types)".
