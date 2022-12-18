---
ms.openlocfilehash: 30657af068d61df41410e2b11f9d89172891e748
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145128461"
---
{% data variables.product.product_name %} prend en charge l’authentification unique (SSO) SAML avec des fournisseurs d’identité qui implémentent la norme SAML 2.0. Pour plus d’informations, consultez le [Wiki SAML](https://wiki.oasis-open.org/security) sur le site web OASIS.

{% data variables.product.company_short %} prend officiellement en charge et teste en interne les fournisseurs d’identité suivants.

{% ifversion fpt or ghec or ghes %}
- Active Directory Federation Services (AD FS)
- Azure Active Directory (Azure AD)
- Okta
- OneLogin
- PingOne
- Shibboleth {% elsif ghae %}
- Azure Active Directory (Azure AD)
- Okta (bêta) {% endif %}
