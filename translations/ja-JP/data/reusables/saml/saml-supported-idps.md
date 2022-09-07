---
ms.openlocfilehash: 30657af068d61df41410e2b11f9d89172891e748
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
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
