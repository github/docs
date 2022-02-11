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
shortTitle: 使用 2FA 找回帐户
---

{% ifversion fpt or ghec %}

{% warning %}

**警告**：

- {% data reusables.two_fa.support-may-not-help %}
- {% data reusables.accounts.you-must-know-your-password %}

{% endwarning %}

{% endif %}

## 使用双因素身份验证恢复代码

使用您的恢复代码之一自动重新进入您的帐户。 您可能已将恢复代码保存到密码管理器或计算机的下载文件夹中。 恢复代码的默认文件名为 `github-recovery-codes.txt`。 有关恢复代码的更多信息，请参阅“[配置双因素身份验证恢复方法](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods#downloading-your-two-factor-authentication-recovery-codes)”。

{% data reusables.two_fa.username-password %}

{% ifversion fpt or ghec %}
1. Under "Having problems?", click **Use a recovery code or request a reset**.

   ![Screenshot of link to use a recovery code](/assets/images/help/2fa/2fa-recovery-code-link.png)
{%- else %}
1. 在 2FA 页面上的“Don't have your phone?（没有您的电话？）”下，单击 **Enter a two-factor recovery code（输入双因素恢复代码）**。

   ![Screenshot of link to use a recovery code](/assets/images/help/2fa/2fa_recovery_dialog_box.png){% endif %}
1. 输入恢复代码之一，然后单击 **Verify（验证）**。

   ![输入恢复代码的字段和验证按钮](/assets/images/help/2fa/2fa-type-verify-recovery-code.png)

{% ifversion fpt or ghec %}
## 使用后备号码进行身份验证

如果无法访问主要 TOTP 应用程序或电话号码，则可以提供发送到后备号码的双因素身份验证码，以自动重新获得对帐户的访问权限。
{% endif %}

## 使用安全密钥进行身份验证

如果您使用安全密钥配置双重身份验证，则可以使用安全密钥作为辅助身份验证方法来自动重新获得对帐户的访问权限。 更多信息请参阅“[配置双重身份验证](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)”。

{% ifversion fpt or ghec %}
## 使用经过验证的设备、SSH 令牌或个人访问令牌进行身份验证

If you know your password for {% data variables.product.product_location %} but don't have the two-factor authentication credentials or your two-factor authentication recovery codes, you can have a one-time password sent to your verified email address to begin the verification process and regain access to your account.

{% note %}

**Note**: For security reasons, regaining access to your account by authenticating with a one-time password can take up to three business days. {% data variables.product.company_short %} will not review additional requests submitted during this time.

{% endnote %}

在这 3-5 天的等待期内，您随时可以使用双重身份验证凭据或双重身份验证恢复代码重新获得对帐户的访问权限。

1. 输入您的用户名和密码以提示身份验证。

    {% warning %}

    **Warning**: {% data reusables.accounts.you-must-know-your-password %}

    {% endwarning %}
1. Under "Having problems?", click **Use a recovery code or request a reset**.

   ![Screenshot of link if you don't have your 2fa device or recovery codes](/assets/images/help/2fa/no-access-link.png)
1. To the right of "Locked out?", click **Try recovering your account**.

   ![Screenshot of link to try recovering your account](/assets/images/help/2fa/try-recovering-your-account-link.png)
1. 单击 **I understand, get started（我理解，开始）**请求重置身份验证设置。

    ![Screenshot of button to start reset of authentication settings](/assets/images/help/2fa/reset-auth-settings.png)
1. Click **Send one-time password** to send a one-time password to all eligible addresses associated with your account. Only verified emails are eligible for account recovery. If you've restricted password resets to your primary and/or backup addresses, these addresses are the only addresses eligible for account recovery.

   ![Screenshot of button to send one-time password](/assets/images/help/2fa/send-one-time-password.png)
1. Under "One-time password", type the temporary password from the recovery email {% data variables.product.prodname_dotcom %} sent.

   ![Screenshot of field to type one-time password](/assets/images/help/2fa/one-time-password-field.png)
1. 单击 **Verify email address（验证电子邮件地址）**。

   ![Screenshot of button to verify email address](/assets/images/help/2fa/verify-email-address.png)
1. 选择替代验证因素。
    - 如果您之前已经使用当前设备登录此帐户，并且想使用该设备进行验证，请单击 **Verify with this device（使用此设备进行验证）**。
    - 如果您之前已在此帐户上设置 SSH 密钥，并且想使用此 SSH 密钥进行验证，请单击 **SSH key（SSH 密钥）**。
    - 如果您之前已经设置个人访问令牌，并且想使用个人访问令牌进行验证，请单击 **Personal access token（个人访问令牌）**。

   ![Screenshot of buttons for alternative verification](/assets/images/help/2fa/alt-verifications.png)
1. A member of {% data variables.contact.github_support %} will review your request and email you within three business days. 如果您的请求获得批准，您将收到一个完成帐户恢复过程的链接。 如果您的请求被拒绝，电子邮件将说明就任何其他问题联系支持的方式。

{% endif %}
