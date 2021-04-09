---
title: 评论拉取请求
redirect_from:
  - /articles/adding-commit-comments/
  - /articles/commenting-on-the-diff-of-a-pull-request/
  - /articles/commenting-on-differences-between-files/
  - /articles/commenting-on-a-pull-request
intro: '在仓库中打开拉取请求后，协作者或团队成员可以评论两个指定分支之间的文件比较，或者对整个项目做出总体评论。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 拉取请求
---

### 关于拉取请求评论

您可以在拉取请求的 **Conversation（对话）**选项卡上发表评论，以留下总评、疑问或提议。 您还可以提出拉取请求的作者可直接从您的注释中应用的更改。

![拉取请求对话](/assets/images/help/pull_requests/conversation.png)

也可以采用单独行注释的形式或者作为[拉取请求审查](/articles/about-pull-request-reviews)的一部分，在拉取请求的 **Files changed（已更改文件）**选项卡上对文件的特定部分做出评论。 添加行注释是讨论有关实现的问题或向作者提供反馈的好方法。

有关向拉取请求审查添加行注释的更多信息，请参阅“[审查拉取请求中提议的更改](/articles/reviewing-proposed-changes-in-a-pull-request)”。

{% note %}

**注：**如果您通过电子邮件回复拉取请求，则您的评论将被添加到 **Conversation（对话）**选项卡上，不会成为拉取请求审查的一部分。

{% endnote %}

要回复现有行注释，您需要导航到 **Conversation（对话）**选项卡或 **Files changed（已更改文件）**选项卡上的评论，然后在其下方添加另一条行注释。

{% tip %}

**提示：**
- 拉取请求评论支持与 {% data variables.product.product_name %} 上的一般评论相同的[格式](/categories/writing-on-github)，例如 @提及、表情符号和引用。
- 您可以在 **Files changed（已更改文件）**选项卡中向拉取请求的评论[添加反应](/articles/about-conversations-on-github#reacting-to-ideas-in-comments)。

{% endtip %}

### 向拉取请求添加行注释

{% data reusables.repositories.sidebar-pr %}
2. 1. 在拉取请求列表中，单击要留下行注释的拉取请求。
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. 完成后，单击 **Add single comment（添加单个评论）**。 ![内联评论窗口](/assets/images/help/commits/inline-comment.png)

任何关注拉取请求或仓库的人都会收到有关您评论的通知。

{% data reusables.pull_requests.resolving-conversations %}

### 延伸阅读

- “[创建指向代码段的永久链接](/articles/creating-a-permanent-link-to-a-code-snippet/)”
{% if currentVersion == "free-pro-team@latest" %}- "[举报滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”
{% endif %}
