---
title: Configuring GitHub Copilot in your environment
shortTitle: In your environment
intro: 'You can enable, configure, or disable {% data variables.product.prodname_copilot %} in a supported IDE.'
product: '{% data reusables.gated-features.copilot %}'
redirect_from:
  - /copilot/configuring-github-copilot/configuring-github-copilot-in-visual-studio
  - /copilot/configuring-github-copilot/configuring-github-copilot-in-visual-studio-code
  - /copilot/configuring-github-copilot/configuring-github-copilot-in-a-jetbrains-ide
  - /copilot/configuring-github-copilot/configuring-github-copilot-in-neovim
topics:
  - Copilot
versions:
  feature: copilot
---

{% jetbrains %}

## About {% data variables.product.prodname_copilot %} in JetBrains IDEs

If you use a JetBrains IDE, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within your IDE or on {% data variables.product.prodname_dotcom_the_website %}. This article describes how to configure {% data variables.product.prodname_copilot %} in the IntelliJ IDE, but the user interfaces of other JetBrains IDEs may differ.

## Prerequisites

To configure {% data variables.product.prodname_copilot %} in a JetBrains IDE, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=jetbrains)."

## Using or rebinding keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts for inline suggestions in your JetBrains IDE when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts to your preferred keyboard shortcuts for each specific command. For more information on rebinding keyboard shortcuts in your JetBrains IDE, see the JetBrains documentation. For example, you can view the [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) documentation.

### Keyboard shortcuts for macOS

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Option (⌥)</kbd>+<kbd>\\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Option (⌥) or Alt</kbd>+<kbd>Return</kbd> |

### Keyboard shortcuts for Windows

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

### Keyboard shortcuts for Linux

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

## Enabling or disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} from within your JetBrains IDE. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the JetBrains window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel on the right of the JetBrains window.

    ![Screenshot of the bottom panel in a JetBrains IDE. The {% data variables.product.prodname_copilot %} status icon is outlined in dark orange.](/assets/images/help/copilot/status-icon-jetbrains.png)

1. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing. To disable globally, click **Disable Completions**. Alternatively, click the language-specific button to disable {% data variables.product.prodname_copilot %} for the specified language.

    ![Screenshot of the menu to disable {% data variables.product.prodname_copilot %} globally or for the current language in a JetBrains IDE.](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Configuring advanced settings for {% data variables.product.prodname_copilot %}

You can manage advanced settings for {% data variables.product.prodname_copilot %} in your JetBrains IDE, such as how your IDE displays code completions, and which languages you want to enable or disable for {% data variables.product.prodname_copilot %}.

{% data reusables.copilot.jetbrains-settings %}
{% data reusables.copilot.jetbrains-languages-and-frameworks %}
1. Edit the settings according to your personal preferences.
   - To adjust the behavior and appearance of code suggestions, and whether to automatically check for updates, select or deselect the corresponding checkboxes.
   - If you have selected to receive automatic updates, you can choose whether to receive stable, but less frequent updates, or nightly updates, which may be less stable. Click the **Update channel** dropdown and select **Stable** for stable updates, or **Nightly** for nightly updates.

## Configuring language settings for {% data variables.product.prodname_copilot %}

You can specify which languages you want to activate or deactivate {% data variables.product.prodname_copilot %} for either in the IDE or by editing your `github-copilot.xml` file. If you make changes to language settings in your IDE, you can individually select and deselect the languages you want to activate or deactivate.

If you make changes to the language settings in your `github-copilot.xml` file, you can specify individual languages, or you can use a wildcard to activate or deactivate {% data variables.product.prodname_copilot %} for all languages. You can also specify exceptions, which will override the wild card setting for the specified languages. For example, you can deactivate {% data variables.product.prodname_copilot %} for all languages, except for Python and YAML. By default, when you install the {% data variables.product.prodname_copilot %} extension, {% data variables.product.prodname_copilot %} is activated for all languages.

### Configuring language settings in the IDE

{% data reusables.copilot.jetbrains-settings %}
{% data reusables.copilot.jetbrains-languages-and-frameworks %}
1. Under "Languages," select or deselect the checkboxes for the languages you want to activate or deactivate {% data variables.product.prodname_copilot %} for.
1. Click **Apply**, and then click **OK**.
1. Restart your JetBrains IDE for the changes to take effect.

### Editing your `github-copilot.xml` file

To configure language settings in the `github-copilot.xml` file, you must edit the `languageAllowList`. Every line you add to the `languageAllowList` must contain an entry key and a value. The entry key is the name of the language, or (`*`) for a wildcard. The value is either `true` or `false`. If the value is `true`, {% data variables.product.prodname_copilot %} is activated for the specified language. If the value is `false`, {% data variables.product.prodname_copilot %} is deactivated for the specified language.

The file is located in the following directory:

- **macOS**: `~/Library/Application Support/JetBrains/<product><version>/options/github-copilot.xml`
- **Windows**: `%APPDATA%\JetBrains\<product><version>\options\github-copilot.xml`
- **Linux**: `~/.config/JetBrains/<product><version>/options/github-copilot.xml`

For example, if you are using IntelliJ IDEA 2021.1 on macOS, the file is located at `~/Library/Application Support/JetBrains/IdeaIC2021.1/options/github-copilot.xml`.

The `github-copilot.xml` file might not be generated until you make a change to your default language configuration in the IDE's settings. If you cannot locate the file, you should try modifying the default language settings in the IDE. For more information, see "[Configuring language settings in the IDE](#configuring-language-settings-in-the-ide)."

Alternatively, you can create the file manually and save it in the location for your operating system listed above. For more information, see "[Example language configurations](#example-language-configurations)."

1. Open the `github-copilot.xml` file in a text editor.
1. Between the `<map>` tags, add the line or lines for the languages you want to activate or deactivate {% data variables.product.prodname_copilot %} for. For example, to deactivate {% data variables.product.prodname_copilot %} for all languages:

    ```xml copy
    <entry key="*" value="false" />
    ```

1. Save the changes to the `github-copilot.xml` file.
1. Restart your JetBrains IDE for the changes to take effect.

### Example language configurations

The default configuration of the `github-copilot.xml` file, which enables {% data variables.product.prodname_copilot %} for all languages is as follows:

```xml copy
<application>
  <component name="github-copilot">
    <languageAllowList>
      <map>
        <entry key="*" value="true" />
      </map>
    </languageAllowList>
  </component>
</application>
```

To deactivate {% data variables.product.prodname_copilot %} for all languages, the wildcard (`*`) value is changed to `false`:

```xml copy
<application>
  <component name="github-copilot">
    <languageAllowList>
      <map>
        <entry key="*" value="false" />
      </map>
    </languageAllowList>
  </component>
</application>
```

To specify languages individually, add an entry for each language you want to activate or deactivate {% data variables.product.prodname_copilot %} for. Specific language settings will override the wildcard. For example, to activate {% data variables.product.prodname_copilot %} for Python and YAML, and deactivate {% data variables.product.prodname_copilot %} for all other languages, add the following entries:

```xml copy
<application>
  <component name="github-copilot">
    <languageAllowList>
      <map>
        <entry key="*" value="false" />
        <entry key="Python" value="true" />
        <entry key="YAML" value="true" />
      </map>
    </languageAllowList>
  </component>
</application>
```

You can also add a configuration to make the `languageAllowList` readonly in the IDE's settings. This will prevent you from changing the language settings in the IDE. For example:

```xml copy
<application>
  <component name="github-copilot">
    <option name="languageAllowListReadOnly" value="true" />
    <languageAllowList>
      <map>
        <entry key="*" value="true" />
      </map>
    </languageAllowList>
  </component>
</application>
```

{% data reusables.copilot.dotcom-settings %}

{% endjetbrains %}

{% visualstudio %}

## About {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}

If you use {% data variables.product.prodname_vs %}, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within {% data variables.product.prodname_vs %} or on {% data variables.product.prodname_dotcom_the_website %}.

## Prerequisites

To configure {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=visualstudio)."

## Using or rebinding keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts in {% data variables.product.prodname_vs %} when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts in the Tools settings for {% data variables.product.prodname_vs %} using your preferred keyboard shortcuts for each specific command. You can search for each keyboard shortcut by its command name in the Keyboard Shortcuts editor.

### Using default keyboard shortcuts

| Action | Shortcut | Command name |
|:---|:---|:---|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>.</kbd>|Tools.Nextsuggestion|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>,</kbd>|Tools.Previoussuggestion|
|Trigger inline suggestion|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

### Rebinding keyboard shortcuts

If you don't want to use the default keyboard shortcuts in {% data variables.product.prodname_vs %} when using {% data variables.product.prodname_copilot %}, you can rebind the shortcuts in the Keyboard editor using your preferred keyboard shortcuts for each specific command.

1. In the {% data variables.product.prodname_vs %} menu bar, under **Tools**, click **Options**.

   ![Screenshot of the {% data variables.product.prodname_vs %} menu bar. The "Tools" menu is expanded, and the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)

1. In the "Options" dialog, under **Environment**, click **Keyboard**.
1. Under "Show commands containing:", search for the command you want to rebind.

   ![Screenshot of the "Show commands containing" search bar. The string "tools.next" is entered in the search field.](/assets/images/help/copilot/vs-show-commands-containing.png)

1. Under "Press shortcut keys," type the shortcut you want to assign to the command, then click **Assign**.

   ![Screenshot of the fields for entering a new keyboard shortcut assignment.](/assets/images/help/copilot/vs-rebind-shortcut.png)

{% data reusables.copilot.enabling-or-disabling-vs %}

## Configuring ReSharper for {% data variables.product.prodname_copilot %}

If you use ReSharper, {% data variables.product.prodname_copilot %} may work best when you configure ReSharper to use {% data variables.product.prodname_copilot %}'s native IntelliSense. For more information about ReSharper, see the [ReSharper documentation](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. In the {% data variables.product.prodname_vs %} menu bar, under **Tools**, click **Options**.
   ![Screenshot of {% data variables.product.prodname_vs %} menu bar. In the "Tools" menu, the "Options" item is highlighted with an orange outline.](/assets/images/help/copilot/vs-toolbar-options.png)
1. In the "Options" dialog, under **Environment**, click **IntelliSense** and then click **General**.
1. Under "General" select **{% data variables.product.prodname_vs %}** and then click **Save**.

{% data reusables.copilot.dotcom-settings %}

{% endvisualstudio %}

{% vscode %}

## About {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}

If you use {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within {% data variables.product.prodname_vscode %} or on {% data variables.product.prodname_dotcom_the_website %}.

## Prerequisites

To configure {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=vscode)."

## Keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts in {% data variables.product.prodname_vscode %} when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command. For more information, see "[Rebinding keyboard shortcuts](/copilot/configuring-github-copilot/configuring-github-copilot-in-your-environment?tool=vscode#rebinding-keyboard-shortcuts-1)."

You can search for each keyboard shortcut by command name in the Keyboard Shortcuts editor.

### Keyboard shortcuts for macOS

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>\\</kbd><br> |editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

### Keyboard shortcuts for Windows

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

### Keyboard shortcuts for Linux

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

## Rebinding keyboard shortcuts

If you don't want to use the default keyboard shortcuts in {% data variables.product.prodname_vscode %} when using {% data variables.product.prodname_copilot %}, you can rebind the shortcuts in the Keyboard Shortcuts editor using your preferred keyboard shortcuts for each specific command.

### Rebinding keyboard shortcuts for macOS

1. In the menu bar, click **Code**, click **Preferences**, then click **Keyboard Shortcuts**.

   ![Screenshot of the menu bar in {% data variables.product.prodname_vscode %}, with the "Code" menu expanded. In the "Preferences" sub-menu, the "Keyboard Shortcuts" option is highlighted in blue.](/assets/images/help/copilot/vsc-keyboard-shortcuts-mac.png)

1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
1. Next to the command you want to change, click the pencil icon.

   ![Screenshot of the "Keyboard Shortcuts" editor. Next to a command labeled "Accept Inline Suggestion," a pencil icon is highlighted with an orange outline.](/assets/images/help/copilot/vsc-edit-shortcuts-mac.png)

1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.

### Rebinding keyboard shortcuts for Windows

1. Click the **File** menu, click **Preferences**, then click **Keyboard Shortcuts**.

   ![Screenshot of the menu bar in {% data variables.product.prodname_vscode %}, with the "File" menu expanded. In the "Preferences" sub-menu, the "Keyboard Shortcuts" option is highlighted with an orange outline.](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)

1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
1. Next to the command you want to change, click the pencil icon.

   ![Screenshot of "Keyboard Shortcuts" editor. Next to a command labeled "Accept Inline Suggestion," a pencil icon is highlighted with an orange outline.](/assets/images/help/copilot/vsc-edit-shortcuts.png)

1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.

### Rebinding keyboard shortcuts for Linux

1. Click the **File** menu, click **Preferences**, then click **Keyboard Shortcuts**.

   ![Screenshot of the menu bar in {% data variables.product.prodname_vscode %}, with the "File" menu expanded. In the "Preferences" sub-menu, the "Keyboard Shortcuts" option is highlighted with an orange outline.](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)

1. In the "Keyboard Shortcuts" editor, search for the command name of the keyboard shortcut you want to change.
1. Next to the command you want to change, click the pencil icon.

   ![Screenshot of "Keyboard Shortcuts" editor. Next to a command labeled "Accept Inline Suggestion," a pencil icon is highlighted with an orange outline.](/assets/images/help/copilot/vsc-edit-shortcuts.png)

1. Type the keystrokes you want to use for the command, then press <kbd>Enter</kbd>/<kbd>Return</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Enabling or disabling inline suggestions

You can choose to enable or disable inline suggestions for {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}.

{% data reusables.copilot.vscode-settings %}
1. In the left-side panel of the settings tab, click **Extensions** and then select **{% data variables.product.prodname_copilot_short %}**.
1. Under "Inline Suggest:Enable," select or deselect the checkbox to enable or disable inline suggestions.

## Enabling or disabling {% data variables.product.prodname_copilot %} for specific languages

You can specify which languages you want to enable or disable {% data variables.product.prodname_copilot %} for.

1. From the {% data variables.product.prodname_vscode %}, click the **Extensions** tab, then navigate to the **Copilot** section. For more information, see "[Enabling and disabling inline suggestions](#enabling-and-disabling-inline-suggestions)."
1. Under "Enable or disable {% data variables.product.prodname_copilot_short %} for specified languages," click **Edit in settings.json**.
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

## Revoking {% data variables.product.prodname_copilot %} authorization

{% data variables.product.prodname_vscode %} retains authorization to use {% data variables.product.prodname_copilot %} through a particular {% data variables.product.prodname_dotcom %} account. If you want to prevent your {% data variables.product.prodname_dotcom %} account being used for {% data variables.product.prodname_copilot %} on a device you no longer have access to, you can revoke authorization and then go through the authorization process again. The device you previously used will not have the new authorization.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.access_applications %}
{% data reusables.user-settings.access_authorized_oauth_apps %}
1. Click the **...** next to **{% data variables.product.prodname_dotcom %} for {% data variables.product.prodname_vscode_shortname %}** and click **Revoke**.
{% data reusables.user-settings.access_authorized_github_apps %}
1. If the **{% data variables.product.prodname_copilot %}** plugin is listed, click **Revoke**.

After revoking authorization, {% data variables.product.prodname_vscode %} will be able to continue using {% data variables.product.prodname_copilot %} in a current session for a maximum of 30 minutes. After that time, you will need to reauthorize {% data variables.product.prodname_copilot %} for use in {% data variables.product.prodname_vscode %} again.

## Re-authorizing {% data variables.product.prodname_copilot %}

After you have revoked authorization, if you want to continue using {% data variables.product.prodname_copilot %}, you will need to complete the reauthorization process.

1. In the bottom left corner of {% data variables.product.prodname_vscode %}, click the **Accounts** icon, hover over your username, and click **Sign out**.

   ![Screenshot of the menu in {% data variables.product.prodname_vscode %}. The "Sign out" option is outlined in dark orange.](/assets/images/help/copilot/vsc-sign-out.png)

1. In the "{% data variables.product.prodname_vscode %}" pop-up, click **Sign Out**.

1. In the bottom left corner of {% data variables.product.prodname_vscode %}, click the **Accounts** icon, hover over your username, and click **Sign in with {% data variables.product.prodname_dotcom %} to use {% data variables.product.prodname_copilot %}**.

   ![Screenshot of the accounts menu in {% data variables.product.prodname_vscode %}. The "Sign in with {% data variables.product.prodname_dotcom %} to use {% data variables.product.prodname_copilot %} (1)" option is outlined in dark orange.](/assets/images/help/copilot/vsc-sign-in.png)

1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Continue**.
1. In the "Open {% data variables.product.prodname_vscode %}?" pop-up, click **Open {% data variables.product.prodname_vscode %}**.

{% data reusables.copilot.dotcom-settings %}

{% endvscode %}

{% vimneovim %}

## Configuring {% data variables.product.prodname_copilot %} in Vim/Neovim

For guidance on configuring {% data variables.product.prodname_copilot %} in Vim/Neovim, invoke the {% data variables.product.prodname_copilot %} documentation in Vim/Neovim by running the following command:

    :help copilot

## Rebinding keyboard shortcuts

You can rebind the keyboard shortcuts in Vim/Neovim when using {% data variables.product.prodname_copilot %} to use your preferred keyboard shortcuts for each specific command. For more information, see the [Map](https://neovim.io/doc/user/map.html) article in the Neovim documentation.

{% data reusables.copilot.dotcom-settings %}

{% endvimneovim %}
