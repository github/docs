---
title: 关于双重身份验证
intro: '{% data reusables.two_fa.about-2fa %}启用 2FA 时，必须使用您的用户名和密码登录，并提供另一种只有您知道或可以访问的身份验证形式。'
redirect_from:
  - /articles/about-two-factor-authentication
  - /github/authenticating-to-github/about-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: About 2FA
ms.openlocfilehash: f4b15aeeece76ce5e5afe915e0e0bc4893c4dbb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084612'
---
对于 {% data variables.product.product_name %} 来说，第二种身份验证形式是一个由移动设备上的应用程序生成的{% ifversion fpt or ghec %}或者以短信 (SMS) 形式发送的{% endif %}代码。 在启用 2FA 后，只要有人尝试登录您在 {% data variables.product.product_name %} 上的帐户，{% data variables.product.product_location %} 就会生成验证码。 用户能登录你的帐户的唯一方式是，他们知道你的密码，且有权访问你手机上的验证码。

{% data reusables.two_fa.after-2fa-add-security-key %}

{% ifversion fpt or ghec %} 除了安全密钥之外，你还可以在配置 TOTP 移动应用或短信后使用 {% data variables.product.prodname_mobile %} 进行双因素身份验证。 {% data variables.product.prodname_mobile %} 使用公钥加密来保护你的帐户，允许你使用用于登录 {% data variables.product.prodname_mobile %} 的任何移动设备作为第二重身份验证。
{% endif %}

您还可以配置其他恢复方法，以防无法访问双重身份验证凭据。 有关设置 2FA 的详细信息，请参阅“[配置双因素身份验证](/articles/configuring-two-factor-authentication)”和“[配置双因素身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)”。

为确保帐户安全，强烈建议启用 2FA，不仅在 {% data variables.product.product_name %} 上启用，在支持 2FA 的其他网站和应用上也要启用。 您可以启用 2FA 以访问 {% data variables.product.product_name %} 和 {% data variables.product.prodname_desktop %}。

有关详细信息，请参阅“[使用双因素身份验证访问 {% data variables.product.prodname_dotcom %}](/articles/accessing-github-using-two-factor-authentication)”。

## 双重身份验证恢复代码

{% data reusables.two_fa.about-recovery-codes %} 有关详细信息，请参阅“[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”。

{% ifversion fpt or ghec %}

{% warning %}

警告：{% data reusables.two_fa.support-may-not-help %} 有关详细信息，请参阅“[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”。

{% endwarning %}

{% endif %}

## 在你的组织中要求进行双因素身份验证

组织所有者可要求组织成员{% ifversion fpt or ghec %}、帐单管理员{% endif %}和外部协作者使用双因素身份验证保护其个人帐户。 有关详细信息，请参阅“[要求在组织中进行双因素身份验证](/articles/requiring-two-factor-authentication-in-your-organization)”。

{% data reusables.two_fa.auth_methods_2fa %}
