---
title: Vorbereiten der Migration von Daten zu deinem Unternehmen
intro: 'Nachdem du ein Migrationsarchiv generiert hast, kannst du die Daten auf deine {% data variables.product.prodname_ghe_server %}-Zielinstanz importieren. Du kannst die Änderungen auf potenzielle Konflikte überprüfen, bevor du die Änderungen dauerhaft auf deine Zielinstanz anwendest.'
redirect_from:
  - /enterprise/admin/migrations/preparing-the-migrated-data-for-import-to-github-enterprise-server
  - /enterprise/admin/migrations/generating-a-list-of-migration-conflicts
  - /enterprise/admin/migrations/reviewing-migration-conflicts
  - /enterprise/admin/migrations/resolving-migration-conflicts-or-setting-up-custom-mappings
  - /enterprise/admin/guides/migrations/preparing-the-migrated-data-for-import-to-github-enterprise
  - /enterprise/admin/user-management/preparing-to-migrate-data-to-your-enterprise
  - /admin/user-management/preparing-to-migrate-data-to-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
shortTitle: Prepare to migrate data
ms.openlocfilehash: 7b552f2bc0d79eb1a70a09d61b8384983b0908fc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104692'
---
## Vorbereiten der migrierten Daten für den Import in {% data variables.product.prodname_ghe_server %}

1. Kopiere mithilfe des [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp)-Befehls das Migrationsarchiv, das über deine Quellinstanz oder Organisation generiert wurde, in dein {% data variables.product.prodname_ghe_server %}-Ziel:

    ```shell
    $ scp -P 122 <em>/path/to/archive/MIGRATION_GUID.tar.gz</em> admin@<em>hostname</em>:/home/admin/
    ```

{% data reusables.enterprise_installation.ssh-into-target-instance %}

3. Führe den Befehl `ghe-migrator prepare` aus, um das Archiv für den Import auf der Zielinstanz vorzubereiten, und generiere eine neue Migrations-GUID, die du in den nachfolgenden Schritten verwendest:

    ```shell
    ghe-migrator prepare /home/admin/<em>MIGRATION_GUID</em>.tar.gz
    ```

    * Führe `ghe-migrator prepare` erneut aus, und rufe eine neue Migrations-GUID ab, um einen neuen Importversuch zu starten.
    * {% data reusables.enterprise_migrations.specify-staging-path %}

## Liste mit Migrationskonflikten generieren

1. Verwende den `ghe-migrator conflicts`-Befehl mit der Migrations-GUID, um eine *conflicts.csv*-Datei zu generieren:
    ```shell
    $ ghe-migrator conflicts -g <em>MIGRATION_GUID</em> > conflicts.csv
    ```
    - Wenn keine Konflikte gemeldet werden, kannst du die Daten sicher importieren, indem du die Schritte unter [Migrieren von Daten zu deinem Unternehmen](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server/) ausführst.
2. Verwende bei Konflikten den [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp)-Befehl, um *conflicts.csv* auf deinen lokalen Computer zu kopieren:
  ```shell
  $ scp -P 122 admin@<em>hostname</em>:conflicts.csv ~/Desktop
  ```
