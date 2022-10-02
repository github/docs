---
title: 将团队维护者角色分配给团队成员
intro: 您可以通过分配团队维护者角色，为团队成员提供管理团队成员身份和设置的能力。
redirect_from:
  - /articles/giving-team-maintainer-permissions-to-an-organization-member-early-access-program
  - /articles/giving-team-maintainer-permissions-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/giving-team-maintainer-permissions-to-an-organization-member
  - /organizations/managing-peoples-access-to-your-organization-with-roles/giving-team-maintainer-permissions-to-an-organization-member
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Team maintainers
permissions: Organization owners can promote team members to team maintainers.
ms.openlocfilehash: 2408d8c12718375d777432be03d6e19f7d6d04b5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145101316'
---
## 关于团队维护员

具有团队维护员角色的人员可以管理团队成员身份和设置。

- [更改团队名称和描述](/articles/renaming-a-team)
- [更改团队的可见性](/articles/changing-team-visibility)
- [请求添加子团队](/articles/requesting-to-add-a-child-team)
- [请求添加或更改父团队](/articles/requesting-to-add-or-change-a-parent-team)
- [设置团队头像](/articles/setting-your-team-s-profile-picture)
- [编辑团队讨论](/articles/managing-disruptive-comments/#editing-a-comment)
- [删除团队讨论](/articles/managing-disruptive-comments/#deleting-a-comment)
- [在团队中添加组织成员](/articles/adding-organization-members-to-a-team)
- [从团队中删除组织成员](/articles/removing-organization-members-from-a-team)
- 删除团队对存储库的访问权限
- [管理团队的代码评审分配](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% ifversion fpt or ghec %}
- [管理拉取请求的计划提醒](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}

## 将组织成员升级为团队维护员

在将组织成员提升为团队维护员之前，该人员必须已经是团队的成员。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team_members_tab %}
4. 选择要将其升级为团队维护员的人员。
![组织成员旁的复选框](/assets/images/help/teams/team-member-check-box.png)
5. 在团队成员列表的上方，使用下拉菜单并单击“更改角色…”。![包含更改角色选项的下拉菜单](/assets/images/help/teams/bulk-edit-drop-down.png)
6. 选择新角色，然后单击“更改角色”。
![维护员或成员角色的单选按钮](/assets/images/help/teams/team-role-modal.png)
