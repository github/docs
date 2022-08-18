---
title: Comentarios sobre confirmación de cambios
intro: La API de comentarios de confirmaciones te permite crear y editar los comentarios que se relacionan con confirmaciones específicas.
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

## About the commit comments API

La API de comentarios de confirmaciones te permite crear y editar los comentarios que se relacionan con confirmaciones específicas.

### Tipos de medios personalizados para los comentarios de las confirmaciones

Estos son los tipos de medios compatibles para los comentarios de las confirmaciones. Puedes leer más sobre el uso de tipos de medios en la API [aquí](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

Para obtener más información, consulta la sección "[Tipos de medios personalizados](/rest/overview/media-types)".
