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
---

La API de Solicitudes de Extracción te permite listar, ver, editar, crear e incluso fusionar solicitudes de extracción. Los comentarios en las solicitudes de extracción se pueden administrar a través de la [API de Comentarios de los Informes de Problemas](/rest/reference/issues#comments).

Cada solicitud de extracción es un informe de problemas, pero no todos los informes de problemas son una solicitud de extracción. Es por esto que las acciones "compartidas" para ambas características, como el manipular a los asignados, etiquetas e hitos, se proporcionan dentro de la [API de Informes de Problemas](/rest/reference/issues).

### Tipos de medios personalizados para las solicitudes de extracción

Estos son los tipos de medios compatibles para las solicitudes de extracción.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json
    application/vnd.github.VERSION.diff
    application/vnd.github.VERSION.patch

Para obtener más información, consulta la sección "[Tipos de medios personalizados](/rest/overview/media-types)".

Si existe alguna diff que se haya dañado, contacta a {% data variables.contact.contact_support %}. Incluye el nombre del repositorio y la ID de la solicitud de extracción en tu mensaje.

### Relaciones de los enlaces

Las solicitudes de extracción tienen estas posibles relaciones de enlaces:

| Nombre            | Descripción                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `self`            | La ubicación de la API para esta Solicitud de Extracción.                                                                                                                                         |
| `html`            | La ubicación de HTML para esta Solicitud de Extracción.                                                                                                                                           |
| `propuesta`       | La ubicación de la API para el [informe de problemas](/rest/reference/issues) de esta Solicitud de Extracción.                                                                                    |
| `comments`        | La ubicación de la API para los [Comentarios del informe de problemas](/rest/reference/issues#comments) de esta Solicitud de Extracción.                                                          |
| `review_comments` | La ubicación de la API para los [Comentarios de revisión](/rest/reference/pulls#comments) de esta Solicitud de Extracción.                                                                        |
| `review_comment`  | La [plantilla de URL](/rest#hypermedia) para construir la ubicación de la API para un [Comentario de revisión](/rest/reference/pulls#comments) en el repositorio de esta Solicitud de Extracción. |
| `commits`         | La ubicación de la API para las [confirmaciones](#list-commits-on-a-pull-request) de esta solicitud de extracción.                                                                                |
| `estados`         | La ubicación de la API para los [estados de las confirmaciones](/rest/reference/commits#commit-statuses) de esta Solicitud de Extracción, los cuales son los estados de su rama `head`.           |
