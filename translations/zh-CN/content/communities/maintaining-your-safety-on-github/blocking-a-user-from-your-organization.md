---
title: 阻止用户访问组织
intro: 组织所有者可阻止用户以解除该用户在组织仓库中进行协作的能力。
redirect_from:
  - /articles/blocking-a-user-from-your-organization
  - /github/building-a-strong-community/blocking-a-user-from-your-organization
versions:
  free-pro-team: '*'
topics:
  - 社区
---

您可以从组织的设置中或从用户发表的特定评论中阻止用户。 在评论中阻止用户时，您可以选择向该用户发送通知，以告知他们已被阻止并说明原因。 否则，用户不会直接收到您已阻止他们的通知。 被阻止的用户仍然可以删除其现有内容。

阻止用户时，您可以选择无限期或在特定时间段内阻止他们。 如果在特定时间段内阻止某人，则所选时间结束后会自动解除对他们的阻止。 如果无限期阻止某人，您可以随时手动解除阻止。 更多信息请参阅“[解除阻止用户对组织的访问](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)”。

{% tip %}

**提示：** 如果您因为言辞激烈的对话而阻止用户，请考虑锁定对话，以限制为只有协作者才能评论。 更多信息请参阅“[锁定对话](/communities/moderating-comments-and-conversations/locking-conversations)”。

{% endtip %}

阻止用户访问组织时：
- 该用户停止关注您组织的仓库。
- 该用户的星标和议题分配从您的仓库中删除
- 该用户对您组织仓库中的讨论或评论的投票将被删除
- 该用户在您组织仓库中的协作者身份被删除
- 该用户对您组织的仓库的贡献不再计为他们的贡献
- 任何对被阻止用户的待处理仓库或组织邀请都被取消

阻止用户访问组织后，他们无法：
- 在评论中交叉引用您组织的仓库
- 复刻、关注、固定您组织的仓库或对其标星

在您组织的仓库中，被阻止的用户也不能：
- 打开议题
- 发送、关闭或合并拉取请求
- 对议题、拉取请求或提交发表评论
- 添加或编辑 wiki 页面

### 在评论中阻止用户

1. 导航到您要阻止其作者的评论。
2. 在评论的右上角，单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击 **Block user（阻止用户）**。 ![显示阻止用户选项的水平烤肉串图标和评论审核菜单](/assets/images/help/repository/comment-menu-block-user.png)
3. 如果要设置阻止的时限，请使用 Block user（阻止用户）下拉菜单，选择要阻止该用户的时间段。 ![阻止用户下拉菜单中的阻止时限](/assets/images/help/organizations/org-block-options-menu-from-comment.png)
4. 如果要隐藏该用户在组织中发表的所有评论，请选择 **Hide this user's comments（隐藏此用户的评论）**并选择原因。 ![在阻止用户下拉菜单中发送通知](/assets/images/help/organizations/org-block-options-menu-hide-user-comments.png)
5. 如果要将阻止的原因告知用户，请选择 **Send a notification to this user（向此用户发送通知）**。 ![在阻止用户下拉菜单中发送通知](/assets/images/help/organizations/org-block-options-menu-send-notification.png)
6. 要阻止用户，请单击 **Block user from organization（阻止用户访问组织）**或 **Block user from organization and send message（阻止用户访问组织并发送消息）**。 ![阻止用户按钮](/assets/images/help/organizations/org-block-user-button-in-comment.png)

### 在组织设置中阻止用户

1. 要阻止组织成员，请先从组织中[删除用户](/articles/removing-a-member-from-your-organization) 。
{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.block_users %}
6. 在“Block a user（阻止用户）”下，键入要阻止的用户的用户名。 ![用户名字段](/assets/images/help/organizations/org-block-username-field.png)
7. 如果要设置阻止的时限，请使用 Block options（阻止选项）下拉菜单，选择要阻止该用户的时间段。 ![阻止选项下拉菜单](/assets/images/help/organizations/org-block-options-menu.png)
8. 单击 **Block user（阻止用户）**。 ![阻止按钮](/assets/images/help/organizations/org-block-user-button.png)

### 延伸阅读

- “[查看被阻止访问组织的用户](/communities/maintaining-your-safety-on-github/viewing-users-who-are-blocked-from-your-organization)”
- “[解除阻止用户访问组织](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)”
- “[阻止用户访问您的个人帐户](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-personal-account)”
- “[解除阻止用户访问您的个人帐户](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)”
- “[举报滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
