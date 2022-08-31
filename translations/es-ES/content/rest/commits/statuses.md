---
title: Estados de confirmación
intro: 'La API de estados de las confirmaciones permite que los servicios externos marquen las confirmaciones con estados, lo que se refleja posteriormente en las solicitudes de cambio que involucran dichas confirmaciones.'
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

## Acerca de la API de estados de las confirmaciones

La API de estados de confirmaciones permite que los servicios externos marquen las confirmaciones con un estado de `error`, `failure`, `pending` o `success`, lo que se refleja entonces en las solicitudes de cambios que involucran a dichas confirmaciones. Los estados también pueden incluir una `description` y `target_url` opcionales y recomendamos ampliamente proporcionarlas, ya que hacen que los estados sean mucho más útiles en la IU de GitHub.

Como ejemplo, un uso común es que los servicios de integración continua marquen las confirmaciones como compilaciones que pasan o fallan utilizando los estados.  La `target_url` será la URL completa para la salida de la compilación y la `description` será el resumen de alto nivel de lo que pasó con la compilación.

Los estados pueden incluir un `context` para indicar qué servicio está proporcionando ese estado. Por ejemplo, puedes hacer que tu servicio de integración continua cargue estados con un contexto de `ci`, y que una herramienta de auditoria de seguridad cargue estados con un contexto de `security`.  Puedes utilizar entonces la función de [Obtener el estado combinado para una referencia específica](/rest/reference/commits#get-the-combined-status-for-a-specific-reference) para recuperar todo el estado de una confirmación.

Toma en cuenta que el [alcance de OAuth](/developers/apps/scopes-for-oauth-apps) de `repo:status` otorga acceso dirigido a los estados **sin** otorgar también el acceso al código del repositorio, mientras que el alcance `repo` otorga permisos para el código y también para los estados.

Si estás desarrollando una GitHub App y quieres proporcionar información más detallada sobre un servicio externo, tal vez quieras utilizar la [API de Verificaciones](/rest/reference/checks).
