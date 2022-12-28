---
title: Konfigurieren von Benachrichtigungen in GitHub Desktop
shortTitle: Configuring notifications
intro: '{% data variables.product.prodname_desktop %} hält dich mit Benachrichtigungen über Ereignisse auf dem Laufenden, die in deinem Pull Request-Branch auftreten.'
versions:
  fpt: '*'
ms.openlocfilehash: e7d99c4c81b64facae41b7697cde9d454e15e96a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060434'
---
## Informationen zu Benachrichtigungen in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} zeigt eine Systembenachrichtigung für Ereignisse an, die im aktuell ausgewählten Repository auftreten. In den folgenden Fällen werden Benachrichtigungen angezeigt:

- Bei der Überprüfung eines Pull Requests ist ein Fehler aufgetreten.
- Bei der Überprüfung eines Pull Requests wurde ein Kommentar hinterlassen, steht eine Genehmigung aus, oder Änderungen wurden angefordert.

Durch Klicken auf die Benachrichtigung wechselt der Anwendungsfokus zu {% data variables.product.prodname_desktop %}, und es werden weitere detaillierte Informationen angezeigt.

## Benachrichtigungen zu Fehlern bei der Überprüfung von Pull Requests

Wenn Änderungen an einem Pull-Request-Branch vorgenommen werden, erhältst du eine Benachrichtigung, wenn bei der Überprüfung ein Fehler auftritt.

![Benachrichtigung zu fehlgeschlagenen Überprüfungen von Pull Requests](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

Durch Klicken auf die Benachrichtigung wird ein Dialogfeld mit Details zu den Überprüfungen angezeigt. Nachdem du überprüft hast, warum die Überprüfungen fehlgeschlagen sind, kannst du sie erneut ausführen oder schnell zum Pull-Request-Branch wechseln, um die Fehler zu beheben. Weitere Informationen findest du unter [Anzeigen und erneutes Ausführen von Überprüfungen in GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop).

![Dialogfeld zu fehlgeschlagenen Überprüfungen](/assets/images/help/desktop/checks-failed-dialog.png)
## Benachrichtigungen zu Überprüfungen von Pull Requests

{% data variables.product.prodname_desktop %} zeigt eine Systembenachrichtigung an, wenn ein Teammitglied Änderungen in deinem Pull Request genehmigt, kommentiert oder angefordert hat. Weitere Informationen zu Überprüfungen von Pull Requests findest du unter [Informationen zu Überprüfungen von Pull Requests](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews).

![Benachrichtigung zur Überprüfung von Pull Requests](/assets/images/help/desktop/pull-request-review-notification.png)

Durch Klicken auf die Benachrichtigung wechselt der Anwendungsfokus zu {% data variables.product.prodname_desktop %}, und es werden weitere Informationen zum Kommentar im Zusammenhang mit der Überprüfung des Pull Requests angezeigt.

![Dialogfeld zur Überprüfung eines Pull Requests](/assets/images/help/desktop/pull-request-review-dialog.png)
## Aktivieren von Benachrichtigungen

Wenn Systembenachrichtigungen für {% data variables.product.prodname_desktop %} deaktiviert sind, kannst du die folgenden Schritte ausführen, um sie zu aktivieren.

{% mac %}

1. Klicke auf das Menü **Apple** und dann auf **Systemeinstellungen**.
2. Wähle **Benachrichtigungen und Fokus** aus.
3. Wähle **{% data variables.product.prodname_desktop %}** aus der Liste der Anwendungen aus.
4. Klicke auf **Benachrichtigungen zulassen**.

![macOS-Einstellungen für Benachrichtigungen und Fokus](/assets/images/help/desktop/mac-enable-notifications.png)

Weitere Informationen zu macOS-Systembenachrichtigungen findest du unter [Verwenden von Benachrichtigungen auf deinem Mac](https://support.apple.com/en-us/HT204079).

{% endmac %}

{% windows %}

1. Öffne das Menü **Start**, und klicke dann auf **Einstellungen**.
2. Wähle **System** und dann **Benachrichtigungen** aus.
3. Suche in der Liste der Anwendungen nach **{% data variables.product.prodname_desktop %}**, und klicke auf **Ein**.

![Aktivieren von Windows-Benachrichtigungen](/assets/images/help/desktop/windows-enable-notifications.png)

Weitere Informationen zu Windows-Systembenachrichtigungen findest du unter [Ändern der Benachrichtigungseinstellungen unter Windows](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e).

{% endwindows %}
