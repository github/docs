---
title: 在 Visual Studio Code 中开始使用 GitHub Copilot
shortTitle: Visual Studio Code
intro: '了解如何在 {% data variables.product.prodname_vscode %} 中安装 {% data variables.product.prodname_copilot %}，并在编写注释和代码时开始查看建议。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: ec117cce02fab8917aef958c69077c521d9c1974
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192767'
---
{% data reusables.copilot.copilot-cta-button %}

## 关于 {% data variables.product.prodname_copilot %} 和 {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

如果使用 {% data variables.product.prodname_vscode %}，可以直接在编辑器中查看并合并来自 {% data variables.product.prodname_copilot %} 的建议。 本指南演示如何在适用于 macOS、Windows 或 Linux 的 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_copilot %}。

## 先决条件

{% data reusables.copilot.subscription-prerequisite %}

- 若要在 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_copilot %}，必须安装 {% data variables.product.prodname_vscode %}。 有关详细信息，请参阅 [{% data variables.product.prodname_vscode %} 下载页面](https://code.visualstudio.com/Download)。

## 安装 {% data variables.product.prodname_vscode %} 扩展

若要使用 {% data variables.product.prodname_copilot %}，必须先安装 {% data variables.product.prodname_vscode %} 扩展。

1. 在 {% data variables.product.prodname_vscode %} 市场中，转到 [{% data variables.product.prodname_copilot %} 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)页，然后单击“安装”。
   ![安装 {% data variables.product.prodname_copilot %} 扩展 {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. 此时会显示一个弹出窗口，要求打开 {% data variables.product.prodname_vscode %}。 单击“打开 {% data variables.product.prodname_vscode %}”。
1. 在 {% data variables.product.prodname_vscode %} 的“扩展: {% data variables.product.prodname_copilot %}”选项卡中，单击“安装”。
   ![{% data variables.product.prodname_vscode %} 中的“安装”按钮](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. 如果以前未在 {% data variables.product.prodname_dotcom %} 帐户中授权 {% data variables.product.prodname_vscode %}，系统会提示你在 {% data variables.product.prodname_vscode %} 中登录到 {% data variables.product.prodname_dotcom %}。
   - 如果以前已在 {% data variables.product.prodname_dotcom %} 上的帐户中授权 {% data variables.product.prodname_vscode %}，系统将会自动授权 {% data variables.product.prodname_copilot %}。
   ![{% data variables.product.prodname_vscode %} 授权屏幕的屏幕截图](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. 在浏览器中，{% data variables.product.prodname_dotcom %} 将请求 {% data variables.product.prodname_copilot %} 所需的权限。 若要批准这些权限，请单击“授权 {% data variables.product.prodname_vscode %}”。
1. 在 {% data variables.product.prodname_vscode %} 的“{% data variables.product.prodname_vscode %}”对话框中，若要确认身份验证，请单击“打开”。
   

## 查看第一个建议

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} 以下示例使用的是 JavaScript，但其他语言的工作方式类似。

{% data reusables.copilot.create-js-file %}
1. 在 JavaScript 文件中，键入以下函数标头。 {% data variables.product.prodname_copilot %} 将自动以灰色文本建议整个函数正文，如下所示。 具体的建议可能会有所不同。
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![第一个建议 {% data variables.product.prodname_vscode %} 的屏幕截图](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## 查看替代建议

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. 在 JavaScript 文件中，键入以下函数标头。 {% data variables.product.prodname_copilot %} 将向你显示建议。
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | OS | 查看下一个建议 | 查看上一个建议 |
   | :- | :- | :- |
   |macOS|<kbd>Option (⌥) 或 Alt</kbd>+<kbd>]</kbd>|<kbd>Option (⌥) 或 Alt</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
1. 或者，可以将鼠标悬停在建议上方，查看 {% data variables.product.prodname_copilot %} 命令面板以选择建议。
{% data reusables.copilot.accept-or-reject-suggestion %}

## 在新选项卡中查看多个建议

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. 在 JavaScript 文件中，键入以下函数标头。 {% data variables.product.prodname_copilot %} 将向你显示建议。
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. 若要打开具有多个其他选项的新选项卡，请按 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>。
1. 若要接受建议，请在建议上方单击“接受解决方案”。 若要拒绝所有建议，请关闭选项卡。

## 从注释生成代码建议

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. 在 JavaScript 文件中，键入以下注释。 {% data variables.product.prodname_copilot %} 将建议函数的实现。
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## 使用框架

还可以使 {% data variables.product.prodname_copilot %} 为 API 和框架生成建议。 以下示例使用 {% data variables.product.prodname_copilot %} 创建将返回当前时间的简单 Express 服务器。

{% data reusables.copilot.create-js-file %}
1. 在 JavaScript 文件中，键入以下注释，然后按 <kbd>Enter</kbd>。 {% data variables.product.prodname_copilot %} 将建议 Express 应用的实现。
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. 若要接受每行，请按 <kbd>Tab</kbd>。

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## 延伸阅读

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
