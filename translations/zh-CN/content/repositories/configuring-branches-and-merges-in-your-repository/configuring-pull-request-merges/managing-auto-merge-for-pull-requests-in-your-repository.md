---
title: 管理仓库中拉取请求的自动合并
intro: 您可以允许或禁止仓库中拉取请求的自动合并。
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
ms.openlocfilehash: 4d0f0d465ea3c8551dc909d56620a06ee9864c1c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060368'
---
## 关于自动合并

如果您允许自动合并仓库中的拉取请求，则具有写入权限的用户可以配置仓库中的单个拉取请求在满足所有合并要求时自动合并。 如果没有写入权限的人员将更改推送到已启用自动合并的拉取请求，将对该拉取请求禁用自动合并。 有关详细信息，请参阅“[自动合并拉取请求](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)”。

## 管理自动合并

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 在{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}“拉取请求”{% else %}“合并按钮”{% endif %}下，选择或取消选择“允许自动合并”。
  ![允许或禁止自动合并的复选框](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
