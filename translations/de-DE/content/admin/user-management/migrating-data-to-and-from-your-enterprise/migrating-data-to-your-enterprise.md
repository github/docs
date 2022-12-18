---
title: Migrieren von Daten zu deinem Unternehmen
intro: 'Nachdem du ein Migrationsarchiv generiert hast, kannst du die Daten in deine {% data variables.product.prodname_ghe_server %}-Zielinstanz importieren. Du kannst die Änderungen auf potenzielle Konflikte überprüfen, bevor du die Änderungen dauerhaft auf deine Zielinstanz anwendest.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717669'
---
## Anwenden der importierten Daten auf {% data variables.product.prodname_ghe_server %}

Bevor du Daten zu deinem Unternehmen migrieren kannst, musst du die Daten vorbereiten und eventuelle Konflikte beheben. Weitere Informationen findest du unter [Vorbereiten der Migration von Daten zu deinem Unternehmen](/admin/user-management/preparing-to-migrate-data-to-your-enterprise).

Nachdem du die Daten vorbereitet und Konflikte beseitigt hast, kannst du die importierten Daten auf {% data variables.product.product_name %} anwenden.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. Starte den Importvorgang mit dem Befehl `ghe-migrator import`. Sie benötigen Folgendes:
    * Deine Migrations-GUID. Weitere Informationen findest du unter [Vorbereiten der Migration von Daten zu deinem Unternehmen](/admin/user-management/preparing-to-migrate-data-to-your-enterprise).
    * Dein persönliches Zugangs-Token für die Authentifizierung. Das persönliche Zugriffstoken, das du verwendest, dient nur der Authentifizierung als Website-Administrator und erfordert keinen bestimmten „Scope“ (Geltungsbereich). Weitere Informationen hierzu findest du unter [Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token).

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Migrationsdaten überprüfen

Mit `ghe-migrator audit` wird standardmäßig jeder Datensatz zurückgegeben. Dadurch kannst du die Datensätze zudem filtern nach

  * den Datensatztypen,
  * dem Zustand der Datensätze.

Die Datensatztypen stimmen mit denen in den [migrierten Daten](/enterprise/admin/guides/migrations/about-migrations/#migrated-data) überein.

## Filter für Datensatztypen

|      Eintragstyp      | Filtername  |
|-----------------------|--------|
| Benutzer           | `user`
| Organisationen   | `organization`
| Repositorys    | `repository`
| Teams           | `team`
| Meilensteine      | `milestone`
| Projektboards  | `project`
| Probleme          | `issue`
| Issue-Kommentare  | `issue_comment`
| Pull Requests   | `pull_request`
| Pull-Request-Reviews | `pull_request_review`
| Commit-Kommentare | `commit_comment`
| Pull-Request-Review-Kommentare | `pull_request_review_comment`
| Releases | `release`
| Bei Pull Requests oder Issues ergriffene Maßnahmen | `issue_event`
| Geschützte Branches | `protected_branch`

## Filter für Datensatzzustände

| Datensatzzustand    | BESCHREIBUNG    |
|-----------------|----------------|
| `export`        | Der Datensatz wird exportiert. |
| `import`        | Der Datensatz wird importiert. |
| `map`           | Der Datensatz wird zugeordnet. |
| `rename`        | Der Datensatz wird umbenannt. |
| `merge`         | Der Datensatz wird gemergt. |
| `exported`      | Der Datensatz wurde erfolgreich exportiert. |
| `imported`      | Der Datensatz wurde erfolgreich importiert. |
| `mapped`        | Der Datensatz wurde erfolgreich zugeordnet. |
| `renamed`       | Der Datensatz wurde erfolgreich umbenannt. |
| `merged`        | Der Datensatz wurde erfolgreich gemergt. |
| `failed_export` | Fehler beim Export des Datensatzes. |
| `failed_import` | Fehler beim Import des Datensatzes. |
| `failed_map`    | Fehler beim Zuordnen des Datensatzes. |
| `failed_rename` | Fehler beim Umbenennen des Datensatzes. |
| `failed_merge`  | Fehler beim Mergen des Datensatzes. |

## Überwachte Datensätze filtern

Mit dem Befehl `ghe-migrator audit` kannst du unter Verwendung des Flags `-m` nach dem Datensatztyp filtern. Ebenso kannst du mit dem Flag `-s` nach dem Importstatus filtern. Der Befehl sieht wie folgt aus:

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

Wenn du beispielsweise alle erfolgreich importierten Organisationen und Teams anzeigen möchtest, würdest du Folgendes eingeben:
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**Wir empfehlen dringend, jeden fehlgeschlagenen Import zu überprüfen.** Dazu gibst du Folgendes ein:
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

Kontaktiere {% data variables.contact.contact_ent_support %}, wenn du Bedenken in Bezug auf fehlgeschlagene Importvorgänge hast.

## Abschließen des Imports in {% data variables.product.prodname_ghe_server %}

Nachdem deine Migration auf die Zielinstanz angewendet wurde und du die Migration überprüft hast, entsperrst du die Repositorys und löschst sie von der Quellinstanz. Vor dem Löschen deiner Quelldaten solltest du etwa zwei Wochen warten, um sicherzugehen, dass alles erwartungsgemäß funktioniert.

## Repositorys auf der Zielinstanz entsperren

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}

## Repositorys auf der Quellinstanz entsperren

### Entsperren von Repositorys einer Organisation auf {% data variables.product.prodname_dotcom_the_website %}

Um die Repositorys einer {% data variables.product.prodname_dotcom_the_website %}-Organisation zu entsperren, sendest du eine `DELETE`-Anforderung an den [Endpunkt zum Entsperren der Migration](/free-pro-team@latest/rest/migrations#unlock-an-organization-repository). Sie benötigen Folgendes:
  * Dein Zugriffstoken für die Authentifizierung
  * Die eindeutige `id` der Migration
  * den Namen des zu entsperrenden Repositorys
```shell
curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

### Löschen von Repositorys aus einer Organisation auf {% data variables.product.prodname_dotcom_the_website %}

Nachdem du die Repositorys der {% data variables.product.prodname_dotcom_the_website %}-Organisation entsperrt hast, solltest du alle zuvor migrierten Repositorys mit dem [Endpunkt zum Löschen von Repositorys](/rest/repos/#delete-a-repository) löschen. du benötigst dein Zugriffstoken für die Authentifizierung:
```shell
curl -H "Authorization: Bearer <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

### Repositorys auf einer {% data variables.product.prodname_ghe_server %}-Instanz entsperren

{% data reusables.enterprise_installation.ssh-into-instance %} {% data reusables.enterprise_migrations.unlocking-on-instances %}
