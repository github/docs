---
title: 恢复前外部协作者对组织的访问权限
intro: 您可以恢复前外部协作者对组织仓库、复刻和设置的访问权限。
redirect_from:
- /articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization
- /articles/reinstating-a-former-outside-collaborators-access-to-your-organization
- /github/setting-up-and-managing-organizations-and-teams/reinstating-a-former-outside-collaborators-access-to-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Reinstate collaborator
ms.openlocfilehash: 88d986f922f1a66d652dba55f10142f7e493ffa2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146178901"
---
当外部协作者对组织私有仓库的权限被删除时，该用户的访问权限和设置将保存三个月。 如果您在该时间范围内将用户{% ifversion fpt or ghec %}邀请{% else %}添加{% endif %}回组织，则可以恢复该用户的权限。

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

恢复前外部协作者时，您可以恢复以下各项：
 - 用户对组织仓库以前的访问权限
 - 组织拥有的仓库的任何私有复刻
 - 组织团队的成员身份
 - 组织仓库以前的访问权限和权限
 - 组织仓库的星标
 - 组织中的议题分配
 - 仓库订阅（关注、不关注或忽略仓库活动的通知设置）

{% tip %}

**提示**：

 - 只有组织所有者才能恢复外部协作者对组织的访问权限。{% ifversion prevent-org-admin-add-outside-collaborator %} 企业所有者可能会进一步限制恢复外部协作者对企业所有者的访问权限的能力。{% endif %} 有关详细信息，请参阅“[组织中的角色](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”。
 - 在 {% data variables.product.product_location %} 上恢复成员流时，可能会使用术语“成员”来描述恢复外部协作者，但如果恢复此人并保留其以前的特权，则他们将仅拥有以前的[外部协作者权限](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)。{% ifversion fpt or ghec %}
 - 如果您的组织采用付费的每用户订阅，则必须有未使用的许可才可邀请新成员加入组织或恢复前组织成员。 有关详细信息，请参阅“[关于每用户定价](/articles/about-per-user-pricing)”。{% endif %}

{% endtip %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.reinstate-user-type-username %} {% ifversion fpt or ghec %}
1. 通过单击“邀请并恢复”选择恢复外部协作者以前在组织中的权限，或通过单击“邀请并重新开始”选择清除他们以前的权限并设置新的访问权限 。

  {% warning %}

  警告：如果要将外部协作者升级为组织的成员，请选择“邀请并重新开始”，并为此人选择一个新角色 。 但是，请注意，如果您选择重新开始，则此人员组织仓库的私人复刻将会丢失。 若要使前外部协作者成为组织的成员并保留其专用分支，请选择“邀请并恢复”。 在此人接受邀请后，可以通过[邀请他们以成员身份加入组织](/articles/converting-an-outside-collaborator-to-an-organization-member)，将他们转变为组织成员。

  {% endwarning %}

  ![选择是否恢复设置](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png) {% else %}
6. 通过单击“添加并恢复”选择恢复外部协作者以前在组织中的权限，或通过单击“添加并重新开始”选择清除他们以前的权限并设置新的访问权限 。

  {% warning %}

  警告：如果要将外部协作者升级为组织的成员，请选择“添加并重新开始”，并为此人选择一个新角色 。 但是，请注意，如果您选择重新开始，则此人员组织仓库的私人复刻将会丢失。 若要使前外部协作者成为组织的成员并保留其专用分支，请选择“添加并恢复”。 然后，可以通过[将其作为成员添加到组织](/articles/converting-an-outside-collaborator-to-an-organization-member)来将其转变为组织成员。

  {% endwarning %}

  ![选择是否还原设置](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png) {% endif %} {% ifversion fpt or ghec %}
7. 如果清除了前外部协作者以前的权限，请为该用户选择一个角色，并（可选）将其添加到某些团队，然后单击“发送邀请”。
  ![角色和团队选项及“发送邀请”按钮](/assets/images/help/organizations/add-role-send-invitation.png) {% else %}
7. 如果清除了前外部协作者以前的权限，请为该用户选择一个角色，并（可选）将其添加到某些团队，然后单击“添加成员”。
  ![角色和团队选项及“添加成员”按钮](/assets/images/help/organizations/add-role-add-member.png) {% endif %} {% ifversion fpt or ghec %}
8. 被邀请的人员将收到邀请其加入组织的电子邮件。 它们需要接受邀请，然后才能成为组织中的外部协作者。 {% data reusables.organizations.cancel_org_invite %} {% endif %}

## 深入阅读

- “[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
