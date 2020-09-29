---
title: Revisar datos de migración
intro: 'Después de cada paso de una migración, puedes revisar el estado de los datos de migración. Podrás asegurarte de que los registros se asignen o renombren correctamente, obtener las nuevas url para los registros después del paso de importación, así como una lista de los registros que no se pudieron migrar.'
redirect_from:
  - '/enterprise/{{ currentVersion }}/admin/guides/migrations/reviewing-the-imported-data/'
  - /enterprise/admin/migrations/reviewing-migration-data
versions:
  enterprise-server: '*'
---

De forma predeterminada, `ghe-migrator audit` devuelve todos los registros. También te permite filtrar los registros por:

  * Los tipos de registros.
  * El estado de los registros.

Los tipos de registro coinciden con los encontrados en los [datos migrados](/enterprise/admin/guides/migrations/about-migrations/#migrated-data).

### Filtros de tipo de registro

| Tipo de registro                                                | Nombre del filtro                                   |
| --------------------------------------------------------------- | --------------------------------------------------- |
| Usuarios                                                        | `usuario`                                           |
| Organizaciones                                                  | `organización`                                      |
| Repositorios                                                    | `repositorio`                                       |
| Equipos                                                         | `equipo`                                            |
| Hitos                                                           | `hito`                                              |
| Tableros de proyecto                                            | `project`                                           |
| Problemas                                                       | `propuesta`                                         |
| Comentarios de propuestas                                       | `comentario_propuesta`                              |
| Solicitudes de extracción                                       | `solicitud_extracción`                              |
| Revisiones de solicitudes de extracción                         | `revisión_solicitud de extracción`                  |
| Comentarios sobre confirmación de cambios                       | `comentario_confirmación de cambios`                |
| Comentarios sobre revisiones de solicitudes de extracción       | `comentarios _revisiones_solicitudes de extracción` |
| Lanzamientos                                                    | `lanzamiento`                                       |
| Medidas adoptadas en las solicitudes de extracción o propuestas | `evento_propuesta`                                  |
| Ramas protegidas                                                | `rama_protegida`                                    |

### Filtros de estado de registro

| Estado de registro    | Descripción                        |
| --------------------- | ---------------------------------- |
| `exportar`            | El registro se exportará.          |
| `importar`            | El registro se importará.          |
| `asignar`             | El registro se asignará.           |
| `renombrar`           | El registro se renombrará.         |
| `fusionar`            | El registro se fusionará.          |
| `exportado`           | El registro se exportó con éxito.  |
| `importado`           | El registro se importó con éxito.  |
| `asignado`            | El registro se asignó con éxito.   |
| `renombrado`          | El registro se renombró con éxito. |
| `fusionado`           | El registro se fusionó con éxito.  |
| `exportación_fallida` | El registro no se pudo exportar.   |
| `importación_fallida` | El registro no se pudo importar.   |
| `asignación_fallida`  | El registro no se pudo asignar.    |
| `renombrar_fallido`   | El registro no se pudo renombrar.  |
| `fusión_fallida`      | El registro no se pudo fusionar.   |

### Filtrar registros auditados

Con el comando de auditoría `ghe-migrator audit` puedes filtrar en función del tipo de registro mediante el indicador `-m`. Del mismo modo, puedes filtrar en el estado de importación mediante el indicador `-s`. El comando se ve de la siguiente manera:

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

Por ejemplo, para ver cada organización y equipo importados con éxito, debes ingresar:
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**Te recomendamos encarecidamente que hagas una auditoría de todas las importaciones que fallaron.** Para ello, ingresa en:
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

Si tienes alguna duda sobre las importaciones fallidas, comunícate con {% data variables.contact.contact_ent_support %}.
