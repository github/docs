---
ms.openlocfilehash: b62a0e5829c03ff7879fda2d714c4a7652d762b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109671"
---
{% comment %} 

Füge immer vor diesem Verfahren eine Sicherheitswarnung ein. Dies ist eine der folgenden, je nachdem, ob der Kontext selbstgehostete Runner oder größere Runner sind.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Alle Organisationen verfügen über eine einzige Standardrunnergruppe. Organisationen innerhalb eines Unternehmenskontos können weitere Gruppen erstellen. Organisationsadministratoren können einzelnen Repositorys Zugriff auf eine Runnergruppe gewähren. Weitere Informationen zum Erstellen einer Runnergruppe mit der REST-API findest du unter [Selbstgehostete Runnergruppen](/rest/reference/actions#self-hosted-runner-groups).

Runner werden nach der Erstellung automatisch der Standardgruppe zugewiesen und können immer nur Mitglied einer Gruppe sein. Du kannst einen Runner aus der Standardgruppe in eine beliebige, von dir erstellte Gruppe verschieben.

Beim Erstellen einer Gruppe musst du eine Richtlinie auswählen, die definiert, welche Repositorys{% ifversion restrict-groups-to-workflows %} und Workflows{% endif %} Zugriff auf die Runnergruppe erhalten.

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Klicke im Abschnitt „Runnergruppen“ auf **Neue Runnergruppe**.
1. Gib einen Namen für die Runnergruppe ein.
 {% data reusables.actions.runner-group-assign-policy-repo %} {% data reusables.actions.runner-group-assign-policy-workflow %}{%- ifversion restrict-groups-to-workflows %} Runnergruppen im Besitz einer Organisation haben keinen Zugriff auf Workflows einer anderen Organisation innerhalb des Unternehmens. Erstelle stattdessen eine Runnergruppe im Unternehmensbesitz.{% endif %} {% data reusables.actions.create-runner-group %} {% elsif ghae < 3.4 or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runner-groups %}
1. Klicke unter {% ifversion ghes or ghae %}“Runners“{% endif %} auf **Neu hinzufügen** und anschließend auf **Neue Gruppe**.

    ![Hinzufügen einer Runnergruppe](/assets/images/help/settings/actions-org-add-runner-group.png)
1. Gib einen Namen für die Runnergruppe ein, und weise eine Richtlinie für den Repositoryzugriff zu.

   Du kannst eine Runnergruppe so konfigurieren, dass nur eine bestimmte Liste von Repositorys oder alle Repositorys in der Organisation darauf zugreifen können.{% ifversion ghec or ghes %} Standardmäßig können nur private Repositorys auf Runner in einer Runnergruppe zugreifen. Diese Einstellung kannst du bei Bedarf überschreiben. Diese Einstellung kann nicht überschrieben werden, wenn du die von einem Unternehmen freigegebene Runnergruppe einer Organisation konfigurierst.{% endif %}
   
   ![Hinzufügen von Optionen für Runnergruppen](/assets/images/help/settings/actions-org-add-runner-group-options.png)
1. Klicke auf **Gruppe speichern**, um die Gruppe zu erstellen und die Richtlinie anzuwenden.
{% endif %}
