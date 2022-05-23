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
shortTitle: 关于 2FA
---

对于 {% data variables.product.product_name %}，第二种身份验证形式是应用程序在移动设备上生成的代码{% ifversion fpt or ghec %}或发送的短信 (SMS){% endif %}。 在启用 2FA 后，只要有人尝试登录您在 {% data variables.product.product_name %} 上的帐户，{% data variables.product.product_location %} 就会生成验证码。 别人登录您的帐户的唯一方式是知道您的密码，并且获取您的手机上的验证码。

{% data reusables.two_fa.after-2fa-add-security-key %}

{% ifversion fpt or ghec %}
除了安全密钥之外，您还可以在配置 TOTP 移动应用程序或短信后使用 {% data variables.product.prodname_mobile %} 进行双重身份验证。 {% data variables.product.prodname_mobile %} 使用公钥加密来保护您的帐户，允许您使用用于登录 {% data variables.product.prodname_mobile %} 的任何移动设备作为第二重身份验证。
{% endif %}

您还可以配置其他恢复方法，以防无法访问双重身份验证凭据。 有关设置 2FA 的更多信息，请参阅“[配置双重身份验证](/articles/configuring-two-factor-authentication)”和“[配置双重身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)”。

为确保帐户安全，**强烈**建议启用 2FA，不仅在 {% data variables.product.product_name %} 上启用，在支持 2FA 的其他网站和应用程序上也要启用。 您可以启用 2FA 以访问 {% data variables.product.product_name %} 和 {% data variables.product.prodname_desktop %}。

更多信息请参阅“[使用双重身份验证访问 {% data variables.product.prodname_dotcom %}](/articles/accessing-github-using-two-factor-authentication)”。

## 双重身份验证恢复代码

{% data reusables.two_fa.about-recovery-codes %} 更多信息请参阅“[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”。

{% ifversion fpt or ghec %}

{% warning %}

**警告**：{% data reusables.two_fa.support-may-not-help %} 更多信息请参阅“[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”。

{% endwarning %}

{% endif %}

## 您的组织中需要双重身份验证

组织所有者可要求组织成员{% ifversion fpt or ghec %}、帐单管理员{% endif %}和外部协作者使用双重身份验证保护其个人帐户的安全。 更多信息请参阅“[您的组织中需要双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)”。

{% data reusables.two_fa.auth_methods_2fa %}
