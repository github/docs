---
ms.openlocfilehash: 30657af068d61df41410e2b11f9d89172891e748
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145130645"
---
{% data variables.product.product_name %} unterstützt SAML-SSO mit Identitätsanbietern, die den SAML 2.0-Standard implementieren. Weitere Informationen findest du im [SAML-Wiki](https://wiki.oasis-open.org/security) auf der OASIS-Website.

Folgende Identitätsanbieter werden von {% data variables.product.company_short %} offiziell unterstützt und intern getestet:

{% ifversion fpt or ghec or ghes %}
- Active Directory-Verbunddienste (AD FS)
- Azure Active Directory (Azure AD)
- Okta
- OneLogin
- PingOne
- Shibboleth {% elsif ghae %}
- Azure Active Directory (Azure AD)
- Okta (Beta) {% endif %}
