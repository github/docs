---
title: Informationen zu Statuschecks
intro: 'Statusüberprüfungen informieren dich darüber, ob deine Commits die Bedingungen erfüllen, die für das Repository festgelegt wurden, an dem du mitwirkst.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
  - /articles/about-statuses
  - /articles/about-status-checks
  - /github/collaborating-with-issues-and-pull-requests/about-status-checks
  - /github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 759889bd4f014e4bc2afff5f182a0b7258c8bb07
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147065866'
---
Statuschecks basieren auf externen Prozessen, beispielsweise Builds mit fortlaufender Integration, die bei jedem Push an ein Repository ausgeführt werden. Du kannst die Zustände *ausstehend*, *übergeben* oder *fehlerhaft* der Statusüberprüfungen neben einzelnen Commits in deinem Pull Request anzeigen.

![Liste der Commits und Status](/assets/images/help/pull_requests/commit-list-statuses.png)

Personen mit Schreibberechtigungen für ein Repository können den Zustand für Statusprüfungen im Repository festlegen.

Du kannst den Gesamtzustand des letzten Commits an einen Branch auf der Branch-Seite deines Repositorys oder in der Liste der Pull Requests deines Repositorys sehen.

{% data reusables.pull_requests.required-checks-must-pass-to-merge %}

## Arten von Statuschecks auf {% data variables.product.product_name %}

Es gibt zwei Arten von Statuschecks auf {% data variables.product.product_name %}:

- Prüfungen
- Status

_Überprüfungen_ unterscheiden sich von _Status_ dadurch, dass sie Zeilenanmerkungen und detailliertere Meldungen enthalten und nur für die Verwendung mit {% data variables.product.prodname_github_apps %} verfügbar sind.

Organisationsinhaber und Benutzer mit Push-Zugriff auf ein Repository können mit der API von {% data variables.product.product_name %} Prüfungen und Status erstellen. Weitere Informationen findest du unter [Überprüfungen](/rest/reference/checks) und [Status](/rest/reference/commits#commit-statuses).

## Prüfungen

Wenn _Überprüfungen_ in einem Repository eingerichtet sind, enthalten Pull Requests eine Registerkarte **Überprüfungen**, auf der du die detaillierte Buildausgabe aus Statusüberprüfungen anzeigen und fehlerhafte Überprüfungen erneut ausführen kannst.

![Statuschecks innerhalb eines Pull Requests](/assets/images/help/pull_requests/checks.png)

{% note %}

**Hinweis**: Die Registerkarte **Überprüfungen** wird für Pull Requests nur ausgefüllt, wenn du für das Repository _Überprüfungen_ einrichtest, nicht _Status_.

{% endnote %}

Wenn eine Überprüfung aufgrund einer bestimmten Zeile in einem Commit nicht bestanden wird, siehst du Einzelheiten zum Fehler, zur Warnung oder zum Hinweis neben dem entsprechenden Code auf der Registerkarte **Dateien** des Pull Requests.

![Details eines Statuschecks](/assets/images/help/pull_requests/checks-detailed.png)

Du kannst zwischen den Überprüfungszusammenfassungen für verschiedene Commits in einem Pull Request navigieren, indem du das Dropdownmenü „Commit“ auf der Registerkarte **Unterhaltung** verwendest.

![Prüfungszusammenfassungen für verschiedene Commits in einem Dropdownmenü](/assets/images/help/pull_requests/checks-summary-for-various-commits.png)

### Prüfungen für einzelne Commits überspringen und anfordern

Wenn ein Repository so konfiguriert ist, dass es automatisch Prüfungen für Pushes anfordert, kannst du die Prüfungen für einen einzelnen Commit überspringen, den du überträgst. Wenn ein Repository _nicht_ so konfiguriert ist, dass es automatisch Überprüfungen für Pushes anfordert, kannst du die Überprüfungen für einen einzelnen Commit anfordern, den du pushst. Weitere Informationen zu diesen Einstellungen findest du unter [Überprüfen von Suites](/rest/reference/checks#update-repository-preferences-for-check-suites).

Um Prüfungen für deinen Commit zu überspringen oder anzufordern, füge eine der folgenden Trailerzeilen an das Ende deiner Commit-Mitteilung an:

- Um Überprüfungen für einen Commit zu _überspringen_, gib deine Commitmitteilung und eine kurze, aussagekräftige Beschreibung deiner Änderungen ein. Füge nach der Commitbeschreibung vor dem schließenden Anführungszeichen zwei leere Zeilen hinzu, gefolgt von `skip-checks: true`:
  ```shell
  $ git commit -m "Update README
  >
  >
  skip-checks: true"
  ```
- Um Überprüfungen für einen Commit _anzufordern_, gib deine Commitmitteilung und eine kurze, aussagekräftige Beschreibung deiner Änderungen ein. Füge nach der Commitbeschreibung vor dem schließenden Anführungszeichen zwei leere Zeilen hinzu, gefolgt von `request-checks: true`:
  ```shell
  $ git commit -m "Refactor usability tests
  >
  >
  request-checks: true"
  ```

{% ifversion fpt or ghec %}
### Aufbewahrung von Statusüberprüfungen

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
