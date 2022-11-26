---
ms.openlocfilehash: 30657af068d61df41410e2b11f9d89172891e748
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134875"
---
{% data variables.product.product_name %} es compatible con el SSO de SAML para los IdP que implementen SAML 2.0 estándar. Para más información, vea la [wiki de SAML](https://wiki.oasis-open.org/security) en el sitio web de OASIS.

{% data variables.product.company_short %} es oficialmente compatible con y prueba internamente los siguientes IdP.

{% ifversion fpt or ghec or ghes %}
- Active Directory Federation Services (AD FS)
- Azure Active Directory (Azure AD)
- Okta
- OneLogin
- PingOne
- Shibboleth {% elsif ghae %}
- Azure Active Directory (Azure AD)
- Okta (beta) {% endif %}
