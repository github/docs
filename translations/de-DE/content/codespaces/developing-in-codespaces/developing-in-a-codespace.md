---
title: In einem Codespace entwickeln
intro: 'Du kannst in einem Codespace mit deinem Browser, {% data variables.product.prodname_vscode %}, einer JetBrains-IDE oder in einer Befehlsshell arbeiten.'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: e941373ade8c2f8365e7b654733b7ee029a6a7dd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159069'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Informationen zum Entwickeln mit {% data variables.product.prodname_github_codespaces %}

Du kannst Code in einem Codespace mit dem Tool deiner Wahl entwickeln: 

* Mit einer Befehlsshell über eine mithilfe der {% data variables.product.prodname_cli %} initiierten SSH-Verbindung
* Mit einer der JetBrains-IDEs über JetBrains Gateway
* Über die {% data variables.product.prodname_vscode %}-Desktopanwendung
* Mit einer browserbasierten Version von {% data variables.product.prodname_vscode %}

{% webui %}

Über die Registerkarten in diesem Artikel kannst du zwischen Informationen zu den einzelnen Optionen wechseln. Du befindest dich derzeit auf der Registerkarte für die Webbrowserversion von {% data variables.product.prodname_vscode %}.

## Arbeiten in einem Codespace im Browser

Bei der Verwendung von {% data variables.product.prodname_codespaces %} im Browser steht dir eine Entwicklungsumgebung mit vollem Funktionsumfang zur Verfügung. Du kannst Code bearbeiten und debuggen, Git-Befehle verwenden und deine Anwendung ausführen.

![Kommentierter Screenshot eines Codespace im Browser](/assets/images/help/codespaces/codespace-overview-annotated.png)

{% data reusables.codespaces.vscode-interface-annotation %} {% data reusables.codespaces.use-chrome %} Weitere Informationen findest du unter [Problembehandlung für {% data variables.product.prodname_github_codespaces %}-Clients](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients).
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endwebui %}

{% vscode %}

Über die Registerkarten in diesem Artikel kannst du zwischen Informationen zu den einzelnen Optionen wechseln. Du befindest dich derzeit auf der Registerkarte für {% data variables.product.prodname_vscode %}.

## Arbeiten in einem Codespace in {% data variables.product.prodname_vscode_shortname %}

{% data variables.product.prodname_github_codespaces %} ermöglicht dir die Nutzung der vollständigen Entwicklungsumgebung von {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Kommentierter Screenshot eines Codespace in VS Code](/assets/images/help/codespaces/codespace-annotated-vscode.png)

{% data reusables.codespaces.vscode-interface-annotation %}

Weitere Informationen zur Verwendung von {% data variables.product.prodname_vscode_shortname %} findest du im [Benutzeroberflächenleitfaden](https://code.visualstudio.com/docs/getstarted/userinterface) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.

{% data reusables.codespaces.connect-to-codespace-from-vscode %} 

Informationen zur Problembehandlung findest du unter [Problembehandlung für Codespaces-Clients](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients).
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endvscode %}

{% jetbrains %}

Über die Registerkarten in diesem Artikel kannst du zwischen Informationen zu den einzelnen Optionen wechseln. Du befindest dich derzeit auf der Registerkarte für JetBrains-IDEs.

## Arbeiten in einem Codespace in einer JetBrains-IDE

