---
ms.openlocfilehash: b57bbd1a709b4cae3b93607d1cd03c1a4a31be15
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/07/2022
ms.locfileid: "148135687"
---
Wenn du ein oder mehrere Sicherheits- und Analysefeatures für vorhandene Repositorys aktivierst, werden alle Ergebnisse innerhalb von Minuten in {% data variables.product.prodname_dotcom %} angezeigt:

- Alle vorhandenen Repositorys verfügen über die ausgewählte Konfiguration.
- Neue Repositorys folgen der ausgewählten Konfiguration, wenn du das Kontrollkästchen für neue Repositorys aktiviert hast.{% ifversion GH-advisory-db-supports-malware %}
- Wir verwenden die Berechtigungen zum Suchen nach Manifestdateien, um die relevanten Dienste anzuwenden.
- Ist diese Option aktiviert, werden Abhängigkeitsinformationen im Abhängigkeitsdiagramm angezeigt.
- Ist diese Option aktiviert, generiert {% data variables.product.prodname_dotcom %} {% data variables.product.prodname_dependabot_alerts %} für anfällige Abhängigkeiten oder Schadsoftware.{% endif %}{% ifversion fpt or ghec or ghes %}
- Ist diese Option aktiviert, erstellen {% data variables.product.prodname_dependabot %}-Sicherheitsupdates Pullanforderungen, um anfällige Abhängigkeiten zu aktualisieren, wenn {% data variables.product.prodname_dependabot_alerts %} ausgelöst werden.{% endif %}
