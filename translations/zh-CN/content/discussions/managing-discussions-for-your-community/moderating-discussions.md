---
title: 主持讨论
intro: '可以通过将评论标记为答案、锁定或解锁讨论、将问题转换为讨论，以及编辑或删除不符合{% ifversion fpt or ghec %}社区行为准则{% elsif ghes > 3.5 %}和组织的参与指南{% endif %}的评论、讨论和类别，来促进正常的协作。'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  feature: discussions
ms.openlocfilehash: 7d128c9beadb190f9c22c345cf0c3124b1dfcfcb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410113'
---
## 关于主持讨论

{% data reusables.discussions.about-discussions %}如果你对存储库具有会审权限，便可通过将评论标记为答案、锁定不再有用或对社区造成损害的讨论，以及在想法仍处于开发早期阶段时将问题转换为讨论，从而帮助主持存储库的讨论。 同样，对于组织讨论，如果你对源存储库具有会审权限，则可以为该组织主持讨论。

## 将评论标记为答案

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## 锁定讨论

如果整个对话没有建设性或者违反了社区的行为准则或 {% data variables.product.prodname_dotcom %} 的[社区准则](/free-pro-team@latest/github/site-policy/github-community-guidelines)，锁定对话是明智之举。 您还可以锁定对话，以防止对要用作社区公告的讨论发表评论。 锁定对话后，对存储库或组织讨论的源存储库具有写入访问权限的人员仍能够对讨论发表评论。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. 在讨论列表中，单击要锁定的讨论。
  ![锁定讨论](/assets/images/help/discussions/unanswered-discussion.png)
1. 单击讨论右侧的“锁定对话”。
1. 阅读有关锁定对话的信息，然后单击“锁定此讨论的对话”。
1. 准备好解锁对话时，请单击“解锁对话”，然后单击“解锁此讨论的对话” 。

## 将议题转换为讨论

在将议题转换为讨论时，会使用议题中的内容自动创建讨论。 对存储库或组织讨论的源存储库具有写入访问权限的人员可以根据标签批量转换问题。 有关详细信息，请参阅“[管理讨论](/discussions/managing-discussions-for-your-community/managing-discussions)”。

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.repositories.sidebar-issues %}
1. 在议题列表中，单击您想要转换的议题。
1. 单击问题右侧的“转换为讨论”。
1. 选择“选择类别”下拉菜单，然后单击某个类别进行讨论。
1. 单击“我明白，将此问题转化为讨论”。
