---
title: Verwenden der Visual Studio Code-Befehlspalette in GitHub Codespaces
intro: 'Du kannst über das Feature „Befehlspalette“ von {% data variables.product.prodname_vscode %} auf viele Befehle in {% data variables.product.prodname_github_codespaces %} zugreifen.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
ms.openlocfilehash: acd462dd1c0b60dced529d7471b9c8638e2f6e91
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180811'
---
## Informationen zur {% data variables.product.prodname_vscode_command_palette %}

Die {% data variables.product.prodname_vscode_command_palette_shortname %} ist eines der zentralen Features von {% data variables.product.prodname_vscode %} und steht dir zur Verwendung in {% data variables.product.prodname_github_codespaces %} zur Verfügung. Die Befehlspalette ermöglicht dir den Zugriff auf viele Befehle für {% data variables.product.prodname_github_codespaces %} und {% data variables.product.prodname_vscode_shortname %}. Weitere Informationen zur Verwendung von {% data variables.product.prodname_vscode_command_palette_shortname %} findest du unter [Benutzeroberfläche](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) in der {% data variables.product.prodname_vscode_shortname %}-Dokumentation.

## Zugreifen auf die {% data variables.product.prodname_vscode_command_palette_shortname %}

Du kannst auf die {% data variables.product.prodname_vscode_command_palette_shortname %} auf verschiedene Weisen zugreifen.

- <kbd>Umschalt</kbd>+<kbd>Befehl</kbd>+<kbd>P</kbd> (Mac) / <kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Windows/Linux).

  Beachte, dass dieser Befehl eine reservierte Tastenkombination in Firefox ist.
- <kbd>F1</kbd>
- Klicke im Anwendungsmenü auf **Ansicht > Befehlspalette...**.

  ![Das Anwendungsmenü](/assets/images/help/codespaces/codespaces-view-menu.png)

## Befehle für {% data variables.product.prodname_codespaces %}

Um alle Befehle zu {% data variables.product.prodname_github_codespaces %} anzuzeigen, [öffne die {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) und gib dann „Codespaces“ ein.

![Eine Liste aller Befehle, die sich auf {% data variables.product.prodname_github_codespaces %} beziehen](/assets/images/help/codespaces/codespaces-command-palette.png)

### Anhalten oder Beenden eines Codespaces

Wenn du ein neues Geheimnis hinzufügst oder den Computertyp änderst, musst du den Codespace beenden und neu starten, um deine Änderungen zu übernehmen. 

Um den Container deines Codespaces zu anzuhalten oder zu beenden, greife auf die [{% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) zu. Beginne dann mit der Eingabe von „stop“. Wähle **Codespaces: Aktuellen Codespace beenden** aus.

![Befehl zum Beenden eines Codespaces](/assets/images/help/codespaces/codespaces-stop.png)

### Hinzufügen einer vordefinierten Entwicklungscontainerkonfiguration

Um eine vordefinierte Entwicklungscontainerkonfiguration hinzuzufügen, [greife auf die {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) zu. Beginne dann mit der Eingabe von „dev container“. Wähle **Codespaces: Konfigurationsdateien für Entwicklungscontainer hinzufügen...** aus.

![Befehl zum Hinzufügen eines Dev-Containers](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Neuerstellen eines Codespaces

Wenn du einen Dev-Container hinzufügst oder eine der Konfigurationsdateien (`devcontainer.json` und `Dockerfile`) bearbeitst, musst du deinen Codespace neu erstellen, damit deine Änderungen übernommen werden. 

Zur Neuerstellung deines Containers [greifst du auf die {% data variables.product.prodname_vscode_command_palette_shortname %} zu](#accessing-the-command-palette). Beginne dann mit der Eingabe von „rebuild“. Wähle **Codespaces: Container neu erstellen** aus.

![Befehl zum Neuerstellen eines Codespaces](/assets/images/help/codespaces/codespaces-rebuild.png)

{% data reusables.codespaces.full-rebuild-tip %}

### Codespaces-Protokolle

Du kannst die {% data variables.product.prodname_vscode_command_palette_shortname %} verwenden, um auf die Erstellungsprotokolle für den Codespace zuzugreifen, oder du kannst damit alle Protokolle exportieren. 

Um die Protokolle für {% data variables.product.prodname_github_codespaces %} abzurufen, [öffne die {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), und beginne dann mit der Eingabe von „Protokoll“. Wähle **Codespaces: Protokolle exportieren** aus, um alle Protokolle im Zusammenhang mit {% data variables.product.prodname_github_codespaces %} zu exportieren, oder **Codespaces: Erstellungsprotokolle anzeigen**, um Protokolle im Zusammenhang mit dem Setup einzusehen.

![Befehl für den Zugriff auf Protokolle](/assets/images/help/codespaces/codespaces-logs.png)

## Weiterführende Themen

- [Verwenden von {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
