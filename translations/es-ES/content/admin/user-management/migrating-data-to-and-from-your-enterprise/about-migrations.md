---
title: Acerca de las migraciones
intro: 'Una migración es un proceso de transferencia de datos desde una ubicación *origen* (ya sea una organización {% data variables.product.prodname_dotcom_the_website %} o una instancia {% data variables.product.prodname_ghe_server %}) a una instancia *objetivo* {% data variables.product.prodname_ghe_server %}. Las migraciones se pueden utilizar para la transferencia de datos al cambiar de plataforma o actualizar el hardware en la instancia.'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
  - /admin/user-management/about-migrations
versions:
  enterprise-server: '*'
type: overview
topics:
  - Enterprise
  - Migration
---

### Tipos de migraciones

Existen tres tipos de migraciones que se pueden realizar:

- Una migración de una instancia {% data variables.product.prodname_ghe_server %} a otra instancia {% data variables.product.prodname_ghe_server %}. Puedes migrar la cantidad de repositorios que desees de cualquier usuario u organización en la instancia. Antes de hacer una migración, debes tener acceso de administrador del sitio en ambas instancias.
- Una migración de una organización {% data variables.product.prodname_dotcom_the_website %} a una instancia {% data variables.product.prodname_ghe_server %}. Puedes migrar la cantidad de repositorios de la organización que desees. Antes de efectuar una migración, debes tener [ acceso administrativo ](/enterprise/user/articles/permission-levels-for-an-organization/) a la organización {% data variables.product.prodname_dotcom_the_website %}, así como acceso de administrador del sitio a la instancia de destino.
- *Las ejecuciones de prueba *son migraciones que importan datos a una [instancia de preparación](/enterprise/admin/guides/installation/setting-up-a-staging-instance/). Estas pueden ser útiles para ver qué *sucedería* si se aplicara una migración {% data variables.product.product_location %}. **Se recomienda encarecidamente que se lleve a cabo una ejecución de prueba en una instancia de preparación antes de importar datos a la instancia de producción.**

### Datos migrados

En una migración, todo gira en torno a un repositorio. La mayoría de los datos asociados con un repositorio se pueden migrar. Por ejemplo, un repositorio dentro de una organización migrará el repositorio *y* la organización, así como los usuarios, equipos, propuestas y solicitudes de extracción asociados con el repositorio.

Los elementos de la tabla a continuación se pueden migrar con un repositorio. Los elementos que no se muestren en la lista de datos migrados no se pueden migrar.

{% data reusables.enterprise_migrations.fork-persistence %}

| Datos asociados con un repositorio migrado                      | Notas                                                                                                                                                                                                                              |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Usuarios                                                        | Las **@menciones** de los usuarios se reescriben para coincidir con el objetivo.                                                                                                                                                   |
| Organizaciones                                                  | El nombre y los datos de una organización se migran.                                                                                                                                                                               |
| Repositorios                                                    | Los enlaces a árboles Git, blobs, confirmaciones de cambios y líneas se reescriben para coincidir con el objetivo. El migrador sigue un máximo de tres redirecciones de repositorio.                                               |
| Wikis                                                           | Todos los datos de la wiki se migran.                                                                                                                                                                                              |
| Equipos                                                         | Las **@menciones** de los equipos se reescriben para coincidir con el objetivo.                                                                                                                                                    |
| Hitos                                                           | Los registros horarios se conservan.                                                                                                                                                                                               |
| Tableros de proyecto                                            | Los tableros de proyectos asociados con el repositorio y con la organización que posee el repositorio se migran.                                                                                                                   |
| Problemas                                                       | Las referencias de propuestas y los registros horarios se conservan.                                                                                                                                                               |
| Comentarios de propuestas                                       | Las referencias cruzadas a los comentarios se reescriben para la instancia de destino.                                                                                                                                             |
| Solicitudes de cambios                                          | Las referencias cruzadas a las solicitudes de extracción se reescriben para coincidir con el objetivo. Los registros horarios se conservan.                                                                                        |
| Revisiones de solicitudes de extracción                         | Las revisiones de solicitudes de extracción y los datos asociados se migran.                                                                                                                                                       |
| Comentarios sobre revisiones de solicitudes de extracción       | Las referencias cruzadas a los comentarios se reescriben para la instancia de destino. Los registros horarios se conservan.                                                                                                        |
| Comentarios sobre confirmación de cambios                       | Las referencias cruzadas a los comentarios se reescriben para la instancia de destino. Los registros horarios se conservan.                                                                                                        |
| Lanzamientos                                                    | Todos los datos de las versiones se migran.                                                                                                                                                                                        |
| Medidas adoptadas en las solicitudes de extracción o propuestas | Todas las modificaciones a las solicitudes de extracción o propuestas, como la asignación de usuarios, el cambio de nombre de título y la modificación de etiquetas se conservan, junto con los registros horarios de cada acción. |
| Archivos adjuntos                                               | [Los archivos adjuntos a las propuestas y las solicitudes de extracción](/articles/file-attachments-on-issues-and-pull-requests) se migran. Puedes elegir inhabilitar esta opción como parte de la migración.                      |
| Webhooks                                                        | Solo se migran los webhooks activos.                                                                                                                                                                                               |
| Llaves de implementación de repositorios                        | Las llaves de implementación de repositorios se migran.                                                                                                                                                                            |
| Ramas protegidas                                                | La configuración de las ramas protegidas y los datos asociados se migran.                                                                                                                                                          |
