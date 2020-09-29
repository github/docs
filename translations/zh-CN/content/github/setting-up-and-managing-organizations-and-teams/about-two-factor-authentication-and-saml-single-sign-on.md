---
title: 关于双重身份验证和 SAML 单点登录
intro: 组织管理员可启用 SAML 单点登录及双重身份验证，为其组织成员增加额外的身份验证措施。
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
versions:
  free-pro-team: '*'
---

双重身份验证 (2FA) 为组织成员提供基本验证。 通过启用 2FA，组织管理员可降低成员的 {% data variables.product.product_name %} 帐户被盗的可能性。 有关 2FA 的更多信息，请参阅“[关于双重身份验证](/articles/about-two-factor-authentication)”。

为增加额外的身份验证措施，组织管理员也可[启用 SAML 单点登录 (SSO)](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)，这样组织成员必须使用单点登录来访问组织。 有关 SAML SSO 的更多信息，请参阅“[关于使用 SAML 单点登录管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)”。

如果同时启用了 2FA 和 SAML SSO，组织成员必须执行以下操作：
- 使用 2FA 登录其 {% data variables.product.product_name %} 帐户
- 使用单点登录访问组织
- 使用授权用于 API 或 Git 访问的令牌，并使用单点登录授权令牌

### 延伸阅读

- "[对组织实施 SAML 单点登录](/articles/enforcing-saml-single-sign-on-for-your-organization)"
