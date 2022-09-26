---
ms.openlocfilehash: 30657af068d61df41410e2b11f9d89172891e748
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145127437"
---
{% data variables.product.product_name %} 支持 SAML SSO 与采用 SAML 2.0 标准的 IdP 一起使用。 有关详细信息，请参阅 OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)。

{% data variables.product.company_short %} 官方支持和内部测试以下 IdP。

{% ifversion fpt or ghec or ghes %}
- Active Directory 联合身份验证服务 (AD FS)
- Azure Active Directory (Azure AD)
- Okta
- OneLogin
- PingOne
- Shibboleth {% elsif ghae %}
- Azure Active Directory (Azure AD)租户
- Okta (beta) {% endif %}
