---
title: 身份提供程序不可用时访问组织
intro: '即使身份提供程序不可用，组织管理员也可绕过单点登录使用其恢复代码登录 {% data variables.product.product_name %}。'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
  - /github/setting-up-and-managing-organizations-and-teams/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  free-pro-team: '*'
topics:
  - 组织
  - 团队
---
组织管理员可以使用[下载或保存的恢复代码](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)绕过单点登录。 您可能已将这些保存到密码管理器，如 [LastPass](https://lastpass.com/)、[1Password](https://1password.com/) 或 [Keeper](https://keepersecurity.com/)。

{% note %}

**注：**恢复代码只能使用一次，并且必须按连续的顺序使用。 恢复代码授予 24 小时访问权限。

{% endnote %}

1. 在单点登录对话框底部，单击 **Use a recovery code（使用恢复代码）**绕过单点登录。 ![用于输入恢复代码的链接](/assets/images/help/saml/saml_use_recovery_code.png)
2. 在 "Recovery Code"（恢复代码）字段中，输入您的恢复代码。 ![无法输入恢复代码](/assets/images/help/saml/saml_recovery_code_entry.png)
3. 单击 **Verify（验证）**。 ![用于确认恢复代码的按钮](/assets/images/help/saml/saml_verify_recovery_codes.png)

请务必注意，恢复代码在使用后便不再有效。 恢复代码不能重复使用。

### 延伸阅读

- "[关于使用 SAML SSO 管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
