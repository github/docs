---
title: 查看企业中的人员
intro: 要审核对企业拥有的资源或用户许可证使用的访问权限，企业所有者可以查看企业的每个管理员和成员。
permissions: Enterprise owners can view the people in an enterprise.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-people-in-your-enterprise-account
  - /articles/viewing-people-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/viewing-people-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/viewing-people-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
shortTitle: View people in your enterprise
ms.openlocfilehash: 11d7446ad93035cea55ee3be6f84e3b411ea4578
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578648'
---
## 关于企业中的人员的列表

若要审核对企业资源的访问并管理许可证使用情况，可以查看有权访问企业的所有人员的列表。 

可以查看所有当前企业成员和企业管理员{% ifversion ghec %}，以及要成为成员和管理员{% endif %}的待定邀请。 若要更轻松地使用此信息，可以搜索和筛选列表。

{% ifversion ghec %}

如果为企业配置了 {% data variables.product.prodname_github_connect %}，则当筛选企业人员列表时，将适用以下限制。

- 双因素身份验证 (2FA) 状态的筛选器不显示仅在 {% data variables.product.prodname_ghe_server %} 实例上拥有帐户的用户。
- 如果将 {% data variables.product.prodname_ghe_server %} 实例上帐户的筛选器与组织的筛选器或 2FA 状态的筛选器相结合，则不会看到任何结果。

有关 {% data variables.product.prodname_github_connect %} 的详细信息，请参阅以下文章。

