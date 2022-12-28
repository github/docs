---
title: 更改代码空间的计算机类型
shortTitle: Change the machine type
intro: 可更改运行 codespace 的计算机类型，以便使用适合你正在执行的工作的资源。
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: b8614e9389aa617b3bfcfa3444f5a60aa7dd3c2e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159083'
---
## 关于机器类型

{% data reusables.codespaces.codespaces-machine-types %} 可以在创建 codespace 时或创建 codespace 后的任何时间选择备用计算机类型。 

有关在创建 codespace 时选择计算机类型的信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)”。

{% data reusables.codespaces.machine-types-for-unpublished-codespaces %} 有关详细信息，请参阅“[从模板创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)”。

## 更改计算机类型

{% note %}

注意：{% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   将显示每个代码空间的当前计算机类型。

   ![“您的代码空间”列表](/assets/images/help/codespaces/your-codespaces-list.png)

{% data reusables.codespaces.ellipsis-settings %}
1. 单击“更改计算机类型”。

   ![“更改机器类型”菜单选项](/assets/images/help/codespaces/change-machine-type-menu-option.png)
1. 如果有多个计算机类型可用于代码空间，请选择要使用的计算机类型。

   ![显示可供选择的可用计算机类型的对话框](/assets/images/help/codespaces/change-machine-type-choice.png)
1. 单击“更新 codespace”。 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

可使用 `gh codespace edit --machine MACHINE-TYPE-NAME` {% data variables.product.prodname_cli %} 命令更改 codespace 的计算机类型。 要使用此命令，首先需要了解可用于 codespace 的计算机类型。

1. 要查看 codespace 列表，请在终端中输入以下命令。
   
   ```
   gh codespace list
   ```
1. （可选）要查找 codespace 的当前计算机类型，请输入以下命令。
   
   ```
   gh api /user/codespaces/CODESPACE-NAME
   ```

   将 `CODESPACE-NAME` 替换为 codespace 的永久名称，如 `octocat-literate-space-parakeet-mld5`。 永久名称列在 返回的列表中的“名称”列下`gh codespace list`。

   如果系统提示请求 `codespace` 范围，请按照终端中的说明进行操作。

   当前计算机的详细信息列在 `machine` 字段下。
1. 要查找可用于 codespace 的计算机类型，请输入以下命令。
   
   ```
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   将 `CODESPACE-NAME` 替换为 codespace 的永久名称，如 `octocat-literate-space-parakeet-mld5`。
1. 要更改 codespace 的计算机类型，请输入以下命令。

   ```
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   将 `MACHINE-TYPE-NAME` 替换为可用于 codespace 的计算机类型的名称，例如 `standardLinux32gb`。 
1. 使用箭头键导航到要更改的 codespace，然后按 <kbd>Enter</kbd>。

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## 延伸阅读

- REST API 文档中的“[Codespaces 计算机](/rest/codespaces/machines)”
- {% data variables.product.prodname_cli %} 手册中的 [`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit)

{% endcli %}
