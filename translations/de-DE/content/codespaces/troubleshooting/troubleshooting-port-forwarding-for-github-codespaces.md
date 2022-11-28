---
title: Problembehandlung bei der Portweiterleitung für GitHub Codespaces
intro: Schritte zur Behandlung gängiger Fehler bei der Portweiterleitung.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Port forwarding
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-port-forwarding-for-codespaces
ms.openlocfilehash: 828150ca05c18cb1106f5a3c883331785b6bce2e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159149'
---
Wenn eine Anwendung, die innerhalb eines Codespace ausgeführt wird, einen Port an die Konsole ausgibt, erkennt {% data variables.product.prodname_github_codespaces %} das Localhost-URL-Muster und leitet den Port automatisch weiter. Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

Wenn ein Port nicht automatisch weitergeleitet wird, kannst du ihn manuell weiterleiten. Weitere Informationen findest du unter [Weiterleiten eines Ports](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port).

Wenn die Portweiterleitung eingerichtet ist, überprüfe Folgendes:

- Verwende den Link in der Popupmeldung der Benachrichtigung, die rechts unten in {% data variables.product.prodname_vscode_shortname %} angezeigt wird, oder klicke im Terminal auf die URL, um den weitergeleiteten Port zu öffnen. Die Eingabe von `localhost:8000` (als Beispiel) auf deinem lokalen Computer wird nicht funktionieren, wenn du über den Browser mit dem Codespace verbunden bist.
- Stelle sicher, dass deine Anwendung weiterhin innerhalb deines Codespace ausgeführt wird. Wenn dein Codespace nach einer Zeit der Inaktivität beendet wurde, musst du sicherstellen, dass deine Anwendung neu gestartet wird, sobald der Codespace neu gestartet wurde.

Normalerweise kannst du einen weitergeleiteten Port öffentlich zugänglich machen, oder innerhalb der Organisation, die ein Repository besitzt. Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace). Wenn weder die öffentliche noch die Organisationssichtbarkeit verfügbar ist, oder eine der beiden Optionen nicht verfügbar ist, zeigt dies, dass eine Richtlinie auf Organisationsebene konfiguriert wurde. Weitere Informationen findest du unter [Einschränken der Sichtbarkeit weitergeleiteter Ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports).

{% data reusables.codespaces.forwarded-ports-environment-variable %}
