---
ms.openlocfilehash: 30657af068d61df41410e2b11f9d89172891e748
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145130644"
---
{% data variables.product.product_name %} は、SAML2.0 標準を実装し IdP を使用した SAML SSO をサポートします。 詳細については、OASIS の Web サイトの [SAML Wiki](https://wiki.oasis-open.org/security) を参照してください。

{% data variables.product.company_short %} は、次の IdP を正式にサポートし、内部的にテストします。

{% ifversion fpt or ghec or ghes %}
- Active Directory フェデレーション サービス (AD FS)
- Azure Active Directory (Azure AD)
- Okta
- OneLogin
- PingOne
- Shibboleth {% elsif ghae %}
- Azure Active Directory (Azure AD)
- Okta (ベータ) {% endif %}
