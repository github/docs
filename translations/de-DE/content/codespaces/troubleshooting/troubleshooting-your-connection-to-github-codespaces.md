---
title: Problembehandlung bei deiner Verbindung mit GitHub Codespaces
intro: 'Problembehandlung bei der Verbindung mit {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Connection
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-your-connection-to-codespaces
ms.openlocfilehash: 75632e73b689ed7fe1df95027f6e5170136c7935
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159674'
---
## 503 Codespace nicht verfügbar

Codespaces werden nach 30 Minuten ohne Aktivität beendet. Wenn du versuchst, mit einem Codespace zu interagieren, nachdem er beendet wurde, kann der Fehler `503 service unavailable` angezeigt werden. 

- Wenn eine Schaltfläche namens **Start** in {% data variables.product.prodname_vscode %} oder in deinem Browserfenster angezeigt wird, klicke auf **Start**, um wieder eine Verbindung mit dem Codespace herzustellen.
- Setze den Codespace zurück, indem du das Fenster noch einmal lädst. Klicke auf der [Befehlspalette](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) in {% data variables.product.prodname_vscode %} auf **Developer: Fenster erneut laden**.

## Browser kann keine Verbindung herstellen

Manchmal kannst du eventuell nicht aus deinem Browser auf einen Codespace zugreifen. Wenn dies geschieht, wechsle zu https://github.com/codespaces, und versuche, von dieser Seite aus eine Verbindung mit dem Codespace herzustellen.

  - Wenn der Codespace auf dieser Seite nicht aufgeführt ist, überprüfe, ob du Besitzer*in des Codespaces bist, mit dem du eine Verbindung herstellen möchtest. Du kannst nur Codespaces öffnen, die du erstellt hast. Die URLs für deine Codespaces enthalten immer deinen {% data variables.product.company_short %}-Handle.
  - Wenn der Codespace aufgeführt ist, du jedoch keine Verbindung von dieser Seite aus herstellen kannst, überprüfe, ob du mit einem anderen Browser eine Verbindung herstellen kannst.

Dein Unternehmensnetzwerk könnte die Verbindung blockieren. Überprüfe, wenn möglich, Protokolle über verweigerte Verbindungen auf deinem Gerät.

Wenn du immer noch keine Verbindung herstellen kannst, {% data reusables.codespaces.contact-support %}.

## Herstellen einer Verbindung mit deinem Codespace in JupyterLab nicht möglich

Um einen Codespace in JupyterLab verwenden zu können, musst du sicherstellen, dass JupyterLab im Codespace installiert ist. Das Standardcontainerimage, das von {% data variables.product.prodname_github_codespaces %} verwendet wird, enthält JupyterLab, aber wenn du deine Entwicklungscontainerkonfiguration angepasst hast, musst du JupyterLab manuell installieren.

Wenn dein Codespace ein Debian-basiertes Image verwendet, kannst du JupyterLab im Entwicklungscontainer installieren, indem du das Feature `python` zu deiner `devcontainer.json`-Datei hinzufügst. Lege dabei die Option `installJupyterlab` auf `true` fest. Installiere JupyterLab andernfalls direkt in deinem Dockerfile. Installationsanweisungen findest du unter [Installation](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html) in der JupyterLab-Dokumentation.

Weitere Informationen zum `python`-Feature findest du auf der Infoseite im [`devcontainers/features`-Repository](https://github.com/devcontainers/features/tree/main/src/python). Weitere Informationen zur Datei `devcontainer.json` und zum Dockerfile findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson).

Wenn du immer noch keine Verbindung herstellen kannst, {% data reusables.codespaces.contact-support %}.

## Die {% data variables.product.prodname_github_codespaces %}-Erweiterung für {% data variables.product.prodname_vscode %} kann keine Verbindung herstellen

Wenn du von {% data variables.product.prodname_vscode %} Desktop keine Verbindung mit einem Codespace herstellen kannst, verwende die folgenden Problembehandlungsschritte.

1. Überprüfe, dass du die aktuelle Version der {% data variables.product.prodname_github_codespaces %}-Erweiterung installiert hast. Die Erweiterung ist ein Previewrelease, für das häufig Updates veröffentlicht werden.
   1. Rufe in {% data variables.product.prodname_vscode %} die Registerkarte „Erweiterungen“ auf.
   2. Wähle die {% data variables.product.prodname_github_codespaces %}-Erweiterung aus, um die Übersicht der Erweiterung anzuzeigen.
   3. Wenn ein Update verfügbar ist, wird eine Schaltfläche angezeigt. Klicke auf **Auf X.X.X aktualisieren**, um ein Upgrade auf die neueste Version durchzuführen.
2. Überprüfe, ob du den stabilen Build von {% data variables.product.prodname_vscode %} verwendest oder das [{% data variables.product.prodname_vscode %} Insiders](https://code.visualstudio.com/insiders/)-Release mit nächtlichen Updates. Wenn du das Insiders-Release verwendest, installiere den [stabilen Build](https://code.visualstudio.com/).
3. Dein Unternehmensnetzwerk könnte die Verbindung blockieren. Überprüfe, wenn möglich, Protokolle über verweigerte Verbindungen auf deinem Gerät.

Wenn du immer noch keine Verbindung herstellen kannst, {% data reusables.codespaces.contact-support %}.

### Latenzprobleme beim Codespace

Wenn der Codespace besonders langsam erscheint oder Latenzprobleme aufweist, ist es möglich, dass es in einer weit von dir entfernten Region erstellt wurde. Als Lösung kannst du [deine {% data variables.product.prodname_github_codespaces %}-Region manuell festlegen](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
