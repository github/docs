---
ms.openlocfilehash: 41c1afacc9dbebc6722e5b60cbd5a52b5786df5d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147526814"
---
如果配置了 SAML SSO，组织成员将继续在 {% data variables.product.prodname_dotcom_the_website %} 上登录到其个人帐户。 当成员访问组织内的非公共资源时，{% data variables.product.prodname_dotcom %} 会将成员重定向到你的 IdP 以进行身份验证。 身份验证成功后，IdP 将该成员重定向回 {% data variables.product.prodname_dotcom %}。 有关详细信息，请参阅“[关于通过 SAML 单一登录进行身份验证](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)”。

{% note %}

**注意：** SAML SSO 不会取代 {% data variables.product.prodname_dotcom %} 的正常登录过程。 除非使用 {% data variables.product.prodname_emus %}，否则成员将继续在 {% data variables.product.prodname_dotcom_the_website %} 上登录到其个人帐户，并且每个个人帐户都将链接到 IdP 中的外部标识。

{% endnote %}