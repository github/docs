---
title: Configuring GitHub Copilot in a JetBrains IDE
intro: 'You can enable, configure, and disable {% data variables.product.prodname_copilot %} in a JetBrains IDE.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
---

## About {% data variables.product.prodname_copilot %} in JetBrains IDEs

If you use a Jetbrains IDE, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within your IDE or on {% data variables.product.prodname_dotcom_the_website %}.

## Prerequisites

To configure {% data variables.product.prodname_copilot %} in a JetBrains IDE, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[Getting started with {% data variables.product.prodname_copilot %} in a JetBrains IDE](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)."

## Keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts for inline suggestions in your JetBrains IDE when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts to your preferred keyboard shortcuts for each specific command. For more information on rebinding keyboard shortcuts in your JetBrains IDE, see the JetBrains documentation. For example, you can view the [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) documentation.

{% mac %}

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Option (⌥)</kbd>+<kbd>\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Option (⌥) or Alt</kbd>+<kbd>Return</kbd> |

{% endmac %}

{% windows %}

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endwindows %}

{% linux %}

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endlinux %}

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
1. Edit the settings according to your personal preferences.
   - To adjust the behaviour and appearance of code suggestions, and whether to automatically check for updates, select or deselect the corresponding checkboxes.
   - If you have selected to receive automatic updates, you can choose whether to receive stable, but less frequent updates, or nightly updates, which may be less stable. Click the **Update channel** dropdown and select **Stable** for stable updates, or **Nightly** for nightly updates.
   - Under "Disabled languages", use the checkboxes to select or deselect the languages you want to disable {% data variables.product.prodname_copilot %} for.

{% data reusables.copilot.dotcom-settings %}
