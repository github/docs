---
title: 关于组织的 SCIM
intro: '通过“跨域身份管理系统”(System for Cross-domain Identity Management, SCIM)，管理员可以在系统之间自动交换用户身份信息。'
redirect_from:
  - /articles/about-scim
  - /github/setting-up-and-managing-organizations-and-teams/about-scim
  - /organizations/managing-saml-single-sign-on-for-your-organization/about-scim
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 8071909478d52770f2e8107df31e61b7111f73c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145065959'
---
## 关于组织的 SCIM

如果组织使用 [SAML SSO](/articles/about-identity-and-access-management-with-saml-single-sign-on)，则可以实现 SCIM 以添加、管理和删除组织成员对 {% data variables.product.product_name %} 的访问权限。 例如，管理员可以使用 SCIM 撤销配置组织成员，以及从组织中自动删除成员。

{% data reusables.saml.ghec-only %}

{% data reusables.scim.enterprise-account-scim %}

如果在未实现 SCIM 的情况下使用 SAML SSO，则不会进行自动撤销操作。 如果组织成员的会话在其访问权限从 IdP 中删除后过期，他们不会自动从组织中删除。 即使在会话过期后，授权令牌也会授予对组织的访问权限。 如果不使用 SCIM，若要完全删除某个成员的访问权限，则组织所有者必须删除该成员在 IdP 中的访问权限，并在 {% data variables.product.prodname_dotcom %} 上从组织中手动删除该成员。

{% data reusables.scim.changes-should-come-from-idp %}

## 支持的身份提供程序

这些标识提供者 (IdP) 与组织的 {% data variables.product.product_name %} SCIM API 兼容。 更多信息请参阅 {% ifversion ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 文档中的 [SCIM](/rest/scim)。
- Azure AD
- Okta
- OneLogin

## 关于组织的 SCIM 配置

{% data reusables.scim.dedicated-configuration-account %}

在授权 {% data variables.product.prodname_oauth_app %} 之前，必须有一个活动的 SAML 会话。 有关详细信息，请参阅“[关于通过 SAML 单一登录进行身份验证](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso)”。

{% note %}

注意：{% data reusables.scim.nameid-and-username-must-match %}

{% endnote %} 

## 延伸阅读

- “[查看和管理成员对组织的 SAML 访问](/github/setting-up-and-managing-organizations-and-teams//viewing-and-managing-a-members-saml-access-to-your-organization)”
