---
title: 锁定对话
intro: 仓库所有者和协作者以及对仓库具有写入权限的人员，能够永久或临时锁定关于议题、拉取请求和提交的对话，以缓和激烈的交互。
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 社区
---
当整个对话没有建设性或者违反社区的行为准则{% if currentVersion == "free-pro-team@latest" %} 或 GitHub 的[社区指导方针](/articles/github-community-guidelines){% endif %} 时，锁定对话是明智之举。 在锁定对话时，也可公开说明锁定的原因。

锁定对话会创建对仓库具有读取权限的所有人可见的时间表事件。 但对话锁定者的用户名只有能够写入仓库的人可见。 对于没有写入权限的任何人，时间表事件会匿名化。

![已锁定对话的匿名化时间表事件](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

当对话锁定时，仅[具有写入权限的人员](/articles/repository-permission-levels-for-an-organization/)以及[仓库所有者和协作者](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-user-account)才可添加、隐藏和删除评论。

要搜索仓库中未存档的已锁定对话，可以使用搜索限定符 `is:locked` 和 `archived:false`。 对话在存档的仓库中会自动锁定。 更多信息请参阅“[搜索议题和拉取请求](/articles/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked)”。

1. 也可选择撰写注释，解释您锁定对话的原因。
2. 在议题或拉取请求的右边，或者提交页面中注释框的上方，单击 **Lock conversation（锁定对话）**。 ![锁定对话链接](/assets/images/help/repository/lock-conversation.png)
3. 可以选择锁定对话的原因。 ![锁定对话的原因菜单](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. 阅读有关锁定对话的信息，然后单击 **Lock conversation on this issue（锁定关于此议题的对话）**、**Lock conversation on this pull request（锁定关于此拉取请求的对话）**或 **Lock conversation on this commit（锁定关于此提交的对话）**。 ![确定锁定并说明原因对话框](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. 准备好解锁对话时，单击 **Unlock conversation（解锁对话）**。 ![解锁对话链接](/assets/images/help/repository/unlock-conversation.png)

### 延伸阅读

- "[设置健康参与的项目](/articles/setting-up-your-project-for-healthy-contributions)"
- "[使用模板鼓励有用的议题和拉取请求](/github/building-a-strong-community/using-templates-to-encourage-useful-issues-and-pull-requests)"
- "[管理破坏性评论](/articles/managing-disruptive-comments)"{% if currentVersion == "free-pro-team@latest" %}
- “[在 {% data variables.product.prodname_dotcom %} 上维护您的安全](/github/building-a-strong-community/maintaining-your-safety-on-github)”
- “[举报滥用或垃圾邮件](/articles/reporting-abuse-or-spam)”
- “[限制仓库中的交互](/github/building-a-strong-community/limiting-interactions-in-your-repository)”
{% endif %}
