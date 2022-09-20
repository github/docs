---
title: 配置内置身份验证
intro: '当你使用默认身份验证方法时，所有身份验证详细信息都将存储在 {% data variables.product.product_location %} 中。'
permissions: 'Site administrators can configure authentication for a {% data variables.product.product_name %} instance.'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
  - /admin/authentication/using-built-in-authentication
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-built-in-authentication
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Configure built-in authentication
ms.openlocfilehash: 6fbcd68efc953b5a32139a6907975e6918976860
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717811'
---
## 关于内置身份验证

默认情况下，{% data variables.product.product_name %} 使用内置身份验证。 每个人都可以通过邀请或注册在 {% data variables.product.product_location %} 上创建用户帐户，然后使用帐户的凭据进行身份验证以访问你的实例。 你的 {% data variables.product.product_name %} 实例中存储有帐户的身份验证信息。

你可以阻止未经身份验证的人员在你的实例上创建新用户帐户。 有关详细信息，请参阅“[禁用未经身份验证的注册](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)”。

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## 配置内置身份验证

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.authentication %}
4. 选择“内置身份验证”。
![选择内置身份验证选项](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %} {% data reusables.enterprise_user_management.2fa_is_available %}

## 创建账户

在实例创建完成后，您需要创建自己的管理员帐户。

1. 在 `http(s)://[hostname]/join` 中的“创建管理员帐户”页上，选择用户名、密码和电子邮件地址，然后单击“创建帐户”。
![创建管理员帐户](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png) {% data reusables.enterprise_site_admin_settings.sign-in %}

## 后续步骤

<a name="inviting-users"></a>

配置内置身份验证并创建管理帐户后，可以邀请用户创建帐户并使用你的实例。 有关详细信息，请参阅“[邀请他人使用你的实例](/admin/identity-and-access-management/using-built-in-authentication/inviting-people-to-use-your-instance)”。

## 延伸阅读

- “[配置电子邮件通知](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)”
