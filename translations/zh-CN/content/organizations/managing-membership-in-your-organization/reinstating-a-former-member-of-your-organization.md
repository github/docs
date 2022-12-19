---
title: Reinstating a former member of your organization（恢复组织前成员的身份）
intro: '组织所有者可以{% ifversion fpt or ghec %}邀请前组织成员重新加入{% else %}将前成员添加到{% endif%}您的组织，并可选择是否恢复该人员以前的角色、访问权限、复刻和设置。'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-member-of-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: Organization owners can reinstate a former member of an organization.
topics:
  - Organizations
  - Teams
shortTitle: Reinstate a member
ms.openlocfilehash: b9ad15f9fc882206ed7b335bcc6dea698c2f1f8e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097334'
---
## 关于成员恢复

如果通过以下方式之一将用户从您的组织中移除，则该用户的访问权限和设置将保存三个月。 

- 您手动从组织中删除了该用户。 有关详细信息，请参阅[从组织中删除成员](/organizations/managing-membership-in-your-organization/removing-a-member-from-your-organization)。{% ifversion not ghae %}
- 该用户已从您的组织中删除，因为您要求成员和外部协作者启用双重身份验证 (2FA)。 有关详细信息，请参阅[要求在组织中进行双重身份验证](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)。{% endif %}{% ifversion fpt or ghec %}
- 该用户已从您的组织中删除，因为您强制实施了 SAML 单点登录。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[强制实施组织的 SAML 单一登录](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization){% ifversion fpt %}”{% else %}。{% endif %}{% endif %}
- 您已将组织成员转换为外部协作者。 有关详细信息，请参阅[将组织成员转换为外部协作者](/organizations/managing-access-to-your-organizations-repositories/converting-an-organization-member-to-an-outside-collaborator)。

如果您在该时间范围内将用户{% ifversion fpt or ghec %}邀请{% else %}添加{% endif %}回组织，则可以恢复该用户的权限。

{% note %}

注意：{% data reusables.saml.removed-users-can-rejoin %}不需要邀请这些用户重新加入。 相反，用户可以登录到其个人帐户，导航到组织，然后单击横幅以通过 SAML 单点登录进行身份验证。

{% endnote %}

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

恢复前组织成员时，您可以恢复以下各项：
 - 用户在组织中的角色
 - 组织拥有的仓库的任何私有复刻
 - 组织团队的成员身份
 - 组织仓库以前的访问权限和权限
 - 组织仓库的星标
 - 组织中的议题分配
 - 仓库订阅（关注、不关注或忽略仓库活动的通知设置）

{% ifversion ghes %}如果组织成员由于未使用双重身份验证已从组织中删除，并且你的组织仍要求成员使用双重身份验证，则前成员必须启用双重身份验证，然后才能恢复其成员身份。
{% endif %}

{% ifversion fpt or ghec %}如果你的组织采用付费的每用户订阅，则必须有未使用的许可才可恢复前组织成员。 有关详细信息，请参阅[关于每用户定价](/articles/about-per-user-pricing)。 {% data reusables.organizations.org-invite-scim %} {% endif %}

## Reinstating a former member of your organization（恢复组织前成员的身份）

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
6. 选择是恢复该人员在组织中以前的权限还是清除其以前的权限并设置新的访问权限，然后单击“邀请并恢复”或“邀请并重新开始” 。
  ![选择是否恢复信息](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. 选择是恢复该人员在组织中以前的权限还是清除其以前的权限并设置新的访问权限，然后单击“添加并恢复”或“添加并重新开始” 。
  ![选择是否恢复权限](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. 如果清除了前组织成员以前的权限，请为该用户选择一个角色，并（可选）将其添加到某些团队，然后单击“发送邀请”。
  ![角色和团队选项及发送邀请按钮](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. 如果清除了前组织成员以前的权限，请为该用户选择一个角色，并（可选）将其添加到某些团队，然后单击“添加成员”。
  ![角色和团队选项以及添加成员按钮](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %} {% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %} {% endif %}

## 延伸阅读

- [将组织成员转换为外部协作者](/articles/converting-an-organization-member-to-an-outside-collaborator)
