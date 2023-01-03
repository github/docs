---
title: 使用 Okta 为企业托管用户配置 SCIM 预配
shortTitle: Set up provisioning with Okta
intro: You can provision new users and manage their membership of your enterprise and teams using Okta as your identity provider.
product: '{% data reusables.gated-features.emus %}'
versions:
  ghec: '*'
redirect_from:
- /early-access/github/articles/configuring-provisioning-for-managed-users-with-okta
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta
type: tutorial
topics:
- Accounts
- Authentication
- Enterprise
- SSO
ms.openlocfilehash: 6c143b8ef729ab7343cf14613acf5f528384135c
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145098059"
---
## <a name="about-provisioning-with-okta"></a>关于使用 Okta 进行预配

您可以使用 {% data variables.product.prodname_emus %} Okta 作为您的身份提供商来预配新帐户、管理企业成员身份以及管理企业中组织的团队成员身份。 有关预配 {% data variables.product.prodname_emus %} 的详细信息，请参阅“[为 Enterprise Managed User 配置 SCIM 预配](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users)”。

在使用 Okta 配置预配之前，必须配置 SAML 单点登录。 有关详细信息，请参阅“[为 Enterprise Managed User 配置 SAML 单一登录](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)”。

要使用 Okta 配置预配，必须在 {% data variables.product.prodname_emu_idp_application %} 应用程序中设置企业名称，并输入安装用户的个人访问令牌。 然后，您可以在 Okta 中开始预配用户。

## <a name="supported-features"></a>支持的功能

{% data variables.product.prodname_emus %} 支持 Okta 中的许多预配功能。

| 功能 | 说明 |
| --- | --- |
| 推送新用户 | 分配给 Okta 中的 {% data variables.product.prodname_emu_idp_application %} 应用程序的用户将在 {% data variables.product.product_name %} 上自动创建。 |
| 推送配置文件更新 | 对 Okta 中的用户配置文件所做的更新将被推送到 {% data variables.product.product_name %}。 |
| 推送组 | Okta 中作为推送组分配给 {% data variables.product.prodname_emu_idp_application %} 应用程序的组将在 {% data variables.product.product_name %} 上自动创建。 |
| 推送用户停用 | 从 Okta 中的 {% data variables.product.prodname_emu_idp_application %} 应用程序中取消分配用户将在 {% data variables.product.product_name %} 上禁用该用户。 用户将无法登录，但会保留用户的信息。 |
| 重新激活用户 | 将启用 Okta 中已重新激活其 Okta 帐户并将其分配回 {% data variables.product.prodname_emu_idp_application %} 应用程序的用户。 |

{% note %}

**注意：** {% data variables.product.prodname_emus %} 不支持修改用户名。

{% endnote %}

## <a name="setting-your-enterprise-name"></a>设置企业名称

创建 {% data variables.product.prodname_emu_enterprise %} 后，可以通过在 Okta 中设置企业名称来开始配置预配。

1. 导航到 Okta 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序。
1. 单击“登录”选项卡。
1. 若要进行更改，请单击“编辑”。
1. 在“Advanced Sign-on Settings（高级登录设置）”下的“Enterprise Name（企业名称）”文本框中，键入您的企业名称。 例如，如果你在 `https://github.com/enterprises/octoinc` 访问你的企业，则你的企业名称将为“octoinc”。
![Okta 上的“企业名称”字段的屏幕截图](/assets/images/help/enterprises/okta-emu-enterprise-name.png)
1. 若要保存企业名称，请单击“保存”。

## <a name="configuring-provisioning"></a>配置预配

设置企业名称后，可以继续配置预配设置。

若要配置预配，具有 @<em>SHORT-CODE</em>_admin 用户名的安装用户将需要提供 admin:enterprise 作用域的个人访问令牌 。 有关创建新令牌的详细信息，请参阅“[创建个人访问令牌](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)”。

1. 导航到 Okta 上的 {% data variables.product.prodname_emu_idp_application %} 应用程序。
1. 单击 **资源调配** 选项卡。
1. 在“设置”菜单中，单击“集成”。
1. 若要进行更改，请单击“编辑”。
1. 选择“启用 API 集成”。
1. 在“API 令牌”字段中，输入属于安装用户的作用域为 admin:enterprise 的个人访问令牌。
![显示 Okta 上的 API 令牌字段的屏幕截图](/assets/images/help/enterprises/okta-emu-token.png)
1. 单击“测试 API 凭据”。 如果测试成功，屏幕顶部将显示一条验证消息。
1. 若要保存令牌，请单击“保存”。
1. 在“设置”菜单中，单击“转到应用”。
![显示 Okta 上的“转到应用”菜单项的屏幕截图](/assets/images/help/enterprises/okta-emu-to-app-menu.png)
1. 在“预配到应用”的右侧，要允许进行更改，请单击“编辑”。
1. 对于“创建用户”、“更新用户属性”和“停用用户”，选择“启用”   。
![显示 Okta 上的预配选项的屏幕截图](/assets/images/help/enterprises/okta-emu-provisioning-to-app.png)
1. 若要完成配置预配，请单击“保存”。

## <a name="assigning-users-and-groups"></a>分配用户和组

配置 SAML SSO 和预配后，您可以通过将用户分配到 {% data variables.product.prodname_emu_idp_application %} 应用程序在 {% data variables.product.prodname_dotcom_the_website %} 上预配新用户。 

{% data reusables.scim.emu-scim-rate-limit %}

您还可以通过将组分配给应用程序并将其添加到 Okta 中的“Push Groups（推送组）”选项卡来自动管理组织成员身份。 成功预配组后，该组将可用于连接到企业组织中的团队。 有关管理团队的详细信息，请参阅“[使用标识提供者组管理团队成员身份](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)”。

分配用户时，可以使用 {% data variables.product.prodname_emu_idp_application %} 应用程序中的“角色”属性在 {% data variables.product.product_name %} 上设置用户在企业中的角色。 有关角色的详细信息，请参阅“[企业中的角色](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)”。

![显示 Okta 上已预配用户的角色选项的屏幕截图](/assets/images/help/enterprises/okta-emu-user-role.png)
