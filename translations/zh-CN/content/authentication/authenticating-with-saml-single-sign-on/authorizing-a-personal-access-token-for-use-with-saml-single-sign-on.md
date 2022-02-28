---
title: 授权用于 SAML 单点登录的个人访问令牌
intro: 要将个人访问令牌用于使用 SAML 单点登录 (SSO) 的组织，必须先授权该令牌。
redirect_from:
  - /articles/authorizing-a-personal-access-token-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: 使用 SAML 的 PAT
---

您可以授权现有的个人访问令牌，或者[创建新的个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)，然后再授权。

{% data reusables.saml.authorized-creds-info %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.personal_access_tokens %}
3. Next to the token you'd like to authorize, click **Configure SSO**. ![Screenshot of the dropdown menu to configure SSO for a personal access token](/assets/images/help/settings/sso-allowlist-button.png)
4. To the right of the organization you'd like to authorize the token for, click **Authorize**. ![令牌授权按钮](/assets/images/help/settings/token-authorize-button.png)

## 延伸阅读

- “[创建个人访问令牌](/github/authenticating-to-github/creating-a-personal-access-token)”。
- "[关于使用 SAML 单点登录进行身份验证](/articles/about-authentication-with-saml-single-sign-on)"
