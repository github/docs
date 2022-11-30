---
title: 评论拉取请求
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments
  - /articles/commenting-on-the-diff-of-a-pull-request
  - /articles/commenting-on-differences-between-files
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
intro: 在仓库中打开拉取请求后，协作者或团队成员可以评论两个指定分支之间的文件比较，或者对整个项目做出总体评论。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
ms.openlocfilehash: eb1b80fa6088bc083f0b2006a2c894a820cd6c10
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578954'
---
## 关于拉取请求评论

可以在拉取请求的“对话”选项卡上添加注释，留下一般性注释、疑问或提议。 您还可以提出拉取请求的作者可直接从您的注释中应用的更改。

![拉取请求对话](/assets/images/help/pull_requests/conversation.png)

还可以在拉取请求的“已更改的文件”选项卡上以单行注释的形式或作为[拉取请求审查](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)的一部分对文件的特定部分进行注释。 添加行注释是讨论有关实现的问题或向作者提供反馈的好方法。

有关如何在拉取请求审查中添加行注释的详细信息，请参阅“[审查拉取请求中的建议更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”。

{% note %}

注意：如果通过电子邮件回复拉取请求，则会将注释添加到“对话”选项卡中，并且不会成为拉取请求审查的一部分 。

{% endnote %}

若要回复现有的行注释，需要导航到“对话”选项卡或“已更改的文件”选项卡上的注释，并在其下方添加额外的行注释 。

{% tip %}

**提示：**
- 拉取请求注释支持与 {% data variables.product.product_name %} 上的常规注释相同的[格式](/categories/writing-on-github)，例如 @mentions、表情符号和引用。
- 可以在“已更改的文件”选项卡中添加对拉取请求中注释的回复。

{% endtip %}

## 向拉取请求添加行注释

{% data reusables.repositories.sidebar-pr %}
2. 1\. 在拉取请求列表中，单击要留下行注释的拉取请求。
{% data reusables.repositories.changed-files %} {% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
5. 完成后，单击“添加单个注释”。
  ![内联注释窗口](/assets/images/help/commits/inline-comment.png)

任何关注拉取请求或仓库的人都会收到有关您评论的通知。

{% data reusables.pull_requests.resolving-conversations %}

## 延伸阅读

- “[在 GitHub 上写作](/github/writing-on-github)”{% ifversion fpt or ghec %}-“[报告滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”{% endif %}
