---
title: 关于议题
intro: '使用 {% data variables.product.prodname_github_issues %} 追踪在 {% data variables.product.company_short %} 上的想法、反馈、任务或缺陷。'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
ms.openlocfilehash: e3352dbbc88da85680885b728dcb393d5ae3579f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422730'
---
## 集成 GitHub

议题让您可以在进行开发的 {% data variables.product.company_short %} 上跟踪您的工作。 当您在议题中提到另一个议题或拉取请求时，该议题的时间表会反映交叉参考，以便你能够跟踪相关的工作。 要表示工作正在进行中，您可以将议题链接到拉取请求。 当拉取请求合并时，链接的议题会自动关闭。

有关关键字的详细信息，请参阅“[将拉取请求链接到问题](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)”。

## 快速创建议题

议题可以通过多种方式创建，因此您可以为工作流程选择最方便的方法。 例如，你可以从存储库创建问题、{% ifversion fpt or ghec %} 任务列表中的项目、{% endif %} 项目中的注释、问题或拉取请求中的评论、特定代码行或 URL 查询。 您也可以从选择的平台创建议题：通过 Web 界面、{% data variables.product.prodname_desktop %}、{% data variables.product.prodname_cli %}、GraphQL 和 REST API 或 {% data variables.product.prodname_mobile %}。 有关详细信息，请参阅“[创建问题](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)”。

## 跟踪工作

您可以通过项目组织议题并排定优先级。 {% ifversion fpt or ghec %}要跟踪作为较大问题一部分的问题，你可以使用任务列表。{% endif %} 要对相关问题进行分类，你可以使用标签和里程碑。

有关项目的详细信息，请参阅{% ifversion projects-v2 %}“[关于项目](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)”。 {% else %}[使用项目板组织工作](/issues/organizing-your-work-with-project-boards){% endif %} {% ifversion fpt or ghec %}有关任务列表的详细信息，请参阅“[关于任务列表](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”。 {% endif %}有关标签和里程碑的详细信息，请参阅“[使用标签和里程碑跟踪工作](/issues/using-labels-and-milestones-to-track-work)”。

## 掌握最新动态

为保持更新议题中的最新评论，您可以订阅议题以接收关于最新评论的通知。 要快速查找指向您订阅的最新议题的链接，请访问仪表板。 有关详细信息，请参阅“[关于通知](/github/managing-subscriptions-and-notifications-on-github/about-notifications)”和“[关于个人仪表板](/articles/about-your-personal-dashboard)”。

## 社区管理

为了帮助参与者打开有意义的问题，提供你需要的信息，你可以使用{% ifversion fpt or ghec %}问题表单和 {% endif %}问题模板。 有关详细信息，请参阅“[使用模板鼓励创建有用的问题和拉取请求](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”。

{% ifversion fpt or ghec %}为了维护健康的社区，你可以报告违反 {% data variables.product.prodname_dotcom %} [社区指导方针](/free-pro-team@latest/github/site-policy/github-community-guidelines)的评论。 有关详细信息，请参阅“[报告滥用或垃圾邮件](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)”。{% endif %}

## 高效沟通

你可以在议题中 @mention 能访问你的存储库的协作者，以提请他们注意评论。 要链接同一存储库中的相关问题，可以键入 `#`，后接问题标题的一部分，然后单击要链接的问题。 为了沟通责任，您可以分配议题。 如果您发现自己经常输入相同的评论，可以使用已保存的回复。
{% ifversion fpt or ghec %} 有关详细信息，请参阅“[基本写入和格式设置语法](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)”和“[将问题和拉取请求分配给其他 GitHub 用户](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)”。
{% endif %} {% ifversion discussions %}
## 比较议题和讨论

有些对话更适合 {% data variables.product.prodname_discussions %}。 {% data reusables.discussions.you-can-use-discussions %} 有关何时使用问题或讨论的指导，请参阅“[在 GitHub 上沟通](/github/getting-started-with-github/quickstart/communicating-on-github)”。

当某个议题中的对话更适合讨论时，您可以将议题转换为讨论。
{% endif %}
