---
title: Exportar los repositorios de origen de GitHub Enterprise Server
intro: 'Después de bloquear los repositorios de origen, puedes exportarlos uno por uno, o en bloque, utilizando una lista de URL de repositorio en un archivo de texto. A continuación, generarás un archivo de migración único para el proceso de importación.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-the-github-enterprise-source-repositories/
  - /enterprise/admin/migrations/exporting-the-github-enterprise-server-source-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_migrations.locking-repositories %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Para preparar un repositorio para la exportación, usa el comando `ghe-migrator add` con la URL del repositorio:
    * Si estás bloqueando el repositorio, agrega el comando `--lock`. Si estás efectuando una ejecución de prueba, el comando `--lock` no es necesario.
      ```shell
      $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>reponame</em> --lock
      ```
    * Puedes excluir archivos adjuntos agregando ` --exclude_attachments ` al comando. {% data reusables.enterprise_migrations.exclude-file-attachments %}
    * Para preparar varios repositorios al mismo tiempo para exportación, crea un archivo de texto que incluya las URL del repositorio en una línea separada, y ejecuta el comando `ghe-migrator add` con el indicador `-i` y la ruta a tu archivo de texto.
      ```shell
      $ ghe-migrator add -i <em>PATH</em>/<em>TO</em>/<em>YOUR</em>/<em>REPOSITORY_URLS</em>.txt
      ```

3. Cuando se te indique, ingresa tu nombre de usuario {% data variables.product.prodname_ghe_server %}:
  ```shell
  Ingresa el nombre de usuario autorizado para la migración: admin
  ```
4. Cuando se te pida un token de acceso personal, ingresa el token de acceso que creaste en"[Preparación de {% data variables.product.prodname_ghe_server %} la instancia de origen](/enterprise/admin/guides/migrations/preparing-the-github-enterprise-server-source-instance/)":
  ```shell
  Ingresa el token de acceso personal:  **************
  ```
5. Cuando `ghe-migrator add` haya terminado, imprimirá el "GUID de migración" único que generó para identificar esta exportación, así como una lista de los recursos que se agregaron a la exportación. Utilizarás el GUID de migración que generaste en los pasos posteriores `ghe-migrator add` y`ghe-migrator export` para indicar a `ghe-migrator` que continúe operando en la misma exportación.
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
  Cada vez que agregues un repositorio nuevo con un GUID de migración existente, se actualizará la exportación existente. Si ejecutas `ghe-migrator add` nuevamente sin un GUID de migración, comenzará una nueva exportación y generará un nuevo GUID de migración. **No vuelvas a utilizar el GUID de migración generado durante una exportación cuando comiences a preparar tu migración para importar**.

3. Si bloqueaste el repositorio de origen, puedes usar el comando `ghe-migrator target_url` para configurar un mensaje de bloqueo personalizado en la página del repositorio que vincula con la nueva ubicación del repositorio. Pasa la URL del repositorio de origen, la URL del repositorio de destino y el GUID de migración del Paso 5:

  ```shell
  $ ghe-migrator target_url https://<em>hostname</em>/<em>username</em>/<em>reponame</em> https://<em>target_hostname</em>/<em>target_username</em>/<em>target_reponame</em> -g <em>MIGRATION_GUID</em>
  ```

6. Usa el comando `ghe-migrator add` con el indicador `-g` para agregar más repositorios a la misma exportación. Pasarás la nueva URL del repositorio y el GUID de migración del Paso 5:
  ```shell
  $ ghe-migrator add https://<em>hostname</em>/<em>username</em>/<em>other_reponame</em> -g <em>MIGRATION_GUID</em> --lock
  ```
7. Cuando hayas terminado de agregar repositorios, genera el archivo de migración con el comando `ghe-migrator export` con el indicador `-g` y el GUID de migración del Paso 5:
    ```shell
    $ ghe-migrator export -g <em>MIGRATION_GUID</em>
    > Archivo guardado en: /data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz
    ```
    * {% data reusables.enterprise_migrations.specify-staging-path %}

8. Cierra la conexión a {% data variables.product.product_location_enterprise %}:
  ```shell
  $ exit
  > logout
  > Connection to <em>hostname</em> closed.
  ```
9. Copia el archivo de migración a tu computadora con el comando [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp). Se te asignará al archivo de almacenamiento un nombre con el GUID de migración:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:/data/github/current/tmp/<em>MIGRATION_GUID</em>.tar.gz ~/Desktop
  ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
