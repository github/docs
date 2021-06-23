---
title: 主持讨论
intro: 您可以通过将评论标记为答案、锁定或解锁讨论以及将问题转化为讨论来促进健康的协作。 以及编辑或删除与社区行为准则不一致的评论、讨论和类别。
permissions: People with triage access to a repository can moderate discussions in the repository.
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### 关于主持讨论

{% data reusables.discussions.about-discussions %}如果您对仓库具有分类权限，便可通过将评论标记为答案、锁定不再有用或对社区造成损害的讨论，以及在想法仍处于开发的早期阶段时将问题转换为讨论，从而帮助主持项目的讨论。

### 将评论标记为答案

{% data reusables.discussions.marking-a-comment-as-an-answer %}

### 锁定讨论

当整个对话没有建设性或者违反社区的行为准则或 {% data variables.product.prodname_dotcom %} 的[社区指导方针](/github/site-policy/github-community-guidelines)时，锁定对话是明智之举。 您还可以锁定对话，以防止对要用作社区公告的讨论发表评论。 锁定对话时，对仓库具有写入权限的人仍然可以对讨论发表评论。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
1. 在讨论列表中，单击要锁定的讨论。 ![锁定讨论](/assets/images/help/discussions/unanswered-discussion.png)
1. 在讨论的右侧边缘单击 **Lock conversation（锁定对话）**。
1. 阅读有关锁定对话的信息，然后单击 **Lock conversation on this discussion（在此讨论中锁定对话）**。
1. 当您准备好解锁对话时，单击 **Unlock conversation（解锁对话）**，然后单击 **Unlock conversation on this discussion（解锁此讨论上的对话）**。

### 将议题转换为讨论

在将议题转换为讨论时，会使用议题中的内容自动创建讨论。 对仓库拥有写入权限的人可以根据标签批量转换议题。 更多信息请参阅“[管理仓库中的讨论](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. 在议题列表中，单击您想要转换的议题。
1. 在议题的右侧边缘单击 **Convert to discussion（转换为讨论）**。
1. 选择 **Choose a category（选择类别）**下拉菜单，然后单击讨论的类别。
1. 单击 **I understand, convert this issue to a discussion（我了解，请将此议题转换为讨论）**。
