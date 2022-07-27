---
title: 主持讨论
intro: 'You can promote healthy collaboration by marking comments as answers, locking or unlocking discussions, converting issues to discussions, and editing or deleting comments, discussions, and categories that don''t align with your{% ifversion fpt or ghec %} community''s code of conduct{% elsif ghes > 3.5 %} organization''s contribution guidelines{% endif %}.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
---


## 关于主持讨论

{% data reusables.discussions.about-discussions %} If you have triage permissions for a repository, you can help moderate that repository's discussions by marking comments as answers, locking discussions that are no longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. 同样，如果您具有组织讨论的源存储库的分类权限，则可以主持该组织的讨论。

## 将评论标记为答案

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## 锁定讨论

当整个对话没有建设性或者违反社区的行为准则或 {% data variables.product.prodname_dotcom %} 的[社区指导方针](/free-pro-team@latest/github/site-policy/github-community-guidelines)时，锁定对话是明智之举。 您还可以锁定对话，以防止对要用作社区公告的讨论发表评论。 锁定对话后，对存储库或组织讨论的源存储库具有写入访问权限的人员仍可以对讨论进行评论。

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. 在讨论列表中，单击要锁定的讨论。 ![锁定讨论](/assets/images/help/discussions/unanswered-discussion.png)
1. 在讨论的右侧边缘单击 **Lock conversation（锁定对话）**。
1. 阅读有关锁定对话的信息，然后单击 **Lock conversation on this discussion（在此讨论中锁定对话）**。
1. 当您准备好解锁对话时，单击 **Unlock conversation（解锁对话）**，然后单击 **Unlock conversation on this discussion（解锁此讨论上的对话）**。

## 将议题转换为讨论

在将议题转换为讨论时，会使用议题中的内容自动创建讨论。 对存储库或组织讨论的源存储库具有写入访问权限的人员可以根据标签批量转换议题。 更多信息请参阅“[管理讨论](/discussions/managing-discussions-for-your-community/managing-discussions)”。

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.repositories.sidebar-issues %}
1. 在议题列表中，单击您想要转换的议题。
1. 在议题的右侧边缘单击 **Convert to discussion（转换为讨论）**。
1. 选择 **Choose a category（选择类别）**下拉菜单，然后单击讨论的类别。
1. 单击 **I understand, convert this issue to a discussion（我了解，请将此议题转换为讨论）**。
