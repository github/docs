---
title: 创建团队
intro: 您可以创建独立或嵌套团队来管理仓库权限和提及人群。
redirect_from:
  - /articles/creating-a-team-early-access-program
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: c4ffe03e1108caae9bfed1171b08d8a046caeb76
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145101314'
---
只有父团队的组织所有者和维护员才能在父团队下创建新的子团队。 所有者还可以限制组织中所有团队的创建权限。 有关详细信息，请参阅“[在组织中设置团队创建权限](/articles/setting-team-creation-permissions-in-your-organization)”。

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.new_team %} {% data reusables.organizations.team_name %} {% data reusables.organizations.team_description %} {% data reusables.organizations.create-team-choose-parent %} {% ifversion ghec %}
1. （可选）如果您的组织或企业帐户使用团队同步或您的企业使用 {% data variables.product.prodname_emus %}，则将身份提供商组连接到您的团队。
    * 如果您的企业使用 {% data variables.product.prodname_emus %}，请使用“Identity Provider Groups（身份提供商组）”下拉菜单，并选择单个身份提供商组以连接到新团队。 有关详细信息，请参阅“[使用标识提供者组管理团队成员身份](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)”。
    * 如果您的组织或企业使用团队同步 ，请使用“Identity Provider Groups（身份提供商组）”下拉菜单，并选择五个身份提供商组以连接到新团队。 有关详细信息，请参阅“[将团队与标识提供者组同步](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)”。
    ![用于选择标识提供者组的下拉菜单](/assets/images/help/teams/choose-an-idp-group.png) {% endif %} {% data reusables.organizations.team_visibility %} {% data reusables.organizations.create_team %}
1. （可选）[授予团队访问组织存储库的权限](/articles/managing-team-access-to-an-organization-repository)。

## 延伸阅读

- [关于团队](/articles/about-teams)
- [更改团队可见性](/articles/changing-team-visibility)
- [在组织的层次结构中移动团队](/articles/moving-a-team-in-your-organization-s-hierarchy)
