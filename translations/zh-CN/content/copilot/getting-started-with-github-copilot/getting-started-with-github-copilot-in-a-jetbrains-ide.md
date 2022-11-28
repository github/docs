---
title: 在 JetBrains IDE 中开始使用 GitHub Copilot
shortTitle: JetBrains IDE
intro: '了解如何在 JetBrains IDE 中安装 {% data variables.product.prodname_copilot %}，并在编写注释和代码时开始查看建议。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 24415504e0abeff6e129321068b07590d265da16
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179575'
---
## 关于 {% data variables.product.prodname_copilot %} 和 JetBrains IDE

{% data reusables.copilot.procedural-intro %}

如果使用 JetBrains IDE，可以直接在编辑器中查看并合并来自 {% data variables.product.prodname_copilot %} 的建议。 本指南演示如何在适用于 macOS、Windows 或 Linux 的 JetBrains IDE 中使用 {% data variables.product.prodname_copilot %}。

## 先决条件

{% data reusables.copilot.jetbrains-ides %}

## 在 JetBrains IDE 中安装 {% data variables.product.prodname_copilot %} 扩展

若要在 JetBrains IDE 中使用 {% data variables.product.prodname_copilot %}，必须先安装 {% data variables.product.prodname_copilot %} 扩展。 以下过程将指导你在 IntelliJ IDEA 中安装 {% data variables.product.prodname_copilot %} 插件。 在另一个受支持的 IDE 中安装插件的步骤可能有所不同。

1. 在 JetBrains IDE 中，在 Windows 的“文件”菜单或 IDE 名称 (Mac) 下（例如 PyCharm 或 IntelliJ），单击“设置”(Windows) 或“首选项”(Mac)。
2. 在“设置/首选项”对话框的左侧菜单中，单击“插件”。
3. 在“设置/首选项”对话框顶部，单击“市场”。 在搜索栏中，搜索“{% data variables.product.prodname_copilot %}”，然后单击“安装”。
   ![市场搜索的屏幕截图](/assets/images/help/copilot/jetbrains-marketplace.png)
1. 安装 {% data variables.product.prodname_copilot %} 后，单击“重启 IDE”。
1. JetBrains IDE 重启后，单击“工具”菜单。 单击“{% data variables.product.prodname_copilot %}”，然后单击“登录到 {% data variables.product.prodname_dotcom %}”。 
    ![JetBrains 工具菜单的屏幕截图](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. 在“登录到 {% data variables.product.prodname_dotcom %}”对话框中，若要复制设备代码并打开设备激活窗口，请单击“复制并打开”。
    ![设备代码复制和打开的屏幕截图](/assets/images/help/copilot/device-code-copy-and-open.png)
1. 设备激活窗口将在浏览器中打开。 粘贴设备代码，然后单击“继续”。

   - 若要在 Windows 或 Linux 中粘贴代码，请按 <kbd>Ctrl</kbd>+<kbd>v</kbd>。
   - 若要在 macOS 中粘贴代码，请按 <kbd>command</kbd>+<kbd>v</kbd>。
1. {% data variables.product.prodname_dotcom %} 将请求 {% data variables.product.prodname_copilot %} 所需的权限。 若要批准这些权限，请单击“授权 {% data variables.product.prodname_copilot %} 插件”。
1. 权限获得批准后，JetBrains IDE 将显示确认。 要开始使用 {% data variables.product.prodname_copilot %}，请单击“确定”。
   ![JetBrains IDE 权限确认的屏幕截图](/assets/images/help/copilot/jetbrains-ide-confirmation.png)
   

## 查看第一个建议

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} 以下示例使用的是 Java，但其他语言的工作方式类似。

{% data reusables.copilot.create-java-file %}
1. 在 Java 文件中，通过键入 `class Test` 创建类。
   {% data variables.product.prodname_copilot %} 将自动以灰色文本建议类正文，如下所示。 具体的建议可能会有所不同。
   ![Java 类正文建议的屏幕截图](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}
1. 若要提示 {% data variables.product.prodname_copilot %} 建议函数正文，请在 `main` 函数括号下方键入以下行。 具体的建议可能会有所不同。
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Java 函数正文建议的屏幕截图](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} 将尝试与代码的上下文和样式匹配。 始终可以编辑建议的代码。

## 查看替代建议

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. 若要提示 {% data variables.product.prodname_copilot %} 显示建议，请在 Java 文件中键入以下行。
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %} {% data reusables.copilot.see-alternative-suggestions %}

   | OS | 查看下一个建议 | 查看上一个建议 |
   | :- | :- | :- |
   | macOS | <kbd>选项</kbd>+<kbd>]</kbd> | <kbd>选项</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
{% data reusables.copilot.accept-or-reject-suggestion %}

## 在新选项卡中查看多个建议

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. 若要提示 {% data variables.product.prodname_copilot %} 显示建议，请在 Java 文件中键入以下行。
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. 打开包含多个附加建议的新选项卡。
    - 在 macOS 上，按 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>，然后单击“打开 GitHub Copilot”，或按 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> 立即打开新选项卡。
    - 在 Windows 或 Linux 上，按 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>，然后单击“打开 GitHub Copilot”。
  ![用于打开 Copilot 的对话的屏幕截图](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. 若要接受建议，请在建议上方单击“接受解决方案”。 若要拒绝所有建议，请关闭选项卡。

## 从注释生成代码建议

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. 若要提示 {% data variables.product.prodname_copilot %} 以建议 Java 文件中函数的实现，请键入以下行。
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Java 函数正文建议的屏幕截图](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## 启用或禁用 {% data variables.product.prodname_copilot %}

可以为所有语言或单个语言启用或禁用 {% data variables.product.prodname_copilot %}。 JetBrains IDE 窗口底部面板中的 {% data variables.product.prodname_copilot %} 状态图标指示 {% data variables.product.prodname_copilot %} 是启用还是禁用。 启用后，将突出显示图标。 禁用后，图标灰显。

1. 若要启用或禁用 {% data variables.product.prodname_copilot %}，请单击 JetBrains 窗口底部面板中的状态图标。
   ![IntelliJ IDEA 中“状态”图标的屏幕截图](/assets/images/help/copilot/status-icon-jetbrains.png)
2. 如果要禁用 {% data variables.product.prodname_copilot %}，系统会询问是全局禁用它，还是要禁用当前正在编辑的文件的语言。

   - 若要全局禁用 {% data variables.product.prodname_copilot %} 的建议，请单击“禁用完成”。
   - 若要禁用指定语言的 {% data variables.product.prodname_copilot %} 的建议，请单击“禁用 LANGUAGE 完成”。
   ![全局或为当前语言禁用 {% data variables.product.prodname_copilot %} 的选项的屏幕截图](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## 延伸阅读

- [{% data variables.product.prodname_copilot %} 网站](https://copilot.github.com/)
- [关于 {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
