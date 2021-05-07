---
title: Migrationsdaten von GitHub.com exportieren
intro: 'You can export migration data from an organization on {% data variables.product.prodname_dotcom_the_website %} by using the API to select repositories to migrate, then generating a migration archive that you can import into a {% data variables.product.prodname_ghe_server %} instance.'
redirect_from:
  - /enterprise/admin/guides/migrations/exporting-migration-data-from-github-com
  - /enterprise/admin/migrations/exporting-migration-data-from-githubcom
  - /enterprise/admin/migrations/preparing-the-githubcom-source-organization
  - /enterprise/admin/migrations/exporting-the-githubcom-organizations-repositories
  - /enterprise/admin/guides/migrations/preparing-the-github-com-source-organization
  - /enterprise/admin/guides/migrations/exporting-the-github-com-organization-s-repositories
  - /enterprise/admin/user-management/exporting-migration-data-from-githubcom
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Preparing the source organization on {% data variables.product.prodname_dotcom %}

1. Stellen Sie sicher, dass Sie für die Repositorys in der Quellorganisation über [Inhaberberechtigungen](/articles/permission-levels-for-an-organization/) verfügen.

2. {% data reusables.enterprise_migrations.token-generation %} auf {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise_migrations.make-a-list %}

### Exporting the organization's repositories

{% data reusables.enterprise_migrations.fork-persistence %}

Verwenden Sie die <a href="/rest/reference/migrations" class="dotcom-only">API für Migrationen</a>, um Repository-Daten von {% data variables.product.prodname_dotcom_the_website %} zu exportieren.

Die API für Migrationen befindet sich derzeit in einer Vorschauphase, weshalb sich die Endpunkte und Parameter künftig ändern können. Um auf die API für Migrationen zuzugreifen, müssen Sie einen benutzerdefinierten [Medientyp](/rest/overview/media-types) im Header `Accept` angeben: `application/vnd.github.wyandotte-preview+json`. Die folgenden Beispiele enthalten den benutzerdefinierten Medientyp.

### Migrationsarchiv generieren

{% data reusables.enterprise_migrations.locking-repositories %}

1. Benachrichtigen Sie die Mitglieder Ihrer Organisation, dass Sie eine Migration durchführen werden. Der Export kann entsprechend der Anzahl der zu exportierenden Repositorys mehrere Minuten dauern. Die vollständige Migration, einschließlich des Imports, dauert ggf. mehrere Stunden. Daher wird empfohlen, einen Probelauf durchzuführen, um die Länge des vollständigen Prozesses ermitteln zu können. Weitere Informationen finden Sie unter „[Informationen zu Migrationen](/enterprise/admin/migrations/about-migrations#types-of-migrations)“.

2. Start a migration by sending a `POST` request to <a href="/rest/reference/migrations#start-an-organization-migration" class="dotcom-only">the migration endpoint</a>. Sie benötigen Folgendes:
    * Ihr Zugriffstoken für die Authentifizierung.
    * Eine [Liste der Repositorys](/rest/reference/repos#list-organization-repositories), die migriert werden sollen:
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X POST \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  Wenn Sie die Repositorys sperren möchten, bevor Sie sie migrieren, stellen Sie sicher, dass `lock_repositories` auf `true` festgelegt ist. Dies wird dringend empfohlen.
    * Dateianhänge können ausgeschlossen werden. Übergeben Sie dazu `exclude_attachments: true` an den Endpunkt. {% data reusables.enterprise_migrations.exclude-file-attachments %} Die endgültige Archivgröße muss kleiner als 20 GB sein.

  Diese Anforderung gibt eine eindeutige `ID` zurück, die Ihre Migration darstellt. Sie benötigen diese für nachfolgende Aufrufe der API für Migrationen.

3. Senden Sie eine `GET`-Anforderung an den <a href="/rest/reference/migrations#get-an-organization-migration-status" class="dotcom-only">Endpunkt für den Status der Migration</a>, um den Status einer Migration abzurufen. Sie benötigen Folgendes:
    * Ihr Zugriffstoken für die Authentifizierung.
    * Die eindeutige `ID` der Migration:
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  Eine Migration kann einen der folgenden Zustände aufweisen:
    * `pending` (ausstehend): Die Migration wurde noch nicht gestartet.
    * `exporting` (wird exportiert): Die Migration wird ausgeführt.
    * `exported` (exportiert): Die Migration wurde erfolgreich abgeschlossen.
    * `failed` (fehlgeschlagen): Die Migration ist fehlgeschlagen.

4. Laden Sie nach dem Export Ihrer Migration das Migrationsarchiv herunter. Senden Sie dazu eine `GET`-Anforderung an den <a href="/rest/reference/migrations#download-an-organization-migration-archive" class="dotcom-only">Endpunkt für den Download der Migration</a>. Sie benötigen Folgendes:
    * Ihr Zugriffstoken für die Authentifizierung.
    * Die eindeutige `ID` der Migration:
      ```shell
      curl -H "Accept: application/vnd.github.wyandotte-preview+json" \
      -u <em>GITHUB_USERNAME</em>:<em>GITHUB_ACCESS_TOKEN</em> \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. Das Migrationsarchiv wird nach sieben Tagen automatisch gelöscht. Wenn Sie es schneller löschen möchten, senden Sie eine `DELETE`-Anforderung an den <a href="/rest/reference/migrations#delete-an-organization-migration-archive" class="dotcom-only">Endpunkt zum Löschen des Migrationsarchivs</a>. Sie benötigen Folgendes:
    * Ihr Zugriffstoken für die Authentifizierung.
    * Die eindeutige `ID` der Migration:
      ```shell
      curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
      -H "Accept: application/vnd.github.wyandotte-preview+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
