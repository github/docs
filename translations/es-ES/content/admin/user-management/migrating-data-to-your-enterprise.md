---
title: Migrar datos a tu empresa
intro: 'Después de generar un archivo de migración, puedes importar los datos a tu instancia de destino del {% data variables.product.prodname_ghe_server %}. Podrás revisar los cambios para detectar posibles conflictos antes de aplicar de manera permanente los cambios a tu instancia de destino.'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise/
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise/
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data/
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise/
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server/
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
versions:
  enterprise-server: '*'
---

### Aplicar los datos importados en {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. Con el comando `ghe-migrator import`, inicia el proceso de importación. Necesitarás:
    * Tu GUID de migración.
    * Tu token de acceso personal para autenticación. El token de acceso personal que utilices es solo para autenticación como administrador de sitio, y no requiere ningún alcance específico. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Comenzando con GitHub::Migrador
    > Importación 100 % completa /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

### Revisar datos de migración

De forma predeterminada, `ghe-migrator audit` devuelve todos los registros. También te permite filtrar los registros por:

  * Los tipos de registros.
  * El estado de los registros.

Los tipos de registro coinciden con los encontrados en los [datos migrados](/enterprise/admin/guides/migrations/about-migrations/#migrated-data).

### Filtros de tipo de registro

| Tipo de registro                                                | Nombre del filtro                                   |
| --------------------------------------------------------------- | --------------------------------------------------- |
| Usuarios                                                        | `user`                                              |
| Organizaciones                                                  | `organization`                                      |
| Repositorios                                                    | `repositorio`                                       |
| Equipos                                                         | `team`                                              |
| Hitos                                                           | `milestone`                                         |
| Tableros de proyecto                                            | `project`                                           |
| Problemas                                                       | `issue`                                             |
| Comentarios de propuestas                                       | `comentario_propuesta`                              |
| Solicitudes de cambios                                          | `solicitud_extracción`                              |
| Revisiones de solicitudes de extracción                         | `revisión_solicitud de extracción`                  |
| Comentarios sobre confirmación de cambios                       | `comentario_confirmación de cambios`                |
| Comentarios sobre revisiones de solicitudes de extracción       | `comentarios _revisiones_solicitudes de extracción` |
| Lanzamientos                                                    | `release`                                           |
| Medidas adoptadas en las solicitudes de extracción o propuestas | `evento_propuesta`                                  |
| Ramas protegidas                                                | `rama_protegida`                                    |

### Filtros de estado de registro

| Estado de registro    | Descripción                        |
| --------------------- | ---------------------------------- |
| `exportar`            | El registro se exportará.          |
| `importar`            | El registro se importará.          |
| `asignar`             | El registro se asignará.           |
| `rename (renombrar)`  | El registro se renombrará.         |
| `merge`               | El registro se fusionará.          |
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

### Completar la importación en {% data variables.product.prodname_ghe_server %}

Después de que se aplique tu migración a tu instancia destino y la hayas revisado, desbloquearás los repositorios y los borrarás del origen. Antes de eliminar los datos de origen, se recomienda esperar alrededor de dos semanas para asegurarse de que todo funciona de acuerdo con lo esperado.

### Desbloquear repositorios en la instancia de destino

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### Desbloquear repositorios en el origen

#### Desbloquear los repositorios de una organización en {% data variables.product.prodname_dotcom_the_website %}

Para desbloquear los repositorios en una organización{% data variables.product.prodname_dotcom_the_website %}, debes enviar una solicitud de `DELETE` <a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">al punto final de desbloqueo de migración</a>. Necesitarás:
  * Tu token de acceso para autenticación
  * El `id` único de la migración
  * El nombre del repositorio a desbloquear
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### Borrar los repositorios de una organización en {% data variables.product.prodname_dotcom_the_website %}

Después de desbloquear los repositorios de organización de {% data variables.product.prodname_dotcom_the_website %} deberás borrar todos los repositorios que migraste previamente utilizando [la terminal de borrado de repositorios](/rest/reference/repos/#delete-a-repository). Necesitarás tu token de acceso para la autenticación:
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### Desbloquear repositorios desde una instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
