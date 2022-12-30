---
title: Migrationsdaten von GitHub.com exportieren
intro: 'Du kannst Migrationsdaten aus einer Organisation auf {% data variables.product.prodname_dotcom_the_website %} mithilfe der API zum Migrieren von Repositorys exportieren und dann ein Migrationsarchiv generieren, das du in eine {% data variables.product.prodname_ghe_server %}-Instanz importieren kannst.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717869'
---
## Vorbereiten der Quellorganisation auf {% data variables.product.prodname_dotcom %}

1. Stelle sicher, dass du über [Besitzerberechtigungen](/articles/permission-levels-for-an-organization/) für die Repositorys der Quellorganisation verfügst.

2. {% data reusables.enterprise_migrations.token-generation %} auf {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise_migrations.make-a-list %}

## Exportieren der Repositorys der Organisation

{% data reusables.enterprise_migrations.fork-persistence %}

Zum Exportieren von Repositorydaten aus {% data variables.product.prodname_dotcom_the_website %} verwendest du die [Migrations-API](/free-pro-team@latest/rest/migrations).

Die API für Migrationen befindet sich derzeit in einer Vorschauphase, weshalb sich die Endpunkte und Parameter künftig ändern können.
## Migrationsarchiv generieren

{% data reusables.enterprise_migrations.locking-repositories %}

1. Benachrichtige die Mitglieder deiner Organisation, dass du eine Migration durchführen wirst. Der Export kann entsprechend der Anzahl der zu exportierenden Repositorys mehrere Minuten dauern. Die vollständige Migration, einschließlich des Imports, dauert ggf. mehrere Stunden. Daher wird empfohlen, einen Probelauf durchzuführen, um die Länge des vollständigen Prozesses ermitteln zu können. Weitere Informationen findest du unter [Informationen zu Migrationen](/enterprise/admin/migrations/about-migrations#types-of-migrations).

2. Starte eine Migration, indem du eine `POST`-Anforderung an [den Migrationsendpunkt](/free-pro-team@latest/rest/migrations#start-an-organization-migration) sendest. Sie benötigen Folgendes:
    * Dein Zugriffstoken für die Authentifizierung.
    * Eine [Liste der Repositorys](/free-pro-team@latest/rest/repos#list-organization-repositories), die du migrieren möchtest:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -d'{"lock_repositories":true,"repositories":["<em>orgname</em>/<em>reponame</em>", "<em>orgname</em>/<em>reponame</em>"]}' \
      https://api.github.com/orgs/<em>orgname</em>/migrations
      ```
    *  Wenn du die Repositorys vor der Migration sperren möchtest, stelle sicher, dass `lock_repositories` auf `true` festgelegt ist. Dies wird dringend empfohlen.
    * Du kannst Dateianlagen ausschließen, indem du `exclude_attachments: true` an den Endpunkt übergibst. {% data reusables.enterprise_migrations.exclude-file-attachments %} Die endgültige Archivgröße muss kleiner als 20 GB sein.

  Diese Anforderung gibt einen eindeutigen `id`-Wert zurück, der deine Migration darstellt. du benötigst diese für nachfolgende Aufrufe der API für Migrationen.

3. Sende eine `GET`-Anforderung an [den Migrationsstatusendpunkt](/free-pro-team@latest/rest/migrations#get-an-organization-migration-status), um den Status einer Migration abzurufen. Sie benötigen Folgendes:
    * Dein Zugriffstoken für die Authentifizierung.
    * Die eindeutige `id` der Migration:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>
      ```

  Eine Migration kann einen der folgenden Zustände aufweisen:
    * `pending`, was bedeutet, dass die Migration noch nicht gestartet wurde.
    * `exporting`, was bedeutet, dass die Migration ausgeführt wird.
    * `exported`, was bedeutet, dass die Migration erfolgreich abgeschlossen wurde.
    * `failed`, was bedeutet, dass bei der Migration ein Fehler aufgetreten ist.

4. Lade nach dem Export deiner Migration das Migrationsarchiv herunter, indem du eine `GET`-Anforderung an [den Migrationsdownload-Endpunkt](/free-pro-team@latest/rest/migrations#download-an-organization-migration-archive) sendest. Sie benötigen Folgendes:
    * Dein Zugriffstoken für die Authentifizierung.
    * Die eindeutige `id` der Migration:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -H "Accept: application/vnd.github+json" \
      -L -o migration_archive.tar.gz \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```

5. Das Migrationsarchiv wird nach sieben Tagen automatisch gelöscht. Wenn du es früher löschen möchtest, kannst du eine `DELETE`-Anforderung an [den Löschendpunkt des Migrationsarchivs](/free-pro-team@latest/rest/migrations#delete-an-organization-migration-archive) senden. Sie benötigen Folgendes:
    * Dein Zugriffstoken für die Authentifizierung.
    * Die eindeutige `id` der Migration:
      ```shell
      curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" \
      -X DELETE \
      -H "Accept: application/vnd.github+json" \
      https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/archive
      ```
{% data reusables.enterprise_migrations.ready-to-import-migrations %}
