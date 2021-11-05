---
title: 下载组织的 SAML 单点登录恢复代码
intro: '组织管理员应下载组织的 SAML 单点登录恢复代码，以确保即使组织的身份提供程序不可用，也可以访问 {% data variables.product.product_name %}。'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  free-pro-team: '*'
topics:
  - 组织
  - 团队
---
恢复代码不应共享或分发。 我们建议使用一个密码管理器保存它们，例如 [LastPass](https://lastpass.com/)、 [1Password](https://1password.com/) 或 [Keeper](https://keepersecurity.com/)。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. 在“SAML single sign-on”（SAML 单点登录）下，在有关恢复代码的注释中，单击 **Save your recovery codes（保存恢复代码）**。 ![查看和保存恢复代码的链接](/assets/images/help/saml/saml_recovery_codes.png)
6. 通过单击 **Download（下载）**、**Print（打印）** 或 **Copy（复制）**保存恢复代码。 ![下载、打印或复制恢复代码的按钮](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **注：** 如果您的 IdP 不可用，恢复代码将帮助您返回 {% data variables.product.product_name %}。 如果生成新的恢复代码，“单点登录恢复代码”页面上显示的恢复代码会自动更新。

  {% endnote %}

7. 使用恢复代码重新获得 {% data variables.product.product_name %} 的访问权限后，无法重复使用该恢复代码。 对 {% data variables.product.product_name %} 的访问权限将仅在 24 小时内可用，之后系统会要求您使用单点登录进行登录。

### 延伸阅读

- "[关于使用 SAML 单点登录管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
- “[在身份提供程序不可用的情况下访问组织](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)”
