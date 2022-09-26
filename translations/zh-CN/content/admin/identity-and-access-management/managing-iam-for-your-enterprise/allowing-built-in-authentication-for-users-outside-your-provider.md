---
title: 允许对提供程序覆盖范围之外的用户进行内置身份验证
intro: 可以配置回退身份验证，允许在 CAS、LDAP 或 SAML 身份验证提供程序上没有帐户的人员进行内置身份验证。
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Fallback authentication
ms.openlocfilehash: d011a710898e19dfdfa3591cbba2cbf7ae629885
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064432'
---
## 关于对提供程序覆盖范围之外的用户进行内置身份验证

默认情况下，如果为 {% data variables.product.product_name %} 启用外部身份验证，将为实例禁用内置身份验证。 有关详细信息，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)”。

如果无法将特定帐户（例如承包商或计算机用户的帐户）添加到外部验证提供程序，则可以配置回退身份验证。 回退身份验证允许对外部用户进行内置身份验证，并在验证提供程序不可用时访问备用帐户。

如果配置了内置身份验证并且某位用户使用 SAML 或 CAS 成功进行了身份验证，则该用户将无法使用用户名和密码进行身份验证。 如果用户使用 LDAP 成功地完成身份验证，凭据将不再被视为内部凭据。

{% warning %}

警告：如果你禁用内置身份验证，则必须单独挂起不应具有实例访问权限的任何用户。 有关详细信息，请参阅“[挂起和取消挂起用户](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)”。

{% endwarning %}

## 为提供程序覆盖范围之外的用户配置内置身份验证

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. 选择身份提供程序。
  ![选择标识提供者选项](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. 选择“允许创建具有内置身份验证的帐户”。
  ![选择内置身份验证选项](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. 阅读警告，然后单击“确定”。

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## 邀请提供程序覆盖范围之外的用户对实例进行身份验证

在用户接受邀请后，他们可以使用用户名和密码登录，无需通过 IdP。

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

## 延伸阅读

- [将 CAS 用于企业 IAM](/admin/identity-and-access-management/using-cas-for-enterprise-iam)
- [将 LDAP 用于企业 IAM](/admin/identity-and-access-management/using-ldap-for-enterprise-iam)
- [将 SAML 用于企业 IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam)
