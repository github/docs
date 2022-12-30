---
title: 关于企业 IAM 的 SAML
shortTitle: About SAML for IAM
intro: '可以使用 SAML 单一登录 (SSO) {% ifversion ghae %}和跨域身份管理系统 (SCIM) {% endif %}集中管理{% ifversion ghec %}企业拥有的组织在 {% data variables.product.prodname_dotcom_the_website %} 上{% elsif ghes %}对 {% data variables.location.product_location %}{% elsif ghae %}对 {% data variables.location.product_location %}{% endif %} 的访问权限。'
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
ms.openlocfilehash: ea9db1269f389bdc126c8693ffeeb4b11dc42f99
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192687'
---
## 关于{% ifversion ghec or ghae %}你的企业在{% endif %}{% ifversion ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 上的 SAML SSO

{% ifversion ghec %}

如果企业成员在 {% data variables.location.product_location %} 上管理他们自己的用户帐户，你可将 SAML 身份验证配置为企业或组织的附加访问限制。 {% data reusables.saml.dotcom-saml-explanation %} 

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.about-saml-enterprise-accounts %} 有关详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)”。

或者，可使用 {% data variables.product.prodname_emus %} 预配和管理企业成员的帐户。 若要帮助确定是 SAML SSO 还是 {% data variables.product.prodname_emus %} 更适合你的企业，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)”。

{% data reusables.enterprise-accounts.about-recovery-codes %} 有关详细信息，请参阅“[管理企业的恢复代码](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)”。

启用 SAML SSO 后，根据使用的 IDP，您可能能够启用额外的身份和访问管理功能。 

如果使用 Azure AD 作为 IDP，您可以使用团队同步来管理每个组织中的团队成员身份。 {% data reusables.identity-and-permissions.about-team-sync %}

{% note %}

注意：无法为企业帐户配置 SCIM，除非创建的帐户要使用 {% data variables.product.prodname_emus %}。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)”。

{% endnote %}

{% data reusables.saml.switching-from-org-to-enterprise %} 有关详细信息，请参阅[将 SAML 配置从组织切换为企业帐户](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)。

{% elsif ghes %}

SAML SSO 允许人员通过外部系统进行身份验证和访问 {% data variables.location.product_location %}，以便进行标识管理。

SAML 是一种基于 XML 的身份验证和授权标准。 为 {% data variables.location.product_location %} 配置 SAML 时，用于身份验证的外部系统称为标识提供者 (IdP)。 实例充当 SAML 服务提供程序 (SP)。 有关 SAML 标准的详细信息，请参阅 Wikipedia 上的[安全断言标记语言](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language)。

{% elsif ghae %}

{% data reusables.saml.ae-uses-saml-sso %} {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

在标识提供者 (IdP) 上为 {% data variables.product.product_name %} 配置应用程序后，可以通过将用户和组分配到 IdP 上的应用程序来预配对 {% data variables.location.product_location %} 的访问权限。 有关用于 {% data variables.product.product_name %} 的 SAML SSO 的详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)”。

{% endif %}

{% ifversion ghes < 3.6 %}

分配或取消分配应用程序时，IdP 不会自动与 {% data variables.product.product_name %} 通信。 {% data variables.product.product_name %} 会在有人第一次导航到 {% data variables.product.product_name %} 并通过 IdP 进行身份验证来登录时使用 SAML 实时 (JIT) 预配创建用户帐户。 在授予对 {% data variables.product.product_name %} 的访问权限时，可能需要手动通知用户。

{% endif %}

{% ifversion ghes %}

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

{% data reusables.enterprise_user_management.built-in-authentication %}

{% endif %}

有关在 {% data variables.product.product_name %} 上配置 SAML SSO 的详细信息，请参阅“[为企业配置 SAML 单一登录](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise)”。{% ifversion ghec or ghae or scim-for-ghes %} 若要了解如何使用特定 IdP 为 {% data variables.location.product_location %} 配置身份验证和{% ifversion ghae or ghes %}用户{% endif %}预配，请参阅“[将 SAML 用于企业 IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)”中的关于各个 IdP 的文章。{% endif %}

{% ifversion ghae or scim-for-ghes %}

## 关于创建用户帐户

{% data reusables.scim.after-you-configure-saml %} 有关详细信息，请参阅[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise)。

{% data reusables.saml.saml-ghes-account-revocation %}

{% endif %}

## 支持的 IdP

{% ifversion ghec %}

我们测试并正式支持以下 IdP。 对于 SAML SSO，我们向执行 SAML 2.0 标准的所有身份提供程序提供有限的支持。 有关详细信息，请参阅 OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security)。

IdP | SAML | 团队同步 | 
--- | :--: | :-------: |
Active Directory 联合身份验证服务 (AD FS) | {% octicon "check-circle-fill" aria-label= "The check icon" %} | |
Azure Active Directory (Azure AD)租户 | {% octicon "check-circle-fill" aria-label="The check icon" %} | {% octicon "check-circle-fill" aria-label="The check icon" %} |
Okta | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
OneLogin | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
PingOne | {% octicon "check-circle-fill" aria-label="The check icon" %} | |
Shibboleth | {% octicon "check-circle-fill" aria-label="The check icon" %} | |

{% elsif ghes %}

{% data reusables.saml.saml-supported-idps %}

{% ifversion ghes > 3.3 %}

如果 IdP 支持加密断言，则可以在 {% data variables.product.product_name %} 上配置加密断言，以提高身份验证过程中的安全性。

{% endif %}

{% data reusables.saml.saml-single-logout-not-supported %}

{% elsif ghae %}

官方支持以下 IdP 与 {% data variables.product.prodname_ghe_managed %} 的集成。

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% endif %}

{% ifversion ghae %}

## 将 {% data variables.product.prodname_ghe_managed %} 团队映射到 Okta 组

如果使用 Okta 作为 IdP，则可以将 Okta 组映射到 {% data variables.product.product_name %} 上的团队。 有关详细信息，请参阅“[将 Okta 组映射到团队](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”。

{% endif %}

## 延伸阅读

- OASIS 网站上的 [SAML Wiki](https://wiki.oasis-open.org/security) {%- ifversion ghae or scim-for-ghes %}
- IETF 网站上的[跨域身份管理系统：协议 (RFC 7644)](https://tools.ietf.org/html/rfc7644){%- endif %} {%- ifversion ghae %}
- [使用 IP 允许列表限制到企业的网络流量](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list){%- endif %}
