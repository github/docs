---
ms.openlocfilehash: 30657af068d61df41410e2b11f9d89172891e748
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145134876"
---
{% data variables.product.product_name %} поддерживает единый вход SAML с использованием поставщиков удостоверений, реализующих стандарт SAML 2.0. Дополнительные сведения см. на [вики-странице по SAML](https://wiki.oasis-open.org/security) на веб-сайте OASIS.

{% data variables.product.company_short %} обеспечивает официальную поддержку и внутреннее тестирование для указанных ниже поставщиков удостоверений.

{% ifversion fpt or ghec or ghes %}
- Службы федерации Active Directory (AD FS)
- Azure Active Directory (Azure AD)
- Okta
- OneLogin
- PingOne
- Shibboleth {% elsif ghae %}
- Azure Active Directory (Azure AD)
- Okta (бета-версия) {% endif %}
