---
title: 恢复组织的前成员
intro: '组织所有者可以{% if currentVersion == "free-pro-team@latest" %}邀请前组织成员重新加入{% else %}将前成员添加到{% endif%}您的组织，并可选择是否恢复该人员以前的角色、访问权限、复刻和设置。'
redirect_from:
  - /articles/reinstating-a-former-member-of-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: '组织所有者可以恢复组织的前成员。'
---

### 关于成员恢复

如果您[从组织中删除用户](/articles/removing-a-member-from-your-organization){% if currentVersion == "github-ae@latest" %} 或{% else %}、{% endif %}[将组织成员转换为外部协作者](/articles/converting-an-organization-member-to-an-outside-collaborator){% if currentVersion != "github-ae@latest" %} 或者由于您[要求成员和外部协作者启用双重身份验证 (2FA)](/articles/requiring-two-factor-authentication-in-your-organization){% endif %} 而从组织中删除用户，则用户的访问权限和设置将保存三个月。 如果您在该时间范围内将用户{% if currentVersion =="free-pro-team@latest" %}邀请{% else %}添加{% endif %}回组织，则可以恢复该用户的权限。

{% data reusables.two_fa.send-invite-to-reinstate-user-before-2fa-is-enabled %}

恢复前组织成员时，您可以恢复以下各项：
 - 用户在组织中的角色
 - 组织拥有的仓库的任何私有复刻
 - 组织团队的成员身份
 - 组织仓库以前的访问权限和权限
 - 组织仓库的星标
 - 组织中的议题分配
 - 仓库订阅（关注、不关注或忽略仓库活动的通知设置）

{% if enterpriseServerVersions contains currentVersion %}
如果组织成员由于未使用双因素身份验证已从组织中删除，并且您的组织仍要求成员使用 2FA，则前成员必须启用双因素身份验证，然后才能恢复其成员身份。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
如果您的组织采用付费的每用户订阅，则必须有未使用的许可才可恢复前组织成员。 更多信息请参阅“[关于每用户定价](/articles/about-per-user-pricing)”。 {% data reusables.organizations.org-invite-expiration %}
{% endif %}

### 恢复组织的前成员

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
{% data reusables.organizations.reinstate-user-type-username %}
{% if currentVersion == "free-pro-team@latest" %}
6. 选择是恢复该人员在组织中以前的权限还是清除其以前的权限并设置新的访问权限，然后单击 **Invite and reinstate（邀请并恢复）**或 **Invite and start fresh（邀请并重新开始）**。 ![选择是否恢复信息](/assets/images/help/organizations/choose_whether_to_restore_org_member_info.png)
{% else %}
6. 选择是恢复该人员在组织中以前的权限还是清除其以前的权限并设置新的访问权限，然后单击 **Add and reinstate（添加并恢复）**或 **Add and start fresh（添加并重新开始）**。 ![选择是否恢复权限](/assets/images/help/organizations/choose_whether_to_restore_org_member_info_ghe.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
7. 如果已清除前组织成员以前的权限，请为该用户选择一个角色，并（可选）将其添加到某些团队，然后单击 **Send invitation（发送邀请）**。 ![角色和团队选项及发送邀请按钮](/assets/images/help/organizations/add-role-send-invitation.png)
{% else %}
7. 如果已清除前组织成员以前的权限，请为该用户选择一个角色，并（可选）将其添加到某些团队，然后单击 **Add member（添加成员）**。 ![角色和团队选项及添加成员按钮](/assets/images/help/organizations/add-role-add-member.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### 延伸阅读

- "[将组织成员转换为外部协作者](/articles/converting-an-organization-member-to-an-outside-collaborator)"
