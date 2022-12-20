---
title: 使用双重身份验证访问 GitHub
intro: '启用 2FA 后，在登录到 {% data variables.product.product_name %} 时需要提供 2FA 验证码以及密码。'
redirect_from:
  - /articles/providing-your-2fa-security-code
  - /articles/providing-your-2fa-authentication-code
  - /articles/authenticating-to-github-using-fido-u2f-via-nfc
  - /articles/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/accessing-github-using-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/accessing-github-using-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Access GitHub with 2FA
ms.openlocfilehash: 244cc4b45165cbc327729fd6d1c5ac519a6a6d7a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084610'
---
启用双重身份验证后，您在通过浏览器访问 {% data variables.product.product_name %} 时需要提供验证码。 如果使用其他方法访问 {% data variables.product.product_name %}，如 API 或命令行，则需要使用其他形式的身份验证。 有关详细信息，请参阅“[关于对 {% data variables.product.prodname_dotcom %} 的身份验证](/github/authenticating-to-github/about-authentication-to-github)”。

## 登录网站时提供 2FA 码

在使用密码登录 {% data variables.product.product_name %} 后，系统会提示你提供{% ifversion fpt or ghec %}短信或{% endif %} TOTP 应用中的验证码。

{% data variables.product.product_name %} 仅在您注销后、使用新设备或会话过期时才会要求您再次提供 2FA 验证码。

### 通过 TOTP 应用程序生成代码

如果选择使用 TOTP 应用程序在智能手机上设置双重身份验证，可随时为 {% data variables.product.product_name %} 生成验证码。 大多数情况下，只有启动应用程序才会生成新代码。 具体说明请参阅应用程序的文档。

如果在配置双重身份验证后删除移动应用程序，则需要提供恢复代码才可访问您的帐户。 有关详细信息，请参阅“[丢失双因素身份验证凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”

{% ifversion fpt or ghec %}

### 接收短信

如果设置通过短信进行双重身份验证，{% data variables.product.product_name %} 将通过短信向您发送验证码。

### 向 {% data variables.product.prodname_mobile %} 验证

如果您已安装并登录到 {% data variables.product.prodname_mobile %}，则可以选择向 {% data variables.product.prodname_mobile %} 验证以进行双重身份验证。

1. 使用您的用户名和密码通过浏览器登录 {% data variables.product.product_name %}。
2. 如果您已向帐号添加了安全密钥，系统将首先提示您插入并使用安全密钥。 若要跳过使用安全密钥，请单击“使用 {% data variables.product.prodname_mobile %} 进行身份验证”。
  ![突出显示“使用 {% data variables.product.prodname_mobile %} 进行身份验证”的 {% data variables.product.product_name %} 上的双因素身份验证质询](/assets/images/help/2fa/2fa-select-mobile.png)
3. {% data variables.product.product_name %} 将向您发送推送通知以验证您的登录尝试。 打开推送通知或打开 {% data variables.product.prodname_mobile %} 应用程序将显示提示，要求你批准或拒绝此登录尝试。
  {% note %}

  注意：此提示可能要求你输入正在登录的浏览器中显示的两位数字。

  {% endnote %}

  ![需要两位数输入的 {% data variables.product.prodname_mobile %} 的双重身份验证质询](/assets/images/help/2fa/2fa-mobile-number-challenge.png)

    - 使用 {% data variables.product.prodname_mobile %} 批准登录尝试后，您的浏览器将自动完成登录尝试。
    - 拒绝登录尝试将阻止身份验证完成。 有关详细信息，请参阅“[确保帐户和数据安全](/authentication/keeping-your-account-and-data-secure)”。

{% endif %}

## 通过命令行使用双重身份验证

启用 2FA 后，将不再使用密码在命令行上访问 {% data variables.product.product_name %}。 请改用 Git 凭据管理器、个人访问令牌或 SSH 密钥。

### 使用 Git 凭据管理器在命令行上进行身份验证

[Git 凭据管理器](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md)是一个安全的 Git 凭据帮助程序，可在 Windows、macOS 和 Linux 上运行。 有关 Git 凭据帮助程序的详细信息，请参阅 Pro Git 手册中的[避免重复](https://git-scm.com/docs/gitcredentials#_avoiding_repetition)。

安装说明因计算机操作系统而异。 有关详细信息，请参阅 GitCredentialManager/git-credential-manager 存储库中的[下载和安装](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install)。

### 在命令行上使用 HTTPS 验证

启用 2FA 后，必须创建个人访问令牌以用作在命令行上使用 HTTPS URL 向 {% data variables.product.product_name %} 验证时的密码。

当命令行上提供用户名和密码时，使用您的 {% data variables.product.product_name %} 用户名和个人访问令牌。 命令行提示不会指出在要求密码时您应输入个人访问令牌。

有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

### 在命令行上使用 SSH 验证

启用 2FA 不会更改您在命令行上使用 SSH URL 向 {% data variables.product.product_name %} 验证的方式。 有关设置和使用 SSH 密钥的详细信息，请参阅“[使用 SSH 连接到 {% data variables.product.prodname_dotcom %}](/articles/connecting-to-github-with-ssh/)”。

## 使用双重身份验证通过 Subversion 访问仓库

通过 Subversion 访问仓库时，必须提供个人人访问令牌，而不是输入密码。 有关详细信息，请参阅“[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。

## 故障排除

如果失去对双重身份验证凭据的访问，您可以使用恢复代码或其他恢复方式（如已设置）重新获取对帐户的访问。 有关详细信息，请参阅“[丢失 2FA 凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)”。

如果身份验证失败多次，您可能要与移动提供商同步手机的时钟。 通常，这需要在手机的时钟上选中 "Set automatically"（自动设置）选项，而不是提供自己的时区。

## 延伸阅读

- [关于双因素身份验证](/articles/about-two-factor-authentication)
- [配置双因素身份验证](/articles/configuring-two-factor-authentication)
- [配置双因素身份验证恢复方法](/articles/configuring-two-factor-authentication-recovery-methods)
- [丢失双因素身份验证凭据时恢复帐户](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)
