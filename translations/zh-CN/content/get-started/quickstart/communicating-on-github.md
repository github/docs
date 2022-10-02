---
title: 在 GitHub 上通信
intro: '您可以在 {% data variables.product.product_name %} 中使用不同类型的讨论来讨论特定项目和更改，以及更广泛的想法或团队目标。'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/quickstart-for-communicating-on-github
  - /articles/about-discussions-in-issues-and-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-conversations-on-github
  - /github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github
  - /github/getting-started-with-github/quickstart/communicating-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Discussions
  - Fundamentals
ms.openlocfilehash: 6c7461a01cd0bc44bff93b1eb4e8a013d26bc147
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147408889'
---
## 简介

{% data variables.product.product_name %} 提供内置的协作通信工具，使您能够与社区进行密切互动。 此快速入门指南将指导您如何根据您的需求选择合适的工具。

{% ifversion discussions %}可以根据想参加的对话类型创建并参与问题、拉取请求、{% data variables.product.prodname_discussions %} 和团队讨论。
{% else %}可以根据你想参加的对话类型创建并参与问题、拉取请求和团队讨论。
{% endif %}

### {% data variables.product.prodname_github_issues %}
- 适用于讨论项目的具体细节，如漏洞报告、计划的改进和反馈。 
- 是特定于存储库的，通常有一个明确的所有者。 
- 通常被称为 {% data variables.product.prodname_dotcom %} 的错误跟踪系统。
  
### 拉取请求
- 允许您提出具体的更改。
- 允许您直接评论其他人建议的更改。 
- 是特定于仓库的。 
 
{% ifversion fpt or ghec %}
### {% data variables.product.prodname_discussions %}
-  就像一个论坛，最好用来进行合作很重要的开放式想法和讨论。 
-  可能跨越许多仓库。 
-  在代码库之外提供协作体验，从而集思广益，并创建社区知识库。
-  往往没有明确的所有者。
-  通常不会导致可操作的任务。
{% endif %}

### 团队讨论
- 可以在您的团队页面上启动跨项目的对话，不属于特定的议题或拉取请求。 不要在仓库中开启一个议题来讨论一个想法，而可以通过在团队讨论中进行对话将整个团队包括在内。
- 允许您与您的团队在一个地方就规划、分析、设计、用户研究和一般项目决策进行讨论。{% ifversion ghes or ghae %} 
- 在代码库之外提供协作体验，从而可以集思广益。
- 往往没有明确的所有者。
- 通常不会导致可操作的任务。{% endif %}

## 我应该使用哪种讨论工具？

### 议题场景

- 我想跟踪任务、增强功能和漏洞。
- 我想提交错误报告。
- 我想分享有关特定功能的反馈。
- 我想询问有关仓库文件的问题。

####               问题示例

此示例说明了 {% data variables.product.prodname_dotcom %} 用户如何在我们的文档开源仓库中创建议题，以便让我们了解错误并讨论修复方法。 

![议题实例](/assets/images/help/issues/issue-example.png)

- 用户注意到，中文版 {% data variables.product.prodname_dotcom %} 文档页面顶部横幅的蓝色使横幅中的文本不可读。 
- 用户在仓库中创建一个议题，指出了问题并提出了修复建议（即对横幅使用不同的背景色）。
- 随后进行了讨论，最终就适用的修复方法达成共识。
- 然后，参与者可以创建包含修复方法的拉取请求。

### 拉取请求场景

- 我想修复仓库中的拼写错误。
- 我想对仓库进行更改。
- 我想进行更改以修复问题。
- 我想评论其他人建议的更改。

#### 拉取请求示例

此示例说明了 {% data variables.product.prodname_dotcom %} 用户如何在我们的文档开源仓库中创建拉取请求以修复拼写错误。 

在拉取请求的“对话”选项卡，作者解释了其创建拉取请求的原因。

![拉取请求示例 - 对话选项卡](/assets/images/help/pull_requests/pr-conversation-example.png)

拉取请求的“文件更改”选项卡显示已实现的修补程序。

![拉取请求示例 - 文件已更改选项卡](/assets/images/help/pull_requests/pr-files-changed-example.png)

- 此参与者发现仓库中的拼写错误。
- 用户创建包含修复方法的拉取请求。
- 仓库维护员审查拉取请求、发表评论并合并它。

{% ifversion discussions %}
### {% data variables.product.prodname_discussions %} 的场景

- 我有一个不一定与仓库中的特定文件相关的问题。
- 我想与协作者或团队分享消息。
- 我想发起或参与开放式对话。
- 我想向社区发布公告。

#### {% data variables.product.prodname_discussions %} 示例

此示例显示了 {% data variables.product.prodname_dotcom %} 文档开源仓库的 {% data variables.product.prodname_discussions %} 欢迎帖子，并说明了团队希望如何与社区合作。

![{% data variables.product.prodname_discussions %} 示例](/assets/images/help/discussions/github-discussions-example.png)

这位社区维护员发起讨论以欢迎社区成员，并请成员自我介绍。 这个帖子营造了欢迎访客和参与者的氛围。 这个帖子还阐明，团队乐于帮助用户参与仓库。

{% endif %}
### 团队讨论场景

- 我有一个不一定与仓库中的特定文件相关的问题。
- 我想与协作者或团队分享消息。
- 我想发起或参与开放式对话。
- 我想向团队发布公告。

{% ifversion fpt or ghec %} 如你所见，团队讨论与 {% data variables.product.prodname_discussions %} 非常类似。 对于 {% data variables.product.prodname_dotcom_the_website %}，我们建议使用 {% data variables.product.prodname_discussions %} 作为对话的起点。 您可以使用 {% data variables.product.prodname_discussions %} 与任何社区在 {% data variables.product.prodname_dotcom %} 上进行协作。 如果您是组织成员，希望在您的组织或组织的团队中发起对话，您应该使用团队讨论。
{% endif %}

#### 团队讨论示例

此示例显示 `octo-team` 团队的团队帖子。

![团队讨论示例](/assets/images/help/projects/team-discussions-example.png)

`octocat` 团队成员发布了团队讨论，告知团队各种事项：
- 一个叫 Mona 的团队成员开始了远程游戏活动。
- 有一篇博文描述了团队如何使用 {% data variables.product.prodname_actions %} 来生成文档。
- 有关 April All Hands 的材料现在可供所有团队成员查看。

## 后续步骤

这些示例向您展示了如何决定哪种工具是您在 {% data variables.product.product_name %} 上进行对话的最佳工具。 但这仅仅是个开始；您可以做更多的工作来根据需求定制这些工具。

例如，对于议题，您可以用标签标记议题以支持更快的搜索，并创建议题模板以帮助参与者打开有意义的议题。 有关详细信息，请参阅“[关于问题](/github/managing-your-work-on-github/about-issues#working-with-issues)”和“[关于问题和拉取请求模板](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)”。

对于拉取请求，如果您提议的更改仍在进行中，您可以创建拉取请求草稿。 草稿拉取请求在标记为可供审查之前无法合并。 有关详细信息，请参阅“[关于拉取请求](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)”。

{% ifversion discussions %}对于 {% data variables.product.prodname_discussions %}，可以{% ifversion fpt or ghec %}设置行为准则并{% endif %}将包含社区重要信息的讨论置顶。 有关详细信息，请参阅“[关于讨论](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”。
{% endif %}

对于团队讨论，您可以编辑或删除团队页面上的讨论，还可以为团队讨论配置通知。 有关详细信息，请参阅“[关于团队讨论](/organizations/collaborating-with-your-team/about-team-discussions)”。
