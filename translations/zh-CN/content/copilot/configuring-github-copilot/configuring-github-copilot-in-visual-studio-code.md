---
title: 在 Visual Studio Code 中配置 GitHub Copilot
intro: '可以在 {% data variables.product.prodname_vscode %} 中启用、配置和禁用 {% data variables.product.prodname_copilot %}。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: ab043d4eeca2003deaf77aa80be46fc79acf8649
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193251'
---
## 关于 {% data variables.product.prodname_vscode %} 中的 {% data variables.product.prodname_copilot %}

如果使用 {% data variables.product.prodname_vscode %}，{% data variables.product.prodname_copilot %} 可以在你键入时自动完成代码。 安装完成后，可以启用或禁用 {% data variables.product.prodname_copilot %}，并且可以在 {% data variables.product.prodname_vscode %} 或 {% data variables.product.prodname_dotcom_the_website %} 上配置高级设置。

## 先决条件

若要在 {% data variables.product.prodname_vscode %} 中配置 {% data variables.product.prodname_copilot %}，必须安装 {% data variables.product.prodname_copilot %} 插件。 有关详细信息，请参阅“[{% data variables.product.prodname_vscode %} 中的 {% data variables.product.prodname_copilot %} 入门指南](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code)”。

## {% data variables.product.prodname_copilot %} 的键盘快捷方式

使用 {% data variables.product.prodname_copilot %} 时，可使用 {% data variables.product.prodname_vscode %} 中的默认键盘快捷方式。 也可使用每个特定命令的首选键盘快捷方式在键盘快捷方式编辑器中重新绑定快捷方式。 可以在键盘快捷方式编辑器中按命令名称搜索每个键盘快捷方式。

{% mac %}

| 操作 | 快捷键 | 命令名称 |
|:---|:---|:---|
|接受内联建议|<kbd>选项卡</kbd>|editor.action.inlineSuggest.commit|
|忽略内联建议|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|显示下一个内联建议| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|显示上一个内联建议| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|触发内联建议| <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|打开 {% data variables.product.prodname_copilot %}（单独窗格中的其他建议）|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|开启/关闭 {% data variables.product.prodname_copilot %}|没有默认快捷方式|github.copilot.toggleCopilot|

{% endmac %}

{% windows %}

| 操作 | 快捷键 | 命令名称 |
|:---|:---|:---|
|接受内联建议|<kbd>选项卡</kbd>|editor.action.inlineSuggest.commit|
|忽略内联建议|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|显示下一个内联建议|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|显示上一个内联建议|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|触发内联建议|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|打开 {% data variables.product.prodname_copilot %}（单独窗格中的其他建议）|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|开启/关闭 {% data variables.product.prodname_copilot %}|没有默认快捷方式|github.copilot.toggleCopilot|

{% endwindows %}


{% linux %}

| 操作 | 快捷键 | 命令名称 |
|:---|:---|:---|
|接受内联建议|<kbd>选项卡</kbd>|editor.action.inlineSuggest.commit|
|忽略内联建议|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|显示下一个内联建议|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|显示上一个内联建议|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|触发内联建议|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|打开 {% data variables.product.prodname_copilot %}（单独窗格中的其他建议）|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|开启/关闭 {% data variables.product.prodname_copilot %}|没有默认快捷方式|github.copilot.toggleCopilot|

{% endlinux %}

## 重新绑定键盘快捷方式

如果不想在使用 {% data variables.product.prodname_copilot %} 时使用 {% data variables.product.prodname_vscode %} 中的默认键盘快捷方式，可使用每个特定命令的首选键盘快捷方式在键盘快捷方式编辑器中重新绑定快捷方式。

1. 依次单击“文件”菜单、“首选项”和“键盘快捷方式”  。
![Visual Studio Code 键盘快捷方式的屏幕截图](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. 在“键盘快捷方式”编辑器中，搜索要更改的键盘快捷方式的命令名称。
![键盘快捷方式搜索栏的屏幕截图](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. 在要更改的命令旁边，单击铅笔图标。
![键盘快捷方式编辑器的屏幕截图](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. 键入要用于命令的按键，然后按 <kbd>Enter</kbd>/<kbd>Return</kbd>。
![“编辑键盘快捷方式”文本框的屏幕截图](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## 启用或禁用内联建议

可以选择在 {% data variables.product.prodname_vscode %} 中启用或禁用 {% data variables.product.prodname_copilot %} 的内联建议。 

{% data reusables.copilot.vscode-settings %}
1. 在“设置”选项卡的左侧面板中，单击“扩展”，然后选择“{% data variables.product.prodname_copilot_short %}” 。
1. 在“内联建议: 启用”下，选中或取消选中该复选框以启用或禁用内联建议。

## 启用或禁用特定语言的 {% data variables.product.prodname_copilot %}

可以指定要为其启用或禁用 {% data variables.product.prodname_copilot %} 的语言。

1. 在 {% data variables.product.prodname_vscode %} 中，单击“扩展”选项卡，然后导航到“Copilot”部分 。 有关详细信息，请参阅“[启用和禁用内联建议](#enabling-and-disabling-inline-suggestions)”。
1. 在“启用或禁用指定语言的 {% data variables.product.prodname_copilot_short %}”下，单击“在 settings.json 中进行编辑”。
1. 在 settings.json 文件中，添加或删除要为其启用或禁用 {% data variables.product.prodname_copilot %} 的语言。 例如，要在 {% data variables.product.prodname_copilot %} 中启用 Python，请将 `"python": true` 添加到列表中，确保除了最后一个列表项之外还有一个尾随逗号。

    ```json
    {
        "editor.inlineSuggest.enabled": true,
        "github.copilot.enable": {
            "*": true,
            "yaml": false,
            "plaintext": false,
            "markdown": true,
            "javascript": true,
            "python": true
        }
    }
    ```

## 配置 {% data variables.product.prodname_copilot %} 的代理设置

可以将 {% data variables.product.prodname_copilot %} 配置为通过 {% data variables.product.prodname_vscode %} 中的 HTTP 代理服务器进行连接。 {% data variables.product.prodname_copilot %} 支持基本 HTTP 代理设置，无论是否使用基本身份验证。 

{% data reusables.copilot.vscode-settings %}
1. 在“设置”选项卡的左侧面板中，单击“应用程序”，然后选择“代理” 。
1. 在“代理”下的文本框中，键入代理服务器的地址，例如 `http://localhost:3128`。 或者，{% data variables.product.prodname_copilot %} 将使用环境中的 `http_proxy` 和 `https_proxy` 变量。

   ![Visual Studio Code 代理文本框的屏幕截图](/assets/images/help/copilot/proxy-textbox.png)

1. （可选）在“Http: 代理授权”下，选择“在 settings.json 中进行编辑”，然后添加所需的值作为每个网络请求的 `Proxy-Authorization` 标头发送。

   ![Visual Studio Code 代理授权文本框的屏幕截图](/assets/images/help/copilot/proxy-authorization.png)

1. （可选）在“Http：代理严格 SSL”下，选中或取消选中用于启用或禁用严格 SSL 的复选框。

   ![Visual Studio Code 代理严格 SSL 复选框的屏幕截图](/assets/images/help/copilot/proxy-strict-ssl.png)

{% data reusables.copilot.dotcom-settings %}
