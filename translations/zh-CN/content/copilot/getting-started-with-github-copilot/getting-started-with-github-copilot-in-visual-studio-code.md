---
title: Getting started with GitHub Copilot in Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, and start seeing suggestions as you write comments and code.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
---

## 关于 {% data variables.product.prodname_copilot %} 与 {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

If you use {% data variables.product.prodname_vscode %}, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within {% data variables.product.prodname_vscode %} for macOS, Windows, or Linux.

## 基本要求

To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must have {% data variables.product.prodname_vscode %} installed. For more information, see the [{% data variables.product.prodname_vscode %} download page](https://code.visualstudio.com/Download).

## Installing the {% data variables.product.prodname_vscode %} extension

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_vscode %} extension.

1. In the {% data variables.product.prodname_vscode %} Marketplace, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**. ![Install {% data variables.product.prodname_copilot %} extension {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. A popup will appear, asking to open {% data variables.product.prodname_vscode %}. Click **Open {% data variables.product.prodname_vscode %}**.
1. In the "Extension: {% data variables.product.prodname_copilot %}" tab in {% data variables.product.prodname_vscode %}, click **Install**. ![Install button in {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. If you have not previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, you will be prompted to sign in to {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %}.
   - If you have previously authorized {% data variables.product.prodname_vscode %} for your account on {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} will be automatically authorized. ![Screen shot of {% data variables.product.prodname_vscode %} authorization screen](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_vscode %}**.
1. In {% data variables.product.prodname_vscode %}, in the "{% data variables.product.prodname_vscode %}" dialog box, to confirm the authentication, click **Open**.


## 看到您的第一个建议

{% data reusables.copilot.supported-languages %} The following samples are in JavaScript, but other languages will work similarly.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} 将自动以灰色文本建议整个函数体，如下所示。 确切的建议可能会有所不同。
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![Screenshot of a first suggestion {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png)
{% data reusables.copilot.accept-suggestion %}

## 查看替代建议

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} 会给你一个建议。
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | 操作系统    | 查看下一个建议                                   | 查看以前的建议                                   |
   |:------- |:----------------------------------------- |:----------------------------------------- |
   | macOS   | <kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd> | <kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd>               | <kbd>Alt</kbd>+<kbd>[</kbd>               |
   | Linux   | <kbd>Alt</kbd>+<kbd>]</kbd>               | <kbd>Alt</kbd>+<kbd>[</kbd>               |
1. Alternatively, you can hover over the suggestion to see the {% data variables.product.prodname_copilot %} command palette for choosing suggestions.
{% data reusables.copilot.accept-or-reject-suggestion %}

## 在新选项卡中查看多个建议

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following function header. {% data variables.product.prodname_copilot %} 会给你一个建议。
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. 要打开包含多个其他选项的新选项卡，请按 <kbd>Ctrl</kbd>+<kbd>Enter</kbd>。
1. 若要接受建议，请在建议上方单击 **Accept Solution（接受解决方案）**。 若要拒绝所有建议，请关闭该选项卡。

## 从注释生成代码建议

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. 在 JavaScript 文件中，键入以下注释。 {% data variables.product.prodname_copilot %} 将建议该函数的实现。
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## 使用框架

您还可以使用 {% data variables.product.prodname_copilot %} 来生成 API 和框架的建议。 The following example uses {% data variables.product.prodname_copilot %} to create a simple Express server that returns the current time.

{% data reusables.copilot.create-js-file %}
1. In the JavaScript file, type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation of the Express app.
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. To accept each line, press <kbd>Tab</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## 延伸阅读

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
