---
title: 关于企业帐户的身份和访问管理
intro: 您可以使用身份提供程序 (IdP) 集中管理对企业资源、组织成员身份和团队成员身份的访问。
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  fpt: '*'
topics:
  - Enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
shortTitle: 企业的 IAM
---

## 关于企业帐户的身份和访问管理

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} For more information, see "[Enforcing SAML single sign-on for organizations in your enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/enforcing-saml-single-sign-on-for-organizations-in-your-enterprise-account)."

启用 SAML SSO 后，根据使用的 IDP，您可能能够启用额外的身份和访问管理功能。 {% data reusables.scim.enterprise-account-scim %}

如果使用 Azure AD 作为 IDP，您可以使用团队同步来管理每个组织中的团队成员身份。 {% data reusables.identity-and-permissions.about-team-sync %} 更多信息请参阅“[管理企业帐户中组织的团队同步](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)”。

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

## 关于 {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

Configuring {% data variables.product.prodname_emus %} for SAML single-sign on and user provisioning involves following a different process than you would for an enterprise that isn't using {% data variables.product.prodname_managed_users %}. If your enterprise uses {% data variables.product.prodname_emus %}, see "[Configuring SAML single sign-on for Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)."

## 支持的 IdP

我们测试并正式支持以下 IdP。 对于 SAML SSO，我们向执行 SAML 2.0 标准的所有身份提供程序提供有限的支持。 更多信息请参阅 OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)。

| IdP                                          |                              SAML                              |                             团队同步                              |
| -------------------------------------------- |:--------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %}
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
