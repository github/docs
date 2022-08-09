---
title: 在 JetBrains IDE 中配置 GitHub Copilot
intro: '您可以在 JetBrains IDE 中启用、配置和禁用 {% data variables.product.prodname_copilot %}。'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
---

## 关于 JetBrains IDE 中的 {% data variables.product.prodname_copilot %}

如果使用 Jetbrains IDE， {% data variables.product.prodname_copilot %} 可以在键入时自动完成代码。 安装后，可以启用或禁用 {% data variables.product.prodname_copilot %}，并且可以在 IDE 中或 {% data variables.product.prodname_dotcom_the_website %} 上配置高级设置。

## 基本要求

要在 JetBrains IDE 中配置 {% data variables.product.prodname_copilot %} ，必须安装 {% data variables.product.prodname_copilot %} 插件。 更多信息请参阅“[JetBrains IDE中的 {% data variables.product.prodname_copilot %} 使用入门](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)”。

## {% data variables.product.prodname_copilot %} 的键盘快捷键

使用 {% data variables.product.prodname_copilot %} 时，您可以在 JetBrains IDE 中对内联建议使用默认键盘快捷键。 或者，您可以将每个特定命令的快捷键重新绑定到首选键盘快捷键。 有关在 JetBrains IDE 中重新绑定键盘快捷键的更多信息，请参阅 JetBrains 文档。 例如，您可以查看 [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) 文档。

{% mac %}

| 操作                                                             | 快捷键                                           |
|:-------------------------------------------------------------- |:--------------------------------------------- |
| 接受内联建议                                                         | <kbd>Tab</kbd>                                |
| 忽略内联建议                                                         | <kbd>Esc</kbd>                                |
| 显示下一个内联建议                                                      | <kbd>Option (⌥) 或 Alt</kbd>+<kbd>]</kbd>      |
| 显示上一个内联建议                                                      | <kbd>Option (⌥) 或 Alt</kbd>+<kbd>[</kbd>      |
| 触发内联建议                                                         | <kbd>Option (⌥)</kbd>+<kbd>\</kbd>           |
| 打开 {% data variables.product.prodname_copilot %} （其他建议在单独的窗格中） | <kbd>Option (⌥) 或 Alt</kbd>+<kbd>Return</kbd> |

{% endmac %}

{% windows %}

| 操作                                                             | 快捷键                             |
|:-------------------------------------------------------------- |:------------------------------- |
| 接受内联建议                                                         | <kbd>Tab</kbd>                  |
| 忽略内联建议                                                         | <kbd>Esc</kbd>                  |
| 显示下一个内联建议                                                      | <kbd>Alt</kbd>+<kbd>]</kbd>     |
| 显示上一个内联建议                                                      | <kbd>Alt</kbd>+<kbd>[</kbd>     |
| 触发内联建议                                                         | <kbd>Alt</kbd>+<kbd>\</kbd>    |
| 打开 {% data variables.product.prodname_copilot %} （其他建议在单独的窗格中） | <kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endwindows %}

{% linux %}

| 操作                                                             | 快捷键                             |
|:-------------------------------------------------------------- |:------------------------------- |
| 接受内联建议                                                         | <kbd>Tab</kbd>                  |
| 忽略内联建议                                                         | <kbd>Esc</kbd>                  |
| 显示下一个内联建议                                                      | <kbd>Alt</kbd>+<kbd>]</kbd>     |
| 显示上一个内联建议                                                      | <kbd>Alt</kbd>+<kbd>[</kbd>     |
| 触发内联建议                                                         | <kbd>Alt</kbd>+<kbd>\</kbd>    |
| 打开 {% data variables.product.prodname_copilot %} （其他建议在单独的窗格中） | <kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endlinux %}

## 启用或禁用 {% data variables.product.prodname_copilot %}

您可以从 JetBrains IDE 中启用或禁用 {% data variables.product.prodname_copilot %}。 JetBrains 窗口底部面板中的 {% data variables.product.prodname_copilot %} 状态图标指示是启用还是禁用 {% data variables.product.prodname_copilot %}。 启用后，该图标将突出显示。 禁用后，图标将灰显。

1. 要启用或禁用 {% data variables.product.prodname_copilot %}，请单击 JetBrains 窗口底部面板中的状态图标。 ![JetBrains 中的状态图标](/assets/images/help/copilot/status-icon-jetbrains.png)
2. 如果要禁用 {% data variables.product.prodname_copilot %}，系统将询问您是要全局禁用它，还是要禁用当前正在编辑的文件的语言。 要全局禁用，请单击 **Disable Completions（禁用完成）**。 或者，单击特定于语言的按钮以禁用指定语言的 {% data variables.product.prodname_copilot %}。 ![全局禁用 {% data variables.product.prodname_copilot %} 或当前语言](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## 配置 {% data variables.product.prodname_copilot %} 的高级设置

您可以在 JetBrains IDE 中管理 {% data variables.product.prodname_copilot %} 的高级设置，例如 IDE 显示代码完成的方式，以及要为 {% data variables.product.prodname_copilot %} 启用或禁用的语言。

1. 在 JetBrains IDE 中，单击 **File（文件）**菜单，然后单击 **Settings（设置）**。
1. 在 **Languages & Frameworks（语言和框架）**下，单击 **{% data variables.product.prodname_copilot %}**。
1. 根据您的个人喜好编辑设置。
   - 要调整代码建议的行为和外观，以及是否自动检查更新，请选中或取消选中相应的复选框。
   - 如果已选择接收自动更新，则可以选择是接收稳定但频率较低的更新，还是接收可能不太稳定的每夜更新。 单击 **Update channel（更新通道）**下拉列表，然后选择 **Stable（稳定）**以接收稳定更新，或选择 **Nightly（每夜）**以接收每夜更新。
   - 在“Disabled languages（禁用的语言）”下，使用复选框选择或取消选择您想要对 {% data variables.product.prodname_copilot %} 禁用的语言。

{% data reusables.copilot.dotcom-settings %}
