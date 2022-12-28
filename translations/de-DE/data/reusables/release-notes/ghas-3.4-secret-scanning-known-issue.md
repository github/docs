---
ms.openlocfilehash: 432a33a54f6568b889f8089173f3787a960410fe
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763740"
---
{% ifversion ghes < 3.5 %}

In einigen Fällen stellen GitHub Advanced Security-Kunden, die ein Upgrade auf GitHub Enterprise Server 3.5 oder höher durchführen, fest, dass Warnungen aus Geheimnisscans in der Webbenutzeroberfläche und der REST-API fehlen. Um sicherzustellen, dass die Warnungen sichtbar bleiben, überspringe Version 3.4 nicht, wenn du ein Upgrade von einer früheren Version auf Version 3.5 oder höher durchführst. In den Patchreleases [3.5.5](/enterprise-server@3.5/admin/release-notes#3.5.5) und [3.6.1](/enterprise-server@3.6/admin/release-notes#3.6.1) ist ein Fix verfügbar.

Weitere Informationen zum Planen eines Upgrades über Version 3.4 findest du unter [Upgrade-Assistent](https://support.github.com/enterprise/server-upgrade). [Aktualisiert: 2022-09-01]

{% elsif ghes = 3.5 or ghes = 3.6 %}

In einigen Fällen stellen GitHub Advanced Security-Kunden, die ein Upgrade auf GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} durchführen, fest, dass Warnungen aus Geheimnisüberprüfungen in der Webbenutzeroberfläche und der REST-API fehlen. Um sicherzustellen, dass die Warnungen sichtbar bleiben, überspringe Version 3.4 nicht beim Upgrade auf das neueste Release. Weitere Informationen zum Planen eines Upgrades über Version 3.4 findest du unter [Upgrade-Assistent](https://support.github.com/enterprise/server-upgrade).

- Um die fehlenden Warnungen für alle Repositorys anzuzeigen, die einer Organisation gehören, können Organisationsinhaber*innen zu den **Codesicherheits- und Analyseeinstellungen** der Organisation navigieren und dann **Alle aktivieren** für Geheimnisscans auswählen. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories).
- Um die fehlenden Warnungen für ein einzelnes Repository anzuzeigen, können Benutzer*innen mit Administratorzugriff auf das Repository Geheimnisscans für das Repository zuerst deaktivieren und dann aktivieren. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).

Im Patchrelease {% ifversion ghes = 3.5 %}[3.5.5](/admin/release-notes#3.5.5){% elsif ghes = 3.6 %}[3.6.1](/admin/release-notes#3.6.1){% endif %} ist ein Fix verfügbar. [Aktualisiert: 2022-09-01]

{% endif %}
