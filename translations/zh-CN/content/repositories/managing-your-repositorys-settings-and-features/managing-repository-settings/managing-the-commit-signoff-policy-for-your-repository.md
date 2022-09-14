---
title: 管理存储库的提交签字策略
intro: '可以要求用户使用 {% data variables.product.product_name %} 的 Web 界面自动签字其对存储库所做的提交。'
versions:
  feature: commit-signoffs
permissions: Organization owners and repository administrators can require all commits to a repository to be signed off by the commit author.
topics:
  - Repositories
shortTitle: Manage the commit signoff policy
ms.openlocfilehash: 4002f0767497cb2b0db9e43c9783e0c2982c8d33
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410719'
---
## 关于提交签字

提交签字使用户能够确认提交符合有关管理存储库的规则和许可。 可通过 {% data variables.product.product_location %} 的 Web 界面为用户提交在各个存储库上启用强制提交签字，从而使签字提交在提交过程中顺利执行。 为存储库启用强制提交签字后，通过 {% data variables.product.product_location %} 的 Web 界面对该存储库进行的每个提交都将由提交作者自动签字。

组织所有者还可以在组织级别启用强制提交签字。 有关详细信息，请参阅“[管理组织的提交签字策略](/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization)”。

{% data reusables.repositories.commit-signoffs %}

## 为存储库启用或禁用强制提交签字

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. 选择“要求参与者签署基于 Web 的提交”。
  ![“要求参与者签署基于 Web 的提交”的屏幕截图](/assets/images/help/repository/require-signoffs.png)
