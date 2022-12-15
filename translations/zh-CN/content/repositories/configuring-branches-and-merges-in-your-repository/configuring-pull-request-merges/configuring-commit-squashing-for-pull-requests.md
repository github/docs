---
title: 为拉取请求配置提交压缩
intro: '对于仓库中 {% data variables.product.product_location %} 上的所有拉取请求合并，您可以实施、允许或禁用提交压缩。'
redirect_from:
  - /articles/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-commit-squashing-for-pull-requests
  - /github/administering-a-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Configure commit squashing
ms.openlocfilehash: 8d53a558163b6a847fa4fb509399b1e7b7c6c05c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580709'
---
{% data reusables.pull_requests.configure_pull_request_merges_intro %}

{% data reusables.pull_requests.default-commit-message-squash-merge %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 在{% ifversion fpt or ghec or ghes > 3.5 or ghae-issue-6069 %}“拉取请求”{% else %}“合并按钮”{% endif %}下，选择“允许压缩合并”。 这将允许贡献者通过将所有提交压缩到单个提交中来合并拉取请求。 合并时向参与者显示的默认提交消息是提交标题和消息（如果拉取请求仅包含 1 个提交），或拉取请求标题和提交列表（如果拉取请求包含 2 个或更多提交）。 {% ifversion ghes = 3.6 %} 若要始终使用拉取请求的标题，而不考虑拉取请求中的提交数，请选择“默认为压缩合并提交的拉取请求标题”。{% endif %}{% ifversion default-merge-squash-commit-message %} ![拉取请求压缩的提交](/assets/images/help/repository/allow-squash-merging.png){% endif %}{% ifversion ghes = 3.6 %} ![拉取请求设置的屏幕截图，其中突出显示了“允许合并提交”复选框](/assets/images/help/repository/allow-squash-merging-no-dropdown.png){% endif %} {% ifversion ghes < 3.6  %} ![拉取请求压缩的提交](/assets/images/enterprise/3.5/repository/pr-merge-squash.png){% endif %} {% ifversion default-merge-squash-commit-message %}
1. （可选）在“允许压缩合并”下，使用下拉列表选择合并时向参与者显示的默认压缩提交消息的格式。 默认消息使用提交标题和消息（如果拉取请求仅包含 1 个提交），或拉取请求标题和提交列表（如果拉取请求包含 2 个或更多提交）。 还可以选择仅使用拉取请求标题、拉取请求标题和提交详细信息，或拉取请求标题和说明。
![突出显示默认压缩消息下拉列表的屏幕截图](/assets/images/help/repository/default-squash-message-dropdown.png) {% endif %}

如果选择多个合并方法，协作者可以选择合并拉取请求时要使用的合并提交类型。 {% data reusables.repositories.squash-and-rebase-linear-commit-history %}

## 延伸阅读

- [关于拉取请求合并](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
