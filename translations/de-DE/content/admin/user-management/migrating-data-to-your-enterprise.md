---
title: Migrating data to your enterprise
intro: 'Nachdem Sie ein Migrationsarchiv generiert haben, können Sie die Daten auf Ihrer {% data variables.product.prodname_ghe_server %}-Zielinstanz importieren. Sie können die Änderungen auf potenzielle Konflikte überprüfen, bevor Sie die Änderungen dauerhaft auf Ihre Zielinstanz anwenden.'
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
type: how_to
topics:
  - Enterprise
  - Migration
---

### Applying the imported data on {% data variables.product.prodname_ghe_server %}

Once you have [prepared your migration](/admin/user-management/preparing-to-migrate-data-to-your-enterprise) you can use the following steps to complete the migration.

{% data reusables.enterprise_installation.ssh-into-target-instance %}

2. Führen Sie den Befehl `ghe-migrator import` aus, um den Importprozess zu starten. Sie benötigen Folgendes:
    * Ihren Migrations-GUID. For more information, see "[Preparing to migrate data to your enterprise](/admin/user-management/preparing-to-migrate-data-to-your-enterprise)."
    * Dein persönliches Zugangs-Token für die Authentifizierung. Das persönliche Zugriffstoken, das Du verwendest, dient nur der Authentifizierung als Website-Administrator und erfordert keinen bestimmten „Scope“ (Geltungsbereich). Weitere Informationen finden Sie unter "[Erstellen eines persönlichen Zugriffstokens](/github/authenticating-to-github/creating-a-personal-access-token)."

    ```shell
    $ ghe-migrator import /home/admin/<em>MIGRATION_GUID</em>.tar.gz -g <em>MIGRATION_GUID</em> -u <em>username</em> -p <em>TOKEN</em>

    > Starting GitHub::Migrator
    > Import 100% complete /
    ```

    * {% data reusables.enterprise_migrations.specify-staging-path %}

### Migrationsdaten überprüfen

Der Befehl `ghe-migrator audit` gibt standardmäßig jeden Datensatz zurück. Dadurch können Sie die Datensätze zudem filtern nach

  * den Datensatztypen,
  * dem Zustand der Datensätze.

