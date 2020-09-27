---
title: Migrationskonflikte beheben und benutzerdefinierte Zuordnungen einrichten
intro: 'Vor dem Importieren von Migrationsdaten können Sie Korrekturen vornehmen, um Konflikte zu beheben, eingehende Datensätze umzubenennen oder eingehende Datensätze vorhandenen Datensätzen zuzuordnen.'
redirect_from:
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
versions:
  enterprise-server: '*'
---

Mit den folgenden Schritten können Konflikte behoben oder Ihrer Migration benutzerdefinierte Zuordnungen hinzugefügt werden.

### Konflikte beheben

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

### Benutzerdefinierte Zuordnungen hinzufügen

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

### Geänderte Migrationsdaten anwenden

1. Nachdem Sie die Änderungen vorgenommen haben, führen Sie den Befehl [`scp`](https://linuxacademy.com/blog/linux/ssh-and-scp-howto-tips-tricks#scp) aus, um Ihre geänderte Datei *conflicts.csv* (oder eine andere CSV-Datei für Zuordnungen im richtigen Format) auf die Zielinstanz anzuwenden:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Führen Sie den Befehl `ghe-migrator map` aus, um die Migrationsdaten erneut zuzuordnen. Übergeben Sie dazu den Pfad an Ihre geänderte CSV-Datei und an den Migrations-GUID:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Wenn der Befehl `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID` meldet, dass weiterhin Konflikte vorhanden sind, führen Sie den Prozess zum Beheben von Migrationskonflikten erneut aus.
