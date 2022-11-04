---
ms.openlocfilehash: 7f8e979109d851c152b9cb2b90569ea12155b2dd
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: "148111519"
---
如果配置了 SAML SSO，组织成员将继续在 {% data variables.product.prodname_dotcom_the_website %} 上登录到其个人帐户。 当成员访问组织内的大部分资源时，{% data variables.product.prodname_dotcom %} 会将成员重定向到你的 IdP 以进行身份验证。 身份验证成功后，IdP 将该成员重定向回 {% data variables.product.prodname_dotcom %}。 有关详细信息，请参阅“[关于通过 SAML 单一登录进行身份验证](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)”。

{% note %}

**注意：** SAML SSO 不会取代 {% data variables.product.prodname_dotcom %} 的正常登录过程。 除非使用 {% data variables.product.prodname_emus %}，否则成员将继续在 {% data variables.product.prodname_dotcom_the_website %} 上登录到其个人帐户，并且每个个人帐户都将链接到 IdP 中的外部标识。

{% endnote %}
