---
title: 使用标识提供者组管理团队成员身份
shortTitle: Manage teams with your IdP
intro: You can manage team membership on {% data variables.product.product_name %} through your identity provider (IdP) by connecting IdP groups with your {% data variables.product.prodname_emu_enterprise %}.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Enterprise
- SSO
- Teams
ms.openlocfilehash: 2dc5a5ae3a8aad9cf589e148764dec1991c2c8f7
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145099041"
---
## <a name="about-team-management-with--data-variablesproductprodname_emus-"></a>关于使用 {% data variables.product.prodname_emus %} 的团队管理

使用 {% data variables.product.prodname_emus %}，可以通过 IdP 管理企业内的团队成员身份。 将某个企业组织中的团队连接到 IdP 组时，IdP 组对成员身份的更改会自动反映在企业中，从而减少手动更新和自定义脚本的需要。 

当 IdP 组的更改或新的团队连接导致 {% data variables.product.prodname_managed_user %} 加入他们尚未加入的组织中的团队时，{% data variables.product.prodname_managed_user %} 将自动添加到组织中。 组织所有者还可以手动管理组织成员身份。 当你断开组与团队的连接时，如果未通过任何其他方式为其分配组织成员身份，则通过团队成员身份成为组织成员的用户将从组织中删除。

可以将企业中的团队连接到一个 IdP 组。 可以将同一 IdP 组分配给企业中的多个团队。

如果要将现有团队连接到 IdP 组，必须先删除手动添加的任何成员。 将企业中的团队连接到 IdP 组后，IdP 管理员必须通过标识提供者更改团队成员身份。 无法在 {% data variables.product.prodname_dotcom_the_website %} 上管理团队成员身份。

当 Idp 上的组成员身份发生变化时，你的 IdP 会根据 IdP 确定的时间表发送 SCIM 请求，其中包含对 {% data variables.product.prodname_dotcom_the_website %} 的更改，因此更改可能不会立即发生。 任何更改团队或组织成员身份的请求都将在审核日志中注册为用于配置用户预配的帐户所做的更改。

连接到 IdP 组的团队不能是其他团队的父级，也不能是另一个团队的子级。 如果要连接到 IdP 组的团队是父团队或子团队，建议创建一个新团队或删除使你的团队成为父团队的嵌套关系。

若要管理企业中任何团队（包括连接到 IdP 组的团队）的存储库访问权限，必须对 {% data variables.product.prodname_dotcom_the_website %} 进行更改。 有关详细信息，请参阅“[管理团队对组织存储库的访问权限](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)”。

## <a name="creating-a-new-team-connected-to-an-idp-group"></a>创建连接到 IdP 组的新团队

组织的任何成员都可以创建新团队并将团队连接到 IdP 组。 

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %}
1. 若要连接团队，请选择“标识提供者组”下拉菜单，然后单击要连接的团队。
    ![用于选择标识提供者组的下拉菜单](/assets/images/help/teams/choose-an-idp-group.png) {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}

## <a name="managing-the-connection-between-an-existing-team-and-an-idp-group"></a>管理现有团队和 IdP 组之间的连接

组织所有者和团队维护者可以管理 IdP 组和团队之间的现有连接。

{% note %}

注意：在首次将 {% data variables.product.prodname_dotcom_the_website %} 上的现有团队连接到 IdP 组之前，必须先删除 {% data variables.product.prodname_dotcom_the_website %} 上的所有团队成员。 有关详细信息，请参阅“[从团队中删除组织成员](/github/setting-up-and-managing-organizations-and-teams/removing-organization-members-from-a-team)”。

{% endnote %}

{% data reusables.profile.access_profile %}

{% data reusables.profile.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_settings %}
1. （可选）在“标识提供者组”下，单击要断开连接的 IdP 组右侧的 {% octicon "x" aria-label="X symbol" %}。 
    ![从 GitHub 团队取消选择已连接的 IdP 组](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png)
1. 若要连接 IdP 组，请在“标识提供者组”下选择下拉菜单，然后从列表中单击标识提供者组。
    ![用于选择标识提供者组的下拉菜单](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png)
1. 单击“保存更改”。 

## <a name="viewing-idp-groups-group-membership-and-connected-teams"></a>查看 IdP 组、组成员身份和连接的团队

可以查看 IdP 组列表，查看连接到 IdP 组的任何团队，并在 {% data variables.product.product_name %} 上查看每个 IdP 组的成员身份。 必须在 IdP 上编辑组的成员身份。

{% data reusables.enterprise-accounts.access-enterprise %}
1. 若要查看 IdP 组列表，请在左侧边栏中单击 {% octicon "key" aria-label="The key icon" %}“标识提供者”。
    ![显示企业侧栏中“标识提供者”选项卡的屏幕截图](/assets/images/help/enterprises/enterprise-account-identity-provider-tab.png)
2. 若要查看连接到 IdP 组的成员和团队，请单击该组的名称。
    ![显示 IdP 组列表的屏幕截图，其中突出显示了组名称](/assets/images/help/enterprises/select-idp-group.png)
4. 若要查看连接到 IdP 组的团队，请单击“团队”。 
    ![显示“团队”按钮的屏幕截图](/assets/images/help/enterprises/idp-groups-team-switcher.png)