3. Fahre mit [Beheben von Migrationskonflikten oder Einrichten benutzerdefinierter Zuordnungen](#resolving-migration-conflicts-or-setting-up-custom-mappings) fort.

## Migrationskonflikte überprüfen

1. Öffne *conflicts.csv* mit einem Text-Editor oder einer [CSV-kompatiblen Tabellensoftware](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support).
2. Überprüfe die Datei *conflicts.csv*, um sicherzustellen, dass beim Import die richtigen Aktionen ausgeführt werden. Berücksichtige dabei die Anleitung für die folgenden Beispiele und Verweistabellen.

Die *conflicts.csv*-Datei enthält eine *Migrationszuordnung* von Konflikten und empfohlenen Aktionen. Eine Migrationszuordnung listet auf, welche Daten von der Quellinstanz migriert werden und wie die Daten auf die Zielinstanz angewendet werden.

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map` |
| `organization` | `https://example-gh.source/octo-org` | `https://example-gh.target/octo-org` | `map` |
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/widgets` | `rename` |
| `team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `merge` |

Jede Zeile in *conflicts.csv* bietet die folgenden Informationen:

|    Name      | BESCHREIBUNG   |
|--------------|---------------|
| `model_name` | Der Typ der zu ändernden Daten. |
| `source_url` | Die Quell-URL der Daten. |
| `target_url` | Die erwartete Ziel-URL der Daten.  |
| `recommended_action` | Bevorzugte Aktion, die `ghe-migrator` beim Importieren von Daten ausführt  |

### Mögliche Zuordnungen für jeden Datensatztyp

Es gibt einige verschiedene Zuordnungsaktionen, die `ghe-migrator` beim Übertragen von Daten ausführen kann:

| `action`      | BESCHREIBUNG | Entsprechende Modelle |
|------------------------|-------------|-------------------|
| `import`      | (Standard) Daten von der Quellinstanz werden auf die Zielinstanz importiert. | Alle Datensatztypen
| `map`         | Daten von der Quellinstanz werden durch vorhandene Daten auf der Zielinstanz ersetzt. | Benutzer, Organisationen, Repositorys
| `rename`      | Daten von der Quellinstanz werden umbenannt und anschließend auf die Zielinstanz kopiert. | Benutzer, Organisationen, Repositorys
| `map_or_rename` | Bei Vorhandensein der Zielinstanz sollte die Zuordnung zur Zielinstanz erfolgen. Andernfalls sollte das importierte Modell umbenannt werden. | Benutzer
| `merge`       | Daten von der Quellinstanz werden mit vorhandenen Daten auf der Zielinstanz kombiniert. | Teams

**Es wird dringend empfohlen, die *conflicts.csv*-Datei zu überprüfen und [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) zu verwenden, um sicherzustellen, dass die geeigneten Aktionen ausgeführt werden.** Wenn keine Probleme vorliegen, kannst du mit [Migrieren von Daten zu deinem Unternehmen](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server) fortfahren.


## Migrationskonflikte beheben und benutzerdefinierte Zuordnungen einrichten

Wenn du der Meinung bist, dass `ghe-migrator` eine nicht ordnungsgemäße Änderung vornimmt, kannst du Korrekturen vornehmen, indem du die Daten in *conflicts.csv* änderst. Du kannst an allen Zeilen in *conflicts.csv* Änderungen vornehmen.

Angenommen, du bemerkst, dass der Benutzer `octocat` aus der Quelle `octocat` im Ziel zugeordnet wird:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/octocat` | `map`

Du kannst den Benutzer einem anderen Benutzer auf der Zielinstanz zuordnen. Angenommen, du weißt, dass `octocat` im Ziel eigentlich `monalisa` sein sollte. Du kannst die `target_url`-Spalte in *conflicts.csv* so ändern, dass auf `monalisa` verwiesen wird:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `map`

Weiteres Beispiel: Wenn du das `octo-org/widgets`-Repository in `octo-org/amazing-widgets` in der Zielinstanz umbenennen möchtest, ändere `target_url` in `octo-org/amazing-widgets` und `recommend_action` in `rename`:

| `model_name`   | `source_url`   | `target_url` | `recommended_action` |
|--------------|--------------|------------|--------------------|
| `repository`   | `https://example-gh.source/octo-org/widgets` | `https://example-gh.target/octo-org/amazing-widgets` | `rename`   |

### Benutzerdefinierte Zuordnungen hinzufügen

Während einer Migration geschieht es häufig, dass migrierte Benutzer andere Benutzernamen auf der Zielinstanz als auf der Quellinstanz besitzen.

Mit einer Liste der Benutzernamen von der Quellinstanz und einer Liste der Benutzernamen von der Zielinstanz kannst du eine CSV-Datei mit benutzerdefinierten Zuordnungen erstellen und anschließend anwenden, um sicherzustellen, dass der Benutzername und Inhalt jedes Benutzers am Ende einer Migration richtig zugeordnet werden.

Du kannst schnell eine CSV-Datei der migrierten Benutzer*innen im CSV-Format erstellen, die erforderlich ist, um benutzerdefinierte Zuordnungen mithilfe des [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data)-Befehls anzuwenden:

```shell
$ ghe-migrator audit -m user -g <em>MIGRATION_GUID</em> > users.csv
```

Nun kannst du diese CSV-Datei bearbeiten und die neue URL für jede*n Benutzer*in eingeben, die du zuordnen oder umbenennen möchtest. Aktualisiere dann die vierte Spalte, damit `map` bzw. `rename` entsprechend vorliegt.

Um beispielsweise den Benutzer `octocat` in `monalisa` im Ziel `https://example-gh.target` umzubenennen, erstelle eine Zeile mit dem folgenden Inhalt:

| `model_name`   | `source_url`   | `target_url` | `state` |
|--------------|--------------|------------|--------------------|
| `user`         | `https://example-gh.source/octocat` | `https://example-gh.target/monalisa` | `rename`

Mit demselben Prozess kannst du Zuordnungen für jeden Datensatz erstellen, der benutzerdefinierte Zuordnungen unterstützt. Weitere Informationen findest du in der [Tabelle zu möglichen Zuordnungen für Datensätze](/enterprise/admin/guides/migrations/reviewing-migration-conflicts#possible-mappings-for-each-record-type).

### Geänderte Migrationsdaten anwenden

1. Nachdem du Änderungen vorgenommen hast, verwende den Befehl [`scp`](https://acloudguru.com/blog/engineering/ssh-and-scp-howto-tips-tricks#scp), um deine bearbeitete *conflicts.csv*-Datei (oder eine beliebige andere *.csv*-Zuordnungsdatei im richtigen Format) auf die Zielinstanz anzuwenden:

    ```shell
    $ scp -P 122 ~/Desktop/conflicts.csv admin@<em>hostname</em>:/home/admin/
    ```

2. Ordne die Migrationsdaten mithilfe des `ghe-migrator map`-Befehls neu zu. Übergib dazu den Pfad zu deiner bearbeiteten *.csv*-Datei und die Migrations-GUID:

    ```shell
    $ ghe-migrator map -i conflicts.csv  -g <em>MIGRATION_GUID</em>
    ```

3. Wenn der `ghe-migrator map -i conflicts.csv  -g MIGRATION_GUID`-Befehl berichtet, dass noch immer Konflikte bestehen, führe den Vorgang zum Beheben von Migrationskonflikten erneut durch.
