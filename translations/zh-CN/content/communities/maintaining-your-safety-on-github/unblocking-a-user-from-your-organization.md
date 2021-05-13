---
title: 取消阻止用户对组织的访问
intro: 组织所有者可以取消阻止以前阻止的用户，恢复其对组织仓库的访问权限。
redirect_from:
  - /articles/unblocking-a-user-from-your-organization
  - /github/building-a-strong-community/unblocking-a-user-from-your-organization
versions:
  free-pro-team: '*'
topics:
  - Community
---

取消阻止用户对组织的访问后，他们将能够为组织的仓库做出贡献。

如果您选择在特定的时间内阻止用户，则该时间段结束后将自动取消阻止用户。 更多信息请参阅“[阻止用户访问组织](/articles/blocking-a-user-from-your-organization)”。

{% tip %}

**提示**：您在阻止用户访问组织时删除的任何设置（例如协作者状态、星号和关注），在取消阻止该用户后将不会恢复。

{% endtip %}

### 在评论中取消阻止用户

1. 导航到您要取消阻止其作者的评论。
2. 在评论的右上角，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **Unblock user（取消阻止用户）**。 ![显示取消阻止用户选项的水平烤肉串图标和评论审核菜单](/assets/images/help/repository/comment-menu-unblock-user.png)
3. 要确认您想要取消阻止用户，请单击 **Okay（确定）**。

### 在组织设置中取消阻止用户

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.block_users %}
5. 在“Blocked users（已阻止的用户）”下您想要取消阻止的用户旁边，单击 **Unblock（取消阻止）**。 ![取消阻止用户按钮](/assets/images/help/organizations/org-unblock-user-button.png)

### 延伸阅读

- “[阻止用户访问组织](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”
- “[阻止用户访问您的个人帐户](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)”
- “[解除阻止用户访问您的个人帐户](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)”
- “[举报滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
