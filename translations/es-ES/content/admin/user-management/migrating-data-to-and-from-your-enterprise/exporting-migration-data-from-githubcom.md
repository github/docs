---
title: Exportar datos de migración desde GitHub.com
intro: 'Puedes exportar los dtos de migración desde una organización en {% data variables.product.prodname_dotcom_the_website %} si utilizas la API para seleccionar los repositorios que deseas migrar y luego generas un archivo de migración que puedas importar en una instancia de {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-com
  - /enterprise/admin/migrations/exporting-migration-data-from-githubcom
  - /enterprise/admin/migrations/preparing-the-githubcom-source-organization
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-com-source-organization
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-githubcom
  - /admin/user-management/exporting-migration-data-from-githubcom
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export data from GitHub.com
ms.openlocfilehash: 07c74c41312fe5818390bba206072bf95e5bc00c
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717873'
---
## Preparar la orgnanización origen en {% data variables.product.prodname_dotcom %}

1. Asegúrese de que tiene [permisos de propietario](/articles/permission-levels-for-an-organization/) en los repositorios de la organización de origen.

2. {% data reusables.enterprise_migrations.token-generation %} en {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise_migrations.make-a-list %}

## Exportar los repositorios de la organización

{% data reusables.enterprise_migrations.fork-persistence %}

Para exportar datos de repositorio desde {% data variables.product.prodname_dotcom_the_website %}, use [Migrations API](/free-pro-team@latest/rest/migrations).

La API de Migraciones se encuentra actualmente en un período de previsualización, lo que significa que los puntos finales y los parámetros pueden cambiar en el futuro.
## Generar un archivo de migración

{% data reusables.enterprise_migrations.locking-repositories %}

1. Notifica a los miembros de tu organización que harás una migración. La exportación puede durar varios minutos, en función de la cantidad de repositorios que se exporten. La migración completa, incluida la importación, puede durar varias horas. Por lo tanto, te recomendamos que hagas una prueba para determinar cuánto tiempo tomará el proceso completo. Para más información, vea "[Acerca de las migraciones](/enterprise/admin/migrations/about-migrations#types-of-migrations)".

2. Para iniciar una migración, envíe una solicitud `POST` al [punto de conexión de migración](/free-pro-team@latest/rest/migrations#start-an-organization-migration). Necesitará:
    * Tu token de acceso para autenticación.
    * Una [lista de los repositorios](/free-pro-team@latest/rest/repos#list-organization-repositories) que quiere migrar:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  Si quiere bloquear los repositorios antes de migrarlos, asegúrese de que `lock_repositories` está establecido en `true`. Esto es altamente recomendable.
    * Puede excluir los datos adjuntos de archivo si pasa `exclude_attachments: true` al punto de conexión. {% data reusables.enterprise_migrations.exclude-file-attachments %} El tamaño final del archivo debe ser inferior a 20 GB.

  Esta solicitud devuelve un valor `id` único que representa la migración. Lo necesitarás para solicitudes posteriores a la API de Migraciones.

3. Envíe una solicitud `GET` al [punto de conexión de estado de migración](/free-pro-team@latest/rest/migrations#get-an-organization-migration-status) para capturar el estado de una migración. Necesitará:
    * Tu token de acceso para autenticación.
    * Valor `id` único de la migración:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  Una migración puede estar en uno de los siguientes estados:
    * `pending`, que significa que la migración todavía no se ha iniciado.
    * `exporting`, que significa que la migración está en curso.
    * `exported`, que significa que la migración ha finalizado correctamente.
    * `failed`, que significa que se ha producido un error en la migración.

4. Una vez que se exporte la migración, descargue el archivo de migración mediante el envío de una solicitud `GET` al [punto de conexión de descarga de migración](/free-pro-team@latest/rest/migrations#download-an-organization-migration-archive). Necesitará:
    * Tu token de acceso para autenticación.
    * Valor `id` único de la migración:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. El archivo de migración se elimina automáticamente después de siete días. Si prefiere eliminarla antes, puede enviar una solicitud `DELETE` al [punto de conexión de eliminación del archivo de migración](/free-pro-team@latest/rest/migrations#delete-an-organization-migration-archive). Necesitará:
    * Tu token de acceso para autenticación.
    * Valor `id` único de la migración:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X DELETE \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
