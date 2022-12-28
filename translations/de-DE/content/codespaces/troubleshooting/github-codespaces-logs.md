---
title: GitHub Codespaces-Protokolle
intro: 'Dieser Artikel bietet eine Übersicht über die von {% data variables.product.prodname_github_codespaces %} verwendeten Protokolle.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces logs
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
ms.openlocfilehash: f5cd482888f58f85a051bb9b6e2c5d7c026ed9a9
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159690'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

Informationen zu {% data variables.product.prodname_github_codespaces %} werden in verschiedenen Protokollen ausgegeben:

{% webui %}

- Codespaceprotokolle
- Erstellungsprotokolle
- Browserkonsolenprotokolle (für den {% data variables.product.prodname_vscode_shortname %}-Webclient)

Erweiterungsprotokolle sind verfügbar, wenn du {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode_shortname %} verwendest. Klicke oben auf die Registerkarte „{% data variables.product.prodname_vscode %}“, um weitere Informationen zu erhalten.

{% endwebui %}

{% vscode %}

- Codespaceprotokolle
- Erstellungsprotokolle
- Erweiterungsprotokolle (für die {% data variables.product.prodname_vscode_shortname %}-Desktopanwendung) 

Browserprotokolle sind verfügbar, wenn du {% data variables.product.prodname_github_codespaces %} in deinem Browser verwendest. Klicke oben auf die Registerkarte „Webbrowser“, um weitere Informationen zu erhalten.

{% endvscode %}

{% cli %}

- Codespaceprotokolle
- Erstellungsprotokolle

Weitere Protokolle sind verfügbar, wenn du {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode_shortname %} oder in deinem Webbrowser verwendest. Klicke auf die Registerkarten oben, um weitere Informationen zu erhalten.

{% endcli %}

{% jetbrains %}

- Erstellungsprotokolle

Weitere Protokolle sind verfügbar, wenn du {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode_shortname %} oder in deinem Webbrowser verwendest. Klicke auf die Registerkarten oben, um weitere Informationen zu erhalten.

{% endjetbrains %}

{% webui %}

{% data reusables.codespaces.codespace-logs %}

1. Wenn du {% data variables.product.prodname_github_codespaces %} im Browser verwendest, stelle sicher, dass du mit dem Codespace verbunden bist, den du debuggen möchtest.
1. Öffne die {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>UMSCHALT</kbd>+<kbd>BEFEHL</kbd>+<kbd>P</kbd> (Mac)/<kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Windows/Linux)), und gib **Protokolle exportieren** ein. Wähle **Codespaces: Protokolle exportieren** in der Liste aus, um die Protokolle herunterzuladen.
1. Lege fest, wo das ZIP-Archiv der Protokolle gespeichert werden soll, und klicke dann auf **Speichern** (Desktop) oder **OK** (Web).
1. Wenn du {% data variables.product.prodname_github_codespaces %} im Browser verwendest, klicke in der Explorer-Ansicht mit der rechten Maustaste auf das ZIP-Archiv mit den Protokollen und dann mit der linken Maustaste auf **Herunterladen...** um es auf deinen lokalen Computer herunterzuladen.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.codespace-logs %}

1. Öffne die {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>UMSCHALT</kbd>+<kbd>BEFEHL</kbd>+<kbd>P</kbd> (Mac)/<kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Windows/Linux)), und gib **Protokolle exportieren** ein. Wähle **Codespaces: Protokolle exportieren** in der Liste aus, um die Protokolle herunterzuladen.
1. Lege fest, wo das ZIP-Archiv der Protokolle gespeichert werden soll, und klicke dann auf **Speichern** (Desktop) oder **OK** (Web).

{% endvscode %}

{% cli %}

{% data reusables.codespaces.codespace-logs %}

Derzeit kannst du nicht mit {% data variables.product.prodname_cli %} auf diese Protokolle zugreifen. Öffne den Codespace in {% data variables.product.prodname_vscode_shortname %} oder in einem Browser, um auf sie zuzugreifen.

{% endcli %}

## Erstellungsprotokolle

Diese Protokolle enthalten Informationen zum Container und zum Entwicklungscontainer sowie zu deren Konfiguration. Sie sind beim Debuggen von Konfigurations- und Setupproblemen hilfreich.

{% webui %}

1. Stelle eine Verbindung mit dem Codespace her, den du debuggen möchtest.
2. Öffne die {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>UMSCHALT</kbd>+<kbd>BEFEHL</kbd>+<kbd>P</kbd> (Mac)/<kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Windows/Linux)), und gib **Erstellungsprotokolle** ein. Wähle **Codespaces: Erstellungsprotokolle anzeigen** in der Liste aus, um die Datei `creation.log` zu öffnen.

