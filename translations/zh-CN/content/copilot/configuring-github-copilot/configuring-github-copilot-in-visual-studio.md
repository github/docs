---
title: 在 Visual Studio 中配置 GitHub Copilot
intro: '可以在 {% data variables.product.prodname_vs %} 中启用、配置和禁用 {% data variables.product.prodname_copilot %}。'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio
topics:
  - Copilot
ms.openlocfilehash: cb24557b15eafd4a5be8ef1a991ae3c43f376c67
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147786027'
---
## 关于 {% data variables.product.prodname_vs %} 中的 {% data variables.product.prodname_copilot %}

如果使用 {% data variables.product.prodname_vs %}，{% data variables.product.prodname_copilot %} 可以在你键入时自动完成代码。 安装后，可以启用或禁用 {% data variables.product.prodname_copilot %}，并且可以在 {% data variables.product.prodname_vs %} 或 {% data variables.product.prodname_dotcom_the_website %} 上配置高级设置。

## 先决条件

要在 {% data variables.product.prodname_vs %} 中配置 {% data variables.product.prodname_copilot %}，必须安装 {% data variables.product.prodname_copilot %} 插件。 有关详细信息，请参阅“[{% data variables.product.prodname_vs %} 中的 {% data variables.product.prodname_copilot %} 入门指南](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio)”。

## {% data variables.product.prodname_copilot %} 的键盘快捷方式

使用 {% data variables.product.prodname_copilot %} 时，可使用 {% data variables.product.prodname_vs %} 中的默认键盘快捷方式。 或者，可使用每个特定命令的首选键盘快捷方式重新绑定 {% data variables.product.prodname_vs %} 的“工具设置”中的快捷方式。 可以在键盘快捷方式编辑器中按命令名称搜索每个键盘快捷方式。

| 操作 | 快捷键 | 命令名称 |
|:---|:---|:---|
|显示下一个内联建议|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>]</kbd>|Tools.Nextsuggestion|
|显示上一个内联建议|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>[</kbd>|Tools.Previoussuggestion|
|触发内联建议|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## 重新绑定键盘快捷方式

如果不想在使用 {% data variables.product.prodname_copilot %} 时使用 {% data variables.product.prodname_vs %} 中的默认键盘快捷方式，可使用每个特定命令的首选键盘快捷方式在键盘编辑器中重新绑定快捷方式。

1. 在 {% data variables.product.prodname_vs %} 工具栏中的“工具”下，单击“选项” 。
   ![{% data variables.product.prodname_vs %} 工具栏中“选项”选项的屏幕截图](/assets/images/help/copilot/vs-toolbar-options.png)
1. 在“选项”对话框中的“环境”下，单击“键盘” 。
   ![“选项”对话框中“键盘”选项的屏幕截图](/assets/images/help/copilot/vs-options-dialogue.png)
1. 在“显示命令包含:”下，搜索要重新绑定的命令。
   ![“显示命令包含”搜索栏的屏幕截图](/assets/images/help/copilot/vs-show-commands-containing.png)
1. 在“按快捷键”下，键入要分配给命令的快捷键，然后单击“分配”。
   ![键盘快捷方式分配的屏幕截图](/assets/images/help/copilot/vs-rebind-shortcut.png)

{% data reusables.copilot.enabling-or-disabling-vs %}

## 为 {% data variables.product.prodname_copilot %} 配置 ReSharper

如果使用 ReSharper，当你将 ReSharper 配置为使用 {% data variables.product.prodname_copilot %} 的本机 IntelliSense 时，{% data variables.product.prodname_copilot %} 可能效果最佳。 有关 ReSharper 的详细信息，请参阅 [ReSharper 文档](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. 在 {% data variables.product.prodname_vs %} 工具栏中的“工具”下，单击“选项” 。
   ![{% data variables.product.prodname_vs %} 工具栏中“选项”选项的屏幕截图](/assets/images/help/copilot/vs-toolbar-options.png)
1. 在“选项”对话框中的“环境”下，单击“IntelliSense”，然后单击“常规”  。
    ![“选项”对话框中 IntelliSense 选项的屏幕截图](/assets/images/help/copilot/vs-options-intellisense.png)
1. 在“常规”下选择 Visual Studio，然后单击“保存” 。

{% data reusables.copilot.dotcom-settings %}
