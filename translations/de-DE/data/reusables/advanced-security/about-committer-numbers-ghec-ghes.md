---
ms.openlocfilehash: 281a3a039c8a557c209e756d107ac1856a181017
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089091"
---
Wir erfassen und zeigen zwei Zahlen von Committern für {% data variables.product.prodname_GH_advanced_security %} auf {% data variables.product.product_location %}:

- **Committer** ist die Anzahl der Commiter, die zu mindestens einem {% ifversion fpt or ghec %}privaten {% endif %}-Repository in einer Organisation beigetragen haben und einen Arbeitsplatz in Deiner Unternehmenslizenz verwenden. Das heißt, sie sind auch Mitglied der Organisation, ein externer Mitarbeiter oder haben eine ausstehende Einladung, an einer Organisation in Deinem Unternehmen teilzunehmen.
- **Eindeutig für dieses Repository/diese Organisation** ist die Anzahl der Committer, die nur zu diesem Repository oder zu Repositorys in dieser Organisation beigetragen haben. Diese Zahl zeigt, wie viele Lizenzplätze Du freigeben kannst, indem Du {% data variables.product.prodname_GH_advanced_security %} für dieses Repository oder eine Organisation deaktivierst.

Wenn keine eindeutigen Commiter vorhanden sind, tragen alle aktiven Committer auch zu anderen Repositorys oder Organisationen bei, die {% data variables.product.prodname_GH_advanced_security %} verwenden. Das Deaktivieren der Funktion für dieses Repository oder eine Organisation würde keine Arbeitsplätze in Deiner Lizenz freigeben.

Wenn Du einen Benutzer aus Deinem Unternehmenskonto entfernst, wird die Lizenz des Benutzers innerhalb von 24 Stunden freigestellt.

{% note %}

**Hinweis:** Benutzer können zu mehreren Repositorys oder Organisationen beitragen. Die Verwendung wird über das gesamte Unternehmenskonto gemessen, um sicherzustellen, dass jedes Mitglied einen Arbeitsplatz verwendet, unabhängig davon, zu wie vielen Repositorys oder Organisationen der Benutzer beiträgt.

{% endnote %}
