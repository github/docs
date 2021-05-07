---
title: 授权用于 SAML 单点登录的个人访问令牌
intro: 要将个人访问令牌用于使用 SAML 单点登录 (SSO) 的组织，必须先授权该令牌。
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization/
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  free-pro-team: '*'
topics:
  - SSO
---

您可以授权现有的个人访问令牌，或者[创建新的个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)，然后再授权。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
3. 在要授权的令牌旁边，单击 **Enable SSO（启用 SSO）**或 **Disable SSO（禁用 SSO）**。 ![SSO 令牌授权按钮](/assets/images/help/settings/sso-allowlist-button.png)
4. 找到要为其授权访问令牌的组织。
4. 单击 **Authorize（授权）**。 ![令牌授权按钮](/assets/images/help/settings/token-authorize-button.png)

### 延伸阅读

- “[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
- "[关于使用 SAML 单点登录进行身份验证](/articles/about-authentication-with-saml-single-sign-on)"
