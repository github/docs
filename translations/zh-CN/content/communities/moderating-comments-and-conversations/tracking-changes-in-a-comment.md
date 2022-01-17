---
title: 跟踪评论中的更改
intro: 您可以查看评论的编辑历史记录或从评论的编辑历史记录中删除敏感信息。
redirect_from:
  - /articles/tracking-changes-in-a-comment
  - /github/building-a-strong-community/tracking-changes-in-a-comment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: 跟踪评论更改
---

## 查看评论的编辑历史记录详细信息

对仓库具有读取权限的任何人都可查看评论的编辑历史记录。

1. 导航到您想要查看编辑历史记录的评论。
{% data reusables.repositories.edited-comment-list %}

## 从评论的历史记录中删除敏感信息

评论作者和具有仓库写入权限的任何人都可以删除评论编辑历史记录中的敏感信息。

当您从评论的编辑历史记录中删除敏感信息时，进行编辑的人员及其进行编辑的时间仍在评论历史记录中显示，但编辑的内容不再可用。

1. 导航到您要从编辑历史记录删除敏感信息的评论。
{% data reusables.repositories.edited-comment-list %}
3. 在编辑历史记录窗口的右上角，单击 **Options（选项）**。 然后单击 **Delete revision from history（从历史记录中删除修订）**以删除显示所添加内容的差异。 ![删除评论编辑详细信息](/assets/images/help/repository/delete-comment-edit-details.png)
4. 要确认删除，请单击 **OK（确定）**。

## 延伸阅读

{% ifversion fpt or ghec %}-“[举报滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”{% endif %}
- “[编辑评论](/articles/editing-a-comment)”
