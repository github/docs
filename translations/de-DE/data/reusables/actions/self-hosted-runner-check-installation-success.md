---
ms.openlocfilehash: a9030eae8492863ee750f2a02eeac584fd13513a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145068025"
---

### Überprüfung dass dein selbst-gehosteter Läufer erfolgreich hinzugefügt wurde

Nach Abschluss der Schritte zum Hinzufügen eines selbst gehosteten Runners werden der Runner und sein Status jetzt unter {% ifversion fpt or ghec %}„Runner“{% elsif ghae or ghes %}„Selbst-gehostete Runner“{% endif %} aufgeführt.

Die selbst-gehostete Läuferanwendung muss aktiv sein, damit der Läufer Aufträge annehmen kann. Wenn die Runner-Anwendung mit {% data variables.product.product_name %} verbunden und bereit ist, Aufträge zu empfangen, siehst du die folgende Meldung auf dem Terminal des Computers.

{% data reusables.actions.self-hosted-runner-connected-output %}
