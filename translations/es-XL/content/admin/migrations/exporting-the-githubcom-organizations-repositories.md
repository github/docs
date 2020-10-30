---
title: Exportar los repositorios de la organización de GitHub.com
intro: 'Con la API de Migraciones, puedes exportar los repositorios de una organización. Una vez que hayas exportado tus repositorios, descarga el archivo de migración que se utiliza para el proceso de importación.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_migrations.fork-persistence %}

Para exportar datos del repositorio desde {% data variables.product.prodname_dotcom_the_website %}, usa la <a href="/rest/reference/migrations" class="dotcom-only">API de Migraciones</a>.

La API de Migraciones se encuentra actualmente en un período de previsualización, lo que significa que los puntos finales y los parámetros pueden cambiar en el futuro. Para acceder a la API de Migraciones, debes proporcionar un [tipo de medio](/v3/media) personalizado en el encabezado `Accept` (Aceptar): `application/vnd.github.wyandotte-preview+json`. Los ejemplos a continuación incluyen el tipo de medio personalizado.

### Generar un archivo de migración

{% data reusables.enterprise_migrations.locking-repositories %}

1. Notifica a los miembros de tu organización que harás una migración. La exportación puede durar varios minutos, en función de la cantidad de repositorios que se exporten. La migración completa, incluida la importación, puede durar varias horas. Por lo tanto, te recomendamos que hagas una prueba para determinar cuánto tiempo tomará el proceso completo. Para obtener más información, consulta "[Acerca de las migraciones](/enterprise/admin/migrations/about-migrations#types-of-migrations)".

2. Inicia una migración mediante `POST` al <a href="/rest/reference/migrations#start-an-organization-migration" class="dotcom-only">punto final de migración</a>. Necesitarás:
    * Tu token de acceso para autenticación.
    * Una [lista de los repositorios](/v3/repos/#list-organization-repositories) que deseas migrar:
      ```shell
      curl -H "Autorización: token <em>GITHUB_ACCESS_TOKEN</em>" -X POST \
      -H "Aceptar: application/vnd.github.wyandotte-preview+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  Si deseas bloquear los repositorios antes de migrarlos, asegúrate de que `lock_repositories`esté establecido en `true` (true). Esto es altamente recomendable.
    * Puedes excluir archivos adjuntos pasando `exclude_attachments: true` al punto final. {% data reusables.enterprise_migrations.exclude-file-attachments %} El tamaño final del archivo debe ser inferior a 20 GB.

  Esta solicitud devuelve un `id` único que representa tu migración. Lo necesitarás para solicitudes posteriores a la API de Migraciones.

3. Envía una solicitud de `GET` al <a href="/rest/reference/migrations#get-an-organization-migration-status" class="dotcom-only"> punto final del estado de la migración</a> para extraer el estado de una migración. Necesitarás:
    * Tu token de acceso para autenticación.
    * El `id` único de la migración:
      ```shell
      curl -H "Autorización: token <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Aceptar: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  Una migración puede estar en uno de los siguientes estados:
    * `pending` (pendiente), lo que significa que la migración aún no se ha iniciado.
    * `exporting` (exportando), lo que significa que la migración está en curso.
    * `exported` (exportada), lo que significa que la migración finalizó correctamente.
    * `failed` (fallida), lo que significa que la migración falló.

4. Una vez que se haya exportado tu migración, descarga el archivo de migración enviando una solicitud de `GET` al <a href="/rest/reference/migrations#download-an-organization-migration-archive" class="dotcom-only">punto final de descarga de migración</a>. Necesitarás:
    * Tu token de acceso para autenticación.
    * El `id` único de la migración:
      ```shell
      curl -H "Aceptar: application/vnd.github.wyandotte-preview+json" \
      -u <em>GITHUB_USERNAME</em>:<em>GITHUB_ACCESS_TOKEN</em> \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. El archivo de migración se elimina automáticamente después de siete días. Si prefieres eliminarlo antes, puedes enviar una solicitud `DELETE` al <a href="/rest/reference/migrations#delete-an-organization-migration-archive" class="dotcom-only">punto final de eliminación del archivo de migración</a>. Necesitarás:
    * Tu token de acceso para autenticación.
    * El `id` único de la migración:
      ```shell
      curl -H "Autorización: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
      -H "Aceptar: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
