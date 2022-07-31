---
title: 身份提供程序不可用时访问组织
intro: '即使身份提供程序不可用，组织管理员也可绕过单点登录使用其恢复代码登录 {% data variables.product.product_name %}。'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
  - /github/setting-up-and-managing-organizations-and-teams/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 不可用的身份提供程序
---

组织管理员可以使用[下载或保存的恢复代码](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)绕过单点登录。 您可能已将这些保存到密码管理器，如 [LastPass](https://lastpass.com/) 或 [1Password](https://1password.com/)。

{% data reusables.saml.recovery-code-caveats %}

{% data reusables.saml.recovery-code-access %}

## 延伸阅读

- "[关于使用 SAML SSO 管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
