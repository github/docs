---
ms.openlocfilehash: ae3a6c6743e497213f23230a4f78d98a1ab9a110
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192929"
---
Ein Benutzer gilt als aktiv, wenn er eine der folgenden Aktivitäten in {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} durchgeführt hat.

- Bei {% data variables.location.product_location %} anmelden
- Repository erstellen
- In ein Repository pushen
- Zu einem Repository hinzugefügt werden
- Die Sichtbarkeit eines Repositorys ändern
- Ein „Issue“ (Problem) oder einen Pull-Request erstellen
- Ein Issue oder einen Pull Request kommentieren
- Ein Issue oder einen Pull Request schließen oder erneut öffnen
- Eine Bezeichnung einem Issue oder Pull Request zuweisen bzw. entfernen
- Ein Issue oder einen Pull Request zuweisen oder die Zuweisung aufheben
- Ein Review eines Pull Requests anfordern oder die Anforderung eines Reviews entfernen
- Einen Kommentar in einem Review eines Pull Requests erstellen oder bearbeiten
- Einen Kommentar in einem Pull Request ablehnen 
- Einen Pull Request synchronisieren
- Einen Commit kommentieren
- Ein Release veröffentlichen
- In ein Wiki pushen
- Ein Repository beobachten
- Versehen eines Repositorys mit einem Stern
- Repository löschen
- Mithilfe eines {% data variables.product.pat_generic %} oder SSH-Schlüssels auf Ressourcen zugreifen
- Einer Organisation beitreten

{% ifversion ghes %} Ein Benutzer wird auch als aktiv betrachtet, wenn sein Konto durch LDAP aktualisiert wurde.
{% endif %}
