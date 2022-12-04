---
title: 为代码空间计算机设置最低规范
shortTitle: Set a minimum machine spec
intro: '你可以避免资源不足的计算机类型用于存储库的 {% data variables.product.prodname_github_codespaces %}。'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: b7eeaac84721ff1d9ceab663957b1615952b0623
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159163'
---
## 概述

创建的每个 codespace 都托管在单独的虚拟机上。 从存储库创建 codespace 时，通常可以从不同类型的虚拟机中进行选择。 每个计算机类型都有不同的资源（处理器内核、内存、存储），默认情况下，使用资源最少的计算机类型。 有关详细信息，请参阅“[更改 codespace 的计算机类型](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)”。

如果项目需要一定程度的计算能力，则可以配置 {% data variables.product.prodname_github_codespaces %} 以便默认情况下只能使用或由用户选择满足这些要求的计算机类型。 可以在 `devcontainer.json` 文件中进行此配置。

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %}

{% note %}

重要提示：对某些计算机类型的访问可能在组织级别受到限制。 通常，这样做是为了防止人们选择以较高费率计费的资源较高的计算机。 如果您的存储库受到组织级计算机类型策略的影响，则应确保不要设置最低规范，因为该规范不会留下任何可用的计算机类型供人们选择。 有关详细信息，请参阅“[限制对计算机类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

{% endnote %}

## 设置最低计算机规范

{% data reusables.codespaces.edit-devcontainer-json %}
1. 编辑 `devcontainer.json` 文件，将属性 `hostRequirements` 添加到文件顶层，位于封闭的 JSON 对象内。 例如：

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   可以指定以下任何或所有选项：`cpus`、`memory` 和 `storage`。
   
   要检查当前可用于存储库的 {% data variables.product.prodname_github_codespaces %} 计算机类型的规范，请逐步完成创建 codespace 的过程，直到看到选择的计算机类型。 有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)”。
   
1. 保存文件并将更改提交到存储库的所需分支。

   现在，当你为存储库的该分支创建代码空间时，前往创建配置选项，只能选择与指定资源匹配或超过你指定的资源的计算机类型。

   ![显示有限计算机类型选择的对话框](/assets/images/help/codespaces/machine-types-limited-choice.png)

## 延伸阅读

- “[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”
