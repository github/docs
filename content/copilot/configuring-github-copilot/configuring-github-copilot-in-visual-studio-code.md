---
title: Configuring GitHub Copilot in Visual Studio Code
intro: 'You can enable, configure, and disable {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: 'copilot'
shortTitle: Visual Studio Code
topics: 
  - Copilot
---

## Keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts in {% data variables.product.prodname_vscode %} when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command. You can search for each keyboard shortcut by command name in the Keyboard Shortcuts editor.

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|On macOS: <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> On Windows or Linux: <kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|On macOS: <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> On Windows or Linux: <kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|On macOS: <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> On Windows or Linux: <kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

## Rebinding keyboard shortcuts

1. Click the **File** menu, click **Preferences**, then click **Keyboard Shortcuts**.
![Visual Studio Code keyboard shortcuts](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
![Keyboard shortcut search bar](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. Next to the command you want to change, click the pencil icon.
![Keyboard shortcut editor](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.
![Edit keyboard shortcut](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

## Enabling or disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} from within {% data variables.product.prodname_vscode %}. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the {% data variables.product.prodname_vscode %} window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the background color of the icon will match the color of the status bar. When disabled, the background color of the icon will contrast the color of the status bar.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel of the {% data variables.product.prodname_vscode %} window.
   ![Status icon in {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/status-icon-visual-studio-code.png)
2. If you are disabling {% data variables.product.prodname_copilot %}, Visual Studio Code will ask whether you want to disable it globally, or only for the language of the file you are currently editing. To disable globally, click **Disable globally**. Alternatively, click the language-specific button to disable {% data variables.product.prodname_copilot %} for the specified language.
   ![Disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage.png)

## Enabling and disabling inline suggestions

You can choose to enable or disable inline suggestions in Visual Studio Code. 

1. In the **File** menu, navigate to **Preferences** and click **Settings**.
![Visual Studio Code settings](/assets/images/help/copilot/vsc-settings.png)
1. In the left-side panel of the settings tab, click **Extensions** and then select **Copilot**.
1. Under "Inline Suggest:Enabled", select or deselect to enable or disable inline suggestions.

## Enabling and disabling {% data variables.product.prodname_copilot %} for specific languages

You can specify which languages you want to enable or disable {% data variables.product.prodname_copilot %} for.

1. Display the **Copilot** section in the **Extensions** tab of the Visual Studio Code settings page. For more information, see "[Enabling and disabling inline suggestions](#enabling-and-disabling-inline-suggestions)."
1. Under "Enable or disable Copilot for specified languages", click **Edit in settings.json**.
1. In the settings.json file, add or remove the languages for which you want to enable or disable {% data variables.product.prodname_copilot %}. For example, to enable Python in {% data variables.product.prodname_copilot %}, add `"python": true` to the JSON list.

{% data reusables.copilot.dotcom-settings %}
