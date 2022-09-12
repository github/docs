---
title: 管理存储库中的拉取请求评论
intro: 可以限制哪些用户批准或请求更改公有存储库中的拉取请求。
versions:
  feature: pull-request-approval-limit
permissions: Repository administrators can limit which users can approve or request changes to a pull request in a public repository.
topics:
  - Repositories
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 81c58a856e7dddc316a41413d4c7787bf463cf7c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129314'
---
## 关于代码评审限制

默认情况下，在公共存储库中，任何用户都可以提交批准或请求更改拉取请求的评论。

你可以限定哪些用户能够提交批准或请求更改公共存储库中拉取请求的评论。 启用代码评审限制时，所有人都可以在公共存储库中评论拉取请求，但只有具有读取权限或更高权限的人才能批准拉取请求或请求更改。

你还可以为组织启用代码评审限制。 如果为组织启用限制，将替代组织拥有的各存储库的任何限制。 有关详细信息，请参阅“[管理组织中的拉取请求评审](/organizations/managing-organization-settings/managing-pull-request-reviews-in-your-organization)”。

## 启用代码评审限制

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 在“访问权限”下，单击“审查选项” 。
![审查选项存储库设置](/assets/images/help/repository/access-settings-repositories.png)
1. 在“审查选项”下，单击“代码评审限制” 。
![代码评审限制存储库](/assets/images/help/repository/code-review-limits-repositories.png)
1. 选择或取消选择“仅限于显式具有读取或更高访问权限的用户”。
![在存储库中限制评审](/assets/images/help/repository/limit-reviews-in-repository.png)
