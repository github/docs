---
title: Extracciones
intro: 'La API de extracciones te permite listar, ver editar, crear e incluso fusionar las solicitudes de cambios.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 80e4a5a5257a8f2615b402567f91daa9e68a0077
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145126003'
---
## Acerca de la API de incorporación de cambios

La API de Solicitudes de Extracción te permite listar, ver, editar, crear e incluso fusionar solicitudes de extracción. Los comentarios sobre las solicitudes de incorporación de cambios se pueden administrar a través de la [API de comentarios de propuestas](/rest/reference/issues#comments).

Cada solicitud de extracción es un informe de problemas, pero no todos los informes de problemas son una solicitud de extracción. Es por esto que las acciones "compartidas" para ambas características, como el manipular a los asignados, las etiquetas y los hitos, se proporcionan dentro de la [API de propuestas](/rest/reference/issues).

### Tipos de medios personalizados para las solicitudes de extracción

Estos son los tipos de medios compatibles para las solicitudes de extracción.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

Para obtener más información, consulta "[Tipos de medios personalizados](/rest/overview/media-types)".

Si existe alguna diff que se haya dañado, contacta a {% data variables.contact.contact_support %}. Incluye el nombre del repositorio y la ID de la solicitud de extracción en tu mensaje.

### Relaciones de los enlaces

Las solicitudes de extracción tienen estas posibles relaciones de enlaces:

Nombre | Descripción
-----|-----------|
`self`| La ubicación de la API para esta Solicitud de Extracción.
`html`| La ubicación de HTML para esta Solicitud de Extracción.
`issue`| La ubicación de la API para la [propuesta](/rest/reference/issues) de esta solicitud de incorporación de cambios.
`comments`| La ubicación de la API para los [comentarios de propuestas](/rest/reference/issues#comments) de esta solicitud de incorporación de cambios.
`review_comments`| La ubicación de la API para los [comentarios de revisiones](/rest/reference/pulls#comments) de esta solicitud de incorporación de cambios.
`review_comment`| La [plantilla de dirección URL](/rest#hypermedia) para construir la ubicación de la API para un [comentario de revisión](/rest/reference/pulls#comments) en el repositorio de esta solicitud de incorporación de cambios.
`commits`|La ubicación de la API para las [confirmaciones](#list-commits-on-a-pull-request) de esta solicitud de incorporación de cambios.
`statuses`| La ubicación de la API de los [estados de confirmación](/rest/reference/commits#commit-statuses) de esta solicitud de incorporación de cambios, que son los estados de su rama `head`.
