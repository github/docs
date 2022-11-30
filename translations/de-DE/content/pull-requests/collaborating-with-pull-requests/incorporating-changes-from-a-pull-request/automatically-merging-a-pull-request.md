---
title: Automatisches Zusammenführen eines Pull Requests
intro: 'Du kannst das Tempo der Entwicklung erhöhen, indem du das automatische Mergen für einen Pull Request aktivierst, sodass der Pull Request automatisch gemergt wird, wenn alle Mergeanforderungen erfüllt sind.'
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request
shortTitle: Merge PR automatically
ms.openlocfilehash: 07069657c870751849d3b7e80c7817f908c2bda5
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147770913'
---
## Informationen zum automatischen Zusammenführen

Wenn du das automatische Zusammenführen für Pull Requests aktivierst, wird der Pull Request automatisch zusammengeführt, sobald alle erforderlichen Reviews durchgeführt wurden und alle erforderlichen Statusüberprüfungen erfolgreich waren. Durch das automatische Zusammenführen wird verhindert, dass du warten musst, bis alle Anforderungen erfüllt sind. Stattdessen kannst du mit anderen Aufgaben fortfahren.

Bevor das automatische Zusammenführen für einen Pull Request verwendet werden kann, muss diese Funktion für das Repository aktiviert werden. Weitere Informationen findest du unter [Verwalten des automatischen Mergens von Pull Requests in deinem Repository](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository).

Wenn nach dem Aktivieren des automatischen Zusammenführens Benutzer*innen ohne Schreibberechtigung für das Repository neue Änderungen an den Hauptbranch pushen oder den Basisbranch des Pull Requests ändern, wird das automatische Zusammenführen deaktiviert. Beispiel: Wenn ein Maintainer das automatische Mergen für einen Pull Request in einem Fork aktiviert, wird das automatische Mergen deaktiviert, sobald ein Mitwirkender neue Änderungen in den Pull Request pusht.

Über das [{% data variables.product.prodname_github_community %}-Forum](https://github.com/orgs/community/discussions/categories/pull-requests) kann Feedback zu einem Vorgang für das automatische Zusammenführen gegeben werden.

## Aktivieren der automatischen Zusammenführung

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

Benutzer*innen mit Schreibberechtigung für ein Repository können das automatische Zusammenführen für einen Pull Request aktivieren.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Klicke in der Liste „Pull Requests“ auf den Pull Request, der automatisch zusammengeführt werden soll.
1. Zum Auswählen einer Methode für das Zusammenführen klickst du optional im Dropdownmenü **Automatisches Zusammenführen aktivieren** auf die gewünschte Methode. Weitere Informationen findest du unter [Informationen zum Zusammenführen von Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges).
  ![Dropdownmenü „Automatisches Zusammenführen aktivieren“](/assets/images/help/pull_requests/enable-auto-merge-drop-down.png)
1. Klicke auf **Automatisches Zusammenführen aktivieren**.
  ![Schaltfläche zum Aktivieren der automatischen Zusammenführung](/assets/images/help/pull_requests/enable-auto-merge-button.png) {% ifversion fpt %}
1. Bei Auswahl der Methode für einen Merge bzw. Squashmerge gibst du eine Commitnachricht und eine Beschreibung ein. Außerdem wählst du die E-Mail-Adresse für den Ersteller des Mergecommits aus.
  ![Felder für die Eingabe der Commitnachricht und Beschreibung sowie zur Auswahl der E-Mail-Adresse des Commiterstellers](/assets/images/help/pull_requests/pull-request-information-fields.png) {% note %}

  **Hinweis:** Das Dropdownmenü für die E-Mail-Adresse ist nicht verfügbar, wenn du die Privatsphäreeinstellung für E-Mail-Adressen aktiviert hast oder wenn nur eine verifizierte und sichtbare E-Mail-Adresse mit deinem {% data variables.product.company_short %}-Konto verknüpft ist.

  {% endnote %} {% endif %} {% ifversion ghes or ghae or ghec %}
1. Bei Auswahl der Methode für einen Merge bzw. Squashmerge gibst du eine Commitnachricht und eine Beschreibung ein.
   ![Felder zur Eingabe der Commitnachricht und Beschreibung](/assets/images/help/pull_requests/pull-request-information-fields-enterprise.png) {% endif %}
1. Klicke auf **Automatisches Zusammenführen bestätigen**.

## Deaktivieren der automatischen Zusammenführung

Benutzer*innen mit Schreibberechtigung für ein Repository und Pull Request-Ersteller können das automatische Zusammenführen für einen Pull Request deaktivieren.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
1. Klicke in der Liste „Pull Requests“ auf den Pull Request, für den das automatische Zusammenführen deaktiviert werden soll.
1. Klicke im Mergefeld auf **Automatisches Zusammenführen deaktivieren**.
  ![Schaltfläche zum Deaktivieren der automatischen Zusammenführung](/assets/images/help/pull_requests/disable-auto-merge-button.png)
