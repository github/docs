---
title: Migrationsdaten überprüfen
intro: 'Nach den jeweiligen Migrationsschritten können Sie den Zustand der Migrationsdaten überprüfen. Sie können sicherstellen, dass die Datensätze ordnungsgemäß zugeordnet oder umbenannt werden, die neuen URLs für Datensätze nach dem Importschritt abrufen und die Datensätze auflisten, bei deren Migration Fehler auftraten.'
redirect_from:
  - '/enterprise/{{ currentVersion }}/admin/guides/migrations/reviewing-the-imported-data/'
  - /enterprise/admin/migrations/reviewing-migration-data
versions:
  enterprise-server: '*'
---

Der Befehl `ghe-migrator audit` gibt standardmäßig jeden Datensatz zurück. Dadurch können Sie die Datensätze zudem filtern nach

  * den Datensatztypen,
  * dem Zustand der Datensätze.

Die Datensatztypen stimmen mit denen der [Migrationsdaten](/enterprise/admin/guides/migrations/about-migrations/#migrated-data) überein.

### Filter für Datensatztypen

| Datensatztyp                                       | Filtername                    |
| -------------------------------------------------- | ----------------------------- |
| Benutzer                                           | `user`                        |
| Organisationen                                     | `organization`                |
| Repositorys                                        | `Repository`                  |
| Teams                                              | `Team`                        |
| Meilensteine                                       | `milestone`                   |
| Projektboards                                      | `project`                     |
| Issues                                             | `Issue`                       |
| Issue-Kommentare                                   | `issue_comment`               |
| Pull Requests                                      | `pull_request`                |
| Pull-Request-Reviews                               | `pull_request_review`         |
| Commit-Kommentare                                  | `commit_comment`              |
| Pull-Request-Review-Kommentare                     | `pull_request_review_comment` |
| Veröffentlichungen                                 | `release`                     |
| Bei Pull Requests oder Issues ergriffene Maßnahmen | `issue_event`                 |
| Geschützte Branches                                | `protected_branch`            |

### Filter für Datensatzzustände

| Datensatzzustand | Beschreibung                                |
| ---------------- | ------------------------------------------- |
| `export`         | Der Datensatz wird exportiert.              |
| `import`         | Der Datensatz wird importiert.              |
| `map`            | Der Datensatz wird zugeordnet.              |
| `rename`         | Der Datensatz wird umbenannt.               |
| `merge`          | Der Datensatz wird gemergt.                 |
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
