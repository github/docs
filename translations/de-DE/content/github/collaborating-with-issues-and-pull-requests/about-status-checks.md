---
title: Informationen zu Statuschecks
intro: Statuschecks informieren Dich darüber, ob Deine Commits die festgelegten Bedingungen erfüllen, die für das Repository gelten, an dem Du mitwirkst.
redirect_from:
  - /articles/about-statuses/
  - /articles/about-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pull requests
---

Statuschecks basieren auf externen Prozessen, beispielsweise Builds mit fortlaufender Integration, die bei jedem Push an ein Repository ausgeführt werden. Du kannst den Zustand *Ausstehend*, *Bestanden* oder *Nicht bestanden* des Statuschecks neben den einzelnen Commits in Deinem Pull Request sehen.

![Liste der Commits und Status](/assets/images/help/pull_requests/commit-list-statuses.png)

Personen mit Schreibberechtigungen für ein Repository können den Zustand für Statusprüfungen im Repository festlegen.

Du kannst den Gesamtzustand des letzten Commits an einen Branch auf der Branch-Seite Deines Repositorys oder in der Liste der Pull Requests Deines Repositorys sehen.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

### Arten von Statuschecks auf {% data variables.product.product_name %}

Es gibt zwei Arten von Statuschecks auf {% data variables.product.product_name %}:

- Prüfungen
- Status

_Prüfungen_ unterscheiden sich von _Status_ dadurch, dass sie Zeilenanmerkungen und detailliertere Meldungen enthalten und nur für die Verwendung mit {% data variables.product.prodname_github_app %}s verfügbar sind.

Organisationsinhaber und Benutzer mit Push-Zugriff auf ein Repository können mit der API von {% data variables.product.product_name %} Prüfungen und Status erstellen. For more information, see "[Checks](/rest/reference/checks)" and "[Statuses](/rest/reference/repos#statuses)."

### Prüfungen

Wenn _Prüfungen_ in einem Repository eingerichtet sind, weisen Pull Requests die Registerkarte **Checks** (Prüfungen) auf, auf der Du detaillierte Buildausgabe von Statuschecks ansehen und fehlgeschlagene Prüfungen wiederholen kannst.

![Statuschecks innerhalb eines Pull Requests](/assets/images/help/pull_requests/checks.png)

Wenn eine Prüfung aufgrund einer bestimmten Zeile in einem Commit nicht bestanden wird, findest Du Einzelheiten über den Fehler, die Warnung oder den Hinweis neben dem entsprechenden Code auf der Registerkarte **Files** (Dateien) des Pull Requests.

![Details eines Statuschecks](/assets/images/help/pull_requests/checks-detailed.png)

Du kannst zwischen den Prüfungszusammenfassungen für verschiedene Commits in einem Pull Request navigieren, indem Du das Dropdownmenü „Commit“ auf der Registerkarte **Conversation** (Unterhaltung) verwendest.

![Prüfungszusammenfassungen für verschiedene Commits in einem Dropdownmenü](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

#### Prüfungen für einzelne Commits überspringen und anfordern

Wenn ein Repository so konfiguriert ist, dass es automatisch Prüfungen für Pushes anfordert, kannst Du die Prüfungen für einen einzelnen Commit überspringen, den Du überträgst. Wenn ein Repository _nicht_ so konfiguriert ist, dass es automatisch Prüfungen für Pushes anfordert, kannst Du Prüfungen für einen einzelnen Commit anfordern, den Du überträgst. For more information on these settings, see "[Check Suites](/v3/checks/suites/#set-preferences-for-check-suites-on-a-repository)."

Um Prüfungen für Deinen Commit zu überspringen oder anzufordern, füge eine der folgenden Trailerzeilen an das Ende Deiner Commit-Mitteilung an:

- Um Prüfungen für einen Commit zu _überspringen_, gib Deine Commit-Mitteilung und eine kurze, aussagekräftige Beschreibung Deiner Änderungen ein. Füge nach Deiner Commit-Beschreibung anstelle eines abschließenden Anführungszeichens zwei leere Zeilen hinzu, gefolgt von `skip-checks: true`:
  ```shell
  $ git commit -m "Update README.
  >
  >
  skip-checks: true
  ```
  - Um Prüfungen für einen Commit _anzufordern_, gib Deine Commit-Mitteilung und eine kurze, aussagekräftige Beschreibung Deiner Änderungen ein. Füge nach Deiner Commit-Beschreibung anstelle eines abschließenden Anführungszeichens zwei leere Zeilen hinzu, gefolgt von `request-checks: true`:
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  request-checks: true
  ```
  
