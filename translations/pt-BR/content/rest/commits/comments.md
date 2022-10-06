---
title: Comentários de commit
intro: A API de comentários de confirmação permite criar e editar comentários relacionados a confirmações específicas.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e959f04a9df15d2d9ce2765d2669cce7e8de0e5b
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147065343'
---
## Sobre a API de comentários de confirmação

A API de comentários de confirmação permite criar e editar comentários relacionados a confirmações específicas.

### Tipos de mídia personalizados para comentários de commit

Estes são os tipos de mídia compatíveis com os comentários do commit. Leia mais sobre o uso de tipos de mídia na API [aqui](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

Para obter mais informações, confira "[Tipos de mídia personalizados](/rest/overview/media-types)".
