---
title: Codespaces-Protokolle
intro: Übersicht über die von {% data variables.product.prodname_codespaces %} verwendeten Protokollierungsspeicherorte.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Logging
shortTitle: Codespaces logs
ms.openlocfilehash: 3e02023cd1ba05960e9f9b345265c281e714e6a5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090379"
---
Informationen zu {% data variables.product.prodname_codespaces %} werden in drei unterschiedlichen Protokollen ausgegeben:

- Codespaceprotokolle
- Erstellungsprotokolle
- Erweiterungsprotokolle ({% data variables.product.prodname_vscode %} Desktop) oder Browserkonsolenprotokolle ({% data variables.product.prodname_vscode %} im Web)

## <a name="codespace-logs"></a>Codespaceprotokolle

Diese Protokolle enthalten detaillierte Informationen zum Codespace, zum Container, zur Sitzung und zur {% data variables.product.prodname_vscode %}-Umgebung. Sie sind nützlich für die Diagnose von Verbindungsproblemen und anderen unerwarteten Verhaltensweisen. So friert der Codespace z. B. ein, aber die Option „Windows neu laden“ aktiviert ihn für wenige Minuten, oder du wirst unvorhergesehen vom Codespace getrennt, kannst die Verbindung aber sofort wieder herstellen.

{% webui %}

1. Wenn du {% data variables.product.prodname_codespaces %} im Browser verwendest, solltest du sicherstellen, dass du mit dem Codespace verbunden bist, den du debuggen möchtest.
1. Öffne die Befehlspalette von {% data variables.product.prodname_vscode %} (`Shift + Command + P` (Mac)/`Ctrl + Shift + P` (Windows)), und gib **Protokolle exportieren** ein. Wähle **Codespaces: Protokolle exportieren** in der Liste aus, um die Protokolle herunterzuladen.
1. Lege fest, wo das ZIP-Archiv der Protokolle gespeichert werden soll, und klicke dann auf **Speichern** (Desktop) oder **OK** (Web).
1. Wenn du {% data variables.product.prodname_codespaces %} im Browser verwendest, klicke in der Explorer-Ansicht mit der rechten Maustaste auf das ZIP-Archiv der Protokolle, und wähle **Herunterladen** aus, um es auf deinen lokalen Computer herunterzuladen.

{% endwebui %}

{% vscode %}

1. Öffne die Befehlspalette von {% data variables.product.prodname_vscode %} (`Shift + Command + P` (Mac)/`Ctrl + Shift + P` (Windows)), und gib **Protokolle exportieren** ein. Wähle **Codespaces: Protokolle exportieren** in der Liste aus, um die Protokolle herunterzuladen.
1. Lege fest, wo das ZIP-Archiv der Protokolle gespeichert werden soll, und klicke dann auf **Speichern** (Desktop) oder **OK** (Web).

{% endvscode %}

{% cli %}

Derzeit kannst du nicht mit {% data variables.product.prodname_cli %} auf diese Protokolle zugreifen. Um darauf zuzugreifen, öffne den Codespace in {% data variables.product.prodname_vscode %} oder in einem Browser.

{% endcli %}

## <a name="creation-logs"></a>Erstellungsprotokolle

Diese Protokolle enthalten Informationen zum Container und zum Entwicklungscontainer sowie zu deren Konfiguration. Sie sind beim Debuggen von Konfigurations- und Setupproblemen hilfreich.


{% webui %}

1. Stelle eine Verbindung mit dem Codespace her, den du debuggen möchtest.
2. Öffne die {% data variables.product.prodname_vscode_command_palette %} (`Shift + Command + P` (Mac)/`Ctrl + Shift + P` (Windows)), und gib **Erstellungsprotokolle** ein. Wähle **Codespaces: Erstellungsprotokolle anzeigen** in der Liste aus, um die Datei `creation.log` zu öffnen.

Wenn du das Protokoll für den Support freigeben möchtest, kannst du den Text aus dem Erstellungsprotokoll in einen Text-Editor kopieren und die Datei lokal speichern.

{% endwebui %}

{% vscode %}

Öffne die Befehlspalette (`Shift + Command + P` (Mac)/`Ctrl + Shift + P` (Windows)), und gib **Erstellungsprotokolle** ein. Wähle **Codespaces: Erstellungsprotokolle anzeigen** in der Liste aus, um die Datei `creation.log` zu öffnen.

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

## <a name="extension-logs"></a>Erweiterungsprotokolle

Diese Protokolle sind nur für Benutzer*innen von {% data variables.product.prodname_vscode %} Desktop verfügbar. Sie sind nützlich, wenn du vermutest, dass Probleme mit der {% data variables.product.prodname_codespaces %}-Erweiterung oder dem {% data variables.product.prodname_vscode %}-Editor die Erstellung oder das Herstellen der Verbindung verhindern.

1. Öffne die Befehlspalette von {% data variables.product.prodname_vscode %}.
1. Gib **Protokolle** ein, und wähle **Entwickler: Erweiterungsprotokolle öffnen** in der Liste aus, um den Erweiterungsprotokollordner im Datei-Explorer deines Systems zu öffnen.

In dieser Ansicht kannst du auf Protokolle zugreifen, die von den verschiedenen Erweiterungen generiert wurden, die du in {% data variables.product.prodname_vscode %} verwendest. Es werden Protokolle für GitHub Codespaces, die GitHub-Authentifizierung und Git sowie für alle anderen Erweiterungen angezeigt, die du aktivierst hast.

## <a name="browser-console-logs"></a>Browserkonsolenprotokolle

Diese Protokolle sind nur in Situationen hilfreich, in denen du Probleme bei der Verwendung von {% data variables.product.prodname_codespaces %} im Browser debuggen möchtest. Sie sind nützlich zum Debuggen von Problemen bei der Erstellung und beim Herstellen einer Verbindung mit {% data variables.product.prodname_codespaces %}.

1. Öffne das Fenster mit den Entwicklertools in dem Browserfenster für den Codespace, den du debuggen möchtest.
1. Wechsle zur Registerkarte „Konsole“, und klicke auf der Randleiste auf **Fehler**, um nur die Fehler anzuzeigen.
1. Klicke im Protokollbereich auf der rechten Seite mit der rechten Maustaste, und wähle **Speichern unter** aus, um eine Kopie der Fehler auf deinem lokalen Computer zu speichern.
  ![Speichern von Fehlern](/assets/images/help/codespaces/browser-console-log-save.png)
