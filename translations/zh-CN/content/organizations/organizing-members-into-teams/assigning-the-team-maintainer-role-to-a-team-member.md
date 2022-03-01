---
title: Assigning the team maintainer role to a team member
intro: You can give a team member the ability to manage team membership and settings by assigning the team maintainer role.
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
---

## About team maintainers

People with the team maintainer role can manage team membership and settings.

- [更改团队名称和描述](/articles/renaming-a-team)
- [更改团队的可见性](/articles/changing-team-visibility)
- [申请添加子团队](/articles/requesting-to-add-a-child-team)
- [申请添加或更改父团队](/articles/requesting-to-add-or-change-a-parent-team)
- [设置团队头像](/articles/setting-your-team-s-profile-picture)
- [编辑团队讨论](/articles/managing-disruptive-comments/#editing-a-comment)
- [删除团队讨论](/articles/managing-disruptive-comments/#deleting-a-comment)
- [添加组织成员到团队](/articles/adding-organization-members-to-a-team)
- [从团队中删除组织成员](/articles/removing-organization-members-from-a-team)
- 删除团队对仓库的访问权限{% ifversion fpt or ghes or ghae or ghec %}
- [管理团队的代码审查任务](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team){% endif %}{% ifversion fpt or ghec %}
- [管理拉取请求的预定提醒](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team){% endif %}


## 将组织成员升级为团队维护员

Before you can promote an organization member to team maintainer, the person must already be a member of the team.

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
4. 选择要将其升级为团队维护员的人员。 ![组织成员旁的复选框](/assets/images/help/teams/team-member-check-box.png)
5. 在团队成员列表的上方，使用下拉菜单并单击 **Change role...（更改角色...）**。 ![包含更改角色选项的下拉菜单](/assets/images/help/teams/bulk-edit-drop-down.png)
6. 选择新角色并单击 **Change role（更改角色）**。 ![维护员或成员角色的单选按钮](/assets/images/help/teams/team-role-modal.png)
