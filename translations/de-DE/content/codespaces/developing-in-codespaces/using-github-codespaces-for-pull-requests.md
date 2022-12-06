---
title: Verwenden von GitHub Codespaces für Pull Requests
shortTitle: Pull requests
intro: 'Du kannst {% data variables.product.prodname_github_codespaces %} in deinem Webbrowser oder in {% data variables.product.prodname_vscode %} verwenden, um Pull Requests zu erstellen und zu überprüfen sowie um auf Reviewkommentare zu antworten.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-for-pull-requests
ms.openlocfilehash: 6932f8eb9095987bfe808080983970c8807b6d93
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159645'
---
## Informationen zu Pull Requests in {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} bietet dir viele der Möglichkeiten, die du zum Arbeiten mit Pull Requests benötigst:

- [Erstellen eines Pull Requests](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#raising-a-pull-request): Mit Hilfe des Terminals und der Git-Befehle oder der Quellcodeverwaltungsansicht kannst du Pull Requests genau wie auf der {% data variables.product.prodname_dotcom_the_website %} erstellen. Wenn das Repository eine Pull Request-Vorlage verwendet, kannst du dies in der Quellcodeverwaltungsansicht verwenden.
- [Öffnen eines Pull Requests](#opening-a-pull-request-in-codespaces): Du kannst einen vorhandenen Pull Request in einem Codespace öffnen, sofern du Codespacezugriff auf den Branch hast, in den gemergt wird.
- [Überprüfen eines Pull Requests](#reviewing-a-pull-request-in-codespaces): Nachdem du einen Pull Request in einem Codespace geöffnet hast, kannst du mit der Ansicht „GitHub-Pull Request“ Überprüfungskommentare hinzufügen und Pull Requests genehmigen. Du kannst {% data variables.product.prodname_github_codespaces %} auch verwenden, um [Reviewkommentare anzuzeigen](#view-comments-from-a-review-in-codespaces).

## Öffnen eines Pull Requests in {% data variables.product.prodname_codespaces %}

{% data reusables.repositories.sidebar-pr %}

1. Klicke in der Liste der Pull Requests auf den Pull Request, den du in {% data variables.product.prodname_codespaces %} öffnen möchtest.
1. Klicke auf der rechten Seite deines Bildschirms auf **{% octicon "code" aria-label="The code icon" %}-Code**. 
1. Klicke in der Registerkarte {% data variables.product.prodname_codespaces %} auf das Pluszeichen ({% octicon "plus" aria-label="The plus icon" %}).

   ![Option zum Öffnen eines PR in einem Codespace](/assets/images/help/codespaces/open-with-codespaces-pr.png)

   Es wird ein Codespace für den Pull-Request-Branch erstellt und in deinem Standard-Editor für {% data variables.product.prodname_github_codespaces %} geöffnet.

## Überprüfen eines Pull Requests in {% data variables.product.prodname_codespaces %}

1. Wenn dein Standard-Editor auf {% data variables.product.prodname_vscode %} oder {% data variables.product.prodname_vscode %} für Web festgelegt ist, öffne den Pull Request in einem Codespace, wie oben unter [Öffnen eines Pull Requests](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests#opening-a-pull-request-in-codespaces) beschrieben.
2. Klicke in der Aktivitätsleiste auf die Ansicht **GitHub-Pull-Request**. Diese Ansicht wird nur angezeigt, wenn du einen Pull Request in einem Codespace öffnest.
  ![Option zum Öffnen von PR in einem Codespace](/assets/images/help/codespaces/github-pr-view.png)
3. Klicke zum Reviewen einer bestimmten Datei auf das Symbol für **Datei öffnen** in der Randleiste.
  ![Option zum Öffnen von PR in einem Codespace](/assets/images/help/codespaces/changes-in-files.png)
4. Klicke zum Hinzufügen von Überprüfungskommentaren auf das **+** -Symbol neben der Zeilennummer. Gib deinen Überprüfungskommentar ein, und klicke dann auf **Überprüfung starten**.
  ![Option zum Öffnen von PR in einem Codespace](/assets/images/help/codespaces/start-review.png)
5. Wenn du mit dem Hinzufügen von Reviewkommentaren fertig bist, kannst du in der Randleiste auswählen, ob du die Kommentare übermitteln, die Änderungen genehmigen oder Änderungen beantragen möchtest.
  ![Option zum Öffnen von PR in einem Codespace](/assets/images/help/codespaces/submit-review.png)

Weitere Informationen zum Überprüfen eines Pull Requests findest du unter [Überprüfen der vorgeschlagenen Änderungen in einem Pull Request](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

## Anzeigen von Kommentaren aus einer Überprüfung in {% data variables.product.prodname_codespaces %}

Wenn du Feedback zu einem Pull Request erhalten hast, kannst du [dieses in einem Codespace](#opening-a-pull-request-in-codespaces) in deinem Webbrowser oder in {% data variables.product.prodname_vscode_shortname %} öffnen, um die [Reviewkommentare](#reviewing-a-pull-request-in-codespaces) anzuzeigen. Von dort aus kannst du auf Kommentare antworten, Reaktionen hinzufügen oder die Überprüfung schließen. 

  ![Option zum Öffnen eines PR in einem Codespace](/assets/images/help/codespaces/incorporating-codespaces.png)



