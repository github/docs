---
title: Migrationskonflikte überprüfen
intro: 'Nachdem Sie eine Liste der Migrationskonflikte generiert haben, sollten Sie diese überprüfen, um sicherzustellen, dass Sie mit den Standardmaßnahmen einverstanden sind, die „ghe-migrator“ bei der Behebung dieser Konflikte durchführt.'
redirect_from:
  - /enterprise/admin/migrations/reviewing-migration-conflicts
versions:
  enterprise-server: '*'
---

1. Verwenden Sie einen Texteditor oder eine [CSV-kompatible Tabellenkalkulationssoftware](https://en.wikipedia.org/wiki/Comma-separated_values#Application_support), um *conflicts.csv* zu öffnen.
2. Überprüfen Sie die Datei *conflicts.csv*, um sicherzustellen, dass die entsprechenden Aktionen beim Import durchgeführt werden. Berücksichtigen Sie dazu die Anleitung aus den folgenden Beispielen und Referenztabellen.

Die Datei *conflicts.csv*enthält eine *Migrationszuordnung* der Konflikte und empfohlenen Aktionen. Eine Migrationszuordnung listet auf, welche Daten von der Quellinstanz migriert werden und wie die Daten auf die Zielinstanz angewendet werden.

| `model_name`   | `source_url`                                           | `target_url`                                           | `recommended_action` |
| -------------- | ------------------------------------------------------ | ------------------------------------------------------ | -------------------- |
| `Benutzer`     | `https://example-gh.source/octocat`                    | `https://example-gh.target/octocat`                    | `map`                |
| `organization` | `https://example-gh.source/octo-org`                   | `https://example-gh.target/octo-org`                   | `map`                |
| `Repository`   | `https://example-gh.source/octo-org/widgets`           | `https://example-gh.target/octo-org/widgets`           | `rename`             |
| `Team`         | `https://example-gh.source/orgs/octo-org/teams/admins` | `https://example-gh.target/orgs/octo-org/teams/admins` | `mergen`             |

Jede Zeile in *conflicts.csv* enthält die folgenden Informationen:

| Name                 | Beschreibung                                                                    |
| -------------------- | ------------------------------------------------------------------------------- |
| `model_name`         | Der Typ der zu ändernden Daten.                                                 |
| `source_url`         | Die Quell-URL der Daten.                                                        |
| `target_url`         | Die erwartete Ziel-URL der Daten.                                               |
| `recommended_action` | Die Aktion, die `ghe-migrator` beim Importieren der Daten bevorzugt durchführt. |

### Mögliche Zuordnungen für jeden Datensatztyp

Es gibt verschiedene Zuordnungsaktionen, die `ghe-migrator` beim Übertragen von Daten durchführen kann.

| `action`        | Beschreibung                                                                                                                                 | Entsprechende Modelle                 |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `import`        | (Standard) Daten von der Quellinstanz werden auf die Zielinstanz importiert.                                                                 | Alle Datensatztypen                   |
| `map`           | Daten von der Quellinstanz werden durch vorhandene Daten auf der Zielinstanz ersetzt.                                                        | Benutzer, Organisationen, Repositorys |
| `rename`        | Daten von der Quellinstanz werden umbenannt und anschließend auf die Zielinstanz kopiert.                                                    | Benutzer, Organisationen, Repositorys |
| `map_or_rename` | Bei Vorhandensein der Zielinstanz sollte die Zuordnung zur Zielinstanz erfolgen. Andernfalls sollte das importierte Modell umbenannt werden. | Benutzer                              |
| `mergen`        | Daten von der Quellinstanz werden mit vorhandenen Daten auf der Zielinstanz kombiniert.                                                      | Teams                                 |

**Es wird dringend empfohlen, dass Sie die Datei *conflicts.csv* überprüfen und den Befehl [`ghe-migrator audit`](/enterprise/admin/guides/migrations/reviewing-migration-data) verwenden, um sicherzustellen, dass die entsprechenden Aktionen durchgeführt werden.** Wenn alles ordnungsgemäß aussieht, können Sie „[Importierte Daten auf {% data variables.product.prodname_ghe_server %} anwenden](/enterprise/admin/guides/migrations/applying-the-imported-data-on-github-enterprise-server)“ lesen.
