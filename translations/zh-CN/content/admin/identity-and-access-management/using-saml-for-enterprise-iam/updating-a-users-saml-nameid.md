---
title: 更新用户的 SAML NameID
shortTitle: Update SAML NameID
intro: '如果标识提供者 (IdP) 上的帐户的`NameID` 发生更改，并且该人员无法再{% ifversion ghes or ghae %}登录到 {% data variables.product.product_location %}{% elsif ghec %}进行身份验证以访问企业的资源{% endif %}，必须{% ifversion ghec %}联系 {% data variables.product.company_short %} 支持部门，或撤销该人员的链接标识{% elsif ghes %}更新 {% data variables.product.product_location %} 上的 `NameID` 映射{% elsif ghae %}联系 {% data variables.product.company_short %} 支持部门{% endif %}。'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
ms.openlocfilehash: 7a151143219fc0885861beedb69a2608983c5588
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147717899'
---
## 关于用户的 SAML `NameID` 更新

在某些情况下，可能需要更新与 SAML IdP 上的某个用户帐户关联的值。 如果该标识符也是你用于对 {% data variables.product.product_name %} 进行身份验证的 `NameID`，则必须更新实例上的 `NameID` 映射，以便此人可以继续成功进行身份验证。 有关详细信息，请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”。

## 更新用户的 SAML `NameID`

企业所有者可以在 {% data variables.product.product_name %} 实例上更新用户的 SAML `NameID`。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 在左侧边栏中，单击“所有用户”。
  ![站点管理员设置中的“所有用户”边栏项](/assets/images/enterprise/site-admin-settings/all-users.png)
3. 在用户列表中，单击要为其更新 `NameID` 映射的用户名。
  ![实例用户帐户列表中的用户名](/assets/images/enterprise/site-admin-settings/all-users-click-username.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
5. 在“更新 SAML NameID”右侧，单击“编辑”。
  ![“SAML 身份验证”下和“更新 SAML NameID”右侧的“编辑”按钮](/assets/images/enterprise/site-admin-settings/update-saml-nameid-edit.png)
6. 在“NameID”字段中，为用户键入新的 `NameID`。
  ![键入了 NameID 的模式对话框中的“NameID”字段](/assets/images/enterprise/site-admin-settings/update-saml-nameid-field-in-modal.png)
7. 单击“更新 NameID”。
  ![模式中已更新 NameID 值下的“更新 NameID”按钮](/assets/images/enterprise/site-admin-settings/update-saml-nameid-update.png)
