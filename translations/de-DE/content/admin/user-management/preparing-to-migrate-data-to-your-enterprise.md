---
title: Preparing to migrate data to your enterprise
intro: 'Nachdem Sie ein Migrationsarchiv generiert haben, können Sie die Daten auf Ihrer {% data variables.product.prodname_ghe_server %}-Zielinstanz importieren. Sie können die Änderungen auf potenzielle Konflikte überprüfen, bevor Sie die Änderungen dauerhaft auf Ihre Zielinstanz anwenden.'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise/
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  enterprise-server: '*'
topics:
  - Unternehmen
---

### Preparing the migrated data for import to {% data variables.product.prodname_ghe_server %}

1. Kopieren Sie mit dem Befehl [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) das auf Ihrer Quellinstanz oder in Ihrer Organisation generierte Migrationsarchiv auf Ihr {% data variables.product.prodname_ghe_server %}-Ziel:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Führen Sie den Befehl `ghe-migrator prepare` aus, um das Archiv auf den Import auf der Zielinstanz vorzubereiten und einen neuen Migrations-GUID zu generieren, den Sie in den nachfolgenden Schritten verwenden:

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * Führen Sie zum Starten eines neuen Importversuchs den Befehl `ghe-migrator prepare` erneut aus, und rufen Sie einen neuen Migrations-GUID ab.
    * {% data reusables.enterprise_migrations.specify-staging-path %}

### Liste mit Migrationskonflikten generieren

