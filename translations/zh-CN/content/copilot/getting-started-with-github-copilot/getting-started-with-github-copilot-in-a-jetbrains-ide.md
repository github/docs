---
title: 在 JetBrains IDE 中开始使用 GitHub Copilot
shortTitle: JetBrains IDE
intro: '了解如何在 JetBrains IDE 中安装 {% data variables.product.prodname_copilot %}，并在编写注释和代码时开始查看建议。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
---

## 关于 {% data variables.product.prodname_copilot %} 和JetBrains IDE

{% data reusables.copilot.procedural-intro %}

如果使用 JetBrains IDE，则可以直接在编辑器中查看和合并来自 {% data variables.product.prodname_copilot %} 的建议。 本指南演示如何在适用于 macOS、Windows 或 Linux 的 JetBrains IDE 中使用 {% data variables.product.prodname_copilot %}。

## 基本要求

{% data reusables.copilot.jetbrains-ides %}

## 安装 JetBrains 扩展

要在 JetBrains IDE 中使用 {% data variables.product.prodname_copilot %}，必须安装 {% data variables.product.prodname_copilot %} 扩展。 以下过程将指导您在 IntelliJ IDEA 中安装 {% data variables.product.prodname_copilot %} 插件。 在其他受支持的 IDE 中安装插件的步骤可能有所不同。

1. 在 JetBrains IDE 中，在 Windows 的**文件**菜单下，或在 Mac 版 IDE 的名称下（例如，**PyCharm** 或 **IntelliJ**），单击**设置** (Windows) 或**首选项** (Mac)。
2. 在**设置/首选项**对话框的左侧菜单中，单击**插件**。
3. 在**设置/首选项**对话框顶部，单击 **Marketplace**。 在搜索栏中，搜索 **{% data variables.product.prodname_copilot %}**，然后单击 **Install（安装）**。 ![Marketplace 搜索的屏幕截图](/assets/images/help/copilot/jetbrains-marketplace.png)
1. 安装 {% data variables.product.prodname_copilot %} 后，单击 **Restart IDE（重新启动 IDE）**。
1. 重新启动 JetBrains IDE 后，单击 **Tools（工具）**菜单。 单击 **{% data variables.product.prodname_copilot %}**，然后单击**登录 {% data variables.product.prodname_dotcom %}**。 ![JetBrains 工具菜单的屏幕截图](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. 在“登录 {% data variables.product.prodname_dotcom %}”对话框中，若要复制设备代码并打开设备激活窗口，请单击 **Copy and Open（复制并打开）**。 ![设备代码复制和打开的屏幕截图](/assets/images/help/copilot/device-code-copy-and-open.png)
1. 将在浏览器中打开一个设备激活窗口。 粘贴设备代码，然后单击 **Continue（继续）**。

   - 要将代码粘贴到 Windows 或 Linux 中，请按 <kbd>Ctrl</kbd>+<kbd>v</kbd>。
   - 要将代码粘贴到 macOS 中，请按 <kbd>command</kbd>+<kbd>v</kbd>。
1. {% data variables.product.prodname_dotcom %} 将请求 {% data variables.product.prodname_copilot %} 的必要权限。 要批准这些权限，请单击**授权 {% data variables.product.prodname_copilot %} 插件**。
1. 权限获得批准后，您的 JetBrains IDE 将显示确认。 要开始使用 {% data variables.product.prodname_copilot %}，请单击 **OK（确定）**。 ![JetBrains IDE 权限确认的屏幕截图](/assets/images/help/copilot/jetbrains-ide-confirmation.png)


## 看到您的第一个建议

{% data reusables.copilot.supported-languages %} 以下示例使用 Java，但其他语言的工作方式类似。

{% data reusables.copilot.create-java-file %}
1. 在 Java 文件中，键入 `class Test` 来创建类。
   {% data variables.product.prodname_copilot %} 将自动以灰色文本建议类正文，如下所示。 确切的建议可能会有所不同。
   ![Java 类正文建议的屏幕截图](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}
1. 若要提示 {% data variables.product.prodname_copilot %} 建议函数体，请在 `main` 函数的括号下方键入以下行。 确切的建议可能会有所不同。
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Java 函数体建议的屏幕截图](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} 将尝试匹配代码的上下文和样式。 您始终可以编辑建议的代码。

## 查看替代建议

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. 要提示 {% data variables.product.prodname_copilot %} 向您显示建议，请在 Java 文件中键入以下行。
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
{% data reusables.copilot.see-alternative-suggestions %}

   | 操作系统    | 查看下一个建议                        | 查看以前的建议                        |
   |:------- |:------------------------------ |:------------------------------ |
   | macOS   | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd>    | <kbd>Alt</kbd>+<kbd>[</kbd>    |
   | Linux   | <kbd>Alt</kbd>+<kbd>]</kbd>    | <kbd>Alt</kbd>+<kbd>[</kbd>    |
{% data reusables.copilot.accept-or-reject-suggestion %}

## 在新选项卡中查看多个建议

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. 要提示 {% data variables.product.prodname_copilot %} 向您显示建议，请在 Java 文件中键入以下行。
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. 打开包含多个其他建议的新选项卡。
    - 在 macOS 上，按 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>，然后单击 **Open GitHub Copilot（打开 GitHub Copilot）**，或按 <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> 立即打开新选项卡。
    - 在 Windows 或 Linux 上，按 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>，然后按 **Open GitHub Copilot（打开 GitHub Copilot）**。 ![打开 Copilot 的对话屏幕截图](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. 若要接受建议，请在建议上方单击 **Accept Solution（接受解决方案）**。 若要拒绝所有建议，请关闭该选项卡。

## 从注释生成代码建议

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. 要提示 {% data variables.product.prodname_copilot %} 建议 Java 文件中函数的实现，请键入以下行。
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Java 函数体建议的屏幕截图](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## 启用和禁用 {% data variables.product.prodname_copilot %}

您可以为所有语言或单个语言启用或禁用 {% data variables.product.prodname_copilot %}。 JetBrains IDE 窗口底部面板中的 {% data variables.product.prodname_copilot %} 状态图标指示是启用还是禁用 {% data variables.product.prodname_copilot %}。 启用后，该图标将突出显示。 禁用后，图标将灰显。

1. 要启用或禁用 {% data variables.product.prodname_copilot %}，请单击 JetBrains 窗口底部面板中的状态图标。 ![IntelliJ IDEA 中状态图标的屏幕截图](/assets/images/help/copilot/status-icon-jetbrains.png)
2. 如果要禁用 {% data variables.product.prodname_copilot %}，系统将询问您是要全局禁用它，还是要禁用当前正在编辑的文件的语言。

   - 要禁用来自全局 {% data variables.product.prodname_copilot %} 的建议，请单击 **Disable Completions（禁用完成）**。
   - 要禁用来自指定语言的 {% data variables.product.prodname_copilot %} 的建议，请单击 **Disable Completions for _LANGUAGE_（禁用[语言]的完成）**。 ![全局禁用 {% data variables.product.prodname_copilot %} 或当前语言禁用选项的屏幕截图](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## 延伸阅读

- [{% data variables.product.prodname_copilot %} 网站](https://copilot.github.com/)
- [关于 {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
