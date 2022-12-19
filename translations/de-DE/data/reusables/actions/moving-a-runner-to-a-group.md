---
ms.openlocfilehash: 81cfff3e9391616c64b73a3d7fc3d180e6760502
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109754"
---
Wenn du bei der Registrierung keine Runnergruppe angibst, werden deine neuen Runner automatisch der Standardgruppe zugewiesen und können dann in eine andere Gruppe verschoben werden.

{% data reusables.actions.self-hosted-runner-navigate-to-org-enterprise %} {% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. Klicke in der Liste „Runner“ auf den Runner, den du konfigurieren möchtest.
2. Wähle die Dropdownliste **Runnergruppe** aus.
3. Wähle unter „Runner in Gruppe verschieben“ eine Zielgruppe für den Runner aus.
{% elsif ghae < 3.4 or ghes < 3.4 %}
1. Suche auf der Seite „Einstellungen“ im Abschnitt {% ifversion ghes or ghae %}“Runnergruppen“{% endif %} nach der aktuellen Gruppe des Runners, den du verschieben möchtest, und klappe die Liste der Gruppenmitglieder auf.
    ![Anzeigen der Mitglieder der Runnergruppe](/assets/images/help/settings/actions-org-runner-group-members.png)
2. Aktiviere das Kontrollkästchen neben dem selbstgehosteten Runner, und klicke dann auf **In Gruppe verschieben**, um die verfügbaren Ziele anzuzeigen.
    ![Verschieben eines Mitglieds der Runnergruppe](/assets/images/help/settings/actions-org-runner-group-member-move.png)
3. Klicke zum Verschieben des Runners auf die Zielgruppe.
    ![Verschieben eines Mitglieds der Runnergruppe](/assets/images/help/settings/actions-org-runner-group-member-move-destination.png) {% endif %}
