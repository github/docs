---
title: 管理更新拉取请求分支的建议
intro: 用户可以在拉取请求分支未随基本分支保持最新时始终更新该分支。
versions:
  fpt: '*'
  ghes: '> 3.4'
  ghae: issue-6069
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage branch updates
permissions: People with maintainer permissions can enable or disable the setting to suggest updating pull request branches.
ms.openlocfilehash: a29e2e9d11b24287cdad71b71f617a58e64df297
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578608'
---
## 关于更新拉取请求分支的建议

如果启用此设置以始终建议更新存储库中的拉取请求分支，则当拉取请求的头分支与基本分支不同步时，具有写入权限的用户将始终能够在拉取请求页面上更新拉取请求的头分支。 如果未启用，则仅当基本分支要求分支在合并之前保持最新且分支不是最新的时，更新功能才可用。 有关详细信息，请参阅“[使拉取请求与基本分支保持同步](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)”。

{% data reusables.enterprise.3-5-missing-feature %}

## 管理更新拉取请求分支的建议

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在“拉取请求”下，选择或取消选择“始终建议更新请求分支”。
  ![用于启用或禁用“始终建议更新分支”的复选框](/assets/images/help/repository/always-suggest-updating-branches.png)
