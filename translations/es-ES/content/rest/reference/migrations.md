---
title: Migraciones
redirect_from:
  - /v3/migrations
  - /v3/migration
  - /v3/migration/migrations
versions:
  free-pro-team: '*'
topics:
  - api
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Organización

La API de Migraciones solo está disponible para los propietarios autenticados de la organización. Para obtener más información, consulta las secciones "[Niveles de permiso para una organización](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#permission-levels-for-an-organization)." y "[Otros métodos de autenticación](/rest/overview/other-authentication-methods)".

{% data variables.migrations.organization_migrations_intro %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Importaciones de Código Fuente

{% data variables.migrations.source_imports_intro %}

Una importación de código fuente habitual inicia la importación y luego actualiza (opcionalmente) a los autores y/o actualiza las preferencias para utilizar el LFS de Ggit si existen archivos grandes en la importación. También puedes crear un webhook que escuche al [`RepositoryImportEvent`](/developers/webhooks-and-events/webhook-events-and-payloads#repository_import) para encontrar el estado de la importación.

Se puede ver un ejemplo más detallado en este diagrama:

```
+---------+                     +--------+                              +---------------------+
| Tooling |                     | GitHub |                              | Original Repository |
+---------+                     +--------+                              +---------------------+
     |                              |                                              |
     |  Start import                |                                              |
     |----------------------------->|                                              |
     |                              |                                              |
     |                              |  Download source data                        |
     |                              |--------------------------------------------->|
     |                              |                        Begin streaming data  |
     |                              |<---------------------------------------------|
     |                              |                                              |
     |  Get import progress         |                                              |
     |----------------------------->|                                              |
     |       "status": "importing"  |                                              |
     |<-----------------------------|                                              |
     |                              |                                              |
     |  Get commit authors          |                                              |
     |----------------------------->|                                              |
     |                              |                                              |
     |  Map a commit author         |                                              |
     |----------------------------->|                                              |
     |                              |                                              |
     |                              |                                              |
     |                              |                       Finish streaming data  |
     |                              |<---------------------------------------------|
     |                              |                                              |
     |                              |  Rewrite commits with mapped authors         |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |                              |  Update repository on GitHub                 |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |  Map a commit author         |                                              |
     |----------------------------->|                                              |
     |                              |  Rewrite commits with mapped authors         |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |                              |  Update repository on GitHub                 |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |  Get large files             |                                              |
     |----------------------------->|                                              |
     |                              |                                              |
     |  opt_in to Git LFS           |                                              |
     |----------------------------->|                                              |
     |                              |  Rewrite commits for large files             |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |                              |  Update repository on GitHub                 |
     |                              |------+                                       |
     |                              |      |                                       |
     |                              |<-----+                                       |
     |                              |                                              |
     |  Get import progress         |                                              |
     |----------------------------->|                                              |
     |        "status": "complete"  |                                              |
     |<-----------------------------|                                              |
     |                              |                                              |
     |                              |                                              |
```

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'source-imports' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Usuario

La API de migraciones de usuario solo está disponible para los propietarios de cuentas autenticadas. Para obtener más información, consulta la sección "[Otros métodos de autenticación](/rest/overview/other-authentication-methods)".

{% data variables.migrations.user_migrations_intro %} Para encontrar una lista descargable de datos de migración, consulta "[Descarga un archivo de migración de usuario](#download-a-user-migration-archive)".

Antes de descargar un archivo deberás iniciar la migración del usuario. Una vez que el estado de la migración sea `exported`, podrás descargarla.

Ya que hayas creado el archivo de migración, este estará disponible para su descarga por siete días. Pero puedes borrar el archivo de migración del usuario antes si lo prefieres. Puedes desbloquear tu repositorio cuando la migración aparezca como `exported` para comenzar a utilizar tu repositorio nuevamente o borrarlo si ya no necesitas los datos del código fuente.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'users' %}{% include rest_operation %}{% endif %}
{% endfor %}
