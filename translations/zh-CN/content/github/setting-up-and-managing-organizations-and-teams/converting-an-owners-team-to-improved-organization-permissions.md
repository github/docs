---
title: 将所有者团队转换为改进的组织权限
intro: 如果您的组织是在 2015 年 9 月之后创建的，则您的组织默认具有改进的组织权限。 在 2015 年 9 月之前创建的组织可能需要将较旧的所有者和管理员团队迁移到改进的权限模型。 “所有者”现在是赋予组织中个别成员的管理角色。 旧所有者团队的成员自动获得所有者权限。
redirect_from:
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions-early-access-program/
  - /articles/converting-your-previous-owners-team-to-the-improved-organization-permissions/
  - /articles/converting-an-owners-team-to-improved-organization-permissions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您可以通过几种方式转换旧所有者团队：

- 给团队一个新名称以表明其成员在组织中具有特殊地位。
- 在确保所有成员已被添加到对组织仓库具有必要权限的其他团队后，删除该团队。

### 给所有者团队一个新名称

{% tip %}

   **注：**由于“管理员”是用于[对某些仓库具有特定权限](/articles/repository-permission-levels-for-an-organization)的组织成员的术语，因此我们建议在您决定的任何团队名称中避免使用该术语。

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. 在团队名称字段中，为所有者团队选择一个新名称。 例如：
    - 如果组织中只有极少数成员是所有者团队的成员，您可以将该团队命名为“核心”。
    - 如果组织中的所有成员都是所有者团队的成员（以便他们能够 [@提及团队](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)），您可以将该团队命名为“员工”。 ![在团队名称字段将所有者团队重命名为核心](/assets/images/help/teams/owners-team-new-name.png)
6. 在团队说明下，单击 **Save and continue（保存并继续）**。 ![保存并继续按钮](/assets/images/help/teams/owners-team-save-and-continue.png)
7. （可选）[让团队*公开*](/articles/changing-team-visibility)。

### 删除旧所有者团队

{% warning %}

**警告：**如果所有者团队中有成员不是其他团队的成员，则删除该团队将导致从组织中删除这些成员。 在删除该团队之前，请确保其成员已经是组织的直接成员，或者具有对必要仓库的协作者权限。

{% endwarning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.owners-team %}
{% data reusables.organizations.convert-owners-team-confirm %}
5. 在页面底部，查看警告，然后单击 **Delete the Owners team（删除所有者团队）**。 ![删除所有者团队的链接](/assets/images/help/teams/owners-team-delete.png)
