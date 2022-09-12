---
title: 将更改导出到分支
intro: 本文提供将代码空间更改导出到分支的步骤。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 676a94ae33b7dba4990014d472cbf28992437a2c
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147111000'
---
## 将更改导出到分支

使用 {% data variables.product.prodname_github_codespaces %} 时，你可能希望将更改导出到分支，而无需启动 codespace。

当达到[支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)或在访问 codespace 时遇到一般性问题时，这会很有用。

要导出更改：

1. 浏览到“你的 Codespaces”页面 ([github.com/codespaces](https://github.com/codespaces))，对于单个存储库，也可单击“{% octicon "code" aria-label="The code icon" %} 代码”菜单。
2. 单击要从中导出的 codespace 右侧的省略号 (...)。
3. 选择“{% octicon "git-branch" aria-label="The git branch icon" %} 将更改导出到分支”。

  ![将更改导出到分支](/assets/images/help/codespaces/export-changes-to-a-branch.png)

4. 从弹出窗口中选择“创建分支”。
