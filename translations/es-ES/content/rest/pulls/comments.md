---
title: Review Comments
intro: Los comentarios de revisión de las solicitudes de extracción son comentarios de una porción de la diff unificada durante la revisión de esta solicitud.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

Los comentarios de confirmación y comentarios de la solicitud de extracción son diferentes de aquellos sobre la revisión de estas solicitudes. Se aplican comentarios de confirmación directamente a un confirmación, así como se aplican comentarios del informe de problemas sin referenciar una porción de la diff unificada. Para obtener más información, consulta las secciones "[Crear un comentario sobre una confirmación](/rest/reference/commits#create-a-commit-comment)" y "[Crear un comentario sobre un informe de problemas](/rest/reference/issues#create-an-issue-comment)".

### Tipos de medios personalizados para los comentarios sobre las revisiones de las solicitudes de extracción

Estos son los tipos de medios compatibles para los comentarios sobre las revisiones de las solicitudes de exstracción.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Para obtener más información, consulta la sección "[Tipos de medios personalizados](/rest/overview/media-types)".
