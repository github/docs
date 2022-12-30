---
ms.openlocfilehash: 30657af068d61df41410e2b11f9d89172891e748
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145134877"
---
{% data variables.product.product_name %}는 SAML 2.0 표준을 구현하는 IdP가 있는 SAML SSO를 지원합니다. 자세한 내용은 OASIS 웹 사이트의 [SAML Wiki](https://wiki.oasis-open.org/security)를 참조하세요.

{% data variables.product.company_short %}는 다음 IdP를 공식적으로 지원하고 내부적으로 테스트합니다.

{% ifversion fpt or ghec or ghes %}
- AD FS(Active Directory Federation Services)
- Azure AD(Azure Active Directory)
- Okta
- OneLogin
- PingOne
- Shibboleth{% elsif ghae %}
- Azure AD(Azure Active Directory)
- Okta(베타){% endif %}
