---
title: Sudo 模式
intro: '为了在你执行可能敏感的操作之前确认你帐户的访问权限，{% data variables.product.product_location %} 会提示进行身份验证。'
redirect_from:
  - /articles/sudo-mode
  - /github/authenticating-to-github/sudo-mode
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/sudo-mode
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
topics:
  - Identity
  - Access management
ms.openlocfilehash: 909552ff2252e14430050541da5f6bae582f66b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147540824'
---
## 关于 sudo 模式

为了在你对 {% data variables.product.product_location %} 执行可能敏感的操作时维护帐户的安全，即使你已登录，也必须进行身份验证。 例如，{% data variables.product.company_short %} 认为以下操作是敏感操作，因为每个操作都可能允许新用户或系统访问你的帐户。

- 修改关联的电子邮件地址
- 授权第三方应用程序
- 添加新的 SSH 密钥

当你经过身份验证来执行敏感操作后，会话暂时处于“sudo 模式”。 在 sudo 模式下，无需身份验证即可执行敏感操作。 {% data variables.product.product_name %} 将等待几小时，然后再次提示你进行身份验证。 在此期间，你执行的任何敏感操作都将重置计时器。

{% ifversion ghes %}

{% note %}

注意：如果 {% data variables.product.product_location %} 使用 CAS 或 SAML SSO 等外部身份验证方法，你不会收到进入 sudo 模式的提示。 更多信息请联系站点管理员。

{% endnote %}

{% endif %}

“sudo”是指 Unix 系统上的一个程序，该名称是“superuser do”的缩写 。 有关详细信息，请参阅维基百科上的 [sudo](https://wikipedia.org/wiki/Sudo)。

## 确认对 sudo 模式的访问权限

要确认对 sudo 模式的访问权限，{% ifversion totp-and-mobile-sudo-challenge %}可以{% else %}必须{% endif %}使用密码进行身份验证。{% ifversion totp-and-mobile-sudo-challenge %}或者可选择使用其他身份验证方法，例如{% ifversion fpt or ghec %}安全密钥、{% data variables.product.prodname_mobile %} 或 2FA 代码{% elsif ghes %}安全密钥或 2FA 代码{% endif %}。{% endif %}

{%- ifversion totp-and-mobile-sudo-challenge %}
- [使用安全密钥确认访问权限](#confirming-access-using-a-security-key) {%- ifversion fpt or ghec %}
- [使用 GitHub Mobile 确认访问权限](#confirming-access-using-github-mobile) {%- endif %}
- [使用 2FA 代码确认访问权限](#confirming-access-using-a-2fa-code)
- [使用密码确认访问权限](#confirming-access-using-your-password) {%- endif %}

{% ifversion totp-and-mobile-sudo-challenge %}

### 使用安全密钥确认访问权限

必须使用安全密钥为帐户配置双因素身份验证 (2FA)，才能使用安全密钥确认帐户是否拥有对 sudo 模式的访问权限。 有关详细信息，请参阅“[配置双因素身份验证](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”。

当系统提示对 sudo 模式进行身份验证时，请单击“使用安全密钥”，然后按照提示进行操作。

![sudo 模式的安全密钥选项的屏幕截图](/assets/images/help/settings/sudo_mode_prompt_security_key.png)

{% ifversion fpt or ghec %}

### 使用 {% data variables.product.prodname_mobile %} 确认访问权限

必须安装并登录 {% data variables.product.prodname_mobile %}，才能使用该应用确认帐户是否拥有对 sudo 模式的访问权限。 有关详细信息，请参阅“[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)”。

1. 当系统提示对 sudo 模式进行身份验证时，请单击“使用 GitHub Mobile”。

   ![sudo 模式的 {% data variables.product.prodname_mobile %} 选项的屏幕截图](/assets/images/help/settings/sudo_mode_prompt_github_mobile_prompt.png)
1. 打开 {% data variables.product.prodname_mobile %}。 {% data variables.product.prodname_mobile %} 将显示必须在 {% data variables.product.product_location %} 上输入才能批准请求的数字。

   ![{% data variables.product.prodname_mobile %} 中数字的屏幕截图，该数字用于在 {% data variables.product.product_name %} 上输入来审核 sudo 模式访问权限](/assets/images/help/settings/sudo_mode_prompt_github_mobile.png)
1. 在 {% data variables.product.product_name %} 上，键入 {% data variables.product.prodname_mobile %} 中显示的数字。

{% endif %}

### 使用 2FA 代码确认访问权限

必须使用 TOTP 移动应用{% ifversion fpt or ghec %}或短信{% endif %}配置 2FA，才能使用 2FA 代码确认帐户是否拥有对 sudo 模式的访问权限。 有关详细信息，请参阅“[配置双因素身份验证](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)”。

当系统提示对 sudo 模式进行身份验证时，请键入 TOTP 移动应用{% ifversion fpt or ghec %}或短信{% endif %}中的验证码，然后单击“验证”。

![sudo 模式的 2FA 代码提示的屏幕截图](/assets/images/help/settings/sudo_mode_prompt_2fa_code.png)

### 使用密码确认访问权限

{% endif %}

当系统提示对 sudo 模式进行身份验证时，请键入密码，然后单击“确认”。

![sudo 模式的密码提示的屏幕截图](/assets/images/help/settings/sudo_mode_prompt_password.png)
