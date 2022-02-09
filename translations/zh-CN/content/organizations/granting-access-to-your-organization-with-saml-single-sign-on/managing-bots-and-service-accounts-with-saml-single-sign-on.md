---
title: 使用 SAML 单点登录管理自动程序和服务帐户
intro: 启用了 SAML 单点登录的组织可保留对自动程序和服务帐户的访问权限。
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 管理自动程序和服务帐户
---

要保留对自动程序和服务帐户的访问权限，组织可以对组织[启用](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)但**不**[实施](/articles/enforcing-saml-single-sign-on-for-your-organization) SAML 单点登录。 如果需要对组织实施 SAML 单点登录，您可以通过身份提供程序 (IdP) 为自动程序或服务帐户创建外部身份。

{% warning %}

**注：**如果对组织实施 SAML 单点登录但**未**通过 IdP 为自动程序和服务帐户设置外部身份，它们将会从组织中删除。

{% endwarning %}

## 延伸阅读

- "[关于使用 SAML 单点登录管理身份和访问](/articles/about-identity-and-access-management-with-saml-single-sign-on)"
