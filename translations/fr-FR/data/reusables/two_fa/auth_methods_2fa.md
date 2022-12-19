---
ms.openlocfilehash: 005667bae249af732a73e5afc53e7dcd7ae436fe
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145086066"
---
{% ifversion ghes %}
### Méthodes d’authentification qui prennent en charge 2FA

| Méthode d'authentification | Description  | Prise en charge de l’authentification à deux facteurs |
|-----------------------|--------------|-----------------------------------|
| Intégré | L’authentification est effectuée sur des comptes personnels stockés sur l’appliance {% data variables.product.prodname_ghe_server %}. | Prise en charge et gérée sur l’appliance {% data variables.product.prodname_ghe_server %}. Les administrateurs de l’organisation peuvent exiger que 2FA soit activé pour les membres de l’organisation. |{% ifversion ghes %}
| Authentification intégrée avec un fournisseur d’identité| L’authentification est effectuée sur les comptes stockés sur le fournisseur d’identité. | Dépendant du fournisseur d’identité.{% endif %}
| LDAP | Autorise l’intégration au service d’annuaire de votre entreprise pour l’authentification. | Prise en charge et gérée sur l’appliance {% data variables.product.prodname_ghe_server %}. Les administrateurs de l’organisation peuvent exiger que 2FA soit activé pour les membres de l’organisation. |
| SAML | L’authentification est effectuée sur un fournisseur d’identité externe. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %} |
| Site d’administration centrale | Le service d’authentification unique est fourni par un serveur externe. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}{% endif %}
