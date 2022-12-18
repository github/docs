---
ms.openlocfilehash: 3bc47303cbc18b4d40a76fd12e6f692990f66c54
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103488"
---
{% ifversion ghes %} Standardmäßig sind Benutzer-zu-Server{% else %}Benutzer-zu-Server{% endif %}-Anforderungen auf {% ifversion ghae %}15.000{% elsif fpt or ghec or ghes %}5.000{% endif %} Anforderungen pro Stunde und pro authentifiziertem Benutzer beschränkt. Alle Anforderungen von OAuth-Anwendungen, die von einem Benutzer oder einem persönlichen Zugriffstoken im Besitz des Benutzers autorisiert werden, und Anforderungen, die mit Anmeldeinformationen des Benutzers zur Authentifizierung authentifiziert werden, teilen sich das gleiche Kontingent von {% ifversion ghae %}15.000{% elsif fpt or ghec or ghes %}5.000{% endif %} Anforderungen pro Stunde für diesen Benutzer.
