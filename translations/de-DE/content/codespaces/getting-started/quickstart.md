---
title: 'Schnellstartanleitung für {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: 'Teste {% data variables.product.prodname_github_codespaces %} in fünf Minuten.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
ms.openlocfilehash: f35fa87711ff3a7c33ed252d0d1e87865af619bc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158653'
---
## Einführung

In diesem Leitfaden erstellst du einen Codespace aus einem Vorlagenrepository und erkundest einige der wesentlichen Features, die dir im Codespace zur Verfügung stehen. Du arbeitest in der Browserversion von {% data variables.product.prodname_vscode %}, die zunächst der Standard-Editor für {% data variables.product.prodname_github_codespaces %} ist. Nachdem du diesen Schnellstart ausprobiert hast, kannst du {% data variables.product.prodname_codespaces %} in anderen Editoren verwenden und den Standard-Editor ändern. Die Links findest du am Ende dieses Leitfadens.

In diesem Schnellstart erfährst du, wie du einen Codespace erstellst, eine Verbindung mit einem weitergeleiteten Port herstellst, um deine ausgeführte Anwendung anzuzeigen, deinen Codespace in einem neuen Repository veröffentlichst und dein Setup mit Erweiterungen personalisierst.

Weitere Informationen zur genauen Funktionsweise von {% data variables.product.prodname_github_codespaces %} findest du im Begleitleitfaden [Fundierte Einblicke in {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive).

## Erstellen des Codespace

1. Navigiere zum Vorlagenrepository [github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces).
{% data reusables.codespaces.open-template-in-codespace-step %}

## Ausführen der Anwendung

Sobald dein Codespace erstellt ist, wird dein Vorlagenrepository automatisch hinein geklont. Jetzt kannst du die Anwendung ausführen und in einem Browser starten.

1. Sobald das Terminal geöffnet wird, gib den Befehl `npm run dev` ein. In diesem Beispiel wird ein Node.js-Projekt verwendet, und dieser Befehl führt das Skript mit der Bezeichnung „dev“ in der Datei `package.json` aus, die die im Beispielrepository definierte Webanwendung startet.
   
   ![„npm run dev“ im Terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   Wenn du mit einem anderen Anwendungstyp arbeitest, gib den entsprechenden Startbefehl für dieses Projekt ein.

2. Wenn deine Anwendung gestartet wird, erkennt der Codespace den Port, auf dem die Anwendung ausgeführt wird, und zeigt eine Eingabeaufforderung an, um dir mitzuteilen, dass sie weitergeleitet wurde. 

   ![Popupbenachrichtigung für Portweiterleitung](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Klicke auf **Im Browser öffnen**, um deine ausgeführte Anwendung auf einer neuen Registerkarte anzuzeigen.

## Bearbeiten der Anwendung und Anzeigen von Änderungen

1. Wechsle zurück zu deinem Codespace, und öffne die Datei `haikus.json`, indem du im Explorer darauf klickst.

2. Bearbeite das `text`-Feld des ersten Haikus, um die Anwendung mit deinem eigenen Haiku zu personalisieren.

3. Gehe zurück zur Registerkarte der ausgeführten Anwendung in deinem Browser und aktualisiere sie, um deine Änderungen zu sehen.
   
   {% octicon "light-bulb" aria-label="The lightbulb icon" %} Wenn du die Registerkarte geschlossen hast, öffne den Bereich „Ports“, und klicke auf das Symbol **Im Browser öffnen** für den ausgeführten Port.

   ![Portweiterleitungsbereich](/assets/images/help/codespaces/quickstart-forward-port.png)

## Commit und Push deiner Änderungen

Nachdem du nun einige Änderungen vorgenommen hast, kannst du das integrierte Terminal oder die Quellansicht verwenden, um deine Arbeit in einem neuen Repository zu veröffentlichen.

{% data reusables.codespaces.source-control-display-dark %}
1. Klicke zum Sagen einer Änderungen auf **+** neben der Datei `haikus.json` oder neben **Änderungen**, wenn du mehrere Dateien geändert hast und sie alle stagen möchtest.

   ![Randleiste der Quellcodeverwaltung mit hervorgehobener Stagingschaltfläche](/assets/images/help/codespaces/codespaces-commit-stage.png)

2. Gib eine Commitnachricht ein, die die von dir vorgenommene Änderung beschreibt, und klicke dann auf **Commit**, um deine gestageten Änderungen zu committen.

   ![Seitenleiste der Quellcodeverwaltung mit einer Commitnachricht](/assets/images/help/codespaces/vscode-commit-button.png)

3. Klicke auf **Branch veröffentlichen**.
   
   ![Screenshot: Schaltfläche „Branch veröffentlichen“ in VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)

4. Gib in der Dropdownliste „Repositoryname“ einen Namen für dein neues Repository ein, und wähle dann **Im privaten Repository {% data variables.product.company_short %} veröffentlichen** oder **Im öffentlichen Repository {% data variables.product.company_short %} veröffentlichen** aus.
   
   ![Screenshot: Dropdownliste „Repositoryname“ in VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   Der Besitzer des neuen Repositorys ist das {% data variables.product.prodname_dotcom %}-Konto, mit dem du den Codespace erstellt hast.
5. Klicke im Popupfenster, das in der unteren rechten Ecke des Editors angezeigt wird, auf **In {% data variables.product.company_short %} öffnen**, um das neue Repository für {% data variables.product.prodname_dotcom_the_website %} anzuzeigen. Zeige die Datei `haikus.json` im neuen Repository an, und überprüfe, ob die in deinem Codespace vorgenommene Änderung erfolgreich in das Repository gepusht wurde.
   
   ![Screenshot: Popupfenster „In GitHub öffnen“ in VS Code](/assets/images/help/codespaces/open-on-github.png)

## Personalisieren mit einer Erweiterung

Wenn du über den Browser oder die {% data variables.product.prodname_vscode %}-Desktopanwendung eine Verbindung mit einem Codespace herstellst, kannst du direkt über den Editor auf den Visual Studio Code-Marketplace zugreifen. In diesem Beispiel installierst du eine {% data variables.product.prodname_vscode_shortname %}-Erweiterung, die das Design ändert. Du kannst jedoch jede Erweiterung installieren, die für deinen Workflow nützlich ist.

1. Klicke auf der linken Randleiste auf das Symbol „Erweiterungen“.
1. Gib in der Suchleiste ein `fairyfloss`, und klicke auf **Installieren**.

   ![Hinzufügen einer Erweiterung](/assets/images/help/codespaces/add-extension.png)

1. Wähle das `fairyfloss`-Design aus, indem du es in der Liste auswählst.

   ![Auswählen des Fairyfloss-Designs](/assets/images/help/codespaces/fairyfloss.png)

Wenn du einen Codespace im Browser oder in der {% data variables.product.prodname_vscode %}-Desktopanwendung verwendest, und du die [Einstellungssynchronisierung](https://code.visualstudio.com/docs/editor/settings-sync) aktiviert hast, werden alle Änderungen, die du am Editor-Setup im aktuellen Codespace vornimmst (z. B. Änderungen an deinem Design oder deinen Tastenzuordnungen) automatisch mit allen Instanzen von {% data variables.product.prodname_vscode %}, die bei deinem {% data variables.product.prodname_dotcom %}-Konto angemeldet sind, und allen anderen von dir erstellten Codespaces synchronisiert.

## Nächste Schritte

Du hast deine erste Anwendung in einem Codespace erfolgreich erstellt, personalisiert und ausgeführt, aber es gibt so viel mehr zu entdecken! Hier findest du einige hilfreiche Ressourcen für deine nächsten Schritte mit {% data variables.product.prodname_github_codespaces %}.

* [Fundierte Einblicke](/codespaces/getting-started/deep-dive): In diesem Schnellstart werden einige Features von {% data variables.product.prodname_github_codespaces %} vorgestellt. Hier erhältst du fundierte technische Einblicke.
* [Hinzufügen einer Entwicklungscontainerkonfiguration zu deinem Repository](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces): Diese Leitfäden enthalten Informationen zum Einrichten deines Repositorys für die Verwendung von {% data variables.product.prodname_github_codespaces %} mit bestimmten Sprachen.
* [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers): Dieser Leitfaden enthält Details zum Erstellen einer benutzerdefinierten Konfiguration für {% data variables.product.prodname_codespaces %} für dein Projekt.

## Weitere nützliche Informationen

* [Aktivieren von {% data variables.product.prodname_github_codespaces %} für deine Organisation](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)
* [Verwenden von {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [Verwenden von {% data variables.product.prodname_github_codespaces %} in deiner JetBrains-IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [Verwenden von {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)
* [Festlegen deines Standard-Editors für {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces).
* [Verwalten der Kosten von {% data variables.product.prodname_github_codespaces %} in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)
