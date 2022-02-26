---
title: 关于企业的身份和访问管理
shortTitle: 关于身份和访问管理
intro: '您可以使用 SAML 单点登录 (SSO) 和跨域身份管理系统 (SCIM) 集中管理 {% ifversion ghec %}对企业在 {% data variables.product.prodname_dotcom_the_website %} 上拥有的组织{% endif %}{% ifversion ghae %}对 {% data variables.product.product_location %}{% endif %} 的访问。'
versions:
  ghec: '*'
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
---

## 关于企业的身份和访问管理

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %} 更多信息请参阅“[为企业配置 SAML 单点登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

{% data reusables.enterprise-accounts.about-recovery-codes %} For more information, see "[Managing recovery codes for your enterprise](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)."

启用 SAML SSO 后，根据使用的 IDP，您可能能够启用额外的身份和访问管理功能。 {% data reusables.scim.enterprise-account-scim %}

如果使用 Azure AD 作为 IDP，您可以使用团队同步来管理每个组织中的团队成员身份。 {% data reusables.identity-and-permissions.about-team-sync %} 更多信息请参阅“[管理企业帐户中组织的团队同步](/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise)”。

{% data reusables.saml.switching-from-org-to-enterprise %} For more information, see "[Switching your SAML configuration from an organization to an enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)."

## 关于 {% data variables.product.prodname_emus %}

{% data reusables.enterprise-accounts.emu-short-summary %}

为 SAML 单点登录和用户预配配置 {% data variables.product.prodname_emus %} 涉及遵循与不使用 {% data variables.product.prodname_managed_users %} 的企业不同的流程。 如果您的企业使用 {% data variables.product.prodname_emus %}，请参阅“[为企业管理的用户配置 SAML 单点登录](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)”。

## 支持的 IdP

我们测试并正式支持以下 IdP。 对于 SAML SSO，我们向执行 SAML 2.0 标准的所有身份提供程序提供有限的支持。 更多信息请参阅 OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)。

| IdP                                          |                              SAML                              |                             团队同步                              |
| -------------------------------------------- |:--------------------------------------------------------------:|:-------------------------------------------------------------:|
| Active Directory Federation Services (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} |                                                               |
| Azure Active Directory (Azure AD)            | {% octicon "check-circle-fill" aria-label="The check icon" %}  | {% octicon "check-circle-fill" aria-label="The check icon" %}
| Okta                                         | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| OneLogin                                     | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| PingOne                                      | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |
| Shibboleth                                   | {% octicon "check-circle-fill" aria-label="The check icon" %}  |                                                               |

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

After you configure the application for {% data variables.product.product_name %} on your identity provider (IdP), you can provision access to {% data variables.product.product_location %} by assigning the application to users and groups on your IdP. 有关用于 {% data variables.product.product_name %} 的 SAML SSO 的详细信息，请参阅“[为企业配置 SAML 单点登录](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”。

{% data reusables.scim.after-you-configure-saml %} 更多信息请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)”。

要了解如何合适特定 IdP 为 {% data variables.product.product_location %} 配置身份验证和用户预配，请参阅“[使用身份提供程序配置身份验证和预配](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider)”。

## 支持的 IdP

The following IdPs are officially supported for integration with {% data variables.product.prodname_ghe_managed %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

## Mapping {% data variables.product.prodname_ghe_managed %} teams to Okta groups

If you use Okta as your IdP, you can map your Okta groups to teams on {% data variables.product.prodname_ghe_managed %}. For more information, see "[Mapping Okta groups to teams](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)."

{% endif %}

## 延伸阅读

- OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)
- IETF 网站上的[跨域身份管理系统：协议 (RFC 7644)](https://tools.ietf.org/html/rfc7644){% ifversion ghae %}
- “[限制到企业的网络流量](/admin/configuration/restricting-network-traffic-to-your-enterprise)”{% endif %}
