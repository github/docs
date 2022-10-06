---
ms.openlocfilehash: 005667bae249af732a73e5afc53e7dcd7ae436fe
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145083646"
---
{% ifversion ghes %}
### Métodos de autenticação compatíveis com a 2FA

| Método de autenticação | Descrição  | Suporte para autenticação de dois fatores |
|-----------------------|--------------|-----------------------------------|
| Interno | A autenticação é feita para as contas pessoais armazenadas no dispositivo do {% data variables.product.prodname_ghe_server %}. | Recebe suporte e gerenciamento no dispositivo de {% data variables.product.prodname_ghe_server %}. Os administradores da organização podem exigir que a 2FA seja habilitada para integrantes da organização. |{% ifversion ghes %}
| Autenticação integrada com um provedor de identidade| A autenticação é realizada para as contas armazenadas no provedor de identidade. | Depende do provedor de identidade.{% endif %}
| LDAP | Permite integração com seus diretórios da empresa para autenticação. | Recebe suporte e gerenciamento no dispositivo de {% data variables.product.prodname_ghe_server %}. Os administradores da organização podem exigir que a 2FA seja habilitada para integrantes da organização. |
| SAML | A autenticação é realizada em um provedor de identidade externo. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %} |
| CAS | Serviço de logon único é fornecido por um servidor externo. | {% data reusables.two_fa.2fa_not_supported_with_saml_and_cas %}{% endif %}
