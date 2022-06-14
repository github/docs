---
title: Configuring GitHub Copilot in JetBrains
intro: 'You can enable, configure, and disable {% data variables.product.prodname_copilot %} in a JetBrains IDE.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
 feature: 'copilot'
shortTitle: JetBrains
---

## Keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts in JetBrains when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts to your preferred keyboard shortcuts for each specific command. For more information on rebinding keyboard shortcuts in JetBrains, see the [JetBrains](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) documentation.

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|On macOS: <kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd><br> On Windows: <kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|On macOS: <kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd><br> On Windows: <kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|On macOS: <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> On Windows: <kbd>Alt</kbd>+<kbd>\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|On macOS: <kbd>Option (⌥) or Alt</kbd>+<kbd>Enter</kbd><br> On Windows: <kbd>Alt</kbd>+<kbd>Enter</kbd> |

## Enabling or disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} from within your JetBrains IDE. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the JetBrains window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel of the JetBrains window.
   ![Status icon in JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing. To disable globally, click **Disable Completions**. Alternatively, click the language-specific button to disable {% data variables.product.prodname_copilot %} for the specified language.
   ![Disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Configuring advanced settings for {% data variables.product.prodname_copilot %}

You can manage advanced settings for {% data variables.product.prodname_copilot %} in your JetBrains IDE, such as how your IDE displays code completions, and which languages you want to enable or disable for {% data variables.product.prodname_copilot %}.

1. In your JetBrains IDE, click the **File** menu, then click **Settings**.
1. Under **Languages & Frameworks**, click **{% data variables.product.prodname_copilot %}**.
1. Under "Disabled languages", select the languages you want to disable {% data variables.product.prodname_copilot %} for.

AWAITING CONFIRMATION ON QUESTION IN PR

{% data reusables.copilot.dotcom-settings %}