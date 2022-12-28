---
ms.openlocfilehash: 19ffef89b0f09653fc396f4cfc99e47e2162548b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108463"
---
{% comment %} 

Füge immer vor diesem Verfahren eine Sicherheitswarnung ein. Dies ist eine der folgenden, je nachdem, ob der Kontext selbstgehostete Runner oder größere Runner sind.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Für Runnergruppen in einem Unternehmen kannst du ändern, welche Organisationen im Unternehmen auf eine Runnergruppe zugreifen können{% ifversion restrict-groups-to-workflows %}, oder du kannst einschränken, welche Workflows eine Runnergruppe ausführen kann{% endif %}. Für Runnergruppen in einer Organisation kannst du ändern, welche Repositorys in der Organisation auf eine Runnergruppe zugreifen können{% ifversion restrict-groups-to-workflows %}, oder du kannst einschränken, welche Workflows eine Runnergruppe ausführen kann{% endif %}.

### Ändern der Organisationen oder Repositorys, die auf eine Runnergruppe zugreifen können

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Ändere für Runnergruppen in einem Unternehmen unter **Organisationszugriff**, welche Organisationen auf die Runnergruppe zugreifen können. Ändere für Runnergruppen in einer Organisation unter **Repositoryzugriff**, welche Repositorys auf die Runnergruppe zugreifen können.

{% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.actions.configure-runner-group-access %} {% endif %}

{% ifversion restrict-groups-to-workflows %}
### Ändern der Workflows, die auf eine Runnergruppe zugreifen können
Du kannst eine Runnergruppe so konfigurieren, dass sie entweder ausgewählte Workflows oder alle Workflows ausführt. Mit dieser Einstellung kannst du z. B. die in einem Runner gespeicherten Geheimnisse schützen oder Bereitstellungsworkflows standardisieren, indem du eine Runnergruppe auf die Ausführung eines bestimmten wiederverwendbaren Workflows beschränkst. Diese Einstellung kann nicht überschrieben werden, wenn du die von einem Unternehmen freigegebene Runnergruppe einer Organisation konfigurierst. {% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
1. Wähle unter **Workflowzugriff** das Dropdownmenü aus, und klicke auf **Ausgewählte Workflows**.
1. Klicke auf {% octicon "gear" aria-label="the gear icon" %}.
1. Gib eine durch Kommas getrennte Liste der Workflows ein, die Zugriff auf die Runnergruppe erhalten. Verwende den vollständigen Pfad, einschließlich Name und Besitzer des Repositorys. Hefte den Workflow an einen Branch, Tag oder vollständigen SHA-Wert an. Beispiel: `octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`.

   Zugriff auf die Runnergruppe erhalten nur Aufträge, die direkt innerhalb der ausgewählten Workflows definiert sind.
   
   Runnergruppen im Besitz einer Organisation können nicht auf Workflows einer anderen Organisation im Unternehmen zugreifen. Erstelle stattdessen eine Runnergruppe in Enterprise-Besitz.

1. Klicken Sie auf **Speichern**.

{% endif %}
