---
title: Erste Schritte mit der Überprüfungs-API
intro: 'Mit der Überprüfungsausführungs-API kannst du GitHub-Apps erstellen, die leistungsstarke Überprüfungen auf Codeänderungen in einem Repository durchführen. Du kannst Apps erstellen, die Continuous Integration, Codelinting oder Codescandienste ausführen und detailliertes Feedback zu Commits bereitstellen.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Get started - Checks API
ms.openlocfilehash: 6d98940d9cf4f4fd534034e142aa3d86a0900406
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710243'
---
## Übersicht

Anstelle von binären Erfolgs- bzw. Fehler-Buildstatus können GitHub-Apps umfangreiche Status melden, Codezeilen mit detaillierten Informationen kommentieren und Tests erneut ausführen. Die Funktionen der Überprüfungs-API sind nur für deine GitHub-Apps verfügbar.

Unter [Erstellen von CI-Tests mit der Überprüfungs-API](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/) findest du ein Beispiel für die Verwendung der Überprüfungs-API mit einer {% data variables.product.prodname_github_app %}.

## Informationen zu Überprüfungssammlungen

Wenn Code in ein Repository gepusht wird, erstellt GitHub eine Überprüfungssammlung für den letzten Commit. Eine Überprüfungssammlung ist eine Sammlung von [Überprüfungsausführungen](/rest/reference/checks#check-runs), die von einer einzelnen GitHub-App für einen bestimmten Commit erstellt wurde. Überprüfungssammlungen fassen den Status und das Ergebnis der Überprüfungsausführungen zusammen, die in einer Sammlung enthalten sind.

![Workflow der Überprüfungssammlungen](/assets/images/check_suites.png)

Die Überprüfungssammlung meldet die `conclusion` der Überprüfungsausführung mit der höchsten Priorität in der `conclusion` der Überprüfungssammlung. Wenn beispielsweise drei Überprüfungen die Ergebnisse `timed_out`, `success` und `neutral` haben, ist das Ergebnis der Überprüfungssammlung `timed_out`.

Wenn Code in das Repository gepusht wird, erstellt GitHub immer automatisch eine Überprüfungssammlung. Dieser Standardflow sendet das `check_suite`-Ereignis (mit der `requested`-Aktion) an alle GitHub-Apps, die über die Berechtigung `checks:write` verfügen. Wenn deine GitHub-App das Ereignis `check_suite` empfängt, kann sie neue Überprüfungsausführungen für den letzten Commit erstellen. GitHub fügt abhängig vom Repository und dem SHA-Wert der Überprüfungsausführung automatisch neue Überprüfungsausführungen zur richtigen [Überprüfungssammlung](/rest/reference/checks#check-suites) hinzu.

Wenn du den automatischen Standardflow nicht verwenden möchtest, kannst du dies beim Erstellen der Überprüfungssammlungen festlegen. Verwende zum Ändern der Standardeinstellungen für die Erstellung von Überprüfungssammlungen den Endpunkt [Aktualisieren von Repositoryeinstellungen für Überprüfungssammlungen](/rest/reference/checks#update-repository-preferences-for-check-suites). Alle Änderungen an den Einstellungen von automatischen Flows werden im Überwachungsprotokoll des Repositorys aufgezeichnet. Wenn du den automatischen Flow deaktiviert hast, kannst du eine Überprüfungssammlung mithilfe des Endpunkts [Erstellen einer Überprüfungssammlung](/rest/reference/checks#create-a-check-suite) erstellen. Du solltest weiterhin den Endpunkt [Erstellen einer Überprüfungsausführung](/rest/reference/checks#create-a-check-run) verwenden, um Feedback zu einem Commit bereitzustellen.

{% data reusables.apps.checks-availability %}

Die GitHub-App muss über die Berechtigung `checks:write` verfügen und kann außerdem den Webhook [check_suite](/webhooks/event-payloads/#check_suite) abonnieren, um die Überprüfungssammlungs-API zu verwenden.

{% data reusables.shortdesc.authenticating_github_app %}

## Informationen zu Überprüfungsausführungen

Eine Überprüfungsausführung ist ein einzelner Test, der Teil einer Überprüfungssammlung ist. Jede Ausführung enthält einen Status und ein Ergebnis.

![Workflow der Überprüfungsausführungen](/assets/images/check_runs.png)

Wenn eine Überprüfungsausführung sich mehr als 14 Tage in einem unvollständigen Zustand befindet, ändert sich `conclusion` für die Überprüfungsausführung in `stale` und wird in {% data variables.product.prodname_dotcom %} als veraltet mit {% octicon "issue-reopened" aria-label="The issue-reopened icon" %} angezeigt. Nur {% data variables.product.prodname_dotcom %} kann Überprüfungsausführungen als `stale` markieren. Weitere Informationen zu den möglichen Ergebnissen einer Überprüfungsausführung findest du unter [`conclusion`-Parameter](/rest/reference/checks#create-a-check-run--parameters).

Sobald du den [`check_suite`](/webhooks/event-payloads/#check_suite)-Webhook erhältst, kannst du die Überprüfungsausführung erstellen, auch wenn die Überprüfung nicht abgeschlossen ist. Du kannst den `status` der Überprüfungsausführung aktualisieren, sobald er mit den Werten `queued`, `in_progress` oder `completed` abgeschlossen ist, und du kannst den `output` aktualisieren, sobald weitere Details verfügbar sind. Eine Überprüfungsausführung kann Zeitstempel, einen Link zu weiteren Details auf deiner externen Website, detaillierte Anmerkungen zu bestimmten Codezeilen und Informationen zur durchgeführten Analyse enthalten.

![Anmerkungen von Überprüfungsausführungen](/assets/images/check_run_annotations.png)

Eine Überprüfung kann auch manuell mithilfe der GitHub-Benutzeroberfläche erneut ausgeführt werden. Weitere Details findest du unter [Informationen zu Statusüberprüfungen](/articles/about-status-checks#checks). Wenn dies geschieht, erhält die GitHub-App, die die Überprüfung erstellt hat, den [`check_run`](/webhooks/event-payloads/#check_run)-Webhook, der eine neue Überprüfungsausführung anfordert. Wenn du eine Überprüfungsausführung generierst, ohne eine Überprüfungssammlung zu erstellen, erstellt GitHub die Überprüfungssammlung automatisch.

{% data reusables.apps.checks-availability %}

Die GitHub-App muss über die Berechtigung `checks:write` verfügen und kann außerdem den Webhook [check_run](/webhooks/event-payloads#check_run) abonnieren, um die Überprüfungsausführungs-API zu verwenden.

## Überprüfungsausführungen und angeforderte Aktionen

Wenn du eine Überprüfungsausführung mit angeforderten Aktionen einrichtest (nicht zu verwechseln mit {% data variables.product.prodname_actions %}), kannst du eine Schaltfläche in der Pull Request-Anzeige auf {% data variables.product.prodname_dotcom %} anzeigen, mit der Benutzer*innen deine {% data variables.product.prodname_github_app %} anfordern können, um zusätzliche Aufgaben auszuführen.

Beispielsweise könnte eine Codelinting-App angeforderte Aktionen verwenden, um eine Schaltfläche in einem Pull Request anzuzeigen, wodurch erkannte Syntaxfehler automatisch behoben werden können.

Verwende das [`actions`-Objekt](/rest/reference/checks#create-a-check-run--parameters), wenn du [eine Überprüfungsausführung erstellst](/rest/reference/checks/#create-a-check-run), um eine Schaltfläche zu erstellen, die zusätzliche Aktionen von deiner App anfordern kann. Beispielsweise zeigt das folgende `actions`-Objekt eine Schaltfläche in einem Pull Request mit der Bezeichnung „Dies beheben“. Die Schaltfläche wird nach Abschluss der Überprüfungsausführung angezeigt.

   ```json
  "actions": [{
      "label": "Fix this",
      "description": "Let us fix that for you",
      "identifier": "fix_errors"
    }]
  ```

  ![Schaltfläche mit angeforderter Aktion für die Überprüfungsausführung](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Wenn ein*e Benutzer*in auf die Schaltfläche klickt, sendet {% data variables.product.prodname_dotcom %} den [`check_run.requested_action`-Webhook](/webhooks/event-payloads/#check_run) an deine App. Wenn deine App ein `check_run.requested_action`-Webhookereignis empfängt, kann sie in den Webhooknutzdaten nach dem `requested_action.identifier`-Schlüssel suchen, um zu ermitteln, welche Schaltfläche betätigt wurde, und die angeforderte Aufgabe ausführen.

Unter [Erstellen von CI-Tests mit der Überprüfungs-API](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/#part-2-creating-the-octo-rubocop-ci-test) findest du ein detailliertes Beispiel für das Einrichten von angeforderten Aktionen mit der Überprüfungs-API.

{% ifversion fpt or ghec %}
## Aufbewahrung von Überprüfungsdaten

{% data reusables.pull_requests.retention-checks-data %} {% endif %}
