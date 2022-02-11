---
title: Confirmaciones
intro: 'The commits API allows you to list, view, and compare commits in a repository. You can also interact with commit comments and commit statuses.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Comentarios sobre confirmación de cambios

### Tipos de medios personalizados para los comentarios de las confirmaciones

Estos son los tipos de medios compatibles para los comentarios de las confirmaciones. Puedes leer más sobre el uso de tipos de medios en la API [aquí](/rest/overview/media-types).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

Para obtener más información, consulta la sección "[Tipos de medios personalizados](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Estados de confirmación

La API de estados permite que los servicios externos marquen las confirmaciones con un estado de `error`, `failure`, `pending`, o `success`, el cual se refleja después en las solicitudes de extracción que involucran a esas confirmaciones.

Los estados también incluyen una `description` y una `target_url` opcionales, y recomendamos ampliamente proporcionarlas, ya que hacen mucho más útiles a los estados en la IU de GitHub.

Como ejemplo, un uso común es que los servicios de integración contínua marquen a las confirmaciones como compilaciones que pasan o fallan utilizando los estados.  La `target_url` sería la URL completa de la salida de la compilación, y la `description` sería el resumen de alto nivel de lo que pasó con la compilación.

Los estados pueden incluir un `context` para indicar qué servicio está proporcionando ese estado. Por ejemplo, puedes hacer que tu servicio de integración continua cargue estados con un contexto de `ci`, y que una herramienta de auditoria de seguridad cargue estados con un contexto de `security`.  Puedes utilizar entonces el [Obtener el estado combinado para una referencia específica](/rest/reference/commits#get-the-combined-status-for-a-specific-reference) para recuperar todo el estado de una confirmación.

Toma en cuenta que el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps) de `repo:status` otorga acceso dirigido a los estados **sin** otorgar también el acceso al código del repositorio, mientras que el alcance `repo` otorga permisos para el código y también para los estados.

Si estás desarrollando una GitHub App y quieres proporcionar información más detallada sobre un servicio externo, tal vez quieras utilizar la [API de Verificaciones](/rest/reference/checks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statuses' %}{% include rest_operation %}{% endif %}
{% endfor %}
