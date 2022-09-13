---
title: 为 Enterprise Managed User 配置 SCIM 预配
shortTitle: Provisioning managed users
intro: 你可以配置标识提供者以预配新用户并管理其在企业和团队中的成员身份。
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
ms.openlocfilehash: 3ce59680c100004496e761d2a93adc9e9cae0a22
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146689075'
---
## 关于 {% data variables.product.prodname_emus %} 的预配

必须为 {% data variables.product.prodname_emus %} 配置预配才能为企业成员创建、管理和停用用户帐户。 为 {% data variables.product.prodname_emus %} 配置预配时，在标识提供者中分配给 {% data variables.product.prodname_emu_idp_application %} 应用程序的用户将通过 SCIM 预配为 {% data variables.product.prodname_dotcom %} 上的新用户帐户，并且这些用户将添加到你的企业中。 

在 IdP 上更新与用户标识关联的信息时，IdP 将在 GitHub.com 上更新用户的帐户。 从 {% data variables.product.prodname_emu_idp_application %} 应用程序取消分配用户或停用 IdP 上的用户帐户时，IdP 将与 {% data variables.product.prodname_dotcom %} 进行通信，以使任何会话失效并禁用该成员的帐户。 已禁用帐户的信息会保留，其用户名将更改为原始用户名的哈希，并追加短代码。 如果将用户重新分配到 {% data variables.product.prodname_emu_idp_application %} 应用程序或在 IdP 上重新激活其帐户，则会重新激活 {% data variables.product.prodname_dotcom %} 上的 {% data variables.product.prodname_managed_user %} 帐户，并还原用户名。

IdP 中的组可用于管理企业组织中的团队成员身份，使你可通过 IdP 配置存储库访问权限和权限。 有关详细信息，请参阅“[使用标识提供者组管理团队成员身份](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)”。

## 先决条件

在为 {% data variables.product.prodname_emus %} 配置预配之前，必须配置 SAML{% ifversion oidc-for-emu %} 或 OIDC{% endif %} 单一登录。 {% ifversion oidc-for-emu %}

- 有关配置 OIDC 的详细信息，请参阅“[为企业托管用户配置 OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)”
- {% endif %}有关配置 SAML 的详细信息，请参阅“[为企业托管用户配置 SAML 单一登录](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)”。

## 创建个人访问令牌

若要为 {% data variables.product.prodname_emu_enterprise %} 配置预配，需要使用属于安装用户的 admin:enterprise 作用域的个人访问令牌。

{% warning %}

**警告：** 如果令牌过期或预配的用户创建了令牌，SCIM 预配可能会意外停止工作。 请确保在以安装用户身份登录时创建令牌，并将令牌过期设置为“不过期”。

{% endwarning %}

1. 使用用户名“@<em>SHORT-CODE</em>_admin”以新企业的安装用户身份登录到 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. 在“备注”下，为令牌提供描述性名称。
   ![显示令牌名称的屏幕截图](/assets/images/help/enterprises/emu-pat-name.png)
1. 选择“过期”下拉菜单，然后单击“不过期” 。
   ![显示将令牌过期设置为“不过期”的屏幕截图](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. 选择 admin:enterprise 作用域。
   ![显示 admin:enterprise 作用域的屏幕截图](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. 单击“生成令牌”。
   ![生成令牌按钮](/assets/images/help/settings/generate_token.png)
1. 若要将令牌复制到剪贴板，请单击 {% octicon "paste" aria-label="The copy icon" %}。
   ![新建的令牌](/assets/images/help/settings/personal_access_tokens.png)
2. 若要保存令牌以供以后使用，请将新令牌安全地存储在密码管理器中。

## 为 {% data variables.product.prodname_emus %} 配置预配

创建个人访问令牌并安全地存储该令牌后，可以在标识提供者上配置预配。 

{% data reusables.scim.emu-scim-rate-limit %}

若要配置预配，请遵循下表中的相应链接。

| 标识提供者 | SSO 方法 | 详细信息 | |---|---|---|{% ifversion oidc-for-emu %} | Azure AD | OIDC | Azure AD 文档中的[教程：为 GitHub Enterprise Managed User (OIDC) 配置自动用户预配](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) |{% endif %} | Azure AD | SAML | Azure AD 文档中的[教程：为 GitHub Enterprise Managed User (OIDC) 配置自动用户预配](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) | |Okta |SAML | [使用 Okta 为企业托管用户配置 SCIM 预配](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) |
