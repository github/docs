---
ms.openlocfilehash: 740d5655197f25385b0ac206fdeea33a585f3ad4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060226"
---
Viele der Ressourcen für diese API bieten eine Tastenkombination zum Abrufen von Informationen zu den aktuell authentifizierten Benutzer*innen. Wenn eine Anforderungs-URL keinen `{username}`-Parameter enthält, ist die Antwort für die angemeldete Benutzerin bzw. den angemeldeten Benutzer bestimmt (Übergeben von [Authentifizierungsinformationen](/rest/overview/resources-in-the-rest-api#authentication) mit der Anforderung erforderlich).{% ifversion fpt or ghes or ghec %} Zusätzliche private Informationen (z. B. ob die zweistufige Authentifizierung für eine*n Benutzer*in aktiviert ist) sind enthalten, wenn die Authentifizierung über den grundlegenden Authentifizierungsvorgang oder OAuth mit dem `user`-Bereich erfolgt.{% endif %}
