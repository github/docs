---
title: 授权用于 SAML 单点登录的 SSH 密钥
intro: '要将 SSH 密钥用于使用 SAML 单点登录 (SSO) 的组织，必须先授权该密钥。'
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - sso
---

您可以授权现有 SSH 密钥，或者创建新 SSH 密钥后再授权。 有关创建新 SSH 密钥的更多信息，请参阅“[生成新的 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

{% note %}

**注：**如果您的 SSH 密钥授权被组织撤销，您便博学多才再授权该密钥。 此时您需要创建新 SSH 密钥并授权。 有关创建新 SSH 密钥的更多信息，请参阅“[生成新的 SSH 密钥并添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”。

{% endnote %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. 在要授权的 SSH 密钥旁边，单击 **Enable SSO（启用 SSO）**或 **Disable SSO（禁用 SSO）**。 ![SSO 令牌授权按钮](/assets/images/help/settings/ssh-sso-button.png)
4. 找到要为其授权访 SSH 密钥的组织。
5. 单击 **Authorize（授权）**。 ![令牌授权按钮](/assets/images/help/settings/ssh-sso-authorize.png)

### 延伸阅读

- "[检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)"
- "[关于使用 SAML 单点登录进行身份验证](/articles/about-authentication-with-saml-single-sign-on)"
