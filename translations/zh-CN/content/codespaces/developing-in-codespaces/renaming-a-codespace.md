---
title: 重命名 codespace
intro: 可以使用 {% data variables.product.prodname_cli %} 将 codespace 显示名称更改为所选名称之一。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Rename a codespace
ms.openlocfilehash: 58945e68f80f152751ad129afa7276792f015429
ms.sourcegitcommit: 406913cde11b45dbb2098db7973217781ecad2c0
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 08/19/2022
ms.locfileid: "147614522"
---
## <a name="about-renaming-a-codespace"></a>关于重命名 codespace

为每个 codespace 分配一个自动生成的显示名称。 如果有多个 codespace，则显示名称有助于区分不同 codespace。 例如：`literate space parakeet`。 可以更改 codespace 的显示名称。

若要查找 codespace 的显示名称，请执行以下操作：

- 在 {% data variables.product.product_name %} 上，在 https://github.com/codespaces 处查看 codespace 列表。

  ![GitHub 中 codespace 列表的屏幕截图](/assets/images/help/codespaces/codespaces-list-display-name.png)

- 在 {% data variables.product.prodname_vscode %} 桌面应用程序中，或在 {% data variables.product.prodname_vscode_shortname %} Web 客户端中，单击远程资源管理器。 显示名称会在存储库名称下方显示。 例如：以下屏幕截图中的 `symmetrical space telegram`。

  ![VS Code 中远程资源管理器的屏幕截图](/assets/images/help/codespaces/codespaces-remote-explorer.png)

- 在本地计算机上的终端窗口中，使用这条 {% data variables.product.prodname_cli %} 命令：`gh codespace list`。 
### <a name="permanent-codespace-names"></a>永久 codespace 名称

创建 codespace 时，除了显示名称，还会向 codespace 分配永久名称。 该名称是 {% data variables.product.company_short %} 句柄、存储库名称和一些随机字符的组合。 例如：`octocat-myrepo-gmc7`。 你无法更改此名称。

若要查找 codespace 的永久名称，请执行以下操作：

* 在 {% data variables.product.product_name %} 上，将鼠标悬停在 https://github.com/codespaces 上的“用浏览器打开”选项时，永久名称会在弹出窗口中显示。 

   ![悬停时显示的 codespace 名称的屏幕截图](/assets/images/help/codespaces/find-codespace-name-github.png)
   
* 在 codespace 中，在终端中使用此命令：`echo $CODESPACE_NAME`。
* 在本地计算机上的终端窗口中，使用这条 {% data variables.product.prodname_cli %} 命令：`gh codespace list`。

## <a name="renaming-a-codespace"></a>重命名 codespace

如果有多个要在较长时间内使用的 codespace，更改 codespace 的显示名称可能很有用。 适当的名称有助于识别用于特定用途的 codespace。 可以使用 {% data variables.product.prodname_cli %} 更改 codespace 的显示名称。

若要为 codespace 重命名，请使用 `gh codespace edit` 子命令：

```shell
gh codespace edit -c <em>permanent name of the codespace</em> -d <em>new display name</em>
```

在本例中，将 `permanent name of the codespace` 替换为 codespace 的永久名称。 将 `new display name` 替换为所需显示名称。