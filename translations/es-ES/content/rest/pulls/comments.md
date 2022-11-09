---
title: Comentarios sobre revisiones de solicitudes de extracción
shortTitle: Review comments
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6d49aa3d5bca7f74a21c1cce32cecd38abe9366d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067734'
---
## Acerca de Pull request review comments API

Los comentarios de revisión de las solicitudes de extracción son comentarios de una porción de la diff unificada durante la revisión de esta solicitud. Los comentarios de confirmación y comentarios de la solicitud de extracción son diferentes de aquellos sobre la revisión de estas solicitudes. Se aplican comentarios de confirmación directamente a un confirmación, así como se aplican comentarios del informe de problemas sin referenciar una porción de la diff unificada. Para más información, vea "[Creación de un comentario de confirmación](/rest/reference/commits#create-a-commit-comment)" y "[Creación de un comentario de incidencia](/rest/reference/issues#create-an-issue-comment)".

### Tipos de medios personalizados para los comentarios sobre las revisiones de las solicitudes de extracción

Estos son los tipos de medios compatibles para los comentarios sobre las revisiones de las solicitudes de exstracción.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Para más información, vea "[Tipos de medios personalizados](/rest/overview/media-types)".
