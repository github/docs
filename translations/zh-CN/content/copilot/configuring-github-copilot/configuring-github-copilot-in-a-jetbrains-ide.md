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

使用 {% data variables.product.prodname_copilot %} 时，您可以在 JetBrains IDE 中对内联建议使用默认键盘快捷键。 Alternatively, you can rebind the shortcuts to your preferred keyboard shortcuts for each specific command. For more information on rebinding keyboard shortcuts in your JetBrains IDE, see the JetBrains documentation. For example, you can view the [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) documentation.

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

您可以从 JetBrains IDE 中启用或禁用 {% data variables.product.prodname_copilot %}。 The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the JetBrains window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. 启用后，该图标将突出显示。 禁用后，图标将灰显。

1. 要启用或禁用 {% data variables.product.prodname_copilot %}，请单击 JetBrains 窗口底部面板中的状态图标。 ![Status icon in JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. 如果要禁用 {% data variables.product.prodname_copilot %}，系统将询问您是要全局禁用它，还是要禁用当前正在编辑的文件的语言。 要全局禁用，请单击 **Disable Completions（禁用完成）**。 或者，单击特定于语言的按钮以禁用指定语言的 {% data variables.product.prodname_copilot %}。 ![Disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Configuring advanced settings for {% data variables.product.prodname_copilot %}

You can manage advanced settings for {% data variables.product.prodname_copilot %} in your JetBrains IDE, such as how your IDE displays code completions, and which languages you want to enable or disable for {% data variables.product.prodname_copilot %}.

1. In your JetBrains IDE, click the **File** menu, then click **Settings**.
1. Under **Languages & Frameworks**, click **{% data variables.product.prodname_copilot %}**.
1. Edit the settings according to your personal preferences.
   - To adjust the behaviour and appearance of code suggestions, and whether to automatically check for updates, select or deselect the corresponding checkboxes.
   - If you have selected to receive automatic updates, you can choose whether to receive stable, but less frequent updates, or nightly updates, which may be less stable. Click the **Update channel** dropdown and select **Stable** for stable updates, or **Nightly** for nightly updates.
   - Under "Disabled languages", use the checkboxes to select or deselect the languages you want to disable {% data variables.product.prodname_copilot %} for.

{% data reusables.copilot.dotcom-settings %}
