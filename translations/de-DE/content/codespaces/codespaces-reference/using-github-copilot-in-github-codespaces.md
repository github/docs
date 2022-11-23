---
title: Verwenden von GitHub Copilot in GitHub Codespaces
intro: 'Du kannst {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_github_codespaces %} verwenden, indem du die Erweiterung hinzufügst.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
ms.openlocfilehash: 6615df6930fa8f27dd8f50c4588d8182b8602549
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158725'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Verwenden von {% data variables.product.prodname_copilot %} im {% data variables.product.prodname_vscode_shortname %}-Webclient

{% data reusables.codespaces.copilot-in-vscode %}

{% endwebui %}

{% vscode %}

## Verwenden von {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endvscode %}

{% jetbrains %}

## Installieren von {% data variables.product.prodname_copilot %} in deiner JetBrains-IDE

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/), ein KI-Paarprogrammierer, kann in jedem Codespace verwendet werden. Weitere Informationen findest du unter [Informationen zu GitHub Copilot](/copilot/overview-of-github-copilot/about-github-copilot).

Wenn du {% data variables.product.prodname_copilot %} in einem Codespace in deiner JetBrains-IDE verwenden möchtest, installiere das [{% data variables.product.prodname_copilot %}-Plug-In](https://plugins.jetbrains.com/plugin/17718-github-copilot) in deinem Codespace.

{% note %}

**Hinweis**: Du musst das {% data variables.product.prodname_copilot %}-Plug-In jedes Mal installieren, wenn du einen neuen Codespace erstellst.

{% endnote %}

1. Öffne in der JetBrains-Clientanwendung das Dialogfeld „Einstellungen (Windows/Linux)“ oder „Einstellungen (Mac)“:

   - **Windows/Linux**: Klicke auf **Datei** und dann auf **Einstellungen** (oder drücke <kbd>STRG</kbd>+<kbd>ALT</kbd>+<kbd>S</kbd>).
   - **Mac**: Klicke in der macOS-Menüleiste auf **JetBrains-Client**, und klicke dann auf **Einstellungen** (oder drücke <kbd>Command</kbd>+<kbd>,</kbd>).

1. Klicke im linken Menü des Dialogfelds „Einstellungen/Voreinstellungen“ auf **Plug-Ins auf dem Host**. Klicke auf die Registerkarte **Marketplace**.

   ![Screenshot: Registerkarte „Marketplace“ für „Plug-Ins auf dem Host“](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. Gib im Suchfeld „Copilot“ ein, und klicke dann auf die Schaltfläche **Installieren** für das {% data variables.product.prodname_copilot %}-Plug-In.

   ![Screenshot: Das {% data variables.product.prodname_copilot %}-Plug-In](/assets/images/help/codespaces/jetbrains-copilot-plugin.png)

1. Klicke im Dialogfeld „Datenschutzhinweis für Plug-Ins von Drittanbietern“ auf **Akzeptieren**.
1. Klicke auf **IDE neu starten**.

   ![Screenshot: Das {% data variables.product.prodname_copilot %}-Plug-In](/assets/images/help/codespaces/jetbrains-copilot-restart.png)
 
1. Klicke auf **Neu starten**, wenn du aufgefordert wirst, zu bestätigen, dass du die Remoteausführung der Back-End-IDE neu starten möchtest. Die JetBrains-Clientanwendung wird geschlossen, wenn du dies tust.
1. Öffne den Codespace erneut über die JetBrains Gateway-Anwendung. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_github_codespaces %} in deiner JetBrains-IDE](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide#opening-a-codespace-in-your-jetbrains-ide).
1. Klicke nach dem Neustart deiner JetBrains-IDE auf das Menü **Extras**. Klicke auf **{% data variables.product.prodname_copilot %}** und dann auf **Anmelden bei {% data variables.product.prodname_dotcom %}** . 

    ![Screenshot: JetBrains Tools-Menü](/assets/images/help/codespaces/jetbrains-tools-menu.png)

1. Um den Gerätecode zu kopieren und das Geräteaktivierungsfenster zu öffnen, klicke im Dialogfeld „Anmelden bei {% data variables.product.prodname_dotcom %}“ auf **Kopieren und öffnen**.

    ![Screenshot: „Kopieren und öffnen“ für den Gerätecode](/assets/images/help/copilot/device-code-copy-and-open.png)

1. Ein Geräteaktivierungsfenster wird in deinem Browser geöffnet. Füge den Gerätecode ein, und klicke dann auf **Weiter**.

   - Um den Code in Windows oder Linux einzufügen, drücke<kbd>STRG</kbd>+<kbd>V</kbd>.
   - Um den Code in macOS einzufügen, drücke <kbd>BEFEHLSTASTE</kbd>+<kbd>V</kbd>.
1. {% data variables.product.prodname_dotcom %} fordert die notwendigen Berechtigungen für {% data variables.product.prodname_copilot %} an. Um diese Berechtigungen zu genehmigen, klicke auf **{% data variables.product.prodname_copilot %}-Plug-In autorisieren**.
1. Nach Genehmigung der Berechtigungen zeigt deine JetBrains-IDE eine Bestätigung an. Klicke zum Verwenden von {% data variables.product.prodname_copilot %} auf **OK**.

   ![Screenshot: Die Bestätigung von JetBrains-IDE-Berechtigungen](/assets/images/help/copilot/jetbrains-ide-confirmation.png)

## Weitere nützliche Informationen

- [Erste Schritte mit GitHub Copilot in einer JetBrains-IDE](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)

{% endjetbrains %}