- {% data variables.product.prodname_ghe_server %} 文档中的“[关于 {% data variables.product.prodname_github_connect %}](/enterprise-server/admin/configuration/configuring-github-connect/about-github-connect)”
- {% data variables.product.prodname_ghe_managed %} 文档中的“[关于 {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)”

{% endif %}

## 查看企业管理员

可以查看企业的所有当前企业所有者{% ifversion ghec %}和账单管理员{% endif %}。{% ifversion enterprise-membership-view-improvements %} 可以查看有关每个管理员{% ifversion ghec %}的有用信息，并按角色{% endif %} 筛选列表。{% endif %}可以通过搜索其用户名或显示名称来查找特定人员。

{% ifversion ghes > 3.5 %}账户被暂停的企业所有者被列入企业管理员列表中，并被标识为暂停。 你应考虑将所看到的任何已暂停的所有者降级。 有关详细信息，请参阅“[推广或降级网站管理员](/admin/user-management/managing-users-in-your-enterprise/promoting-or-demoting-a-site-administrator#demoting-a-site-administrator-from-the-enterprise-settings)”。
{% endif %}

{% ifversion not ghae %} 还可以删除管理员。 有关详细信息， 请参阅“[邀请人员管理企业](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#removing-an-enterprise-administrator-from-your-enterprise-account)”。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}

## 查看成员 {% ifversion enterprise-membership-view-improvements %}{% else %} 和外部协作者{% endif %}

可以查看企业的所有当前成员 {% ifversion enterprise-membership-view-improvements %}{% else %}或外部协作者{% endif %}。 可以查看有关每个帐户的有用信息，并通过有用的方式（如按角色）筛选列表。 您可以通过搜索其用户名或显示名称查找特定人员。

可以通过单击人员名称查看有关该人员访问企业的详细信息，例如人员所属的组织。

{% ifversion remove-enterprise-members %} 还可从企业拥有的所有组织中删除任何企业成员。 有关详细信息，请参阅“[从企业中删除成员](/admin/user-management/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise)”。
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}{% ifversion enterprise-membership-view-improvements %}{% else %}
1. （可选）要查看外部协作者列表而不是成员列表，请单击“外部协作者”。

   ![“企业成员”页上的“外部协作者”选项卡](/assets/images/help/business-accounts/outside-collaborators-tab.png){% endif %}

{% ifversion enterprise-membership-view-improvements %}
## 查看外部协作者

可以查看企业的所有当前外部协作者。 可以查看有关每个协作者的有用信息，并通过有用的方式（如按组织）筛选列表。 可以通过搜索其用户名或显示名称查找特定协作者。

可以通过单击人员名称查看有关该人员访问企业的详细信息，例如协作者有权访问的所有存储库的列表。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. 在“人员”下，单击“外部协作者”。

  ![“企业设置”边栏中的“外部协作者”选项卡]{% ifversion ghec%}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% else %}(/assets/images/help/business-accounts/outside-collaborators-tab-sidebar-dotcom.png){% endif %}
  
{% endif %}

{% ifversion ghec %}
## 查看待定邀请

可以查看要成为企业中的成员、管理员或外部协作者的所有待定邀请。 可以通过有用的方式（如按组织）筛选列表。 您可以通过搜索其用户名或显示名称查找特定人员。

在待定成员列表中，对于任何个人帐户，可以取消所有邀请以加入企业拥有的组织。 这不会取消该人员成为企业管理员或外部协作者的任何邀请。 

{% note %}

注意：如果邀请是通过 SCIM 预配的，则必须通过标识提供者 (IdP)（而不是在 {% data variables.product.prodname_dotcom %} 上）取消邀请。

{% endnote %}

如果使用 {% data variables.product.prodname_vss_ghe %}，则待定邀请列表包括未加入 {% data variables.product.prodname_dotcom %} 上的任何组织的所有 {% data variables.product.prodname_vs %} 订阅者，即使订阅者没有加入组织的待定邀请也是如此。 有关如何使 {% data variables.product.prodname_vs %} 订阅者访问 {% data variables.product.prodname_enterprise %} 的详细信息，请参阅“[设置 {% data variables.product.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/setting-up-visual-studio-subscriptions-with-github-enterprise)”。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. 在“人员”下，单击“待定邀请”。

   ![边栏中“待定邀请”选项卡的屏幕截图](/assets/images/help/enterprises/pending-invitations-tab.png)
1. （可选）若要取消帐户加入企业拥有的组织的所有邀请，请在帐户右侧单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击“取消邀请”。

   ![“取消邀请”按钮的屏幕截图](/assets/images/help/enterprises/cancel-enterprise-member-invitation.png)
1. （可选）若要查看企业管理员或外部协作者的待定邀请，请在“待定成员”下单击“管理员”或“外部协作者”。

   ![“成员”、“管理员”和“外部协作者”选项卡的屏幕截图](/assets/images/help/enterprises/pending-invitations-type-tabs.png)

## 在 {% data variables.product.prodname_emu_enterprise %} 中查看暂停的成员

如果您的企业使用 {% data variables.product.prodname_emus %}，您还可以查看已暂停的用户。 暂停的用户是在从 {% data variables.product.prodname_emu_idp_application %} 应用程序取消分配或从身份提供商中删除后已取消预配的成员。 有关详细信息，请参阅“[关于企业托管用户](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users)”。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. 若要查看已挂起成员的列表，请在活动成员列表上方单击“已挂起”。
  ![显示“已挂起”选项的屏幕截图](/assets/images/help/enterprises/view-suspended-members.png)

{% endif %}

## 查看休眠用户

您可以查看{% ifversion ghes or ghae %}尚未暂停以及{% endif %}不是站点管理员的所有休眠用户列表。 {% data reusables.enterprise-accounts.dormant-user-activity-threshold %} 有关详细信息，请参阅“[管理休眠用户](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)”。

{% ifversion ghec or ghes %}
## 查看已验证域中没有电子邮件地址的成员

可在 {% data variables.product.prodname_dotcom_the_website %} 上查看没有来自与其用户帐户关联的已验证域的电子邮件地址的企业成员列表。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. 在“通知首选项”下，单击 {% octicon "eye" aria-label="The github eye icon" %}“查看没有审批或验证域电子邮件的企业成员”链接。
{% endif %}

## 延伸阅读

- [企业中的角色](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)
