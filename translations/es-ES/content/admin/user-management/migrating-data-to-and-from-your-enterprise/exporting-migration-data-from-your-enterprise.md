---
title: Exportar los datos de migración de tu empresa
intro: 'Para cambiar las plataformas o migrarse de una instancia de pruebas a una productiva, puedes exportar los datos de migración de una instancia de {% data variables.product.prodname_ghe_server %} si preparas la instancia, bloqueas los repositorios, y generas un archivo de migración.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-enterprise
  - /enterprise/admin/migrations/exporting-migration-data-from-github-enterprise-server
  - /enterprise/admin/migrations/preparing-the-github-enterprise-server-source-instance
  - /enterprise/admin/migrations/exporting-the-github-enterprise-server-source-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-enterprise-source-instance
  - /enterprise/admin/guides/migrations/exporting-the-github-enterprise-source-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-your-enterprise
  - /admin/user-management/exporting-migration-data-from-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - API
  - Enterprise
  - Migration
shortTitle: Export from your enterprise
ms.openlocfilehash: 5bff2e21a493cc35448d68daf87aa87ed82a8a28
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145116202'
---
## Preparar la instancia origen de {% data variables.product.prodname_ghe_server %}

1. Verifica que eres un administrador del sitio en el origen {% data variables.product.prodname_ghe_server %}. La mejor manera de hacerlo es comprobar que puedes [conectarte mediante SSH a la instancia](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/).

2. {% data reusables.enterprise_migrations.token-generation %} en la instancia de origen {% data variables.product.prodname_ghe_server %}.

{% data reusables.enterprise_migrations.make-a-list %}

## Exportar los repositorios origen de {% data variables.product.prodname_ghe_server %}

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para preparar un repositorio para la exportación, usa el comando `ghe-migrator add` con la dirección URL del repositorio:
    * Si estás bloqueando el repositorio, anexa el comando con `--lock`. Si vas a realizar una ejecución de prueba, `--lock` no es necesario.
      ```shell
      $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>reponame</em> --lock
      ```
    * Puedes excluir los datos adjuntos de archivo anexando `--exclude_attachments` al comando. {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * Para preparar varios repositorios a la vez para la exportación, crea un archivo de texto que muestre cada dirección URL del repositorio en una línea y ejecuta el comando `ghe-migrator add` con la marca `-i` y la ruta de acceso al archivo de texto.
      ```shell
      $ ghe-migrator add -i <em>PATH</em>/<em>TO</em>/<em>YOUR</em>/<em>REPOSITORY_URLS</em>.txt
      ```

3. Cuando se te indique, ingresa tu nombre de usuario {% data variables.product.prodname_ghe_server %}:
  ```shell
  Enter username authorized for migration:  admin
  ```
4. Cuando se te solicite un token de acceso personal, escribe el token de acceso que creaste en "[Preparación de la instancia de origen de {% data variables.product.prodname_ghe_server %}](#preparing-the-github-enterprise-server-source-instance)":
  ```shell
  Enter personal access token:  **************
  ```
5. Cuando haya terminado `ghe-migrator add`, se imprimirá el único "GUID de migración" que se generó para identificar esta exportación, así como una lista de los recursos que se agregaron a la exportación. Usarás el GUID de migración generado en los pasos `ghe-migrator add` y `ghe-migrator export` posteriores para indicar a `ghe-migrator` que siga funcionando en la misma exportación.
  ```shell
  > 101 models added to export
  > Migration GUID: <em>example-migration-guid</em>
  > Number of records in this migration:
  > users                        |  5
  > organizations                |  1
  > repositories                 |  1
  > teams                        |  3
  > protected_branches           |  1
  > pull_request_reviews         |  1
  > milestones                   |  1
  > issues                       |  3
  > pull_requests                |  5
  > pull_request_review_comments |  4
  > commit_comments              |  2
  > issue_comments               | 10
  > issue_events                 | 63
  > releases                     |  3
  > attachments                  |  4
  > projects                     |  2
  ```
  Cada vez que agregues un repositorio nuevo con un GUID de migración existente, se actualizará la exportación existente. Si vuelves a ejecutar `ghe-migrator add` sin un GUID de migración, se iniciará una nueva exportación y se generará un nuevo GUID de migración. **No vuelvas a utilizar el GUID de migración generado durante una exportación cuando comiences a preparar tu migración para la importación**.

3. Si bloqueaste el repositorio de origen, puedes usar el comando `ghe-migrator target_url` para establecer un mensaje de bloqueo personalizado en la página del repositorio que vincula a la nueva ubicación del repositorio. Pasa la URL del repositorio de origen, la URL del repositorio de destino y el GUID de migración del Paso 5:

  ```shell
  $ ghe-migrator target_url https://<em>hostname</em>/<em>username</em>/<em>reponame</em> https://<em>target_hostname</em>/<em>target_username</em>/<em>target_reponame</em> -g <em>MIGRATION_GUID</em>
  ```

6. Para agregar más repositorios a la misma exportación, usa el comando `ghe-migrator add` con la marca `-g`. Pasarás la nueva URL del repositorio y el GUID de migración del Paso 5:
  ```shell
  $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>other_reponame</em> -g <em>MIGRATION_GUID</em> --lock
  ```
7. Cuando hayas terminado de agregar repositorios, genera el archivo de migración mediante el comando `ghe-migrator export` con la marca `-g` y el GUID de migración del paso 5:
    ```shell
    $ ghe-migrator export -g <em>MIGRATION_GUID</em>
    > Archive saved to: /data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. Cierra la conexión a {% data variables.product.product_location %}:
  ```shell
  $ exit
  > logout
  > Connection to <em>hostname</em> closed.
  ```
9. Copia el archivo de migración en el equipo mediante el comando [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp). Se te asignará al archivo de almacenamiento un nombre con el GUID de migración:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:/data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
