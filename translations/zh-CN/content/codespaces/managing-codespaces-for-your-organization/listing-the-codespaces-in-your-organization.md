---
title: 列出组织中的 codespace
shortTitle: List organization codespaces
intro: 可以列出组织当前处于活动状态或已停止的所有 codespace。
permissions: 'To list all of the current codespaces for your organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Administrator
ms.openlocfilehash: e3d475560c76449ed20b70fbce29ef6273f788fc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158627'
---
## 概述

作为组织所有者，可以列出组织当前处于活动状态和已停止的所有 codespace。 你可能想要执行此操作来检查用户正在创建多少 codespace，以确保不会产生不必要的成本。 有关定价的信息，请参阅“[关于 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。

列出组织的 codespace 的最简单方法是使用 {% data variables.product.prodname_cli %}。 还可以使用 REST API，该 API 提供有关每个 codespace 的详细信息。

有关如何查看组织或企业当前总的 {% data variables.product.prodname_codespaces %} 使用情况并生成详细报告的信息，请参阅“[查看 {% data variables.product.prodname_github_codespaces %} 使用情况](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)”。

### 使用 {% data variables.product.prodname_cli %} 列出 codespace

若要列出指定组织的所有当前 codespace，请使用以下命令。

```shell{:copy}
gh codespace list --org ORGANIZATION 
```

此命令返回一个列表，其中包含每个 codespace 的以下信息： 
    - 名称和显示名称 
    - 创建 codespace 的用户
    - 存储库和分支
    - codespace 的当前状态

若要列出由特定用户创建的组织的所有当前 codespace，请使用以下命令。

```shell{:copy}
gh codespace list --org ORGANIZATION --user USER
```

{% note %}

**注意**：在上述命令中，将 `ORGANIZATION` 替换为要查询的组织的名称。 你必须是组织的所有者。

{% endnote %}

### 使用 REST API 列出 codespace

可以将 `/orgs/{org}/codespaces` API 终结点用作列出组织当前 codespace 的替代方法。 这将返回比 {% data variables.product.prodname_cli %} 更详细的信息；例如，计算机类型详细信息。

有关此终结点的详细信息，请参阅“[Codespaces 组织](/rest/codespaces/organizations#list-codespaces-for-the-organization)”。