Wenn du das Protokoll für den Support freigeben möchtest, kannst du den Text aus dem Erstellungsprotokoll in einen Text-Editor kopieren und die Datei lokal speichern.

{% endwebui %}

{% vscode %}

Öffne die {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>UMSCHALT</kbd>+<kbd>BEFEHL</kbd>+<kbd>P</kbd> (Mac)/<kbd>STRG</kbd>+<kbd>UMSCHALT</kbd>+<kbd>P</kbd> (Windows/Linux)), und gib **Erstellungsprotokolle** ein. Wähle **Codespaces: Erstellungsprotokolle anzeigen** in der Liste aus, um die Datei `creation.log` zu öffnen.

Wenn du das Protokoll für den Support freigeben möchtest, kannst du den Text aus dem Erstellungsprotokoll in einen Text-Editor kopieren und die Datei lokal speichern.

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Zum Anzeigen des Erstellungsprotokolls verwendest du den Unterbefehl `gh codespace logs`. Nachdem du den Befehl eingegeben hast, kannst du deine Auswahl in der Liste der Codespaces treffen, die angezeigt wird.

```shell
gh codespace logs
```

Weitere Informationen zu diesem Befehl findest du [im {% data variables.product.prodname_cli %}-Leitfaden](https://cli.github.com/manual/gh_codespace_logs).

Wenn du das Protokoll für den Support freigeben möchtest, kannst du die Ausgabe in einer Datei speichern:

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

{% vscode %}

## Erweiterungsprotokolle

Diese Protokolle sind nur für Benutzer*innen der {% data variables.product.prodname_vscode_shortname %}-Desktopanwendung verfügbar. Sie sind nützlich, wenn du vermutest, dass Probleme mit der {% data variables.product.prodname_github_codespaces %}-Erweiterung oder dem {% data variables.product.prodname_vscode_shortname %}-Editor die Erstellung oder das Herstellen der Verbindung verhindern.

1. Öffne in {% data variables.product.prodname_vscode_shortname %} die Befehlspalette.
1. Gib **Protokolle** ein, und wähle **Entwickler: Erweiterungsprotokolle öffnen** in der Liste aus, um den Erweiterungsprotokollordner im Datei-Explorer deines Systems zu öffnen.

In dieser Ansicht kannst du auf Protokolle zugreifen, die von den verschiedenen Erweiterungen generiert wurden, die du in {% data variables.product.prodname_vscode_shortname %} verwendest. Es werden Protokolle für {% data variables.product.prodname_github_codespaces %}, {% data variables.product.prodname_dotcom %} Authentication und Git sowie für alle anderen Erweiterungen, die du aktiviert hast, angezeigt.

{% endvscode %}

{% webui %}

## Browserkonsolenprotokolle

Diese Protokolle sind nur hilfreich, wenn du Probleme bei der Verwendung von {% data variables.product.prodname_github_codespaces %} im Browser debuggen möchtest. Sie sind nützlich zum Debuggen von Problemen bei der Erstellung und beim Herstellen einer Verbindung mit {% data variables.product.prodname_github_codespaces %}.

1. Öffne das Fenster mit den Entwicklertools in dem Browserfenster für den Codespace, den du debuggen möchtest.
1. Wechsle zur Registerkarte „Konsole“, und klicke in der linken Randleiste auf **Fehler**, um nur die Fehler anzuzeigen.
1. Klicke im Protokollbereich auf der rechten Seite mit der rechten Maustaste, und wähle **Speichern unter** aus, um eine Kopie der Fehler auf deinem lokalen Computer zu speichern.
  ![Speichern von Fehlern](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. Klicke im {% data variables.product.prodname_github_codespaces %}-Toolfenster auf das Protokollsymbol.

   ![Screenshot: Protokollschaltfläche](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## JetBrains-Protokolle

Du kannst Protokolle für die JetBrains-Remote-IDE und die lokale Clientanwendung herunterladen, indem du in der JetBrains-Clientanwendung zum Menü **Help** (Hilfe) navigierst und auf **Collect Host and Client Logs** (Host- und Clientprotokolle sammeln) klickst.

{% endjetbrains %}

## Weitere Informationsquellen

- „[Überprüfen der Überwachungsprotokolle deiner Organisation für {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)“
- [Überprüfen deiner Sicherheitsprotokolle für {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)
