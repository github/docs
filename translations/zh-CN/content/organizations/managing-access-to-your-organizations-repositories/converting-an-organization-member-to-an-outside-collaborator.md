---
title: 将组织成员转换为外部协作者
intro: 如果组织的某些当前成员只需要访问特定仓库，例如顾问或临时员工，您可以将他们转换为*外部协作者*。
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.organizations.owners-and-admins-can %} 将组织成员转换为外部协作者。

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

将组织成员转换为外部协作者后，他们将只能访问其当前团队成员资格允许的仓库。 他们将不再是组织的正式成员，不再能够：

- 创建团队
- 查看所有组织成员和团队
- @提及任何可见团队
- 成为团队维护员

更多信息请参阅“[组织的权限级别](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)”。

建议查看组织成员对仓库的访问权限，以确保其访问权限符合您的预期。 更多信息请参阅“[管理个人对组织仓库的访问](/articles/managing-an-individual-s-access-to-an-organization-repository)”。

将组织成员转换为外部协作者时，他们作为组织成员的权限将保存三个月，因此，如果您在该时间范围内{% if currentVersion == "free-pro-team@latest" %} 邀请他们重新加入{% else %} 将他们重新添加到{% endif %} 您的组织，您可以恢复其成员权限。 更多信息请参阅“[恢复组织的前成员](/articles/reinstating-a-former-member-of-your-organization)”。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. 选择要转换为外部协作者的人员。 ![选择了两名成员的成员列表](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. 在成员列表的上方，使用下拉菜单并单击 **Convert to outside collaborator（转换为外部协作者）**。 ![含有将成员转换为外部协作者选项的下拉菜单](/assets/images/help/teams/user-bulk-management-options.png)
6. 阅读有关将成员转换为外部协作者的信息，然后单击 **Convert to outside collaborator（转换为外部协作者）**。 ![有关外部协作者权限的信息和转换为外部协作者按钮](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

### 延伸阅读

- “[将外部协作者添加到组织中的仓库](/articles/adding-outside-collaborators-to-repositories-in-your-organization)”
- "[从组织仓库删除外部协作者](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
- “[将外部协作者转换为组织成员](/articles/converting-an-outside-collaborator-to-an-organization-member)”
