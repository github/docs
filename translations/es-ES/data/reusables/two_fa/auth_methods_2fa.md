---
ms.openlocfilehash: 005667bae249af732a73e5afc53e7dcd7ae436fe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145091836"
---
{% ifversion ghes %}
### Métodos de autenticación que admiten la 2FA

| Método de autenticación | Descripción  | Soporte técnico de la autenticación de dos factores |
|-----------------------|--------------|-----------------------------------|
| Integrada | La autenticación se realiza en las cuentas personales que están almacenadas en el dispositivo de {% data variables.product.prodname_ghe_server %}. | Recibe soporte técnico y se administra en el aparato del {% data variables.product.prodname_ghe_server %}. Los administradores de la organización pueden solicitar que se habilite la 2FA para los miembros de la organización. |{% ifversion ghes %}
| Autenticación incorporada con un proveedor de identidad| La autenticación se realiza en las cuentas que están almacenadas en el proveedor de identidades. | Depende del proveedor de identidad.{% endif %}
| LDAP | Permite la integración con el servicio de directorio de tu empresa para la autenticación. | Recibe soporte técnico y se administra en el aparato del {% data variables.product.prodname_ghe_server %}. Los administradores de la organización pueden solicitar que se habilite la 2FA para los miembros de la organización. |
| SAML | La autenticación se realiza en un proveedor de identidad externo. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %} |
| CAS | El servicio de inicio de sesión único lo proporciona un servidor externo. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}{% endif %}
