---
title: 重命名 codespace
intro: '可以通过 {% data variables.product.prodname_dotcom_the_website %} 或 {% data variables.product.prodname_cli %} 将 codespace 显示名称更改为所选名称之一。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Rename a codespace
ms.openlocfilehash: dcb4558cce7ca0768524917a46cde2a49bacd1ce
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158715'
---
## 关于重命名 codespace

为每个 codespace 分配一个自动生成的显示名称。 如果有多个 codespace，则显示名称有助于区分不同 codespace。 例如：`literate space parakeet`。 可以更改 codespace 的显示名称。

若要查找 codespace 的显示名称，请执行以下操作：

- 在 {% data variables.product.product_name %} 上，在 https://github.com/codespaces 处查看 codespace 列表。

  ![GitHub 中 codespace 列表的屏幕截图](/assets/images/help/codespaces/codespaces-list-display-name.png)

- 在 {% data variables.product.prodname_vscode %} 桌面应用程序中，或在 {% data variables.product.prodname_vscode_shortname %} Web 客户端中，单击远程资源管理器。 显示名称是列表中的第二项。 例如：以下屏幕截图中的 `symmetrical space telegram`。

  ![VS Code 中远程资源管理器的屏幕截图](/assets/images/help/codespaces/codespaces-remote-explorer.png)

{% indented_data_reference reusables.codespaces.remote-explorer spaces=2 %}
- 在本地计算机上的终端窗口中，使用这条 {% data variables.product.prodname_cli %} 命令：`gh codespace list`。 

### 永久 codespace 名称

创建 codespace 时，除了显示名称，还会向 codespace 分配永久名称。 该名称是 {% data variables.product.company_short %} 句柄以及自动生成的显示名称的组合。 例如：`octocat-literate-space-parakeet-mld5`。 无法更改永久名称。

若要查找 codespace 的永久名称，请执行以下操作：

* 在 {% data variables.product.product_name %} 上，将鼠标悬停在 https://github.com/codespaces 上 codespace 的显示名称上时，永久名称会显示在弹出窗口中。 

   ![悬停时显示的 codespace 名称的屏幕截图](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* 在 codespace 中，在终端中使用此命令：`echo $CODESPACE_NAME`。
* 在本地计算机上的终端窗口中，使用这条 {% data variables.product.prodname_cli %} 命令：`gh codespace list`。

## 重命名 codespace

如果有多个要在较长时间内使用的 codespace，更改 codespace 的显示名称可能很有用。 适当的名称有助于识别用于特定用途的 codespace。 

{% cli %}

可以使用 {% data variables.product.prodname_cli %} 更改 codespace 的显示名称。

若要为 codespace 重命名，请使用 `gh codespace edit` 子命令：

```shell
gh codespace edit -c PERMANENT-CODESPACE-NAME -d NEW-DISPLAY-NAME
```

在本例中，用想要更改其显示名称的 codespace 的永久名称替换 `PERMANENT-CODESPACE-NAME`。 用想用于此 codespace 的显示名称替换 `NEW-DISPLAY-NAME`。

有关详细信息，请参阅“[将 {% data variables.product.prodname_github_codespaces %} 与 {% data variables.product.prodname_cli %} 配合使用](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#rename-a-codespace)。

{% endcli %}

{% webui %}

可以在 {% data variables.product.prodname_dotcom_the_website %} 上更改 codespace 的显示名称。

{% data reusables.codespaces.your-codespaces-procedure-step %}

    The current display name for each of your codespaces is displayed.

{% data reusables.codespaces.ellipsis-settings %}
1. 单击“重命名”。

1. 在提示符中，在“将显示名称更改为...”下键入所需的显示名称，然后单击“ 确定”。

{% endwebui %}
