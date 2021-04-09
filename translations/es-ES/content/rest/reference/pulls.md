---
title: Extracciones
redirect_from:
  - /v3/pulls
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
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

<a id="diff-error">

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
| `estados`         | La ubicación de la API para los [estados de las confirmaciones](/rest/reference/repos#statuses) de esta Solicitud de Extracción, los cuales son los estados de su rama `head`.                    |

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Revisiones

Las revisiones de las solicitudes de extracción son grupos de Comentarios de Revisión de las Solicitudes de Extracción en las mismas, los cuales se agrupan con un estado y, opcionalmente, con un comentario en el cuerpo.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'reviews' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comentarios de revisión

Los comentarios de revisión de las solicitudes de extracción son comentarios de una porción de la diff unificada durante la revisión de esta solicitud. Los comentarios de confirmación y comentarios de la solicitud de extracción son diferentes de aquellos sobre la revisión de estas solicitudes. Se aplican comentarios de confirmación directamente a un confirmación, así como se aplican comentarios del informe de problemas sin referenciar una porción de la diff unificada. Para obtener más información, consulta las secciones "[Crear un comentario sobre una confirmación](/rest/reference/git#create-a-commit)" y "[Crear un comentario sobre un informe de problemas](/rest/reference/issues#create-an-issue-comment)".

### Tipos de medios personalizados para los comentarios sobre las revisiones de las solicitudes de extracción

Estos son los tipos de medios compatibles para los comentarios sobre las revisiones de las solicitudes de exstracción.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Para obtener más información, consulta la sección "[Tipos de medios personalizados](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Solicitudes de revisión

Los autores de las solicitudes de extracción y los propietarios y colaboradores de los repositorios pueden solicitar una revisión de una solicitud de extracción a cualquiera con acceso de escritura en el repositorio. Cada revisor solicitado recibirá una notificación solicitándoles revisar la solicitud de extracción.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'review-requests' %}{% include rest_operation %}{% endif %}
{% endfor %}
