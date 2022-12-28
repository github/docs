---
ms.openlocfilehash: 27ed9d55b8199298dc1cfdf8b4d3da925e08aa8d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068009"
---
1. Wähle das Betriebssystemimage und die Architektur deines selbstgehosteten Runnercomputers aus.
1. Du wirst Anweisungen sehen, wie Du die Läuferanwendung herunterlädst und sie auf Deiner selbst-gehosteten Läufermaschine installierst.

   Öffne eine Shell auf Deiner selbst-gehosteten Läufermaschine und führe jeden Shell-Befehl in der angezeigten Reihenfolge aus.

   {% note %}

   **Hinweis:** Wenn du unter Windows die selbstgehostete Runneranwendung als Dienst installieren möchtest, musst du eine Shell mit Administratorberechtigungen öffnen. Auch wird empfohlen, dass du `C:\actions-runner` als Verzeichnis für die selbstgehostete Runneranwendung verwendest, damit Windows-Systemkonten auf das Runnerverzeichnis zugreifen können.

   {% endnote %}

   Die Anweisungen führen Dich durch die Vervollständigung dieser Aufgaben:
   - Herunterladen und Extrahieren der selbst-gehosteten Läuferanwendung.
   - Ausführen des `config`-Skripts zum Konfigurieren der selbstgehosteten Runneranwendung und die Registrierung mit {% data variables.product.prodname_actions %} Das `config`-Skript benötigt die Ziel-URL und ein automatisch generiertes, zeitlich begrenztes Token, um die Anforderung zu authentifizieren.
     - Unter Windows fragt das `config`-Skript auch, ob du die selbstgehostete Runneranwendung als Dienst installieren möchtest. Für Linux und macOS kannst Du einen Dienst installieren, nachdem Du das Hinzufügen des Läufers beendet hast. Weitere Informationen findest du unter [Konfigurieren der selbstgehosteten Runneranwendung als Dienst](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service).
   - Ausführen der selbst-gehosteten Läuferanwendung zum Verbinden der Maschine mit {% data variables.product.prodname_actions %}.
