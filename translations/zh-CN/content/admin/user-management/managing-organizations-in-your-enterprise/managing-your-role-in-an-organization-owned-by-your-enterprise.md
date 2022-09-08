---
title: 管理企业拥有的组织中的角色
intro: 你可以在你的企业拥有的任何组织中管理你的成员身份，并更改你在组织内的角色。
permissions: Enterprise owners can manage their role in an organization owned by the enterprise.
versions:
  feature: enterprise-owner-join-org
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Manage your organization roles
ms.openlocfilehash: e7a95602fe103dcbccb80bc2dfec6a67f8b4b312
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065176'
---
## 关于角色管理

可以选择将企业拥有的组织加入为成员或组织所有者，更改组织内的角色，或者离开组织。

{% ifversion ghec %} {% warning %}

警告：如果组织使用 SCIM 预配用户，则以这种方式加入组织可能会产生意外的后果。 有关详细信息，请参阅“[关于组织的 SCIM](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)”。

{% endwarning %} {% endif %}

有关管理组织中的其他人角色的信息，请参阅“[管理组织中的成员身份](/organizations/managing-membership-in-your-organization)”和“[使用角色管理人员对组织的访问权限](/organizations/managing-peoples-access-to-your-organization-with-roles)”。

## 使用企业设置管理角色

可以直接使用企业帐户的设置加入企业拥有的组织并管理组织中的角色。

{% ifversion ghec %}

如果组织强制执行 SAML 单一登录 (SSO)，你将无法使用企业设置加入组织。 相反，必须使用该组织的标识提供者 (IdP) 加入组织。 然后，可以在企业设置中管理角色。 有关详细信息，请参阅“[加入强制实施 SAML SSO 的组织](#joining-an-organization-that-enforces-saml-sso)”。

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. 在“组织”选项卡上，在要在其中管理角色的组织右侧，选择 {% octicon "gear" aria-label="The gear icon" %} 下拉菜单，然后单击要执行的操作。

   ![组织的齿轮图标下拉菜单的屏幕截图](/assets/images/help/business-accounts/change-role-in-org.png)

{% ifversion ghec %}

## 加入强制实施 SAML SSO 的组织

如果组织强制执行 SAML SSO，你将无法使用企业设置加入组织。 相反，必须使用该组织的标识提供者 (IdP) 加入组织。

1. 必须在 IdP 中为组织使用的 {% data variables.product.prodname_ghe_cloud %} 应用程序分配访问权限。 如果无法自行配置 IdP，请联系 IdP 管理员。
1. 使用 SAML SSO 向组织进行身份验证。

   - 如果组织使用 SCIM，请接受由 SCIM 集成生成的组织邀请。
   - 如果组织不使用 SCIM，请访问以下 URL，将 ORGANIZATION 替换为组织的名称，然后按照提示进行身份验证。

    `https://github.com/orgs/ORGANIZATION/sso`

加入组织后，可以使用企业设置来管理组织中的角色，例如成为组织所有者。 有关详细信息，请参阅“[使用企业设置管理角色](#managing-your-role-with-the-enterprise-settings)”。

{% endif %}
