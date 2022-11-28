---
title: 在 GitHub Codespaces 中使用 GitHub Copilot
intro: '可以通过添加扩展在 {% data variables.product.prodname_github_codespaces %} 中使用 {% data variables.product.prodname_copilot %}。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
ms.openlocfilehash: 6615df6930fa8f27dd8f50c4588d8182b8602549
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158723'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## 在 {% data variables.product.prodname_vscode_shortname %} Web 客户端中使用 {% data variables.product.prodname_copilot %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endwebui %}

{% vscode %}

## 在 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_copilot %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endvscode %}

{% jetbrains %}

## 在 JetBrains IDE 中安装 {% data variables.product.prodname_copilot %}

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) 是 AI 结对程序员，可用于任何 codespace。 有关详细信息，请参阅“[关于 GitHub Copilot](/copilot/overview-of-github-copilot/about-github-copilot)”。

若要在 JetBrains IDE 的 codespace 中使用 {% data variables.product.prodname_copilot %}，请在 codespace 中安装 [{% data variables.product.prodname_copilot %} 插件](https://plugins.jetbrains.com/plugin/17718-github-copilot)。

{% note %}

注意：每次创建新 codespace 时，都必须安装 {% data variables.product.prodname_copilot %} 插件。

{% endnote %}

1. 在 JetBrains 客户端应用程序中，打开“设置”(Windows/Linux) 或“首选项”(Mac) 对话框：

   - **Windows/Linux**：单击“文件”，然后单击“设置”（或按<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd>）
   - **Mac**：在 MacOS 菜单栏中单击“JetBrains 客户端”“首选项”（或按<kbd>command</kbd>+<kbd>,</kbd>）

1. 在“设置/首选项”对话框的左侧菜单中，单击“主机上的插件”。 然后单击“市场”选项卡。

   ![“主机上的插件”的“市场”选项卡的屏幕截图](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. 在搜索框中，键入“copilot”，然后单击 {% data variables.product.prodname_copilot %} 插件的“安装”按钮。

   ![{% data variables.product.prodname_copilot %} 插件的屏幕截图](/assets/images/help/codespaces/jetbrains-copilot-plugin.png)

1. 在“第三方插件隐私说明”对话框中单击“接受”。
1. 单击“重启 IDE”。

   ![{% data variables.product.prodname_copilot %} 插件的屏幕截图](/assets/images/help/codespaces/jetbrains-copilot-restart.png)
 
1. 当提示确认是否要重启远程运行的后端 IDE 时，单击“重启”。 单击重启后，JetBrains 客户端应用程序将关闭。
1. 再次从 JetBrains 网关应用程序打开 codespace。 有关详细信息，请参阅“[在 JetBrains IDE 中使用 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide#opening-a-codespace-in-your-jetbrains-ide)”。
1. JetBrains IDE 重启后，单击“工具”菜单。 单击“{% data variables.product.prodname_copilot %}”，然后单击“登录到 {% data variables.product.prodname_dotcom %}”。 

    ![JetBrains 工具菜单的屏幕截图](/assets/images/help/codespaces/jetbrains-tools-menu.png)

1. 在“登录到 {% data variables.product.prodname_dotcom %}”对话框中，若要复制设备代码并打开设备激活窗口，请单击“复制并打开”。

    ![设备代码复制和打开的屏幕截图](/assets/images/help/copilot/device-code-copy-and-open.png)

1. 设备激活窗口将在浏览器中打开。 粘贴设备代码，然后单击“继续”。

   - 若要在 Windows 或 Linux 中粘贴代码，请按 <kbd>Ctrl</kbd>+<kbd>v</kbd>。
   - 若要在 macOS 中粘贴代码，请按 <kbd>command</kbd>+<kbd>v</kbd>。
1. {% data variables.product.prodname_dotcom %} 将请求 {% data variables.product.prodname_copilot %} 所需的权限。 若要批准这些权限，请单击“授权 {% data variables.product.prodname_copilot %} 插件”。
1. 权限获得批准后，JetBrains IDE 将显示确认。 要开始使用 {% data variables.product.prodname_copilot %}，请单击“确定”。

   ![JetBrains IDE 权限确认的屏幕截图](/assets/images/help/copilot/jetbrains-ide-confirmation.png)

## 延伸阅读

- [在 JetBrains IDE 中开始使用 GitHub Copilot](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)

{% endjetbrains %}
