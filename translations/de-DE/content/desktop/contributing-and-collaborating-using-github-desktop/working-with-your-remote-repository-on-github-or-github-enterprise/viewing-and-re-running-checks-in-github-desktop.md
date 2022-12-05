---
title: Anzeigen und erneutes Ausführen von Überprüfungen in GitHub Desktop
shortTitle: Viewing and re-running checks
intro: 'Du kannst den Status der Prüfungen anzeigen und diese in {% data variables.product.prodname_desktop %} erneut ausführen.'
versions:
  fpt: '*'
ms.openlocfilehash: d763dc4e4b30844b905b4e601df6c9cb500c8094
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147068021'
---
## Informationen zu Überprüfungen in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} zeigt den Status von Überprüfungen an, die in deinen Pull-Request-Branches ausgeführt werden. Der Überprüfungsbadge neben dem Branchnamen zeigt die Status *Ausstehend, Erfolgreich* oder *Fehlgeschlagen* für die Überprüfung an. Du kannst auch alle, die fehlgeschlagenen oder einzelne Überprüfungen erneut ausführen, wenn du den Status der Überprüfungen in {% data variables.product.prodname_desktop %} anzeigst. Weitere Informationen zum Einrichten von Überprüfungen in deinem Repository findest du unter [Informationen zu Statusüberprüfungen](/github/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks).

{% data variables.product.prodname_desktop %} zeigt auch eine Systembenachrichtigung an, wenn bei Überprüfungen ein Fehler auftritt. Weitere Informationen zum Aktivieren von Benachrichtigungen findest du unter [Konfigurieren von Benachrichtigungen in GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/configuring-notifications-in-github-desktop).

## Anzeigen und erneutes Ausführen von Überprüfungen

{% data reusables.desktop.current-branch-menu %} {% data reusables.desktop.click-pull-requests %} ![Registerkarte „Pull Requests“ im Dropdownmenü „Aktueller Branch“](/assets/images/help/desktop/branch-drop-down-pull-request-tab.png) {% data reusables.desktop.choose-pr-from-list %} ![Liste aller offenen Pull Requests im Repository](/assets/images/help/desktop/click-pull-request.png)
4. Klicke auf die Nummer des Pull Requests rechts neben dem Branchnamen des Pull Requests.
  ![Überprüfungsanzeige neben dem Branchnamen](/assets/images/help/desktop/checks-dialog.png)
5. Klicke auf **{% octicon "sync" aria-label="The sync icon" %} Erneut ausführen** und dann auf **Fehlgeschlagene Überprüfungen erneut ausführen**, um fehlgeschlagene Überprüfungen erneut auszuführen.
  ![Erneutes Ausführen fehlgeschlagener Überprüfungen](/assets/images/help/desktop/re-run-failed-checks.png)
6. Zeige zum erneuten Ausführen einzelner Überprüfungen auf die einzelne Überprüfung, die du erneut ausführen möchtest, und klicke auf das {% octicon "sync" aria-label="The sync icon" %} Symbol zum erneuten Ausführen der Überprüfung.
  ![Erneutes Ausführen einzelner Überprüfungen](/assets/images/help/desktop/re-run-individual-checks.png)
7. Es wird ein Bestätigungsdialogfeld mit der Zusammenfassung der Überprüfungen angezeigt, die erneut ausgeführt werden. Klicke auf **Überprüfungen erneut ausführen**, um zu bestätigen, dass du die Überprüfungen erneut ausführen möchtest.
  ![Dialogfeld zur Bestätigung der erneuten Ausführung](/assets/images/help/desktop/re-run-confirmation-dialog.png)
