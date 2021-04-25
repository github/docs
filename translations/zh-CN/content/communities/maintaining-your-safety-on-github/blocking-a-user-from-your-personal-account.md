---
title: 阻止用户访问您的个人帐户
intro: '您可以阻止用户以拒绝他们访问您的活动和仓库，以及阻止他们向您发送通知。'
redirect_from:
  - /articles/blocking-a-user-from-your-personal-account
  - /github/building-a-strong-community/blocking-a-user-from-your-personal-account
versions:
  free-pro-team: '*'
topics:
  - 社区
---

### 关于阻止用户

您可以在您的帐户设置中或从用户的个人资料中阻止用户。 {% data variables.product.prodname_dotcom %} 在您阻止用户时不会通知用户。 如果要避免与您阻止的人参与同一个项目，您可以选择针对被阻止用户先前参与的任何仓库显示警告。 更多信息请参阅“[在帐户设置中阻止用户](#blocking-a-user-in-your-account-settings)”。 您仍然可以在共享空间中看到被阻止用户的活动，被阻止的用户也可以删除他们现有的内容。

{% tip %}

**提示：** 如果您因为言辞激烈的对话而阻止用户，请考虑锁定对话，以限制为只有协作者才能评论。 更多信息请参阅“[锁定对话](/communities/moderating-comments-and-conversations/locking-conversations)”。

{% endtip %}

您阻止用户后：
- 该用户停止关注您
- 该用户停止关注并取消固定您的仓库
- 用户无法加入您是所有者的任何组织
- 该用户的星标和议题分配从您的仓库中删除
- 该用户对您仓库中的讨论或评论的投票将被删除
- 该用户在您的仓库中的协作者身份被删除
- 该用户对您仓库的贡献不再计为他们的贡献
- 您对被阻止用户的仓库的贡献不再计为您的贡献
- 您在他们仓库协作者的身份被删除
- 他们与您的赞助关系被取消
- 任何对被阻止用户的待处理仓库或帐户继承者邀请或来自该用户的邀请都被取消

您阻止用户后，他们无法：
- 向您发送任何通知，包括 [@提及](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)您的用户名
- 评论或编辑您创建的议题或拉取请求
- 回应您对议题、拉取请求和提交的评论
- 关注您或在其活动馈送中查看您的内容
- 将您分配到议题或拉取请求
- 邀请您成为其仓库的协作者
- 邀请您作为安全通告的协作者
- 在评论中交叉引用您的仓库
- 复刻、关注、固定您的仓库或对其标星
- 赞助您

在您拥有的仓库中，被阻止的用户也不能：
- 打开议题
- 发送、关闭或合并拉取请求
- 对议题、拉取请求或提交发表评论
- 添加或编辑 wiki 页面

### 在您的帐户设置中阻止用户

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.blocked_users %}
3. 在“Block a user（阻止用户）”下，键入您要阻止的用户的用户名，然后单击 **Block user（阻止用户）**。 ![用户名字段和阻止按钮](/assets/images/help/settings/user-settings-block-user.png)
4. （可选）要在您访问被阻止用户参与的仓库时显示警告，请选择 **Warn me when a blocked user is a prior contributor to a repository（在访问被阻止用户先前参与的仓库时警告我）**。 ![关于被阻止用户的警告选项](/assets/images/help/settings/warn-block-user.png)

### 从用户的个人资料页面阻止用户

{% data reusables.profile.user_profile_page_navigation %}
{% data reusables.profile.user_profile_page_block_or_report %}
3. 单击 **Block user（阻止用户）**。 ![包含阻止用户或举报滥用选项的模态框](/assets/images/help/profile/profile-blockuser.png)

{% note %}

如果您受到骚扰，请使用 {% data variables.contact.report_abuse %} 联系我们。 {% data reusables.policies.abuse %}

{% endnote %}

### 延伸阅读

- “[查看您阻止访问您个人帐户的用户](/communities/maintaining-your-safety-on-github/viewing-users-youve-blocked-from-your-personal-account)”
- “[解除阻止用户访问您的个人帐户](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-personal-account)”
- “[阻止用户访问组织](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)”
- “[解除阻止用户访问组织](/communities/maintaining-your-safety-on-github/unblocking-a-user-from-your-organization)”
- “[举报滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
- “[限制仓库中的交互](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)”
