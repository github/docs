---
ms.openlocfilehash: 30657af068d61df41410e2b11f9d89172891e748
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145126415"
---
{% data variables.product.product_name %} é compatível com o SAML SSO, com IdPs que implementam o padrão SAML 2.0. Para obter mais informações, confira o [wiki do SAML](https://wiki.oasis-open.org/security) no site do OASIS.

Oficialmente, o {% data variables.product.company_short %} dá suporte aos IdPs a seguir e testa-os internamente.

{% ifversion fpt or ghec or ghes %}
- Serviços de Federação do Active Directory (AD FS)
- Active Directory do Azure (Azure AD)
- Okta
- OneLogin
- PingOne
- Shibboleth {% elsif ghae %}
- Active Directory do Azure (Azure AD)
- Okta (beta) {% endif %}
