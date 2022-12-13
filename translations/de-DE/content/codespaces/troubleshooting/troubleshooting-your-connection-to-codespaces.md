---
title: Problembehandlung bei deiner Verbindung mit Codespaces
intro: Problembehandlung bei der Verbindung mit {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Connection
ms.openlocfilehash: c551126781da972ad39c42aea3ac67b121fab301
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090372"
---
## <a name="503-codespace-service-unavailable"></a>503 Codespace nicht verfügbar

Codespaces werden nach 30 Minuten ohne Aktivität beendet. Wenn du versuchst, mit einem Codespace zu interagieren, nachdem er beendet wurde, kann der Fehler `503 service unavailable` angezeigt werden. 

- Wenn eine Schaltfläche namens **Start** in {% data variables.product.prodname_vscode %} oder in deinem Browserfenster angezeigt wird, klicke auf **Start**, um wieder eine Verbindung mit dem Codespace herzustellen.
- Setze den Codespace zurück, indem du das Fenster noch einmal lädst. Klicke auf der [Befehlspalette](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#accessing-the-command-palette) in {% data variables.product.prodname_vscode %} auf **Developer: Fenster erneut laden**.

## <a name="browser-cannot-connect"></a>Browser kann keine Verbindung herstellen

Manchmal kannst du eventuell nicht aus deinem Browser auf einen Codespace zugreifen. Wenn dies geschieht, wechsle zu https://github.com/codespaces, und versuche, von dieser Seite aus eine Verbindung mit dem Codespace herzustellen.

  - Wenn der Codespace auf dieser Seite nicht aufgeführt ist, überprüfe, ob du Besitzer*in des Codespaces bist, mit dem du eine Verbindung herstellen möchtest. Du kannst nur Codespaces öffnen, die du erstellt hast. Die URLs für deine Codespaces enthalten immer deinen {% data variables.product.company_short %}-Handle.
  - Wenn der Codespace aufgeführt ist, du jedoch keine Verbindung von dieser Seite aus herstellen kannst, überprüfe, ob du mit einem anderen Browser eine Verbindung herstellen kannst.

Dein Unternehmensnetzwerk könnte die Verbindung blockieren. Überprüfe, wenn möglich, Protokolle über verweigerte Verbindungen auf deinem Gerät.

Wenn du immer noch keine Verbindung herstellen kannst, {% data reusables.codespaces.contact-support %}.

## <a name="-data-variablesproductprodname_github_codespaces--extension-for--data-variablesproductprodname_vscode--cannot-connect"></a>Die {% data variables.product.prodname_github_codespaces %}-Erweiterung für {% data variables.product.prodname_vscode %} kann keine Verbindung herstellen

Wenn du von {% data variables.product.prodname_vscode %} Desktop keine Verbindung mit einem Codespace herstellen kannst, verwende die folgenden Problembehandlungsschritte.

1. Überprüfe, dass du die aktuelle Version der {% data variables.product.prodname_github_codespaces %}-Erweiterung installiert hast. Die Erweiterung ist ein Previewrelease, für das häufig Updates veröffentlicht werden.
   1. Rufe in {% data variables.product.prodname_vscode %} die Registerkarte „Erweiterungen“ auf.
   2. Wähle die {% data variables.product.prodname_github_codespaces %}-Erweiterung aus, um die Übersicht der Erweiterung anzuzeigen.
   3. Wenn ein Update verfügbar ist, wird eine Schaltfläche angezeigt. Klicke auf **Auf X.X.X aktualisieren**, um ein Upgrade auf die neueste Version durchzuführen.
2. Überprüfe, ob du den stabilen Build von {% data variables.product.prodname_vscode %} verwendest oder das [{% data variables.product.prodname_vscode %} Insiders](https://code.visualstudio.com/insiders/)-Release mit nächtlichen Updates. Wenn du das Insiders-Release verwendest, installiere den [stabilen Build](https://code.visualstudio.com/).
3. Dein Unternehmensnetzwerk könnte die Verbindung blockieren. Überprüfe, wenn möglich, Protokolle über verweigerte Verbindungen auf deinem Gerät.

Wenn du immer noch keine Verbindung herstellen kannst, {% data reusables.codespaces.contact-support %}.

### <a name="the-codespace-has-latency-issues"></a>Latenzprobleme beim Codespace

Wenn der Codespace besonders langsam erscheint oder Latenzprobleme aufweist, ist es möglich, dass es in einer weit von dir entfernten Region erstellt wurde. Als Lösung kannst du [deine {% data variables.product.prodname_github_codespaces %}-Region manuell festlegen](/codespaces/managing-your-codespaces/setting-your-default-region-for-codespaces).
