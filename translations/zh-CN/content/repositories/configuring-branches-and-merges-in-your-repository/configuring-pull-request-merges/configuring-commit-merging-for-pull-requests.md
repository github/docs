---
title: 为拉取请求配置提交合并
intro: '对于存储库中 {% data variables.product.product_location %} 上的所有拉取请求合并，你可以使用合并提交来实施、允许或禁用合并。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit merging
ms.openlocfilehash: 322f74168935175a75f3a8f19cc4faca2cde174b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580726'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 在{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}“拉取请求”{% else %}“合并按钮”{% endif %}下，选择“允许合并提交”。 这允许参与者将拉取请求与提交的完整历史记录合并。{% ifversion default-merge-squash-commit-message %}![“拉取请求”设置的屏幕截图，其中突出显示了“允许合并提交”复选框](/assets/images/help/repository/allow-merge-commits.png){% endif %}{% ifversion ghes = 3.6 %}![“拉取请求”设置的屏幕截图，其中突出显示了“允许合并提交”复选框](/assets/images/help/repository/allow-merge-commits-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![allow_standard_merge_commits](/assets/images/help/repository/pr-merge-full-commits.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. （可选）在“允许合并提交”下，使用下拉列表选择合并时向参与者显示的提交消息的格式。 默认消息包括拉取请求编号和标题。 例如，`Merge pull request #123 from patch-1`。 还可以选择仅使用拉取请求标题或拉取请求标题和说明。 
![突出显示默认提交消息下拉列表的屏幕截图](/assets/images/help/repository/default-commit-message-dropdown.png) {% endif %}

如果选择多个合并方法，协作者可以选择合并拉取请求时要使用的合并提交类型。 {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## 延伸阅读

- [关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
