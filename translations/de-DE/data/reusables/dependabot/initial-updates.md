---
ms.openlocfilehash: 8adf896da9e4748cfaa5d0d0562172af14264f97
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145133494"
---
Beim ersten Aktivieren der Versionsaktualisierung sind möglicherweise viele Abhängigkeiten veraltet, und einige hinken der aktuellen Version um mehrere Versionen hinterher. {% data variables.product.prodname_dependabot %} führt sofort nach der Aktivierung eine Überprüfung auf veraltete Abhängigkeiten durch. Abhängig davon, für wie viele Manifestdateien du Updates konfigurierst, werden dir möglicherweise schon wenige Minuten nach dem Hinzufügen der Konfigurationsdatei neue Pull Requests für Versionsaktualisierungen angezeigt. {% data variables.product.prodname_dependabot %} führt auch bei späteren Änderungen an der Konfigurationsdatei eine Aktualisierung durch.

{% data variables.product.prodname_dependabot %} kann auch Pull Requests erstellen, wenn du eine Manifestdatei änderst, nachdem ein Update fehlgeschlagen ist. Dies liegt daran, dass Änderungen an einem Manifest – beispielsweise das Entfernen einer Abhängigkeit, durch die ein Update fehlschlägt – dazu führen können, dass die neu ausgelöste Aktualisierung erfolgreich ist.

Damit die Pull Requests überschaubar bleiben und leicht überprüft werden können, löst {% data variables.product.prodname_dependabot %} maximal fünf Pull Requests aus, um die Abhängigkeiten an die neueste Version anzupassen. Wenn einige der ersten Pull Requests vor der nächsten geplanten Aktualisierung gemergt werden, werden die verbleibenden Pull Requests beim nächsten Update geöffnet, bis zu diesem Höchstwert. Du kannst die maximale Anzahl offener Pull Requests ändern, indem du die [`open-pull-requests-limit`-Konfigurationsoption](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit) festlegst.
