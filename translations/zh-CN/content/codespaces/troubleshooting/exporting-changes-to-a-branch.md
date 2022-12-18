---
title: 将更改导出到分支
intro: 本文提供将代码空间更改导出到分支的步骤。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Exporting changes
ms.openlocfilehash: 2a7dee4725af31f3983e753b4202f94be1742556
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159437'
---
## 将更改导出到分支

使用 {% data variables.product.prodname_github_codespaces %} 时，你可能希望将更改导出到分支，而无需启动 codespace。 当达到[支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)或在访问 codespace 时遇到一般性问题时，这会很有用。

如果未发布 codespace（通过模板创建，并且未与 {% data variables.product.product_name %} 上的存储库相关联），则无法将更改导出到分支，但无需启动 codespace 即可将 codespace 发布到新存储库。 有关详细信息，请参阅“[通过模板创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-githubcom)”。

将更改导出到分支：

{% data reusables.codespaces.your-codespaces-procedure-step %} 或者，对于单个存储库，单击“{% octicon "code" aria-label="The code icon" %} 代码”菜单。
1. 单击要从中导出的 codespace 右侧的省略号 (...)。
2. 选择“{% octicon "git-branch" aria-label="The git branch icon" %} 将更改导出到分支”。

  ![将更改导出到分支](/assets/images/help/codespaces/export-changes-to-a-branch.png)

1. 从弹出窗口中选择“创建分支”。
