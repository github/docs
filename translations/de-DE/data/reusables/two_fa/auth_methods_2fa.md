---
ms.openlocfilehash: 005667bae249af732a73e5afc53e7dcd7ae436fe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145088491"
---
{% ifversion ghes %}
### Authentifizierungsmethoden, die 2FA unterstützen

| Authentifizierungsmethode | BESCHREIBUNG  | Unterstützung der Zwei-Faktor-Authentifizierung |
|-----------------------|--------------|-----------------------------------|
| Integriert | Die Authentifizierung erfolgt über persönliche Konten, die in der {% data variables.product.prodname_ghe_server %}-Appliance gespeichert sind. | Wird in der {% data variables.product.prodname_ghe_server %}-Appliance unterstützt und verwaltet. Organisationsadministratoren können vorschreiben, dass die Zwei-Faktor-Authentifizierung für Mitglieder der Organisation aktiviert werden muss. |{% ifversion ghes %}
| Integrierte Authentifizierung mit einem Identitätsanbieter| Die Authentifizierung erfolgt über persönliche Konten, die beim Identitätsanbieter gespeichert sind. | Ist vom Identitätsanbieter abhängig.{% endif %}
| LDAP | Erlaubt die Integration in Deinen Unternehmens-Verzeichnisdienst für Authentifizierung. | Wird in der {% data variables.product.prodname_ghe_server %}-Appliance unterstützt und verwaltet. Organisationsadministratoren können vorschreiben, dass die Zwei-Faktor-Authentifizierung für Mitglieder der Organisation aktiviert werden muss. |
| SAML | Die Authentifizierung erfolgt über einen externen Identitätsanbieter. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %} |
| CAS | Der Single Sign-On-Dienst wird von einem externen Server bereitgestellt. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}{% endif %}