Die Datensatztypen stimmen mit denen der [Migrationsdaten](/enterprise/admin/guides/migrations/about-migrations/#migrated-data) überein.

### Filter für Datensatztypen

| Datensatztyp                                       | Filtername                    |
| -------------------------------------------------- | ----------------------------- |
| Benutzer                                           | `Benutzer`                    |
| Organisationen                                     | `Organisation`                |
| Repositorys                                        | `Repository`                  |
| Teams                                              | `Team`                        |
| Meilensteine                                       | `Meilensteine`                |
| Projektboards                                      | `project (Projekt)`           |
| Issues                                             | `Issue`                       |
| Issue-Kommentare                                   | `issue_comment`               |
| Pull Requests                                      | `pull_request`                |
| Pull-Request-Reviews                               | `pull_request_review`         |
| Commit-Kommentare                                  | `commit_comment`              |
| Pull-Request-Review-Kommentare                     | `pull_request_review_comment` |
| Veröffentlichungen                                 | `Release`                     |
| Bei Pull Requests oder Issues ergriffene Maßnahmen | `issue_event`                 |
| geschützte Branches                                | `protected_branch`            |

### Filter für Datensatzzustände

| Datensatzzustand | Beschreibung                                |
| ---------------- | ------------------------------------------- |
| `export`         | Der Datensatz wird exportiert.              |
| `import`         | Der Datensatz wird importiert.              |
| `map`            | Der Datensatz wird zugeordnet.              |
| `rename`         | Der Datensatz wird umbenannt.               |
| `Merge`          | Der Datensatz wird gemergt.                 |
| `exported`       | Der Datensatz wurde erfolgreich exportiert. |
| `imported`       | Der Datensatz wurde erfolgreich importiert. |
| `mapped`         | Der Datensatz wurde erfolgreich zugeordnet. |
| `renamed`        | Der Datensatz wurde erfolgreich umbenannt.  |
| `merged`         | Der Datensatz wurde erfolgreich gemergt.    |
| `failed_export`  | Fehler beim Export des Datensatzes.         |
| `failed_import`  | Fehler beim Import des Datensatzes.         |
| `failed_map`     | Fehler beim Zuordnen des Datensatzes.       |
| `failed_rename`  | Fehler beim Umbenennen des Datensatzes.     |
| `failed_merge`   | Fehler beim Mergen des Datensatzes.         |

### Überwachte Datensätze filtern

Wenn Sie den Befehl `ghe-migrator audit` mit dem Flag `-m` ausführen, können Sie anhand des Datensatztyps filtern. Ebenso können Sie mithilfe des Flags `-s` nach dem Importstatus filtern. Der Befehl sieht wie folgt aus:

```shell
$ ghe-migrator audit -m <em>RECORD_TYPE</em> -s <em>STATE</em> -g <em>MIGRATION_GUID</em>
```

Wenn Sie beispielsweise alle erfolgreich importierten Organisationen und Teams anzeigen möchten, würden Sie Folgendes eingeben:
```shell
$ ghe-migrator audit -m organization,team -s mapped,renamed -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> organization,https://gh.source/octo-org/,https://ghe.target/octo-org/,renamed
```

**Es wird dringend empfohlen, jeden fehlgeschlagenen Import zu überwachen.** Dazu geben Sie Folgendes ein:
```shell
$ ghe-migrator audit -s failed_import,failed_map,failed_rename,failed_merge -g <em>MIGRATION_GUID</em>
> model_name,source_url,target_url,state
> user,https://gh.source/octocat,https://gh.target/octocat,failed
> repository,https://gh.source/octo-org/octo-project,https://ghe.target/octo-org/octo-project,failed
```

Kontaktieren Sie {% data variables.contact.contact_ent_support %}, wenn Sie Bedenken in Bezug auf fehlgeschlagene Importvorgänge haben.

### Completing the import on {% data variables.product.prodname_ghe_server %}

After your migration is applied to your target instance and you have reviewed the migration, you''ll unlock the repositories and delete them off the source. Vor dem Löschen Ihrer Quelldaten sollten Sie etwa zwei Wochen warten, um sicherzugehen, dass alles erwartungsgemäß funktioniert.

### Repositorys auf der Zielinstanz entsperren

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}

### Repositorys auf der Quellinstanz entsperren

#### Unlocking repositories from an organization on {% data variables.product.prodname_dotcom_the_website %}

Um die Repositorys in einer {% data variables.product.prodname_dotcom_the_website %}-Organisation zu entsperren, senden Sie eine `DELETE`-Anforderung an den <a href="/rest/reference/migrations#unlock-an-organization-repository" class="dotcom-only">Endpunkt zum Entsperren der Migration</a>. Sie benötigen Folgendes:
  * Ihr Zugriffstoken für die Authentifizierung
  * die eindeutige `ID` der Migration
  * den Namen des zu entsperrenden Repositorys
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  -H "Accept: application/vnd.github.wyandotte-preview+json" \
  https://api.github.com/orgs/<em>orgname</em>/migrations/<em>id</em>/repos/<em>repo_name</em>/lock
```

#### Deleting repositories from an organization on {% data variables.product.prodname_dotcom_the_website %}

Nachdem Sie die Repositorys der {% data variables.product.prodname_dotcom_the_website %}-Organisation entsperrt haben, sollten Sie mithilfe des [Endpunkts zum Löschen des Repositorys](/rest/reference/repos/#delete-a-repository) jedes Repository löschen, das Sie zuvor migriert haben. Sie benötigen Ihr Zugriffstoken für die Authentifizierung:
```shell
curl -H "Authorization: token <em>GITHUB_ACCESS_TOKEN</em>" -X DELETE \
  https://api.github.com/repos/<em>orgname</em>/<em>repo_name</em>
```

#### Repositorys auf einer {% data variables.product.prodname_ghe_server %}-Instanz entsperren

{% data reusables.enterprise_installation.ssh-into-instance %}
{% data reusables.enterprise_migrations.unlocking-on-instances %}
