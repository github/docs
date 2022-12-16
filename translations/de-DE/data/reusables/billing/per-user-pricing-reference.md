---
ms.openlocfilehash: c8432b756590deab759f023a78453a482b8091fd
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145103399"
---
Beim benutzerbasierten Preismodell benötigt jede Person eine Lizenz. {% data variables.product.company_short %} identifiziert Personen anhand ihrer primären E-Mail-Adresse.

In {% data variables.product.company_short %} fallen Kosten für die folgenden Personen an.

{%- ifversion ghec %}
- Unternehmensbesitzer, die Mitglied oder Besitzer mindestens einer Organisation im Unternehmen sind {%- endif %}
- Mitglieder der Organisation, einschließlich der Besitzer
- Externe Mitarbeiter an privaten{% ifversion ghec %} oder internen{% endif %} Repositorys, die deiner Organisation gehören (ausgenommen Forks)
- Alle Personen mit einer ausstehenden Einladung, Besitzer oder Mitglied einer Organisation zu werden
- Alle Personen mit einer ausstehenden Einladung zur Mitarbeit an privaten{% ifversion ghec %} oder internen{% endif %} Repositorys, die deiner Organisation gehören (ausgenommen Forks) {%- ifversion ghec %}
- Jeder Benutzer auf einer {% data variables.product.prodname_ghe_server %}-Instanz, die du bereitstellst {% endif %}

Für die folgenden Personen fallen in {% data variables.product.company_short %} keine Kosten an.

{%- ifversion ghec %}
- Unternehmensbesitzer, die nicht Mitglied oder Besitzer mindestens einer Organisation im Unternehmen sind
- Unternehmensabrechnungsmanager {%- endif %}
- Organisationsabrechnungsmanager{% ifversion ghec %} für einzelne Organisationen auf {% data variables.product.prodname_ghe_cloud %}{% endif %}
- Alle Personen mit einer ausstehenden Einladung, ein{% ifversion ghec %} Unternehmens- oder{% endif %} Organisationsabrechnungsmanager zu werden
- Alle Personen mit einer ausstehenden Einladung zur Mitarbeit an einem öffentlichen Repository, das deiner Organisation gehört

{% note %}

**Hinweis**: {% data reusables.organizations.org-invite-scim %}

{% endnote %}
