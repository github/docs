---
title: 在 Visual Studio 中开始使用 GitHub Copilot
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: '了解如何在 {% data variables.product.prodname_vs %} 中安装 {% data variables.product.prodname_copilot %}，并在编写注释和代码时开始查看建议。'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 353095b0b0490cd12da8d853754b524431605819
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185123'
---
{% data reusables.copilot.copilot-cta-button %}

## 关于 {% data variables.product.prodname_copilot %} 和 Visual Studio

{% data reusables.copilot.procedural-intro %}

如果使用 {% data variables.product.prodname_vs %}，可以直接在编辑器中查看并合并来自 {% data variables.product.prodname_copilot %} 的建议。 本指南演示如何在适用于 Windows 的 {% data variables.product.prodname_vs %} 中使用 {% data variables.product.prodname_copilot %}。

## 先决条件

若要在 {% data variables.product.prodname_vs %} 中使用 {% data variables.product.prodname_copilot %}，必须安装 {% data variables.product.prodname_vs %} 2022 17.2 或更高版本。 有关详细信息，请参阅 [Visual Studio IDE](https://visualstudio.microsoft.com/vs/) 文档。

{% note %}

注意：{% data variables.product.prodname_copilot %} 当前不适用于 Visual Studio for Mac。

{% endnote %}

## 安装 {% data variables.product.prodname_vs %} 扩展

若要使用 {% data variables.product.prodname_copilot %}，必须先安装 {% data variables.product.prodname_vs %} 扩展。
1. 在 Visual Studio 工具栏中，单击“扩展”，然后单击“管理扩展”。
   ![Visual Studio 工具栏的屏幕截图](/assets/images/help/copilot/visual-studio-toolbar.png)
1. 在“管理扩展”窗口中，单击“Visual Studio Marketplace”，搜索 {% data variables.product.prodname_copilot %} 扩展，然后单击“下载”。
   ![Visual Studio GitHub Copilot 扩展的屏幕截图，其中突出显示了“下载”按钮](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. 关闭“管理扩展”窗口，然后退出并重新启动 {% data variables.product.prodname_vs %}。
1. （可选）若要检查是否已安装并启用 {% data variables.product.prodname_copilot %}，请返回到“管理扩展”，单击“已安装的扩展”以查看当前安装的扩展，然后单击“{% data variables.product.prodname_copilot %}”以查看状态信息。
  ![Visual Studio 中已安装的扩展的屏幕截图，其中突出显示 GitHub Copilot](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. 在 {% data variables.product.prodname_vs %} 中打开或创建新项目。 
1. 在“Microsoft {% data variables.product.prodname_vs %}”对话框中，若要复制设备激活代码，请单击“确定”。
   ![“Microsoft {% data variables.product.prodname_vs %}”对话框的屏幕截图](/assets/images/help/copilot/vs-auth-dialogue.png)
1. 设备激活窗口将在浏览器中打开。 粘贴设备代码，然后单击“继续”。

   - 若要在 Windows 或 Linux 中粘贴代码，请按 <kbd>Ctrl</kbd>+<kbd>v</kbd>。
   - 若要在 macOS 中粘贴代码，请按 <kbd>command</kbd>+<kbd>v</kbd>。
1. {% data variables.product.prodname_dotcom %} 将请求 {% data variables.product.prodname_copilot %} 所需的权限。 若要批准这些权限，请单击“授权 {% data variables.product.prodname_copilot %} 插件”。
1. 批准权限后，{% data variables.product.prodname_vs %} 将显示确认。
   ![{% data variables.product.prodname_vs %} 权限确认的屏幕截图](/assets/images/help/copilot/vs-confirmation.png)

## 查看第一个建议

{% data reusables.copilot.code-examples-limitations %} {% data reusables.copilot.supported-languages %} 以下示例使用的是 C#，但其他语言的工作方式类似。

{% data reusables.copilot.create-c-file %}
1. 在 C# 文件中，键入以下函数签名。 {% data variables.product.prodname_copilot %} 将自动以灰色文本建议整个函数正文，如下所示。 具体的建议可能会有所不同。
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![第一个建议 Visual Studio Code 的屏幕截图](/assets/images/help/copilot/first-suggestion-visual-studio.png) {% data reusables.copilot.accept-suggestion %}
 
## 查看替代建议
{% data reusables.copilot.alternative-suggestions %} {% data reusables.copilot.create-c-file %}
1. 在 C# 文件中，键入以下函数签名。 {% data variables.product.prodname_copilot %} 将向你显示建议。

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. 如果替代建议可用，可以通过按 <kbd>Alt</kbd>+]<kbd>（或 </kbd>Alt<kbd></kbd>+<kbd>[</kbd>）来查看这些替代项。
1. 或者，可以将鼠标悬停在建议上方，查看 {% data variables.product.prodname_copilot %} 命令面板以选择建议。
{% data reusables.copilot.accept-or-reject-suggestion %}

## 从注释生成代码建议

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. 在 C# 文件中，键入以下注释。 {% data variables.product.prodname_copilot %} 将建议函数的实现。
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");
   
   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## 延伸阅读

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
