---
title: 从组织中删除成员
intro: '如果组织的成员不再需要访问组织拥有的任何仓库，则可以从组织中删除他们。'
redirect_from:
  - /articles/removing-a-member-from-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

只有组织所有者才能从组织中删除成员。

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**警告：**当您从组织删除成员时：
- 付费的许可数不会自动降级。 要在从组织中删除用户后减少付费的许可数，请按照“[降级组织的付费席位](/articles/downgrading-your-organization-s-paid-seats)”中的步骤操作。
- 被删除的成员将无法访问组织私有仓库的私人复刻，但仍可拥有本地副本。 但是，它们无法将本地副本与组织的仓库同步。 如果用户在从组织中删除后的三个月内[恢复为组织成员](/articles/reinstating-a-former-member-of-your-organization)，则可以恢复其私人复刻。 最终，您负责确保无法访问仓库的人员删除任何机密信息或知识产权。
- 被删除成员发出的任何组织邀请，如果没有被接受，都会取消，且无法访问。

{% endwarning %}

{% else %}

{% warning %}

**警告：**当您从组织删除成员时：
 - 被删除的成员将无法访问组织私有仓库的私人复刻，但仍可拥有本地副本。 但是，它们无法将本地副本与组织的仓库同步。 如果用户在从组织中删除后的三个月内[恢复为组织成员](/articles/reinstating-a-former-member-of-your-organization)，则可以恢复其私人复刻。 最终，您负责确保无法访问仓库的人员删除任何机密信息或知识产权。
 - 被删除用户发出的任何组织邀请，如果没有被接受，都会取消，且无法访问。

{% endwarning %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

为帮助您从组织中删除的人员过渡并帮助确保他们删除机密信息或知识产权，我们建议您共享一份离开组织的最佳实践检查列表。 例如，请参阅“[关于离开公司的最佳实践](/articles/best-practices-for-leaving-your-company/)”。

{% endif %}

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}

### 撤销用户的成员身份

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. 选择您想要从组织中删除的成员。 ![选择了两名成员的成员列表](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. 在成员列表上方，使用下拉菜单，然后单击 **Remove from organization（从组织中删除）**。 ![包含删除成员选项的下拉菜单](/assets/images/help/teams/user-bulk-management-options.png)
6. 查看将从组织中删除的一个或多个成员，然后单击 **Remove members（删除成员）**。 ![将被删除的成员列表和删除成员按钮](/assets/images/help/teams/confirm-remove-members-bulk.png)

### 延伸阅读

- “[从团队中删除组织成员](/articles/removing-organization-members-from-a-team)”
