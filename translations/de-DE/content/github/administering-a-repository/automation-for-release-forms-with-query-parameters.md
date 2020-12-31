---
title: Automatisierung für Releaseformulare mit Abfrageparametern
intro: 'Du kannst Releases schnell erstellen, wenn Du das neue Releaseformular automatisch mit angepassten Informationen ausfüllst. Füge dazu Abfrageparameter zur URL der Formularseite hinzu.'
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Abfrageparameter sind optionale Bestandteile einer URL, die Sie anpassen können, um eine bestimmte Ansicht einer Webseite weiterzugeben, z. B. gefilterte Suchergebnisse, eine Issue-Vorlage oder die Seite mit dem Veröffentlichungsformular auf {% data variables.product.prodname_dotcom %}. Um eigene Abfrageparameter zu erstellen, musst Du Schlüssel- und Wertepaar abgleichen.

Du musst die erforderlichen Berechtigungen für jede Aktion haben, um den entsprechenden Abfrageparameter zu verwenden. Du benötigst beispielsweise die Berechtigung zum Erstellen von Releases, um das Releaseformular vorab auszufüllen. Weitere Informationen findest Du unter „[Verwalten von Releases in einem Repository](/github/administering-a-repository/managing-releases-in-a-repository)."

Wenn Du eine ungültige URL mithilfe von Suchparametern erstellst oder wenn Du nicht über die erforderlichen Berechtigungen verfügst, gibt die URL eine 404-Fehlerseite zurück.

### Unterstützte Abfrageparameter

| Abfrageparameter | Beispiel                                                                                                                                                                                           |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Tag`            | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` erstellt einen Release basierend auf einem Tag namens „v1.0.1“.                                                                    |
| `target`         | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` erstellt einen Release basierend auf dem jüngsten Commit zum Branch „release-1.0.1“.                                     |
| `title`          | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` erstellt einen Release mit dem Namen „octo-1.0.1“ basierend auf einem Tag namens „v1.0.1“.                    |
| `Text`           | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` erstellt einen Release mit der Beschreibung „Adds widget support“ (Fügt Widget-Unterstützung hinzu) im Releasetext. |
| `prerelease`     | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` erstellt einen Release, der als nicht produktionsbereit identifiziert wird.                                                      |

### Weiterführende Informationen

- „[Informationen zur Automatisierung für Issues und Pull-Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)“
