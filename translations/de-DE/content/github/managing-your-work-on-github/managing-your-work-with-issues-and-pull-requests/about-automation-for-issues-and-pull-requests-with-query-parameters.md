---
title: Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern
intro: Du kannst Abfrageparameter verwenden zur Freigabe von URLs mit benutzerdefinierten Informationen.
redirect_from:
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
Abfrageparameter sind optionale Bestandteile einer URL, die Sie anpassen können, um eine bestimmte Ansicht einer Webseite freizugeben, beispielsweise Suchfilterergebnisse oder eine Issue-Vorlage auf {% data variables.product.prodname_dotcom %}. Um eigene Abfrageparameter zu erstellen, musst Du Schlüssel- und Wertepaar abgleichen.

{% tip %}

**Tipp:** Du kannst auch Issue-Vorlagen erstellen, die sich mit standardmäßigen Kennzeichnungen, Bearbeitern und einem Issue-Titel öffnen. Weitere Informationen findest Du unter „[Issue-Vorlagen für Dein Repository konfigurieren](/articles/configuring-issue-templates-for-your-repository)" oder „[ Eine einzelne Issue-Vorlage für Deine Repository manuell erstellen](/articles/manually-creating-a-single-issue-template-for-your-repository)."

{% endtip %}

Du musst die erforderlichen Berechtigungen für jede Aktion haben, um den entsprechenden Abfrageparameter zu verwenden. Beispielsweise benötigst Du die Berechtigung, einem Issue eine Kennzeichnung hinzuzufügen, um den Abfrageparameter `labels` (Kennzeichnung) zu verwenden.

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a `404 Not Found` error page. If you create a URL that exceeds the server limit, the URL will return a `414 URI Too Long` error page.

### Unterstützte Abfrageparameter

| Abfrageparameter | Beispiel                                                                                                                                                                                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Text`           | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&body=Fixes+the+problem.` creates a pull request, comparing the branches `main` and `pull-request-test`, with the comment "Fixes the problem" in the pull request body. |
| `title`          | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` erstellt einen Issue mit der Kennzeichnung „bug“ (Fehler) und dem Titel „New bug report“ (Neuer Fehlerbericht).                                                          |
| `labels`         | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&labels=bug` creates a pull request, comparing the branches `main` and `pull-request-test`, with the label "bug."                                                       |
| `Vorlage`        | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` erstellt einen Issue mit einer Vorlage im Issue-Text.                                                                                                                             |
| `Meilensteine`   | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` erstellt einen Issue mit dem Meilenstein „testing milestones“ (Meilensteine testen).                                                                                            |
| `assignees`      | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` erstellt einen Issue und weist ihn @octocat zu.                                                                                                                                            |
| `projects`       | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` erstellt einen Issue mit dem Titel „Bug fix“ (Fehlerbehebung) und fügt ihn dem Projektboard 1 der Organisation hinzu.                                                  |

### Issues und Pull Requests mit benutzerdefinierten Vorlagen ausfüllen

{% data reusables.repositories.legacy-issue-template-tip %}

Du kannst den Abfrageparameter `template` (Vorlage) verwenden, um eine Vorlage anzugeben, die automatisch den Text des Issues oder Pull Requests ausfüllt. Der Abfrageparameter `template` funktioniert mit Vorlagen, die in einem `ISSUE_TEMPLATE`- oder `PULL_REQUEST_TEMPLATE`-Unterverzeichnis im Stammverzeichnis, `docs/`- oder `.github/`-Verzeichnis in einem Repository gespeichert sind.

Wenn ein Repository nur die Standardvorlage für Pull Requests oder Issues enthält, enthalten alle neuen Issues oder Pull Requests die Standardvorlage im Text.

Weitere Informationen findest Du unter „[Eine Pull-Request-Vorlage für Dein Repository erstellen](/articles/creating-a-pull-request-template-for-your-repository)“ oder „[Eine einzelne Issue-Vorlage für Dein Repository manuell erstellen](/articles/manually-creating-a-single-issue-template-for-your-repository).“

### Weiterführende Informationen

- „[Automatisierung für Releaseformulare mit Abfrageparametern](/articles/automation-for-release-forms-with-query-parameters)“
