---
title: Comentarios sobre confirmación de cambios
intro: Commit comments API permite crear y editar comentarios relacionados con confirmaciones específicas.
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065350'
---
## Acerca de Commit comments API

Commit comments API permite crear y editar comentarios relacionados con confirmaciones específicas.

### Tipos de medios personalizados para los comentarios de las confirmaciones

Estos son los tipos de medios compatibles para los comentarios de las confirmaciones. [Aquí](/rest/overview/media-types) puede obtener más información sobre el uso de los tipos de medios en la API.

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

Para más información, vea "[Tipos de medios personalizados](/rest/overview/media-types)".
