---
title: 使用适用于 JetBrains 的 GitHub Codespaces 插件
shortTitle: Plugin for JetBrains
intro: '可以使用 JetBrains 客户端应用程序的 {% data variables.product.prodname_github_codespaces %} 插件来了解 codespace 或在完成工作后停止 codespace。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: 8ffd48856a2653f3db3c871122d3acd23c246d7a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159444'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## 关于 {% data variables.product.prodname_github_codespaces %} 插件

从 JetBrains 网关应用程序连接到 codespace 时，将启动 JetBrains 客户端应用程序。 它允许你将 {% data variables.product.prodname_github_codespaces %} 与你最喜爱的 JetBrains IDE 一起使用。 有关详细信息，请参阅“[在 JetBrains IDE 中使用 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)”。

从 JetBrains 网关连接到 codespace 时，{% data variables.product.prodname_github_codespaces %} 插件已安装在 JetBrains 客户端中。 插件将 {% data variables.product.prodname_github_codespaces %} 工具窗口添加到用户界面。

单击 JetBrains 客户端应用程序窗口左下角的“{% data variables.product.prodname_github_codespaces %}”以打开 {% data variables.product.prodname_github_codespaces %} 工具窗口。

![{% data variables.product.prodname_github_codespaces %} 工具窗口的屏幕截图](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## 使用 {% data variables.product.prodname_github_codespaces %} 工具窗口

{% data variables.product.prodname_github_codespaces %} 工具窗口显示：
* 从中创建此 codespace 的存储库。
* codespace 的显示名称。
* 当前分支。
* 计算机规格。
* 此 codespace 在自动停止之前可以保持空闲的时间。
* codespace 的使用期限。
* 停止的 codespace 在自动删除之前将保留的时间段。

{% data variables.product.prodname_github_codespaces %} 工具窗口顶部的图标提供以下功能。

* **刷新活动 codespace**

  ![“刷新”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh-BAK.png)

  刷新 {% data variables.product.prodname_github_codespaces %} 工具窗口中的详细信息。 例如，如果使用了 {% data variables.product.prodname_cli %} 更改显示名称，则可以单击此按钮以显示新名称。

* **断开连接并停止**

  ![“停止”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

  停止 codespace，停止远程计算机上的后端 IDE，然后关闭本地 JetBrains 客户端。

* **从 Web 管理 codespace**

  ![“列表”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  在 https://github.com/codespaces 打开 codespace 列表。

* **查看 codespace 创建日志**

  ![“日志”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  在编辑器窗口中打开 codespace 创建日志。 有关详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 日志](/codespaces/troubleshooting/github-codespaces-logs)”。

* **重新生成开发容器**

  ![“重新生成”按钮的屏幕截图](/assets/images/help/codespaces/jetbrains-plugin-icon-rebuild.png)

  重新生成 codespace 以应用对开发容器配置所做的更改。 JetBrains 客户端将关闭，必须重新打开 codespace。 有关详细信息，请参阅“[codespace 生命周期](/codespaces/developing-in-codespaces/the-codespace-lifecycle#rebuilding-a-codespace)”。

