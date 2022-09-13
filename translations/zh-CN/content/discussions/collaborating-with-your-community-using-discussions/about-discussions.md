---
title: 关于讨论
intro: '使用讨论来提问和回答问题、共享信息、发布公告以及进行或参与有关 {% data variables.product.product_name %} 上项目的对话。'
versions:
  feature: discussions
ms.openlocfilehash: 4ac74c35b34310b62595bd5ac9a5588a7ef3476a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147433410'
---
## 关于 {% data variables.product.prodname_discussions %}

使用 {% data variables.product.prodname_discussions %}，项目的社区可以在项目存储库或组织中创建和参与对话。 讨论使项目的维护者、参与者和访问者能够在没有第三方工具的情况下，在中心位置收集和完成以下目标。

- 共享公告和信息、收集反馈、计划和决策
- 提出问题、讨论和回答问题，以及将讨论标记为已回答
- 创建投票以衡量社区意见
- 为访客和贡献者营造一种邀请的氛围，讨论目标、发展、管理和工作流程

![仓库的讨论选项卡](/assets/images/help/discussions/hero.png)

你可以使用存储库讨论来讨论特定于存储库的主题。 如果项目跨越多个存储库，则可以使用组织讨论来讨论不特定于组织中单个存储库的主题。

您不需要像关闭议题或拉取请求那样结束讨论。

如果存储库管理员或项目维护者为存储库启用 {% data variables.product.prodname_discussions %}，则任何有权访问存储库的人都可以创建和参与存储库的讨论。 如果组织所有者为组织启用 {% data variables.product.prodname_discussions %}，则查看源存储库的任何人都可以创建组织讨论。

仓库管理员和项目维护者可以管理仓库中的讨论和讨论类别，并固定讨论以提高讨论的可见性。 主持人和协作者可以将评论标记为答案、锁定讨论并将议题转换为讨论。 同样，对于组织讨论，源存储库中用户的角色决定了用户与组织讨论的交互方式。 有关详细信息，请参阅“[组织的存储库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

有关讨论管理的详细信息，请参阅“[管理讨论](/discussions/managing-discussions-for-your-community/managing-discussions)”。

## 关于投票

可以在投票类别中创建投票，以衡量对新想法和项目方向的兴趣。 对存储库具有读取权限的任何人都可以创建投票、投票并查看结果。{% ifversion fpt or ghec %}已注销的用户可以在公共存储库中查看投票结果。{% endif %}

投票需要一个问题和至少两个选项。 最多可以添加 8 个选项，长度不超过 128 个字符。 

投票者不能改变他们的投票。 编辑投票将重置已投出的任何投票。

有关创建投票的详细信息，请参阅“[创建投票](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll)”。

## 关于讨论组织

您可以使用类别和标签组织讨论。

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

对于采用问题/答案格式的讨论，讨论中的单个评论可以标记为讨论的答案。 {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

有关详细信息，请参阅“[管理讨论的类别](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”。

{% data reusables.discussions.you-can-label-discussions %}

## {% data variables.product.prodname_discussions %} 的最佳实践

作为社区成员或维护者，发起讨论以提出问题或讨论影响社区的信息。 有关详细信息，请参阅“[使用讨论与维护人员协作](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions)”。

参与讨论、提出问题和回答问题、提供反馈，以及与项目的社区互动。 有关详细信息，请参阅“[参与讨论](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)”。

您可以突出讨论社区成员之间重要、有益或堪称典范的对话。 有关详细信息，请参阅“[管理讨论](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)”。

{% data reusables.discussions.you-can-convert-an-issue %} 有关详细信息，请参阅“[主持讨论](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)”。

## 分享反馈

您可以与 {% data variables.product.company_short %} 分享您对 {% data variables.product.prodname_discussions %} 的反馈。 若要加入对话，请参阅 [{% data variables.product.prodname_github_community %} 讨论](https://github.com/orgs/community/discussions/categories/discussions)。

## 延伸阅读

- [关于在 {% data variables.product.prodname_dotcom %} 上编写和设置格式](/github/writing-on-github/about-writing-and-formatting-on-github)
- [搜索讨论](/search-github/searching-on-github/searching-discussions)
- [关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications)
- [调解评论和对话](/communities/moderating-comments-and-conversations){% ifversion fpt or ghec %}
- [维护 {% data variables.product.prodname_dotcom %} 上的安全](/communities/maintaining-your-safety-on-github){% endif %}
