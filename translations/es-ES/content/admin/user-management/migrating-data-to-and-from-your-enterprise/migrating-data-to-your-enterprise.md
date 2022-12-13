---
title: Migrar datos a tu empresa
intro: 'Después de generar un archivo de migración, puedes importar los datos a tu instancia de destino del {% data variables.product.prodname_ghe_server %}. Podrás revisar los cambios para detectar posibles conflictos antes de aplicar de manera permanente los cambios a tu instancia de destino.'
redirect_from:
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise
  - /enterprise/admin/migrations/applying-the-imported-data-on-github-enterprise-server
  - /enterprise/admin/migrations/reviewing-migration-data
  - /enterprise/admin/migrations/completing-the-import-on-github-enterprise-server
  - /enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise
  - /enterprise/admin/guides/migrations/reviewing-the-imported-data
  - /enterprise/admin/guides/migrations/completing-the-import-on-github-enterprise
  - /enterprise/admin/guides/migrations/importing-migration-data-to-github-enterprise-server
  - /enterprise/admin/user-management/migrating-data-to-your-enterprise
  - /admin/user-management/migrating-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Import to your enterprise
ms.openlocfilehash: 19bd9e1e8cee072e8a8f00861e2d8f876b5b8450
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717673'
---
## Aplicar los datos importados en {% data variables.product.prodname_ghe_server %}

Antes de que puedas migrar los datos a tu empresa, debes prepararlos y resolver cualquier conflicto. Para más información, vea "[Preparación para migrar datos a la empresa](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)".

Después de que prepares los datos y resuelvas conflictos, puedes aplicar los datos importados en {% data variables.product.product_name %}.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. Con el comando `ghe-migrator import`, inicie el proceso de importación. Necesitará:
    * El GUID de migración. Para más información, vea "[Preparación para migrar datos a la empresa](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)".
    * Tu token de acceso personal para autenticación. El token de acceso personal que utilices es solo para autenticación como administrador de sitio, y no requiere ningún alcance específico. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Revisar datos de migración

De forma predeterminada, `ghe-migrator audit` devuelve todos los registros. También te permite filtrar los registros por:

  * Los tipos de registros.
  * El estado de los registros.

Los tipos de registro coinciden con los encontrados en los [datos migrados](/enterprise/admin/guides/migrations/about-migrations/#migrated-data).

## Filtros de tipo de registro

|      Tipo de registro      | Nombre de filtro  |
|-----------------------|--------|
| Usuarios           | `user`
| Las organizaciones   | `organization`
| Repositorios    | `repository`
| Teams           | `team`
| Hitos      | `milestone`
| Tableros de proyecto  | `project`
| Issues          | `issue`
| Comentarios de propuestas  | `issue_comment`
| Solicitudes de incorporación de cambios   | `pull_request`
| Revisiones de solicitudes de extracción | `pull_request_review`
| Comentarios sobre confirmación de cambios | `commit_comment`
| Comentarios sobre revisiones de solicitudes de extracción | `pull_request_review_comment`
| Versiones | `release`
| Medidas adoptadas en las solicitudes de extracción o propuestas | `issue_event`
| Ramas protegidas | `protected_branch`

## Filtros de estado de registro

| Estado de registro    | Descripción    |
|-----------------|----------------|
| `export`        | El registro se exportará. |
| `import`        | El registro se importará. |
| `map`           | El registro se asignará. |
| `rename`        | El registro se renombrará. |
| `merge`         | El registro se fusionará. |
| `exported`      | El registro se exportó con éxito. |
| `imported`      | El registro se importó con éxito. |
| `mapped`        | El registro se asignó con éxito. |
| `renamed`       | El registro se renombró con éxito. |
| `merged`        | El registro se fusionó con éxito. |
| `failed_export` | El registro no se pudo exportar. |
| `failed_import` | El registro no se pudo importar. |
| `failed_map`    | El registro no se pudo asignar. |
| `failed_rename` | El registro no se pudo renombrar. |
| `failed_merge`  | El registro no se pudo fusionar. |

## Filtrar registros auditados

Con el comando `ghe-migrator audit`, puede filtrar según el tipo de registro mediante la marca `-m`. Del mismo modo, puede filtrar por el estado de importación mediante la marca `-s`. El comando tiene este aspecto:

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

Por ejemplo, para ver cada organización y equipo importados con éxito, debes ingresar:
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**Se recomienda encarecidamente auditar todas las importaciones con errores.** Para ello, escribirá lo siguiente:
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

Si tienes alguna duda sobre las importaciones fallidas, comunícate con {% data variables.contact.contact_ent_support %}.

## Completar la importación en {% data variables.product.prodname_ghe_server %}

Después de que se aplique tu migración a tu instancia destino y la hayas revisado, desbloquearás los repositorios y los borrarás del origen. Antes de eliminar los datos de origen, se recomienda esperar alrededor de dos semanas para asegurarse de que todo funciona de acuerdo con lo esperado.

## Desbloquear repositorios en la instancia de destino

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}

## Desbloquear repositorios en el origen

### Desbloquear los repositorios de una organización en {% data variables.product.prodname_dotcom_the_website %}

Para desbloquear los repositorios en una organización de {% data variables.product.prodname_dotcom_the_website %}, enviará una solicitud `DELETE` al [punto de conexión de desbloqueo de migración](/free-pro-team@latest/rest/migrations#unlock-an-organization-repository). Necesitará:
  * Tu token de acceso para autenticación
  * `id` único de la migración
  * El nombre del repositorio a desbloquear
```shell
curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

### Borrar los repositorios de una organización en {% data variables.product.prodname_dotcom_the_website %}

Después de desbloquear los repositorios de la organización de {% data variables.product.prodname_dotcom_the_website %}, tendrá que borrar todos los repositorios que haya migrado antes mediante [el punto de conexión de eliminación de repositorios](/rest/repos/#delete-a-repository). Necesitarás tu token de acceso para la autenticación:
```shell
curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

### Desbloquear repositorios desde una instancia de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}
