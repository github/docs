---
title: Problembehandlung bei der Portweiterleitung für Codespaces
intro: Schritte zur Behandlung gängiger Fehler bei der Portweiterleitung
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Port forwarding
ms.openlocfilehash: 3b4a8af53b7c4ab28f30ed3c8b4b73c45c6a47e6
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090378"
---
Wenn eine Anwendung, die innerhalb eines Codespace ausgeführt wird, einen Port an die Konsole ausgibt, erkennt {% data variables.product.prodname_codespaces %} das Localhost-URL-Muster und leitet den Port automatisch weiter. Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

Wenn ein Port nicht automatisch weitergeleitet wird, kannst du ihn manuell weiterleiten. Weitere Informationen findest du unter [Weiterleiten eines Ports](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port).

Wenn die Portweiterleitung eingerichtet ist, überprüfe Folgendes:

- Verwende die Popupbenachrichtigung, oder klicke im Terminal auf die URL, um den weitergeleiteten Port zu öffnen. Die Eingabe von `localhost:8000` (als Beispiel) auf deinem lokalen Computer wird nicht funktionieren, wenn du über den Browser mit dem Codespace verbunden bist.
- Stelle sicher, dass deine Anwendung weiterhin innerhalb deines Codespace ausgeführt wird. Wenn dein Codespace nach einer Zeit der Inaktivität beendet wurde, musst du sicherstellen, dass deine Anwendung neu gestartet wird, sobald der Codespace neu gestartet wurde.

Normalerweise kannst du einen weitergeleiteten Port öffentlich zugänglich machen, oder innerhalb der Organisation, die ein Repository besitzt. Weitere Informationen findest du unter [Weiterleiten von Ports in Codespaces](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace). Wenn weder die öffentliche noch die Organisationssichtbarkeit verfügbar ist, oder eine der beiden Optionen nicht verfügbar ist, zeigt dies, dass eine Richtlinie auf Organisationsebene konfiguriert wurde. Weitere Informationen findest du unter [Einschränken der Sichtbarkeit weitergeleiteter Ports](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports).
