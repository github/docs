---
title: Usuarios
intro: The Users migrations API is only available to authenticated account owners.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Para obtener más información, consulta la sección "[Otros métodos de autenticación](/rest/overview/other-authentication-methods)".

{% data variables.migrations.user_migrations_intro %} Para encontrar una lista descargable de datos de migración, consulta "[Descarga un archivo de migración de usuario](#download-a-user-migration-archive)".

Antes de descargar un archivo deberás iniciar la migración del usuario. Una vez que el estado de la migración sea `exported`, podrás descargarla.

Ya que hayas creado el archivo de migración, este estará disponible para su descarga por siete días. Pero puedes borrar el archivo de migración del usuario antes si lo prefieres. Puedes desbloquear tu repositorio cuando la migración aparezca como `exported` para comenzar a utilizar tu repositorio nuevamente o borrarlo si ya no necesitas los datos del código fuente.