Um {% data variables.product.prodname_github_codespaces %} mit einer JetBrains-IDE zu verwenden, musst du JetBrains Gateway bereits installiert haben. Informationen zum Installieren von JetBrains Gateway findest du auf der [JetBrains-Website](https://www.jetbrains.com/remote-development/gateway/).

Du kannst in einem Codespace mit der JetBrains-IDE deiner Wahl arbeiten. Nachdem du einen Codespace erstellt hast, kannst du die JetBrains Gateway-Anwendung verwenden, um den Codespace in deiner bevorzugten IDE zu öffnen.

Während der Entwicklung in einem Codespace mit der JetBrains-IDE kannst du Code bearbeiten und debuggen und Git-Befehle verwenden. Weitere Informationen zu den verschiedenen JetBrains-IDEs findest du in der [JetBrains-Dokumentation](https://www.jetbrains.com/help/).

### IntelliJ IDEA-Benutzeroberfläche

In der {% data variables.product.prodname_github_codespaces %}-Dokumentation verwenden wir IntelliJ IDEA als repräsentative JetBrains-IDE. Andere JetBrains-IDEs haben unter Umständen andere Layouts.

![Kommentierter Screenshot eines Codespace in JetBrains IntelliJ IDEA](/assets/images/help/codespaces/jetbrains-gui-with-callouts.png)

1. **Navigationsleiste:** Auf dieser Leiste wird der Pfad zur aktuell ausgewählten Datei oder zum aktuell ausgewählten Verzeichnis angezeigt. Verwende die Schaltflächen rechts neben der Navigationsleiste, um verschiedene Aktionen auszuführen, z. B. Erstellen, Ausführen oder Debuggen des Projekts oder Ausführen von Git-Befehlen, um Änderungen zu committen und zu pushen.
2. **Toolfenster „Projekt“:** Hier wird die Struktur deines Projekts angezeigt, und du kannst Dateien im Editor öffnen.
3. **{% data variables.product.prodname_github_codespaces %}-Toolfenster:** Dieses Fenster wird angezeigt, indem du auf der Leiste links vom Toolfenster auf das {% data variables.product.prodname_github_codespaces %}-Plug-In klickst. Es werden Informationen zu deinem Codespace angezeigt, einschließlich des Anzeigenamens und des Computertyps. Die Schaltflächen oben in diesem Toolfenster ermöglichen Folgendes:
   * Beenden des Codespace und Trennen der Verbindung
   * Anzeigen der Webseite „Deine Codespaces“
   * Anzeigen der Codespaceerstellungsprotokolle
   * Neuerstellen des Entwicklungscontainers
4. **Editor:** Hier kannst du deine Dateien bearbeiten. Du kannst mit der rechten Maustaste auf die Registerkarte für eine Datei klicken, um auf Optionen (etwa zum Verschieben der Registerkarte in ein neues Fenster) zuzugreifen.
5. **Terminal:** Das Terminal wird angezeigt, indem du unten im Hauptfenster auf der Toolfensterleiste (direkt oberhalb der Statusleiste) auf **Terminal** klickst. Mit dem integrierten Terminal kannst du Befehlszeilenaufgaben ausführen, ohne zu einer dedizierten Terminalanwendung wechseln zu müssen.
6. **Statusleiste:** Zeige auf das Symbol links von der Statusleiste, um eine Liste der Tools anzuzeigen. Klicke auf das Symbol, um die Symbolleisten des Toolfensters aus- oder einzublenden. Auf der rechten Seite der Statusleiste werden Informationen zum Projekt angezeigt, einschließlich des aktuellen Git-Branch.

Weitere Informationen zur IntelliJ IDEA-Benutzeroberfläche findest du in der [JetBrains-Dokumentation für IntelliJ IDEA](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html).

### Anpassen der Codespaces für ein Repository

Du kannst die Codespaces anpassen, die für ein Repository erstellt werden, indem du die Konfiguration des Entwicklungscontainers für das Repository erstellst oder aktualisierst. Diesen Schritt kannst du innerhalb eines Codespace ausführen. Nachdem du eine Entwicklungscontainerkonfiguration geändert hast, kannst du die Änderungen auf den aktuellen Codespace anwenden, indem du den Docker-Container für den Codespace neu erstellst. Weitere Informationen findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

### Personalisieren deines Codespaces

Du kannst ein [dotfiles](https://dotfiles.github.io/tutorials/)-Repository verwenden, um Aspekte der Codespace-Umgebung für jeden von dir erstellten Codespace zu personalisieren. Weitere Informationen findest du unter [Personalisieren von {% data variables.product.prodname_github_codespaces %} für dein Konto](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles).

### Committen deiner Änderungen

Nachdem du Änderungen an deinem Codespace vorgenommen hast (neuer Code oder Konfigurationsänderungen), möchtest du deine Änderungen committen und pushen. Durch das Pushen von Änderungen an ein Repository wird sichergestellt, dass jeder Benutzer, der einen Codespace aus diesem Repository erstellt, die gleiche Konfiguration verwendet. Dies bedeutet auch, dass alle Anpassungen, die du vornimmst, um die Konfiguration der für ein Repository erstellten Codespaces zu ändern, für alle verfügbar sind, die das Repository verwenden.

Weitere Informationen findest du unter [Verwenden der Quellcodeverwaltung in deinem Codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#committing-your-changes).

## Weitere nützliche Informationen

* [Verwenden von {% data variables.product.prodname_github_codespaces %} in deiner JetBrains-IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [Verwenden des {% data variables.product.prodname_github_codespaces %}-Plug-Ins für JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)
* [Problembehandlung für {% data variables.product.prodname_github_codespaces %}-Clients](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)

{% endjetbrains %}

{% cli %}

Über die Registerkarten in diesem Artikel kannst du zwischen Informationen zu den einzelnen Optionen wechseln. Du befindest dich derzeit auf der Registerkarte für die {% data variables.product.prodname_cli %}.

## Arbeiten in einem Codespace in einer Befehlsshell

{% data reusables.cli.cli-learn-more %}

Du kannst die {% data variables.product.prodname_cli %} verwenden, um einen neuen Codespace zu erstellen, oder einen vorhandenen Codespace starten und dann eine SSH-Verbindung damit herstellen. Sobald die Verbindung hergestellt wurde, kannst du mithilfe deiner bevorzugten Befehlszeilentools an der Befehlszeile arbeiten.

Nach der Installation der {% data variables.product.prodname_cli %} und der Authentifizierung bei deinem {% data variables.product.prodname_dotcom %}-Konto kannst du den Befehl `gh codespace [<SUBCOMMAND>...] --help` verwenden, um die Hilfeinformationen zu durchsuchen. Alternativ kannst du die gleichen Referenzinformationen auch unter [https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace) anzeigen.

Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} mit der GitHub CLI](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli).

{% endcli %}
