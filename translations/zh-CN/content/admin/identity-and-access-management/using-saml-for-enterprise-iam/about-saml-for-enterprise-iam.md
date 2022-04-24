---
title: About SAML for enterprise IAM
shortTitle: About SAML for IAM
intro: 'You can use SAML single sign-on (SSO) {% ifversion ghec or ghae %}and System for Cross-domain Identity Management (SCIM) {% endif %}to centrally manage access {% ifversion ghec %}to organizations owned by your enterprise on {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}to {% data variables.product.product_location %}{% elsif ghae %}to {% data variables.product.product_location %}{% endif %}.'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Accounts
  - Access management
  - Authentication
  - Enterprise
  - Identity
redirect_from:
  - /admin/authentication/about-identity-and-access-management-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/about-identity-and-access-management-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/about-user-provisioning-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-identity-and-access-management-for-your-enterprise
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/about-identity-and-access-management-for-your-enterprise
---

## About SAML SSO for {% ifversion ghec or ghae %}your enterprise on {% endif %}{% ifversion ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} 更多信息请参阅“[为企业配置 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

If your enterprise members manage their own personal accounts on {% data variables.product.product_location %}, you can configure SAML authentication as an additional access restriction for your enterprise or organization. Alternatively, you can provision and manage the accounts of your enterprise members on {% data variables.product.product_location %} by using an enterprise account with {% data variables.product.prodname_emus %} enabled. For more information, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#authentication-methods-for-github-enterprise-cloud)."

{% data reusables.enterprise-accounts.about-recovery-codes %} 更多信息请参阅“[管理企业的恢复代码](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)”。

启用 SAML SSO 后，根据使用的 IDP，您可能能够启用额外的身份和访问管理功能。

如果使用 Azure AD 作为 IDP，您可以使用团队同步来管理每个组织中的团队成员身份。 {% data reusables.identity-and-permissions.about-team-sync %} 更多信息请参阅“[管理企业帐户中组织的团队同步](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”。

{% data reusables.saml.switching-from-org-to-enterprise %} 更多信息请参阅“[将 SAML 配置从组织切换到企业帐户](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)”。

## 关于 {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

{% note %}

**Note:** You cannot use SCIM at the enterprise level unless your enterprise is enabled for {% data variables.product.prodname_emus %}.

{% endnote %}

为 SAML 单点登录和用户预配配置 {% data variables.product.prodname_emus %} 涉及遵循与不使用 {% data variables.product.prodname_managed_users %} 的企业不同的流程。 如果您的企业使用 {% data variables.product.prodname_emus %}，请参阅“[为企业管理的用户配置 SAML 单点登录](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)”。

{% elsif ghes %}

SAML SSO 允许人们通过外部系统验证和访问 {% data variables.product.product_location %} 以进行身份管理。

SAML 是一种基于 XML 的身份验证和授权标准。 为 {% data variables.product.product_location %} 配置 SAML 时，用于身份验证的外部系统称为身份提供程序 (IdP)。 您的实例充当 SAML 服务提供商 (SP)。 For more information about the SAML standard, see [Security Assertion Markup Language](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language) on Wikipedia.

For more information about the configuration of SAML SSO on {% data variables.product.product_name %}, see "[Configuring SAML single sign-on for your enterprise](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)."

{% data reusables.saml.saml-ghes-account-revocation %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

在身份提供程序 (IdP) 上为 {% data variables.product.product_name %} 配置应用程序后，可以通过将应用程序分配到 IdP 上的用户和组来预配其访问 {% data variables.product.product_location %} 的权限。 有关用于 {% data variables.product.product_name %} 的 SAML SSO 的详细信息，请参阅“[为企业配置 SAML 单点登录](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”。

{% data reusables.scim.after-you-configure-saml %} 更多信息请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。

要了解如何合适特定 IdP 为 {% data variables.product.product_location %} 配置身份验证和用户预配，请参阅“[使用身份提供程序配置身份验证和预配](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)”。

{% endif %}

## 支持的 IdP

{% ifversion ghec %}

我们测试并正式支持以下 IdP。 对于 SAML SSO，我们向执行 SAML 2.0 标准的所有身份提供程序提供有限的支持。 更多信息请参阅 OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)。

| IdP                                          |                              SAML                              |                             团队同步                              |
| -------------------------------------------- |:--------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                         | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

如果您的 IdP 支持加密断言，您可以在 {% data variables.product.product_name %} 上配置加密断言，以提高身份验证过程中的安全性。

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

正式支持以下 IdP 与 {% data variables.product.prodname_ghe_managed %} 集成。

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## 将 {% data variables.product.prodname_ghe_managed %} 团队映射到 Okta 组

如果您使用 Okta 作为您的 IdP，则可以将 Okta 组映射到 {% data variables.product.product_name %} 上的团队。 更多信息请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。

{% endif %}

## 延伸阅读

- OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)
- IETF 网站上的[跨域身份管理系统：协议 (RFC 7644)](https://tools.ietf.org/html/rfc7644){% ifversion ghae %}
- “[限制到企业的网络流量](/admin/configuration/restricting-network-traffic-to-your-enterprise)”{% endif %}
