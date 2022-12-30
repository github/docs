---
title: 丢失 2FA 凭据时恢复帐户
intro: 如果无法访问双重身份验证凭据，您可以使用恢复代码或其他恢复选项重新获取对帐户的访问权限。
redirect_from:
  - /articles/recovering-your-account-if-you-lost-your-2fa-credentials
  - /articles/authenticating-with-an-account-recovery-token
  - /articles/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: Recover an account with 2FA
ms.openlocfilehash: 1a93d77d4da76a6efbc96ba5d80d0fe7e800c08a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145084595'
---
{% ifversion fpt or ghec %}

{% warning %}

**警告**： 

- {% data reusables.two_fa.support-may-not-help %}

{% endwarning %}

{% endif %}

## 使用双因素身份验证恢复代码

使用您的恢复代码之一自动重新进入您的帐户。 您可能已将恢复代码保存到密码管理器或计算机的下载文件夹中。 恢复代码的默认文件名为 `github-recovery-codes.txt`。 有关恢复代码的详细信息，请参阅“[配置双因素身份验证的恢复方法](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)”。

1. 输入您的用户名和密码以提示身份验证。

    {% warning %}

    警告：{% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}

{% ifversion fpt or ghec %}
1. 在“有问题?”下，单击“使用恢复代码或请求重置”。

   ![使用恢复代码的链接的屏幕截图](/assets/images/help/2fa/2fa-recovery-code-link.png) {%- else %}
1. 在 2FA 页面上的“没有你的电话?”下，单击“输入双因素恢复代码”。

   ![使用恢复代码的链接的屏幕截图](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. 输入恢复代码之一，然后单击“验证”。

   ![输入恢复代码的字段和验证按钮](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## 使用后备号码进行身份验证

如果无法访问主要 TOTP 应用程序或电话号码，则可以提供发送到后备号码的双因素身份验证码，以自动重新获得对帐户的访问权限。
{% endif %}

## 使用安全密钥进行身份验证

如果您使用安全密钥配置双重身份验证，则可以使用安全密钥作为辅助身份验证方法来自动重新获得对帐户的访问权限。 有关详细信息，请参阅“[配置双因素身份验证](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”。

{% ifversion fpt or ghec %}
## 使用经过验证的设备、SSH 令牌或个人访问令牌进行身份验证

如果您知道 {% data variables.product.product_location %} 的密码但无法访问双重身份验证凭据，或没有双重身份验证恢复代码，则可以将一次性密码发送到经验证的电子邮件地址，以开始验证过程，重新获得对帐户的访问权限。

{% note %}

注意：出于安全原因，使用一次性密码验证进行身份验证来重新获得帐户访问权限可能需要最长三个工作日。 在此期间，{% data variables.product.company_short %} 不会审核提交的其他请求。

{% endnote %}

在这 3-5 天的等待期内，您随时可以使用双重身份验证凭据或双重身份验证恢复代码重新获得对帐户的访问权限。

1. 输入您的用户名和密码以提示身份验证。

    {% warning %}

    警告：{% data reusables.accounts.you-must-know-your-password %}
    
    {% endwarning %}
1. 在“有问题?”下，单击“使用恢复代码或请求重置”。

   ![没有 2fa 设备或恢复码时的链接的屏幕截图](/assets/images/help/2fa/no-access-link.png)
1. 在“已锁定?”的右侧，单击“尝试恢复你的帐户”。

   ![用于尝试恢复帐户的链接的屏幕截图](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. 单击“我理解，开始”请求重置身份验证设置。

    ![用于开始重置身份验证设置的按钮的屏幕截图](/assets/images/help/2fa/reset-auth-settings.png)
1. 单击“发送一次性密码”，向与你的帐户关联的所有合格地址发送一次性密码。 只有经过验证的电子邮件才有资格进行帐户恢复。 如果您已将密码重置限制为主地址和/或备用地址，则这些地址是唯一有资格恢复帐户的地址。

   ![用于发送一次性密码的按钮的屏幕截图](/assets/images/help/2fa/send-one-time-password.png)
1. 在“One-time password（一次性密码）”下，键入恢复电子邮件 {% data variables.product.prodname_dotcom %} 发送的临时密码。

   ![用于键入一次性密码的字段的屏幕截图](/assets/images/help/2fa/one-time-password-field.png)
1. 单击“验证电子邮件地址”。

   ![用于验证电子邮件地址的按钮的屏幕截图](/assets/images/help/2fa/verify-email-address.png)
1. 选择替代验证因素。
    - 如果之前已经使用当前设备登录此帐户，并且想使用该设备进行验证，请单击“使用此设备进行验证”。
    - 如果之前已在此帐户上设置 SSH 密钥，并且想使用此 SSH 密钥进行验证，请单击“SSH 密钥”。
    - 如果之前已经设置个人访问令牌，并且想使用个人访问令牌进行验证，请单击“个人访问令牌”。

   ![用于替代验证的按钮的屏幕截图](/assets/images/help/2fa/alt-verifications.png)
1. {% data variables.contact.github_support %} 的成员将在三个工作日内审查您的请求并给您发送电子邮件。 如果您的请求获得批准，您将收到一个完成帐户恢复过程的链接。 如果您的请求被拒绝，电子邮件将说明就任何其他问题联系支持的方式。

{% endif %}
