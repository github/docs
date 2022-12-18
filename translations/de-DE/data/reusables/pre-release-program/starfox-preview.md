---
ms.openlocfilehash: 3557e85680e20919fbe049cfe30ccacc93d9c17c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879809"
---
{% note %}

**Hinweis**: Projektkartendetails werden jetzt in REST-API-Antworten für projektbezogene Issue- und Zeitachsenereignisse angezeigt. Dieses Feature ist jetzt als Vorschauversion für Entwickler verfügbar. Ausführliche Informationen hierzu findest du in diesem [Blogbeitrag](https://developer.github.com/changes/2018-09-05-project-card-events).

Um das `project_card`-Attribut zu erhalten, müssen Projektboards für ein Repository [aktiviert](/articles/disabling-project-boards-in-a-repository) sein, und du musst einen benutzerdefinierten [Medientyp](/rest/overview/media-types) im `Accept`-Header bereitstellen:

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
