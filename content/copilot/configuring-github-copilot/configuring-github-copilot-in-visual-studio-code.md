---
title: Configuring GitHub Copilot in Visual Studio Code
intro: 'You can enable, configure, and disable {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
---

## About {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}

If you use {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within {% data variables.product.prodname_vscode %} or on {% data variables.product.prodname_dotcom_the_website %}.

## Prerequisites

To configure {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[Getting started with {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code)."

## Keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts in {% data variables.product.prodname_vscode %} when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command. You can search for each keyboard shortcut by command name in the Keyboard Shortcuts editor.

{% mac %}

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

{% endmac %}

{% windows %}

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

{% endwindows %}


{% linux %}

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

{% endlinux %}

## Rebinding keyboard shortcuts

If you don't want to use the default keyboard shortcuts in {% data variables.product.prodname_vscode %} when using {% data variables.product.prodname_copilot %}, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command.

1. Click the **File** menu, click **Preferences**, then click **Keyboard Shortcuts**.
![Screenshot of Visual Studio Code keyboard shortcuts](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
![Screenshot of Keyboard shortcut search bar](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. Next to the command you want to change, click the pencil icon.
![Screenshot of Keyboard shortcut editor](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.
![Screenshot of Edit keyboard shortcut textbox](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Enabling or disabling inline suggestions

You can choose to enable or disable inline suggestions for {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}. 

1. In the **File** menu, navigate to **Preferences** and click **Settings**.
![Screenshot of {% data variables.product.prodname_vscode %} settings](/assets/images/help/copilot/vsc-settings.png)
1. In the left-side panel of the settings tab, click **Extensions** and then select **Copilot**.
1. Under "Inline Suggest:Enable", select or deselect the checkbox to enable or disable inline suggestions.

## Enabling or disabling {% data variables.product.prodname_copilot %} for specific languages

You can specify which languages you want to enable or disable {% data variables.product.prodname_copilot %} for.

1. From the {% data variables.product.prodname_vscode %}, click the **Extensions** tab, then navigate to the **Copilot** section. For more information, see "[Enabling and disabling inline suggestions](#enabling-and-disabling-inline-suggestions)."
1. Under "Enable or disable Copilot for specified languages", click **Edit in settings.json**.
1. In the _settings.json_ file, add or remove the languages you want to enable or disable {% data variables.product.prodname_copilot %} for. For example, to enable Python in {% data variables.product.prodname_copilot %}, add `"python": true` to the list, ensuring there is a trailing comma after all but the last list item.

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

{% data reusables.copilot.dotcom-settings %}
