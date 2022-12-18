---
ms.openlocfilehash: f49d42aa3fafbdbde2a650f84bc3b48a61e26182
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764090"
---
{% comment %} 

Füge immer vor diesem Verfahren eine Sicherheitswarnung ein. Dies ist eine der folgenden, je nachdem, ob der Kontext selbstgehostete Runner oder größere Runner sind.

{% data reusables.actions.self-hosted-runner-security-admonition %} {% data reusables.actions.hosted-runner-security-admonition %}
 
{% endcomment %}

Unternehmen können ihre Runner für die Zugriffsverwaltung zu Gruppen hinzufügen. Unternehmen können Gruppen mit Runnern erstellen, auf die bestimmte Organisationen innerhalb des Unternehmenskontos{% ifversion restrict-groups-to-workflows %} oder bestimmte Workflows{% endif %} zugreifen können. Organisationsbesitzer können anschließend den Runnergruppen im Unternehmen weitere präzise Zugriffsrichtlinien für Repositorys{% ifversion restrict-groups-to-workflows %} oder Workflows{% endif %} zuweisen. Weitere Informationen zum Erstellen einer Runnergruppe mit der REST-API findest du unter den Enterprise-Endpunkten in der [{% data variables.product.prodname_actions %}-REST-API](/rest/reference/actions#self-hosted-runner-groups).

Runner werden nach der Erstellung automatisch der Standardgruppe zugewiesen und können immer nur Mitglied einer Gruppe sein. Während des Registrierungsprozesses kannst du den Runner einer bestimmten Gruppe zuweisen oder ihn später aus der Standardgruppe in eine benutzerdefinierte Gruppe verschieben.

Beim Erstellen einer Gruppe musst du eine Richtlinie auswählen, die definiert, welche Organisationen Zugriff auf die Runnergruppe erhalten.

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. Wenn du eine Richtlinie für den Organisationszugriff auswählen möchtest, wähle die Dropdownliste **Organisationszugriff** aus, und klicke auf eine Richtlinie. Du kannst eine Runnergruppe so konfigurieren, dass nur eine bestimmte Liste von Organisationen oder alle Organisationen im Unternehmen darauf zugreifen können.{% ifversion ghes %} Standardmäßig können nur private Repositorys auf Runner in einer Runnergruppe zugreifen. Diese Einstellung kannst du bei Bedarf überschreiben.{% endif %}

   {%- ifversion ghec or ghes %}

   ![Hinzufügen von Optionen für Runnergruppen](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png) {%- elsif ghae %}

   ![Hinzufügen von Optionen für Runnergruppen](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options-ae.png) {%- endif %} {% data reusables.actions.runner-group-assign-policy-workflow %}
1. Klicke auf **Gruppe speichern**, um die Gruppe zu erstellen und die Richtlinie anzuwenden.

