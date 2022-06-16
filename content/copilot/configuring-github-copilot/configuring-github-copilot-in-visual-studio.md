---
title: Configuring GitHub Copilot in Visual Studio
intro: 'You can enable, configure, and disable {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: 'copilot'
shortTitle: Visual Studio
topics: 
  - Copilot
---

## About {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}

If you use {% data variables.product.prodname_vs %}, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within {% data variables.product.prodname_vs %} or on {% data variables.product.prodname_dotcom_the_website %}.

## Prerequisites

To configure {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[Getting started with {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio)."

## Keyboard shortcuts for {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts in {% data variables.product.prodname_vs %} when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts in the Tools settings for {% data variables.product.prodname_vs %} using your preferred keyboard shortcuts for each specific command. You can search for each keyboard shortcut by its command name in the Keyboard Shortcuts editor.

| Action | Shortcut | Command name |
|:---|:---|:---|
|Show next inline suggestion|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>]</kbd>|Tools.Nextsuggestion|
|Show previous inline suggestion|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>[</kbd>|Tools.Previoussuggestion|
|Trigger inline suggestion|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## Rebinding keyboard shortcuts

If you don't want to use the default keyboard shortcuts in {% data variables.product.prodname_vs %} when using {% data variables.product.prodname_copilot %}, you can rebind the shortcuts in the Keyboard editor using your preferred keyboard shortcuts for each specific command.

1. In the {% data variables.product.prodname_vs %} toolbar, under **Tools**, click **Options**.
   ![Screenshot of the Options option in the {% data variables.product.prodname_vs %} toolbar](/assets/images/help/copilot/vs-toolbar-options.png)
1. In the "Options" dialog, under **Environment**, click **Keyboard**.
   ![Screenshot of the Keyboard option in the "Options" dialog](/assets/images/help/copilot/vs-options-dialogue.png)
1. Under "Show commands containing:", search for the command you want to rebind.
   ![Screenshot of the show commands containing searchbar](/assets/images/help/copilot/vs-show-commands-containing.png)
1. Under "Press shortcut keys", type the shorcut you want to assign to the command, then click **Assign**.
   ![Screenshot of the keyboard shortcut assignment](/assets/images/help/copilot/vs-rebind-shortcut.png)

{% data reusables.copilot.enabling-or-disabling-vs %}

## Configuring ReSharper for {% data variables.product.prodname_copilot %}

If you use ReSharper, {% data variables.product.prodname_copilot %} may work best when you configure ReSharper to use {% data variables.product.prodname_copilot %}'s native IntelliSense. For more information about ReSharper, see the [ReSharper documentation](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. In the {% data variables.product.prodname_vs %} toolbar, under **Tools**, click **Options**.
   ![Screenshot of the Options option in the {% data variables.product.prodname_vs %} toolbar](/assets/images/help/copilot/vs-toolbar-options.png)
1. In the "Options" dialog, under **Environment**, click **IntelliSense** and then click **General**.
    ![Screenshot of the IntelliSense option in the "Options" dialog](/assets/images/help/copilot/vs-options-intellisense.png)
1. Under "General" select **Visual Studio** and then click **Save**.

{% data reusables.copilot.dotcom-settings %}
