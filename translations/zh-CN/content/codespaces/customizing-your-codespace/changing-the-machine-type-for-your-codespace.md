---
title: 更改代码空间的计算机类型
shortTitle: Change the machine type
intro: 您可以更改运行代码空间的计算机类型，以便使用适合您正在执行的工作的资源。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: f3669e7addefbf46c3f2af978e746e0c3e634bb0
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '147110760'
---
## 关于机器类型

{% note %}

注意：仅当你是使用 {% data variables.product.prodname_github_codespaces %} 的组织的成员，并且正在该组织拥有的存储库上创建 codespace 时，才能选择或更改计算机类型。

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %} 可以在创建 codespace 时或创建 codespace 后的任何时间选择备用计算机类型。 

有关在创建 codespace 时选择计算机类型的信息，请参阅“[创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。 有关在 {% data variables.product.prodname_vscode %} 中更改计算机类型的信息，请参阅“[在 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code#changing-the-machine-type-in-visual-studio-code)”。

## 在 {% data variables.product.prodname_dotcom %} 中更改计算机类型

{% data reusables.codespaces.your-codespaces-procedure-step %}

   将显示每个代码空间的当前计算机类型。

   ![“您的代码空间”列表](/assets/images/help/codespaces/your-codespaces-list.png)

1. 单击要修改的 codespace 右侧的省略号 (...)。
1. 单击“更改计算机类型”。

   ![“更改机器类型”菜单选项](/assets/images/help/codespaces/change-machine-type-menu-option.png)

1. 如果有多个计算机类型可用于代码空间，请选择要使用的计算机类型。

   ![显示可供选择的可用计算机类型的对话框](/assets/images/help/codespaces/change-machine-type-choice.png)

   {% note %}

   注意：{% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

2. 单击“更新 codespace”。 

   此更改将在代码空间下次重新启动时生效。

## 强制立即更新当前正在运行的代码空间

如果更改当前正在使用的代码空间的计算机类型，并且希望立即应用更改，则可以强制重新启动代码空间。

1. 在 codespace 窗口的左下角，单击“{% data variables.product.prodname_codespaces %}”。 

   ![单击“{% data variables.product.prodname_codespaces %}”](/assets/images/help/codespaces/codespaces-button.png)

1. 从页面顶部显示的选项中选择“Codespaces: 停止当前 Codespace”。

   ![“暂停当前 Codespace”选项](/assets/images/help/codespaces/suspend-current-codespace.png)

1. 停止 codespace 后，单击”重启 codespace”。

   ![单击“Resume（继续）”](/assets/images/help/codespaces/resume-codespace.png)
