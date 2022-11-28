---
title: Behandeln von Problemen mit GitHub-Codespaces
allowTitleToDifferFromFilename: true
intro: Schritte zum Behandeln gängiger Probleme mit Dotfiles
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
ms.openlocfilehash: 699f790e45c71e685ac6b301e8dea1eca2ee6f15
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158685'
---
Wenn dein Codespace keine Konfigurationseinstellungen aus Dotfiles übernimmt, kannst du zum Debuggen die folgenden Schritte durchlaufen.

1. Aktiviere Dotfiles, indem du **Dotfiles automatisch installieren** in deinen [persönlichen {% data variables.product.prodname_github_codespaces %}-Einstellungen](https://github.com/settings/codespaces) auswählst.

   ![Die Option „Dotfiles automatisch installieren“](/assets/images/help/codespaces/automatically-install-dotfiles.png)

1. Überprüfe `/workspaces/.codespaces/.persistedshare/dotfiles`, um zu ermitteln, ob deine Dotfiles geklont wurden.
   - Wenn deine Dotfiles geklont wurden, versuche, das Installationsskript manuell erneut auszuführen, um dich zu vergewissern, dass es ausführbar ist.
   - Wenn deine Dotfiles nicht geklont wurden, überprüfe `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt`, um zu ermitteln, ob beim Klonen ein Problem aufgetreten ist.
1. Überprüfe `/workspaces/.codespaces/.persistedshare/creation.log` auf mögliche Probleme. Weitere Informationen findest du unter [Erstellungsprotokolle](/codespaces/troubleshooting/codespaces-logs#creation-logs).

Wenn die Konfiguration aus deinen Dotfiles ordnungsgemäß übernommen wird, ein Teil der Konfiguration aber nicht mit Codespaces kompatibel ist, verwende die Umgebungsvariable `$CODESPACES`, um bedingte Logik für codespacespezifische Konfigurationseinstellungen hinzuzufügen.