1. Führen Sie den Befehl `ghe-migrator conflicts` mit dem Migrations-GUID aus, um die Datei *conflicts.csv* zu generieren:
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - If no conflicts are reported, you can safely import the data by following the steps in "[Migrating data to your enterprise](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/)".
2. Kopieren Sie bei vorliegenden Konflikten mithilfe des Befehls [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) die Datei *conflicts.csv* auf Ihren lokalen Computer:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Wechseln Sie zu „[Migrationskonflikte beheben oder benutzerdefinierte Zuordnungen einrichten](#resolving-migration-conflicts-or-setting-up-custom-mappings)“.

### Migrationskonflikte überprüfen

1. Verwenden Sie einen Texteditor oder eine [CSV-kompatible Tabellenkalkulationssoftware](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support), um *conflicts.csv* zu öffnen.
2. Überprüfen Sie die Datei *conflicts.csv*, um sicherzustellen, dass die entsprechenden Aktionen beim Import durchgeführt werden. Berücksichtigen Sie dazu die Anleitung aus den folgenden Beispielen und Referenztabellen.

Die Datei *conflicts.csv*enthält eine *Migrationszuordnung* der Konflikte und empfohlenen Aktionen. Eine Migrationszuordnung listet auf, welche Daten von der Quellinstanz migriert werden und wie die Daten auf die Zielinstanz angewendet werden.

| `model_name`   | `source_url`                                           | `target_url`                                           | `recommended_action` |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------ | -------------------- |
| `Benutzer`     | `https://example-gh.source/octocat`                    | `https://example-gh.target/octocat`                    | `map`                |
| `Organisation` | `https://example-gh.source/octo-org`                   | `https://example-gh.target/octo-org`                   | `map`                |
| `Repository`   | `https://example-gh.source/octo-org/widgets`           | `https://example-gh.target/octo-org/widgets`           | `rename`             |
| `Team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `Merge`              |

Jede Zeile in *conflicts.csv* enthält die folgenden Informationen:

| Name                 | Beschreibung                                                                    |
| -------------------- | ------------------------------------------------------------------------------- |
| `model_name`         | Der Typ der zu ändernden Daten.                                                 |
| `source_url`         | Die Quell-URL der Daten.                                                        |
| `target_url`         | Die erwartete Ziel-URL der Daten.                                               |
| `recommended_action` | Die Aktion, die `ghe-migrator` beim Importieren der Daten bevorzugt durchführt. |

#### Mögliche Zuordnungen für jeden Datensatztyp

Es gibt verschiedene Zuordnungsaktionen, die `ghe-migrator` beim Übertragen von Daten durchführen kann.

| `action`        | Beschreibung                                                                                                                                 | Entsprechende Modelle                 |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `import`        | (Standard) Daten von der Quellinstanz werden auf die Zielinstanz importiert.                                                                 | Alle Datensatztypen                   |
| `map`           | Daten von der Quellinstanz werden durch vorhandene Daten auf der Zielinstanz ersetzt.                                                        | Benutzer, Organisationen, Repositorys |
| `rename`        | Daten von der Quellinstanz werden umbenannt und anschließend auf die Zielinstanz kopiert.                                                    | Benutzer, Organisationen, Repositorys |
| `map_or_rename` | Bei Vorhandensein der Zielinstanz sollte die Zuordnung zur Zielinstanz erfolgen. Andernfalls sollte das importierte Modell umbenannt werden. | Benutzer                              |
| `Merge`         | Daten von der Quellinstanz werden mit vorhandenen Daten auf der Zielinstanz kombiniert.                                                      | Teams                                 |

**We strongly suggest you review the *conflicts.csv* file and use [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) to ensure that the proper actions are being taken.** If everything looks good, you can continue to "[Migrating data to your enterprise](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)".


### Migrationskonflikte beheben und benutzerdefinierte Zuordnungen einrichten

Wenn Sie der Ansicht sind, dass der Befehl `ghe-migrator` eine falsche Änderung durchführt, können Sie Korrekturen vornehmen. Ändern Sie dazu die Daten in *conflicts.csv*. Sie können Änderungen an allen Zeilen in *conflicts.csv* vornehmen.

Angenommen, Sie stellen fest, dass der Benutzer `octocat` von der Quellinstanz dem Benutzer `octocat` auf der Zielinstanz zugeordnet ist:

| `model_name` | `source_url`                        | `target_url`                        | `recommended_action` |
| ------------ | ----------------------------------- | ----------------------------------- | -------------------- |
| `Benutzer`   | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`                |

Sie können den Benutzer einem anderen Benutzer auf der Zielinstanz zuordnen. Angenommen, Sie wissen, dass `octocat` auf der Zielinstanz eigentlich `monalisa` heißen sollte. Sie können die Spalte `target_url` in *conflicts.csv* so ändern, dass auf `monalisa` verwiesen wird:

| `model_name` | `source_url`                        | `target_url`                         | `recommended_action` |
| ------------ | ----------------------------------- | ------------------------------------ | -------------------- |
| `Benutzer`   | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`                |

Falls Sie darüber hinaus beispielsweise das Repository `octo-org/widgets` auf der Zielinstanz in `octo-org/amazing-widgets` umbenennen möchten, ändern Sie den Wert `target_url` in `octo-org/amazing-widgets` und den Wert `recommend_action` in `rename`:

| `model_name` | `source_url`                                 | `target_url`                                         | `recommended_action` |
| ------------ | -------------------------------------------- | ---------------------------------------------------- | -------------------- |
| `Repository` | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`             |

#### Benutzerdefinierte Zuordnungen hinzufügen

Während einer Migration geschieht es häufig, dass migrierte Benutzer andere Benutzernamen auf der Zielinstanz als auf der Quellinstanz besitzen.

Mit einer Liste der Benutzernamen von der Quellinstanz und einer Liste der Benutzernamen von der Zielinstanz können Sie eine CSV-Datei mit benutzerdefinierten Zuordnungen erstellen und anschließend anwenden, um sicherzustellen, dass der Benutzername und Inhalt jedes Benutzers am Ende einer Migration richtig zugeordnet werden.

Führen Sie den Befehl [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) aus, um im Handumdrehen eine CSV-Datei von Benutzern zu erstellen, die im CSV-Format migriert werden, das für die Anwendung benutzerdefinierter Zuordnungen erforderlich ist.

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

Nun können Sie diese CSV-Datei bearbeiten und eine neue URL für jeden Benutzer eingeben, den Sie zuordnen oder umbenennen möchten. Anschließend können Sie die vierte Spalte entsprechend so bearbeiten, dass sie `map` oder `rename` aufweist.

Um beispielsweise den Benutzer `octocat` auf der Zielinstanz `https://example-gh.target` in `monalisa` umzubenennen, würden Sie eine Zeile mit dem folgenden Inhalt erstellen:

| `model_name` | `source_url`                        | `target_url`                         | `state`  |
| ------------ | ----------------------------------- | ------------------------------------ | -------- |
| `Benutzer`   | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename` |

Mit demselben Prozess können Sie Zuordnungen für jeden Datensatz erstellen, der benutzerdefinierte Zuordnungen unterstützt. Weitere Informationen finden Sie in unserer Tabelle zu den „[möglichen Zuordnungen für Datensätze](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type)“.

#### Geänderte Migrationsdaten anwenden

1. After making changes, use the [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) command to apply your modified *conflicts.csv* (or any other mapping *.csv* file in the correct format) to the target instance:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Re-map the migration data using the `ghe-migrator map` command, passing in the path to your modified *.csv* file and the Migration GUID:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Wenn der Befehl `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` meldet, dass weiterhin Konflikte vorhanden sind, führen Sie den Prozess zum Beheben von Migrationskonflikten erneut aus.
