---
title: 管理组织中的拉取请求评审
intro: 可以限制哪些用户批准或请求更改组织中的拉取请求。
versions:
  feature: pull-request-approval-limit
permissions: Organization owners can limit which users can submit reviews that approve or request changes to a pull request.
topics:
  - Organizations
  - Pull requests
shortTitle: Manage pull request reviews
ms.openlocfilehash: 2d097e95572932f05795bd28627cb73b1fad43ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145109455'
---
## 关于代码评审限制

默认情况下，在公共存储库中，任何用户都可以提交批准或请求更改拉取请求的评论。

可以限制谁能够批准或请求更改组织拥有的公共存储库中的拉取请求。 启用代码评审限制后，任何人都可以对公共存储库中的拉取请求添加注释，但只有对存储库具有显式访问权限的人员才能批准拉取请求或请求更改。

还可以为单个存储库启用代码评审限制。 如果为组织启用或限制，将替代组织拥有的各存储库的任何限制。 有关详细信息，请参阅“[管理存储库中的拉取请求评审](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-pull-request-reviews-in-your-repository)”。

## 启用代码评审限制

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 在边栏的“访问”部分中，单击“{% octicon "report" aria-label="The report icon" %} 审核”。
1. 在“{% octicon "report" aria-label="The report icon" %} 审核”下，单击“代码评审限制”。
![组织的代码评审限制的边栏项的屏幕截图](/assets/images/help/organizations/code-review-limits-organizations.png)
1. 查看屏幕上的信息。 单击“限制对所有存储库的评审”，以限制对具有显式访问权限的存储库的评审，或单击“删除所有存储库的评审限制”，以删除组织中每个公共存储库中的限制 。
![组织的代码评审限制设置的屏幕截图](/assets/images/help/organizations/code-review-limits-organizations-settings.png)
