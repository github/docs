---
title: 按里程碑过滤议题和拉取请求
intro: '议题和拉取请求可基于与之关联的里程碑进行过滤。 将[问题或拉取请求与里程碑相关联](/articles/associating-milestones-with-issues-and-pull-requests)后，可以根据其里程碑找到项。 在里程碑中，您可以排列议题和拉取请求的优先级。'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-milestones/filtering-issues-and-pull-requests-by-milestone
  - /articles/filtering-issues-and-pull-requests-by-milestone
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-milestone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter by milestone
ms.openlocfilehash: 6eda4a52df3212b37c3052832291f03aa2285fd5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128635'
---
{% tip %}

**提示：**

- 如果要使用搜索栏过滤议题和拉取请求，您可以使用里程碑搜索语法。 对于名为 My Milestone 的里程碑，搜索语法为：`milestone:"My Milestone"`。
- 要清除筛选器选择，请单击“清除当前搜索查询、筛选和排序”。
-  还可以使用 {% data variables.product.prodname_cli %} 过滤议题或拉取请求。 有关详细信息，请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh issue list`](https://cli.github.com/manual/gh_issue_list)”或“[`gh pr list`](https://cli.github.com/manual/gh_pr_list)”。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. 选择“里程碑”以查看存储库的所有可用里程碑列表。
  ![里程碑按钮](/assets/images/help/issues/issues_milestone_button.png)
4. 从列表中选择您感兴趣的里程碑。 您可以从里程碑页面查看该里程碑的相关信息，包括与之关联的所有议题和拉取请求。 有关详细信息，请参阅“[关于里程碑](/articles/about-milestones)”。

## 延伸阅读

- “[筛选和搜索问题以及拉取请求](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)”
- “[筛选项目板上的卡](/articles/filtering-cards-on-a-project-board)”
