---
title: Keyboard shortcuts for GitHub Copilot in the IDE
shortTitle: Keyboard shortcuts
intro: 'Find a list of keyboard shortcuts for {% data variables.product.prodname_copilot %} in the IDEs that support it.'
versions:
  feature: copilot
category:
  - Author and optimize with Copilot
topics:
  - Copilot
redirect_from:
  - /copilot/reference/keyboard-shortcuts-for-github-copilot-in-the-ide
contentType: reference
---

{% jetbrains %}

You can use the default keyboard shortcuts for inline suggestions in your JetBrains IDE when using {% data variables.product.prodname_copilot %}.

## Keyboard shortcuts for macOS

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Option (⌥) or Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Option (⌥)</kbd>+<kbd>\\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Option (⌥) or Alt</kbd>+<kbd>Return</kbd> |

## Keyboard shortcuts for Windows

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

## Keyboard shortcuts for Linux

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endjetbrains %}

{% visualstudio %}

You can use the default keyboard shortcuts for inline suggestions in {% data variables.product.prodname_vs %} when using {% data variables.product.prodname_copilot %}. You can search for each keyboard shortcut by its command name in the Keyboard Shortcuts editor.

| Action | Shortcut | Command name |
|:---|:---|:---|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>.</kbd>|Edit.NextSuggestion|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>,</kbd>|Edit.PreviousSuggestion|

{% endvisualstudio %}

{% vscode %}

You can use the default keyboard shortcuts for {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}. Search keyboard shortcuts by command name in the Keyboard Shortcuts editor.

## Keyboard shortcuts for macOS

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion| <kbd>Option (⌥)</kbd>+<kbd>\\</kbd><br> |editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

## Keyboard shortcuts for Windows

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

## Keyboard shortcuts for Linux

| Action | Shortcut | Command name |
|:---|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|editor.action.inlineSuggest.commit|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Show next inline suggestion|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Show previous inline suggestion|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Trigger inline suggestion|<kbd>Alt</kbd>+<kbd>\\</kbd>|editor.action.inlineSuggest.trigger|
|Open {% data variables.product.prodname_copilot %} (additional suggestions in separate pane)|<kbd>Ctrl</kbd>+<kbd>Enter</kbd>|github.copilot.generate|
|Toggle {% data variables.product.prodname_copilot %} on/off|_No default shortcut_|github.copilot.toggleCopilot|

{% endvscode %}

{% xcode %}

You can use the default keyboard shortcuts for inline suggestions in Xcode when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts to your preferred keyboard shortcuts for each specific command.

| Action | Shortcut |
|:---|:---|
|Accept the first line of a suggestion|<kbd>Tab</kbd>|
|View full suggestion|Hold <kbd>Option</kbd>|
|Accept full suggestion|<kbd>Option</kbd>+<kbd>Tab</kbd>|

{% endxcode %}

{% eclipse %}

You can use the default keyboard shortcuts for inline suggestions in Eclipse when using {% data variables.product.prodname_copilot %}.

| Action | Shortcut |
|:---|:---|
|Accept an inline suggestion|<kbd>Tab</kbd>|
|Accept next word of an inline suggestion|<kbd>Command</kbd>+<kbd>&rarr;</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>&rarr;</kbd> (Windows)|
|Dismiss an inline suggestion|<kbd>Esc</kbd>|
|Trigger inline suggestion|<kbd>Option (⌥)</kbd>+<kbd>Command</kbd>+<kbd>/</kbd> (Mac) or <kbd>Alt</kbd>+<kbd>Ctrl</kbd>+<kbd>/</kbd> (Windows)|

{% endeclipse %}

{% vimneovim %}

You can rebind the keyboard shortcuts in Vim/Neovim when using {% data variables.product.prodname_copilot %} to use your preferred keyboard shortcuts for each specific command. For more information, see the [Map](https://neovim.io/doc/user/map.html) article in the Neovim documentation.

{% endvimneovim %}
