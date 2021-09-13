---
title: 关于企业帐户的身份和访问管理
intro: 您可以使用身份提供程序 (IdP) 集中管理对企业资源、组织成员身份和团队成员身份的访问。
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
---

### 关于企业帐户的身份和访问管理

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} 更多信息请参阅“[为企业帐户中的组织启用 SAML 单点登录](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)”。

启用 SAML SSO 后，根据使用的 IDP，您可能能够启用额外的身份和访问管理功能。

{% data reusables.saml.about-user-provisioning-enterprise-account %}更多信息请参阅“[关于企业帐户中组织的用户配置](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account)”。

如果使用 Azure AD 作为 IDP，您可以使用团队同步来管理每个组织中的团队成员身份。 {% data reusables.identity-and-permissions.about-team-sync %} 更多信息请参阅“[管理企业帐户中组织的团队同步](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)”。

### 支持的 IdP

我们测试并正式支持以下 IdP。 对于 SAML SSO，我们向执行 SAML 2.0 标准的所有身份提供程序提供有限的支持。 更多信息请参阅 OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)。

| IdP                                          |                              SAML                              |                                                                                                 用户预配                                                                                                  |                             团队同步                              |
| -------------------------------------------- |:--------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                                                                                                                                                                       |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                       | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                         | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label= "The check icon" %} [<sup>测试版</sup>](/github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account) |                                                               |
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                       |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                       |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                                                                                                                                                                       |                                                               |
