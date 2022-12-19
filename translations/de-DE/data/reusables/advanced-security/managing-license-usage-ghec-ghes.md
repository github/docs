---
ms.openlocfilehash: c47a4efc23963dcfa0be69207387cd2d02704aef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147877057"
---
Wenn du {% data variables.product.prodname_advanced_security %} für Repositorys aktivierst oder deaktivierst, zeigt {% data variables.product.prodname_dotcom %} eine Übersicht über Änderungen an der Verwendung deiner Lizenz an. Wenn du den Zugriff auf {% data variables.product.prodname_GH_advanced_security %} deaktivierst, werden alle von „eindeutigen“ Committern verwendeten Arbeitsplätze freigegeben.

Wenn du dein Lizenzlimit überschreitest, funktioniert {% data variables.product.prodname_GH_advanced_security %} weiterhin in allen Repositorys, in denen diese Option bereits aktiviert ist. In Organisationen, in denen {% data variables.product.prodname_GH_advanced_security %} für neue Repositorys aktiviert wird, werden Repositorys jedoch mit deaktiviertem Feature erstellt. Darüber hinaus ist die Option zum Aktivieren von {% data variables.product.prodname_GH_advanced_security %} für vorhandene Repositorys nicht verfügbar.{% ifversion fpt or ghec %} Wenn du die Sichtbarkeit eines öffentlichen Repositorys in „privat“ änderst, wird {% data variables.product.prodname_GH_advanced_security %} für dieses Repository deaktiviert.{% endif %}

Sobald du einige Arbeitsplätze freigibst, indem du {% data variables.product.prodname_GH_advanced_security %} für einige Repositorys deaktivierst oder deine Lizenzgröße erhöhst, funktionieren die Optionen zum Aktivieren von {% data variables.product.prodname_GH_advanced_security %} wieder wie gewohnt.
